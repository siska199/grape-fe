export const captitalizeFirstChar = (words : string )=>{
    return words.toLowerCase().split(" ").map(word=>{
        return word.charAt(0).toUpperCase()+word.slice(1)
    }).join(" ")
}
