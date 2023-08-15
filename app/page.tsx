import Container from "./components/layout/Container";
import AdditionalResources from "./components/sections/AdditionalResouces";
import Assistance from "./components/sections/Assitance";
import BoardFunding from "./components/sections/BoardFunding";
import ExploitVid from "./components/sections/ExploitVid";
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
    <main className="tw-min-h-screen tw-bg-white tw-text-brandingNeutral-700 tw-text-base">
      <Container>
        <div className="">
          <div className="tw-rounded-md tw-shadow-lg tw-bg-white tw-flex tw-justify-center tw-items-center">
            <img
              className="tw-py-8 tw-w-[875px]"
              src="https://lscu.coop/member-engagement/imgs/header.png"
            />
          </div>
          <Welcome bgColor="blue" />
          <Welcome2 bgColor="lightOne" />
          <Assistance bgColor="lightBlue" />
          <FreeTraining bgColor="green" />
          <ExploitVid bgColor="lightBlue" />
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
