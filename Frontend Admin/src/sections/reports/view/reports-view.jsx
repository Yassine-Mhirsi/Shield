/* eslint-disable react/button-has-type */
// import { products } from 'src/_mock/products';
import ReactQuill from 'react-quill';
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

export default function ReportsView() {
  const [openFilter, setOpenFilter] = useState(false);

  const [reports, setReports] = useState([]);

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
        const response = await fetch('http://localhost:7800/report/fetchAll');
        const allReports = await response.json();
        // Update state with fetched products
        setReports(allReports);
        console.log("products:", allReports);
      } catch (error) {
        console.log('Error fetching reports:', error);
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
        Reports
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
          {reports.map((product, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', maxWidth: '300px', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                <p style={{ textAlign: 'center', color: '#333', fontSize: '1.2rem', marginBottom: '0' }}>{product.user.email} </p>
                <p style={{ textAlign: 'center', color: '#333', fontSize: '1.2rem', marginBottom: '0' }}>{new Date(product.date).toLocaleDateString('en-GB')}</p>
                <p style={{ textAlign: 'center', color: '#333', fontSize: '1.2rem', marginBottom: '0' }}>{product.status}</p>
                <p style={{ fontWeight: 'bold', color: '#333', fontSize: '1.2rem', marginBottom: '0' }}>{product.type}</p>
                {/* <p style={{ fontWeight: 'bold', color: '#333', fontSize: '1.2rem', marginBottom: '0' }}> */}
                  <ReactQuill
                    theme="snow"
                    value={product.desc}
                    readOnly
                    modules={{ toolbar: false }}
                    style={{ width: '100%', border: '1px solid #ccc', borderRadius: '5px' }}
                  />
                {/* </p> */}
              </div>
            </div>
          ))}
        </div>



      </Grid>


    </Container>
  );
}
