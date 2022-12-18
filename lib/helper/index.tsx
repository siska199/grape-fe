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
type TDataValidationForm = {
    nameClass:string,
    input : boolean,
    textarea : boolean,
    listData : boolean,
    uploadFile : boolean,
}

export const validationForm = (dataForm:TDataValidationForm ) : boolean=>{
    console.log(dataForm)
    const formClass = dataForm.nameClass
    const elementsInputEmpty = document.querySelectorAll(`.${formClass} input[value=''].input-resume, .${formClass} input[value='+62'][type='tel'], .${formClass} input[value=''][type='tel'], .${formClass} input[fileexist='false']`)
    console.log("element file", document.querySelectorAll(`.${formClass} input[fileexist='false']`))
    const elementsTextArea : NodeListOf<HTMLTextAreaElement> = document.querySelectorAll(`.${formClass} textarea`) 
    const elementsLi = document.querySelectorAll(`.${formClass} ul.list-data li`)
    let isInputsAllow = true;
    let isTextAreaAllow = true;
    let isLisAlllow = true;
    
    if(dataForm.input) isInputsAllow = elementsInputEmpty.length==0?true:false
    if(dataForm.textarea) isTextAreaAllow = Array.from(elementsTextArea).filter(elm=>elm.value=='').length==0?true:false
    if(dataForm.listData) isLisAlllow = elementsLi.length>0?true:false
    
    console.log("input: ", isInputsAllow)
    console.log("textare:", isTextAreaAllow)
    console.log("list data: ", isLisAlllow)
    const isValid = (isInputsAllow&&isTextAreaAllow&&isLisAlllow) ? true:false
    console.log("is valid: ", isValid)
    
    return isValid
}