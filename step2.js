const checkIfZero = (arr) => {
    let equalsZero = false
    for(i = 0; i < arr.length; i++){
        for(j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0)
            equalsZero = true
        }
    }
    return equalsZero
}

// console.log(checkIfZero([1, 2, 3]))
// O(n^2)
// space complexity: O(n)

const uniqueChars = str => {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++){
        for (let x = 1; x < arr.length; x++) {
            if (arr[i] === arr[x]) {
                return false
            }
        }
    }
    return true
  }
// O(n^2)
// space complexity: O(n)



const isPangram = str => {
    const lowerStr = str.toLowerCase()
    const letters = new Set()
    for(const char of lowerStr){
        if(/[a-z]/.test(char)) {
            letters.add(char)
        }
    }
    return letters.size === 26
}
// console.log(isPangram('The quick brown fox jumps over the lazy dog'))
// time complexity: O(n)
// space complexity: O(n)

const longWord = arr => {
    let longestLength = 0
    for (i = 0; i < arr.length; i++){
        if(arr[i].length > longestLength)
        longestLength = arr[i].length
    }
    return longestLength
}
console.log(longWord(["hi", "hello", 'hiBrady']))
// O(n)
// space complexity: O(n)