import Button from "../Button";
import VideoContainer from "../VideoContainer";
import Section from "../layout/Section";
import TwoCol from "../layout/TwoCol";
import { ContentProps } from "../utils/sectionProps";

const InfoSight = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div>
        <TwoCol>
          <div className="tw-flex tw-flex-col tw-gap-4 tw-text-brandingBlue-100">
            <div className="tw-font-semibold tw-text-4xl">
              InfoSight is your first stop when searching for compliance
              answers.
            </div>
            <div className="tw-text-lg tw-space-y-2">
              <div>
                Think of it as a <em>free</em>, online compliance resource at your
                fingertips, containing federal and state-specific content that is
                accurate, concise and detailed on a wide range of topics and
                issues.               </div>
              <div>
                Click the below button to access InfoSight. Sign in with
                the same credentials used for LSCU
              </div>
            </div>
            <Button text="button" link="#" variant="light" />
          </div>
          <div>
            <img
              className="tw-mx-auto tw-pb-4 tw-rounded-md tw-shadow-lg"
              src="https://lscu.coop/member-engagement/imgs/info-sight-banner.png"
            />
            <VideoContainer src="https://www.youtube.com/embed/ScMzIvxBSi4" />
          </div>
        </TwoCol>
      </div>
    </Section>
  );
};

export default InfoSight;
