'use client';
import styles from "../page.module.css";

const apiUrl = "https://app-router-api-five.vercel.app/api/cart";

async function deleteCartItem(productId) {
    const response = await fetch(apiUrl, {
        method: 'DELETE',
        body: JSON.stringify({ productId }),
    });
    if (!response.ok) {
        throw new Error('Failed to delete cart item');
    }
    return response.json();
}

function CartItemDelete({ productId }) {

    const deleteItem = async (productId) => {
        const response = await deleteCartItem(productId);
        console.log(response);  
        alert('상품이 삭제되었습니다.');
    }

    return (
        <button type="button" onClick={() => deleteItem(productId)} className={styles.removeButton}>삭제</button>
    )
}

export default CartItemDelete;