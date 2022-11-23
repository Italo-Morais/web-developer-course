// >>>> Loopings <<<<

let count = 11 // flag
while (count <= 10)

    if (count > 2 && count < 8) {
    count++ // continue
    break
}

if (count % 2 == 0) {
    console.log(count)
} 
count++ // container

// do {
//     if (count > 2 && count < 8) {
//         count++ // container
//         break
//     }
    
//     if (count % 2 == 0) {
//         console.log(count)
//     }
//     count ++ // container 
// } while (count <= 10)


// console.log("Minha aplicação")

for (let count = 0; count <= 10; count++) {
    if (count > 2 && count < 8) {
        // count++ // caution, two increments!
        continue
        // break 
    }
    
    if (count % 2 == 0) {
        console.log(count) 
    }
} 