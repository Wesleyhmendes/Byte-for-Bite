import { useCallback, useContext, useEffect, useState } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading/Loading';
import RedirectButtons from './RedirectButtons';
import ChangeProfileImg from './ChangeProfileImg';

import * as S from './Profile.styles';
import profileIcon from '../../assets/Images/profileIcon.png';

import { FetchOptions } from '../../type';
import RecipesCounter from './RecipesCounter';
import Footer from '../../components/Footer';
import getProfileId from '../../utils/getProfileId';
import getUsername from '../../utils/getUsername';

export default function Profile() {
  const [profileImage, setProfileImage] = useState('');
  const [wantChange, setWantChange] = useState(false);
  const [imageUpdated, setImageUpdated] = useState(false);
  const [id, setId] = useState<number | undefined>(undefined);

  const { UPDATE_USER, profile, signUpDispatch } = useContext(UserInfoContext);
  const { data, isLoading, error, handleFetch: updateProfile } = profile;
  const userID = getProfileId(profile);
  const userName = getUsername(profile);
  const profileIMG = data ? data.profileImage : undefined;

  document.title = `${userName} | Byte for Bite`;

  const updateImageURL = `http://localhost:3001/profile/${id}`;
  const options: FetchOptions = { method: 'PATCH', body: { profileImage } };
  const { handleFetch } = useFetch(updateImageURL, options);

  const handleWantChange = () => {
    setWantChange((prev) => !prev);
    setId(userID);
  };

  const handleUpdate = () => {
    if (profileImage === '') {
      window.alert('Please insert a image URL!');
      return;
    }
    if (id !== 0) {
      handleFetch();
      signUpDispatch({ type: UPDATE_USER, key: 'profileImage', value: profileImage });
      setWantChange(false);
      setImageUpdated(true);
    }
  };

  const handleSynchronize = useCallback(() => {
    if (imageUpdated) {
      setTimeout(() => {
        updateProfile();
        setImageUpdated(false);
        setProfileImage('');
      }, 1000);
    }
  }, [imageUpdated, updateProfile]);

  useEffect(() => {
    handleSynchronize();
  }, [handleSynchronize]);

  return (
    <S.Main>
      {!isLoading && data.username ? (
        <S.UserInfoContainer>
          <button
            aria-label="changeImg-btn"
            onClick={ handleWantChange }
          >
            <img src={ profileIMG || profileIcon } alt="Profile" />
          </button>

          <ChangeProfileImg
            profileImage={ profileImage }
            setProfileImage={ setProfileImage }
            handleUpdate={ handleUpdate }
            wantChange={ wantChange }
            imageUpdated={ imageUpdated }
          />

          <h2>{data.username}</h2>
          <p>{data.email}</p>
        </S.UserInfoContainer>
      ) : null}

      {!isLoading && data.username ? (
        <RecipesCounter />
      ) : null}

      {!isLoading && data.username ? <RedirectButtons /> : null}

      {isLoading ? <Loading /> : null}

      {error || userID === 0 ? <h3> Profile not found </h3> : null}
      <Footer />
    </S.Main>
  );
}
