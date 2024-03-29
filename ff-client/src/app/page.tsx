import HomeV1 from "@/pages/Home/v1";
import HomeV2 from "@/pages/Home/v2";
import { fetchToggle } from "@/utils/toggle";


export default async function Home() {
  const toggle = await fetchToggle('new_page', '123')

  if (toggle.value) {
    return <HomeV2 />
  }

  return <HomeV1 />
}
