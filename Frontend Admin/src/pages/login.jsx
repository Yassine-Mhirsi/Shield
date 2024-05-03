import { Helmet } from 'react-helmet-async';

// eslint-disable-next-line import/named
import { LoginView } from 'src/sections/login';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | Shield </title>
      </Helmet>

      <LoginView />
    </>
  );
}
