import { worker } from "~/mocks/browser";

export default defineNuxtPlugin(async () => {
  await worker.start();
});
