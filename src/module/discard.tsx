// const goalSchema = z.object({
//   title: z.string().min(5, { message: "O título deve ter pelo menos 5 caracteres." }),
//   startDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
//     message: "Formato de data inválido.",
//   }),
//   endDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
//     message: "Formato de data inválido.",
//   }),
//   status: z.enum(["PENDING", "COMPLETED", "CANCELED"]),
//   userId: z.string(),
//   subTasks: z
//     .array(
//       z.object({
//         title: z.string().min(5, { message: "O título da subtarefa deve ter pelo menos 5 caracteres." }),
//         startDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
//           message: "Formato de data inválido.",
//         }),
//         endDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
//           message: "Formato de data inválido.",
//         }),
//         status: z.enum(["PENDING", "COMPLETED", "CANCELED"]),
//       })
//     )
//     .optional(),
// }).refine((data) => new Date(data.startDate) < new Date(data.endDate), {
//   message: "A data de início deve ser anterior à data de término.",
//   path: ["startDate"],
// });


