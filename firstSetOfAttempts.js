// Prompt: 
// You are standing on one side of the river bank and you need to cross over to the other
// side of the river. There are stones placed in the river and each stone has a number on it.
// The number represents the exact number of stones you can jump over to either forward
// or backwards. Once you step on the first stone in the river (by default you can always
// step on the first stone), then the number written on the current stone is the exact (no
// less) number of stones you can move forward to.
// Based on an input of integer arrays (where every position in the array represents a stone
// and the value at each position of the array represents the number on the stone),
// determine if you can successfully cross the river or not.

// constraints:
// ● You can always step on the first stone on the river
// ● You can move either forward or backward from any stone but only if there are
// enough stones left in either direction.
// ● The input array will integer based data and no other data types.
// ● The final hop to the other side of the river counts as a single jump as well. So for
// instance, if you are on the last stone in the river, you can successfully cross the
// river by jumping forward only if the value on the last stone == 1.

// input
// array of ints
// ex: [1, 1, 1]

//output
// bool 

// // helper function to check the position of jumper
// const checkPosition = (firstStone, prevStone, lastStone, stonesSet) => {
//   //quick check to make sure we have a 
//   if (firstStone === lastStone) {
//     return true
//   }
  
//   let currentRange = [prevStone - 1, prevStone, prevStone+1]
  
//   for (const key of currentRange) {
//     if (key >= 1) {
//       let nextPosition = key + firstStone
//       console.log('prev:', prevStone, '  next:', nextPosition)

//       if (stonesSet.includes(nextPosition) && checkPosition(nextPosition, key, lastStone, stonesSet)) {
//         return true
//       }
//     }
//   }
//   return false
// }


// const canCrossRiver = (stones) => {
//   // declare start and end stones
//   let firstStone = stones[0]
//   let lastStone = stones.at(-1)  // const last = stones[stones.length -1]

//   // Convert stones array to a set of unique
//   // const stonesSet = new Set(stones)
//   let prevStone = 0


//   return checkPosition(firstStone, prevStone, lastStone, stones)


// }

const canCrossRiver = (stones, currentStone=stones[0]) => {
  //declare start and end stone
  const startStone = stones[0]
  const lastStone = stones.at(-1)
  // let currentStone = currentStone
  // let nextPositionStone = currentStone

  // you step on first stone, currentstone === startStone
  // let currentStone = startStone
  let leftSideArr = stones.slice(0, stones.indexOf(currentStone))
  let rightSideArr = stones.slice(stones.indexOf(currentStone), stones.length)
  
  let stonesArr = []
  while (stonesArr.length !== stones.length ) {
    return traverseArr(stones, currentStone, rightSideArr, leftSideArr)
  }
  //edge case: if from the currentStone, we can directly jump to the other side then return true
 

// NEXT STEP IS ADDING AN ARRAY THAT STORES EACH STONE AS IT IS VISITED

  // let prevStone = stones[stones.indexOf(currentStone) - 1]
  // let nextStone = stones[stones.indexOf(currentStone) + 1]

  // if there is an index in the rigghtSideArr at which the value === currentStone's value
  // jump to that stone that stone and it is is now the currentStone
  // run the check again and return it (this logic will likely have to be it's  own function that can be called again)
  // if (currentStone)

  // if (stones[rightSideArr.indexOf(currentStone)])
  // else if there is an index in the leftSideARR at which the value === currentStone
  // jump to that stone that stone and it is is now the currentStone
  // run the function/logic again and return it

  //else return false
    }


const stones1 = [1, 1, 1]
const stones2 = [1, 2, 1]
const stones3 = [1, 3, 1]
const stones4 = [2, 3, 1, 9]
const stones5 = [0, 1, 3, 4, 5, 6, 8, 9, 13]

// console.log(canCrossRiver(stones1))
// console.log(canCrossRiver(stones2))
// console.log(canCrossRiver(stones3))
console.log(canCrossRiver(stones4))
// console.log(canCrossRiver(stones5))