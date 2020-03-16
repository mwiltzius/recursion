//https://medium.freecodecamp.org/learn-recursion-in-10-minutes-e3262ac08a1

/*
Write a function that generates all possible combinations of 1 and 0 for n bits. 
For example, if the function receives 2 as the number of bits, it should produce the following 4 combinations: 00,01,10,11. 
You cannot use any mathematical operators.
*/

function binary(n) {
    if ( n===1 ) {
        console.log(a.join(''));
    } else {
        a[n-1] = 0;
        binary(i-1);
        a[n-1] = 1;
        binary(i-1);
    }
}

//unfinished