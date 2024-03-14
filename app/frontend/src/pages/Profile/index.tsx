import { ChangeEvent, useContext, useState } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading/Loading';
import RedirectButtons from './RedirectButtons';
import ChangeProfileImg from './ChangeProfileImg';

import * as S from './Profile.styles';

import { FetchOptions } from '../../type';

export default function Profile() {
  const [profileImage, setProfileImage] = useState('');
  const [wantChange, setWantChange] = useState(false);
  const [imageUpdated, setImageUpdated] = useState(false);
  const [id, setId] = useState<number | undefined>(undefined);

  const { UPDATE_USER, profile, signUpDispatch } = useContext(UserInfoContext);
  const { data, isLoading, error } = profile;

  const updateImageURL = `http://localhost:3001/profile/${id}`;
  const options: FetchOptions = { method: 'PATCH', body: { profileImage } }
  const { handleFetch } = useFetch(updateImageURL, options);

  const handleWantChange = () => {
    setWantChange((prev) => !prev);
    setId(data.id);
  };

  const handleUpdate = () => {
    if (profileImage === '') {
      window.alert('Please insert a image URL!');
      return;
    }
    if (id) {
      handleFetch();
      signUpDispatch({ type: UPDATE_USER, key: 'profileImage', value: profileImage });
      setWantChange(false);
      setImageUpdated(true);
    }
  };

  if (imageUpdated) {
    setTimeout(() => {
      setImageUpdated(false);
      setProfileImage('');
    }, 1000);
  }

  return (
    <S.Main>
      { !isLoading && data.username ? (

        <>
          <p>{ `Username: ${data.username}` }</p>
          <p data-testid="profile-email">{ `E-mail: ${data.email}` }</p>
          <p>{ `Role: ${data.role}` }</p>
          <button onClick={ handleWantChange }>Change profile image</button>
        </>

      ) : null }

      { isLoading ? (

        <Loading />

      ) : null }

      { wantChange && !imageUpdated ? (

        <ChangeProfileImg 
          profileImage={ profileImage } 
          setProfileImage={ setProfileImage }
          handleUpdate={ handleUpdate }
        />

      ) : null }

      { !wantChange && imageUpdated ? (

        <p>Image updated!</p>

      ) : null }

      { !isLoading && data.username ? (

        <RedirectButtons />

      ) : null }

      { error ? (

        <h3> Profile not found </h3>

      ) : null }

    </S.Main>
  );
}
