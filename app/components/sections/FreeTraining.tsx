import Button from "../Button";
import Section from "../layout/Section";
import TwoCol from "../layout/TwoCol";
import VideoContainer from "../VideoContainer";
import { ContentProps } from "../utils/sectionProps";
import Link from "../Link"

const FreeTraining = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-font-bold tw-italic tw-text-center tw-text-2xl md:tw-text-3xl lg:tw-text-5xl tw-pb-10 tw-text-brandingBlue-100">
        Free Training
      </div>
      <TwoCol>
        <VideoContainer src="https://www.youtube.com/embed/5_n1zxf3EjM" />
        <div className="tw-space-y-4 tw-mx-auto">
          <div>
            <Link href="">FinCen.gov</Link>
          </div>
          <div>
            <Link href="">FinCen.gov</Link>
          </div>
          <div>
            <Link href="">FFIEC, BSA Manual</Link>
          </div>
        </div>
      </TwoCol >
    </Section >
  );
};

export default FreeTraining;
