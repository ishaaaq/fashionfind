import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

const FilterBar = ({
  itemsPerPage,
  setItemsPerPage,
  sortBy,
  setSortBy,
  totalItems,
  currentPage,
}) => {
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
      bgcolor="#fdf4ed"
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Button
          variant="text"
          startIcon={<i className="fa fa-filter" />}
          sx={{ color: "black" }}
        >
          Filter
        </Button>
        <Button variant="text">
          <i className="fa fa-th-large" />
        </Button>
        <Button variant="text">
          <i className="fa fa-bars" />
        </Button>
      </Box>
      <Typography>
        Showing {startItem}–{endItem} of {totalItems} results
      </Typography>
      <Box display="flex" alignItems="center" gap={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography>Show</Typography>
          <TextField
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            type="number"
            size="small"
            sx={{ width: 60 }}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography>Sort by</Typography>
          <Select value={sortBy} onChange={handleSortByChange} size="small">
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
            <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterBar;
