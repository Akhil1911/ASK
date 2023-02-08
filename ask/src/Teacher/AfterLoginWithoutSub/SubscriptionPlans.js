import React, { useState } from "react";
import { Button, Box, Stack, Typography } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import DoneIcon from "@mui/icons-material/Done";
import '../Css/Styles.css'

const SubscriptionPlans = ({ subscriptionDetails, subscriptionFeatures }) => {

const [tempId, setTempId] = useState(1)


  
  return (
    <>
      <div>
        <Typography
          textAlign={"center"}
          sx={{ wordWrap: "break-word" }}
          variant="h3"
          color="#254061"
          m={5}
        >
          Subscription Plans
        </Typography>
      </div>
      {/* <Stack
        justifyContent={"space-evenly"}
        alignItems={"center"}
        direction={"row"}
      >
        subscriptionDetails from LoginWithoutSub  
        {subscriptionDetails.map((val, ind) => (
          <Box key={ind}>
            <Button
              sx={{ fontSize: "larger", color: "#254061" }}
              // disableRipple
              onClick={() => {
                changeTempId(ind);
              }}
            >
              {val.name}
            </Button>
          </Box>
        ))}
      </Stack> */}

      <Stack
        m={"20px 100px"}
        spacing={3}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        direction={{
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        }}
      >
        {subscriptionDetails.map((value, index) => {
          const { id, name, duration, price, btnName, bgColor } = value;

          return (
            <div key={index}>
              <Box
                sx={{
                  minWidth: {
                    lg: 250,
                    md: 250,
                    sm: 250,
                    xs: 250,
                  },
                  p: 2,
                  bgcolor: bgColor,
                  color: name === "Platinum" ? "white" : "black",
                }}
                onClick={() => {
                  setTempId(id)
                }}
                className={id === tempId ? "active-class" : "non-acitve-class"}
                // Styles.css
              >
                {name === "Gold" ? (
                  <>
                    <Typography variant="h6" mb={1}>
                      <AutoFixHighIcon fontSize="small" /> Most Popular
                    </Typography>
                    <hr />
                  </>
                ) : null}
                <Typography
                  variant="h3"
                  mt={2}
                  sx={{ fontFamily: "Josefin Sans" }}
                >
                  {price}₹
                </Typography>
                ({Math.ceil(price / (duration * 12))}₹ Every Month)
                <Typography variant="h4" m={2} fontFamily={"Signika Negative"}>
                  {name}
                </Typography>
                {/* subscriptionFeatures from LoginWithoutSub   */}
                <Typography m={2} variant={"h6"} textAlign={"left"}>
                  <DoneIcon fontSize="small" sx={{ mr: 2 }} />
                  <b>{duration} Year</b>
                  {subscriptionFeatures.map((val, ind) => (
                    <div key={ind}>
                      <DoneIcon fontSize="small" sx={{ mr: 2 }} />
                      {val.fName} <br />
                    </div>
                  ))}
                </Typography>
                {/* subscriptionFeatures Mapping Completed */}
                <Button sx={{ m: "auto" }} variant={"contained"} size="medium">
                  {btnName}
                </Button>
              </Box>
            </div>
          );
        })}
      </Stack>
    </>
  );
};

export default SubscriptionPlans;
