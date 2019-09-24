const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to Mongodb...'))
  .catch((err) => console.log('Could not connect to MongoDB...', err));

// 1. create collection schema
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

// 2. create model
const Course = mongoose.model('Course', courseSchema);


/* 3. Create a document */
async function createCourse() {
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

// 4. Get all courses
async function getCourse(){
  const courses = await Course.find();
  console.log('Courses: ', courses);
}

//createCourse();
getCourse(); 