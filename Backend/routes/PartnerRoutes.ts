import express from 'express';
const router = express.Router();
import { submitPartner } from "../controller/PartnerController"


// Route for submitting partner information
router.post('/submit', submitPartner);

export default router;
