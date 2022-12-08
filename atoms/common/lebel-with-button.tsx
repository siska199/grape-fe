import { BsPlusSquare } from 'react-icons/bs';

type TProps = {
    name : string;
    onAdd : ()=>void;
}

const Label = (props: TProps) => {
  const {name, onAdd} = props
  return (
    <label htmlFor="" className='label flex gap-2 items-center'>{name.toUpperCase()} <BsPlusSquare onClick={onAdd} className='cursor-pointer'/> </label>
    )
}

export default Label