import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export type SidebarItem = {
  title: string;
  path: string;
  icon: JSX.Element;
  iconClosed?: JSX.Element;
  iconOpened?: JSX.Element;
  subNav?: SidebarItem[];
};


export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: "Workshop",
    path: "/services",
    icon: <FaIcons.FaList />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Services",
        path: "/services",
        icon: <FaIcons.FaToolbox />,
      },
      {
        title: "Devices",
        path: "/devices",
        icon: <FaIcons.FaTools />,
      },
      {
        title: "Parts",
        path: "/parts",
        icon: <FaIcons.FaTools />,
      },
      {
        title: "Brands",
        path: "/brands",
        icon: <FaIcons.FaCopyright />,
      },
      {
        title: "Models",
        path: "/models",
        icon: <FaIcons.FaCopyright />,
      },
    ],
  },
  {
    title: "People",
    path: "/clients",
    icon: <FaIcons.FaList />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Operators",
        path: "/operators",
        icon: <FaIcons.FaUser />,
      },
      {
        title: "Providers",
        path: "/providers",
        icon: <FaIcons.FaUsers />,
      },
      {
        title: "Clients",
        path: "/clients",
        icon: <FaIcons.FaUsers />,
      },
    ],
  },
  {
    title: "About us",
    path: "/about-us",
    icon: <FaIcons.FaUser />,
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },

];