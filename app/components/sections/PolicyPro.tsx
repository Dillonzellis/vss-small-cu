import Button from "../Button";
import { Disclaimer } from "../Disclaimer";
import VideoContainer from "../VideoContainer";
import Section from "../layout/Section";
import TwoCol from "../layout/TwoCol";
import { ContentProps } from "../utils/sectionProps";

const PolicyPro = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <a href="https://lscu.leagueinfosight.com/cu-policypro">
        <img
          className="tw-mb-4 tw-rounded-md tw-bg-white tw-p-4 tw-shadow-md md:tw-mb-8"
          src="https://lscu.coop/member-engagement/imgs/PolicyPro-Logo.png"
          alt=""
        />
      </a>
      <div className="tw-flex tw-flex-col tw-gap-4 tw-text-slate-900">
        <div className="tw-text-xl tw-font-medium lg:tw-text-2xl">
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
            If Your Credit Union Has Never Been Registered For PolicyPro
          </strong>{" "}
          - CU PolicyPro is a benefit of affiliation with the LSCU & Affiliates.
          Once registration is approved, a unique manual will be created for
          each credit union to take full advantage of CU PolicyPro’s policy
          management system.{" "}
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <div>
            <div className="tw-pb-2 tw-text-lg tw-font-semibold lg:tw-text-xl">
              Within this manual you can:
            </div>
            <ul className="tw-list-inside tw-list-disc">
              <li>Customize Model Policies</li>
              <li>Upload Existing Policies</li>
              <li>Edit Your Policies</li>
              <li>Publish Policies For Your Staff, Board, And Examiners</li>
              <li>And Much More!</li>
            </ul>
          </div>
          <div className="tw-py-8">
            If you are an affiliated credit union in Alabama, Florida, or
            Georgia, click on Register Now to get started.
          </div>

          <Button
            variant="dark"
            text="Register Now"
            link="https://lscu.leagueinfosight.com/cu-policypro"
          />
          <Disclaimer className="tw-pt-8">
            Policies in PolicyPro are designed to accommodate credit unions of
            all asset sizes. However, some items may not be applicable to your
            specific credit union. Please review and modify the policies to
            align with your credit union’s current procedures before
            implementation.
          </Disclaimer>
        </div>
      </div>
    </Section>
  );
};

export default PolicyPro;
