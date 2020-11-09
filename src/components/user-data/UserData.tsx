import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectFullName, selectAvatarURL, selectNotifications } from '../../store/user-reducer';

const useUserData = () => {
  const fullName = useSelector(selectFullName);
  const avatarURL = useSelector(selectAvatarURL);
  const notifications = useSelector(selectNotifications);
  return { fullName, avatarURL, notifications };
};

const UserData = () => {
  const { notifications, avatarURL, fullName } = useUserData();

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <ButtonGroup variant="text" color="inherit" aria-label="outlined actions">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <Badge badgeContent={notifications} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </ButtonGroup>
      </Grid>
      <Grid item>
        <Avatar src={avatarURL} />
      </Grid>
      <Grid item>
        <Typography>{fullName}</Typography>
      </Grid>
      <Grid item>
        <IconButton color="inherit">
          <ExpandMoreIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default UserData;
