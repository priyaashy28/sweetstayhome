import { Link, Typography } from "@mui/material";

export default function Bookings() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleClick = (url) => {
    return () => openInNewTab(url);
  };

  const handleLink = (url, link) => {
    return (
      <div>
        <Link component="button" variant="body2" onClick={handleClick(url)}>
          <Typography variant="body1" sx={{ fontSize: "20px" }}>
            {link}
          </Typography>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div>
        <Typography
          variant="h6"
          align="justify"
          color="black"
          display="inline-flex"
          textAlign="justify"
          fontSize="20px"
        >
          To reserve your stay, please go to
          <span className="bookingLink">
            {handleLink(
              "https://www.booking.com/hotel/it/sweet-stay.en-gb.html",
              "Booking.com"
            )}
          </span>
          or
          <span className="bookingLink">
            {handleLink(
              "https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=64853&lang=en",
              "Avaibook"
            )}
          </span>
          or book directly with us at (+39) 349 511 6730 to receive a{" "}
          <span className="discount">10% discount</span>.
        </Typography>
      </div>
    </>
  );
}
