import mongoose from 'mongoose';

const insuranceTypeSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  price: {
    type: Number,
  }
});

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
  },
  picture: {
    type: String, // Assuming the picture will be stored as a URL
    required: true // Set it to true if picture is mandatory
  },
  status: {
    type: String,
    required: true,
    default: "waiting"
  },
  insurancetypes: [insuranceTypeSchema]
});

const Partner = mongoose.model('Partner', partnerSchema);

export default Partner;
