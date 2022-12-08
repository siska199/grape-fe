
export interface TInputProps{
    name : string;
    value : string;
    onChange : (e:React.ChangeEvent)=>void;
    customeStyle? : string;
    type : "text" | ""
}

