import "./navbar.css";

import React from "react";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <div class="hero">
        <Typography
          variant="body2"
          gutterBottom
          align="justify"
          fontFamily="cursive"
          color="beige"
          display="contents"
        >
          Sweetstayhome is a two-bedroom apartment located 7km from Porta
          Maggiore in Rome with free WiFi. It is situated 1km from the GRA
          motorway and 8km from Sapienza University. The apartment offers a
          seating area, kitchen with appliances, TV and a pivate bathroom. The
          Casilino shopping center is 1 km away and the Torre Maura Train and
          Metro station (line C) is a 5-minute walk. Rome Ciampino Airport is
          the nearest located 11 km from the apartment. Located in a serene
          urban residential area with complimentary roadside parking offers a
          unique advantage combing a peaceful atmosphere with convenient
          cost-free parking within city limits.
        </Typography>
      </div>
    </>
  );
}
