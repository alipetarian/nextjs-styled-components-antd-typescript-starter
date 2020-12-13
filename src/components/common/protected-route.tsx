import { useContext, useEffect } from 'react';
import Router from 'next/router';
import { authContext } from 'utils/auth-provider';

type Props = {
  children: React.ReactNode
}

const ProtectedPage:React.FC<Props> = ({ children }: Props) => {
  const { auth } = useContext(authContext);
  console.log('AUTHCONTEXT  in protected route ', auth);

  useEffect(() => {
    if (!auth.token) { Router.replace('/login'); }
  }, []);

  if (!auth.token) { return <><h3>Loading</h3></>; }

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedPage;
