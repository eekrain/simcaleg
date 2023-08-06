import { CreateAWSLambdaContextOptions } from "@trpc/server/adapters/aws-lambda";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import type { inferAsyncReturnType } from "@trpc/server";
import { createVerifier } from "fast-jwt";
import { getPublicKey } from "sst/node/auth";
import https from "https";
import { Config } from "sst/node/config";

const getCookie = (name: string, cookies: string[] = []) => {
  const mapped = Object.fromEntries(cookies.map((c) => c.split("=")));
  return mapped[name];
};

// function getSession(event: APIGatewayProxyEventV2): MySession {
//   let token: string | undefined;

//   const header = event.headers.authorization;
//   const split = header?.split(" ");
//   // console.log("🚀 ~ file: context.ts:18 ~ getSession ~ split:", split);
//   if (split?.[0] === "Bearer" && split?.[1].length > 5) {
//     token = split[1];
//     // console.log("🚀 ~ file: context.ts:20 ~ getSession ~ token:", token);
//   }

//   if (token) {
//     try {
//       const data = createVerifier({
//         algorithms: ["RS512"],
//         key: getPublicKey(),
//       })(token);
//       return data;
//     } catch (error) {
//       return {
//         type: "public",
//       };
//     }
//   }

//   return {
//     type: "public",
//   };
// }

export const createContext = (
  opts: CreateAWSLambdaContextOptions<APIGatewayProxyEventV2>
) => {
  // const session = getSession(opts.event);
  const tenantId = opts.event.headers["x-tenant-id"];

  // const myRedis = new Redis({
  //   agent: new https.Agent({ keepAlive: true }),
  //   url: Config.UPSTASH_REDIS_REST_URL,
  //   token: Config.UPSTASH_REDIS_REST_TOKEN,
  // });

  return { ...opts, tenantId };
}; // no context

export type IContext = inferAsyncReturnType<typeof createContext>;
