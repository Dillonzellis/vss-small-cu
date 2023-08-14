import Section from "../../layout/Section";
import Container from "../../layout/Container";
import Circle from "./Circle";

const CirclesWrapper = () => {
  return (
    <Section bgColor="lightBlue">
      <Container>
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-2 lg:tw-grid lg:tw-grid-cols-5">
          <Circle title="Small CU Talent Strategy Guide" link="#" />
          <Circle title="Financial Wellness" link="#" />
          <Circle title="Budget Analysis" link="#" />
          <Circle title="Model CU Budget Projection Template" link="#" />
          <Circle title="Branch Setup Checklist " link="#" />
        </div>
      </Container>
    </Section>
  )
}

export default CirclesWrapper;
