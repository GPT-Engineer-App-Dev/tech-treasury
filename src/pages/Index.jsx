import { Box, Container, VStack, Text, Image, Flex, Heading, Link, SimpleGrid, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";

import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">ElectroShop</Heading>
          <InputGroup maxW="400px" ml={8}>
            <Input
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
              bg="white"
              color="black"
            />
            <InputRightElement children={<SearchIcon color="gray.500" />} />
          </InputGroup>
          <Flex as="ul" listStyleType="none" m={0} p={0} gap={8} ml={8}>
            <Link as="li" href="#" _hover={{ textDecoration: "underline" }}>Home</Link>
            <Link as="li" href="#" _hover={{ textDecoration: "underline" }}>Products</Link>
            <Link as="li" href="#" _hover={{ textDecoration: "underline" }}>About Us</Link>
            <Link as="li" href="#" _hover={{ textDecoration: "underline" }}>Contact</Link>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="xl" mb={8}>Your one-stop shop for the latest electronics</Text>
          <Button colorScheme="blue" size="lg">Shop Now</Button>
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 1" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 1</Heading>
                <Text mb={4}>Description of product 1.</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 2" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 2</Heading>
                <Text mb={4}>Description of product 2.</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 3" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 3</Heading>
                <Text mb={4}>Description of product 3.</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl" textAlign="center">
          <VStack spacing={4}>
            <Flex gap={4}>
              <Link href="#" isExternal><FaFacebook size="24px" /></Link>
              <Link href="#" isExternal><FaTwitter size="24px" /></Link>
              <Link href="#" isExternal><FaInstagram size="24px" /></Link>
            </Flex>
            <Text>&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</Text>
            <Flex gap={4} justifyContent="center">
              <Link href="#" _hover={{ textDecoration: "underline" }}>Privacy Policy</Link>
              <Link href="#" _hover={{ textDecoration: "underline" }}>Terms of Service</Link>
              <Link href="#" _hover={{ textDecoration: "underline" }}>Contact</Link>
            </Flex>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;