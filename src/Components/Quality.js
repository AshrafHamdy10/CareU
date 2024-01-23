import { Container, Typography } from "@mui/material";
import include from "../assets/included.png";
import React from "react";

const Quality = () => {
  return (
    <>
      <div style={{ marginTop: "80px", textAlign: "center" }}>
        <Container>
          <Typography
            variant="h4"
            component="div"
            sx={{ mb: "25px", fontWeight: "bold" }}
          >
            We Are Ensuring The Best Customer Experience
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{ color: "#777", mb: "100px" }}
          >
            You Can't put a price on your family's safety and security on the
            road. Find a lower price
          </Typography>
          <img
            src={include}
            alt="Car Options"
            title="Car Options"
            style={{ width: "100%" }}
          />
        </Container>
      </div>
    </>
  );
};
export default Quality;
