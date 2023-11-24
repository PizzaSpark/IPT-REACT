import { Face5, Key, Login } from "@mui/icons-material";
import { Box, Card, TextField, Grid, InputAdornment, Button } from "@mui/material";
import React from "react";

// const theme = createTheme({
//     status: {
//       danger: orange[500],
//     },
//   });
  


function LoginMaterial() {
    return (
        <div>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: "100vh" }}
            >
                <Grid item xs={2}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        style={{ marginBottom: "20px" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Face5 />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        style={{ marginBottom: "20px" }}
                        autoComplete="current-password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Key />
                                </InputAdornment>
                            ),
                        }}
                    ></TextField>
                    <Button variant="contained" color="primary" startIcon={<Login />}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginMaterial;
