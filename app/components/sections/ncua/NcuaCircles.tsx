import Container from "../../layout/Container";
import Circle from "../../circles/Circle";
import Section from "../../layout/Section";
import { ncuaData } from "./ncua-data";
import { Color } from "../../utils/colorClasses";

type NcuaCirclesProps = {
  bgColor: Color;
};

const NcuaCircles = ({ bgColor }: NcuaCirclesProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-mx-auto tw-flex tw-justify-center tw-pb-8">
        <a href="https://ncua.gov/" target="_blank">
          <img
            className="tw-w-[400px]"
            src="http://dev2.growthbydesign.org/wp-content/uploads/ncua.jpg"
          />
        </a>
      </div>

      <Container>
        <div className="tw-flex tw-flex-wrap tw-justify-evenly">
          {ncuaData.map((data, idx) => (
            <Circle
              key={idx}
              title={data.title}
              link={data.link}
              variant="light"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default NcuaCircles;
