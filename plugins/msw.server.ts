import { server } from "~/mocks/node";

export default defineNuxtPlugin(() => {
  server.listen();
});
