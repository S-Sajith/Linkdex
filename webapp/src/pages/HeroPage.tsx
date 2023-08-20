import { Box, Chip, Link, Paper } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { rows } from "../assets/data";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const tagColors: { [tag: string]: string } = {
  roadmap: "#261B1C",
  java: "#29462C",
  frontend: "#C8272A",
  practice: "#E3C0D3",
  "interview prep": "#A8BA9A",
  "design inspo": "#D5BF86",
  learn: "#D1CCDC",
  database: "#8C4B47", // You can choose another color here
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "websiteName",
    headerName: "Website Name",
    width: 180,
  },
  {
    field: "websiteLink",
    headerName: "Link",
    width: 200,
    renderCell: (params) => (
      <Link href={params.value} target="_blank" rel="noopener noreferrer">
        {params.value}
      </Link>
    ),
  },
  {
    field: "description",
    headerName: "Description",
    width: 600,
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 400,
    renderCell: (params) => (
      <Box>
        {params.value.split(", ").map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            style={{ backgroundColor: tagColors[tag.toLowerCase()] || "#000" }} // Default to black if tag color is not found
            sx={{
              margin: 1,
              color: "white",
              textTransform: "capitalize",
            }}
          />
        ))}
      </Box>
    ),
  },
];

const HeroPage = () => {
  return (
    <Paper sx={{ margin: "3vh" }} elevation={3}>
      <Box sx={{ height: "75vh" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          disableRowSelectionOnClick
          sx={{
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
              width: "0.4em",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
        />
      </Box>
    </Paper>
  );
};

export default HeroPage;
