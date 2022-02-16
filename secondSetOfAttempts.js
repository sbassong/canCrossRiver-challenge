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

// helper function to check the position of jumper

// const getAllIndexes = (arr, val) => {
//     let indexes = []

//     for(let i = 0; i < arr.length; i++)
//         if (arr[i] === val) {
//           indexes.push(i)
//         }
//     return indexes;
// }

const checkPosition = (start, prevPosition) => {
  if (start === end) {
    return true
  }
}

const traverseArr = (stones, currentStone, rightSideArr, leftSideArr) => {
  
  if (rightSideArr.length > currentStone) {
    const nextValue = rightSideArr[currentStone]
    currentStone = stones.at(stones.indexOf(nextValue))
    return traverseArr(stones, currentStone, rightSideArr, leftSideArr)
  } else if (leftSideArr.lenth > currentStone) {
    const nextValue = leftSideArr.at(-currentStone)
    currentStone = stones.at(stones.indexOf(nextValue))
    return traverseArr(stones, currentStone, rightSideArr, leftSideArr)
  } else {
    return false
  }
}

const canCrossRiver = (stones) => {
  //declare start and end stone
  // const startStone = stones[0]
  // const lastStone = stones.at(-1)
  let currentPosition = 0
  let currentStone = stones[0]
  // let nextPositionStone = currentStone
  // let stonesCopy = stones
  
  // you step on first stone, currentstone === startStone
  let leftSideArr = stones.slice(0, currentPosition)
  let rightSideArr = stones.slice(currentPosition + 1)
  
  
  const visited = new Set()
  // const stones4 = [2, 3, 1, 9]
  
  const reassignCurrent = function() {
    // if (currentStone === rightSideArr.length + 1) {
    //   return true
    // } 
    
    if (visited.has(currentPosition)){
      return false
    } else {

      if (currentStone < rightSideArr.length) {
        console.log('curpos1:', currentPosition)
        console.log('curstone1:',currentStone)
        console.log(visited)
        console.log('leftsidearr', leftSideArr)
        console.log('rightsidearr', rightSideArr)
        
        visited.add(currentPosition)
        currentPosition += currentStone
        currentStone = stones[currentPosition]

        leftSideArr = stones.slice(0, currentPosition)
        rightSideArr = stones.slice(currentPosition + 1)

        console.log('curpos2:', currentPosition)
        console.log('curstone2:',currentStone)
        console.log(visited)
        console.log('leftsidearr', leftSideArr)
        console.log('rightsidearr', rightSideArr)
        
        return reassignCurrent()
      } else if (currentStone === rightSideArr.lenth + 1) {
        return true

      } else if (currentStone < leftSideArr.length) {
        visited.add(currentPosition)
        currentPosition -= currentStone
        currentStone = stones[currentPosition]
        
        leftSideArr = stones.slice(0, currentPosition)
        rightSideArr = stones.slice(currentPosition + 1)

        return reassignCurrent()
      } else {
        return false
      }
    }
  } 

  return reassignCurrent()

    // you're on the right track, figure out why it doesn't get to the last step/check 
    // return false
    
  }
  


  // while (stonesArr.length !== stones.length ) {
    // return traverseArr(stones, currentStone, rightSideArr, leftSideArr)
  //   if (rightSideArr.length > currentStone) {
  //   // const nextValue = rightSideArr[currentStone]
  //   currentStone = stones[stones.indexOf(currentStone) + currentStone]
  //   return canCrossRiver(stones, currentStone)
  // } else if (leftSideArr.lenth > currentStone) {
  //   currentStone = stones[stones.indexOf(currentStone) - currentStone]
  //   return canCrossRiver(stones, currentStone)
  // } else {
  //   return false
  // }
  // }
  //edge case: if from the currentStone, we can directly jump to the other side then return true
 

// NEXT STEP IS ADDING AN ARRAY THAT STORES EACH STONE AS IT IS VISITED

  // let prevStone = stones[stones.indexOf(currentStone) - 1]
  // let nextStone = stones[stones.indexOf(currentStone) + 1]

  // if there is an index in the rightSideArr at which the value === currentStone's value
  // jump to that stone that stone and it is is now the currentStone
  // run the check again and return it (this logic will likely have to be it's  own function that can be called again)
  // if (currentStone)

  // if (stones[rightSideArr.indexOf(currentStone)])
  // else if there is an index in the leftSideARR at which the value === currentStone
  // jump to that stone that stone and it is is now the currentStone
  // run the function/logic again and return it

  //else return false



      
      // let currentRange = [prevPosition - 1, prevPosition, prevPosition + 1]
    
      // for (const key in currentRange) {
      //   if (key >= 1) {
      //     let nextPosition = key + start
    
      //     if (set.has(nextPosition) && checkPosition(nextPosition, key)) {
      //       return true
      //     }
      //   }
      // }
      // return false


//   return checkPosition()


// }



const stones1 = [1, 1, 1]
const stones2 = [1, 2, 1]
const stones3 = [1, 3, 1]
const stones4 = [2, 3, 1, 9]
// const stones5 = [0, 1, 3, 4, 5, 6, 8, 9, 13]

console.log(canCrossRiver(stones1))
console.log(canCrossRiver(stones2))
console.log(canCrossRiver(stones3))
console.log(canCrossRiver(stones4))
// console.log(canCrossRiver(stones5))