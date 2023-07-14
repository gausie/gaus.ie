import { extendBaseTheme, extendTheme } from "@chakra-ui/react"

const theme = {
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
    disableTransitionOnChange: false,
  },
  colors: {
    transparent: 'transparent',
  }
};

export default extendTheme(theme);