/** 상품 상세 페이지 */
import Image from "next/image";
import styles from "./page.module.css";
import CartButton from "./CartButton";
const apiUrl = "https://app-router-api-five.vercel.app/api/products";

async function getProduct(id) {
  const response = await fetch(`${apiUrl}/${id}`);
  const data = await response.json();
  return data;
}

async function ProductDetail({ params }) {
    // await new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve('데이터 조회 완료');
    //     }, 3000);
    // });
  const { id } = await params;
  const product = await getProduct(id);
// 클라이언트 컴포넌트에서 서버 컴포넌트의 데이터를 사용할 때
//   useEffect(() => {
//     getProduct(id).then((product) => {
//       console.log(product);
//     });
//     console.log(product);
//   }, [product]);
//   function showAlert() {
//     alert("장바구니에 담겼습니다.");
//   }

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
            {/* <button type="button" className={styles.primaryButton} onClick={showAlert}>
                장바구니에 담기
              </button> */}
              <CartButton />
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

/** Next에서 서버 컴포넌트를 사용할 때 권고사항으로 필요한 동작이 있는 특유의 컴포넌트를 따로 클라이언트 컴포넌트화 하여 관리하는 것이 좋다
 * 예: CartButton.jsx
 */