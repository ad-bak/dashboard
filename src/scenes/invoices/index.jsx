import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";

import Header from "../../components/Header";
import { useState } from "react";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelection = (newSelection) => {
    setSelectedRows(newSelection);
    console.log(newSelection);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },

    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]} sx={{ ml: "5px" }}>
          {params.value}
        </Typography>
      ),
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="Invoices" subtitle="List of Invoices" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #2a2a2a",
            borderRight: `1px solid ${colors.grey[700]}`,
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiCheckbox-root.Mui-checked": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {selectedRows.length > 0 ? (
          <GridToolbar
            selectedRows={selectedRows}
            density="compact"
            densityOptions={["compact", "standard"]}
          />
        ) : (
          ""
        )}
        <DataGrid
          onRowSelectionModelChange={(row) => handleSelection(row)}
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          width="100%"
        />
      </Box>
    </Box>
  );
};

export default Invoices;
