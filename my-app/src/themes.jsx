import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#D3D3D3",
    200: "#A9A9A9",
    300: "#36454F",
    400: "#C0C0C0",
    500: "#F5F5F5",
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
