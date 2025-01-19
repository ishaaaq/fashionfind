import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => (
  <Box
    sx={{
      backgroundImage: "url('/path-to-hero-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "3rem",
      textAlign: "center",
    }}
  >
    <Typography variant="subtitle1" color="text.secondary">
      Redefine Your Style on Campus
    </Typography>
    <Typography
      variant="h3"
      color="text.primary"
      sx={{ fontWeight: "bold", margin: "1rem 0" }}
    >
      Discover Unique Collection
    </Typography>
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ marginBottom: "1.5rem" }}
    >
      Discover trendy, student-friendly fashion curated from independent
      designers.
    </Typography>
    <Button variant="contained" color="primary" size="large">
      Buy Now
    </Button>
  </Box>
);

export default HeroSection;
