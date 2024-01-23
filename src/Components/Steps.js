import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import cal from "../assets/cal.jpg";
import location from "../assets/location.png";
import booking from "../assets/booking.png";

const Steps = () => {
  return (
    <>
      <div style={{ background: "#fff", padding: "55px 0px" }}>
        <Container>
          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            HOW IT WORKS
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold", mb: "70px" }}
          >
            CareU following working Steps
          </Typography>
          <Grid container spacing={3}>
            <Grid item xl={4} xs={12}>
              <Box
                sx={{
                  height: "200px",
                  textAlign: "center",
                }}
              >
                <Card sx={{ padding: "15px 0px" }}>
                  <img
                    src={location}
                    alt="Choose Location"
                    title="Choose Location"
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ margin: "20px 0px" }}
                  >
                    Choose a location
                  </Typography>
                  <Typography variant="p" component="div">
                    Watch popular hotels at a heavily discounted price
                  </Typography>
                </Card>
              </Box>
            </Grid>
            <Grid item xl={4} xs={12}>
              <Box
                sx={{
                  height: "200px",
                  textAlign: "center",
                }}
              >
                <Card sx={{ padding: "15px 0px" }}>
                  <img src={cal} alt="Pick-up date" title="Pick-up date" />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ margin: "20px 0px" }}
                  >
                    Pick-up date
                  </Typography>
                  <Typography variant="p" component="div">
                    Click choose and we'll pick one of the hotels
                  </Typography>
                </Card>
              </Box>
            </Grid>
            <Grid item xl={4} xs={12}>
              <Box
                sx={{
                  height: "200px",
                  textAlign: "center",
                }}
              >
                <Card sx={{ padding: "15px 0px" }}>
                  <img
                    src={booking}
                    alt="Book your car"
                    title="Book your car"
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ margin: "20px 0px" }}
                  >
                    Book your car
                  </Typography>
                  <Typography variant="p" component="div">
                    See which hotel right after you book!
                  </Typography>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};
export default Steps;
