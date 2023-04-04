import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      const data = await response.json();
      if (data) {
        setData(data);
      } else {
        setData([
          {
            id: "bitcoin",
            symbol: "btc",
            name: "Bitcoin",
            image:
              "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
            current_price: 26017,
            market_cap: 502896184140,
            market_cap_rank: 1,
            fully_diluted_valuation: 546149254569,
            total_volume: 16936770045,
            high_24h: 26051,
            low_24h: 25103,
            price_change_24h: 75.17,
            price_change_percentage_24h: 0.28976,
            market_cap_change_24h: 1122918352,
            market_cap_change_percentage_24h: 0.22379,
            circulating_supply: 19336875,
            total_supply: 21000000,
            max_supply: 21000000,
            ath: 59717,
            ath_change_percentage: -56.50943,
            ath_date: "2021-11-10T14:24:11.849Z",
            atl: 51.3,
            atl_change_percentage: 50527.67398,
            atl_date: "2013-07-05T00:00:00.000Z",
            roi: null,
            last_updated: "2023-04-04T13:10:30.260Z",
          },
          {
            id: "ethereum",
            symbol: "eth",
            name: "Ethereum",
            image:
              "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
            current_price: 1720.42,
            market_cap: 207079880562,
            market_cap_rank: 2,
            fully_diluted_valuation: 207079880562,
            total_volume: 11937982322,
            high_24h: 1720.16,
            low_24h: 1626.98,
            price_change_24h: 58.64,
            price_change_percentage_24h: 3.52877,
            market_cap_change_24h: 6905456376,
            market_cap_change_percentage_24h: 3.44972,
            circulating_supply: 120444418.374417,
            total_supply: 120444418.374417,
            max_supply: null,
            ath: 4228.93,
            ath_change_percentage: -59.39894,
            ath_date: "2021-12-01T08:38:24.623Z",
            atl: 0.381455,
            atl_change_percentage: 450015.63604,
            atl_date: "2015-10-20T00:00:00.000Z",
            roi: {
              times: 87.52653917141964,
              currency: "btc",
              percentage: 8752.653917141964,
            },
            last_updated: "2023-04-04T13:10:30.259Z",
          },
          {
            id: "tether",
            symbol: "usdt",
            name: "Tether",
            image:
              "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            current_price: 0.919596,
            market_cap: 73394694608,
            market_cap_rank: 3,
            fully_diluted_valuation: 73394694608,
            total_volume: 32494929753,
            high_24h: 0.922157,
            low_24h: 0.913431,
            price_change_24h: -0.001652152839898058,
            price_change_percentage_24h: -0.17934,
            market_cap_change_24h: -166779045.25454712,
            market_cap_change_percentage_24h: -0.22672,
            circulating_supply: 79908675808.8743,
            total_supply: 79908675808.8743,
            max_supply: null,
            ath: 1.13,
            ath_change_percentage: -18.78689,
            ath_date: "2018-07-24T00:00:00.000Z",
            atl: 0.533096,
            atl_change_percentage: 72.39071,
            atl_date: "2015-03-02T00:00:00.000Z",
            roi: null,
            last_updated: "2023-04-04T13:10:02.584Z",
          },
          {
            id: "binancecoin",
            symbol: "bnb",
            name: "BNB",
            image:
              "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
            current_price: 286.4,
            market_cap: 45204453127,
            market_cap_rank: 4,
            fully_diluted_valuation: 57258793671,
            total_volume: 773964383,
            high_24h: 288.07,
            low_24h: 275.59,
            price_change_24h: -1.2252939388409914,
            price_change_percentage_24h: -0.42601,
            market_cap_change_24h: -229785015.92112732,
            market_cap_change_percentage_24h: -0.50575,
            circulating_supply: 157895234,
            total_supply: 157900174,
            max_supply: 200000000,
            ath: 583.17,
            ath_change_percentage: -50.94832,
            ath_date: "2021-11-26T02:58:28.000Z",
            atl: 0.03359941,
            atl_change_percentage: 851273.89144,
            atl_date: "2017-10-19T00:00:00.000Z",
            roi: null,
            last_updated: "2023-04-04T13:10:34.132Z",
          },
          {
            id: "usd-coin",
            symbol: "usdc",
            name: "USD Coin",
            image:
              "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
            current_price: 0.918885,
            market_cap: 29998993862,
            market_cap_rank: 5,
            fully_diluted_valuation: 30001655199,
            total_volume: 4220895991,
            high_24h: 0.921502,
            low_24h: 0.913418,
            price_change_24h: -0.002073180702884647,
            price_change_percentage_24h: -0.22511,
            market_cap_change_24h: 27615200,
            market_cap_change_percentage_24h: 0.09214,
            circulating_supply: 32647627519.786,
            total_supply: 32650523827.616,
            max_supply: null,
            ath: 1.059,
            ath_change_percentage: -13.30081,
            ath_date: "2022-09-27T16:25:08.674Z",
            atl: 0.730265,
            atl_change_percentage: 25.75144,
            atl_date: "2021-05-19T13:14:05.611Z",
            roi: null,
            last_updated: "2023-04-04T13:10:27.265Z",
          },
          {
            id: "ripple",
            symbol: "xrp",
            name: "XRP",
            image:
              "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
            current_price: 0.461114,
            market_cap: 23811154890,
            market_cap_rank: 6,
            fully_diluted_valuation: 46101521891,
            total_volume: 1630669683,
            high_24h: 0.473951,
            low_24h: 0.448492,
            price_change_24h: -0.011634642918761153,
            price_change_percentage_24h: -2.46107,
            market_cap_change_24h: -582038044.5324516,
            market_cap_change_percentage_24h: -2.38607,
            circulating_supply: 51649390115,
            total_supply: 99989037909,
            max_supply: 100000000000,
            ath: 2.82,
            ath_change_percentage: -83.70781,
            ath_date: "2018-01-07T00:00:00.000Z",
            atl: 0.00194619,
            atl_change_percentage: 23532.456,
            atl_date: "2013-08-16T00:00:00.000Z",
            roi: null,
            last_updated: "2023-04-04T13:10:32.368Z",
          },
          {
            id: "cardano",
            symbol: "ada",
            name: "Cardano",
            image:
              "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
            current_price: 0.36419,
            market_cap: 12758149196,
            market_cap_rank: 7,
            fully_diluted_valuation: 16382262023,
            total_volume: 516790418,
            high_24h: 0.366212,
            low_24h: 0.346149,
            price_change_24h: -0.000571205936112873,
            price_change_percentage_24h: -0.1566,
            market_cap_change_24h: -29760580.819444656,
            market_cap_change_percentage_24h: -0.23272,
            circulating_supply: 35045020830.3234,
            total_supply: 45000000000,
            max_supply: 45000000000,
            ath: 2.61,
            ath_change_percentage: -86.00327,
            ath_date: "2021-09-02T06:00:10.474Z",
            atl: 0.01722339,
            atl_change_percentage: 2018.3203,
            atl_date: "2020-03-13T02:22:55.044Z",
            roi: null,
            last_updated: "2023-04-04T13:10:26.731Z",
          },
          {
            id: "dogecoin",
            symbol: "doge",
            name: "Dogecoin",
            image:
              "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
            current_price: 0.091255,
            market_cap: 12663617660,
            market_cap_rank: 8,
            fully_diluted_valuation: null,
            total_volume: 6368140850,
            high_24h: 0.09432,
            low_24h: 0.070518,
            price_change_24h: 0.01953268,
            price_change_percentage_24h: 27.23358,
            market_cap_change_24h: 2713173588,
            market_cap_change_percentage_24h: 27.26686,
            circulating_supply: 138800046383.705,
            total_supply: null,
            max_supply: null,
            ath: 0.601466,
            ath_change_percentage: -84.90283,
            ath_date: "2021-05-08T05:08:23.458Z",
            atl: 0.00007662,
            atl_change_percentage: 118418.16553,
            atl_date: "2015-05-06T00:00:00.000Z",
            roi: null,
            last_updated: "2023-04-04T13:10:29.917Z",
          },
          {
            id: "staked-ether",
            symbol: "steth",
            name: "Lido Staked Ether",
            image:
              "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546",
            current_price: 1713.59,
            market_cap: 10127944985,
            market_cap_rank: 9,
            fully_diluted_valuation: 10127944985,
            total_volume: 26844656,
            high_24h: 1711.81,
            low_24h: 1623.92,
            price_change_24h: 55.94,
            price_change_percentage_24h: 3.37459,
            market_cap_change_24h: 342626997,
            market_cap_change_percentage_24h: 3.50144,
            circulating_supply: 5910361.22315448,
            total_supply: 5910361.22315448,
            max_supply: 5910361.22315448,
            ath: 4188.52,
            ath_change_percentage: -59.13636,
            ath_date: "2021-11-12T02:16:02.325Z",
            atl: 394.87,
            atl_change_percentage: 333.45935,
            atl_date: "2020-12-22T04:08:21.854Z",
            roi: null,
            last_updated: "2023-04-04T13:10:29.646Z",
          },
          {
            id: "matic-network",
            symbol: "matic",
            name: "Polygon",
            image:
              "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
            current_price: 1.033,
            market_cap: 9374569435,
            market_cap_rank: 10,
            fully_diluted_valuation: 10323882349,
            total_volume: 378963045,
            high_24h: 1.033,
            low_24h: 0.987722,
            price_change_24h: 0.01444989,
            price_change_percentage_24h: 1.41876,
            market_cap_change_24h: 125782851,
            market_cap_change_percentage_24h: 1.35999,
            circulating_supply: 9080469069.28493,
            total_supply: 10000000000,
            max_supply: 10000000000,
            ath: 2.58,
            ath_change_percentage: -60.02551,
            ath_date: "2021-12-27T02:08:34.307Z",
            atl: 0.00280202,
            atl_change_percentage: 36662.2265,
            atl_date: "2019-05-10T00:00:00.000Z",
            roi: {
              times: 426.8501293730399,
              currency: "usd",
              percentage: 42685.01293730399,
            },
            last_updated: "2023-04-04T13:10:30.292Z",
          },
        ]);
      }

      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {data && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Icon</th>
              <th>Price (EUR)</th>
              <th>Market Cap (EUR)</th>
              <th>24h High (EUR)</th>
              <th>24h Low (EUR)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <tr>
                <td>{coin.name}</td>
                <td>{coin.symbol}</td>
                <td>
                  <img src={coin.image} alt={coin.name} />
                </td>
                <td>{coin.current_price} €</td>
                <td>{coin.market_cap} €</td>
                <td>{coin.high_24h} €</td>
                <td>{coin.low_24h} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
