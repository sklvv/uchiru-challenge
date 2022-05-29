import { Drawer, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleDrawer } from "../../store/navbarSlice";
import { styles } from "./styles";
const MobileDrawer = () => {
  const { drawerIsOpen } = useAppSelector((state) => state.navbar);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleDrawer());
  };
  return (
    <Drawer open={drawerIsOpen} anchor="right" onClose={handleClick}>
      <Box sx={styles.drawer}>
        <Button color="inherit" onClick={handleClick}>
          <NavLink to="/" style={styles.link}>
            Все котики
          </NavLink>
        </Button>
        <Button color="inherit" sx={{ mt: "18px" }} onClick={handleClick}>
          <NavLink to="favourite" style={styles.link}>
            Любимые котики
          </NavLink>
        </Button>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
