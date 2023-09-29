import Section from "../../layout/Section";
import { ContentProps } from "../../utils/sectionProps";
import { trainingVids } from "./data";

const MoreTraining = ({ bgColor }: ContentProps) => {
  return (
    <Section id="other-trainings" bgColor={bgColor}>
      <div className="tw-items-end tw-justify-center tw-gap-8 md:tw-grid md:tw-grid-cols-3">
        {trainingVids.map((vid) => (
          <div key={vid.key} className="tw-pb-8 md:tw-pb-4">
            <div>
              <iframe
                className="tw-aspect-video tw-shadow-lg tw-shadow-brandingBlue-700/40"
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
