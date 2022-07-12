import styles from "./Restaurant.module.css";

export const Details = ({
  title,
  cuisine,
  priceForTwo,
  minPrice,
  time,
  cash = false,
  upi = false,
  card = false
}) => {
  return (
    <div className={styles.detailComponent}>
      <div className={styles.title}>{title}</div>
      <div className={styles.cuisineAndCost}> {cuisine.join(", ")} </div>
      <div className={styles.cuisineAndCost}> Cost ₹ {priceForTwo} for one</div>
      <div>
        {" "}
        Min ₹ {minPrice} • Up to {time} min{" "}
      </div>
      <div>
        {" "}
        Accepts {cash && "Cash"} {upi && "UPI"} {card && "Card"} payments{" "}
      </div>
    </div>
  );
};
