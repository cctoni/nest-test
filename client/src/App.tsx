import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAllUsersQuery, UserEntity } from './graphql/types';
import { useMutation } from 'react-apollo-hooks';
import { useRegisterUserMutation } from './graphql/types';
import { QueryComp } from './QueryComp';
// import { FormComponent } from './FormComponent';

// interface IProps {
//   textdummy: string;
//   data: object;
//   errors: object;
// }

// const UserList: React.FC<IProps> = props => {
// export const UserList = () => {
//   const { data, errors } = useAllUsersQuery();

//   if (errors) return errors;

//   console.log(data);

//   // return data.viewer.starredRepositories.nodes.map(node => (
//   //   <Repository data={node} key={node.id} />
//   // ));

//   return data;
//   //return <div>{props.textdummy}</div>;
// };

interface Props {
  data: object;
}

const User2List: React.FC = () => {
  const { data, loading, error } = useAllUsersQuery();

  // if (!data || !data.allUsers) return <div>No data yet</div>;

  if (loading || !data) return <p>Somethins loadin...</p>;

  return (
    <ul>
      {data.allUsers!.map(({ id, firstName }) => (
        <li>{firstName}</li>
      ))}
    </ul>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <UserList textdummy={`Woooohoooo from prop again`} /> */}
        <QueryComp />
        <User2List />
      </header>
    </div>
  );
};

export default App;
