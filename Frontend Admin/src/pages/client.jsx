import { Helmet } from 'react-helmet-async';

import { ClientView } from 'src/sections/client/view';

// ----------------------------------------------------------------------

export default function ClientPage() {
  return (
    <>
      <Helmet>
        <title> Clients | Shield </title>
      </Helmet>

      <ClientView />
    </>
  );
}
