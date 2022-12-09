import Input from '@atoms/input/input'
import UploadPhoto from '@atoms/input/upload-photo'
import ListActivity from '@components/list/activity'
import Modal from '@layouts/modal'
import { handleModalAddEducation } from '@lib/redux/features/resumeSlice'
import { useAppDispatch } from '@lib/redux/store'


const AddEducation = (props: {}) => {
    const dispatch = useAppDispatch()

    const handleOnChange = (e: React.ChangeEvent)=>{

    }

  return (
    <Modal title="Add Education" onSave={()=>console.log("save")} onClose={()=>dispatch(handleModalAddEducation(false))}>
            <>
                <Input type="text" onChange={handleOnChange} name={"institution"} value={""} />
                <Input type="text" onChange={handleOnChange} name={"major"} value={""} />
                <UploadPhoto onChange={handleOnChange} name={"logo"} value={""}/>
                <ListActivity/>
            </>
    </Modal>
  )
}

export default AddEducation