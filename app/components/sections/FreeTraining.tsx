import Button from "../Button";
import Section from "../layout/Section";
import TwoCol from "../layout/TwoCol";
import { ContentProps } from "../utils/sectionProps";

const FreeTraining = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-font-semibold tw-text-2xl tw-pb-4 tw-text-brandingBlue-700">
        Free Training
      </div>
      <TwoCol>
        <div>
          <iframe
            className="tw-rounded-md tw-max-w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5_n1zxf3EjM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
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
