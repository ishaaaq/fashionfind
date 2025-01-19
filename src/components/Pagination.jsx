import React from "react";
import { Pagination, PaginationItem } from "@mui/material";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          sx={{
            "&.Mui-selected": {
              bgcolor: "#b38728",
              color: "#fff",
            },
            "&:hover": {
              bgcolor: "#fdf4ed",
            },
          }}
        />
      )}
    />
  );
};

export default PaginationComponent;
