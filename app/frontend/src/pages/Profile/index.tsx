import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';

export default function Profile() {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState('');
  const [wantChange, setWantChange] = useState(false);
  const [imageUpdated, setImageUpdated] = useState(false);
  const [id, setId] = useState<number | undefined>(undefined);

  const { UPDATE_USER, profile, signUpDispatch } = useContext(UserInfoContext);
  const { data, isLoading, error } = profile;

  const updateImageURL = `http://localhost:3001/profile/${id}`;
  const {
    handleFetch,
  } = useFetch(updateImageURL, { method: 'PATCH', body: { profileImage } });

  const handleWantChange = () => {
    setWantChange((prev) => !prev);
    setId(data.id);
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setProfileImage(value);
  };

  const handleUpdate = async () => {
    if (profileImage === '') {
      window.alert('Please insert a image URL!');
      return;
    }
    if (id) {
      await handleFetch();
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
    <main>
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

        <div>
          <label>
            Profile Image URL
            <br />
            <input
              value={ profileImage }
              onChange={ handleChange }
              type="text"
            />
          </label>
          <button
            onClick={ handleUpdate }
          >
            update
          </button>
        </div>

      ) : null }

      { !wantChange && imageUpdated ? (

        <p>Image updated!</p>

      ) : null }

      { !isLoading && data.username ? (

        <>
          <button
            data-testid="profile-done-btn"
            onClick={ () => navigate('/done-recipes') }
          >
            Done Recipes
          </button>
          <button
            data-testid="profile-favorite-btn"
            onClick={ () => navigate('/favorite-recipes') }
          >
            Favorite Recipes
          </button>
          <button
            data-testid="profile-logout-btn"
            onClick={ () => {
              navigate('/');
              localStorage.clear();
            } }
          >
            Logout
          </button>
        </>

      ) : null }

      { error ? (

        <h3> Profile not found </h3>

      ) : null }

    </main>
  );
}
