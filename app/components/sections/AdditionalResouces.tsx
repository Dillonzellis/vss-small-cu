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
        <div className="tw-text-brandingBlue-100">
          <div className="tw-mx-auto md:tw-text-center tw-text-4xl tw-pb-4 tw-font-medium">Additional Resources</div>
          <ul className="tw-list-disc tw-list-inside tw-text-lg">
            <li><a href="">Charter Considerations</a></li>
            <li><a href="">CDFI Certification</a></li>
            <li><a href="">Conflict of Interest Resolution</a></li>
          </ul>
        </div>
      </Container>
    </Section>
  )
}

export default AdditionalResources;
