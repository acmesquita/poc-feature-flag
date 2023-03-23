export const fetchToggle = async (flag: string, userId: string) => {
  try {
    const response = await fetch(`http://bff:3000/?flag=${flag}&userId=${userId}`)
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
    return {
      value: false
    }
  }
}