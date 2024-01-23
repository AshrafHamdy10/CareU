import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import mercedes from "../assets/mercedes.png";
import ferrari from "../assets/ferrari.png";
import lambor from "../assets/Lamborghini.png";
import bmw from "../assets/bmw.png";
import audi from "../assets/audi2.png";
import roles from "../assets/roles.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Cards = () => {
  return (
    <>
      <div style={{ backgroundColor: "#fff", padding: "25px" }}>
        <Container>
          <Typography
            contained
            variant="h4"
            component="div"
            sx={{ margin: "85px 0px", textAlign: "center", fontWeight: "bold" }}
          >
            Explore our top deal from top rated dealers
          </Typography>
          <Grid container spacing={2}>
            <Grid item xl={4} xs={12} md={6}>
              <Card sx={{ marginBottom: "20px", background: "#EEEFF1" }}>
                <img
                  src={mercedes}
                  alt="Mercedes"
                  title="Mercedes"
                  style={{ height: "194px", width: "100%" }}
                />
                <CardContent sx={{ marginLeft: "20%" }}>
                  <Typography variant="h5" component="div">
                    Mercedes
                  </Typography>
                  <Typography variant="p">120,000$ {"   |"}</Typography>
                  <Typography variant="p"> $2500 month</Typography>
                </CardContent>
                <CardActions sx={{ marginLeft: "15%" }}>
                  <Button variant="contained" sx={{ background: "#FFAB00" }}>
                    Car Rent
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "#000", color: "#000" }}
                  >
                    Details
                  </Button>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xl={4} xs={12} md={6}>
              <Card sx={{ marginBottom: "20px" }}>
                <img
                  src={ferrari}
                  alt="Ferrari"
                  title="Ferrari"
                  style={{ height: "194px", width: "100%" }}
                />
                <CardContent sx={{ marginLeft: "20%" }}>
                  <Typography variant="h5" component="div">
                    Ferrari
                  </Typography>
                  <Typography variant="p">120,000$ {"   |"}</Typography>
                  <Typography variant="p"> $2500 month</Typography>
                </CardContent>
                <CardActions sx={{ marginLeft: "15%" }}>
                  <Button variant="contained" sx={{ background: "#FFAB00" }}>
                    Car Rent
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "#000", color: "#000" }}
                  >
                    Details
                  </Button>
                  <IconButton>
                    <FavoriteIcon sx={{ color: "#FFAB00" }} />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xl={4} xs={12} md={6}>
              <Card sx={{ marginBottom: "20px", background: "#EEEFF1" }}>
                <img
                  src={bmw}
                  alt="BMW"
                  title="BMW"
                  style={{ height: "194px", width: "100%" }}
                />
                <CardContent sx={{ marginLeft: "20%" }}>
                  <Typography variant="h5" component="div">
                    BMW
                  </Typography>
                  <Typography variant="p">120,000$ {"   |"}</Typography>
                  <Typography variant="p"> $2500 month</Typography>
                </CardContent>
                <CardActions sx={{ marginLeft: "15%" }}>
                  <Button variant="contained" sx={{ background: "#FFAB00" }}>
                    Car Rent
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "#000", color: "#000" }}
                  >
                    Details
                  </Button>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xl={4} xs={12} md={6}>
              <Card sx={{ marginBottom: "20px" }}>
                <img
                  src={roles}
                  alt="Roles Royes"
                  title="Roles Royes"
                  style={{ height: "194px", width: "100%" }}
                />
                <CardContent sx={{ marginLeft: "20%" }}>
                  <Typography variant="h5" component="div">
                    Roles Royes
                  </Typography>
                  <Typography variant="p">120,000$ {"   |"}</Typography>
                  <Typography variant="p"> $2500 month</Typography>
                </CardContent>
                <CardActions sx={{ marginLeft: "15%" }}>
                  <Button variant="contained" sx={{ background: "#FFAB00" }}>
                    Car Rent
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "#000", color: "#000" }}
                  >
                    Details
                  </Button>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xl={4} xs={12} md={6}>
              <Card sx={{ marginBottom: "20px", background: "#EEEFF1" }}>
                <img
                  src={lambor}
                  alt="Lamborghini"
                  title="Lamborghini"
                  style={{ height: "194px", width: "100%" }}
                />
                <CardContent sx={{ marginLeft: "20%" }}>
                  <Typography variant="h5" component="div">
                    Lamborghini
                  </Typography>
                  <Typography variant="p">120,000$ {"   |"}</Typography>
                  <Typography variant="p"> $2500 month</Typography>
                </CardContent>
                <CardActions sx={{ marginLeft: "15%" }}>
                  <Button variant="contained" sx={{ background: "#FFAB00" }}>
                    Car Rent
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "#000", color: "#000" }}
                  >
                    Details
                  </Button>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xl={4} xs={12} md={6}>
              <Card sx={{ marginBottom: "20px" }}>
                <img
                  src={audi}
                  alt="Audi"
                  title="Audi"
                  style={{ height: "194px", width: "100%" }}
                />
                <CardContent sx={{ marginLeft: "20%" }}>
                  <Typography variant="h5" component="div">
                    Audi
                  </Typography>
                  <Typography variant="p">120,000$ {"   |"}</Typography>
                  <Typography variant="p"> $2500 month</Typography>
                </CardContent>
                <CardActions sx={{ marginLeft: "15%" }}>
                  <Button variant="contained" sx={{ background: "#FFAB00" }}>
                    Car Rent
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "#000", color: "#000" }}
                  >
                    Details
                  </Button>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Cards;
