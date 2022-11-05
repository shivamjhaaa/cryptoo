import {  Box,  Image, Text } from "@chakra-ui/react";
import React from "react";
import bg from "../assets/bg.jpg";
import { motion } from "framer-motion";

import btcSrc from "../assets/btc.png";

const Home = () => {
  return (
    <Box bgImage={bg} bgPosition='center' backgroundSize={'cover'}  bgColor={"blackAlpha.900"} w={"100"} h={"110vh"}>
      
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        />
      </motion.div>
      <Text
        className= "heading"
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        mt={"-10"}
        color = 'black'
        text-shadow = {"5px 5px 6px white"}  
      >
      CRYPTOO
      </Text>
      
    </Box>
  );
};

export default Home;
