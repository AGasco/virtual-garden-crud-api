const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  species: {
    type: String,
    required: true,
    trim: true
  },
  positionX: {
    type: Number,
    default: null
  },
  positionY: {
    type: Number,
    default: null
  },
  status: {
    type: String,
    enum: ['garden', 'vault'],
    default: 'vault'
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

PlantSchema.pre('save', (next) => {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Plant', PlantSchema);