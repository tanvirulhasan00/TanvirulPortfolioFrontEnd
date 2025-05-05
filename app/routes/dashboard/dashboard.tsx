import React from "react";
import { Form, Outlet, redirect, useLoaderData } from "react-router";
import type { Route } from "./+types/dashboard";
import DashboardComponent from "~/components/DashboardComponent";
import { authCookie, userIdCookie } from "~/components/cookies/cookies";

export const clientLoader = async ({ request }: Route.ClientLoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const token = (await authCookie.parse(cookieHeader)) || null;
  const userId = (await userIdCookie.parse(cookieHeader)) || null;
  // if (!token) {
  //   return redirect("/auth/login");
  // }
  return { userId };
};
export const clientAction = async ({ request }: Route.ClientActionArgs) => {
  console.log("click");
  return "";
};

const Dashboard = () => {
  const { userId } = useLoaderData<typeof clientLoader>();
  return (
    <DashboardComponent userId={userId}>
      {/* <Form method="post"> */}
      <Outlet />
      {/* </Form> */}
    </DashboardComponent>
  );
};

export default Dashboard;
