import express from 'express';
const router = express.Router();
import { deletePartner, fetchRequests, submitPartner } from "../controller/PartnerController"


// Route for submitting partner information
router.post('/submit', submitPartner);
router.get('/fetchAllPartner', fetchRequests);
router.delete('/deletePartner/:id', deletePartner);

export default router;
