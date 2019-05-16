// tslint:disable
import { DocumentNode } from 'graphql';
import * as ReactApollo from 'react-apollo';
import * as ReactApolloHooks from 'react-apollo-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  upVote: Scalars['String'];
  register: UserEntity;
};

export type MutationUpVoteArgs = {
  vote: Scalars['String'];
};

export type MutationRegisterArgs = {
  newUserInput: NewUserInpunt;
};

export type NewUserInpunt = {
  firstName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  helloWorld: Scalars['String'];
  allVotes: Array<VoteEntity>;
  allUsers: Array<UserEntity>;
};

export type Subscription = {
  userAdded: UserEntity;
};

export type UserEntity = {
  id: Scalars['ID'];
  firstName: Scalars['String'];
  email: Scalars['String'];
};

export type VoteEntity = {
  id: Scalars['ID'];
  vote?: Maybe<Scalars['String']>;
  downVote: Scalars['Float'];
  info: Scalars['String'];
};
export type HelloWorldQueryVariables = {};

export type HelloWorldQuery = { __typename?: 'Query' } & Pick<
  Query,
  'helloWorld'
>;

export type AllVotesQueryVariables = {};

export type AllVotesQuery = { __typename?: 'Query' } & {
  allVotes: Array<
    { __typename?: 'VoteEntity' } & Pick<VoteEntity, 'id' | 'vote'>
  >;
};

export type AllUsersQueryVariables = {};

export type AllUsersQuery = { __typename?: 'Query' } & {
  allUsers: Array<
    { __typename?: 'UserEntity' } & Pick<UserEntity, 'id' | 'firstName'>
  >;
};

export type RegisterUserMutationVariables = {
  firstName: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};

export type RegisterUserMutation = { __typename?: 'Mutation' } & {
  register: { __typename?: 'UserEntity' } & Pick<
    UserEntity,
    'id' | 'firstName' | 'email'
  >;
};

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const HelloWorldDocument: DocumentNode = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'helloWorld' },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'helloWorld' },
            arguments: [],
            directives: [],
          },
        ],
      },
    },
  ],
};

export function useHelloWorldQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<HelloWorldQueryVariables>,
) {
  return ReactApolloHooks.useQuery<HelloWorldQuery, HelloWorldQueryVariables>(
    HelloWorldDocument,
    baseOptions,
  );
}
export const AllVotesDocument: DocumentNode = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allVotes' },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allVotes' },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'id' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vote' },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export function useAllVotesQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<AllVotesQueryVariables>,
) {
  return ReactApolloHooks.useQuery<AllVotesQuery, AllVotesQueryVariables>(
    AllVotesDocument,
    baseOptions,
  );
}
export const AllUsersDocument: DocumentNode = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allUsers' },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allUsers' },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'id' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'firstName' },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export function useAllUsersQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<AllUsersQueryVariables>,
) {
  return ReactApolloHooks.useQuery<AllUsersQuery, AllUsersQueryVariables>(
    AllUsersDocument,
    baseOptions,
  );
}
export const RegisterUserDocument: DocumentNode = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'registerUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'firstName' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'register' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'newUserInput' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'firstName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'firstName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'password' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'password' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'email' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'email' },
                      },
                    },
                  ],
                },
              },
            ],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'id' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'firstName' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'email' },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export type RegisterUserMutationFn = ReactApollo.MutationFn<
  RegisterUserMutation,
  RegisterUserMutationVariables
>;

export function useRegisterUserMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >,
) {
  return ReactApolloHooks.useMutation<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >(RegisterUserDocument, baseOptions);
}
