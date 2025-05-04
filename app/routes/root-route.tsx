import { useEffect, useState } from "react";

import { redirect, useLoaderData, useNavigate } from "react-router";
import type { Route } from "./+types/root-route";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const token = "null";
  if (!token) {
    return redirect("/auth/login");
  }
  return { token };
};

const RootRoute = () => {
  const { token } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  useEffect(() => {
    token ? navigate("/dashboard") : navigate("/auth/login");
  }, [token]);
};

export default RootRoute;
