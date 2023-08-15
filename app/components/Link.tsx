type LinkProps = {
  children: React.ReactNode;
  href: string;
}

const Link = ({ children, href }: LinkProps) => {
  return (
    <a className="tw-text-brandingBlue-100 tw-text-xl hover:tw-underline tw-font-semibold" href={href}>{children}</a>
  )
}

export default Link;
