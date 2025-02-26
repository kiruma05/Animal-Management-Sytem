import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import UserRow from "./UserRow";
import { useUsers } from "./useUsers";
import Empty from "../../ui/Empty";

// Styled Components
const TableContainer = styled.div`
  width: 450%;
  padding: 15px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow-x: auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  min-width: 800px; /* Prevents column shrinking */
  border-collapse: collapse;
  background: #f9f9f9;
  border-radius: 10px;
`;

const TableHead = styled.thead`
  background-color: var(--color-grey-500);
  color: white;
  text-transform: uppercase;
  font-size: 14px;
`;

const TableRow = styled.tr`
  &:hover {
    background: #f1f1f1;
    transition: 0.3s;
  }
`;

const TableCell = styled.td`
  padding: 16px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  white-space: nowrap; /* Prevents text wrapping */
`;

function UserTable() {
  const { isLoading, error, data: users } = useUsers();

  if (isLoading) return <Spinner />;
  if (error) return <div style={{ color: "red" }}>Error loading data...</div>;

  if (!Array.isArray(users) || users.length === 0) {
    return <Empty>No users available</Empty>;
  }

  return (
    <TableContainer>
      <Title>🐄 Animal Data</Title>
      <TableWrapper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>Jina la Ranchi</TableCell>
              <TableCell>Utambulisho</TableCell>
              <TableCell>Kundi</TableCell>
              <TableCell>Aliyejaza Data</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user.__id} user={user} />
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </TableContainer>
  );
}

export default UserTable;
