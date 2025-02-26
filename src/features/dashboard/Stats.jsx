// import {
//   HiOutlineBriefcase,
//   HiOutlineCalendarDays,
//   HiOutlineBanknotes,
//   HiOutlineChartBar,
// } from "react-icons/hi2";
import { GiHorseHead, GiGoat, GiSheep, GiCow } from "react-icons/gi";
//import { FaCow } from "react-icons/fa6";

import Stat from "../dashboard/Stat";
//import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // Stat 1)
  const numBookings = 19;

  // Stat 2)
  const sales = 65700;

  // Stat 3)
  const checkins = 53;

  // Stat 4)
  // We will use a trick to calculate occupancy rate. It's not 100% accurate, but we want to keep it simple. We know we can have a total of 'numDays * cabinCount' days to occupy, and we also know how many days were actually booked. From this, we can compute the percentage
  const occupation = 7854;

  return (
    <>
      <Stat
        icon={<GiCow />}
        title="Total Ng`ombe"
        value={numBookings}
        color="red"
      />
      <Stat
        icon={<GiSheep />}
        title="Total Kondoo"
        value={sales}
        color="green"
      />
      <Stat
        icon={<GiGoat />}
        title="Total Mbuzi"
        value={checkins}
        color="indigo"
      />
      <Stat
        icon={<GiHorseHead />}
        title="Total farasi"
        value={occupation}
        color="yellow"
      />
    </>
  );
}

export default Stats;
