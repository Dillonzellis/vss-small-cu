type LinkProps = {
  children: React.ReactNode;
  href: string;
  dark?: boolean;
}

const Link = ({ children, href, dark }: LinkProps) => {

  const colorClass = dark ? "tw-text-slate-900" : "tw-text-brandingBlue-100";

  return (
    <a className={`${colorClass} tw-text-lg lg:tw-text-xl hover:tw-underline tw-font-semibold`} href={href}>{children}</a>
  )
}

export default Link;
