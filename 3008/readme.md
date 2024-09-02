<!-- task1: db.col_name.updateOne() db.col_name.updateMany() db.col_name.findOneAndUpdate() db.col_name.replaceOne()

task2: db.col_name.deleteOne() db.col_name.deleteMany() db.col_name.findOneAndDelete()

//$type:-

// chitkara> db.student.find({ age: { $type: "number" } })
// [
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c1'),
//     name: 'Alice',
//     age: 20,
//     marks: 85,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A+'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c2'),
//     name: 'Bob',
//     age: 22,
//     marks: 90,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c3'),
//     name: 'Charlie',
//     age: 21,
//     marks: 92,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'B+'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c4'),
//     name: 'David',
//     age: 23,
//     marks: 88,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c5'),
//     name: 'Eve',
//     age: 19,
//     marks: 95,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'C'
//   }