import React, { useState, useRef } from 'react';
import { useRegisterUserMutation } from './graphql/types';

interface FormProps {
  loading?: boolean;
  error?: boolean;
  onSubmit?: (props?: React.FormEventHandler<HTMLButtonElement>) => void;
}

interface UserProps {
  firstName?: string;
  email?: string;
  password?: string;
}

export const FormComponent: React.FC<UserProps> = () => {
  const [userData, setUserData] = useState('');

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   newUser(variables: { firstName: firstName, email: email, password: password });
  // };

  return (
    <div>
      <form>
        <label>FirstName</label>
        <input
          type="text"
          // onChange={e => setFirstName(e.currentTarget.value)}
          // value={firstName}
        />
        <label>Password</label>
        <input
          type="text"
          // onChange={e => setPassword(e.currentTarget.value)}
          // value={password}
        />
        <label>E-Mail</label>
        <input
          type="text"
          // onChange={e => setEmail(e.currentTarget.value)}
          // value={email}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};
