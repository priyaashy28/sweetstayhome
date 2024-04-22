import "./navbar.css";

import { Button, Form, Input, TextArea } from "semantic-ui-react";
import { Link, Stack, Typography } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_ew3hdov";
const TEMPLATE_ID = "template_qc5jgyp";
const PUBLIC_KEY = "dQogiZkbrcHPm20iA";

export default function Contact() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleClick = (url) => {
    return () => openInNewTab(url);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <>
      <div className="contact">
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="reply_to"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="from_name"
            placeholder="Name…"
            required
            icon="user circle"
            iconPosition="left"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="message"
            placeholder="Message…"
            required
          />
          <Button type="submit" color="green">
            Submit
          </Button>
        </Form>

        <Stack alignItems="center" direction="row" gap={2} mt={2}>
          <PhoneIcon />
          <Typography variant="body1">
            (+39) 349 511 6730 / (+39) 329 188 1127
          </Typography>
        </Stack>

        <Stack alignItems="center" direction="row" gap={2} mt={2}>
          <EmailIcon />
          <Typography variant="body1">sweetstayhome@gmail.com</Typography>
        </Stack>

        <Stack alignItems="center" direction="row" gap={2} mt={2}>
          <Link
            component="button"
            variant="body2"
            onClick={handleClick("https://www.facebook.com/sweetstayhome/")}
          >
            <FacebookIcon />
          </Link>
          <Typography variant="body1" sx={{ fontSize: "18px" }}>
            Sweet Stay Home
          </Typography>
        </Stack>

        <Stack alignItems="center" direction="row" gap={1} mt={2}>
          <Link
            component="button"
            variant="body2"
            onClick={handleClick("https://maps.app.goo.gl/GpJKcyoLyEyb9kMf7")}
          >
            <LocationOnIcon />
          </Link>
          <Typography variant="body1" sx={{ justifyContent: "space-between" }}>
            Via del Passero Solitario, 32, 00169 Roma RM, Italy
          </Typography>
        </Stack>
      </div>
      <Typography>Copyright © 2024 SweetstayHome</Typography>
    </>
  );
}
