const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to Mongodb...'))
  .catch((err) => console.log('Could not connect to MongoDB...', err));

// create collection schema
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

async function createCourse() {
  // create model
  const Course = mongoose.model('Course', courseSchema);
  // create instance
  const course = new Course({
    name: 'React JS',
    author: 'suvadip',
    tags: ['node', 'frontend'],
    isPublished: true
  });

  const result = await course.save();
  console.log('Course ID: ', result);
}

createCourse();