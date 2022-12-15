import { handleAddListDataForm, handleDeleteListData, handleEditListData, handleResetFormData } from '@lib/redux/features/resumeSlice';
import { useAppDispatch } from '@lib/redux/store';
import { TId } from '@lib/typescript/type-props';

type Props = {
    type : string;
    parentName : string;
}

const useOnCRUD = (props: Props) => {
    const dispatch = useAppDispatch()
    const handleAddData = ()=>{
        dispatch(handleAddListDataForm({
          parentName : "personalInfo",
          type : "socialMedia",
        }))
      }
    const handleEditData = (id:string)=>{
        dispatch(handleEditListData({
            type : "socialMedia",
            parentName:"personalInfo",
            id 
        }))
    }

    const handleDeleteData = (id:TId)=>{
        dispatch(handleDeleteListData({
            type : "socialMedia",
            parentName:"personalInfo",
            id 
        }))
    }

    const handleResetForm = ()=>{
        dispatch(
            handleResetFormData({
                type : "socialMedia",
                parentName:"personalInfo",
            })
        )
    }
    
    return {handleAddData,handleDeleteData, handleEditData, handleResetForm}
}

export default useOnCRUD