import { TInputProps } from '@lib/typescript/type-props'

type TProps = Omit<TInputProps<HTMLOptionElement>,"type"> & {
  data : string[]
}

const SelectInput = (props: TProps) => {
  const {data,name, customeStyle} = props
  return (
    <div className={`${customeStyle} flex flex-col gap-1`}>
      <label htmlFor="">{name.toUpperCase()}</label>
      <select className={`input rounded-none`}>
        <option value="default" hidden>Choose Level of Skill</option>
        {
          data.map((value)=>(<option className='!rounded-none' value={value}>{value}</option>)
          )
        }
      </select>
    </div>
  )
}

export default SelectInput