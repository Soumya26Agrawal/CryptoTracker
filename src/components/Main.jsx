// import React from 'react'
import { useEffect, useState } from "react";
import { useCrypto } from "../config/Crypto";
import { Link } from "react-router-dom";

function Main() {
  const { currency, allCoins } = useCrypto();
  const [displayCoins, setDisplayCoins] = useState([]);
  const handleSearchChange = (e) => {
    const filteredCoins = allCoins.filter((coin) =>
      coin.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDisplayCoins(filteredCoins);
  };
  useEffect(() => {
    setDisplayCoins(allCoins);
  }, [allCoins]);
  return (
    <div className="flex flex-col flex-1 bg-[#320A58] text-white items-center justify-start pt-30 ">
      <h1 className="text-5xl mb-6">Real-Time Crypto Insights</h1>
      <p>Stay ahead in the crypto market with live prices, trends, and data </p>
      <p>Simple, fast, and reliable insights at your fingertips!</p>

      <div className="mt-20 border border-white w-[30%] rounded-xl">
        <input
          onChange={handleSearchChange}
          type="text"
          placeholder="Search..."
          list="coinlist"
          className="w-full py-2 pl-10 pr-4 rounded-lg bg-[#320A58] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-[#9B4D96] focus:border-[#9B4D96] placeholder-white"
        />

        <datalist id="coinlist">
          {allCoins.map((item, index) => (
            <option key={index} value={item.name} />
          ))}
        </datalist>

        <div className="absolute left-0 top-0 flex items-center pl-3 pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ></svg>
        </div>
      </div>

      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20 mt-13">
        <table className="w-full text-white">
          {/* Table Head */}
          <thead>
            <tr className="border-b border-white/30 text-left text-lg">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Current Price</th>
              <th className="p-3">Price Change 24H</th>
              <th className="p-3">Market Cap</th>
              <th className="p-3">Market Cap Change 24H</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {displayCoins.slice(0, 10).map((coin) => (
              //    <Link
              //    to={`/coin/${coin.id}`}
              //    key={coin.id}
              //    className="block"
              //  >
              <tr
                key={coin.id}
                className="border-b border-white/10 hover:bg-white/20 transition"
              >
                <td className="p-3">
                  <Link to={`/coin/${coin.id}`} className="block">
                    {coin.market_cap_rank}
                  </Link>
                </td>
                <td className="p-3">
                  <Link to={`/coin/${coin.id}`} className="block">
                    <img className="w-[15%] h-[15%]" src={coin.image} alt="" />
                    {coin.name} {coin.symbol}
                  </Link>
                </td>

                <td className="p-3">
                  <Link to={`/coin/${coin.id}`} className="block">
                    {currency.symbol} {coin.current_price.toLocaleString()}
                  </Link>
                </td>
                <td
                  className={`${
                    coin.price_change_24h < 0 ? "text-red" : "text-white"
                  }`}
                >
                  <Link to={`/coin/${coin.id}`} className="block">
                    {currency.symbol}
                    {coin.price_change_24h.toLocaleString()}
                  </Link>
                </td>
                <td className="p-3">
                  <Link to={`/coin/${coin.id}`} className="block">
                    {/* <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
                    Active
                  </span> */}
                    {currency.symbol}
                    {coin.market_cap.toLocaleString()}
                  </Link>
                </td>
                <td
                  className={`${
                    coin.market_cap_change_24h < 0 ? "text-red" : "text-white"
                  }`}
                >
                  <Link to={`/coin/${coin.id}`} className="block">
                    {currency.symbol}
                    {coin.market_cap_change_24h.toLocaleString()}
                  </Link>
                </td>
              </tr>
              // </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
