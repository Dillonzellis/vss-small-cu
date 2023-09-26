import TwoCol from "../layout/TwoCol";
import Section from "../layout/Section";
import VideoContainer from "../VideoContainer";
import { ContentProps } from "../utils/sectionProps";
import Link from "../Link";

const Welcome = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <TwoCol>
        <div className="tw-flex tw-flex-col tw-gap-4 tw-text-center tw-text-white">
          <div className="tw-text-2xl tw-font-bold tw-italic md:tw-text-3xl lg:tw-text-4xl">
            Welcome to LSCU&apos;s Virtual Learning Center for Small Credit
            Unions!
          </div>
          <div className="tw-text-base lg:tw-text-lg">
            Our team has put together a valuable on-demand resource library
            tailored specifically to meet the needs of small credit unions.
            We&apos;re confident that you will find the information and
            resources provided to be informative and uplifting.
          </div>
          <div className="tw-text-base lg:tw-text-lg">
            At LSCU, we are dedicated to continually enhancing our resources to
            better serve the needs of our small credit unions. Your feedback is
            incredibly valuable to us, and we welcome any suggestions or ideas
            you may have. Please don&apos;t hesitate to get in touch with us at{" "}
            <Link href="mailto:MemberEngagement@LSCU.coop" gradient="green">
              MemberEngagement@LSCU.coop
            </Link>{" "}
            and share your thoughts. Together, we can empower and strengthen our
            credit union community!
          </div>
        </div>
        <VideoContainer src="https://www.youtube.com/embed/ScMzIvxBSi4" />
      </TwoCol>
    </Section>
  );
};

export default Welcome;
