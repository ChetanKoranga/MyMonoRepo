import {
  HomeIcon,
  UserIcon,
  CogIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  LockOpenIcon,
  DevicePhoneMobileIcon,
  ClipboardIcon,
} from "@heroicons/react/24/solid";

export const sideMenuConfig = [
  {
    label: "Home",
    Icon: HomeIcon,
    to: "/",
  },
  {
    label: "Profile",
    Icon: UserIcon,
    to: "/profile",
  },
  {
    label: "Settings",
    Icon: CogIcon,
    to: "/settings",
    children: [
      {
        label: "Form",
        Icon: ClipboardIcon,
        to: "form",
      },
      {
        label: "Security",
        Icon: ShieldCheckIcon,
        to: "security",
        children: [
          {
            label: "Credentials",
            Icon: LockOpenIcon,
            to: "credentials",
          },
          {
            label: "2-FA",
            Icon: DevicePhoneMobileIcon,
            to: "2fa",
          },
        ],
      },
    ],
  },
  {
    label: "Admin",
    Icon: CogIcon,
    to: "/admin",
    children: [
      {
        label: "Account",
        Icon: UserCircleIcon,
        to: "account",
      },
      {
        label: "Security",
        Icon: ShieldCheckIcon,
        to: "security",
        children: [
          {
            label: "Credentials",
            Icon: LockOpenIcon,
            to: "credentials",
          },
          {
            label: "2-FA",
            Icon: DevicePhoneMobileIcon,
            to: "2fa",
          },
        ],
      },
    ],
  },
];
