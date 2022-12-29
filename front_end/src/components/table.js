import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

import SingleTableRow from './tableRow';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const data = [
    { name: 'arun', email: 'eamil', dob: 'dob', country: 'country' },
    { name: 'arun', email: 'email', dob: 'dob', country: 'country' },
    { name: 'arun', email: 'email', dob: 'dob', country: 'country' },
    { name: 'arun', email: 'email', dob: 'dob', country: 'country' },
    { name: 'arun', email: 'email', dob: 'dob', country: 'country' },
    { name: 'arun', email: 'email', dob: 'dob', country: 'country' },
]

export default function BasicTable() {
    return (
        <Box sx={{ maxWidth: '750px', marginX: 'auto', marginTop: '50px' }} >
            <TableContainer component={Paper} sx={{ backgroundColor: "#1f2937" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ color: 'white' }}>
                        <TableRow >
                            <TableCell variant='primary' >Name</TableCell>
                            <TableCell variant='primary' >Email</TableCell>
                            <TableCell variant='primary' >Dob</TableCell>
                            <TableCell variant='primary' >Country</TableCell>
                            <TableCell variant='primary' >Edit</TableCell>
                            <TableCell variant='primary' >Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {data?.map((row) => (
                           <SingleTableRow row={row}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}