import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import CustomButton from "./CustomButton";
import CustomTypography from "./CustomTypography";
import FormPart from "./FormPart";

// Define the types for props
interface CustomPageProps {
  title: string;
  description: string;
  seconddescription: string;
}

const CustomPage: React.FC<CustomPageProps> = ({ title, description, seconddescription }) => {
  return (
    <Container>
      <CustomTypography variant="h4" sx={{ my: 4, textAlign: "center" }}>
        SQL INJECTION
      </CustomTypography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <CustomTypography>{description}</CustomTypography>

            {/* Wrap the arrow button inside the Link component */}
            <Link to="/second_page" style={{ textDecoration: "none" }}>
              <CustomButton
                variant="outlined"
                size="small"
                sx={{
                  position: "relative",
                  bottom: 0,
                  right: 0,
                  marginBottom: "0px",
                  marginRight: "8px",
                }}
              >
                <ArrowForwardIcon />
              </CustomButton>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "column", lg: "row" },
                gap: 3,
              }}
            >
              <FormPart />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <HomeIcon sx={{ mr: 1 }} />
                  <CustomTypography variant="h5" sx={{ fontWeight: "bold" }}>
                    {title}
                  </CustomTypography>
                </Box>

                <CustomTypography>{seconddescription}</CustomTypography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomPage;
