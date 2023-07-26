import TwoCol from "../layout/TwoCol";

const Welcome = () => {
  return (
    <TwoCol>
      <div className="tw-flex tw-flex-col tw-gap-4 tw-text-center">
        <div>
          Welcome to LSCU&apos;s Virtual Learning Center for Small Credit
          Unions!
        </div>
        <div>
          Our team has put together a valuable on-demand resource library
          tailored specifically to meet the needs of small credit unions.
          We&apos;re confident that you will find the information and resources
          provided to be informative and uplifting.
        </div>
        <div>
          At LSCU, we are dedicated to continually enhancing our resources to
          better serve the needs of our small credit unions. Your feedback is
          incredibly valuable to us, and we welcome any suggestions or ideas you
          may have. Please don&apos;t hesitate to get in touch with us at
          MemberEngagement@LSCU.coop and share your thoughts. Together, we can
          empower and strengthen our credit union community!
        </div>
      </div>
      <div>
        <iframe
          className="tw-rounded-md tw-max-w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ScMzIvxBSi4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </TwoCol>
  );
};

export default Welcome;
