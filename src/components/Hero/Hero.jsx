import { Box, Text, Heading, Flex, Link } from "@chakra-ui/react";
import heroImage from "../../assets/heroImage.png";
import 'typeface-lekton';
import 'typeface-inter';

export const Hero = () => {
  return (
    <Flex
      height="100vh"
      backgroundImage={`url(${heroImage})`}
      backgroundSize="cover" 
      backgroundPosition="center" 
      width="full"
      className="hero"
    >
      <Flex
        m={24}
        opacity="100%"
        direction={{ base: "column", md: "row" }} 
        justify="space-between"
        align="center"
        width="full"
        backgroundColor="#202020"
        borderRadius={50}
        p={10}
      >
        <Box overflow="hidden">
          <Heading color="white" pb={20} fontSize="6xl" >
            Hi there!
          </Heading>
          <Text mb={10} color="white" fontSize="3xl" fontStyle="Inter" mr={5} fontWeight="bold">
            My name is Gabriel Johnson. I'm a final year
            <Text fontFamily="Lekton" as="span" color="#FDC741" ml={2} mr={2}>
              Computer Science student
            </Text>
            from Anglia Ruskin University.
          </Text>
          <Text fontSize={28} mt={5} opacity="50%" fontWeight="bold" color="white">
            Website made with:
          </Text>
        </Box>

        <Link display="flex" pl={20} fontSize={30} justifyContent="flex-end" color="white" fontWeight="bold">
          Learn More <Box as="span" color="#FDC741" ml={1}>&gt;&gt;</Box>
        </Link>
      </Flex>
    </Flex>
  );
};

