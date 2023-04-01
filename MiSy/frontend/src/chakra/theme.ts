// https://chakra-ui.com/docs/styled-system/customize-theme
import { ThemeConfig, extendTheme } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode:'dark',
    useSystemColorMode:false,
};

export const theme = extendTheme(
    { config },
    {
  colors: {
    brand: {
      100: "#44337A",
    },
  },
  styles: {
    global: () => ({
        body: {
            bg: "Green.800",
        },
    }),

  },
});
