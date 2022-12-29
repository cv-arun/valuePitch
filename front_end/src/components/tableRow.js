import React, { useEffect, useState } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';


function SingleTableRow({ row }) {
    const [edit, setEdit] = useState(false);
    const [data, setData] = useState({})
    useEffect(() => {
        setData(row)
    }, [])

    return (<>

        {<TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: 'white' }}
        >

            {edit ?
                <>

                    <TableCell sx={{ backgroundColor: 'white' }} ><TextField id="outlined-basic" label="Outlined" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} /></TableCell>
                    <TableCell sx={{ backgroundColor: 'white' }} ><TextField id="outlined-basic" label="Outlined" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} /></TableCell>
                    <TableCell sx={{ backgroundColor: 'white' }}  ><TextField id="outlined-basic" label="Outlined" onChange={(e) => setData({ ...data, dob: e.target.value })} value={data.dob} /></TableCell>
                    <TableCell sx={{ backgroundColor: 'white' }}  ><TextField id="outlined-basic" label="Outlined" onChange={(e) => setData({ ...data, country: e.target.value })} value={data.country} /></TableCell>
                    <TableCell sx={{ backgroundColor: 'white', color: 'black' }} variant='primary' >submit</TableCell>
                    <TableCell sx={{ backgroundColor: 'white' }} variant='primary' ></TableCell>
                </> :
                <><TableCell variant='primary' scope="row">
                    {row.name}
                </TableCell>
                    <TableCell variant='primary' >{row.email}</TableCell>
                    <TableCell variant='primary' >{row.dob}</TableCell>
                    <TableCell variant='primary' >{row.country}</TableCell>
                    <TableCell variant='primary' ><span onClick={() => setEdit(true)}><EditIcon /></span></TableCell>
                    <TableCell variant='primary' ><DeleteIcon /></TableCell>
                </>
            }

        </TableRow>}
    </>
    )
}

export default SingleTableRow