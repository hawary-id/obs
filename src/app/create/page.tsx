'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { userFormSchema } from '@/lib/form-schema';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface IpageProps {}

export default function page() {
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
  });
  const router = useRouter();
  const { toast } = useToast();

  const onSubmit = async (data: z.infer<typeof userFormSchema>) => {
    toast({
      title: 'Succcess',
      description: 'Successfully submitted',
    });
    router.push('/');
  };
  return (
    <div className="flex justify-center">
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>New User</CardTitle>
          <CardDescription>Create New Data User</CardDescription>
        </CardHeader>
        <Separator className="my-4" />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <Form {...form}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Name"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Username"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="Email"
                            placeholder="email"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="address.street"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Streat</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Streat"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="address.suite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Suite</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Suite"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="address.city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="City"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="address.zipcode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Zipcode</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Zipcode"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* <div className="w-full">
                                        <FormField
                                            control={form.control}
                                            name="address.geo.lat"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Lat</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Lat"
                                                            {...field}
                                                            onChange={(e) => field.onChange(e.target.value)}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <FormField
                                            control={form.control}
                                            name="address.geo.lng"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Lng</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Lng"
                                                            {...field}
                                                            onChange={(e) => field.onChange(e.target.value)}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div> */}
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Phone"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Website"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="company.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Company name"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </Form>
          </CardContent>
          <CardFooter className="flex items-center w-full justify-end gap-3">
            <Button variant="outline" asChild>
              <Link href="/">Batal</Link>
            </Button>
            <Button type="submit">Simpan</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
