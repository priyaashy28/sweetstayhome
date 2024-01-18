import { Box, Grid, Paper, Typography } from "@mui/material";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import CountertopsIcon from "@mui/icons-material/Countertops";
import DeckIcon from "@mui/icons-material/Deck";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import FlatwareIcon from "@mui/icons-material/Flatware";
import IronIcon from "@mui/icons-material/Iron";
import KingBedIcon from "@mui/icons-material/KingBed";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import React from "react";
import TvIcon from "@mui/icons-material/Tv";
import WifiIcon from "@mui/icons-material/Wifi";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  //backgroundColor: "#545454",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderColor: "#545454",
}));

export default function Services() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={3} display="grid">
          <Item>
            <FlatwareIcon />
            <Typography variant="subtitle2">Cookware</Typography>
          </Item>
        </Grid>
        <Grid item xs={3} display="grid">
          <Item>
            <CoffeeMakerIcon />
            <Typography variant="subtitle2">Coffee maker</Typography>
          </Item>
        </Grid>
        <Grid item xs={3} display="grid">
          <Item>
            <MicrowaveIcon />
            <Typography variant="subtitle2">Microwave</Typography>
          </Item>
        </Grid>
        <Grid item xs={3} display="grid">
          <Item>
            <CountertopsIcon />
            <Typography variant="subtitle2">Equipped kitchen</Typography>
          </Item>
        </Grid>
        <Grid item xs={3} display="grid">
          <Item>
            <KitchenIcon />
            <Typography variant="subtitle2">Fridge</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <LocalLaundryServiceIcon />
            <Typography variant="subtitle2">Washing machine</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <BathroomIcon />
            <Typography variant="subtitle2">Fitted bathroom</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <DryCleaningIcon />
            <Typography variant="subtitle2">Drying provisions</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <DeckIcon />
            <Typography variant="subtitle2">Private patio</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <KingBedIcon />
            <Typography variant="subtitle2">Spacious Bedroom</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <TvIcon />
            <Typography variant="subtitle2">TV</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <MedicalServicesIcon />
            <Typography variant="subtitle2">First aid kit</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <IronIcon />
            <Typography variant="subtitle2">Iron</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <AcUnitIcon />
            <Typography variant="subtitle2">A/C (Payable)</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <WifiIcon />
            <Typography variant="subtitle2">Wifi</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <BedroomChildIcon />
            <Typography variant="subtitle2">Extra bed</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
