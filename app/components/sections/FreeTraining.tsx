import TwoCol from "../layout/TwoCol";

const FreeTraining = () => {
  return (
    <div>
      <div>Free Training</div>
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
        <div className="tw-flex tw-flex-col tw-gap-4">
          <div>
            <a href="#">FinCen.gov</a>
          </div>
          <div>
            <a href="#">FinCen CTR FAQs</a>
          </div>
          <div>
            <a href="#">FFIEC, BSA Manual</a>
          </div>
        </div>
      </TwoCol>
    </div>
  );
};

export default FreeTraining;
