// SecondPage.tsx
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import CustomButton from "./CustomButton";
import CustomTypography from "./CustomTypography";
import securebank from '../../assets/securebank.png'

const SecondPage: React.FC = () => {
  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomTypography variant="h4" sx={{ my: 4, textAlign: "center" }}>
        SQL INJECTION
      </CustomTypography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Paper elevation={3} sx={{ p: 2, position: "relative" }}>
          <CustomTypography>
            Here are the application logs. Watch what happens here when you
            interact with the vulnerable application.
          </CustomTypography>

          <CustomButton
            variant="outlined"
            size="small"
            onClick={handleButtonClick}
            sx={{
              position: "absolute",
              bottom: 8,
              right: 8,
              minWidth: 0,
              padding: 0,
            }}
          >
            <ArrowForwardIcon
              sx={{
                backgroundColor: "grey",
                borderRadius: "50%",
                padding: "2px",
                width: "24px",
                height: "24px",
              }}
            />
          </CustomButton>
        </Paper>
        <Box sx={{ ml: 2 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3,
                mb: 1,
              }}
            >
              <form>
                <TextField label="Username" fullWidth sx={{ my: 1 }} />
                <TextField label="Password" fullWidth sx={{ my: 1 }} />
                <CustomButton variant="contained" fullWidth sx={{ mt: 2 }}>
                  Log in
                </CustomButton>
              </form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mb: 1,
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
                  <CustomTypography variant="h5">SECURE BANK</CustomTypography>
                </Box>

                <CustomTypography>
                  You can trust us with your money, we almost never get hacked.
                </CustomTypography>
                <img src="/assets/securebank.png" alt="Secure bank page " style={{ width: '100%', height: '100%' }} />

              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default SecondPage;
