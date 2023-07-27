import TwoCol from "../layout/TwoCol";

const PolicyPro = () => {
  return (
    <div>
      <div>
        PolicyPro provides credit unions with a comprehensive suite of more than
        200 model policies that have been researched, developed and written
        specifically for credit unions by regulatory experts and are reviewed
        twice annually.
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
            <div>Within this manual you can:</div>
            <ul className="tw-list-disc tw-list-inside">
              <li>Customize Model Policies</li>
              <li>Upload Existing Policies</li>
              <li>Edit Your Policies</li>
              <li>Publish Policies For Your Staff. Board, And Examiners</li>
              <li>And Much More!</li>
            </ul>
          </div>
          <div>
            <video src="https://cusolutions.pc.cdn.bitgravity.com/video/lis/17-high.mp4" />
          </div>
        </TwoCol>
        <div>
          If you are an affiliated credit union in Alabama, Florida, or Georgia,
          click on Register Now to get started.
        </div>
        <div>Button</div>
      </div>
    </div>
  );
};

export default PolicyPro;