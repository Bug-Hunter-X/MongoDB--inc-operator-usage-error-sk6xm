# MongoDB $inc Operator Usage Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB's `updateOne` method. The incorrect usage can lead to unexpected behavior and data corruption.

## Bug Description
The bug arises from incorrectly specifying the field to increment within the `$inc` operator.  Incorrectly omitting the quotes around the field name in the `$inc` operator can cause unexpected behavior and potential data corruption.

## Solution
The solution correctly uses the `$inc` operator by enclosing the field name within quotes.