import "./navbar.css";

import React from "react";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <div className="hero">
        <Typography
          variant="body2"
          align="justify"
          color="#ffffff"
          display="inline-flex"
          textAlign="justify"
          fontSize="16px"
        >
          Our SweetstayHome is a one-bedroom apartment located 7km from Porta
          Maggiore in Rome with free WiFi. It is situated 1km from the GRA
          motorway and 8km from Sapienza University. The apartment offers a
          seating area, kitchen with appliances, TV and a private bathroom. The
          Casilino shopping center is 1 km away and the Torre Maura Train and
          Metro station (line C) is a 5-minute walk. Rome Ciampino Airport is
          the nearest located airport only 11 km from the apartment. Located in
          a serene urban residential area with free roadside parking, it offers
          a unique advantage combining a peaceful atmosphere within city limits.
        </Typography>
      </div>
    </>
  );
}
