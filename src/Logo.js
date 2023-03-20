import React, { useMemo } from "react";
import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";

import image from "./../assets/logo.png";
function Logo({ size = "md", borderRadius = "xl" }) {
  const title = "HyperTheme";
  const subtitle = "Editor v0.";
  const shadow = useColorModeValue("surface", "surfaceDark");
  const bgColor = useColorModeValue("white", "gray.900");

  const logoSize = useMemo(() => {
    switch (size) {
      case "xs":
        return "30px";
      case "sm":
        return "45px";
      case "lg":
        return "75px";
      case "xl":
        return "100px";
      case "xxl":
        return "150px";
      default:
        return "60px";
    }
  }, [size]);
  return (
    <Box width="100%" height="115px" rounded="lg" pos="absolute" zIndex="1">
      <Box
        py={{ base: 2, md: 4 }}
        px={{ base: 3, md: 8 }}
        display="flex"
        justifyContent={{ base: "space-between", md: "none" }}
        alignItems="center"
        w="100%"
      >
        <Stack alignItems="center" spacing={4} direction="row">
          <Image
            bgColor={bgColor}
            h={logoSize}
            minW={logoSize}
            src={image}
            border="0px solid"
            outline="0px solid"
            borderRadius={borderRadius}
            overflow="hidden"
            shadow={shadow}
          />

          <Flex direction="column">
            <Text fontSize={{ base: "md", md: "2xl" }} fontWeight="bold">
              {title}
            </Text>
            <Text fontSize={{ base: "sm", md: size }}>{subtitle}</Text>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}

export default Logo;
