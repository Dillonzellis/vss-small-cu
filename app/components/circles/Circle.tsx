type CircleProps = {
  title: string;
  link: string;
  imgSrc?: string;
  imgVariant?: boolean;
  variant: "light" | "dark";
};

const Circle = ({ title, link, imgSrc, variant, imgVariant }: CircleProps) => {
  const variantClass = variant === "light" ? "light-circle" : "dark-circle";
  const variantText =
    variant === "light" ? "tw-text-white" : "tw-text-slate-900";
  const withImgClass = imgVariant ? "tw-pt-16" : "tw-justify-center";

  return (
    <a
      href={link}
      className={`magic-circles ${variantClass} ${withImgClass} tw-relative tw-translate-y-0 before:tw-absolute before:tw-rounded-full before:tw-opacity-0 hover:tw-translate-y-[-10px] hover:before:tw-opacity-100 tw-gap-4 tw-px-6 tw-rounded-full hover:tw-shadow-brandingBlue-700/40 tw-h-[14rem] tw-w-[14rem] tw-flex tw-flex-col tw-items-center tw-shadow-lg`}
    >
      {imgSrc && (
        <img
          className="tw-bg-white tw-p-1 tw-rounded-md tw-shadow-lg"
          src={imgSrc}
        />
      )}
      <div
        className={`tw-text-center ${variantText} tw-text-lg tw-italic tw-font-bold`}
      >
        {title}
      </div>
    </a>
  );
};

export default Circle;
