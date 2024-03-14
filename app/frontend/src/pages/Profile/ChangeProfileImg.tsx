import { ChangeEvent } from 'react';

type ChangeProfileImgProps = {
  handleUpdate: () => void;
  setProfileImage: (value: React.SetStateAction<string>) => void;
  profileImage: string;
}

function ChangeProfileImg({ handleUpdate, setProfileImage, profileImage }: ChangeProfileImgProps) {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setProfileImage(value);
  };

  return (
    <div>
      <label>
        Profile Image URL
        <br />
        <input value={ profileImage } onChange={ handleChange } type="text" />
      </label>
      <button onClick={ handleUpdate }>update</button>
    </div>
  );
}

export default ChangeProfileImg;