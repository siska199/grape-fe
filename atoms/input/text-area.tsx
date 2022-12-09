import { TInputProps } from '@lib/typescript/type-props'

type TProps = Omit<TInputProps<HTMLTextAreaElement>,"type"|"customeStyle">

const TextArea = (props : TProps) => {
  const {name, value, onChange} = props
  return (
    <div className={`flex flex-col w-full`}>
      <label className='label'>{name.toUpperCase()}</label>
      <textarea onChange={onChange} rows={5} value={value} className="input">
      </textarea>
    </div>
  )
}

export default TextArea