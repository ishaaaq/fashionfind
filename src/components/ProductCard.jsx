import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ProductCard = ({ product }) => (
  <Box
    sx={{
      position: "relative",
      maxWidth: "18rem",
      overflow: "hidden",

      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      "&:hover .overlay": {
        opacity: 1,
      },
    }}
  >
    <img
      src={product.image}
      alt={product.name}
      style={{ width: "100%", height: "auto" }}
    />
    {product.discount && (
      <Typography
        sx={{
          position: "absolute",
          top: "8px",
          left: "8px",
          background: "red",
          color: "#fff",
          padding: "0.3rem 0.5rem",
          borderRadius: "4px",
          fontSize: "0.8rem",
        }}
      >
        -{product.discount}%
      </Typography>
    )}
    {product.new && (
      <Typography
        sx={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "#D4A353",
          color: "#fff",
          padding: "0.3rem 0.5rem",
          borderRadius: "4px",
          fontSize: "0.8rem",
        }}
      >
        New
      </Typography>
    )}
    <Box
      className="overlay"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: "0.5rem" }}
      >
        Add to Cart
      </Button>
      <Button variant="outlined" color="secondary">
        Compare
      </Button>
    </Box>
    <Box sx={{ padding: "0.5rem" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {product.name}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        ₦{product.price}
      </Typography>
    </Box>
  </Box>
);

export default ProductCard;
