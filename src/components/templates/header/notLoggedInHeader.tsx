import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, IconButton, Menu, MenuItem } from '@mui/material';
import { useHeader } from '../../hooks/header/useHeader';

const HeaderSpace = styled('div')(() => ({
  marginBottom: '70px',
}));

type LocationProps = {
  state: {
    from: Location;
  };
};

export const NotLoggedInHeader: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { anchorElNav, handleOpenNavMenu, handleCloseNavMenu } = useHeader();
  const location = useLocation() as unknown as LocationProps;
  const from = location.state?.from?.pathname || '/';

  return (
    <HeaderSpace>
      <AppBar position="fixed" sx={{ zIndex: '1' }}>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <NavLink to="/" className="no-text-decoration white">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                ReactApp
              </Typography>
            </NavLink>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Typography width={200}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to="/" className="no-text-decoration black">
                      HOGE
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink
                      to="/problems"
                      className="no-text-decoration black"
                    >
                      問題一覧
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href={
                        (process.env.REACT_APP_SERVER_BASE_URL as string) + from
                      }
                      className="white"
                    >
                      ログイン
                    </a>
                  </MenuItem>
                </Typography>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <NavLink to="/" className="no-text-decoration white">
                ReactApp
              </NavLink>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <NavLink to="/" className="no-text-decoration white">
                <MenuItem onClick={handleCloseNavMenu}>HOGE</MenuItem>
              </NavLink>
              <NavLink to="/problems" className="no-text-decoration white">
                <MenuItem onClick={handleCloseNavMenu}>問題一覧</MenuItem>
              </NavLink>
              <MenuItem>
                <a
                  href={
                    (process.env.REACT_APP_SERVER_BASE_URL as string) + from
                  }
                  className="white"
                >
                  ログイン
                </a>
              </MenuItem>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderSpace>
  );
};
