import AddSkills from "@atoms/form-add-data/skills"
import { BsPlusSquare } from "react-icons/bs"

const ListSkill = (props:{}) => {
  
  return (
    <div>
      <label className='label flex gap-2 items-center'>
        SKILLS
        <BsPlusSquare className='cursor-pointer'/>
      </label>
      <AddSkills/>
    </div>
  )
}

export default ListSkill