import * as React from "react";
import { HeadFC } from "gatsby";

import { Stack, Text, Image, Box } from "@chakra-ui/react";

import possibli from "../images/possibli.gif";
import likeAnOrange from "../images/likeanorange.gif";
import nerdsConductElectricity from "../images/nerdsconductelectricity.gif";

const jokes = [
  {
    image: possibli,
    alt: "Helicopter pilot: Hah! That's the first thing that's ever gone wrong",
    explainer: "https://www.youtube.com/watch?v=CwPWmEzoVbw",
  },
  {
    image: likeAnOrange,
    alt: "Moe Szyslak: Trouble in paradise? Heh heh heh",
    explainer: "https://y.yarn.co/db13532f-0a69-477a-8a78-ebafb5d177b2.mp4",
  },
  {
    image: nerdsConductElectricity,
    alt: "Bart Simpson: Whoops, my finger slipped!",
    explainer: "https://www.youtube.com/watch?v=3iiz5kiePuI",
  },
] as const;

export default function NotFound() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100%"
      spacing={10}
      mx={4}
    >
      <Box textAlign="center">
        <Text fontSize="6xl">404</Text>
        <Text fontSize="2xl">Page Not Found</Text>
      </Box>
      <Box>
        <a href={joke.explainer} target="_blank" rel="noreferrer">
          <Image
            borderStyle="solid"
            borderColor="primary"
            borderWidth="20px"
            src={joke.image}
            alt={joke.alt}
          />
        </a>
      </Box>
    </Stack>
  );
}

export const Head: HeadFC = () => <title>Not found</title>;
