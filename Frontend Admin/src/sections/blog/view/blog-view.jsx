import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';


export default function BlogView() {
  const [partners, setPartners] = useState([]);
  const navigate = useNavigate();
  const storedValue = localStorage.getItem('121211');

  useEffect(() => {
    if (storedValue === '0') {
      navigate('/login');
    }
  }, [storedValue, navigate]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('http://localhost:7800/partner/fetchAllPartner');
        const allPartners = await response.json();
        setPartners(allPartners);
      } catch (error) {
        console.log('Error fetching partners:', error);
      }
    };

    fetchPartners();
  }, []);

  const deletePartner = async (id) => {
    try {
      await fetch(`http://localhost:7800/partner/deletePartner/${id}`, {
        method: 'DELETE',
      });
      // Filter out the deleted partner from the state
      setPartners(partners.filter(partner => partner._id !== id));
    } catch (error) {
      console.log('Error deleting partner:', error);
    }
  };

  const acceptPartner = async (id, userId, userEmail, trn, name, phone, pict, newRole) => {
    console.log("Data sent to backend:", { userId, userEmail, trn, name, phone, pict, newRole });
    try {
      let apiUrl;
      switch (newRole) {
        case "repair-shop":
          apiUrl = 'http://localhost:7800/repairshop/create';

          await fetch(`http://localhost:7800/api/my/user/updateUser/${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              role: "repair-shop",
            })
          });

          await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userId,
              email: userEmail,
              TRN: trn,
              companyName: name,
              phoneNumber: phone,
              picture: pict
            })
          });

          deletePartner(id);

          break;
        case "shop":
          apiUrl = 'http://localhost:7800/shop/create';

          await fetch(`http://localhost:7800/api/my/user/updateUser/${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              role: "shop",
            })
          });

          await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userId,
              email: userEmail,
              TRN: trn,
              companyName: name,
              phoneNumber: phone,
              picture: pict
            })
          });

          deletePartner(id);
          break;
        case "insurance":
          apiUrl = 'http://localhost:7800/insurance/create';

          await fetch(`http://localhost:7800/api/my/user/updateUser/${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              role: "insurance",
            })
          });

          await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userId,
              email: userEmail,
              TRN: trn,
              companyName: name,
              phoneNumber: phone,
              picture: pict
            })
          });

          deletePartner(id);
          break;
        default:
        // Handle unknown roles
        // return;
      }


    } catch (error) {
      console.log('Error accepting partner:', error);
    }
  };


  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Requests</Typography>
      </Stack>

      <Grid container spacing={3}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {partners.map((partner, index) => (
            <div key={partner._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '300px', border: '1px solid #ccc', padding: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={partner.picture} alt="Logo" style={{ height: '50px', width: 'auto' }} />
                <p style={{ fontWeight: 'bold', color: '#333', fontSize: '1rem', marginBottom: '0' }}>{partner.companyName}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                <p style={{ textAlign: 'center', color: '#333', fontSize: '1rem', marginBottom: '0' }}>Registration: {partner.TRN}</p>
                <p style={{ color: '#333', fontSize: '1rem', marginBottom: '0' }}>Phone: {partner.phoneNumber}</p>
                <p style={{ color: '#333', fontSize: '1rem', marginBottom: '0' }}>Role: {partner.newRole}</p>
                <p style={{ color: '#333', fontSize: '1rem', marginBottom: '0' }}>Email: {partner.user.email}</p>

              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                <button type="button" style={{ background: '#4caf50', color: '#fff', padding: '0.5rem', border: 'none', borderRadius: '4px' }} onClick={() => acceptPartner(partner._id, partner.user.id, partner.user.email, partner.TRN, partner.companyName, partner.phoneNumber, partner.picture, partner.newRole)}>
                  Accept
                </button>
                <button type="button" style={{ background: '#f44336', color: '#fff', padding: '0.5rem', border: 'none', borderRadius: '4px' }} onClick={() => deletePartner(partner._id)}>
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>

      </Grid>
    </Container>
  );
}
