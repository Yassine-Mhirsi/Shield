// models/partner.js

import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema({
  user: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  TRN: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  newRole: {
    type: String,
    required: true
  }
});

const Partner = mongoose.model('Partner', partnerSchema);

export default Partner;