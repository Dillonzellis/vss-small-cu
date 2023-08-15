
type ButtonProps = {
  text: string;
  link: string;
  variant?: any;
};

const Button = ({ text, link, variant }: ButtonProps) => {

  let variantClass = ""

  if (variant === "dark") {
    variantClass = "tw-bg-brandingBlue-400 tw-text-white"
  }

  if (variant === "light") {
    variantClass = "tw-bg-brandingBlue-100 tw-text-brandingBlue-400"
  }

  return (
    <div className="tw-inline-flex">
      <a
        className={`${variantClass} tw-capitalize hover:tw-shadow-md hover:tw-scale-105 tw-transition-all tw-duration-150 tw-ease-in-out tw-text-base tw-font-semibold tw-rounded-full tw-inline-flex tw-items-center tw-justify-center tw-px-10 tw-py-2`}
        href={link}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
