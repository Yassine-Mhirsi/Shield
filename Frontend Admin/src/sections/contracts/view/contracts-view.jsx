/* eslint-disable react/button-has-type */
// import { products } from 'src/_mock/products';
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
// ----------------------------------------------------------------------

export default function ContractsView() {

  const calculateDaysBetween = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);

    // Validate date objects to be valid numbers
    if (Number.isNaN(today.getTime()) || Number.isNaN(end.getTime())) {
      console.error("Invalid date provided");
      return 0; // Return 0 or handle this case appropriately
    }

    const difference = end.getTime() - today.getTime(); // difference in milliseconds
    return Math.ceil(difference / (1000 * 60 * 60 * 24)); // Convert to days
  };




  const [openFilter, setOpenFilter] = useState(false);

  const [contracts, setContracts] = useState([]);

  const navigate = useNavigate();
  const storedValue = localStorage.getItem('121211');
  useEffect(() => {
    if (storedValue === '0') {
      navigate('/login');
    }
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:7800/contract/fetchAll');
        const allContracts = await response.json();
        // Update state with fetched products
        setContracts(allContracts);
        console.log("products:", allContracts);
      } catch (error) {
        console.log('Error fetching contracts:', error);
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

  // const opendeleteModal = (selectedProduct) => {
  //   Swal.fire({
  //     title: "You want to delete the product?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         const response = await fetch(`http://localhost:7800/api/products/delete/${selectedProduct}`, {
  //           method: 'DELETE'
  //         });
  //         console.log("Deleted : ", response);
  //         if (response.ok) {
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "Your product has been deleted.",
  //             icon: "success"
  //           });
  //           setProducts(prevProducts => prevProducts.filter(product => product._id !== selectedProduct));
  //         } else {
  //           throw new Error('Failed to delete product');
  //         }
  //       } catch (error) {
  //         console.log('Error deleting product:', error);
  //         Swal.fire({
  //           title: "Error!",
  //           text: "Failed to delete the product.",
  //           icon: "error"
  //         });
  //       }
  //     }
  //   });
  // };


  // try {
  //   const response = fetch(`http://localhost:7800/api/products/delete/${selectedProduct}`);
  //   // const deleted = response.json();
  //   // console.log("products deleted :", deleted);
  // } catch (error) {
  //   console.log('Error fetching products:', error);
  //   // Handle error condition if needed
  // }


  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Contracts
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
          {contracts.map((product, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', maxWidth: '300px', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <img src={product.shop.picture} alt={product.shop.name} style={{ height: '50px', width: '50px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
                <img src={product.product.picture} alt={product.model} style={{ height: '150px', width: 'auto', maxWidth: '100%', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                <p style={{ textAlign: 'center', color: '#333', fontSize: '1.2rem', marginBottom: '0' }}>{product.product.name} </p>
                <p style={{ textAlign: 'center', color: '#333', fontSize: '1.2rem', marginBottom: '0' }}>{product.product.SN}</p>
                <p style={{ textAlign: 'center', color: '#333', fontSize: '1.2rem', marginBottom: '0' }}>Ends In {calculateDaysBetween(product.date_f)} Days</p>
                <p style={{ textAlign: 'center', color: '#333', fontSize: '1.2rem', marginBottom: '0' }}>{product.protVol ? "Theft Included" : "Theft Not Included"}</p>
                <p style={{ fontWeight: 'bold', color: '#333', fontSize: '1.2rem', marginBottom: '0' }}>{product.insurance.companyName} {product.type} </p>
                <p style={{ fontWeight: 'bold', color: '#333', fontSize: '1.2rem', marginBottom: '0' }}>{product.price} TND</p>
              </div>
            </div>
          ))}
        </div>



      </Grid>


    </Container>
  );
}
