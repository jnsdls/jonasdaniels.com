import { chakra } from "@chakra-ui/react";
import NImage from "next/image";

export const OptimizedImage = chakra(NImage, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout", "priority", "loading"].includes(
      prop
    ),
  baseStyle: {
    objectFit: "contain",
  },
});
