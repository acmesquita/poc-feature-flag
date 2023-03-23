import HomeV1 from "@/components/Home/v1";
import HomeV2 from "@/components/Home/v2";

const fetchToggle = async () => {
  const response = await fetch('http://localhost:3000?flag=new_page&userId=123')
  const data = await response.json()

  return data
}

export default async function Home() {
  const toggle = await fetchToggle()

  if (toggle.value) {
    return <HomeV2 />
  }

  return <HomeV1 />
}
