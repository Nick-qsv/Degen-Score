import React from "react";
import Box from "@mui/material/Box";

export const Header = () => {
  return (
    <Box
      component={"h1"}
      sx={{ fontFamily:"Monaco", marginTop: 7, display: "flex", alignItems: "center", justifyContent: "center",color:"white" }}
    >
      How much of a DOTSAMA Degenerate are you?
    </Box>
  );
};
