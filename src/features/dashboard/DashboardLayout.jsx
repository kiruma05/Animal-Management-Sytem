import styled from "styled-components";
import Stats from "../dashboard/Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayItem from "./TodayItem";
import { ResponsiveContainer } from "recharts";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

/*
We need to distinguish between two types of data here:
1) BOOKINGS: the actual sales. For example, in the last 30 days, the hotel might have sold 10 bookings online, but these guests might only arrive and check in in the far future (or not, as booking also happen on-site)
2) STAYS: the actual check-in of guests arriving for their bookings. We can identify stays by their startDate, together with a status of either 'checked-in' (for current stays) or 'checked-out' (for past stays)
*/

function DashboardLayout() {
  return (
    <ResponsiveContainer>
      <StyledDashboardLayout>
        <Stats />
        {/* <div>today`s activities</div> */}
        <TodayItem />

        <DurationChart />
        <SalesChart />
        {/* <div>sales charts</div> */}
      </StyledDashboardLayout>
    </ResponsiveContainer>
  );
}

export default DashboardLayout;
