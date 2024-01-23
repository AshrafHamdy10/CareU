import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <div style={{ background: "#fff", padding: "50px 0px" }}>
        <Container>
          <Grid container sx={{ ml: "4%" }}>
            <Grid item xl={3} xs={6}>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", mb: "20px" }}
                >
                  Our Products
                </Typography>
                <Stack>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    FOODIA
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    MatGari
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Mat3mi
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Hotels
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Fashionsy
                  </Link>
                </Stack>
              </Box>
            </Grid>
            <Grid item xl={3} xs={6}>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", mb: "20px" }}
                >
                  About RentalX
                </Typography>
                <Stack>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Why RentalX
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Our story
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Investor Relations
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Press Center
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Advertise
                  </Link>
                </Stack>
              </Box>
            </Grid>
            <Grid item xl={3} xs={6}>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", mb: "20px" }}
                >
                  Resources
                </Typography>
                <Stack>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Download
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Help Center
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Guides
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Partner Network
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Evetopers
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Cruises
                  </Link>
                </Stack>
              </Box>
            </Grid>
            <Grid item xl={3} xs={6}>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", mb: "20px" }}
                >
                  Extras
                </Typography>
                <Stack>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Rental Deal
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Repair Shop
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Viow Booking
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    Hire Companies
                  </Link>
                  <Link
                    sx={{ textDecoration: "none", color: "#777", mb: "20px" }}
                  >
                    NewOMers
                  </Link>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};
export default Footer;
