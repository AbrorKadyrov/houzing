import React, { lazy } from "react";
import useUniqueId from "../hooks/useId";
import { ContactPage } from "../pages/Contacts";
const Homepage = lazy(() => import("../pages/Home"));

const PropertiesPage = lazy(() => import("../pages/Properties"));
// import { PropertiesPage } from "../pages/Properties";
// import { Homepage } from "../pages/Home";

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
    element: <ContactPage />,
    title: "Contacts",
    path: "/contacts",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: <h1>Generic Sign In</h1>,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    element: <h1>Generic Sign Up</h1>,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
