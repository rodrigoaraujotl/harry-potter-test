import { gql, useQuery } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      image
      name
      dateOfBirth
      house
      patronus
      actor
      alive
    }
  }
`;