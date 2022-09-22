const mongoose = require("mongoose");

const ObjectSchema = mongoose.Schema({
  content: Object,
  visible: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const ObjectModel = mongoose.model("object", ObjectSchema);

module.exports = { ObjectSchema, ObjectModel };
