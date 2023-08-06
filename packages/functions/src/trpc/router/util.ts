// import { WILAYAH_INDO_2022_CHUNKS } from "@personal-branding/core/constants";
// import {
//   WilayahIndo,
//   WilayahIndoEntityRecord,
// } from "@personal-branding/core/electrodb";
// import { z } from "zod";
// import { publicProcedure, router } from "../utils";

// const utilRouter = router({
//   hello: publicProcedure.query(async ({ input, ctx }) => {
//     return { message: "Hello there" };
//   }),
//   getLastWilayah: publicProcedure
//     .input(
//       z.object({
//         kode: z.string(),
//       })
//     )
//     .query(async ({ input, ctx }) => {
//       const lastWilayah = await WilayahIndo.WilayahIndoEntity.get({
//         kode: input.kode,
//       }).go();
//       console.log(
//         "🚀 ~ file: util.ts:18 ~ getLastWilayah:publicProcedure.query ~ lastWilayah:",
//         lastWilayah
//       );
//       return lastWilayah.data;
//     }),
//   initWilayah: publicProcedure.mutation(async ({ input, ctx }) => {
//     const isAny = await WilayahIndo.WilayahIndoEntity.scan.go();
//     console.log(
//       "🚀 ~ file: util.ts:12 ~ initWilayah:publicProcedure.mutation ~ isAny.data.length:",
//       isAny.data.length
//     );
//     if (isAny.data.length < 100) {
//       const wilayahChunks = WILAYAH_INDO_2022_CHUNKS;
//       const totalChunks = WILAYAH_INDO_2022_CHUNKS.length;
//       let i = 1;
//       for (const wilayah5k of wilayahChunks) {
//         console.log(
//           `🚀 ~ file: util.ts:23 ~ looping : ${i} time, from total: ${totalChunks}`
//         );
//         const res = await WilayahIndo.WilayahIndoEntity.put(wilayah5k).go();
//         console.log(
//           `Need insert: ${wilayah5k.length}, inserted: ${res.unprocessed.length}`
//         );
//         i++;
//       }
//       return { message: "DONE INIT" };
//     }
//     return { message: "ALREADY INIT" };
//   }),
//   dellAllWilayah: publicProcedure.mutation(async ({ input, ctx }) => {
//     const getAll = await WilayahIndo.WilayahIndoEntity.scan.go({
//       pages: "all",
//     });
//     const wilayahChunks = [];

//     const chunkSize = 20000;
//     for (let i = 0; i < getAll.data.length; i += chunkSize) {
//       const chunk = getAll.data.slice(i, i + chunkSize);
//       wilayahChunks.push(chunk);
//     }

//     const totalChunks = wilayahChunks.length;
//     let i = 1;
//     for (const wilayah5k of wilayahChunks) {
//       console.log(
//         `🚀 ~ file: util.ts:23 ~ looping : ${i} time, from total: ${totalChunks}`
//       );
//       const res = await WilayahIndo.WilayahIndoEntity.delete(wilayah5k).go();
//       console.log(
//         `Need delete: ${wilayah5k.length}, deleted: ${res.unprocessed.length}`
//       );
//       i++;
//     }

//     return { message: "DELETE SUCCEED" };
//   }),
// });
// export default utilRouter;
