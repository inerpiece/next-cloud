
function Products({products}) {
    
    return (
        <div>
            <h1>Hello from Products</h1>
            <ul>
                {products.map(product => <li key={product._id}>{product.product_name}</li>)}
            </ul>
        </div>
    )
}


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://dummy-shop-api.keydev.eu/api/v1/products')
    const data = await res.json();
    const products = data.data;
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        products,
      },
      revalidate: 10,
    }
}

export default Products;

