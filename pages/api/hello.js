// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const response = await fetch('https://dummy-shop-api.keydev.eu/api/v1/products');
  const data = await response.json();
  console.log(data.data);
  res.status(200).json({ name: data.data })
}
