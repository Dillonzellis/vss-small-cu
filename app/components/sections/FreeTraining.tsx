import Button from "../Button";
import Section from "../layout/Section";
import TwoCol from "../layout/TwoCol";
import VideoContainer from "../VideoContainer";
import { ContentProps } from "../utils/sectionProps";
import Link from "../Link";

const FreeTraining = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <TwoCol>
        <VideoContainer src="https://www.youtube.com/embed/5_n1zxf3EjM" />
        <div className="tw-space-y-4 tw-mx-auto"></div>
      </TwoCol>
    </Section>
  );
};

export default FreeTraining;
