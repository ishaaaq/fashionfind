import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const GetInTouch = () => {
  return (
    <Box
      sx={{
        padding: "4rem 10rem",
        backgroundColor: "#fff",
        color: "text.primary",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
      >
        Get In Touch With Us
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          marginBottom: "2rem",

          color: "text.secondary",
        }}
      >
        For More Information About Our Product & Services, Please Feel Free To
        Drop Us <br />
        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="space-between"
      >
        {/* Left Section */}
        <Stack spacing={4} flex={1}>
          <Stack direction="row" alignItems="flex-start" spacing={2}>
            <IconButton sx={{ color: "primary.main" }}>
              <LocationOnIcon />
            </IconButton>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Address
              </Typography>
              <Typography variant="body2">
                236 6th SE Avenue, New York NY10000, United States
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="flex-start" spacing={2}>
            <IconButton sx={{ color: "primary.main" }}>
              <PhoneIcon />
            </IconButton>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Phone
              </Typography>
              <Typography variant="body2">Mobile: (+84) 546-6789</Typography>
              <Typography variant="body2">Hotline: (+84) 456-6789</Typography>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="flex-start" spacing={2}>
            <IconButton sx={{ color: "primary.main" }}>
              <AccessTimeIcon />
            </IconButton>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Working Time
              </Typography>
              <Typography variant="body2">
                Monday-Friday: 9:00 - 22:00
              </Typography>
              <Typography variant="body2">
                Saturday-Sunday: 9:00 - 21:00
              </Typography>
            </Box>
          </Stack>
        </Stack>

        {/* Right Section */}
        <Box flex={1} component="form" noValidate>
          <Stack spacing={2}>
            <TextField label="Your name" fullWidth size="small" />
            <TextField label="Email address" fullWidth size="small" />
            <TextField
              label="Subject"
              fullWidth
              size="small"
              placeholder="This is an optional"
            />
            <TextField
              label="Message"
              fullWidth
              size="small"
              multiline
              rows={4}
              placeholder="Hi! I’d like to ask about..."
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                color: "#fff",
                textTransform: "none",
                ":hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default GetInTouch;
