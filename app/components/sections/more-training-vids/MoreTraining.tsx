import Section from "../../layout/Section";
import { ContentProps } from "../../utils/sectionProps";
import { trainingVids } from "./data";

const MoreTraining = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-flex tw-flex-wrap tw-justify-center tw-items-center">
        {trainingVids.map((vid, idx) => (
          <div key={idx} className="lg:tw-w-1/4 tw-p-2">
            <iframe
              className="tw-rounded-md tw-shadow-lg tw-shadow-brandingBlue-700/40"
              width="100%"
              height="auto"
              src={vid.src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default MoreTraining;
