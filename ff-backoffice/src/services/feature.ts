const URL_API = "http://localhost:3333"

export const getAllfeatures = async () => {
  try {
    const response = await fetch(`${URL_API}/allFeatures`)
    const features = await response.json()
  
    return features
  } catch (error) {
    return []
  }
}

interface CreateFeatureParams {
  flag: string
}

export const createFeature = async (data: CreateFeatureParams) => {
  try {
    const response = await fetch(`${URL_API}`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return response.json()
  } catch (error) {
    return false
  }
}

interface AddUserToFeatureParams {
  flag: string
  userId: string
}

export const addUserToFeature = async (data: AddUserToFeatureParams) => {
  try {
    const response = await fetch(`${URL_API}/addUser`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return response.status === 204
  } catch (error) {
    return false
  }

}


interface DisableUserToFeatureParams {
  flag: string
  userId: string
}

export const disableUserToFeature = async (data: DisableUserToFeatureParams) => {
  try {
    const response = await fetch(`${URL_API}/disableUser`, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return response.status === 204
  } catch (error) {
    return false
  }

}