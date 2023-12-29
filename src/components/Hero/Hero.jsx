import { Box, Text, Heading, Flex, Link } from "@chakra-ui/react";
import heroImage from "../../assets/heroImage.jpg";
import 'typeface-lekton';
import 'typeface-inter';
export const Hero = () => {
  return (
    <Flex height="100vh">
      <Box

   
backgroundImage={`url(${heroImage})`}
backgroundSize="cover" 
backgroundPosition="center" 
width="full"
height="818px"
className="hero"
opacity="95%"
>
  
      <Box m={24} opacity="100%"  width="80%" backgroundColor="#202020" borderRadius={10} p={5}>
        <Heading color="white" fontSize="6xl" mb={3}>Hi there!</Heading>
        <Text mb={5} color="white" fontSize="3xl" fontStyle="Inter" fontWeight="bold">
          My name is Gabriel Johnson. I'm a final year
         <Text fontFamily="Lekton" as="span" color="#FDC741" ml={2}>
           Computer Science student  </Text>
          from Anglia Ruskin University.
        </Text>
        <Link display="flex"fontSize={30} justifyContent="flex-end" color="white" fontWeight="bold">Learn More <Box as="span" color="#FDC741" ml={1}>&gt;&gt;</Box></Link>
      </Box>
      
      
      </Box>
    </Flex>
  );
};
