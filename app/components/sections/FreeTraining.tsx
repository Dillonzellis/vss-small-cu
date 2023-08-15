import Button from "../Button";
import Section from "../layout/Section";
import TwoCol from "../layout/TwoCol";
import VideoContainer from "../VideoContainer";
import { ContentProps } from "../utils/sectionProps";

const FreeTraining = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-font-bold tw-italic tw-text-center tw-text-5xl tw-pb-10 tw-text-brandingBlue-100">
        Free Training
      </div>
      <TwoCol>
        <VideoContainer src="https://www.youtube.com/embed/5_n1zxf3EjM" />
        <div className="tw-flex tw-flex-col tw-gap-4 tw-justify-center tw-items-center tw-font-semibold tw-text-xl tw-text-brandingBlue-700">
          <Button text="FinCen.gov" link="#" />
          <Button text="FinCent CTR FAQS" link="#" />
          <Button text="FFIEC, BSA Manual" link="#" />
        </div>
      </TwoCol>
    </Section>
  );
};

export default FreeTraining;
