import { User } from "../types/types";

export const userData: User = {
  name: "Alice",
  email: "alice@example.com",
};

export const footer = {
  copyRightText: "all rights reserved",
  email: userData.email,
};

export const navlinks = [
  {
    name: "WORKS",
    link: "LatestProjects",
    elementId: "LatestProjects",
  },
  {
    name: "CONTACTS",
    link: "",
    elementId: "CallAlice",
  },
];

export const navbar_details = {
  logo: "https://static.vecteezy.com/system/resources/previews/006/816/978/non_2x/code-icon-coding-symbol-coding-programming-sign-free-vector.jpg",
  name: userData.name,
};

export const socials = [
  {
    link: "https://dribbble.com/",
    icon: "https://img.icons8.com/?size=100&id=Wkmw3VcFPr8T&format=png&color=000000",
    name: "dribbble",
  },
  {
    link: "https://github.com/",
    icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
    name: "github",
  },
  {
    link: "https://facebook.com/",
    icon: "https://img.icons8.com/?size=100&id=118497&format=png&color=000000",
    name: "facebook",
  },
  {
    link: "https://twitter.com/",
    icon: "https://img.icons8.com/?size=100&id=13963&format=png&color=000000",
    name: "twitter",
  },
];

export const heroDetails = {
  bio: "Work for money and design for love! I'm Alice, an UI/UX Interaction Designer based in England",
  location: "London, England",
  PNO: "+44 1234567890",
  services: ["Website Design", "UI/UX Development", "Graphic Design"],
  YOR: "8+",
  Clients: "80+",
  Projects: "67",
};
