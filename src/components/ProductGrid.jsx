import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { products } from "../data";
const ProductGrid = () => (
  <Box sx={{ padding: "2rem 0" }}>
    <Typography
      variant="h4"
      sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}
    >
      Our Products
    </Typography>
    <Grid2 container spacing={2} sx={{ justifyContent: "center" }}>
      {products.slice(0, 4).map((product, index) => (
        <Grid2 item xs={12} sm={6} md={3} lg={3} key={index}>
          {" "}
          <ProductCard product={product} />
        </Grid2>
      ))}
    </Grid2>
    <Grid2 container spacing={2} sx={{ justifyContent: "center" }}>
      {products.slice(4, 8).map((product, index) => (
        <Grid2 item xs={12} sm={6} md={3} lg={3} key={index}>
          {" "}
          <ProductCard product={product} />
        </Grid2>
      ))}
    </Grid2>
  </Box>
);

export default ProductGrid;
