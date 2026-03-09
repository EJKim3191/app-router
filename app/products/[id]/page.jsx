/** 상품 상세 페이지 */
import Image from "next/image";
import styles from "./page.module.css";

const apiUrl = "https://app-router-api-five.vercel.app/api/products";

async function getProduct(id) {
  const response = await fetch(`${apiUrl}/${id}`);
  const data = await response.json();
  return data;
}

async function ProductDetail({ params }) {
  const { id } = await params;
  console.log(params);
  const product = await getProduct(id);
  console.log(product);

  return (
    <div className={styles.page}>
      <main className={styles.detail}>
        <header className={styles.header}>
          <span className={styles.badge}>상품 상세</span>
          <h1 className={styles.pageTitle}>{product.name}</h1>
        </header>

        <section className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src={product.image_url}
              alt={product.name}
              width={600}
              height={600}
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.info}>
            <div>
              <h2 className={styles.title}>{product.name}</h2>

              <div className={styles.meta}>
                <span className={styles.label}>가격</span>
                <p className={styles.price}>
                  {product.price}
                  <span>원</span>
                </p>
              </div>
            </div>

            <div className={styles.actions}>
              <button type="button" className={styles.primaryButton}>
                장바구니에 담기
              </button>
              <p className={styles.helpText}>
                결제 단계에서 수량과 배송지를 다시 확인하실 수 있어요.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProductDetail;