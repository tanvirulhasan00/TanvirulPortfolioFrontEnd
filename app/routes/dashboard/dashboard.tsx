import React from "react";
import { Form, Outlet, redirect, useLoaderData } from "react-router";
import type { Route } from "./+types/dashboard";
import DashboardComponent from "~/components/DashboardComponent";
import { authCookie, userIdCookie } from "~/components/cookies/cookies";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const token = (await authCookie.parse(cookieHeader)) || null;
  const userId = (await userIdCookie.parse(cookieHeader)) || null;
  if (!token) {
    return redirect("/auth/login");
  }
  return { userId };
};
export const action = async ({ request }: Route.ActionArgs) => {
  console.log("click");
};

const Dashboard = () => {
  const { userId } = useLoaderData<typeof loader>();
  return (
    <DashboardComponent userId={userId}>
      {/* <Form method="post"> */}
      <Outlet />
      {/* </Form> */}
    </DashboardComponent>
  );
};

export default Dashboard;
