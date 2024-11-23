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
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: { md: '32px', sm: '20px', xs: '20px' } }}>
                    Recent Projects
                </Typography>
                <Typography sx={{display: 'flex'}}>
                    <span>
                        <Accordion sx={{width: '70px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                
                            >
                                All
                            </AccordionSummary>
                            <AccordionDetails>
                            <button onClick={() => setFilter('All')}>All</button>
          <button onClick={() => setFilter('On-Going')}>On-Going</button>
          <button onClick={() => setFilter('Finished')}>Finished</button>
                            </AccordionDetails>
                        </Accordion>
                       
                    </span> 
                    &nbsp;&nbsp; 
                    <span><Button sx={{backgroundColor: '#FD9301', color: 'white', textTransform: 'inherit', height: '48px'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L7.29289 6.29289C6.90237 6.68342 6.90237 7.31658 7.29289 7.70711C7.68342 8.09763 8.31658 8.09763 8.70711 7.70711L11 5.41421V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V5.41421L15.2929 7.70711C15.6834 8.09763 16.3166 8.09763 16.7071 7.70711C17.0976 7.31658 17.0976 6.68342 16.7071 6.29289L12.7071 2.29289Z" fill="white"/>
<path d="M4 17.5C4 16.9477 3.55228 16.5 3 16.5C2.44772 16.5 2 16.9477 2 17.5V19C2 21.2091 3.79086 23 6 23H18C20.2091 23 22 21.2091 22 19V17.5C22 16.9477 21.5523 16.5 21 16.5C20.4477 16.5 20 16.9477 20 17.5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V17.5Z" fill="white"/>
</svg>
 Export</Button></span>
                </Typography>
            </div>
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
