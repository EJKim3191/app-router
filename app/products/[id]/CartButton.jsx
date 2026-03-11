'use client';
import styles from "./page.module.css"
import { useRouter } from "next/navigation";

function addToCart(productId) {
    fetch(`/api/cart`, {
        method: 'POST',
        body: JSON.stringify({ productId }),
    });
}

function CartButton({ productId }) {
    const router = useRouter();
    
    const addProductToCart = async () => {
        try {
            await addToCart(productId);
            alert("장바구니에 담겼습니다.");
            router.push('/cart');
        } catch (error) {
            console.error(error);
            alert("장바구니에 담기 실패");
        }
    }

    return (
        <button type="button" className={styles.primaryButton} onClick={addProductToCart}>
        장바구니에 담기
      </button>
    )
}

export default CartButton;