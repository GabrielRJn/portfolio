import { Box, Flex, Text, Image, Link, Spacer, Tooltip } from '@chakra-ui/react';
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
     
      <Text  whiteSpace="nowrap" fontSize={34} pl={10} color="#0C0C0C" opacity="60%" fontWeight="extrabold">
        Gabriel Johnson
      </Text>
      <Spacer/>

      <Box display="flex" opacity="60%" pr={10}>

      <Tooltip label="GitHub" aria-label="GitHub" color="#FDC741" bg="#202020">
  <Link href="https://github.com/GabrielRJn" isExternal>
    <Image src={github} alt="GitHub" boxSize={16} marginX={2} p={2} className='github-icon hover-effect' />
  </Link>
</Tooltip>

<Tooltip label="Degree information" aria-label="Degree information" color="#FDC741" bg="#202020">
  <Link href="https://www.aru.ac.uk/study/undergraduate/computer-science-beng/module-details?mo=5da17682-02cc-44d0-b983-ec74c8f6ce96&co=e0e61042-5970-4752-b089-debb5809eb96&cp=3b74f0d0-cd5f-485e-9343-fbe10f8f9998" isExternal>
    <Image src={gradcap} alt="Graduation Cap" boxSize={16} marginX={2} p={2} className="degree-icon hover-effect" />
  </Link>
</Tooltip>

<Tooltip label="LinkedIn" aria-label="LinkedIn" color="#FDC741" bg="#202020">
  <Link href="https://www.linkedin.com/in/gabriel-johnson-a294951b9/">
    <Image src={linkedin} alt="LinkedIn" boxSize={16} marginX={2} p={2} className="linkedin-icon hover-effect" />
  </Link>
</Tooltip>


      </Box >
    </Flex>
  );
};

export default Header;
