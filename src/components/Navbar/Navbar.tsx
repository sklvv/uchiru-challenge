import React from "react";
import { Container, AppBar, Toolbar, Button, Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { styles } from "./styles";

const Navbar = () => {
  return (
    <>
      <AppBar sx={styles.header}>
        <Toolbar>
          <Box sx={styles.btn_container}>
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
        </Toolbar>
      </AppBar>

      <Container sx={styles.wrapper}>
        <Outlet />
      </Container>
    </>
  );
};

export default Navbar;
