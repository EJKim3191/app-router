import styles from "../page.module.css";

function CartSummary({ cart, totalPrice }) {
  return (
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
  );
}

export default CartSummary;
