import React from "react";
import { useState } from "react";
import Landing_page from "../Landing_page/Landing_page";
import Secure_page from "../Secure_page/Secure_page";
import P2p from "../P2p/P2p";
import Transcation from "../Transcation/Transcation";
import Video_part from "../Video_part/Video_part";
import Tokennomics from "../Tokennomics/Tokennomics";
import FAQ from "../FAQ/FAQ";
import BuyETH from "../Buy_eth/Buy_eth";
import Realspad_nft from "../Realspad_nft/Realspad_nft";
import Partners from "../Partners/Partners";
import Real_spad_road from "../Real_spad_road/Real_spad_road";

// import { FaQ } from 'react-icons/fa6'

export default function Home_page() {
  const [raise, setRaise] = useState(0);

  return (
    <div>
      <Landing_page setRaise={setRaise} />
      {/* <Transcation /> */}
      

      {/* <Realspad_nft/> */}

      {/* <BuyETH></BuyETH> */}

      {/* <Secure_page raise={raise} /> */}
      {/* <P2p /> */}
      {/* <Video_part /> */}
      {/* <BuyETH></BuyETH> */}
      {/* <Tokennomics /> */}
      {/* <Real_spad_road/> */}
      {/* <Partners/> */}
      {/* <FAQ></FAQ> */}
    </div>
  );
}
