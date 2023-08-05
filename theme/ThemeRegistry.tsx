"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const themeOptions: ThemeOptions = {
  palette: {
    // mode: "light",
    primary: {
      main: "#182e45", // Linear's primary color (almost black)
    },
    // secondary: {
    //   main: "#182e45", // Linear's secondary color (purple)
    // },
    background: {
      default: "#F9F9F9", // Linear's background color (off-white)
      // paper: "#ffffff",
    },
    // text: {
    //   primary: "#6B6B8F", // Linear's text color (almost black)
    //   // secondary: "#7D50F9", // Linear's secondary text color (purple)
    // },
    // action: {
    //   hover: "#F2F2F5",
    //   selected: "#F9F9FC",
    // },
  },
  typography: {
    fontFamily: "Blinker, sans-serif",

    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSize: 14,

    h1: {},

    h2: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    h3: {
      fontFamily: "ITCAvantGardeStd",
      color: "#080844",
    },
    h4: {
      fontWeight: 400,
      fontSize: "1.25rem",
    },
    h5: {
      color: "#080844",
      fontFamily: "Blinker",
      fontWeight: 400,
      fontSize: "1.1rem",
    },

    h6: {},
    body1: {
      fontFamily: "Blinker",
      fontSize: "1rem",
      color: "#000",
      fontWeight: "400",
      letterSpacing: "0.125px",
    },
    body2: {
      fontWeight: 400,
      color: "#6B6B8F",
      fontFamily: "HelveticaNeue",
      fontSize: "1rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
