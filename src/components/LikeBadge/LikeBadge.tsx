import React, { useState } from "react";
import { styles } from "./styles";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { ICat } from "../../types/catTypes";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Box } from "@mui/material";
import { addCatToFav, removeCatFromFav } from "../../store/userSlice";

const LikeBadge: React.FC<ICat> = (props) => {
  const [isHover, setHover] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const dispatch = useAppDispatch();
  const { favCats } = useAppSelector((state) => state.user);
  const favIds = favCats.map((cat) => cat.id);
  const handleClick = () => {
    if (favIds.includes(props.id)) {
      dispatch(removeCatFromFav(props.id));
    } else {
      setClicked(true);
      dispatch(addCatToFav(props));
    }
  };

  return (
    <Box
      onClick={(e) => handleClick()}
      onMouseEnter={(e) => {
        setHover(true);
      }}
      onMouseLeave={(e) => {
        setHover(false);
      }}
    >
      {favIds.includes(props.id) || isClicked || isHover ? (
        <Favorite color="error" sx={styles.badge} />
      ) : (
        <FavoriteBorder color="error" sx={styles.badge} />
      )}
    </Box>
  );
};

export default LikeBadge;
