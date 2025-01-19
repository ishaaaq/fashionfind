import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const MiniHero = ({ page }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        borderRadius: "8px",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("../../public/rectangle1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "white",
          filter: "brightness(0.9)", // Adjust brightness for overlay effect
          zIndex: -1,
        },
      }}
    >
      <Typography sx={{ fontWeight: 500, fontSize: "48px" }}>{page}</Typography>
      <Stack direction={"row"} gap={1} sx={{}}>
        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>Home</Typography>
        <NavigateNextIcon />
        <Typography sx={{ fontWeight: 360, fontSize: "16px" }}>
          {page}
        </Typography>
      </Stack>
    </Box>
  );
};

export default MiniHero;
