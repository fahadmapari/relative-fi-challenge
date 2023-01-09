import AssetCard from "./AssetCard";
import { data } from "../data";
import { useState } from "react";

const CardList = () => {
  const [assets, setAssets] = useState(data);

  return (
    <div className="cardlist">
      {assets.map((asset) => (
        <AssetCard asset={asset} key={asset.assetName} />
      ))}
    </div>
  );
};

export default CardList;
