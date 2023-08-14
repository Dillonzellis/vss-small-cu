import Circle from "../../circles/Circle";
import CirclesWrapper from "../../circles/CircleWrapper"
import { solutionsData } from "./solutions-data";

const SolutionsCircles = () => {
  return (
    <CirclesWrapper bgColor="lightBlue">
      {solutionsData.map((solution) => (
        <Circle title={solution.title} link={solution.link} imgSrc={solution.imgSrc} />
      ))}
    </CirclesWrapper>
  )
}

export default SolutionsCircles;
