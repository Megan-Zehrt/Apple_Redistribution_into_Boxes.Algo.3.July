// 3074. Apple Redistribution into Boxes



// You are given an array apple of size n and an array capacity of size m.

// There are n packs where the ith pack contains apple[i] apples. There are m boxes as well, and the ith box has a capacity of capacity[i] apples.

// Return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes.

// Note that, apples from the same pack can be distributed into different boxes.



/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    
    let Apples = apple.reduce((accumulater, currentValue) => {
        return accumulater + currentValue
    }, 0)

    let boxCount = 0
    let sum = 0

    capacity.sort((a,b) => b-a)
    for(let i = 0; i < capacity.length; i++){

        if(sum < Apples){
            sum += capacity[i]
            boxCount += 1
        }
    }

    return boxCount

    
};






/**

  sum = 0

  iterate over apples
    sum += apples[i] 


    max = 0
    let boxCount = 0
    sort the capacity array in descending order
    iterate over capacity
        max += capacity[i]


        if max >= sum
            return min

        else
            max += capacity[i]
            boxCount += 1


 */