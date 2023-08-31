type VideoTitleProps = {
  children: React.ReactNode;
};

const VideoTitle = ({ children }: VideoTitleProps) => {
  return (
    <div className="tw-text-white tw-text-center tw-text-3xl lg:tw-text-3xl tw-pb-2 tw-font-semibold">
      {children}
    </div>
  );
};

export default VideoTitle;
