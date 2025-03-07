import styled from "styled-components";
import { useUsers } from "../users/useUsers";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { users } = useUsers();
  console.log(users);
  //const { fullName, avatar } = users.user_metadata;
  const fullName = "frank kiruma";
  const avatar = "default-user.jpg";

  return (
    <>
      <StyledUserAvatar>
        <Avatar
          src={avatar || "default-user.jpg"}
          alt={`Avatar of ${fullName}`}
        />
        <span>{fullName}</span>
      </StyledUserAvatar>
    </>
  );
}

export default UserAvatar;
