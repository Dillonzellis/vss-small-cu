import Circle from "../../circles/Circle";
import Container from "../../layout/Container";
import CirclesWrapper from "../../circles/CircleWrapper"
import { solutionsData } from "./solutions-data";
import Section from "../../layout/Section";
import { Color } from "../../utils/colorClasses";

type SolutionsCirclesProps = {
  bgColor: Color;
}

const SolutionsCircles = ({ bgColor }: SolutionsCirclesProps) => {
  return (
    <Section bgColor={bgColor}>
      <Container>
        <CirclesWrapper>
          {solutionsData.map((solution, idx) => (
            <Circle key={idx} variant="light" title={solution.title} link={solution.link} imgSrc={solution.imgSrc} />
          ))}
        </CirclesWrapper>
      </Container>
    </Section >
  )
}

export default SolutionsCircles;
