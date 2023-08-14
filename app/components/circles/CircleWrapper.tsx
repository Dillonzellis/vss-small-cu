import Section from "../layout/Section";
import Container from "../layout/Container";
import { Color } from "../utils/colorClasses";

type CirclesWrapperProps = {
  children: React.ReactNode;
  cols?: string;
  bgColor: Color;
}

const CirclesWrapper = ({ children, cols = "5", bgColor }: CirclesWrapperProps) => {
  return (
    <Section bgColor={bgColor}>
      <Container>
        <div className={`tw-flex tw-flex-col tw-items-center tw-gap-2 lg:tw-grid lg:tw-grid-cols-5`}>
          {children}
        </div>
      </Container>
    </Section>
  )
}

export default CirclesWrapper;
