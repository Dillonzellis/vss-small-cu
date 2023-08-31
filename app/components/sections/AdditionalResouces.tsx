import Section from "../layout/Section";
import { Color } from "../utils/colorClasses";
import Container from "../layout/Container";

type AdditionalResourcesProps = {
  bgColor: Color;
};

const list = [
  {
    label: "Charter Considerations",
    href: "../docs/Charter-Considerations.doc",
  },
  {
    label: "CDFI Certification",
    href: "https://www.cdfifund.gov/programs-training/certification/cdfi",
  },
  {
    label: "Conflict of Interest Resolution",
    href: "https://lscu.coop/member-engagement/docs/Conflict-of-Interest-Resolution-0920.pdf",
  },
  {
    label: "FinCen.gov",
    href: "https://www.fincen.gov/",
  },
  {
    label: "FinCen CTR FAQs",
    href: "https://www.fincen.gov/frequently-asked-questions-regarding-fincen-currency-transaction-report-ctr",
  },
  {
    label: "FFIEC, BSA Manual",
    href: "https://bsaaml.ffiec.gov/manual",
  },
];

const AdditionalResources = ({ bgColor }: AdditionalResourcesProps) => {
  return (
    <Section bgColor={bgColor}>
      <Container>
        <div className="tw-text-brandingBlue-100">
          <div className="tw-mx-auto md:tw-text-center tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-pb-4 tw-font-medium">
            Additional Resources
          </div>
          <ul className="tw-list-disc tw-list-inside lg:tw-text-lg">
            {list.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default AdditionalResources;
