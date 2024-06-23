import * as styled from "./styles";
import * as config from "./config";
import React from "react";
import { Avatar, AvatarProps, MenuItem } from "@mui/material";
import Input, { IInput } from "../../UI/input/Input";
import useBoolean from "../../../hooks/useBoolean";
import Icon from "../../UI/Icon";

interface ISelectPhoto {
  inputProps?: Omit<IInput, "type">;
  avatarProps?: Partial<AvatarProps>;
  onBaseAvatarSelect: (files: FileList) => void;
}

const SelectProfilePhoto: React.FC<ISelectPhoto> = (props) => {
  const { avatarProps, inputProps, onBaseAvatarSelect } = props;
  const [imageSrc, setImageSrc] = React.useState(avatarProps?.src);
  const [isMenuOpened, toggleMenu] = useBoolean(false);
  const anchorElRef = React.useRef<any>(null);

  function setPhotoSrc(src: string) {
    toggleMenu();
    setImageSrc(src);
  }

  function onSelectBaseAvatar(src: string) {
    setPhotoSrc(src);
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(new File([src], "avatar"));
    onBaseAvatarSelect(dataTransfer.files);
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    inputProps?.onChange?.(e);
    const reader = new FileReader();
    reader.onload = function () {
      const imageSrc = reader.result as string;
      setPhotoSrc(imageSrc);
    };
    reader.readAsDataURL(e.target.files![0]);
  }

  return (
    <styled.Wrapper ref={anchorElRef}>
      <styled.Image
        src={imageSrc}
        onClick={toggleMenu}
        error={!!inputProps?.error}
        disabled={!!inputProps?.disabled}
        {...avatarProps}
      />

      <styled.Menu
        open={isMenuOpened}
        onClose={toggleMenu}
        anchorEl={anchorElRef.current}
      >
        {config.avatars.map((img) => (
          <MenuItem key={img} onClick={() => onSelectBaseAvatar(img)}>
            <Avatar src={img} variant="square" />
          </MenuItem>
        ))}

        <MenuItem component="label">
          <Input
            type="file"
            id="input"
            {...inputProps}
            sx={{ display: "none" }}
            onChange={onChangeHandler}
          />
          <Icon icon="add" color="warning" />
        </MenuItem>
      </styled.Menu>
    </styled.Wrapper>
  );
};

export default SelectProfilePhoto;
