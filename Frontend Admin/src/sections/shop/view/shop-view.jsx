import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function ShopView() {
  const [shops, setShops] = useState([]);
  const navigate = useNavigate();
  const storedValue = localStorage.getItem('121211');

  useEffect(() => {
    if (storedValue === '0') {
      navigate('/login');
    }
  }, [storedValue, navigate]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await fetch('http://localhost:7800/shop/fetchAll');
        const allShops = await response.json();
        setShops(allShops);
      } catch (error) {
        console.log('Error fetching partners:', error);
      }
    };

    fetchShops();
  }, []);

  const deleteShop = async (id) => {
    try {
      await fetch(`http://localhost:7800/shop/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      Swal.fire("Shop deleted!");
      // Filter out the deleted partner from the state
      setShops(shops.filter(partner => partner._id !== id));

    } catch (error) {
      console.log('Error deleting partner:', error);
    }
  };



  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Shops</Typography>
      </Stack>

      <Grid container spacing={3}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
  {shops.map((partner, index) => (
    <div key={partner._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '300px', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
        <img src={partner.picture} alt={partner.name} style={{ height: '70px', width: '70px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
        <p style={{ fontWeight: 'bold', color: '#333', fontSize: '1.4rem', marginBottom: '0', textAlign: 'center' }}>{partner.companyName}</p>
        <p style={{ color: '#666', fontSize: '1rem', marginBottom: '0', textAlign: 'center' }}>Registration: {partner.TRN}</p>
        <p style={{ color: '#666', fontSize: '1rem', marginBottom: '0', textAlign: 'center' }}>Phone: {partner.phoneNumber}</p>
        <p style={{ color: '#666', fontSize: '1rem', marginBottom: '0', textAlign: 'center' }}>Email User: {partner.user.email}</p>
      </div>
      <button type="button" style={{ background: '#f44336', color: '#fff', padding: '0.8rem 1.5rem', border: 'none', borderRadius: '25px', cursor: 'pointer', transition: 'background 0.3s', fontSize: '1rem' }} onClick={() => deleteShop(partner._id)}>
        Delete
      </button>
    </div>
  ))}
</div>



      </Grid>
    </Container>
  );
}
