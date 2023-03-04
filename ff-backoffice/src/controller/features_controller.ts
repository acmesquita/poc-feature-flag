import { ActionFunctionArgs, redirect } from "react-router-dom";
import { addUserToFeature, createFeature, disableUserToFeature, getAllfeatures } from "../services/feature";

export const create = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const flag = formData.get('flag')?.toString() || ''
  if (flag) {
    const result = await createFeature({ flag })
    if (result?.id){
      return redirect('/')
    }
  }
  
  return null
}

export const addUser = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const flag = formData.get('flag')?.toString() || ''
  const userId = formData.get('userId')?.toString() || ''

  if (flag && userId) {
    const result = await addUserToFeature({ flag, userId })
    if (result){
      return redirect('/')
    } else {
      alert('This flag was active for this user')
      return redirect('/')
    }
  }
  
  return null
}

export const disableUser =async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const flag = formData.get('flag')?.toString() || ''
  const userId = formData.get('userId')?.toString() || ''

  if (flag && userId) {
    const result = await disableUserToFeature({ flag, userId })
    if (result){
      return redirect('/')
    } else {
      alert('This flag or user not found')
      return redirect('/')
    }
  }
  
  return null
}

export const index = async () => {
  return await getAllfeatures()
}