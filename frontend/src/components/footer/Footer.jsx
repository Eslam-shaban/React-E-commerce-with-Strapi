import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: "#2B3445",
                py: 1.3,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
            }}
        >
            <Typography
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                color={"HighlightText"}
                variant="h6"
                sx={{
                    fontSize: {
                        xs: "12px",
                        sm: "12px", // Font size for small screens
                        md: "15px", // Font size for medium screens
                        lg: "18px", // Font size for large screens
                    }
                }}
            >
                Designed and developed by
                <Button
                    sx={{
                        mx: 0.5,
                        fontSize: {
                            xs: "12px",
                            sm: "12px", // Font size for small screens
                            md: "15px", // Font size for medium screens
                            lg: "18px", // Font size for large screens
                        },
                        textTransform: "capitalize",
                        color: "#ff7790",
                    }}
                    variant="text"
                    color="primary"
                >
                    Eslam Shaban
                </Button>
                ©2023
            </Typography>
        </Box>
    );
}

export default Footer;
