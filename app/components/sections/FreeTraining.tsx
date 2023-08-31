import Section from "../layout/Section";
import VideoContainer from "../VideoContainer";
import { ContentProps } from "../utils/sectionProps";

const FreeTraining = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-max-w-[500px] tw-mx-auto">
        <VideoContainer src="https://www.youtube.com/embed/5_n1zxf3EjM" />
      </div>
    </Section>
  );
};

export default FreeTraining;
