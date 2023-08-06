import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";
import { createContext } from "./context";
import { multiRouter } from "./router/_app";

export const handler = awsLambdaRequestHandler({
  router: multiRouter,
  createContext: createContext,
});
