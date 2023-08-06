import { router } from "../utils";
import testRouter from "./test";

export const multiRouter = router({
  test: testRouter,
});
