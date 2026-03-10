// cart -> 장바구니 페이지

import styles from "./page.module.css";

const apiUrl = "https://app-router-api-five.vercel.app/api/cart";

async function getCart() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

/**
 * @description 장바구니 페이지
 * - 장바구니 페이지는 장바구니에 담긴 상품 목록이 표시된다
 * - 장바구니 페이지 하단에는 총 상품 개수와 가격이 표시된다
 */
async function CartPage() {
    const cart = await getCart();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>장바구니</h1>
            <ul className={styles.list}>
                {cart.map((item) => (
                    <li key={item.id} className={styles.card}>
                        <div className={styles.thumbWrapper}>
                            <img
                                src={item.image_url}
                                alt={item.name}
                                className={styles.thumb}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardName}>{item.name}</div>
                            <div className={styles.cardPrice}>
                                {item.price.toLocaleString()}원
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={styles.summary}>
                <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>상품 개수</span>
                    <span className={styles.summaryValue}>{cart.length}개</span>
                </div>
                <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>총 상품 가격</span>
                    <span className={styles.summaryValue}>
                        {totalPrice.toLocaleString()}원
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartPage;