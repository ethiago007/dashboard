import React, { useState, useEffect } from 'react';
import {
    Typography,
    Table,
    Button,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Accordion,
    AccordionActions,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    Divider,
    Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
{/* <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                            <div style={{ width: 300, padding: "20px" }}>
                                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                    Edit Client Details
                                </Typography>
                                <TextField
                                    label="Name"
                                    value={formData.name || ""}
                                    fullWidth
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    label="Address"
                                    value={formData.address || ""}
                                    fullWidth
                                    onChange={(e) => handleInputChange("address", e.target.value)}
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    label="Status"
                                    value={formData.status || ""}
                                    fullWidth
                                    onChange={(e) => handleInputChange("status", e.target.value)}
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    label="Email"
                                    value={formData.email || ""}
                                    fullWidth
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    sx={{ marginBottom: 2 }}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={handleSave}
                                >
                                    Save
                                </Button>
                                
                            </div>
                        </Drawer> */}


function createData(name, calories, fat, carbs, protein, oil) {
    return { name, calories, fat, carbs, protein, oil };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 1.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 1.0),
    createData('Eclair', 262, 16.0, 24, 6.0, 1.0),
    createData('Cupcake', 305, 3.7, 67, 4.3, 1.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 10),
];

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [filter, setFilter] = useState('All');



    useEffect(() => {
        if (filter === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter((project) => project.status === filter));
        }
    }, [filter, projects]);

}


