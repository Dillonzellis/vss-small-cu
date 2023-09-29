import Section from "../layout/Section";
import VideoContainer from "../VideoContainer";
import { ContentProps } from "../utils/sectionProps";

const FreeTraining = ({ bgColor }: ContentProps) => {
  return (
    <Section id="bsa-training" bgColor={bgColor}>
      <div className="tw-mx-auto tw-max-w-[500px]">
        <VideoContainer src="https://www.youtube.com/embed/5_n1zxf3EjM" />
      </div>
    </Section>
  );
};

export default FreeTraining;
