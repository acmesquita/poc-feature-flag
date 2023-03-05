export const generateUrlFeature = (request: Request) => {
  const urlRequest = new URL(request.url);
  const flag = urlRequest.searchParams.get("flag") || '';
  const userId = urlRequest.searchParams.get("userId") || '';
  
  return `http://localhost:3333/?flag=${flag}&userId=${userId}`
}