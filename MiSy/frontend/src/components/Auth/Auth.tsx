/* eslint-disable jsx-a11y/alt-text */
import { Button, Center, Stack, Text, Image, Input } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import { ChatIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import UserOperations from '../../graphql/operations/user';
import { CreateUsernameData, CreateUsernameVariables } from "../../util/types";

interface AuthProps {
  session: Session | null;
  reloadSession: () => void;
}
const Auth: React.FunctionComponent<AuthProps> = ({
  session,
  reloadSession,
}) => {
  const [username, setUsername] = useState('');

  const [createUsername, { data, loading, error }] = useMutation<
  CreateUsernameData,
  CreateUsernameVariables
  >(UserOperations.Mutations.createUsername);

console.log('HERE IS DATA',data,loading,error);



  const onsubmit = async () => {
   if(!username) return;
    try {
      await createUsername({ variables: { username } });
    } catch (error) {
      console.log('onSubmit error', error);
    }
  };
  return (
    <Center height="100vh">
      <Stack spacing={8} align="center">
        {session ? (
          <>
            <Text fontSize="3xl">Create a Username</Text>
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Button width="100%" onClick={onsubmit}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="3xl">
              MiSu-QL
              <ChatIcon boxSize={6} backgroundColor="violet" />
            </Text>
            <Button
              onClick={() => signIn('google')}
              leftIcon={<Image height="20px" src="/images/googlelogo.png" />}
            >
              Continue with Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
