//import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import AnimalDataRow from './AnimalDataRow';
import { useUsers } from "./useUsers";
import Table from '../../ui/Table';
import Empty from '../../ui/Empty';



function UserTable() {
  const { isLoading, error, users } = useUsers(); 

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading users...</div>;

  // Ensure users is always an array before mapping
  if (!Array.isArray(users)) return <Empty>No users available</Empty>;

  return (
    <Table columns="1.0fr 1.5fr 2.0fr 1fr 1fr">
      <Table.Header>
        <div>Jina la Ranchi</div>
        <div>Utambulishi</div>
        <div>Aliyejaza Data</div>
        <div>KUndi</div>
        <div>Actions</div>
      </Table.Header>
      <Table.Body data={users} 
                  render={(user) => (
        <UserRow user={user} key={user.id} />
      )} />
     
    </Table>
  );
}

export default UserTable;
