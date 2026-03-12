// cart -> 장바구니 페이지

import styles from "./page.module.css";
import CartList from "./_components/CartList";
import CartSummary from "./_components/CartSummary";
import { headers } from "next/headers";

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
  const headersList = headers();
  const userAgent = headersList.get("user-agent");

  const cart = await getCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>장바구니</h1>
      <CartList cart={cart} />
      <CartSummary cart={cart} totalPrice={totalPrice} />
    </div>
  );
}

export default CartPage;
