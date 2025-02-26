import {
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineBanknotes,
  HiOutlineChartBar,
} from "react-icons/hi2";

import Stat from "../dashboard/Stat";
//import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // Stat 1)
  const numBookings = 17;

  // Stat 2)
  const sales = 47000000;

  // Stat 3)
  const checkins = 4000;

  // Stat 4)
  // We will use a trick to calculate occupancy rate. It's not 100% accurate, but we want to keep it simple. We know we can have a total of 'numDays * cabinCount' days to occupy, and we also know how many days were actually booked. From this, we can compute the percentage
  const occupation = 40;

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Ranchies"
        value={numBookings}
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title="Transactions"
        value={sales + "/= TZS"}
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Cattles"
        value={checkins}
        color="indigo"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy rate"
        value={occupation + "%"}
        color="yellow"
      />
    </>
  );
}

export default Stats;
