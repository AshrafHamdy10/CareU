import React, { useState } from "react";
import { Drawer, IconButton, List } from "@mui/material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState();
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List value={value} onChange={(e, value) => setValue(value)}>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <hr />
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Car</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <hr />
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Booking</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <hr />
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Page</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <hr />
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Blog</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <hr />
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>News</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <hr />
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <hr />
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Sign Up</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};
export default DrawerComp;
