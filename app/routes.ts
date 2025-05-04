import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/root-route.tsx"),
  route("dashboard", "routes/dashboard/dashboard.tsx", [
    index("routes/dashboard/home.tsx"),
    route("about-me", "routes/dashboard/about.tsx"),
  ]),
  route("auth/login", "routes/auth/login.tsx"),
  route("auth/sign-up", "routes/auth/sign-up.tsx"),
] satisfies RouteConfig;
