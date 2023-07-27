import { colorClasses, Color } from "../utils/colorClasses";

export type SectionProps = {
  children: React.ReactNode;
  bgColor?: Color;
};

const Section = ({ children, bgColor }: SectionProps) => {
  const colorClass = bgColor ? colorClasses[bgColor] : undefined;

  return (
    <section
      className={`tw-py-6 tw-px-8 tw-rounded-md ${colorClass || ""}`.trim()}
    >
      {children}
    </section>
  );
};

export default Section;
