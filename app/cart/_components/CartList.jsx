import styles from "../page.module.css";
import CartItemDelete from "./CartItemDelete";
import Image from "next/image";

function CartList({ cart }) {
  return (
    <ul className={styles.list}>
      {cart.map((item, e) => (
        <li key={item.id + "_cart_" + e} className={styles.card}>
          <div className={styles.thumbWrapper}>
            <Image
              src={item.image_url}
              alt={item.name}
              className={styles.thumb}
              width={300}
              height={300}
            />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardName}>{item.name}</div>
            <div className={styles.cardPrice}>
              {item.price.toLocaleString()}원
            </div>
          </div>
          <CartItemDelete productId={item.id} />
        </li>
      ))}
    </ul>
  );
}

export default CartList;
