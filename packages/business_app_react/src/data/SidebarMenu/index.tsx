// import About from "../../assets/SidebarIcons/setting.svg";
// import About from "../../assets/SidebarIcons/setting.svg";
// import About from "../../assets/SidebarIcons/setting.svg";
// import About from "../../assets/SidebarIcons/setting.svg";
// import Setting from "../../assets/SidebarIcons/setting.svg";

export const SIDEBAR_CONFIG = [
  {
    icon: '',
    key: "DEVICES",
    link: "/devices",
    title: "Devices",
    children: [
      {
        key: "DEVICES-PORTABLE",
        link: "/devices/portable",
        title: "Portable",
        children: [
          {
            key: "DEVICES-PORTABLE-CHILD",
            link: "/about/contact/portable",
            title: "Device1",
          },
          {
            key: "DEVICES-NON-PORTABLE-CHILD",
            link: "/devices/non-portable",
            title: "Device2",
          },
        ],
      },
      {
        key: "DEVICES-NON-PORTABLE",
        link: "/devices/non-portable",
        title: "Non Portable",
      },
    ],
  },
  {
    icon: '',
    key: "SETTING",
    link: "/setting",
    title: "Setting",
  },
  {
    icon: '',
    key: "ABOUT",
    title: "About",
    children: [
      {
        key: "ABOUT-CONTACT",
        link: "/about/contact",
        title: "Contact",
        children: [
          {
            key: "ABOUT-PORTABLE",
            link: "/about/contact/portable",
            title: "Portable",
          },
          {
            key: "ABOUT-NON-PORTABLE",
            link: "/devices/non-portable",
            title: "Non Portable",
          },
        ],
      },
      { key: "ABOUT-HELP", link: "/about/help", title: "Help" },
    ],
  },
];
