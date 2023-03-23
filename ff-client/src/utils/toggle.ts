export const fetchToggle = async (flag: string, userId: string) => {
  const response = await fetch(`http://localhost:3000/?flag=${flag}&userId=${userId}`)
  const data = await response.json()

  console.log(data)

  return data
}