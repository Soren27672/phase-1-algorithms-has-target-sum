

function hasTargetSum(array, target) {
  let j = 0;
  for(let i = 0; i < array.length; ++i) {
    for(; j < array.length; ++j) {
      if ((array[i] + array[j] === target) && i !== j) { // i iterator will retreive the first value we're testing,
        // j retrieves the second. See if they add up to the target
        // also check if they are the same index
        // since i and j are both pointing to the indexes, you can compare them directly
        return true;
      };
    };
    j = 0;
  };
  return false;
}

/* 
  O(n^2)
*/

/* 
  for each element(eleSuper) of the array
    for each element(eleSub) of the array
      if the sum of it and eleSuper is the target sum
      and if indSuper is not indSub
      return true
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10,1,2,3], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
