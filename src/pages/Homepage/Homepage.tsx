import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCats } from "../../store/userSlice";
import { Box, Button, Grid } from "@mui/material";
import CatCard from "../../components/CatCard/CatCard";
const Homepage = () => {
  const dispatch = useAppDispatch();
  const { allCats } = useAppSelector((state) => state.user);
  useEffect(() => {
    dispatch(getCats());
  }, []);
  const handleClick = () => {
    dispatch(getCats());
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Grid container spacing={1}>
        {allCats.map((cat) => (
          <CatCard id={cat.id} url={cat.url} />
        ))}
      </Grid>
      <Button onClick={handleClick}>Загрузить еще котиков</Button>
    </Box>
  );
};

export default Homepage;
