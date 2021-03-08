import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { Link, OptimizedImage } from "@jnsdls/components";
import { ReactTextCycle } from "@jnsdls/react-text-shuffle";
import React from "react";
import { FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import { MetaData } from "../components/Metadata";

export default function HomePage() {
  return (
    <>
      <MetaData />
      <Grid placeItems="center" minH="100vh">
        <Stack spacing={16} w="100%">
          <Box>
            <Container maxW="800px">
              <SimpleGrid
                spacing={8}
                w="100%"
                background="var(--accents-1)"
                padding={8}
                borderRadius="lg"
                shadow="lg"
                columns={[1, null, 3]}
              >
                <GridItem align="center">
                  <AspectRatio
                    w="100%"
                    maxWidth="200px"
                    ratio={1}
                    borderRadius="full"
                    overflow="hidden"
                  >
                    <OptimizedImage
                      priority
                      loading="eager"
                      alt="Jonas in the japanese tea garden in San Francisco"
                      layout="fill"
                      src="/images/me.jpeg"
                    />
                  </AspectRatio>
                </GridItem>
                <GridItem colSpan={[1, null, 2]} as={Flex} align="center">
                  <Stack spacing={4} w="100%">
                    <Heading as="h1" size="2xl">
                      Hi, I'm Jonas 👋
                    </Heading>
                    <Heading as="h2" size={"lg"} fontSize={["lg", "2xl"]}>
                      I{" "}
                      <ReactTextCycle
                        interval={9000}
                        words={[
                          "build web-things @ twitch",
                          "built startups @ bebo",
                          "advise companies @ f.inc",
                        ]}
                      />
                    </Heading>
                  </Stack>
                </GridItem>
              </SimpleGrid>
            </Container>
          </Box>
          <Box>
            <Container maxW="800px">
              <SimpleGrid
                columns={[3]}
                spacing={8}
                w="100%"
                background="var(--accents-1)"
                padding={8}
                borderRadius="lg"
                shadow="lg"
              >
                <GridItem colSpan={[3]}>
                  <Heading as="h3" size="md">
                    Social Stuff
                  </Heading>
                </GridItem>
                <GridItem>
                  <Stack
                    as={LinkBox}
                    spacing={2}
                    align="center"
                    color="var(--foreground)"
                  >
                    <Icon as={FiTwitter} boxSize={12} strokeWidth="1px" />
                    <LinkOverlay
                      fontWeight="bold"
                      fontSize="sm"
                      as={Link}
                      isExternal
                      href="https://twitter.com/jnsdls"
                    >
                      Twitter
                    </LinkOverlay>
                  </Stack>
                </GridItem>
                <GridItem>
                  <Stack
                    as={LinkBox}
                    spacing={2}
                    align="center"
                    color="var(--foreground)"
                  >
                    <Icon as={FiGithub} boxSize={12} strokeWidth="1px" />
                    <LinkOverlay
                      fontWeight="bold"
                      fontSize="sm"
                      as={Link}
                      isExternal
                      href="https://github.com/jnsdls"
                    >
                      GitHub
                    </LinkOverlay>
                  </Stack>
                </GridItem>
                <GridItem>
                  <Stack
                    as={LinkBox}
                    spacing={2}
                    align="center"
                    color="var(--foreground)"
                  >
                    <Icon as={FiInstagram} boxSize={12} strokeWidth="1px" />
                    <LinkOverlay
                      fontWeight="bold"
                      fontSize="sm"
                      as={Link}
                      isExternal
                      href="https://www.instagram.com/jonasdaniels_/"
                    >
                      Instagram
                    </LinkOverlay>
                  </Stack>
                </GridItem>
              </SimpleGrid>
            </Container>
          </Box>
        </Stack>
      </Grid>
    </>
  );
}
