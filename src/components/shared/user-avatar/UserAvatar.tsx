import * as config from "./config";
import { Avatar, Divider } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import useBoolean from "../../../hooks/useBoolean";
import { useRef } from "react";
import Icon from "../../UI/Icon";
import { getUserSlice } from "../../../store/Store";
import { Link } from "react-router-dom";
import UserAPI from "../../../API/User";
import { avatarImages } from "../../../assets/images/avatars/asset";

const UserAvatar = () => {
  const { user } = getUserSlice();
  const avatarElRef = useRef<HTMLDivElement>(null);
  const [menuOpened, toggleMenu] = useBoolean(false);

  const src = user
    ? user.details?.photoURL || avatarImages[user.base.gender]
    : undefined;

  return (
    <>
      <Avatar ref={avatarElRef} onClick={toggleMenu} src={src} />

      <Menu
        open={menuOpened}
        onClose={toggleMenu}
        anchorEl={avatarElRef.current}
      >
        {config.buttons.map(({ icon, href, text }) => (
          <Link to={href}>
            <MenuItem>
              <ListItemIcon>
                <Icon icon={icon} />
              </ListItemIcon>
              <ListItemText>{text}</ListItemText>
            </MenuItem>
          </Link>
        ))}

        <Divider />

        <MenuItem onClick={UserAPI.logoutUser}>
          <ListItemIcon>
            <Icon icon="logout" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserAvatar;
