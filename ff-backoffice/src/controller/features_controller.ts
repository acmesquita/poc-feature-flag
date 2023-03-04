import { ActionFunctionArgs, redirect } from "react-router-dom";
import { createFeature, getAllfeatures } from "../services/feature";

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

export const index = async () => {
  return await getAllfeatures()
}