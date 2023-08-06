import { StackContext, Api, EventBus, StaticSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    cors: true,
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
      "GET /trpc/{proxy+}": "packages/functions/src/trpc/lambda.handler",
      "POST /trpc/{proxy+}": "packages/functions/src/trpc/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
