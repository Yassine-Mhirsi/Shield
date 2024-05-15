import { Helmet } from 'react-helmet-async';

import { ContractsView } from 'src/sections/contracts/view';

// ----------------------------------------------------------------------

export default function ContractsPage() {
  return (
    <>
      <Helmet>
        <title> Contracts | Shield </title>
      </Helmet>

      <ContractsView />
    </>
  );
}
