import Image from "next/image";
import styles from "./page.module.css";

const apiUrl = "https://app-router-api-five.vercel.app/api/products";

async function getProducts() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data;
}
// cmd shift p -> cursor new chat 
/** 상품 목록 페이지 */
async function ProductList() {
    const products = await getProducts();

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>상품 목록</h1>
                <ul className={styles.productGrid}>
                    {products.map((product) => (
                        <li key={product.id} className={styles.productCard}>
                            <div className={styles.productImageWrapper}>
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    className={styles.productImage}
                                />
                            </div>
                            <h2 className={styles.productName}>{product.name}</h2>
                            <p className={styles.productDescription}>{product.description}</p>
                            <p className={styles.productPrice}>{product.price}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
export default ProductList;