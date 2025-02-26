import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../ui/Heading";

// Styles
const StyledToday = styled.div`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
  // border: 1px solid #ddd;
  //border-radius: 8px;
  background-color: #f9f9f9;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 14rem 10fr 15rem 7rem;
  gap: 1.2rem;
  align-items: center;
  font-size: 1.4rem;
  padding: 0.8rem 0;
  //border-bottom: 1px solid #ddd;

  &:first-child {
    //border-top: 1px solid #ddd;
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

// Dummy Data
const OLDdata = [
  {
    id: 1,
    status: "unconfirmed",
    guests: { fullName: "Kizota Dodoma" },
    numNights: 6,
  },
  {
    id: 2,
    status: "unconfirmed",
    guests: { fullName: "Kizota Dodoma" },
    numNights: 1,
  },
  {
    id: 3,
    status: "checked-in",
    guests: { fullName: "Mnadani Dodoma" },
    numNights: 3,
  },
  {
    id: 4,
    status: "unconfirmed",
    guests: { fullName: "Morogoro" },
    numNights: 14,
  },
  {
    id: 5,
    status: "checked-ini",
    guests: { fullName: "Miguel Silva" },
    numNights: 5,
  },
  {
    id: 6,
    status: "checked-in",
    guests: { fullName: "Mary Williams" },
    numNights: 4,
  },
];

// Individual Item Component
function TodayItem({ OLDdata }) {
  const { id, status, guests, numNights } = OLDdata;

  const statusToAction = {
    unconfirmed: {
      action: "slaughtered",
      tag: "green",
      button: (
        <Link to={`/checkin/${id}`}>
          <button
            style={{
              padding: "0.4rem 1rem",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Check in
          </button>
        </Link>
      ),
    },
    "checked-in": {
      action: "sold",
      tag: "blue",
      button: (
        <button
          style={{
            padding: "0.4rem 1rem",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Checkout
        </button>
      ),
    },
    "checked-ini": {
      action: "transfered",
      tag: "gray",
      button: (
        <button
          style={{
            padding: "0.4rem 1rem",
            backgroundColor: "gray",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          details
        </button>
      ),
    },
  };

  return (
    <StyledTodayItem>
      <span style={{ color: statusToAction[status].tag }}>
        {statusToAction[status].action}
      </span>
      <div>
        <Guest>{guests.fullName}</Guest>
      </div>
      <span>
        <div>{numNights} Cattles</div>
      </span>

      {statusToAction[status].button}
    </StyledTodayItem>
  );
}

// Main Today Component
function Today() {
  return (
    <StyledToday>
      <Heading as="h2">Today`s Activities</Heading>
      {OLDdata.length > 0 ? (
        <TodayList>
          {OLDdata.map((item) => (
            <TodayItem key={item.id} OLDdata={item} />
          ))}
        </TodayList>
      ) : (
        <NoActivity>
          <Heading as="h2">No activity today...</Heading>
        </NoActivity>
      )}
    </StyledToday>
  );
}

export default Today;
