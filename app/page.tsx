import Container from "./components/layout/Container";
import AdditionalResources from "./components/sections/AdditionalResouces";
import Assistance from "./components/sections/Assitance";
import BoardFunding from "./components/sections/BoardFunding";
import FreeTraining from "./components/sections/FreeTraining";
import InfoSight from "./components/sections/InfoSight";
import PolicyPro from "./components/sections/PolicyPro";
import Welcome from "./components/sections/Welcome";
import Welcome2 from "./components/sections/Welcome2";
import CunaCircles from "./components/sections/cuna/Cuna";
import MoreTraining from "./components/sections/more-training-vids/MoreTraining";
import NcuaCircles from "./components/sections/ncua/NcuaCircles";
import SolutionCirclessWrapper from "./components/sections/solutions-circles/SolutionCirclesWrapper";

export default function Home() {
  return (
    <main className="tw-min-h-screen tw-bg-white tw-text-base tw-text-brandingNeutral-700">
      <Container>
        <div className="">
          <div className="tw-flex tw-items-center tw-justify-center tw-rounded-md tw-border-t-[10px] tw-border-brandingBlue-400 tw-bg-white tw-shadow-lg">
            <img
              className="tw-w-[875px] tw-py-8"
              src="https://lscu.coop/member-engagement/imgs/header-edit.png"
            />
          </div>
          <Welcome bgColor="blue" />
          <Welcome2 bgColor="lightOne" />
          <Assistance bgColor="lightBlue" />
          <FreeTraining bgColor="green" />
          <MoreTraining bgColor="blue" />
          <InfoSight bgColor="lightBlue" />
          <PolicyPro bgColor="lightOne" />
          <BoardFunding bgColor="white" />
          <SolutionCirclessWrapper bgColor="lightBlue" />
          <CunaCircles bgColor="blue" />
          <NcuaCircles bgColor="white" />
          <AdditionalResources bgColor="dark" />
        </div>
      </Container>
    </main>
  );
}
