import Button from "../Button";
import Section from "../layout/Section";
import TwoCol from "../layout/TwoCol";
import { ContentProps } from "../utils/sectionProps";

const InfoSight = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div>
        <img
          className="tw-mx-auto tw-pb-8"
          src="https://lscu.coop/member-engagement/imgs/info-sight-banner.png"
        />
        <TwoCol>
          <div className="tw-flex tw-flex-col tw-gap-4 tw-text-brandingBlue-700">
            <div className="tw-font-semibold tw-text-xl">
              InfoSight is your first stop when searching for compliance
              answers.
            </div>
            <div>
              Think of it as a <em>free</em>, online compliance resource at your
              fingertips, containing federal and state-specific content that is
              accurate, concise and detailed on a wide range of topics and
              issues. Click the below button to access InfoSight. Sign in with
              the same credentials used for LSCU
            </div>
            <Button text="button" link="#" />
          </div>
          <div>
            <iframe
              className="tw-rounded-md tw-max-w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </TwoCol>
      </div>
    </Section>
  );
};

export default InfoSight;
