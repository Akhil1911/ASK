import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <Stack
        bgcolor={"#254061"}
        textAlign={"center"}
        color={"white"}
        width={"100%"}
      >
        <Box alignItems={"center"} mt={1}>
          <InstagramIcon sx={{ mr: 2 }} />
          <FacebookIcon sx={{ mr: 2 }} />
          <TwitterIcon sx={{ mr: 2 }} />
          <LinkedInIcon sx={{ mr: 2 }} />
          <GoogleIcon />
        </Box>
        <hr />
        <Typography variant="h6" mb={1}>
          Copyright &#169; {year} - ASK.
        </Typography>
      </Stack>
    </>
  );
};

export default Footer;
