import {
  Box,
  Container,
  Grid,
  IconButton,
  Input,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import jeep from "../assets/Jeep.png";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <>
      <Container>
        <Grid container sx={{ height: "auto" }}>
          <Grid item xs={12} xl={6}>
            <Box>
              <Typography
                variant="h2"
                component="div"
                sx={{
                  color: "000",
                  fontWeight: "bold",
                  marginTop: "50px",
                  width: "80%",
                }}
              >
                Explore the world with
              </Typography>
              <Typography
                variant="h2"
                component="div"
                sx={{
                  color: "#FFAB00",
                  fontWeight: "bold",
                }}
              >
                comfortable car
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{
                  color: "#000",
                  marginTop: "20px",
                  width: "85%",
                }}
              >
                Embark on unforgettable adventures and discover the world in
                unparalled comfort and style with our fleet of exceptionally
                comfortable cars
              </Typography>
              <Stack
                direction="row"
                spacing={5}
                sx={{ marginTop: "30px", background: "000" }}
              >
                <Tabs value={value} onChange={(e, value) => setValue(value)}>
                  <Tab label="Car for sale" />
                  <Tab label="Sell your car" />
                </Tabs>
              </Stack>
              <Input
                sx={{
                  border: "1px solid #777",
                  height: "50px",
                  borderRadius: "5px",
                  marginTop: "20px",
                  background: "#fff",
                  width: "65%",
                }}
                placeholder="  Write car name"
                type="text"
              />
              <IconButton>
                <SearchIcon
                  sx={{
                    border: "1px solid #777",
                    padding: "10px",
                    background: "#1976D2",
                    color: "#fff",
                    borderRadius: "5px",
                  }}
                />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} xl={6}>
            <Box>
              <img
                src={jeep}
                alt="jeep renegade"
                title="jeep renegade"
                style={{
                  width: "100%",
                  marginTop: "50px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Header;
