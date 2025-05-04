import {
  Code,
  Home,
  User2Icon,
  BriefcaseBusiness,
  GraduationCap,
  CpuIcon,
  Handshake,
  Mail,
} from "lucide-react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const NavMenu = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "My Profile",
    url: "#",
    icon: User2Icon,
  },
  {
    title: "Projects",
    url: "#",
    icon: Code,
  },
  {
    title: "Educations",
    url: "#",
    icon: GraduationCap,
  },
  {
    title: "Experiences",
    url: "#",
    icon: BriefcaseBusiness,
  },
  {
    title: "Technologys",
    url: "#",
    icon: CpuIcon,
  },
  {
    title: "Services",
    url: "#",
    icon: Handshake,
  },
  {
    title: "Customer Messages",
    url: "#",
    icon: Mail,
  },
];
export const User = {
  name: "Tanvirul hasan",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};
export const LoginRequest = async (username: string, password: string) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5199/api/v1/authentication/login",
      {
        userName: username,
        password: password,
        headers: {
          Accept: "text/plain",
          "Content-Type": "application/json",
        },
      }
    );
    const user = data;
    return user;
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export const Registration = () => {};
export const Person = () => {};
