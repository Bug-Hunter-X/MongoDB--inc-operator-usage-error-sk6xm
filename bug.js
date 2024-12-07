```javascript
// Incorrect use of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
//Correct use of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{"field":value}});
```