import React, { useState, useEffect } from "react";
import {
    Badge,
    Box,
    Button,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Divider,
    Drawer,
    CircularProgress,
    TextField,
    Backdrop,
    Modal,
    Fade
} from "@mui/material";

const RecentProjects = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All");
    const [formData, setFormData] = useState({});
    const [selectedData, setSelectedData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const statusMapping = {
        1: "On-Going",
        2: "On-Hold",
        3: "On-Going",
        4: "On-Hold",
        5: "On-Going",
    };

    const typeMapping = {
        1: "Installation",
        2: "Repair",
        3: "Installation",
        4: "Repair",
        5: "Repair",
    };

    const startDate = {
        1: "27-03-2024",
        2: "01-04-2024",
        3: "10-04-2024",
        4: "10-04-2024",
        5: "11-04-2024",
    };

    const endDate = {
        1: "02-04-2024",
        2: "01-04-2024",
        3: "11-04-2024",
        4: "10-04-2024",
        5: "11-04-2024",
    };

    const scheduleMapping = {
        1: [
            {
                date: "27 - 03 - 2024, 9:00am",
                details:
                    "Planning and Preparation - Consultation, Site Assessment, Permitting, and Pre-installation Preparation.",
            },
            {
                date: "30 - 03 - 2024, 10:00am",
                details:
                    "Installation - Team Arrival, Setup, Panel Installation, Electrical Connection, Testing, and Final Inspection.",
            },
            {
                date: "01 - 04 - 2024, 9:00am",
                details:
                    "Activation and Monitoring - System Activation, Grid Connection, Monitoring Setup, Performance Testing.",
            },
        ],
        2: [
            {
                date: "05 - 04 - 2024, 8:30am",
                details:
                    "Initial Assessment - Energy audit, analysis, and recommendation for project feasibility.",
            },
            {
                date: "10 - 04 - 2024, 9:00am",
                details:
                    "Material Procurement - Sourcing and delivery of solar panels, inverters, and other equipment.",
            },
            {
                date: "15 - 04 - 2024, 10:00am",
                details:
                    "System Integration - Component assembly, testing, and performance verification.",
            },
        ],
        3: [
            {
                date: "20 - 04 - 2024, 7:45am",
                details:
                    "Site Preparation - Ground leveling, foundation setup, and grid connection readiness.",
            },
            {
                date: "25 - 04 - 2024, 11:00am",
                details:
                    "Installation - Equipment installation and wiring connections.",
            },
            {
                date: "30 - 04 - 2024, 8:30am",
                details:
                    "Commissioning - Safety checks, performance tests, and operational training for staff.",
            },
        ],
        4: [
            {
                date: "02 - 05 - 2024, 9:15am",
                details:
                    "Design and Planning - Custom system design and detailed technical planning.",
            },
            {
                date: "06 - 05 - 2024, 10:30am",
                details:
                    "Site Installation - Equipment installation and system integration.",
            },
            {
                date: "12 - 05 - 2024, 9:00am",
                details:
                    "Inspection and Testing - Final inspections, system testing, and regulatory approvals.",
            },
        ],
        5: [
            {
                date: "15 - 05 - 2024, 8:00am",
                details:
                    "Preliminary Review - Energy needs assessment and site visit.",
            },
            {
                date: "20 - 05 - 2024, 9:30am",
                details:
                    "Equipment Deployment - Delivery and setup of renewable energy systems.",
            },
            {
                date: "25 - 05 - 2024, 10:15am",
                details:
                    "Maintenance Training - Staff training on system usage and routine maintenance.",
            },
        ],
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #FAFAFA;',
        boxShadow: 24,
        p: 4,
    };

    const handleReset = () => {
        localStorage.removeItem("tableData");
        window.location.reload();
    };


    useEffect(() => {
        const storedData = localStorage.getItem("tableData");
        if (storedData) {
            setData(JSON.parse(storedData));
            setLoading(false);
        } else {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((data) => {
                    const updatedData = data.slice(0, 5).map((user) => ({
                        ...user,
                        address: `${user.address.suite}, ${user.address.street}, ${user.address.city}`,
                        status: statusMapping[user.id],
                        start: startDate[user.id],
                        end: endDate[user.id],
                        type: typeMapping[user.id],
                        schedule: scheduleMapping[user.id]
                    }));
                    setData(updatedData);
                    localStorage.setItem("tableData", JSON.stringify(updatedData)); e
                    setLoading(false);
                })
                .catch((error) => console.error("Error fetching data:", error));
        }
    }, []);


    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropdownVisible(false);
    };

    const handleRowClick = (row) => {
        setSelectedRow(row);
        setDrawerOpen(true);
        setSelectedData(row);
        setFormData(row);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
    const handleScheduleChange = (index, field, value) => {
        const updatedSchedule = [...formData.schedule];
        updatedSchedule[index][field] = value;
        setFormData((prev) => ({
            ...prev,
            schedule: updatedSchedule,
        }));
    };
    const handleSave = () => {
        const updatedData = data.map((item) =>
            item.id === formData.id ? formData : item
        );
        setData(updatedData);
        setSelectedData(formData);
        localStorage.setItem("tableData", JSON.stringify(updatedData));
        handleClose();
    };



    const filteredData = data.filter((user) => {
        if (selectedOption === "All") return true;
        return selectedOption === "On-Going" ? user.status === "On-Going" : user.status === "On-Hold";
    });


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
                <Typography sx={{ fontWeight: "bold", fontSize: { md: "32px", sm: "20px", xs: "20px" } }}>
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
                                    transform: dropdownVisible ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease",
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
                                    zIndex: 100,
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
                                    onClick={() => handleOptionClick("On-Hold")}
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
                                    On-Hold
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
                            height: "34px",
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
            <br />
            {loading ? (
                <CircularProgress />
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell sx={{ color: 'text.secondary' }}>Name</TableCell>
                                <TableCell sx={{ color: 'text.secondary' }} align="left">Address</TableCell>
                                <TableCell sx={{ color: 'text.secondary' }} align="left">Status</TableCell>
                                <TableCell sx={{ color: 'text.secondary' }} align="left">Type</TableCell>
                                <TableCell sx={{ color: 'text.secondary' }} align="left">Start Date</TableCell>
                                <TableCell sx={{ color: 'text.secondary' }} align="left">End Date</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {filteredData.map((user) => (
                                <TableRow
                                    key={user.id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    onClick={() => handleRowClick(user)}
                                    style={{ cursor: "pointer" }}
                                >

                                    <TableCell component="th" scope="row">
                                        {user.name}
                                    </TableCell>
                                    <TableCell align="left">{user.address}</TableCell>
                                    <TableCell align="left" >{user.status === "On-Going" && <div style={{ display: 'flex', backgroundColor: '#C5FFA6', borderRadius: '20px', width: '95px', height: '35px', justifyContent: 'center', alignItems: 'center', color: '#437826' }}>On-Going</div>}
                                        {user.status === "On-Hold" && <div style={{ display: 'flex', backgroundColor: '#FFF5A6', borderRadius: '20px', width: '95px', height: '35px', justifyContent: 'center', alignItems: 'center', color: '#544B10' }}>On-Hold</div>}</TableCell>
                                    <TableCell align="left">{user.type}</TableCell>
                                    <TableCell align="left">{user.start}</TableCell>
                                    <TableCell align="left">{user.end}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>


                        <Drawer anchor="right" open={drawerOpen} onClose={() => closeDrawer()}>
                            <div style={{ padding: "20px", width: "580px" }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                        Project Information
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '30px' }}>
                                        <Badge onClick={handleOpen} sx={{ backgroundColor: '#FFFFFF', borderRadius: '30px', width: { md: '42px' }, height: { md: '42px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}> <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0961 2.90997C19.7495 1.56338 17.5662 1.56338 16.2196 2.90997L7.69416 11.4354C7.08217 12.0474 6.68518 12.8414 6.56279 13.6982L6.31573 15.4275C6.12717 16.7475 7.25854 17.8788 8.57847 17.6903L10.3078 17.4432C11.1646 17.3208 11.9586 16.9238 12.5706 16.3119L21.0961 7.78639C22.4426 6.43981 22.4426 4.25655 21.0961 2.90997ZM17.8433 4.15049C18.407 3.76622 19.1818 3.82412 19.6818 4.32418C20.1819 4.82424 20.2398 5.59903 19.8555 6.1627L17.8433 4.15049ZM16.4112 5.54681L18.4592 7.59481L11.1564 14.8976C10.8504 15.2036 10.4534 15.4021 10.025 15.4633L8.29563 15.7104L8.54269 13.981C8.60388 13.5526 8.80238 13.1556 9.10837 12.8496L16.4112 5.54681Z" fill="black" />
                                            <path d="M6.5 1.99998C4.29086 1.99998 2.5 3.79084 2.5 5.99998V18C2.5 20.2091 4.29086 22 6.5 22H18.5C20.7091 22 22.5 20.2091 22.5 18V12C22.5 11.4477 22.0523 11 21.5 11C20.9477 11 20.5 11.4477 20.5 12V18C20.5 19.1045 19.6046 20 18.5 20H6.5C5.39543 20 4.5 19.1045 4.5 18V5.99998C4.5 4.89541 5.39543 3.99998 6.5 3.99998H9.18421C9.7365 3.99998 10.1842 3.55226 10.1842 2.99998C10.1842 2.44769 9.7365 1.99998 9.18421 1.99998H6.5Z" fill="black" />
                                        </svg>
                                        </Badge>
                                        <Badge onClick={() => closeDrawer()} sx={{ backgroundColor: '#FFFFFF', borderRadius: '30px', width: { md: '38px' }, height: { md: '38px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}> <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.55086 5.63616C7.16033 5.24563 6.52717 5.24563 6.13664 5.63616C5.74612 6.02668 5.74612 6.65984 6.13664 7.05037L11.0864 12.0001L6.13664 16.9499C5.74612 17.3404 5.74612 17.9736 6.13664 18.3641C6.52717 18.7546 7.16033 18.7546 7.55086 18.3641L12.5006 13.4143L17.4504 18.3641C17.8409 18.7546 18.474 18.7546 18.8646 18.3641C19.2551 17.9736 19.2551 17.3404 18.8646 16.9499L13.9148 12.0001L18.8646 7.05037C19.2551 6.65984 19.2551 6.02668 18.8646 5.63616C18.474 5.24563 17.8409 5.24563 17.4504 5.63616L12.5006 10.5859L7.55086 5.63616Z" fill="black" />
                                        </svg>
                                        </Badge>

                                    </Box>
                                </Box>
                                <br />

                                {selectedData && (
                                    <>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '17px' }}>
                                            Personal Details
                                        </Typography>
                                        <Card variant="outlined" sx={{ borderRadius: '13px', backgroundColor: '#FFFFFF' }}>
                                            <CardContent>
                                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, fontWeight: '500', display: 'flex', gap: '3px' }}>
                                                    Name
                                                </Typography>
                                                <Typography component="div">
                                                    {selectedData.name}
                                                </Typography>
                                                <br />
                                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, fontWeight: '500', display: 'flex', gap: '3px' }}>
                                                    Contact Information
                                                </Typography>
                                                <Typography component="div">
                                                    • {selectedData.phone} &nbsp; • {selectedData.email}
                                                </Typography>
                                                <br />
                                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, fontWeight: '500', display: 'flex', gap: '3px' }}>
                                                    Address
                                                </Typography>
                                                <Typography component="div">
                                                    {selectedData.address}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <br />
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '17px' }}>
                                            Booking Information
                                        </Typography>
                                        <Card variant="outlined" sx={{ borderRadius: '13px', backgroundColor: '#FFFFFF' }}>
                                            <CardContent>
                                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, fontWeight: '500', display: 'flex', gap: '3px' }}>
                                                    Service Type
                                                </Typography>
                                                <Typography component="div">
                                                    {selectedData.type}
                                                </Typography>
                                                <br />
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Box>
                                                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, fontWeight: '500', display: 'flex', gap: '3px' }}>
                                                            From
                                                        </Typography>
                                                        <Typography component="div">
                                                            {selectedData.start}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, fontWeight: '500', display: 'flex', gap: '3px' }}>
                                                            To
                                                        </Typography>
                                                        <Typography component="div">
                                                            {selectedData.end}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </>
                                )}

                                <br />
                                <Typography sx={{ fontWeight: 'bold', fontSize: '17px' }}>
                                    Planning Schedule
                                </Typography>
                                {selectedData && selectedData.schedule && selectedData.schedule.length > 0 ? (
                                    selectedData.schedule.map((entry, index) => (
                                        <div key={index}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <div
                                                    style={{
                                                        width: "30px",
                                                        height: "27px",
                                                        borderRadius: "50%",
                                                        border: "2px solid orange",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        marginRight: "10px",
                                                    }}
                                                >

                                                    <div
                                                        style={{
                                                            width: "10px",
                                                            height: "10px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "orange",
                                                        }}
                                                    ></div>
                                                </div>
                                                &nbsp;

                                                <Card variant="outlined" sx={{ borderRadius: '13px', backgroundColor: '#FFFFFF' }}>
                                                    <CardContent>
                                                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, fontWeight: '500', display: 'flex', gap: '3px' }}>
                                                            {entry.date}
                                                        </Typography>
                                                        <Typography component="div">
                                                            {entry.details}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </div>

                                        </div>
                                    ))
                                ) : (
                                    <Typography>No schedule available.</Typography>
                                )}
                            </div>
                        </Drawer>
                    </Table>
                </TableContainer>
            )}

            <Button onClick={() => handleReset()}>Clear</Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={{
                        ...style, maxHeight: "90vh", overflowY: "auto",
                    }}>
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
                        <TextField
                            label="Phone"
                            value={formData.phone || ""}
                            fullWidth
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="Type"
                            value={formData.type || ""}
                            fullWidth
                            onChange={(e) => handleInputChange("type", e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="Start Date"
                            value={formData.start || ""}
                            fullWidth
                            onChange={(e) => handleInputChange("start", e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="End Date"
                            value={formData.end || ""}
                            fullWidth
                            onChange={(e) => handleInputChange("end", e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        {formData.schedule && formData.schedule.length > 0 ? (
                            formData.schedule.map((entry, index) => (
                                <div key={index}>
                                    <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                                        Schedule {index + 1}
                                    </Typography>
                                    <TextField
                                        label="Date"
                                        value={entry.date || ""}
                                        fullWidth
                                        onChange={(e) =>
                                            handleInputChange("schedule", [
                                                ...formData.schedule.slice(0, index),
                                                { ...entry, date: e.target.value },
                                                ...formData.schedule.slice(index + 1),
                                            ])
                                        }
                                        sx={{ marginBottom: 2 }}
                                    />
                                    <TextField
                                        label="Details"
                                        value={entry.details || ""}
                                        fullWidth
                                        onChange={(e) =>
                                            handleInputChange("schedule", [
                                                ...formData.schedule.slice(0, index),
                                                { ...entry, details: e.target.value },
                                                ...formData.schedule.slice(index + 1),
                                            ])
                                        }
                                        sx={{ marginBottom: 2 }}
                                    />
                                </div>
                            ))
                        ) : (
                            <Typography>No schedule available.</Typography>
                        )}

                        <Button
                            variant="contained"
                            color="success"
                            fullWidth
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default RecentProjects;