'use client';
import styles from "./page.module.css"
import { useRouter } from "next/navigation";

function CartButton() {
    const router = useRouter();
    
    const showAlert = () => {
        alert("장바구니에 담겼습니다.");
        router.push('/cart');
    }

    return (
        <button type="button" className={styles.primaryButton} onClick={showAlert}>
        장바구니에 담기
      </button>
    )
}

export default CartButton;