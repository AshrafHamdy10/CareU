import { Box, Container, Grid, ImageList } from "@mui/material";
import React from "react";
import pundry from "../assets/pundry.jpg";
import turpial from "../assets/turpial.jpg";
import auto from "../assets/Auto.png";
import tanq from "../assets/tanq.png";
import repair from "../assets/repair.jpg";
import liros from "../assets/liros.png";

const Banner = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#fff", marginTop: "10px", padding: "25px" }}
      >
        <Container>
          <Grid Container sx={{ height: "auto" }} direction="row">
            <ImageList cols={6}>
              <Grid item xl={2} xs={6}>
                <Box>
                  <img
                    src={pundry}
                    alt="Pundry"
                    title="Pundry"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item xl={2} xs={6}>
                <Box>
                  <img
                    src={turpial}
                    alt="Turpial"
                    title="Turpial"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item xl={2} xs={6}>
                <Box>
                  <img
                    src={auto}
                    alt="AVTOPART"
                    title="AVTOPART"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item xl={2} xs={6}>
                <Box>
                  <img
                    src={tanq}
                    alt="TANQ"
                    title="TANQ"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item xl={2} xs={6}>
                <Box>
                  <img
                    src={repair}
                    alt="Car Repair"
                    title="Car Repair"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item xl={2} xs={6}>
                <Box>
                  <img
                    src={liros}
                    alt="Liros-Avto"
                    title="Liros-Avto"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Grid>
            </ImageList>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Banner;
