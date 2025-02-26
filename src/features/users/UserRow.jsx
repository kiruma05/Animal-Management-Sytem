// import { useState } from "react";
// import styled from "styled-components";
// import CreateUserForm from "./CreateUserForm";
// import { UserDeleteUser } from "./useDeleteUser";
// import Table from "../../ui/Table";

// // ✅ Define styled components for UI elements
// const StyledUser = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   font-family: "Sono";
// `;

// const StyledEmail = styled.div`
//   font-size: 1.6rem;
//   font-weight: 100;
//   font-family: "italic";
//   color: var(--color-green-700);
// `;

// const StyledRole = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-800);
//   font-family: "sono";
// `;

// const EditButton = styled.button`
//   border: none;
//   border-radius: 4px;
//   padding: 0.8rem 1.2rem;
//   font-size: 1rem;
//   font-weight: 600;
//   color: #fff;
//   background-color: #28a745;
//   cursor: pointer;
//   margin-right: 0.8rem;
//   transition: background-color 0.3s ease;

//   &:disabled {
//     cursor: not-allowed;
//     opacity: 0.6;
//   }
// `;

// const Img = styled.img`
//   display: block;
//   width: 6.4rem;
//   aspect-ratio: 3 / 2;
//   object-fit: cover;
//   object-position: center;
//   transform: scale(1.5) translateX(-7px);
// `;

// function UserRow({ user }) {
//   const [showForm, setShowForm] = useState(false);
//   const { id, fullName, email, role, submitter } = user; // ✅ Removed unused variables

//   return (
//     <>
//       <Table.Row>
//         <StyledUser>{fullName}</StyledUser>
//         <StyledEmail>{email}</StyledEmail>
//         <StyledRole>{role}</StyledRole>
//         <StyledUser>{submitter}</StyledUser> 
//         <div>
//           <EditButton onClick={() => setShowForm((show) => !show)}>View</EditButton>
//         </div>
//       </Table.Row>
//       {showForm && <CreateUserForm userToEdit={user} />}
//     </>
//   );
// }

// export default UserRow;




import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
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
  white-space: nowrap;
`;

const ViewButton = styled(Link)`
  padding: 8px 16px;
  background-color: var(--color-grey-400);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background: #218838;
  }
`;

function UserRow({ user }) {
  if (!user) return null;

  return (
    <TableRow>
      <TableCell>{user.text_question_types?.Name || "No Name"}</TableCell>
      <TableCell>{user.numerical_question_types?.animal_code || "N/A"}</TableCell>
      <TableCell>{user.numerical_question_types?.select_one_autocomplete || "N/A"}</TableCell>
      <TableCell>{user.__system?.submitterName || "Unknown"}</TableCell>
      <TableCell>
        <ViewButton to={`/animals/${user.__id}`}>View</ViewButton>
      </TableCell>
    </TableRow>
  );
}

export default UserRow;
