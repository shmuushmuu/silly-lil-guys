//old school usage

function isEqual(a,b) {
    if (a === b) {
        console.log('They are equal in both type and value.')
    } else if (a == b) {
        console.log('They are equal in value.')
    } else {
        console.log('They... are not equal. That`s rough, buddy.')
    }
    return;
}

isEqual(20, 'twenty');

var isEqualTryAgain = function(c,d) {
    if (c === d) {
        console.log('Yep, they`re equal in both type and value.')
    } else if(c == d) {
        console.log('They are equal in value.')
    } else {
        console.log('I tell ya what big shoots, they must have stuff in common, but being equal ain`t one of them.')
    }
    return;
}

isEqualTryAgain(13, '1');