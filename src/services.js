import { Box, Divider, Paper, Stack, Typography, styled } from "@mui/material";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
  width: "100px",
}));

export default function Services() {
  return (
    <Box>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        mb={3}
      >
        <Item>
          <FlatwareIcon />
          <Typography variant="body1">Cookware</Typography>
        </Item>
        <Item>
          <CoffeeMakerIcon />
          <Typography variant="body1">Coffee maker</Typography>
        </Item>
        <Item>
          <MicrowaveIcon />
          <Typography variant="body1">Microwave</Typography>
        </Item>
        <Item>
          <CountertopsIcon />
          <Typography variant="body1">Equipped kitchen</Typography>
        </Item>
        <Item>
          <KitchenIcon />
          <Typography variant="body1">Fridge</Typography>
        </Item>
        <Item>
          <LocalLaundryServiceIcon />
          <Typography variant="body1">Washing machine</Typography>
        </Item>
        <Item>
          <BathroomIcon />
          <Typography variant="body1">Fitted bathroom</Typography>
        </Item>
        <Item>
          <DryCleaningIcon />
          <Typography variant="body1">Drying provisions</Typography>
        </Item>
      </Stack>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>
          <DeckIcon />
          <Typography variant="body1">Private patio</Typography>
        </Item>
        <Item>
          <KingBedIcon />
          <Typography variant="body1">Spacious Bedroom</Typography>
        </Item>
        <Item>
          <TvIcon />
          <Typography variant="body1">TV</Typography>
        </Item>
        <Item>
          <MedicalServicesIcon />
          <Typography variant="body1">First aid kit</Typography>
        </Item>
        <Item>
          <IronIcon />
          <Typography variant="body1">Iron</Typography>
        </Item>
        <Item>
          <AcUnitIcon />
          <Typography variant="body1">A/C (Payable)</Typography>
        </Item>
        <Item>
          <WifiIcon />
          <Typography variant="body1">Wifi</Typography>
        </Item>
        <Item>
          <BedroomChildIcon />
          <Typography variant="body1">Extra bed</Typography>
        </Item>
      </Stack>
    </Box>
  );
}
