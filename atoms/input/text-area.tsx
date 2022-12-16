import { convertToFieldName } from '@lib/helper'
import { TInputProps } from '@lib/typescript/type-props'

type TProps = Omit<TInputProps<HTMLTextAreaElement>,"type"|"customeStyle">

const TextArea = (props : TProps) => {
  const {name, value, onChange} = props
  return (
    <div className={`flex flex-col w-full `}>
      <label className='label'>{name.toUpperCase()}</label>
      <textarea minLength={1} maxLength={100} name={convertToFieldName(name)} onChange={onChange} rows={5} value={value} className="input input-resume">
      </textarea>
    </div>
  )
}

export default TextArea