import { AspectRatio, Container, Grid, Heading, Stack } from "@chakra-ui/react";
import { OptimizedImage } from "@jnsdls/components";
import { ReactTextCycle } from "@jnsdls/react-text-shuffle";
import React from "react";

export default function HomePage() {
  return (
    <Grid placeItems="center" minH="100vh">
      <Container>
        <Stack spacing={8} w="100%">
          <AspectRatio
            w="100%"
            maxWidth="200px"
            ratio={1}
            borderRadius="full"
            overflow="hidden"
          >
            <OptimizedImage
              alt="Jonas in the japanese tea garden in San Francisco"
              layout="fill"
              src="/images/me.jpeg"
            />
          </AspectRatio>
          <Heading as="h1" size="2xl">
            Hi, I'm Jonas 👋
          </Heading>
          <Heading as="h2" size="lg">
            I{" "}
            <ReactTextCycle
              interval={7000}
              words={[
                "build web-things @ twitch",
                "built startups @ bebo",
                "advise startups @ f.inc",
              ]}
            />
          </Heading>
        </Stack>
      </Container>
    </Grid>
  );
}
