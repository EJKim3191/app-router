'use client';
import styles from "./page.module.css"
import { useRouter } from "next/navigation";

const apiUrl = "https://app-router-api-five.vercel.app/api/cart";

async function addToCart(productId) {
    const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ id: productId }),
    });

    if (!response.ok) {
        // throw new Error({
        //     message: "장바구니에 담기 실패",
        //     status: response.status,
        // });
        throw new Error("장바구니에 담기 실패");
    }

    const data = await response.json();
    return data;
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