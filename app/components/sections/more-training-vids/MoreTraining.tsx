import { trainingVids } from "./data";

const MoreTraining = () => {
  return (
    <div className="tw-flex tw-flex-wrap tw-justify-center tw-items-center">
      {trainingVids.map((vid, idx) => (
        <div key={idx} className="tw-w-1/4 tw-p-2">
          <iframe
            className="tw-rounded-md"
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
  );
};

export default MoreTraining;
