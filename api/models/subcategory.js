const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const SubcategorySchema = new Schema({
  _id: ObjectId,
  name: String,
  slug: String,
  icon_url: String,
  description: String,
  weights: Number,
  websites: [{ type: ObjectId, ref: 'Website' }]
});

const Subcategory = mongoose.model('Subcategory', SubcategorySchema);

module.exports = Subcategory;