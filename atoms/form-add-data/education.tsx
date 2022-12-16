import Input from '@atoms/input/input'
import UploadPhoto from '@atoms/input/upload-photo'
import ListActivity from '@components/list/activity'
import Modal from '@layouts/modal'
import { handleModalAddEducation } from '@lib/redux/features/resumeSlice'
import { useAppDispatch, useAppSelector } from '@lib/redux/store'
import useOnChange from 'hooks/useOnChange'


const AddEducation = (props: {}) => {
  const dispatch = useAppDispatch()
  const form = useAppSelector(state=>state.resume.form.education)
  console.log("form education: ", form)
  const  { handleOnChange, handleOnChangeImage,handleRemoveImage} = useOnChange("education")

  return (
    <Modal title="Add Education" onSave={()=>console.log("save")} onClose={()=>dispatch(handleModalAddEducation(false))}>
            <>
                <Input type="text" onChange={handleOnChange} name={"institution"} value={form.institution} />
                <Input type="text" onChange={handleOnChange} name={"major"} value={form.major} />
                <UploadPhoto onRemove={handleRemoveImage} onChange={handleOnChangeImage} name={"logo"} value={form.logo}/>
                <ListActivity parentName="education"/>
            </>
    </Modal>
  )
}

export default AddEducation