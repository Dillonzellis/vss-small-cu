import Section from "../layout/Section";
import { ContentProps } from "../utils/sectionProps";

const Welcome2 = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-gap-8 tw-grid md:tw-grid-cols-5">
        <div className="md:tw-col-span-2 tw-bg-white tw-p-2 tw-rounded tw-flex tw-justify-center tw-items-center">
          <img src="https://lscu.coop/member-engagement/imgs/vss-logo-vert.png" />
        </div>
        <div className="md:tw-col-span-3 tw-text-brandingNeutral-100">
          Small credit unions are faced with a variety of challenges in
          today&apos;s competitive marketplace. LSCU emphasizes the importance
          of small credit unions through our Small Credit Union program. The
          Small Credit Union program is designed to facilitate growth and
          provide solutions to the challenges impeding growth for credit unions
          $100 million in assets and under.
        </div>
      </div>
    </Section>
  );
};

export default Welcome2;
