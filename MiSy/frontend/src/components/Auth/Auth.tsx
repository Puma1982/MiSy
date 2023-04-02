/* eslint-disable jsx-a11y/alt-text */
import { Button, Center, Stack, Text, Image, Input } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import { ChatIcon } from '@chakra-ui/icons';
import { useState } from 'react';

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {
  const [username, setUsername] = useState("");
  const onsubmit = async () => {
    try {
/**createUsername mutation to send our username to the GraphQl Api */
    } catch (error) {
console.log('onSubmit error', error);
    }
  };
  return (
    <Center height="100vh">
      <Stack spacing={8} align="center">
        {session ? (
          <>
            <Text fontSize= "3xl">Create a Username</Text>
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Button width="100%" onClick ={ onsubmit }>Save</Button>
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
