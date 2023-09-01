type LinkProps = {
  children: React.ReactNode;
  href: string;
  dark?: boolean;
  gradient?: "green";
  target?: "_self" | "_blank";
};

const Link = ({
  children,
  href,
  dark,
  gradient,
  target = "_blank",
}: LinkProps) => {
  const colorClass = dark ? "tw-text-slate-900" : "tw-text-brandingBlue-100";

  let gradientClass = "";

  if (gradient === "green") {
    gradientClass = "green-text-gradient ";
  }

  return (
    <a
      target={target}
      className={`${colorClass} ${gradientClass} tw-text-lg lg:tw-text-xl hover:tw-underline tw-font-semibold`}
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
