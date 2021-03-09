import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import { getColor, mode } from "@chakra-ui/theme-tools";
import color from "color";

const brandBase = color("#561CE3");

const brandColor: Record<number, string> = {};
brandColor[100] = brandBase.lighten(0.1).whiten(0.1).hex();
brandColor[200] = brandColor[500] = brandBase.hex();
brandColor[300] = brandColor[600] = brandBase.darken(0.1).blacken(0.1).hex();

const colors = { brand: brandColor };

const config = {
  initialColorMode: "light" as const,
  useSystemColorMode: false,
};

const styles = {
  global: (props: Record<string, any>) => ({
    html: {
      "--background": mode("#f9f9f9", "#000")(props),
      "--accents-1": mode(getColor(defaultTheme, "#fff"), "#111")(props),
      "--foreground": mode(
        getColor(defaultTheme, "#000"),
        getColor(defaultTheme, "#fff")
      )(props),
      "--secondary": mode(
        getColor(defaultTheme, "blackAlpha.800"),
        getColor(defaultTheme, "whiteAlpha.800")
      )(props),
    },
    body: {
      color: "var(--foreground)",
      bgColor: "var(--background)",
      bg: "url(/images/topography.svg)",
      marginLeft: 0,
      marginRight: 0,
      maxWidth: "100%",
    },
    p: {
      color: "var(--secondary)",
    },
  }),
};

const theme = extendTheme({ config, styles, colors });
export default theme;
