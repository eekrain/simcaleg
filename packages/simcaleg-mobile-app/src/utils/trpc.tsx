import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import type { MyRouter } from "../../../functions/src/trpc/utils";
import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const trpc = createTRPCReact<MyRouter>();

export const TrpcProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "https://7augloejyl.execute-api.us-east-1.amazonaws.com/trpc",
          // You can pass any HTTP headers you wish here
          headers() {
            return {
              "x-tenant-id": "JOKOWI",
            };
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
