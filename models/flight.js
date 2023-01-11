import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
    required: true
  },
  airport: {
  type: String, 
  enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  default: "DEN"
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 999
  },
  departs: {
    type: Number,
    default: function() {
      return new Date().getFullYear() + 1
    }
}, 
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}