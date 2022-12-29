import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from '../service/axios'

const theme = createTheme();

export default function UserForm({setRefetch,refetch}) {
    const [form, setForm] = React.useState({});
    const [err, setErr] = React.useState({});
    const validate = () => {
        !form.name ? setErr({ ...err, name: 'This field is required' }) : setErr({ ...err, name: null })
        !form.email ? setErr({ ...err, email: 'This field is required' }) : setErr({ ...err, email: null })
        !form.dob ? setErr({ ...err, dob: 'This field is required' }) : setErr({ ...err, dob: null })
        !form.country ? setErr({ ...err, country: 'This field is required' }) : setErr({ ...err, country: null })
        return err
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        validate()

        if (form.name && form.email && form.dob && form.country) {
            console.log("sdfsdfsadfsadf",err)
           let data=await axios.post('/user',form)
           console.log(data)
           setForm({name:'',email:"",dob:'',country:''})
           setRefetch(!refetch)

        }


    };

    return (
        <ThemeProvider theme={theme}>

            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Add new user
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        {err.name && <Typography component="h1" variant="h5">
                            This field is required
                        </Typography>}
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    value={form.name}
                                    autoFocus
                                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={form.email}
                                    autoComplete="email"
                                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="dob"
                                    label="DOB"
                                    type="date"
                                    id="dob"
                                    value={form.dob}
                                    autoComplete=""
                                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="country"
                                    label="Country"
                                    type="text"
                                    id="country"
                                    value={form.country}
                                    autoComplete="India"
                                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}

                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>

                    </Box>
                </Box>
            </Container>

        </ThemeProvider>
    );
}