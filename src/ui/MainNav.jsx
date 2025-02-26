// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import {
//   HiBarsArrowUp,
//   HiChartBar,
//   HiOutlineCog6Tooth,
//   HiOutlineHome,
//   HiOutlineHomeModern,
//   HiChevronRight,
//   HiOutlineUsers,
//   HiOutlineWindow,
//   HiOutlineInboxArrowDown,
// } from "react-icons/hi2";
// import { useState } from "react";

// // Styled components for the navigation list and links
// const NavList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   position: relative;
// `;

// const StyledNavLink = styled(NavLink)`
//   &:link,
//   &:visited {
//     display: flex;
//     align-items: center;
//     gap: 1.2rem;
//     color: var(--color-grey-600);
//     font-size: 1.6rem;
//     font-weight: 500;
//     padding: 1.2rem 2.4rem;
//     transition: all 0.3s;
//   }

//   &:hover,
//   &:active,
//   &.active:link,
//   &.active:visited {
//     color: var(--color-grey-800);
//     background-color: var(--color-grey-300);
//     border-radius: var(--border-radius-sm);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     color: var(--color-grey-400);
//     transition: all 0.3s;
//   }

//   &:hover svg,
//   &:active svg,
//   &.active:link svg,
//   &.active:visited svg {
//     color: var(--color-brand-600);
//   }
// `;

// // DropdownToggle styled component, now fully matching StyledNavLink
// const DropdownToggle = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.2rem;
//   color: var(--color-grey-600);
//   font-size: 1.6rem;
//   font-weight: 500;
//   padding: 1.2rem 2.4rem;
//   transition: all 0.3s;
//   cursor: pointer;

//   &:hover,
//   &:active {
//     color: var(--color-grey-800);
//     background-color: var(--color-grey-100);
//     border-radius: var(--border-radius-sm);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     color: var(--color-grey-400);
//     transition: all 0.3s;
//   }

//   &:hover svg,
//   &:active svg {
//     color: var(--color-brand-600);
//   }
// `;

// // DropdownMenu styled component for the dropdown content
// const DropdownMenu = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: #fff;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   padding: 10px;
//   z-index: 1000;
//   list-style-type: none;
//   margin: 0;
//   width: 100%;
// `;

// // MainNav component
// function MainNav() {
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
//   const [isTransactionsOpen, setIsTransactionsOpen] = useState(false);

//   const toggleCategoriesDropdown = () => {
//     setIsCategoriesOpen((prevIsOpen) => !prevIsOpen);
//   };

//   const toggleTransactionsDropdown = () => {
//     setIsTransactionsOpen((prevIsOpen) => !prevIsOpen);
//   };

//   return (
//     <nav>
//       <NavList>
//         <li>
//           <StyledNavLink to="/dashboard">
//             <HiOutlineHome />
//             <span>Dashboard</span>
//           </StyledNavLink>
//         </li>

//         <li style={{ position: "relative" }}>
//           <DropdownToggle onClick={toggleCategoriesDropdown}>
//             <HiChartBar />
//             <span>Analysis</span>
//             <HiChevronRight />
//           </DropdownToggle>

//           {isCategoriesOpen && (
//             <DropdownMenu>
//               <StyledNavLink to="/categories/add-subcategory">
//                 Data Analysis
//               </StyledNavLink>
//               <StyledNavLink to="/categories/add-category">
//                 Animal Analysis
//               </StyledNavLink>
//             </DropdownMenu>
//           )}
//         </li>

//         {/* <li style={{ position: "relative" }}>
//           <DropdownToggle onClick={toggleTransactionsDropdown}>
//             <HiOutlineInboxArrowDown />
//             <span>Transactions</span>
//             <HiChevronRight />
//           </DropdownToggle>

//           {isTransactionsOpen && (
//             <DropdownMenu>
//               <StyledNavLink to="/transaction/slaughter">
//                 Slaughter
//               </StyledNavLink>
//               <StyledNavLink to="/transaction/sales">Sales</StyledNavLink>
//               <StyledNavLink to="/transaction/transfer">Transfer</StyledNavLink>
//               <StyledNavLink to="/transaction/recovery">Recovery</StyledNavLink>
//               <StyledNavLink to="/transaction/deathLoses">
//                 Death and Losses
//               </StyledNavLink>
//             </DropdownMenu>
//           )}
//         </li> */}

