import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import { Button, FormControl, OutlinedInput, TextField } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const ColorButton = styled(Button)(({ theme }) => ({
    color: "#ffffff",
    backgroundColor: "#ED028C",
    textTransform: "capitalize",
    '&:hover': {
        color: "#ED028C",
        backgroundColor: "#ffffff",
    },
}));
const darkTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        common: {
            white: "#6F6F6F"
        }
    },
});
const menuIcons = [
    {
        id: 1,
        alt: "bookmark",
        src: "/assets/icons/bookmark.png"
    },
    {
        id: 2,
        alt: "bell",
        src: "/assets/icons/bell.png"
    },
    {
        id: 3,
        alt: "email",
        src: "/assets/icons/email.png"
    },
    {
        id: 4,
        alt: "user",
        src: "/assets/icons/user.png"
    }
]
export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            {
                menuIcons.map(({ id, alt, src }) => (
                    <MenuItem key={id}>
                        <IconButton
                            size="large"
                            key={id}
                        >
                            <Image
                                src={src}
                                alt={alt}
                                width="20"
                                height="20"
                                objectFit='contain'
                            />
                        </IconButton>
                        <p className='capitalize '>{alt}</p>
                    </MenuItem>
                ))
            }
            <MenuItem>
                <ColorButton variant="contained">Upload all related</ColorButton>
            </MenuItem>
        </Menu>
    );
    const greyTheme = createTheme({
        palette: {
            grey: {
                main: "#6F6F6F"
            }
        }
    });
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" style={{ background: 'white', color: "#6F6F6F" }}>
                    <Toolbar className='flex justify-between'>
                        <Image
                            src="/assets/logo.png"
                            alt="logo"
                            width="98px"
                            height="35px"
                            objectFit='contain'
                        />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }} className='flex'>
                            <Box
                                sx={{
                                    width: 120,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField
                                    id="outlined-select-currency-native"
                                    select
                                    label="Quick Access"
                                    SelectProps={{
                                        native: true,
                                    }}
                                    size="small"
                                    fullWidth
                                >
                                    <option value={1}>

                                    </option>
                                </TextField>
                            </Box>
                            <div className='mx-1'>
                                <FormControl sx={{ width: '25ch' }} size="small">
                                    <OutlinedInput placeholder="Please enter text" />
                                </FormControl>
                            </div>

                            <ThemeProvider theme={greyTheme}>
                                <Button variant="outlined" size="small" color="grey"><SearchIcon /></Button>
                            </ThemeProvider>

                        </Box>
                        <div className='flex justify-between'>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {
                                    menuIcons.map(({ id, alt, src }) => (
                                        <IconButton
                                            size="large"
                                            key={id}
                                        >
                                            <Image
                                                src={src}
                                                alt={alt}
                                                width="20"
                                                height="20"
                                                objectFit='contain'
                                            />
                                        </IconButton>
                                    ))
                                }

                                <Box>
                                    <ColorButton variant="contained">Upload all related</ColorButton>
                                </Box>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </ThemeProvider>
        </Box>
    );
}
