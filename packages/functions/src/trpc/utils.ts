import { initTRPC, TRPCError } from "@trpc/server";
import { IContext } from "./context";
import { multiRouter } from "./router/_app";
const t = initTRPC.context<IContext>().create({});
export const router = t.router;

const withTenantIdHeader = t.middleware(async ({ ctx, next }) => {
  if (!ctx.tenantId) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Your tenant ID is not defined",
    });
  }

  return next({
    ctx: { ...ctx },
  });
});

export const publicProcedure = t.procedure.use(withTenantIdHeader);

// const withAdminOnly = t.middleware(async ({ ctx, next }) => {
//   if (!ctx.session || ctx.session.properties?.roles === "public") {
//     throw new TRPCError({
//       code: "UNAUTHORIZED",
//       message: "You are not authorized to access this resource",
//     });
//   }
//   return next({
//     ctx: { ...ctx },
//   });
// });

export const adminOnlyProcedure = t.procedure.use(withTenantIdHeader);
// .use(withAdminOnly);

// Export type router type signature,
// NOT the router itself.
export type MyRouter = typeof multiRouter;
