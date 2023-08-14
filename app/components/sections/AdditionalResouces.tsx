import Section from "../layout/Section"
import { Color } from "../utils/colorClasses"
import Container from "../layout/Container"

type AdditionalResourcesProps = {
  bgColor: Color;
}

const AdditionalResources = ({ bgColor }: AdditionalResourcesProps) => {
  return (
    <Section bgColor={bgColor}>
      <Container>
        <div className="tw-mx-auto tw-text-center tw-text-2xl">Additional Resources</div>
        <ul className="tw-list-disc">
          <li><a href="">Charter Considerations</a></li>
          <li><a href="">CDFI Certification</a></li>
          <li><a href="">Conflict of Interest Resolution</a></li>
        </ul>
      </Container>
    </Section>
  )
}

export default AdditionalResources;
