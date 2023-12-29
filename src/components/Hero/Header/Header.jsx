import { Box, Flex, Text, Image } from '@chakra-ui/react';
import github from '../../../assets/github.png';
import gradcap from '../../../assets/gradcap.png';
import linkedin from '../../../assets/linkedin.png';

const Header = () => {
  return (
    <Flex
      backgroundColor="white"
      height={70}
      alignItems="center" 
      justifyContent="space-between"
    >
      <Text  fontSize={34} pl={28} color="#0C0C0C" opacity="60%" fontWeight="extrabold">
        Gabriel Johnson
      </Text>

      <Box display="flex" opacity="60%">
        <Image src={github} alt="GitHub" boxSize="30px" marginX={2} />
        <Image src={gradcap} alt="Graduation Cap" boxSize="30px" marginX={2} />
        <Image src={linkedin} alt="LinkedIn" boxSize="30px" marginX={2} />
      </Box>
    </Flex>
  );
};

export default Header;
