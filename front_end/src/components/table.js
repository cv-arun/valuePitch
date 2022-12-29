import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { CSVLink, CSVDownload } from "react-csv";


import axios from '../service/axios'

import SingleTableRow from './tableRow';
import BasicModal from './modal';
import UserForm from './userForm';
import { Button, Stack } from '@mui/material';

export default function BasicTable() {
    const [users, setUsers] = React.useState([]);
    const [refetch, setRefetch] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const [filterdUsers, setFilterdUsers] = React.useState([])
    const [csv, setCsv] = React.useState([])


    const fetchData = async () => {
        try {
            let data = await axios.get('/user')
            setUsers(data.data)
        } catch (err) {
            console.log(err)
        }
    }



    React.useEffect(() => {
        console.log(users, "users")
        let data = users?.filter((values) => values?.name?.indexOf(search) > -1)
        search ? setFilterdUsers(data) : setFilterdUsers(users)
    }, [search, users])

    React.useEffect(() => {
        fetchData()
    }, [refetch])

   


    React.useEffect(() => {
     let csvData= filterdUsers?.map((value) => {
            return { name: value.name, email: value.email, dob: value.dob, country: value.country }
        })
        setCsv(csvData)
       
    }, [filterdUsers])


    return (
        <Box sx={{ maxWidth: '750px', marginX: 'auto', marginTop: '50px' }} >
            <Stack direction={'row-reverse'} gap={3}>
                <BasicModal component={<UserForm setRefetch={setRefetch} refetch={refetch} />} />
                <span style={{ border: "2px blue", borderColor: '#1975bc' }} ><CSVLink data={csv}>Export as CSV</CSVLink></span>;
                <input placeholder='Search' style={{ color: 'white', backgroundColor: '#1f2937' }} onChange={(e) => setSearch(e.target.value)} />
            </Stack>
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
                        {filterdUsers?.map((row) => (
                            <SingleTableRow row={row} setRefetch={setRefetch} refetch={refetch} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}