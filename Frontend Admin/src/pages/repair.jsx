import { Helmet } from 'react-helmet-async';

import { RepairView } from 'src/sections/repair/view';

// ----------------------------------------------------------------------

export default function RepairPage() {
  return (
    <>
      <Helmet>
        <title> Repair Shops | Shield </title>
      </Helmet>

      <RepairView />
    </>
  );
}
