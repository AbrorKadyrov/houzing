import useUniqueId from "../hooks/useId";
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
];
