import Button from "../Button";
import VideoContainer from "../VideoContainer";
import Section from "../layout/Section";
import TwoCol from "../layout/TwoCol";
import { ContentProps } from "../utils/sectionProps";

const PolicyPro = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-text-slate-900 tw-flex tw-flex-col tw-gap-4">
        <div className="tw-text-2xl tw-font-medium">
          PolicyPro provides credit unions with a comprehensive suite of more
          than 200 model policies that have been researched, developed and
          written specifically for credit unions by regulatory experts and are
          reviewed twice annually.
        </div>
        <div>
          <strong>
            95% of Affiliated Credit Unions have already signed up for PolicyPro
            as it is a value of Affiliation.
          </strong>{" "}
          To log in and begin using PolicyPro you must have a user name and
          password assigned to you by your credit union’s PolicyPro
          Administrator(s). If you have forgotten your password, the fastest way
          to regain access is to use the forgot password function. If you still
          have problems, please send an email to{" "}
          <a href="mailto:compliance@lscu.coop">compliance@lscu.coop</a>
        </div>
        <div>
          <strong>
            IF Your Credit Union Has Never Been Registered For PolicyPro
          </strong>{" "}
          - CU PolicyPro is a benefit of affiliation with the LSCU & Affiliates.
          Once registration is approved, a unique manual will be created for
          each credit union to take full advantage of CU PolicyPro’s policy
          management system.{" "}
        </div>
        <TwoCol>
          <div>
            <div className="tw-text-xl tw-pb-2 tw-font-semibold">Within this manual you can:</div>
            <ul className="tw-list-disc tw-list-inside tw-text-lg">
              <li>Customize Model Policies</li>
              <li>Upload Existing Policies</li>
              <li>Edit Your Policies</li>
              <li>Publish Policies For Your Staff. Board, And Examiners</li>
              <li>And Much More!</li>
            </ul>
          </div>
          <VideoContainer src="https://www.youtube.com/embed/ScMzIvxBSi4" />
        </TwoCol>
        <div className="tw-pt-8">
          If you are an affiliated credit union in Alabama, Florida, or Georgia,
          click on Register Now to get started.
        </div>
        <Button variant="dark" text="Button" link="#" />
      </div>
    </Section>
  );
};

export default PolicyPro;
