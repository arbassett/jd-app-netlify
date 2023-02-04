import solid from "solid-start/vite";
import { defineConfig } from "vite";
// @ts-expect-error no typing
import netlify from "solid-start-netlify";
  
export default defineConfig(() => {
  return {
    plugins: [solid({ ssr: true, adapter: netlify({ edge: false }) })],
  };
});
  