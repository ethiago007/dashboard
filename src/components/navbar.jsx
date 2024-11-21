import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
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
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        GREENe
                    </Typography>



                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        GREENe
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', display: 'flex', marginLeft: '70px' }, gap: '30px' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'initial' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex', display: 'flex' }, gap: { xs: '8px', md: '20px' } }}>
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', display: 'flex' }, gap: { xs: '5px' } }}>
                            <Box>
                                <IconButton size="medium" aria-label="show 4 new mails" color="inherit">
                                    <Badge sx={{ backgroundColor: '#404040', borderRadius: '30px', width: { md: '32px', xs: '27px', sm: '30px' }, height: { md: '32px', xs: '27px', sm: '30px' }, display: 'flex', justifyContent: 'center', mt: { xs: 0.5, sm: 0.5 } }}>
                                        <MailIcon sx={{ mt: { md: 0.7, xs: 0.5, sm: 0.5 }, fontSize: 'large' }} />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="small"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge sx={{ backgroundColor: '#404040', borderRadius: '30px', width: { md: '32px', xs: '26px', sm: '30px' }, height: { md: '32px', xs: '26px', sm: '30px' }, display: 'flex', justifyContent: 'center', mt: { xs: 0.5, sm: 0.5 } }}>
                                        <NotificationsIcon sx={{ mt: { md: 0.7, xs: 0.4, sm: 0.4 }, fontSize: 'large' }} />
                                    </Badge>
                                </IconButton>
                            </Box>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Joe Jay" src="/static/images/avatar/2.jpg" sx={{ fontSize: 'medium', width: { md: '36px', xs: '28px', sm: '30px' }, height: { md: '36px', xs: '28px', sm: '30px' }, mb: { xs: 0.4, sm: 0.4 } }} />
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

                        </Box>
                        <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex', display: 'flex' } }}>
                            LOL
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
                                <MenuIcon sx={{ mb: 0.7}} />
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
                                        <Typography sx={{ textAlign: 'center', textTransform: 'initial' }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
