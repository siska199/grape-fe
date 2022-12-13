import { TInputProps } from '@lib/typescript/type-props'
import PhoneInput from 'react-phone-input-2'


type TProps = Omit<TInputProps<HTMLInputElement>,"type"|"onChange"> & {
    onChange : (dataInpur : TDataInputCustome)=>void
}

const InputPhone = (props: TProps) => {
    const {name,value,customeStyle, onChange} = props

  return (
        <div className=' flex flex-col '>  
            <label htmlFor={name} className='label text-cd300 '>{name.toUpperCase()}</label>
            <PhoneInput
                country={'id'}
                value={value}
                onChange={(phone)=>onChange({value:phone,name})}
            />  
        </div>
    )
}

export default InputPhone