import solanaPair from "./assets/Solana (SOL).png";
import ethpair from "./assets/Ethereum.png";
import bnbPair from "./assets/Binance Coin.png";
import btcPair from "./assets/Bitcoin SV.png";

import btcIcon from "./assets/bitcoinsv.png";
import ethIcon from "./assets/ethicon.png";
import solIcon from "./assets/solicon.png";
import busdIcon from "./assets/busdicon.png";
import shibIcon from "./assets/shibaicon.png";


export const data = [
    {
        assetName: "Bitcoin (BTC)",
        assetIcon: btcIcon,
        price: "$31,812.80",
        priceChange: 10,
        tvl: "$60,000",
        popularPairs: [solanaPair, ethpair, bnbPair]
    },
    {
        assetName: "Solana (SOL)",
        assetIcon: solIcon,
        price: "$32.83",
        priceChange: -12.32,
        tvl: "$60,000",
        popularPairs: [btcPair, ethpair, bnbPair]
    },
    {
        assetName: "Ethereum (ETH)",
        assetIcon: ethIcon,
        price: "$1,466.45",
        priceChange: -11.93,
        tvl: "$60,000",
        popularPairs: [solanaPair, btcPair, bnbPair]
    },

    {
        assetName: "Binance USD (BUSD)",
        assetIcon: busdIcon,
        price: "$1.00",
        priceChange: 0.26,
        tvl: "$60,000",
        popularPairs: [solanaPair, ethpair, bnbPair]
    },
    {
        assetName: "Shiba Inu (SHIB)",
        assetIcon: shibIcon,
        price: "$0.00001948",
        priceChange: -8.1,
        tvl: "$60,000",
        popularPairs: [solanaPair, ethpair, bnbPair]
    },

];