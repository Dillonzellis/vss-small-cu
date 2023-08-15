export type Color = "blue" | "lightBlue" | "lightOne" | "lightTwo" | 'green' | "white" | "dark";

export const colorClasses: Record<Color, string> = {
  blue: "dark-gradient",
  lightBlue: "light-blue-gradient",
  lightOne: "light-gradient-1",
  lightTwo: "light-gradient-2",
  green: "green-gradient",
  white: "tw-bg-brandingBlue-100",
  dark: "tw-bg-slate-700"
};
