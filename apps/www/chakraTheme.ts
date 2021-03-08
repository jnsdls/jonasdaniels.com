import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import { getColor, mode } from "@chakra-ui/theme-tools";
import color from "color";

// brand color: '#561CE3'
//

const brandBase = color("#561CE3");

const brandColor: Record<number, string> = {};
brandColor[100] = brandBase.lighten(0.1).whiten(0.1).hex();
brandColor[200] = brandColor[500] = brandBase.hex();
brandColor[300] = brandColor[600] = brandBase.darken(0.1).blacken(0.1).hex();

const colors = { brand: brandColor };

const config = {
  initialColorMode: "dark" as const,
  useSystemColorMode: false,
};

const styles = {
  global: (props: Record<string, any>) => ({
    html: {
      "--brand": brandColor[500],
      "--background": mode(getColor(defaultTheme, "gray.100"), "#222")(props),
      "--accents-1": mode(getColor(defaultTheme, "gray.200"), "#111")(props),
      "--accents-2": mode(getColor(defaultTheme, "gray.50"), "#303030")(props),
      "--foreground": mode(
        getColor(defaultTheme, "gray.900"),
        getColor(defaultTheme, "whiteAlpha.900")
      )(props),
      "--guideDashedColor": "rgba(255,255,255,0.09)",
      "--guideSolidColor": "rgba(255,255,255,0.06)",
    },
    body: {
      color: "var(--foreground)",
      bg: "var(--background)",
      marginLeft: 0,
      marginRight: 0,
      maxWidth: "100%",
    },
  }),
};

const theme = extendTheme({ config, styles, colors });
export default theme;
