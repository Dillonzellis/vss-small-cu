import VideoTitle from "../../VideoTitle";
import Section from "../../layout/Section";
import { ContentProps } from "../../utils/sectionProps";
import { trainingVids } from "./data";

const MoreTraining = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="md:tw-grid md:tw-grid-cols-3 tw-justify-center tw-gap-8 tw-items-end">
        {trainingVids.map((vid) => (
          <div key={vid.key} className="tw-pb-8 md:tw-pb-4">
            {/* <VideoTitle>{vid.title}</VideoTitle> */}
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
