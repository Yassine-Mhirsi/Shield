import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function BlogView() {
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
  
  const [partners, setPartners] = useState([]);
  const declinePartner = async (id) => {
    try {
      await fetch(`http://localhost:7800/partner/updateStatus/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: "refused",
        })
      });
      Swal.fire("Partner Declined!");
      // Filter out the deleted partner from the state
      setPartners(partners.filter(partner => partner._id !== id));

    } catch (error) {
      console.log('Error deleting partner:', error);
    }
  };

  const acceptPartner = async (id, userId, userEmail, trn, name, phone, pict, newRole, insuranceTypes) => {
    // console.log("Data sent to backend:", { id, userId, userEmail, trn, name, phone, pict, newRole });
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
              role: "repairshop",
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

          await fetch(`http://localhost:7800/partner/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              status: "accepted",
            })
          });

          Swal.fire("Repair Shop Accepted!");

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

          await fetch(`http://localhost:7800/partner/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              status: "accepted",
            })
          });

          Swal.fire("Shop Accepted!");

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
              picture: pict,
              insurancetypes: insuranceTypes,
            })
          });

          await fetch(`http://localhost:7800/partner/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              status: "accepted",
            })
          });
          Swal.fire("Insurance Accepted!");
          break;
        default:
        // Handle unknown roles
        // return;
      }

      setPartners(partners.filter(partner => partner._id !== id));
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
        {partners.filter(partner => partner.status === 'waiting').length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {partners.map(partner => {
              if (partner.status === 'waiting') {
                return (
                  <div key={partner._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', maxWidth: '300px', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <img src={partner.picture} alt={partner.name} style={{ height: '70px', width: '70px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                      <p style={{ fontWeight: 'bold', color: '#333', fontSize: '1.4rem', marginBottom: '0', textAlign: 'center' }}>{partner.companyName}</p>
                      <p style={{ color: '#666', fontSize: '1rem', marginBottom: '0', textAlign: 'center' }}>Registration: {partner.TRN}</p>
                      <p style={{ color: '#666', fontSize: '1rem', marginBottom: '0', textAlign: 'center' }}>Phone: {partner.phoneNumber}</p>
                      <p style={{ color: '#666', fontSize: '1rem', marginBottom: '0', textAlign: 'center' }}>Email User: {partner.user.email}</p>
                      {partner.newRole === "insurance" && partner.insurancetypes.map(insurance => (
                        <p style={{ color: '#666', fontSize: '1rem', marginBottom: '0', textAlign: 'center' }}>Contract type: {insurance.type}, Price: {insurance.price}TND</p>
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                      <button type="button" style={{ background: '#4caf50', color: '#fff', padding: '0.8rem 1.5rem', border: 'none', borderRadius: '25px', cursor: 'pointer', transition: 'background 0.3s', fontSize: '1rem' }} onClick={() => acceptPartner(partner._id, partner.user.id, partner.user.email, partner.TRN, partner.companyName, partner.phoneNumber, partner.picture, partner.newRole, partner.insurancetypes)}>
                        Accept
                      </button>
                      <button type="button" style={{ background: '#f44336', color: '#fff', padding: '0.8rem 1.5rem', border: 'none', borderRadius: '25px', cursor: 'pointer', transition: 'background 0.3s', fontSize: '1rem' }} onClick={() => declinePartner(partner._id)}>
                        Decline
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="8" />
              </svg>
              <p style={{ color: '#007bff', fontSize: '1.6rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', textAlign: 'center', margin: '0' }}>No requests found</p>
            </div>
          </div>
        )}

      </Grid>
    </Container>
  );
}
