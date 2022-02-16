// NOTES
// Will need a Node.js environment to run the this file (calls at the bottom)
// Cd into the pendulum-challenge directory and run the command:
// node solution.js

class RiverCross {
  constructor (stones)  {
    this.stones = stones
    this.currentPosition = 0
    this.currentStone = stones[0]
    // we make shallow copies to reference each side of the river/stones array from the current position
    this.leftSideArr = stones.slice(0, this.currentPosition)
    this.rightSideArr = stones.slice(this.currentPosition + 1)
    this.visited = new Set() // will allow us to track the positions already visited
  }

  moveForward() {
    this.visited.add(this.currentPosition)
    this.currentPosition += this.currentStone
  } 

  moveBackward() {
    this.visited.add(this.currentPosition)
    this.currentPosition -= this.currentStone
  }
  
  reassignValues() {
    this.currentStone = this.stones[this.currentPosition]
    this.leftSideArr = this.stones.slice(0, this.currentPosition)
    this.rightSideArr = this.stones.slice(this.currentPosition + 1)
  }

  canCrossRiver() {
    // check if we can cross the rest of the river from the current position
    if (this.currentStone === this.rightSideArr.length + 1) {
      return true
    }

    // if not, we check whether the current position has already been visited
    if (!this.visited.has(this.currentPosition)) {

      // if we haven't, we can check whether we can move forward in the arr, from the currentPosition and stone
      // if true, we move forward, update state and continue the check with the updated state
      if (this.currentStone < this.rightSideArr.length) {
        this.moveForward()
        this.reassignValues()
        return this.canCrossRiver()

      } else if (this.currentStone > this.rightSideArr.length) {
        // if we can't move forward, we check if we can move backwards
        // if so, we move, update state, and continue checking with updated info
        if (this.currentStone < this.leftSideArr.length) {
          this.moveBackward()
          this.reassignValues()
          return this.canCrossRiver()
        }

        // if we also can't move backward, then the frog can't cross the river
        return false
      }

      return true
    }

    // if the position has already been visited, then we must have checked all positions already
    // which means the frog can't cross this river
    return false
  }
}

// test case instances
const riverCross1 = new RiverCross([1, 1, 1])
const riverCross2 = new RiverCross([1, 2, 1])
const riverCross3 = new RiverCross([1, 3, 1])
const riverCross4 = new RiverCross([2, 3, 1, 9])

const riverCross5 = new RiverCross([0, 1, 3, 4, 5, 6, 8, 9, 13])
const riverCross6 = new RiverCross([2, 1, 2, 4])

// --------------------------------------------

console.log(1, riverCross1.canCrossRiver()) // true
console.log(2, riverCross2.canCrossRiver()) // true
console.log(3, riverCross3.canCrossRiver()) // false
console.log(4, riverCross4.canCrossRiver()) // true

console.log(5, riverCross5.canCrossRiver()) // false
console.log(6, riverCross6.canCrossRiver()) // true