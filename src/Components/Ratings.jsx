import styles from "./Restaurant.module.css";

export const Ratings = ({ star, votes, reviews }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.star}>{star}</div>
      <div>{votes} votes</div>
      <div>{reviews} reviews</div>
    </div>
  );
};
