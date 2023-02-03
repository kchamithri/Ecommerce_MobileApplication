import { FontAwesome5 } from "@expo/vector-icons";
import { Box, HStack, Input } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../color";

function HomeSearch() {
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      py={4}
      alignItems="center"
      bg={Colors.main}
      safeAreaTop
    >
      <Input
        placeholder="Sugar, Milk Powder ..."
        w="85%"
        h={12}
        borderWidth={0}
        bg={Colors.white}
        type="search"
        variant="filled"
        _focus={{
          bg: Colors.white,
        }}
      />
      <Pressable ml={3}>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: "11px",
          }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
}

export default HomeSearch;