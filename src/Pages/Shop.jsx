import React, { useState } from "react";
import Header from "../components/Header";
import MiniHero from "../components/MiniHero";
import PaginationComponent from "../components/Pagination";
import FilterBar from "../components/FilterBar";
import ProductCard from "../components/ProductCard";
import { Box, Container, Grid2, Stack } from "@mui/material";
import { products } from "../data";
import FeatureSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sortBy === "priceHighToLow") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      <Header />
      <MiniHero page="Shop" />
      <FilterBar
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        sortBy={sortBy}
        setSortBy={setSortBy}
        totalItems={products.length}
        currentPage={currentPage}
      />
      <Container>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              padding: 2,
            }}
          >
            {paginatedProducts.map((product, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 calc(25% - 16px)", // 4 columns with spacing
                  boxSizing: "border-box",
                }}
              >
                <ProductCard product={product} />
              </Box>
            ))}
          </Box>

          <Box display="flex" justifyContent="center" padding={2}>
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </Box>
        </Box>
      </Container>
      <FeatureSection />
      <Footer />
    </>
  );
};

export default Shop;
