db.getMongo().getDBs();

db;

// create or select database
use("collegeDb");

// create collection
// db.getCollection("students").insertOne({ id: 1, name: "Test1" });

// db.getCollection("students").insertOne({ id: 2, name: "Test2" });

// multiple insert
// db.getCollection("students").insertMany([
//     { id: 3, name: "Test3" },
//     { id: 4, name: "Test4" },
//     { id: 5, name: "Test5" },
// ]);

// display all records
// db.getCollection("students").find();

// display specific record
// db.getCollection("students").find({ id: 2 });

// db.getCollection("students").find({ id: { $gt: 4 } });

// $gt, $lt, $gte, $lte, $eq, $ne, $in, $nin, $or,
// $and, $not, $nor, $exists, $type, $mod, $regex, $text, $where,
// $elemMatch, $size, $bitsAllSet, $bitsAnySet, $bitsAllClear,
// $bitsAnyClear, $comment

// db.getCollection("students").find({
//     $or: [
//         { id: 1 },
//         { name: "Test4" }
//     ]
// });

// db.getCollectionNames();

// display only the column
// db.getCollection("students").find({id: 3}, { name: "n", _id: 0, id: 1 });

// update the record
// db.getCollection("students").updateOne({ id: 1 }, { $set: { name: "Test1 Updated" } });

// delete the record
db.getCollection("students").deleteOne({ id: 5 });

db.getCollection("students").find();