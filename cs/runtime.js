const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extra');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

//tinyArray		            smallArray		           mediumArray		            largeArray		              extraLargeArray		
//doublerInsert	75.3 μs	    doublerInsert	93.9 μs	   doublerInsert	374 μs	    doublerInsert	20.3256 ms 	  doublerInsert	1.7067438 s	
//doublerAppend	183.2 μs	doublerAppend	195.9 μs   doublerAppend	281.3 μs	doublerAppend	1.0771 ms	  doublerAppend	13.4389 ms	

/*Based on the run times from each array doublerAppend is a faster more effecient option that will scale better. 
The reason for this is that doublerInsert uses unshift which adds one or more elements to the beginning of an
array and returns the new length of the array. While doublerAppend uses .push, which adds to the end of an array.
The key here is that unshift literally unshifts all the elements to the left once the first element is added, 
Thus increasing the amount of operations. The bigger the array the slower this is which means it does not scale well*/



