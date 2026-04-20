const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  routeName: {
    type: String,
    required: true
  },
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus',
    required: true
  },
  stops: [
    {
      stopName: { type: String, required: true },
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
      order: { type: Number, required: true }
    }
  ],
  startTime: {
    type: String
  },
  endTime: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Route', routeSchema);