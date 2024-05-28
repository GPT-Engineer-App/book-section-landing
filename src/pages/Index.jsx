import { useState } from "react";
import { Container, Box, Text, VStack, Grid, GridItem, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from "@chakra-ui/react";
import { FaBook } from "react-icons/fa";

const books = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Book Title ${i + 1}`,
  description: `This is the story of Book Title ${i + 1}. It is a fascinating tale that captures the imagination and transports the reader to another world.`,
  image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXJ8ZW58MHx8fHwxNzE2OTM0NzM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
}));

const BookModal = ({ isOpen, onClose, book }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{book.title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>{book.description}</Text>
      </ModalBody>
    </ModalContent>
  </Modal>
);

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    onOpen();
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">
            Book Section
          </Text>
          <Text fontSize="lg" color="gray.600">
            Discover our collection of fascinating books
          </Text>
        </Box>
        <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={6}>
          {books.map((book) => (
            <GridItem key={book.id} onClick={() => handleBookClick(book)} cursor="pointer">
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} textAlign="center" _hover={{ boxShadow: "lg" }}>
                <Image src={book.image} alt={book.title} mb={4} />
                <Text fontSize="xl" fontWeight="semibold">
                  {book.title}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
      {selectedBook && <BookModal isOpen={isOpen} onClose={onClose} book={selectedBook} />}
    </Container>
  );
};

export default Index;
