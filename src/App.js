import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CoinRow from "./components/CoinRow";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false")
      .then((res) => {
        console.log(res);
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Yo error!!!");
      });
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const filterHandler = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="Main-app">
      <div className="app-search">
        <h1 className="title"> Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="App-input"
            onChange={searchHandler}
          ></input>
        </form>
        {filterHandler.map((item) => {
          return (
            <CoinRow
              key={item.id}
              image={item.image}
              name={item.name}
              symbol={item.symbol}
              price={item.current_price}
              volume={item.market_cap}
              priceChange={item.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
