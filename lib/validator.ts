import { z } from "zod"

export const eventformSchema = z.object({
  title: z.string().min(3, 'title must be at least characters'),
  description: z.string().min(3, 'description must be at least characters').max(400, 'description must be less then 400 characters'),
  location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 characters'),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url()
})
