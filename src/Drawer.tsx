import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Badge } from '@mui/material';
import { useSelector} from "react-redux";

import { LikeDataReducer } from './Router/reducer';
import {NotificationReducer} from './Router/reducer'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { RootState } from './Router/store';

const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});


// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


interface AppBarProps extends MuiAppBarProps{
  open?:boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  //  ({ theme, open }) => ({
  //    width: drawerWidth,
  //    flexShrink: 0,
  //    whiteSpace: 'nowrap',
  //    boxSizing: 'border-box',
  //    ...(open && {
  //      ...openedMixin(theme),
  //      '& .MuiDrawer-paper': openedMixin(theme),
  //    }),
  //    ...(!open && {
  //      ...closedMixin(theme),
  //      '& .MuiDrawer-paper': closedMixin(theme),
  //    }),
  //  }),
// );

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



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
      width: '60ch',
    },
  },
}));


export default function MiniDrawer({searchHandler,searchTerm}:any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const gotoemp = () => {
    navigate('/addemp')
  }
  const gotodash =() =>{
    navigate('/dashboard')
  }

  const result = useSelector ((state:RootState)=>state.LikeDataReducer)
  // console.log(result)

  const result1 = useSelector ((state:RootState)=>state.NotificationReducer)
  // console.log(result1)
  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  
  const handleProfileMenuOpen = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = () => {
    setMobileMoreAnchorEl(null);
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
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          {/* <Badge badgeContent={4} color="error"> */}
            {/* <ShoppingCartOutlinedIcon /> */}
            {/* <ShoppingCartOutlinedIcon /> */}
          {/* </Badge> */}
        </IconButton>
        {/* <p>Services</p> */}
        <SettingsIcon/>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
        </IconButton>
        {/* <p >Profile Likes</p> */}
        <FavoriteIcon/>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
    
        </IconButton>
        {/* <p>Notifications</p> */}
        <NotificationsActiveIcon/>
      </MenuItem>
    </Menu>
  );
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              // marginRight: 5,
              marginRight: 2,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Employee Management
          </Typography>
          <div style={{width:'40%',height:'40px',border:'0px solid black'}}>

          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ display: { xs: 'flex', sm: 'flex', md: 'block', lg: 'block' } }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={searchHandler} 
              type="text"
              sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex' } }} 
            />
          </Search>

          </div>
          <div style={{width:'300px',height:'50px',border:'0px solid black',position:'absolute',left:'1150px',top:'25px',display:'flex',flexDirection:'row'}}>
            <div style={{width:'200px',border:'0px solid red'}}>
            <SettingsIcon/>
            </div>

            
        
            <div style={{width:'200px',border:'0px solid red'}}>
              <Badge badgeContent={4} color="secondary">
                <FavoriteIcon/>
                 </Badge>
                 </div>
           
            
            <div style={{width:'200px',border:'0px solid red'}}>
            <Badge badgeContent={5} color="secondary">
              <NotificationsActiveIcon/>
              </Badge></div>

          </div>
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
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {['Employees', 'Add Employee', 'Trash'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <PeopleIcon /> : <PersonAddIcon onClick={addemp}/>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))} */}
          <ListItem>
            
            <ListItemIcon
                 sx={{
                   minWidth: 0,
                   mr: open ? 3 : 'auto',
                   justifyContent: 'center',
                   color:'black',
                   marginLeft:'5px'
                 }}
               >
                 <PeopleIcon onClick={gotodash}/>
                 </ListItemIcon>
                 <ListItemText primary='Employees' style={{marginLeft:'24px'}}/>
           </ListItem>
           <ListItem>
            
            <ListItemIcon
                 sx={{
                   minWidth: 0,
                   mr: open ? 3 : 'auto',
                   justifyContent: 'center',
                   color:'black',
                   marginLeft:'5px'
                 }}
               >
                 <PersonAddIcon onClick={gotoemp}/>
                 </ListItemIcon>
                 <ListItemText primary='Add Employee' style={{marginLeft:'24px'}}/>
           </ListItem>
           {/* <ListItem>
            
            <ListItemIcon
                 sx={{
                   minWidth: 0,
                   mr: open ? 3 : 'auto',
                   justifyContent: 'center',
                   color:'black',
                   marginLeft:'5px'
                 }}
               >
                 <DeleteOutlineIcon />
                 </ListItemIcon>
                 <ListItemText primary='Trash' style={{marginLeft:'24px'}}/>
           </ListItem>     */}
        </List>
        {/* <Divider /> */}
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}