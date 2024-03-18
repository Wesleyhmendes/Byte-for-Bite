import { ChangeEvent } from 'react';

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
      <div>
        <label>
          Profile Image URL
          <br />
          <input value={profileImage} onChange={handleChange} type="text" />
        </label>
        <button onClick={handleUpdate}>update</button>
      </div>
    ) : null
  );
}

export default ChangeProfileImg;