import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Box,
  Center,
  Heading,
  Highlight,
  Image,
  List,
  ListItem,
  Text,
  useColorMode,
  Button,
  calc,
  Divider,
  Flex,
} from "@chakra-ui/react";

import hammerAndSickle from "../images/hs.gif";
import EmojiListIcon from "../components/EmojiListIcon";

const $lineHeight = "1.4375rem";

export const Head: HeadFC = () => <title>Home Page</title>;

export default function IndexPage(props: PageProps) {
  const { toggleColorMode } = useColorMode();

  return (
    <Box as="main">
      <Center height="100vh" textAlign="center">
        <Flex gap={$lineHeight} flexDir="column">
          <Heading
            as="h1"
            size="4xl"
            maxW="16ch"
            lineHeight={calc($lineHeight).multiply(4).toString()}
          >
            <Highlight
              query="-"
              styles={{ color: "purple.600", _dark: { color: "purple.400" } }}
            >
              Samuel Zislis-Gaus
            </Highlight>
          </Heading>
          <Text fontSize="2xl" mb={$lineHeight}>
            Original inventor of "software"
          </Text>
          <List textAlign="start" spacing={4}>
            <ListItem>
              <EmojiListIcon emoji="💻" />
              Solves problems with technology
            </ListItem>
            <ListItem>
              <EmojiListIcon emoji="🤵‍♂️" />
              Wife guy
            </ListItem>
            <ListItem>
              <EmojiListIcon emoji="👨‍👧" />
              D.I.L.F.
            </ListItem>
            <ListItem>
              <EmojiListIcon emoji="🕎" />
              ייִדישיסט
            </ListItem>
            <ListItem>
              <EmojiListIcon
                emoji={
                  <Image width="1em" display="inline" src={hammerAndSickle} />
                }
              />
              Believes workers are entitled to the full value their labour
              produces
            </ListItem>
          </List>
          <Divider />
          <Button
            onClick={toggleColorMode}
            colorScheme="blue"
            alignSelf="center"
          >
            Toggle Color Mode
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

