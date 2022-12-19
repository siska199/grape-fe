import Label from "@atoms/common/lebel-with-button"
import AddSkills from "@atoms/form-add-data/skills"
import { useAppSelector } from "@lib/redux/store"
import { useState } from "react"

const ListSkill = (props:{}) => {
  const skills = useAppSelector(state=>state.resume.form.educationsAndSkills.skills)
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="container-dashed">
      <Label name={"Skills"} onAdd={()=>{
        setShowForm(true)
      }}/>
      <div className="">
        {
          skills.map((data,i)=>(
            <div>{i}</div>
          ))
        }
      </div>
      {
        showForm && (
          <AddSkills onClose={setShowForm}/>
        )
      }
    </div>
  )
}

export default ListSkill