/* eslint-disable react/button-has-type */
// import { products } from 'src/_mock/products';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';
// ----------------------------------------------------------------------

export default function ProductsView() {
  const [openFilter, setOpenFilter] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:7800/api/products/fetchAll');
        const allProducts = await response.json();
        // Update state with fetched products
        setProducts(allProducts);
        console.log("products:", allProducts);
      } catch (error) {
        console.log('Error fetching products:', error);
        // Handle error condition if needed
      }
    };

    fetchProducts();
  }, []);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  // try {
  //   const response = fetch(`http://localhost:7800/api/products/delete/${selectedProduct}`);
  //   // const deleted = response.json();
  //   // console.log("products deleted :", deleted);
  // } catch (error) {
  //   console.log('Error fetching products:', error);
  //   // Handle error condition if needed
  // }

  const opendeleteModal = (selectedProduct) => {
    Swal.fire({
      title: "You want to delete the product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:7800/api/products/delete/${selectedProduct}`, {
            method: 'DELETE'
          });
          console.log("Deleted : ", response);
          if (response.ok) {
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success"
            });
            setProducts(prevProducts => prevProducts.filter(product => product._id !== selectedProduct));
          } else {
            throw new Error('Failed to delete product');
          }
        } catch (error) {
          console.log('Error deleting product:', error);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the product.",
            icon: "error"
          });
        }
      }
    });
  };

  


  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {/* {products.map((product) => (
          <Grid key={product._id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))} */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {products.map((product, index) => (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
              <img src="../../../../public/assets/images/products/product_12.jpg" alt="Logo" style={{ height: '50px', width: 'auto' }} />
              <img src={product.photo} alt={product.brand} style={{ height: '150px', width: 'auto', maxWidth: '100%', objectFit: 'cover' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                <p style={{ textAlign: 'center', color: '#333', fontSize: '1rem' }}>{product.model}</p>
                <p style={{ fontWeight: 'bold', color: '#333', fontSize: '1rem' }}>{product.price} TND</p>
                <button style={{ padding: '0.5rem 1rem', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={() => opendeleteModal(product._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </Grid>

      <ProductCartWidget />
    </Container>
  );
}
