
import Container from "../../layout/Container";
import Circle from "../../circles/Circle";
import Section from "../../layout/Section";
import { ncuaData } from "./ncua-data";
import { Color } from "../../utils/colorClasses";

type NcuaCirclesProps = {
  bgColor: Color;
}

const NcuaCircles = ({ bgColor }: NcuaCirclesProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-mx-auto tw-text-center tw-pb-8">ncua LOGO</div>
      <Container>
        <div className="tw-flex tw-flex-wrap tw-justify-evenly">
          {ncuaData.map((data, idx) => (
            <Circle key={idx} title={data.title} link={data.link} variant="light" />
          ))}
        </div>
      </Container>
    </Section >
  )
}

export default NcuaCircles;
