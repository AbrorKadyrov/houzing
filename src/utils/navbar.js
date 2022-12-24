import React, { lazy } from "react";
import Signin from "../pages/Signin";
import useUniqueId from "../hooks/useId";

const Homepage = lazy(() => import("../pages/Home"));
const PropertiesPage = lazy(() => import("../pages/Properties"));
const ContactPage = lazy(() => import("../pages/Contacts"));
const HouseItemPage = lazy(() => import("../pages/HouseItem"));

export const navbar = [
  {
    id: useUniqueId,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Homepage />
      </React.Suspense>
    ),

    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PropertiesPage />
      </React.Suspense>
    ),

    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <ContactPage />
      </React.Suspense>
    ),
    title: "Contacts",
    path: "/contacts",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <HouseItemPage />
      </React.Suspense>
    ),
    title: "Single",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    element: <Signin />,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    element: <h1>generic sign up</h1>,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
