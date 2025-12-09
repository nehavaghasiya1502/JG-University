import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import logo from "../assets/logo/jg-logo.png";
import './Header.css';

const pages = ['Programmes', 'Campus', 'Industry Linkage', 'Collaborations', 'Discover Us', 'Media', 'Career', 'Contact Us'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Desktop Logo */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img src={logo} alt="JG University" style={{ width: 80 }} />
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className="pages">
                    {page}
                  </Typography>

                </MenuItem>

              ))}

              {/* Mobile Search */}
              <MenuItem>
                <TextField size="small" placeholder="Search..." fullWidth />
              </MenuItem>

              {/* Mobile Admission */}
              <MenuItem>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#002984",
                    color: "white",
                    borderRadius: "20px",
                    textTransform: "none",
                    fontFamily: "Poppins",
                    py: 1,
                  }}
                >
                  Admission
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <img src={logo} alt="JG University" style={{ width: 40 }} />
          </Box>

          {/* Space push for menu to right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                className="pages"
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page} {/* CSS automatically capitalize karega */}
              </Button>
            ))}


          </Box>

          {/* Desktop Admission */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              className="admission-btn"
            >
              Admission
            </Button>

          </Box>

          {/* Desktop Search */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2, ml: 2 }}>
            <TextField
              size="small"
              placeholder="Search..."
              className="search-input"
              InputProps={{
                sx: {
                  borderRadius: "8px",
                  backgroundColor: "white"
                }
              }}
            />

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
