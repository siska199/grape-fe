import Label from '@atoms/common/lebel-with-button'
import Li from '@atoms/common/li'
import AddSocialMedia from '@atoms/form-add-data/social-media'
import useOnCRUD from 'hooks/useOnCRUD'
import { useState } from 'react'
type TProps = {
    socialMedias : TSocialMedia[] | []
}

const ListSocialMedia = (props: TProps) => {
    const [showForm, setShowForm] = useState<boolean>(false)
    const {socialMedias} = props
    const {handleEditData,handleDeleteData,handleResetForm } = useOnCRUD({type:"socialMedia", parentName:"personalInfo"})

  return (
    <div className='w-full'>
        <Label name="list social media"  onAdd={()=>{
            setShowForm(true)
            handleResetForm()
        }}/>
        <ul className='mb-3 flex flex-col gap-2'>
            {
                socialMedias.map((data:TSocialMedia,i:number)=>(
                    <Li key={i} id={data.id} type="link" link={data.link} name={data.name} onRemove={handleDeleteData} onEdit={handleEditData}/>
                ))
            }
        </ul>
        {
            showForm && (
                <AddSocialMedia onClose={setShowForm}/>
            )
        }
    </div>
  )
}

export default ListSocialMedia