//         <li>
//           <StyledNavLink to="/cattles">
//             <HiOutlineHomeModern />
//             <span>Cattles</span>
//           </StyledNavLink>
//         </li>
//         <li>
//           <StyledNavLink to="/users">
//             <HiOutlineUsers />
//             <span>Users</span>
//           </StyledNavLink>
//         </li>
//         <li>
//           <StyledNavLink to="/ranchies">
//             <HiOutlineWindow />
//             <span>Ranchies</span>
//           </StyledNavLink>
//         </li>
//         <li>
//           <StyledNavLink to="/settings">
//             <HiOutlineCog6Tooth />
//             <span>Settings</span>
//           </StyledNavLink>
//         </li>
//       </NavList>
//     </nav>
//   );
// }

// export default MainNav;











import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiChartBar,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiChevronRight,
  HiOutlineUsers,
  HiOutlineWindow,
} from "react-icons/hi2";
import { HiMenu, HiX, } from "react-icons/hi";
import { useState } from "react";

// Sidebar container
const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? "250px" : "70px")};
  height: 100vh;
  background: #2c3e50;
  color: white;
  transition: width 0.3s ease-in-out;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

// Sidebar toggle button
const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  margin-left: ${(props) => (props.isOpen ? "200px" : "10px")};
  transition: margin-left 0.3s ease-in-out;
`;

// Sidebar navigation list
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Sidebar link styling
const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.isOpen ? "1.2rem" : "0")};
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 15px 20px;
  text-decoration: none;
  transition: all 0.3s;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.active {
    background: rgba(255, 255, 255, 0.3);
  }

  & svg {
    font-size: 24px;
  }
`;

// Dropdown styling
const DropdownToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  background: ${(props) => (props.isOpen ? "rgba(255, 255, 255, 0.2)" : "none")};
  transition: background 0.3s;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  & svg {
    transition: transform 0.3s;
    transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "rotate(0deg)")};
  }
`;

const DropdownMenu = styled.div`
  max-height: ${(props) => (props.isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  background: #34495e;
`;



function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isRanchisOpen, setIsRanchisOpen] = useState(false);
  


  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </ToggleButton>

      <NavList>
        <li>
          <StyledNavLink isOpen={isOpen} to="/dashboard">
            <HiOutlineHome />
            {isOpen && <span>Dashboard</span>}
          </StyledNavLink>
        </li>

        <li>
          <DropdownToggle isOpen={isAnalysisOpen} onClick={() => setIsAnalysisOpen(!isAnalysisOpen)}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <HiChartBar />
              {isOpen && <span>Analysis</span>}
            </div>
            {isOpen && <HiChevronRight />}
          </DropdownToggle>
          <DropdownMenu isOpen={isAnalysisOpen}>
            <StyledNavLink isOpen={isOpen} to="/categories/add-subcategory">
              {isOpen && "Data Analysis"}
            </StyledNavLink>
            <StyledNavLink isOpen={isOpen} to="/categories/add-category">
              {isOpen && "Animal Analysis"}
            </StyledNavLink>
          </DropdownMenu>
        </li>

        <li>
          <DropdownToggle isOpen={isRanchisOpen} onClick={() => setIsRanchisOpen(!isRanchisOpen)}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            <HiOutlineWindow />
              {isOpen && <span>Ranches</span>}
            </div>
            {isOpen && <HiChevronRight />}
          </DropdownToggle>
          <DropdownMenu isOpen={isRanchisOpen}>
            <StyledNavLink isOpen={isOpen} to="/categories/add-subcategory">
              {isOpen && "Mkata Ranch"}
            </StyledNavLink>
            <StyledNavLink isOpen={isOpen} to="/categories/add-category">
              {isOpen && "Ruvu Ranch"}
            </StyledNavLink>
            <StyledNavLink isOpen={isOpen} to="/categories/add-category">
              {isOpen && "Kongwa Ranch"}
            </StyledNavLink>
          </DropdownMenu>
        </li>

        <li>
          <StyledNavLink isOpen={isOpen} to="/cattles">
            <HiOutlineHomeModern />
            {isOpen && <span>Cattles</span>}
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink isOpen={isOpen} to="/users">
            <HiOutlineUsers />
            {isOpen && <span>Users</span>}
          </StyledNavLink>
        </li>

        {/* <li>
          <StyledNavLink isOpen={isOpen} to="/ranchies">
            <HiOutlineWindow />
            {isOpen && <span>Ranchies</span>}
          </StyledNavLink>
        </li> */}

        <li>
          <StyledNavLink isOpen={isOpen} to="/settings">
            <HiOutlineCog6Tooth />
            {isOpen && <span>Settings</span>}
          </StyledNavLink>
        </li>
      </NavList>
    </SidebarContainer>
  );
}

export default Sidebar;

