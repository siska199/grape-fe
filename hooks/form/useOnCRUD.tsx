import { handleAddListDataForm, handleDeleteListData, handleEditListData, handleResetFormData } from '@lib/redux/features/resumeSlice';
import { useAppDispatch } from '@lib/redux/store';
import { TId } from '@lib/typescript/type-props';

type Props = {
    type : string;
    parentName : string;
}

const useOnCRUD = (props: Props) => {
    const {parentName,type} = props
    const dispatch = useAppDispatch()
    const handleAddData = ()=>{
        dispatch(handleAddListDataForm({
          parentName,
          type
        }))
      }
    const handleEditData = (id:string)=>{
        dispatch(handleEditListData({
            type,
            parentName,
            id 
        }))
    }

    const handleDeleteData = (id:TId)=>{
        dispatch(handleDeleteListData({
            type,
            parentName,
            id 
        }))
    }

    const handleResetForm = ()=>{
        dispatch(
            handleResetFormData({
                type ,
                parentName,
            })
        )
    }
    
    return {handleAddData,handleDeleteData, handleEditData, handleResetForm}
}

export default useOnCRUD