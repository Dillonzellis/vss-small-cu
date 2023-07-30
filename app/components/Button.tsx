type ButtonProps = {
  text: string;
  link: string;
};

const Button = ({ text, link }: ButtonProps) => {
  return (
    <div className="tw-inline-flex">
      <a
        className="tw-capitalize tw-border-2 tw-bg-brandingNeutral-100 tw-text-brandingBlue-400 tw-font-semibold tw-border-brandingBlue-400  tw-rounded-lg tw-px-8 tw-py-2"
        href={link}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
