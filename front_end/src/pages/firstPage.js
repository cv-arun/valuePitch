import { Box } from '@mui/system';
import React from 'react';
import Header from '../components/header';
import BasicTable from '../components/table';


function FirstPage() {
    return (
        <>
            <Box sx={{backgroundColor:'#111827',minHeight:'100vh'}}>
                <Header />
                
                <BasicTable />
            </Box>

        </>
    )
}

export default FirstPage