import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const RecipientOptionsGrid = () => {
  return (
    <>
      <Container maxWidth="90%" marginY={70}>
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem>
            <VStack>
              <Image
                className="rounded-bl-3xl"
                src="/images/birthday_img.jpg"
                alt="birthday image"
                boxSize="250px"
                objectFit="cover"
              />
              <Heading as="h6" size="xs">
                Handla till Mamma
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Image
                className="rounded-bl-3xl"
                src="/images/wedding_img.jpg"
                alt="Wedding image"
                boxSize="250px"
                objectFit="cover"
                // borderRadius="full"
              />
              <Heading as="h6" size="xs">
                Handla till Pappa
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Image
                className="rounded-bl-3xl"
                src="/images/engagement_img.jpg"
                alt="Engagement image"
                boxSize="250px"
                objectFit="cover"
              />
              <Heading as="h6" size="xs">
                Handla till en vän
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Image
                className="rounded-bl-3xl"
                src="/images/student_img.jpg"
                alt="Student image"
                boxSize="250px"
                objectFit="cover"
              />
              <Heading as="h6" size="xs">
                Handla till ett par
              </Heading>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default RecipientOptionsGrid;
