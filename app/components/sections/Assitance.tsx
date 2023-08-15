import Section from "../layout/Section";
import { ContentProps } from "../utils/sectionProps";

const Assistance = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-text-brandingBlue-100">
        <div className="tw-pb-2 tw-text-2xl tw-font-semibold">
          Available assistance includes:
        </div>
        <ul className="tw-list-disc tw-list-inside tw-text-lg">
          <li>Small Credit Union Initiatives Account</li>
          <li>
            Guidance in resolving document of resolution items and/or other
            issues revealed by exams and audits
          </li>
          <li>Suggestions to improve your bottom line</li>
          <li>
            Suggestions to enhance member utilization of credit union products
            and services
          </li>
          <li>Facilitation of strategic planning sessions</li>
          <li>
            Guidance in determining feasibility of field of membership expansion
            and guidance on regulatory requirements
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Assistance;
