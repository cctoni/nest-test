import React from 'react';
import { useRegisterUserMutation } from './graphql/types';

export const QueryComp: React.FC = () => {
  const fireUpMuation = useRegisterUserMutation({
    variables: {
      firstName: 'dummy client subscriber',
      email: 'subscriber@mutation.de',
      password: 'stupidpass',
    },
  });

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) {
    event.preventDefault();
    fireUpMuation();
    // alert`Yep works`;
  }

  return <button onClick={handleClick}>Send Mutation</button>;
};
