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