import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function SkillTrackerResultComponent({employee}) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell aligh="center"><th>Name</th></TableCell>
                        <TableCell align="center"><th>Id</th></TableCell>
                        <TableCell align="center"><th>Email</th></TableCell>
                        <TableCell align="center"><th>Mobile</th></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {employee.length ? employee.map(e => (
                        <Row key={e.name} employeeDetails={e} />
                    )) : 'No data is available'}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function Row({employeeDetails}) {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {employeeDetails.name}
                </TableCell>
                <TableCell align="right"><td>{employeeDetails.id}</td></TableCell>
                <TableCell align="right"><td>{employeeDetails.email}</td></TableCell>
                <TableCell align="right"><td>{employeeDetails.mobile}</td></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
              </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><th>Skill</th></TableCell>
                                        <TableCell><th>Skill Level</th></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {employeeDetails.skills.map((s) => (
                                        <TableRow key={s.skill}>
                                            <TableCell scope="row">
                                                <td>{s.skill}</td>
                                            </TableCell>
                                            <TableCell><td>{s.skillLevel}</td></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
