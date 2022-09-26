export const onRequestGet = async () => {

  const response = await fetch('https://dummy-shop-api.keydev.eu/api/v1/products');
  const data = await response.json();
  console.log(data.data);
  return new Response(data.data);
}