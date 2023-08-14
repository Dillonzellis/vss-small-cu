type CircleProps = {
  title: string;
  link: string;
  imgSrc?: string;
}

const Circle = ({ title, link, imgSrc }: CircleProps) => {
  return (
    <a href={link} className="magic-circles tw-gap-4 tw-px-6 tw-rounded-full hover:tw-shadow-brandingBlue-700/40 tw-h-[14rem] tw-w-[14rem] tw-flex tw-flex-col tw-justify-center tw-items-center tw-shadow-lg">
      {imgSrc && <img className="tw-bg-white tw-p-1 tw-rounded-md tw-shadow-lg" src={imgSrc} />}
      <div className="tw-text-center tw-text-white tw-font-bold tw-text-lg">{title}</div>
    </a>
  )
}

export default Circle;
