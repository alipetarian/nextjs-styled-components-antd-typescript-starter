import { useContext, useEffect } from 'react';
import Router from 'next/router';
import { AuthContext } from 'utils/authContext';

type Props = {
  children: React.ReactNode
}

const ProtectedPage:React.FC<Props> = ({ children }: Props) => {
  const auth = useContext(AuthContext);
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
