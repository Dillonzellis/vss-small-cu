import Section from "../../layout/Section";
import { ContentProps } from "../../utils/sectionProps";
import { trainingVids } from "./data";

const MoreTraining = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="md:tw-grid md:tw-grid-cols-2 tw-justify-center tw-gap-8 tw-items-center">
        {trainingVids.map((vid, idx) => (
          <div key={idx} className="tw-pb-8 md:tw-pb-4">
            <div className="tw-text-white tw-text-center tw-text-xl lg:tw-text-3xl tw-pb-2 tw-font-semibold">{vid.title}</div>
            <div>
              <iframe
                className="tw-shadow-lg tw-shadow-brandingBlue-700/40 tw-aspect-video"
                width="100%"
                height="100%"
                src={vid.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default MoreTraining;
