import express from 'express';
import { createClient, fetchClients, updateClient } from '../controller/ClientController';

const router = express.Router();

// Route for submitting partner information
router.post('/create', createClient);
router.get('/fetchAll', fetchClients);
router.put('/update/:id', updateClient);

export default router;
