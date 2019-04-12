// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by cognito1.js.
import { name as packageName } from "meteor/obonyojimmy:cognito1";

// Write your tests here!
// Here is an example.
Tinytest.add('cognito1 - example', function (test) {
  test.equal(packageName, "cognito1");
});
