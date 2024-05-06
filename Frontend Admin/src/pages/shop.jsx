import { Helmet } from 'react-helmet-async';

import { ShopView } from 'src/sections/shop/view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Shops | Shield </title>
      </Helmet>

      <ShopView />
    </>
  );
}
