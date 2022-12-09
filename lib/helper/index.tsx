export const captitalizeFirstChar = (words :string)=>{
    return words.toLowerCase().split(" ").map(word=>{
        return word.charAt(0).toUpperCase()+word.slice(1)
    }).join(" ")
}

export const convertToFieldName = (sentence:string)=>{
    return sentence.toLowerCase().split(" ").map((word,i)=>{
        return i == 0 ? word.toLowerCase() : word.charAt(0).toUpperCase()+word.slice(1)
    }).join("")
}

console.log("result: ", convertToFieldName("SIsksa "))