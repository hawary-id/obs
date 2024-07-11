import { z } from 'zod';

export const userFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  username: z.string().min(1, { message: 'Username is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  address: z.object({
    street: z.string().min(1, { message: 'Street is required' }),
    suite: z.string().min(1, { message: 'Suite is required' }),
    city: z.string().min(1, { message: 'City is required' }),
    zipcode: z.string().min(1, { message: 'Zip code is required' }),
    //   geo: z.object({
    //     lat: z.string().min(1, { message: "Latitude is required" }),
    //     lng: z.string().min(1, { message: "Longitude is required" }),
    //   }),
  }),
  phone: z.string().min(1, { message: 'Phone is required' }),
  website: z.string().min(1, { message: 'Website is required' }),
  company: z.object({
    name: z.string().min(1, { message: 'Company name is required' }),
    catchPhrase: z.string().optional(),
    bs: z.string().optional(),
  }),
});
