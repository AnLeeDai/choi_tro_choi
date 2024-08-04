export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Chơi trò chơi",
  description: "Make beautiful websites regardless of your design experience.",
  favicon: "/favicon.ico",

  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],

  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },

    {
      label: "Logout",
      href: "/logout",
    },
  ],

  links: {
    github: "https://github.com/AnLeeDai/choi_tro_choi",
  },

  appRoute: {
    home: "/",
    register: "/register",
    login: "/login",
  },
};
