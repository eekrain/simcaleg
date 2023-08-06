import { publicProcedure, router } from "../../utils";
import { z } from "zod";

const testRouter = router({
  getUser: publicProcedure.input(z.string()).query((opts) => {
    opts.input; // string
    return { id: opts.input, name: "Bilbo" };
  }),
});

export default testRouter;
