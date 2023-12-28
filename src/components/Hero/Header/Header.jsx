
import { Box, Text } from '@chakra-ui/react'
const Header = () => {
  return (
    <Box backgroundColor="white" height={50} flexDir="row">
    <Text p={2}fontSize={24} color="#0C0C0C" opacity="60%" fontWeight="semibold">
        Gabriel Johnson
    </Text>
    <Text color="white" display="flex" justifyContent="left" as='span'>Stuff</Text>
    
    </Box>
  )
}

export default Header