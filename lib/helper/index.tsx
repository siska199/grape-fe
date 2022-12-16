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

export const generateURLImage = (file:File, callback : (url: TFileReader)=>void)=>{
    let url : TFileReader = ""
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) =>{
        url =  e.target ? e.target.result : ""
        callback(url)
    }
}

export const validationInput = {
    text : {
        pattern : "",
        
    }
}