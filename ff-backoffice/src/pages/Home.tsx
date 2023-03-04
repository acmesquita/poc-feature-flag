import { useLoaderData } from "react-router-dom";
import { FeatureUser } from "../@types/featureUsers";
import { Page } from "../components/page";

export function Home() {
  const features = useLoaderData() as FeatureUser[]
  
  return (
    <Page>
      <ul>
        {features.map(feature => (
          <li key={feature.flag}>{feature.flag} - {feature.users.join(',')}</li>
        ))}

      </ul>
    </Page>
  )
}