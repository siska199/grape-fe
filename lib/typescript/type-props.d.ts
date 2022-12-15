
export interface TInputProps<T>{
    name : string;
    value : string;
    onChange : (e:React.ChangeEvent<T>)=>void;
    customeStyle? : string;
    type : "text" | "password" | "checkbox" | "date" | "email" | "number"
}
export type TId = string

