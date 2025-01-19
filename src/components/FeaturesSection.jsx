import React from "react";
import { Grid, Box, Typography, Grid2 } from "@mui/material";
import { Trophy, ShieldCheck, Truck, Headset } from "phosphor-react"; // Icons from Phosphor-React

const features = [
  {
    icon: <Trophy size={48} weight="light" />,
    title: "High Quality",
    description: "Sewn with top fabrics",
  },
  {
    icon: <ShieldCheck size={48} weight="light" />,
    title: "Warranty Protection",
    description: "Over 1 week",
  },
  {
    icon: <Truck size={48} weight="light" />,
    title: "Free Shipping",
    description: "Order over 3 $",
  },
  {
    icon: <Headset size={48} weight="light" />,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const FeatureSection = () => {
  return (
    <Box sx={{ bgcolor: "#fef7f1", py: 4, px: 2 }}>
      <Grid2 container spacing={20} justifyContent="center">
        {features.map((feature, index) => (
          <Grid2
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box color="#000">{feature.icon}</Box>
            <Typography variant="h6" fontWeight="bold" mt={2}>
              {feature.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={1}>
              {feature.description}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default FeatureSection;
