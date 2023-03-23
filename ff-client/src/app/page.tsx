import HomeV1 from "@/pages/Home/v1";
import HomeV2 from "@/pages/Home/v2";
// import { fetchToggle } from "@/utils/toggle";

const fetchToggle = async (flag: string, userId: string) => {
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

export default async function Home() {
  const toggle = await fetchToggle('new_page', '123')

  console.log(toggle)

  if (toggle.value) {
    return <HomeV2 />
  }

  return <HomeV1 />
}
