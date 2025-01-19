import React from "react";
import { Box, Typography, Grid2, Stack } from "@mui/material";
import shirt from "../assets/shirt1.jpg";
import hoodie from "../assets/hoodie1.jpg";
import hoodie1trouser from "../assets/hoodie1trouser.jpg";
const categories = [
  { name: "Shirts", image: shirt },
  { name: "Hoodies", image: hoodie },
  { name: "Pants", image: hoodie1trouser },
];

const BrowseRange = () => (
  <Box sx={{ padding: "2rem 0", textAlign: "center" }}>
    <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
      Browse The Range
    </Typography>
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ marginBottom: "2rem" }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>

    <Stack direction="row" gap={2} sx={{ justifyContent: "center" }}>
      {categories.map((category) => (
        <Grid2 item xs={12} sm={4} key={category.name}>
          <Box>
            <img
              src={category.image}
              alt={category.name}
              style={{ width: "25rem", borderRadius: "8px" }}
            />
            <Typography variant="h6" sx={{ marginTop: "0.5rem" }}>
              {category.name}
            </Typography>
          </Box>
        </Grid2>
      ))}
    </Stack>
  </Box>
);

export default BrowseRange;
