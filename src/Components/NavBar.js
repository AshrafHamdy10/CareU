import {
  AppBar,
  Button,
  Container,
  IconButton,
  MenuList,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/Careu-logo.png";
import DrawerComp from "./DrawerComp";

const NavBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar position="static" sx={{ background: "#EEEFF1" }}>
        <Container>
          <Toolbar>
            <IconButton size="large" edge="start" aria-label="logo">
              <img src={logo} alt="CareU" />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              CareU
            </Typography>
            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <>
                <MenuList>
                  <Stack direction="row" spacing={2}>
                    <Tabs
                      value={value}
                      onChange={(e, value) => setValue(value)}
                    >
                      <Tab label="Home" />
                      <Tab label="Car" />
                      <Tab label="Booking" />
                      <Tab label="Page" />
                      <Tab label="Blog" />
                      <Tab label="News" />
                    </Tabs>

                    <Button variant="contained">Sign Up</Button>
                    <Button variant="contained">Log In</Button>
                  </Stack>
                </MenuList>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
