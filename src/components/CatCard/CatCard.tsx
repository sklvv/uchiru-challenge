import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { ICat } from "../../types/catTypes";
import { styles } from "./styles";
import LikeBadge from "../LikeBadge/LikeBadge";

const CatCard = ({ id, url }: ICat) => {
  const [isHover, setHover] = useState(false);
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={styles.cat_container}
        onMouseEnter={(e) => {
          setHover(true);
        }}
        onMouseLeave={(e) => {
          setHover(false);
        }}
      >
        <img alt="" src={url} style={styles.img} />
        {isHover && <LikeBadge id={id} url={url} />}
      </Box>
    </Grid>
  );
};

export default CatCard;
