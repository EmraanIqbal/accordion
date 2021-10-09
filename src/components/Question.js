import { Button } from "@chakra-ui/button";
import { Box, Container, Heading, Flex, Spacer, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import data from "./Data";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Box mt="70" mb="20">
      <Container maxW="950px">
        <Box
          border="1px solid"
          bg="white"
          borderRadius="5"
          bg="purple"
          color="white"
        >
          <Flex m="50">
            <Heading as="h3" size="lg" w="50%">
              Questions And Answers About Login
            </Heading>
            <Spacer />
            <Box w="100%">
              <Box
                mb="5"
                p="3"
                boxShadow="dark-lg"
                borderRadius="3"
                bg="white"
                color="black"
              >
                <Flex>
                  <Heading as="h3" size="sm" ml="5" mt="2">
                    {title}
                  </Heading>
                  <Spacer />
                  <Button
                    borderRadius="full"
                    mr="5"
                    onClick={() => setShowInfo(!showInfo)}
                  >
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </Button>
                </Flex>
                {showInfo && (
                  <Text ml="5" mr="5">
                    {info}
                  </Text>
                )}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Question;
