import { ChangeEvent } from 'react';
import * as S from './Profile.styles'

type ChangeProfileImgProps = {
  handleUpdate: () => void;
  setProfileImage: (value: React.SetStateAction<string>) => void;
  profileImage: string;
  wantChange: boolean;
  imageUpdated: boolean;
}

function ChangeProfileImg({
  handleUpdate,
  setProfileImage,
  profileImage,
  wantChange,
  imageUpdated,
}: ChangeProfileImgProps) {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setProfileImage(value);
  };

  return (
    wantChange && !imageUpdated ? (
      <S.ChangeImage>
        <label>
          Image URL
          <br />
          <input value={profileImage} onChange={handleChange} type="text" />
        </label>
        <button onClick={handleUpdate}>Update</button>
      </S.ChangeImage>
    ) : null
  );
}

export default ChangeProfileImg;