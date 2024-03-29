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
            <div className="tw-text-2xl tw-font-semibold md:tw-text-3xl lg:tw-text-4xl">
              InfoSight is your first stop when searching for compliance
              answers.
            </div>
            <div className="tw-space-y-2 lg:tw-text-lg">
              <div>
                Think of it as a <em>free</em>, online compliance resource at
                your fingertips, containing federal and state-specific content
                that is accurate, concise and detailed on a wide range of topics
                and issues.{" "}
              </div>
              <div>
                Click the below button to access InfoSight. Sign in with the
                same credentials used for LSCU
              </div>
            </div>
            <Button
              text="Access Now"
              link="https://lscu.leagueinfosight.com/"
              variant="light"
            />
          </div>
          <div>
            <a href="https://lscu.leagueinfosight.com/">
              <img
                className="tw-mx-auto tw-rounded-md tw-pb-4 tw-shadow-lg"
                src="https://lscu.coop/member-engagement/imgs/info-sight-banner.png"
              />
            </a>
            <VideoContainer src="https://www.youtube.com/embed/GQMF2axKWo0?si=LKTMaumm_Sc6s8pZ" />
          </div>
        </TwoCol>
      </div>
    </Section>
  );
};

export default InfoSight;
