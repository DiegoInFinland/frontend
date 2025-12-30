import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const Login = () => {
    return (
        <Box
            sx={{
                minHeight: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper
                elevation={8}
                sx={{
                    p: 4,
                    width: 300,
                    borderRadius: 2,
                    backgroundColor: '#001a33',
                    color: 'rgb(229, 224, 218)'
                }}
            >
                <Typography
                    variant="h5"
                    align="center"
                    mb={3}>
                    Sign In
                </Typography>

                <Box component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2
                    }}>
                    <TextField className="bg-gray-400/55 italic text-sm" label="Email" type="email" fullWidth />
                    <TextField className="bg-gray-400/55 italic text-sm" label="Password" type="password" fullWidth />
                    <Button variant="contained" color="primary" fullWidth>
                        Sign In
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default Login;

