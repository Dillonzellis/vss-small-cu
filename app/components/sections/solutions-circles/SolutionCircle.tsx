type SolutionCirclesProps = {
  title: string;
  link: string;
}

const SolutionCircle = ({ title, link }: SolutionCirclesProps) => {
  return (
    <a href={link} className="magic-circles tw-gap-4 tw-px-6 tw-rounded-full hover:tw-shadow-brandingBlue-700/40 tw-h-[14rem] tw-w-[14rem] tw-flex tw-flex-col tw-justify-center tw-items-center tw-shadow-lg">
      <img className="tw-bg-white tw-p-1 tw-rounded-md tw-shadow-lg" src="https://lscu.coop/member-engagement/imgs/vss-logo-vert.png" />
      <div className="tw-text-center tw-text-white tw-font-bold tw-text-lg">{title}</div>
    </a>
  )
}

export default SolutionCircle
