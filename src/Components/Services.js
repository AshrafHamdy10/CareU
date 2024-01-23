import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import mini from "../assets/Mini-Cooper.png";
import audi from "../assets/audi.png";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Services = () => {
  return (
    <>
      <div style={{ backgroundColor: "#fff" }}>
        <Container>
          <Grid container>
            <Grid item xs={12} xl={6}>
              <Box>
                <img
                  src={mini}
                  alt="Mini Cooper"
                  title="Mini Cooper"
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
              <Box>
                <img
                  src={audi}
                  alt="Audi"
                  title="Audi"
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} xl={6}>
              <Box>
                <Typography variant="h6" component="div">
                  Best Services
                </Typography>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    marginTop: "20px",
                    width: "90%",
                    lineHeight: "50px",
                  }}
                >
                  Get ready to experience biggest automative event
                </Typography>
                <Stack>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", marginTop: "50px" }}
                    >
                      <SignLanguageIcon
                        sx={{
                          marginRight: "15px",
                          background: "#EEEFF1",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                      />
                      Deals for every budget
                    </Typography>
                    <Typography
                      variant="p"
                      component="div"
                      sx={{
                        width: "60%",
                        marginTop: "10px",
                        color: "#777",
                        lineHeight: "30px",
                      }}
                    >
                      Incredible pieces on hotels, flights, cars and packages
                      worldwide
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", marginTop: "50px" }}
                    >
                      <LocalOfferIcon
                        sx={{
                          marginRight: "15px",
                          background: "#FFAB00",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                      />
                      Best price guaranteed
                    </Typography>
                    <Typography
                      variant="p"
                      component="div"
                      sx={{
                        width: "60%",
                        marginTop: "10px",
                        color: "#777",
                        lineHeight: "30px",
                      }}
                    >
                      find a lower price We will refund you 100% of the
                      difference
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", marginTop: "50px" }}
                    >
                      <SupportAgentIcon
                        sx={{
                          marginRight: "15px",
                          background: "#EEEFF1",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                      />
                      Support 24/7
                    </Typography>
                    <Typography
                      variant="p"
                      component="div"
                      sx={{
                        width: "60%",
                        marginTop: "10px",
                        color: "#777",
                        lineHeight: "30px",
                      }}
                    >
                      Good service with hot line is available 24 hours aday and
                      7 days aweek
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};
export default Services;
