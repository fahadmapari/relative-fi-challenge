import AssetCard from "./AssetCard";
import { data } from  "../data";
import {  useState } from "react";

const CardList = () => {
   const [assets, setAssets] = useState(data); 
    
  return (
    <>
        {data.map((asset)=> (
            <AssetCard asset={data} key={asset.assetName} />
        ))}
    </>
  )
}

export default CardList