"use client";

import {
  createSystem,
  defaultConfig,
  defineConfig,
  ChakraProvider,
} from "@chakra-ui/react";
import * as React from "react";

const system = createSystem(
  defaultConfig,
  defineConfig({
    preflight: false, // Disable Emotion CSS reset so Tailwind CSS v4 is preserved
  })
);

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
