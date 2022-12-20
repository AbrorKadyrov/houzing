import useUniqueId from "../hooks/useId";
import { ContactPage } from "../pages/Contacts";
import { Homepage } from "../pages/Home";
import { PropertiesPage } from "../pages/Properties";

export const navbar = [
  {
    id: useUniqueId,
    element: <Homepage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: <PropertiesPage />,
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
