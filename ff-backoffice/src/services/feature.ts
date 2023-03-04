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