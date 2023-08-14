import Section from "../../layout/Section";
import Container from "../../layout/Container";
import SolutionCircle from "./SolutionCircle";

const SolutionCirclessWrapper = () => {
  return (
    <Section bgColor="lightBlue">
      <Container>
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-2 lg:tw-grid lg:tw-grid-cols-5">
          <SolutionCircle title="Small CU Talent Strategy Guide" link="#" />
          <SolutionCircle title="Financial Wellness" link="#" />
          <SolutionCircle title="Budget Analysis" link="#" />
          <SolutionCircle title="Model CU Budget Projection Template" link="#" />
          <SolutionCircle title="Branch Setup Checklist " link="#" />
        </div>
      </Container>
    </Section>
  )
}

export default SolutionCirclessWrapper;
