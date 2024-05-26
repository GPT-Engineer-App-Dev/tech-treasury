import { Box, Container, VStack, Text, Image, Flex, Heading, Link, SimpleGrid, Button, Select, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 1000],
    brand: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handlePriceRangeChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: value,
    }));
  };

  const products = [
    { id: 1, name: "Product 1", category: "electronics", brand: "brandA", price: 100, image: "https://via.placeholder.com/300", description: "Description of product 1." },
    { id: 2, name: "Product 2", category: "fashion", brand: "brandB", price: 200, image: "https://via.placeholder.com/300", description: "Description of product 2." },
    { id: 3, name: "Product 3", category: "home", brand: "brandC", price: 300, image: "https://via.placeholder.com/300", description: "Description of product 3." },
    // Add more products as needed
  ];

  const filteredProducts = products.filter((product) => {
    return (
      (filters.category === "" || product.category === filters.category) &&
      (filters.brand === "" || product.brand === filters.brand) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1]
    );
  });
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">ElectroShop</Heading>
          <Flex as="ul" listStyleType="none" m={0} p={0} gap={8}>
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

      {/* Filter Section */}
      <Box as="section" py={10} bg="gray.50">
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" mb={4}>Filter Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
            <Box>
              <Text mb={2}>Category</Text>
              <Select name="category" value={filters.category} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
              </Select>
            </Box>
            <Box>
              <Text mb={2}>Price Range</Text>
              <RangeSlider
                min={0}
                max={1000}
                step={10}
                value={filters.priceRange}
                onChange={handlePriceRangeChange}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Text mt={2}>${filters.priceRange[0]} - ${filters.priceRange[1]}</Text>
            </Box>
            <Box>
              <Text mb={2}>Brand</Text>
              <Select name="brand" value={filters.brand} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="brandA">Brand A</option>
                <option value="brandB">Brand B</option>
                <option value="brandC">Brand C</option>
              </Select>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {filteredProducts.map((product) => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={6}>
                  <Heading as="h4" size="md" mb={2}>{product.name}</Heading>
                  <Text mb={4}>{product.description}</Text>
                  <Button colorScheme="blue">View Details</Button>
                </Box>
              </Box>
            ))}
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