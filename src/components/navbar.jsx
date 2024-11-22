import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "@fontsource/raleway";
import {
    Badge,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    AppBar,
    Tooltip,
    MenuItem
} from '@mui/material';

const pages = ['Overview', 'Leads', 'Clients', 'Sales'];
const settings = ['Account', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [activeTitle, setActiveTitle] = useState("Overview");

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1e1e1e' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Raleway, sans-serif',
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            color: '#e18422',
                            textDecoration: 'none',
                        }}
                    >
                        GREENe
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
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
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography onClick={() => { setActiveTitle(page); }} sx={{
                                        textAlign: 'center', textTransform: 'initial', color: activeTitle === page ? "#e18422" : "black",
                                        fontWeight: activeTitle === page ? "bold" : "normal"
                                    }}>{page}</Typography>
                                </MenuItem>

                            ))}
                            <MenuItem onClick={handleCloseNavMenu}> <Typography sx={{ textAlign: 'center', textTransform: 'initial' }}>Email</Typography></MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}> <Typography sx={{ textAlign: 'center', textTransform: 'initial' }}>Notifications</Typography> </MenuItem>
                        </Menu>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                mt: 1.4,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'Raleway, sans-serif',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                color: '#e18422',
                                textDecoration: 'none',
                                fontSize: '20px'
                            }}
                        >
                            GREENe
                        </Typography>
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', display: 'flex', marginLeft: '70px' }, gap: '30px' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => {
                                    handleCloseNavMenu();
                                    setActiveTitle(page);
                                }}
                                sx={{
                                    my: 2, color: 'white', display: 'block', textTransform: 'initial', color: activeTitle === page ? "#e18422" : "white",
                                    fontWeight: activeTitle === page ? "bold" : "normal"
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex', display: 'flex' }, gap: { xs: '8px', md: '20px' } }}>
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', display: 'flex' }, gap: { md: '5px' } }}>
                            <Box>
                                <IconButton size="medium" aria-label="show 4 new mails" color="inherit" sx={{ display: { xs: 'none', sm: 'none', md: 'inline' } }}>
                                    <Badge sx={{ backgroundColor: '#404040', borderRadius: '30px', width: { md: '32px' }, height: { md: '32px' }, display: 'flex', justifyContent: 'center' }}>
                                        <MailIcon sx={{ mt: { md: 0.7 }, fontSize: 'large' }} />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="small"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                    sx={{ display: { xs: 'none', sm: 'none', md: 'inline' } }}
                                >
                                    <Badge sx={{ backgroundColor: '#404040', borderRadius: '30px', width: { md: '32px' }, height: { md: '32px' }, display: 'flex', justifyContent: 'center' }}>
                                        <NotificationsIcon sx={{ mt: { md: 0.7 }, fontSize: 'large' }} />
                                    </Badge>
                                </IconButton>
                            </Box>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Joe Jay" src="/static/images/avatar/2.jpg" sx={{ fontSize: 'medium', width: { md: '36px', xs: '28px', sm: '30px' }, height: { md: '36px', xs: '28px', sm: '30px' } }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}

                            </Menu>
                            <Box sx={{ display: 'block', mt: 1 }}>
                                <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex', display: 'flex' }, fontSize: '12px', fontWeight: 'bold' }}>
                                    Joy Jay
                                </Typography>
                                <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex', display: 'flex' }, fontSize: '8px' }}>
                                    Sales Manager
                                </Typography>
                            </Box>
                        </Box>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
