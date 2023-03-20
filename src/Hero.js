import * as React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { ThemeEditorDrawerButton } from "@hypertheme-editor/chakra-ui";

function Hero() {
  const title = "Powerful theme editor for your next ";
  const subtitle = "Chakra UI Project";
  const description = "Get started with HyperTheme editor for:";
  const ctaLink1 = "https://www.hyperthe.me/";
  const ctaTitle1 = "visit Hyperthe.me";
  const ctaTitle2 = "Try it";
  const titleColor = useColorModeValue("primary.900", "white");
  const shadow = useColorModeValue("surface", "surfaceDark");
  const bgColor = useColorModeValue("white", "gray.900");
  const bgGradient = useColorModeValue(
    "linear-gradient(60deg, white 0%, primary.500 30%, secondary.500 70%, white 100%)",
    "linear-gradient(60deg, gray.800 0%, primary.500 30%, secondary.500 70%, gray.800 100%)"
  );
  const bgGradient2 = useColorModeValue(
    "linear-gradient(0deg, white 50%, rgba(255,255,255,0) 100%)",
    "linear-gradient(0deg, gray.800 50%, rgba(0,0,0,0) 100%)"
  );
  return (
    <Box
      p={{ base: 0, lg: 12 }}
      height={{ md: "100vh" }}
      display="flex"
      flexDirection="column"
      w="full"
      pos="relative"
      zIndex="0"
      as="section"
    >
      <Box
        opacity="0.25"
        w={{ base: "100%" }}
        h="100%"
        pos="absolute"
        bgGradient={bgGradient}
        left="0px"
        top="0"
        zIndex="0"
      />
      <Box
        w={{ base: "100%" }}
        h="45%"
        pos="absolute"
        bgGradient={bgGradient2}
        left="0"
        bottom="0px"
        zIndex="0"
      />
      <Container
        position="relative"
        alignContent="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex="1"
        maxW="container.xl"
        pt={{ base: 32, md: 0 }}
      >
        <Stack direction={{ base: "column", md: "row" }} spacing={12}>
          <Flex
            justifyContent="center"
            w={{ base: null, md: "50%" }}
            flexDirection="column"
            minWidth="50%"
            zIndex={1}
            textAlign={{ base: "center", md: "left" }}
            h="100%"
          >
            <Box mb={5}>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
                textAlign={{ base: "center", md: "left" }}
                justifyContent={{ base: "center", md: "normal" }}
                fontWeight="900"
                letterSpacing="normal"
                color={titleColor}
              >
                {title}
              </Heading>
              <Heading
                fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
                textAlign={{ base: "center", md: "left" }}
                justifyContent={{ base: "center", md: "normal" }}
                fontWeight="900"
                letterSpacing="normal"
                color="primary.500"
              >
                {subtitle}
              </Heading>
              <Text
                mt={1}
                fontSize={{ md: "xl" }}
                opacity="0.8"
                letterSpacing="normal"
                dangerouslySetInnerHTML={{ __html: description }}
                color={titleColor}
              />
            </Box>
            <Stack
              direction={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", md: "start" }}
              w="100%"
              spacing={4}
            >
              <Link href={ctaLink1} _hover={{ textDecor: "none" }} isExternal>
                <Button size="lg" colorScheme="primary">
                  {ctaTitle1}
                </Button>
              </Link>
              <Box>
                <ThemeEditorDrawerButton
                  pl={{ base: 4 }}
                  pr={{ base: 2 }}
                  shadow={shadow}
                  bgColor={bgColor}
                  title={ctaTitle2}
                />
              </Box>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
