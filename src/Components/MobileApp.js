import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import buttons from "../assets/buttons.png";
import mobile from "../assets/mobile.png";

const MobileApp = () => {
  return (
    <>
      <div
        style={{
          background: "#fff",
          padding: "80px 0px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            background: "#FFAB00",
            padding: "40px 0px",
            width: "70%",
            marginLeft: "15%",
            borderRadius: "5px",
          }}
        >
          <Container>
            <Grid container>
              <Grid item xl={6} xs={12}>
                <Box>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: "bold", mb: "20px", mt: "25%" }}
                  >
                    Download the free CareU app
                  </Typography>
                  <Typography variant="p" component="div" sx={{ mb: "50px" }}>
                    for faster, easier booking and exclusive deals
                  </Typography>
                  <img
                    src={buttons}
                    alt="Download"
                    title="Download"
                    style={{ width: "90%", marginBottom: "50px" }}
                  />
                </Box>
              </Grid>
              <Grid item xl={6} xs={12}>
                <Box>
                  <img
                    src={mobile}
                    alt="Mobile App"
                    title="Mobile App"
                    style={{ width: "50%" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  );
};
export default MobileApp;
