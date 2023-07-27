import { colorClasses, Color } from "../utils/colorClasses";

export type SectionProps = {
  children: React.ReactNode;
  bgColor?: Color;
};

const Section = ({ children, bgColor }: SectionProps) => {
  const colorClass = bgColor ? colorClasses[bgColor] : undefined;

  return (
    <section className={`tw-py-12 tw-px-8 ${colorClass || ""}`.trim()}>
      {children}
    </section>
  );
};

export default Section;
