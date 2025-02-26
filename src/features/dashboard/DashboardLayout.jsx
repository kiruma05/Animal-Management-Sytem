import styled from "styled-components";
import Stats from "../dashboard/Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayItem from "./TodayItem";
import { ResponsiveContainer } from "recharts";
import UserTable from "../users/UserTable";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;



function DashboardLayout() {
  return (
    <ResponsiveContainer>
      <StyledDashboardLayout>
        <Stats />
        <div>LINE GRAPH TO BE HERE</div>
        {/* <TodayItem /> */}
        {/* <SalesChart /> */}

        <DurationChart />
        
        <UserTable />
        {/* <SalesChart /> */}
        {/* <div>sales charts</div> */}
      </StyledDashboardLayout>
    </ResponsiveContainer>
  );
}

export default DashboardLayout;
