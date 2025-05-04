import React from "react";
import { Form, Link, redirect } from "react-router";
import type { Route } from "./+types/login";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import ThemeToggler from "~/components/dark-mode/mode-toggler";
import { authCookie, userIdCookie } from "~/components/cookies/cookies";
import { LoginRequest } from "~/components/data";
import { jwtDecode } from "jwt-decode";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tanvirul's Portfolio | Login" },
    {
      name: "description",
      content: "Welcome to Tanvirul's digital world login page!",
    },
  ];
}

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const token = (await authCookie.parse(cookieHeader)) || null;

  if (token) {
    return redirect("/dashboard");
  }
  return { token: token };
};

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const username = formData.get("userName") as string;
  const password = formData.get("password") as string;

  try {
    const response = await LoginRequest(username, password);
    // Extract token
    interface TokenPayload {
      nameid?: string;
      role?: string;
    }
    const { nameid, role } = jwtDecode<TokenPayload>(response.result.token);
    // end
    if (response.success === true) {
      return redirect(
        `/dashboard?message=${response.message}&status=${response.statusCode}`,
        {
          headers: {
            "Set-Cookie": [
              await authCookie.serialize(response.result.token),
              await userIdCookie.serialize(nameid),
            ].join(", "),
          },
        }
      );
    } else {
      return redirect(
        `/auth/login?error=${response.message}&status=${response.statusCode}`
      );
    }
  } catch (error) {
    return redirect(`/auth/login?error=${error}`);
  }
};

const LoginComponent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle className="text-2xl">Login</CardTitle>
                <ThemeToggler />
              </div>
              <CardDescription>
                Enter your uses-name below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form method="post">
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="userName">User Name</Label>
                    <Input id="userName" name="userName" type="text" required />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full cursor-pointer">
                    Login
                  </Button>
                  <Button disabled variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <a href="#" className="underline underline-offset-4">
                    Sign up
                  </a>
                </div>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
