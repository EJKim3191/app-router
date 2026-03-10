'use client';
import styles from "./page.module.css"
import { useRouter } from "next/navigation";

const apiUrl = "https://app-router-api-five.vercel.app/api/cart";

async function addToCart(productId) {
    const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ id: productId }),
    });
    const data = await response.json();
    return data;
}

function CartButton({ productId }) {
    const router = useRouter();
    
    const showAlert = async () => {
        await addToCart(productId);
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