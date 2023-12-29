import { motion } from "framer-motion";
import { Box, Text, Heading, Flex, Link } from "@chakra-ui/react";
import heroImage from "../../assets/heroImage.png";
import "typeface-lekton";
import "typeface-inter";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionLink = motion(Link);

export const Hero = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <Flex
      height="100vh"
      backgroundImage={`url(${heroImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      width="full"
      overflow="hidden"
      className="hero"
    >
      <Flex
        m={24}
        opacity="100%"
        overflow="hidden"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        width="full"
        backgroundColor="#101010"
        borderRadius={50}
        p={10}
        height="80%"
      >
        <MotionBox
          overflow="hidden"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <MotionHeading color="white" pb={10} fontSize="8xl">
            Hi there!
          </MotionHeading>
          <MotionText
            mb={8}
            color="white"
            fontSize="4xl"
            fontStyle="Inter"
            mr={5}
            fontWeight="bold"
          >
            My name is Gabriel Johnson. I'm a final year
            <Text
              fontFamily="Lekton"
              as="span"
              color="#FDC741"
              ml={2}
              mr={2}
            >
              Computer Science student
            </Text>
            from Anglia Ruskin University.
          </MotionText>
          <MotionText
            fontSize={28}
            mt={5}
            opacity="50%"
            fontWeight="bold"
            color="white"
          >
            Website made with:
          </MotionText>
        </MotionBox>

        <MotionLink
          display="flex"
          whiteSpace="nowrap"
          mt={420}
          mr={5}
          fontSize="4xl"
          justifyContent="flex-end"
          color="white"
          fontWeight="bold"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          Learn More <Box as="span" color="#FDC741" ml={1}>&gt;&gt;</Box>
        </MotionLink>
      </Flex>
    </Flex>
  );
};
