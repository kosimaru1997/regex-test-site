import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const HeaderSpace = styled('div')(() => ({
  paddingBottom: '50px',
}));

type LocationProps = {
  state: {
    from: Location;
  };
};

export const NotLoggedInHeader: FC = () => {
  const location = useLocation() as unknown as LocationProps;
  const from = location.state?.from?.pathname || '/';

  return (
    <HeaderSpace>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/" className="no-text-decoration white">
                ReactApp
              </NavLink>
            </Typography>
            <Button color="inherit">
              <a
                href={(process.env.REACT_APP_SERVER_BASE_URL as string) + from}
                className="white"
              >
                ログイン
              </a>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </HeaderSpace>
  );
};
