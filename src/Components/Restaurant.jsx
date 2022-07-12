import styles from "./Restaurant.module.css";
import { Image } from "./Image";
import { Details } from "./Details";
import { OrderButton } from "./OrderButton";
import { Ratings } from "./Ratings";

export default function Restaurant({ data }) {
  const {
    name,
    id,
    cuisine,
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods,
    rating,
    votes,
    reviews,
    src
  } = data;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>
          <Image src={src} height="85px" width="85px" />
        </div>
        <div style={{ flex: 1 }}>
          <Details
            title={name}
            cuisine={cuisine}
            priceForTwo={costForTwo}
            minPrice={minOrder}
            time={deliveryTime}
            cash={payment_methods.cash}
            card={payment_methods.card}
          />
        </div>
        <div>
          <Ratings star={rating} votes={votes} reviews={reviews} />
        </div>
      </div>

      <div className={styles.footer}>
        <OrderButton />
      </div>
    </div>
  );
}
