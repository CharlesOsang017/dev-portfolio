
"use client"
// import { signUpSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { useSignUpMutation } from "@/hooks/use-auth";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { signUpSchema } from "@/lib/schemas";
import { useSignUpMutation } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export type SignUpFormData = z.infer<typeof signUpSchema>;
const SignUp = () => {
    const router = useRouter()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate, isPending } = useSignUpMutation();

  const handleOnSubmit = (values: SignUpFormData) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("Account created successfully");
        form.reset();
        router.push("/admin/login");
      },
      onError: (error: any) => {
        const errorMessage = error?.response?.data?.message;
        toast.error(errorMessage || "Something went wrong");
      },
    });
  };
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4'>
      <Card className='max-w-md w-full shadow-xl'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>
            Create an Admin Account
          </CardTitle>
          <CardDescription className='text-sm text-muted-foreground text-center'>
            Create an account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleOnSubmit)}
              className='space-y-6'
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input type='text' placeholder='john doe' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='email@example.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className='relative flex items-center justify-between'>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder='email@example.com'
                          {...field}
                        />
                        {showPassword ? (
                          <Eye
                            onClick={() => setShowPassword((prev) => !prev)}
                            className='absolute right-2 cursor-pointer'
                            size={20}
                          />
                        ) : (
                          <EyeOff
                            onClick={() => setShowPassword((prev) => !prev)}
                            className='absolute right-2 cursor-pointer'
                            size={20}
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className='relative flex items-center justify-between'>
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder='email@example.com'
                          {...field}
                        />
                        {showConfirmPassword ? (
                          <Eye
                            onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                            }
                            className='absolute right-2 cursor-pointer'
                            size={20}
                          />
                        ) : (
                          <EyeOff
                            onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                            }
                            className='absolute right-2 cursor-pointer'
                            size={20}
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={isPending}
                type='submit'
                className='w-full cursor-pointer'
              >
                {isPending ? "Signing Up..." : "Sign Up"}
              </Button>
            </form>
          </Form>
          <CardFooter className='flex justify-center mt-2'>
            <div className='flex items-center justify-center'>
              <p className='text-sm text-muted-foreground'>
                Already have an account?{" "}
                <Link className='text-blue-600' href='/admin/login'>
                  Sign In
                </Link>
              </p>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;