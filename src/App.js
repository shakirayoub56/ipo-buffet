import "./styles.css";
import Restaurant from "./Components/Restaurant";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [filterRating, setFilterRating] = useState(0);
  const [page, setPage] = useState(1);

  function getRestaurants({ filterRating, page }) {
    setLoading(true);
    setError(false);

    return fetch(
      "https://62c011a3c134cf51cec88cec.mockapi.io/restaurants/list" +
        `?rating_gte=${filterRating}&_page=${page}&_limit=2`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }

  useEffect(() => {
    getRestaurants({ filterRating, page });
  }, [filterRating, page]);

  return (
    <div>
      <div className="container">
        <div className="nav">
          <div>Home</div>
          <div>Login</div>
          <div>Signup</div>
        </div>

        <h1>Kashmiri Restaurant</h1>
        <p>Feel the Real taste of Heaven</p>
      </div>
      <div className="App">
        <div className="sorting">
          <p style={{ fontSize: "16px", color: "green", fontWeight: "bold" }}>
            Sort By
          </p>
          <button onClick={() => setFilterRating(4)}> 4 ★ </button>
          <button onClick={() => setFilterRating(3)}> 3 ★ </button>
          <button onClick={() => setFilterRating(2)}> 2 ★ </button>
          <button onClick={() => setFilterRating(1)}> 1 ★ </button>
          <button onClick={() => setFilterRating(0)}> Show All </button>
        </div>

        <div className="gridBox">
          {data.map((res) => (
            <Restaurant key={res.className} data={res} />
          ))}
        </div>

        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
}
