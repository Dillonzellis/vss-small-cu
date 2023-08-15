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
          <div className="tw-mx-auto md:tw-text-center tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-pb-4 tw-font-medium">Additional Resources</div>
          <ul className="tw-list-disc tw-list-inside lg:tw-text-lg">
            <li><a href="../docs/Charter-Considerations.doc">Charter Considerations</a></li>
            <li><a href="https://www.cdfifund.gov/programs-training/certification/cdfi">CDFI Certification</a></li>
            <li><a href="https://lscu.coop/member-engagement/docs/Conflict-of-Interest-Resolution-0920.pdf">Conflict of Interest Resolution</a></li>
          </ul>
        </div>
      </Container>
    </Section>
  )
}

export default AdditionalResources;