export default function BasicTable() {
    return (
        <>
            <br />
            {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: { md: '32px', sm: '20px', xs: '20px' } }}>
                    Recent Projects
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative' }}>
                    <div style={{ width: '100px', position: 'relative' }}> 
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>All</Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                style={{
                                    position: 'absolute', // Dropdown as overlay
                                    top: '100%', // Position below accordion
                                    left: 0,
                                    zIndex: 10,
                                    background: 'white',
                                    boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                                    padding: '10px',
                                    width: '100%',
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
                                    <Button sx={{ textTransform: 'initial', justifyContent: 'flex-start' }} onClick={() => setFilter('All')}>All</Button>
                                    <Button sx={{ textTransform: 'initial', justifyContent: 'flex-start' }} onClick={() => setFilter('On-Going')}>On-Going</Button>
                                    <Button sx={{ textTransform: 'initial', justifyContent: 'flex-start' }} onClick={() => setFilter('Finished')}>Finished</Button>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <Button sx={{ backgroundColor: '#FD9301', color: 'white', textTransform: 'inherit', height: '48px', padding: '20px' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L7.29289 6.29289C6.90237 6.68342 6.90237 7.31658 7.29289 7.70711C7.68342 8.09763 8.31658 8.09763 8.70711 7.70711L11 5.41421V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V5.41421L15.2929 7.70711C15.6834 8.09763 16.3166 8.09763 16.7071 7.70711C17.0976 7.31658 17.0976 6.68342 16.7071 6.29289L12.7071 2.29289Z" fill="white" />
                            <path d="M4 17.5C4 16.9477 3.55228 16.5 3 16.5C2.44772 16.5 2 16.9477 2 17.5V19C2 21.2091 3.79086 23 6 23H18C20.2091 23 22 21.2091 22 19V17.5C22 16.9477 21.5523 16.5 21 16.5C20.4477 16.5 20 16.9477 20 17.5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V17.5Z" fill="white" />
                        </svg>
                        &nbsp; Export
                    </Button>
                </Box>
            </div> */}
             {/* <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { md: "24px", sm: "20px", xs: "18px" },
        }}
      >
        Recent Projects
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}>
        
        <Box sx={{ position: "relative" }}>
          <Accordion
            sx={{
              width: "120px",
              boxShadow: "none",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0, minHeight: "unset" }}
            >
              <Typography>All</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                zIndex: 10,
                background: "white",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "100%", // Ensure it aligns with the parent width
              }}
            >
              <Button
                sx={{ textTransform: "none", justifyContent: "flex-start" }}
                onClick={() => handleFilter("All")}
              >
                All
              </Button>
              <Button
                sx={{ textTransform: "none", justifyContent: "flex-start" }}
                onClick={() => handleFilter("On-Going")}
              >
                On-Going
              </Button>
              <Button
                sx={{ textTransform: "none", justifyContent: "flex-start" }}
                onClick={() => handleFilter("Completed")}
              >
                Completed
              </Button>
            </AccordionDetails>
          </Accordion>
        </Box>

       
        <Button
         
          sx={{
            backgroundColor: "#FD9301",
            color: "white",
            textTransform: "none",
            height: "40px",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            "&:hover": { backgroundColor: "#E08200" },
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "8px" }}
          >
            <path
              d="M12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L7.29289 6.29289C6.90237 6.68342 6.90237 7.31658 7.29289 7.70711C7.68342 8.09763 8.31658 8.09763 8.70711 7.70711L11 5.41421V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V5.41421L15.2929 7.70711C15.6834 8.09763 16.3166 8.09763 16.7071 7.70711C17.0976 7.31658 17.0976 6.68342 16.7071 6.29289L12.7071 2.29289Z"
              fill="white"
            />
            <path
              d="M4 17.5C4 16.9477 3.55228 16.5 3 16.5C2.44772 16.5 2 16.9477 2 17.5V19C2 21.2091 3.79086 23 6 23H18C20.2091 23 22 21.2091 22 19V17.5C22 16.9477 21.5523 16.5 21 16.5C20.4477 16.5 20 16.9477 20 17.5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V17.5Z"
              fill="white"
            />
          </svg>
          Export
        </Button>
      </Box>
    </Box> */}
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            <TableCell align="right">Oil&nbsp;(L)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (<TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            <TableCell align="right">{row.oil}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

import React, { useState } from "react";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Divider
} from "@mui/material";

const RecentProjects = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All"); 

    const rows = [
        { name: "Ice cream", calories: 200, fat: 10, carbs: 20, protein: 5, oil: 0.5 },
        { name: "Cake", calories: 300, fat: 15, carbs: 40, protein: 6, oil: 0.7 },
        
    ];

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropdownVisible(false); 
    };

    return (
        <div>
            <br />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                }}
            >
                <Typography sx={{ fontWeight: 'bold', fontSize: { md: '32px', sm: '20px', xs: '20px' } }}>
                    Recent Projects
                </Typography>

                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ position: "relative" }}>
                        <button
                            onClick={toggleDropdown}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "8px 12px",
                                textAlign: "left",
                                background: "none",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                cursor: "pointer",
                                color: "#333",
                                width: "150px",
                            }}
                        >
                            {selectedOption}
                            <svg
                                style={{
                                    marginLeft: "8px",
                                    transform: dropdownVisible ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "transform 0.3s ease",
                                }}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 15L7 10H17L12 15Z" fill="#333" />
                            </svg>
                        </button>
                        {dropdownVisible && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "40px",
                                    left: 0,
                                    width: "150px",
                                    backgroundColor: "#fff",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    transition: "opacity 0.3s ease, transform 0.3s ease",
                                    zIndex: 100,
                                    transform: dropdownVisible ? "scaleY(1)" : "scaleY(0)",
                                    transformOrigin: "top",
                                    opacity: dropdownVisible ? 1 : 0,
                                }}
                            >
                                <button
                                    onClick={() => handleOptionClick("All")}
                                    style={{
                                        padding: "8px 12px",
                                        textAlign: "left",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        color: "#333",
                                        width: "100%",
                                    }}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => handleOptionClick("On-Going")}
                                    style={{
                                        padding: "8px 12px",
                                        textAlign: "left",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        color: "#333",
                                        width: "100%",
                                    }}
                                >
                                    On-Going
                                </button>
                                <button
                                    onClick={() => handleOptionClick("Completed")}
                                    style={{
                                        padding: "8px 12px",
                                        textAlign: "left",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        color: "#333",
                                        width: "100%",
                                    }}
                                >
                                    Completed
                                </button>
                            </div>
                        )}
                    </div>

                    <Button
                        variant="contained"
                        color="warning"
                        style={{
                            padding: "10px 20px",
                            fontSize: "14px",
                            textTransform: "initial",
                            height: "37px",
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L7.29289 6.29289C6.90237 6.68342 6.90237 7.31658 7.29289 7.70711C7.68342 8.09763 8.31658 8.09763 8.70711 7.70711L11 5.41421V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V5.41421L15.2929 7.70711C15.6834 8.09763 16.3166 8.09763 16.7071 7.70711C17.0976 7.31658 17.0976 6.68342 16.7071 6.29289L12.7071 2.29289Z"
                                fill="white"
                            />
                            <path
                                d="M4 17.5C4 16.9477 3.55228 16.5 3 16.5C2.44772 16.5 2 16.9477 2 17.5V19C2 21.2091 3.79086 23 6 23H18C20.2091 23 22 21.2091 22 19V17.5C22 16.9477 21.5523 16.5 21 16.5C20.4477 16.5 20 16.9477 20 17.5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V17.5Z"
                                fill="white"
                            />
                        </svg>
                        &nbsp; Export
                    </Button>
                </div>
            </div>
            
            <Divider />
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            <TableCell align="right">Oil&nbsp;(L)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">{row.oil}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default RecentProjects;
