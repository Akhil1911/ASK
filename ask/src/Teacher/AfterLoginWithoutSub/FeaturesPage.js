import Carousel from "react-bootstrap/Carousel";
import { Button, Typography, Stack } from "@mui/material";


function FeaturesPage({ featuresData }) {
  return (
    <>
      <div>
        <Typography textAlign={"center"} variant={"h3"} color="#254061" mt={5}>
          Features Of ASK 
        </Typography>
      </div>

      <Carousel className="carClass" variant="dark" >
        {featuresData.map((val, index) => {
          return (
            <Carousel.Item key={index}>
              <Stack
                direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                m={2}
                mb={10}
              >
                <img
                  width={"350px"}
                  height={"350px"}
                  style={{ objectFit: "contain" }}
                  src={val.image}
                  alt="..."
                />

                <Stack direction={"column"} alignItems={"center"}>
                  <h5>{val.title}</h5>
                  <Button variant="outlined" >{val.btnName}</Button>
                </Stack>
              </Stack>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default FeaturesPage;
