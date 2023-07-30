type VideoProps = {
  src: string;
};

const VideoContainer = ({ src }: VideoProps) => {
  return (
    <div>
      <iframe
        className="tw-rounded-md tw-max-w-full"
        width="100%"
        height="315"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
