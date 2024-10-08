export const fizzbuzz = (number) => {
    if (typeof number !== "number") throw new Error("parametre provided must be a number")
    if (Number.isNaN(number)) throw new Error("parametre provided must be a number")

    const multiplies = { 3 : "fizz" , 5 : "buzz", 7 : "woff" }
    let output = ""

    Object.entries(multiplies).forEach(([multiplies , word]) => {
        if (number % multiplies === 0) output += word
    })
    
    return output === "" ? number : output      
    }