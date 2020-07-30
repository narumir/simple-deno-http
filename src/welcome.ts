import {
  listenAndServe,
} from "https://deno.land/std@0.62.0/http/server.ts";
import type {
  ServerRequest,
} from "https://deno.land/std@0.62.0/http/server.ts";

const serveOption: Deno.ListenOptions = {
  port: 3000,
};

const httpHandler = async (
  req: ServerRequest,
) => {
  await req.respond({
    body: "Hello Narumir",
  });
};

await listenAndServe(serveOption, httpHandler);
console.log("http://localhost:3000");
