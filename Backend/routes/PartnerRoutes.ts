import express from 'express';
import partnerController from "../controller/PartnerController"

const router = express.Router();

// Route for submitting partner information
router.post('/submit', partnerController.submitPartner);
router.get('/fetchAllPartner', partnerController.fetchRequests);
router.delete('/deletePartner/:id', partnerController.deletePartner);
router.put('/updateStatus/:id', partnerController.updateStatus);

export default router;
