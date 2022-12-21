function soma(num1, num2) {
    console.log(num1 + num2)
}

function sub(num1, num2) {
    console.log(num1 - num2)
}

function mult(num1, num2) {
    console.log(num1 * num2)
}

function div(num1, num2) {
    console.log(num1 / num2)
}

export {soma, sub, mult, div}
export const operations = ({
    soma,
    sub,
    mult,
    div
})