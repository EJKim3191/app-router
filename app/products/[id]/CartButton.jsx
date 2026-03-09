'use client';
import styles from "./page.module.css"

function CartButton() {
    const showAlert = () => {
        alert("장바구니에 담겼습니다.");
    }

    return (
        <button type="button" className={styles.primaryButton} onClick={showAlert}>
        장바구니에 담기
      </button>
    )
}

export default CartButton;