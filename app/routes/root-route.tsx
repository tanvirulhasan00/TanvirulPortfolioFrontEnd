import { useEffect, useState } from "react";

import { redirect, useLoaderData, useNavigate } from "react-router";
import type { Route } from "./+types/root-route";

export const clientLoader = async ({ request }: Route.ClientLoaderArgs) => {
  const token = "hh";
  if (!token) {
    return redirect("/auth/login");
  }
  return { token };
};

const RootRoute = () => {
  const { token } = useLoaderData<typeof clientLoader>();
  const navigate = useNavigate();
  useEffect(() => {
    token ? navigate("/dashboard") : navigate("/auth/login");
  }, [token]);
};

export default RootRoute;
