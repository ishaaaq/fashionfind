import hoodie3 from "../assets/hoodie3.jpg";
import hoodie2 from "../assets/hoodie2.jpg";
import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Inspirations = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      category: "Hoodies",
      title: "Inner peace",

      buttonLink: "/fashion",
      image: hoodie2,
    },
    {
      id: 2,
      category: "Hoodies",
      title: "Inner peace",

      buttonLink: "/fashion",
      image: hoodie3,
    },
    {
      id: 3,
      category: "Hoodies",
      title: "Inner peace",

      buttonLink: "/fashion",
      image: hoodie2,
    },
    {
      id: 4,
      category: "Hoodies",
      title: "Inner peace",

      buttonLink: "/fashion",
      image: hoodie2,
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (current) => setActiveIndex(current),
    nextArrow: (
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          zIndex: 10,
          transform: "translateY(-50%)",
          backgroundColor: "#B8860B",
          color: "white",
          "&:hover": { backgroundColor: "#9B7300" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    ),
    prevArrow: (
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          zIndex: 10,
          transform: "translateY(-50%)",
          backgroundColor: "#B8860B",
          color: "white",
          "&:hover": { backgroundColor: "#9B7300" },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
    ),
    appendDots: (dots) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        {dots}
      </Box>
    ),
    customPaging: (i) => (
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#B8860B",
          opacity: i === settings.activeIndex ? 1 : 0.4,
          mx: 0.5,
        }}
      />
    ),
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          py: 8,
          gap: 4,
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Fashion Style Inspirations
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: 500 }}
          >
            A variety of stunning prototypes have been created, inspiring the
            vision and aesthetic of FashionFind.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#B8860B",
              "&:hover": { backgroundColor: "#9B7300" },
            }}
          >
            Explore More
          </Button>
        </Box>

        {/* Right Slider */}
        <Box sx={{ flex: 2, position: "relative", overflow: "hidden" }}>
          <Slider {...settings} style={{ backgroundColor: "green" }}>
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              console.log(
                `Slide ${index} is ${isActive ? "active" : "inactive"}`
              ); // Debugging line

              return (
                <Box
                  key={slide.id}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 2,
                    margin: isActive ? "0 170px" : "0 -20px",
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{
                      width: isActive ? "300px" : "180px",
                      height: "auto",
                      objectFit: "cover",
                      transition: "all 0.3s ease",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      p: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      {slide.id} — {slide.category}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                      {slide.title}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Inspirations;
