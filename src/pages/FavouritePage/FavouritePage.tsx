import React from "react";
import { useAppSelector } from "../../hooks";
import { Grid } from "@mui/material";
import CatCard from "../../components/CatCard/CatCard";

const FavouritePage = () => {
  const { favCats } = useAppSelector((state) => state.user);
  return (
    <Grid container spacing={1}>
      {favCats.map((cat) => (
        <CatCard id={cat.id} url={cat.url} />
      ))}
    </Grid>
  );
};

export default FavouritePage;
