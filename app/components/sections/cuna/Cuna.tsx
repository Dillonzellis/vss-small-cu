import Container from "../../layout/Container";
import Circle from "../../circles/Circle";
import Section from "../../layout/Section";
import { cunaData } from "./cuna-data";
import { Color } from "../../utils/colorClasses";

type CunaCirclesProps = {
  bgColor: Color;
};

const CunaCircles = ({ bgColor }: CunaCirclesProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-mx-auto tw-flex tw-justify-center tw-pb-8">
        <img
          className="tw-p-4 tw-rounded-md "
          src="https://lscu.coop/member-engagement/imgs/CUNA-Logo.png"
        />
      </div>
      <Container>
        <div className="tw-gap-2 tw-flex tw-flex-wrap tw-justify-evenly">
          {cunaData.map((data, idx) => (
            <Circle
              key={idx}
              title={data.title}
              link={data.link}
              variant="dark"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CunaCircles;
