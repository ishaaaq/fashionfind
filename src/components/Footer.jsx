import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid2,
  styled,
  Stack,
} from "@mui/material";

const Text = styled("Typography")({
  color: "#9F9F9F",
  fontWeight: 500,
  fontSize: "16px",
});
const LinkText = styled("Typography")({
  color: "black",
  fontWeight: 500,
  fontSize: "16px",
  marginTop: "55px",
  cursor: "pointer",
});

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f9f9f9",
        padding: "2rem 1rem",
        borderTop: "1px solid #e0e0e0",
        color: "#000",
        fontSize: "14px",
        paddingLeft: "100px",
      }}
    >
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Grid2 xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            FashionFind.
          </Typography>
          <Text sx={{ lineHeight: 1.6 }}>
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </Text>
        </Grid2>

        <Stack direction={"column"}>
          <Text
            variant="subtitle1"
            sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
          >
            Links
          </Text>
          <LinkText>Home</LinkText>
          <LinkText>Shop</LinkText>
          <LinkText>About</LinkText>
          <LinkText>Contact</LinkText>
        </Stack>

        <Stack direction={"column"}>
          <Text
            variant="subtitle1"
            sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
          >
            Help
          </Text>
          <LinkText>Payment Options</LinkText>
          <LinkText>Returns</LinkText>
          <LinkText>Privacy Policies</LinkText>
        </Stack>

        <Stack direction={"column"}>
          <Text sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
            Newsletter
          </Text>
          <Box display="flex" alignItems="center">
            <TextField
              placeholder="Enter Your Email Address"
              variant="outlined"
              size="small"
              sx={{
                flexGrow: 1,
                marginRight: "0.5rem",
                backgroundColor: "#fff",
              }}
            />
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#000",
                color: "#fff",
                ":hover": { backgroundColor: "#333" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Stack>
      </Stack>

      <Box
        sx={{
          borderTop: "1px solid #e0e0e0",
          marginTop: "2rem",
          paddingTop: "1rem",
          textAlign: "center",
          fontSize: "13px",
        }}
      >
        <Typography variant="body2">
          2024 fashionfind. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
