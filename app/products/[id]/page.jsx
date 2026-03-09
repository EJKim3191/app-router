/** 상품 상세 페이지 */ 
import Image from "next/image";
const apiUrl = "https://app-router-api-five.vercel.app/api/products";

async function getProduct(id) {
    const response = await fetch(`${apiUrl}/${id}`);
    const data = await response.json();
    return data;
}

async function ProductDetail({params}) {
    const {id} = await params;
    const product = await getProduct(id);
    console.log(id);

    return (
        <div>
            <h1>상품 상세 페이지</h1>
            <Image src={product.image_url} alt={product.name} width={300} height={300} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductDetail;