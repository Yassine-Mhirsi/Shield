import { Helmet } from 'react-helmet-async';

import { InsuranceView } from 'src/sections/insurance/view';

// ----------------------------------------------------------------------

export default function InsurancePage() {
  return (
    <>
      <Helmet>
        <title> Insurances | Shield </title>
      </Helmet>

      <InsuranceView />
    </>
  );
}
