//https://medium.freecodecamp.org/learn-recursion-in-10-minutes-e3262ac08a1

//Write a function that sums all numbers in an array that can have nested sub-arrays. Do not use loops.

//simpler problem

/*
function sum(a, i){
    if (i<0){
        return 0;
    } else {
        return a[i] + sum(a, i - 1);
    }
}
*/


function sum(a, i){
    if (i<0){
        return 0;
    }

    let current = a[i]

    if(Array.isArray(a[i])){
        current = sum(a[i], a[i].length-1)
    }

    return current + sum(a, i - 1);
}

let a = [1, 2, [1, 2, [1, 2]]];

console.log(sum(a, 2));
