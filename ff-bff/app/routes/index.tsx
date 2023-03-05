import { fetch, json, LoaderArgs } from "@remix-run/node"
import { findFeature } from "~/services/feature";
import { generateUrlFeature } from "~/utils/generate_url_feature";
import * as Cache from '../utils/cache'

export const loader = async ({ request }: LoaderArgs) => { 
  const url = generateUrlFeature(request)
  const featureToCache = await Cache.get(url)

  if (featureToCache) {
    return json(featureToCache)
  }

  const featureToAPI = await findFeature(url)
  Cache.set(url, featureToAPI)

  return json(featureToAPI)
}
