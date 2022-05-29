import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { NavLink, Outlet } from "react-router-dom";
import { styles } from "./styles";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
import { useAppDispatch } from "../../hooks";
import { toggleDrawer } from "../../store/navbarSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleDrawer());
  };
  return (
    <>
      <AppBar sx={styles.header}>
        <Toolbar>
          <Box sx={styles.desc_container}>
            <Button color="inherit" sx={styles.btn}>
              <NavLink to="/" style={styles.link}>
                Все котики
              </NavLink>
            </Button>
            <Button color="inherit" sx={styles.btn}>
              <NavLink to="favourite" style={styles.link}>
                Любимые котики
              </NavLink>
            </Button>
          </Box>
          <Box sx={styles.mobile_container}>
            <Typography variant="h5">Котики</Typography>
            <IconButton size="large" color="inherit" onClick={handleClick}>
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <MobileDrawer />
      <Container sx={styles.wrapper}>
        <Outlet />
      </Container>
    </>
  );
};

export default Navbar;
