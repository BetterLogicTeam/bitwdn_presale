import React, { useEffect, useState } from "react";
import "./Landing_page.css";
import Tab from "../Tab_page/Tab_page";
import Web3 from "web3";
import {
  preSale_Contract_ABI,
  preSale_Contract_Address,
  referal_Contract_Address_Contract_ABI,
  referal_Contract_Address,
} from "../Contract/Contract";
import { useAccount } from "wagmi";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import toast from "react-hot-toast";


import { FaArrowRightLong } from "react-icons/fa6";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Landing_page({ setRaise }) {
  const [getTokenToUSDT, setgetTokenToUSDT] = useState(0);
  const [raised, setraise] = useState(0);
  const [get_tokeSold, setget_tokeSold] = useState(0);
  const [get_maxTokeninPresale, setget_maxTokeninPresale] = useState(0);
  const { address } = useAccount();
  const [phaseNewPrice, setPhasePrice] = useState(0);
  const [NextphaseNewPrice, setNextPhasePrice] = useState("");
  const [CurrentStage, setCurrentStage] = useState(null);
  const [Rratio, setRatio] = useState(0);
  const [refAddress, setRefAddress] = useState("");
  const [copied, setCopied] = useState(false);
  const [IsClaim, setIsClaim] = useState(false);
  const [Claimable, setClaimable] = useState(0);
  const [referralClaimable, setreferralClaimable] = useState(0);

  const [claimSpinner, setclaimSpinner] = useState(false);


  let history = window.location;

  console.log("refAddress", refAddress);
  const webSupply = new Web3(
    "wss://bsc-testnet-rpc.publicnode.com"
    // "wss://bsc-testnet-rpc.publicnode.com"

    // wss://bsc-testnet-rpc.publicnode.com
  );

  const referralClaimabletoken = async (value) => {
    try {

      setclaimSpinner(true);

      const { request } = await prepareWriteContract({
        address: referal_Contract_Address,
        abi: referal_Contract_Address_Contract_ABI,
        functionName: "claimReferalIncome",
        args: [],
        account: address,
      });
      const { hash } = await writeContract(request);
      const data = await waitForTransaction({
        hash,
      });

      setTimeout(() => {
        setclaimSpinner(false);
        toast.success("Transaction Completed");
      }, 4000);


    } catch (error) {
      console.log(error);
      setclaimSpinner(false);
    }
  };

  // const getValue = async () => {
  //   try {
  //     let ContractOf = new webSupply.eth.Contract(
  //       preSale_Contract_ABI,
  //       preSale_Contract_Address
  //     );
  //     let tokenToUSDT = await ContractOf.methods.TokenPricePerUSDC().call();
  //     tokenToUSDT = webSupply.utils.fromWei(tokenToUSDT.toString());
  //     setgetTokenToUSDT(tokenToUSDT);

  //     let TokenSold = await ContractOf.methods.TokenSold().call();
  //     let currentRate = await ContractOf.methods.TokenPricePerUSDC().call();

  //     TokenSold = webSupply.utils.fromWei(TokenSold.toString());
  //     currentRate = webSupply.utils.fromWei(currentRate.toString());



  //     // i m chaing this

  //     // TokenSold = Number(71458.127) + Number(TokenSold);

  //     // To this
  //     TokenSold = Number(TokenSold);

  //     setRaise(Intl.NumberFormat().format(Number(TokenSold) * Number(currentRate)));
  //     setraise(Intl.NumberFormat().format(Number(TokenSold) * Number(currentRate)));
  //     setraise(Intl.NumberFormat().format(Number(TokenSold) * Number(currentRate)));


  //     // TokenSold = Intl.NumberFormat().format(TokenSold);
  //     setget_tokeSold(TokenSold);

  //     let maxTokeninPresale = await ContractOf.methods
  //       .maxTokeninPresale()
  //       .call();
  //     maxTokeninPresale = webSupply.utils.fromWei(maxTokeninPresale.toString());
  //     // console.log("maxToken",maxTokeninPresale);

  //     // console.log("width",parseInt(Number(TokenSold) / Number(maxTokeninPresale) / 100,));

  //     let CurrentStage = await ContractOf.methods.currentPhase().call();
  //     // currentPhasePricee = currentPhasePricee.price;
  //     // console.log("CurrentStage",CurrentStage);
  //     setCurrentStage(CurrentStage);
  //     // getCurrentPhasePrice

  //     // Get Current Stage Price
  //     let phases = await ContractOf.methods.phases(CurrentStage).call();
  //     // console.log(phases);
  //     let phasePrice = phases.price / 1e18;
  //     let newPhase = (1 / phasePrice).toFixed(2);
  //     setPhasePrice(newPhase);
  //     // console.log("Current phase price",newPhase);

  //     // 1$ = 5 token
  //     //  1 token = 1/5

  //     // setRaise( Intl.NumberFormat().format(Number(TokenSold)*Number(phasePrice)) )

  //     //Get Next Stage Price
  //     let SCurrentStage = Number(CurrentStage) + 1;
  //     // console.log("S current",SCurrentStage);
  //     let Nextphases = await ContractOf.methods.phases(SCurrentStage).call();
  //     // console.log(Nextphases);
  //     let NextphasePrice = Nextphases.price / 1e18;
  //     let TNextPhasePrice = (1 / NextphasePrice).toFixed(2);
  //     setNextPhasePrice("0.0035 $");
  //     // console.log("Next phase price",TNextPhasePrice);

  //     //

  //     // Remaining token
  //     maxTokeninPresale = Number(maxTokeninPresale) - Number(TokenSold);
  //     // console.log("Remaining token in preslse",maxTokeninPresale);
  //     setget_maxTokeninPresale(maxTokeninPresale);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //  function getCurrentPhasePrice() internal view returns (uint256) {
  // return phases[currentPhase].price;
  // }

  const Claim_status = async () => {
    let ContractOf = new webSupply.eth.Contract(
      preSale_Contract_ABI,
      preSale_Contract_Address
    );

    let ContractOfreferal = new webSupply.eth.Contract(
      referal_Contract_Address_Contract_ABI,
      referal_Contract_Address
    );
    let tokenToUSDT = await ContractOf.methods.TokenPricePerUSDC().call();
    tokenToUSDT = webSupply.utils.fromWei(tokenToUSDT.toString());
    setgetTokenToUSDT(tokenToUSDT);

    let TokenSold = await ContractOf.methods.TokenSold().call();
    let currentRate = await ContractOf.methods.TokenPricePerUSDC().call();

    TokenSold = webSupply.utils.fromWei(TokenSold.toString());
    currentRate = webSupply.utils.fromWei(currentRate.toString());



    // i m chaing this

    // TokenSold = Number(71458.127) + Number(TokenSold);

    // To this
    TokenSold = Number(TokenSold);

    setRaise(Intl.NumberFormat().format(Number(TokenSold) * Number(currentRate)));
    setraise(Intl.NumberFormat().format(Number(TokenSold) * Number(currentRate)));
    setraise(Intl.NumberFormat().format(Number(TokenSold) * Number(currentRate)));


    // TokenSold = Intl.NumberFormat().format(TokenSold);
    setget_tokeSold(TokenSold);

    let maxTokeninPresale = await ContractOf.methods
      .maxTokeninPresale()
      .call();
    maxTokeninPresale = webSupply.utils.fromWei(maxTokeninPresale.toString());
    // console.log("maxToken",maxTokeninPresale);

    // console.log("width",parseInt(Number(TokenSold) / Number(maxTokeninPresale) / 100,));

    let CurrentStage = await ContractOf.methods.currentPhase().call();
    // currentPhasePricee = currentPhasePricee.price;
    // console.log("CurrentStage",CurrentStage);
    setCurrentStage(CurrentStage);
    // getCurrentPhasePrice

    // Get Current Stage Price
    let phases = await ContractOf.methods.phases(CurrentStage).call();
    // console.log(phases);
    let phasePrice = phases.price / 1e18;
    let newPhase = (1 / phasePrice).toFixed(2);
    setPhasePrice(newPhase);
    // console.log("Current phase price",newPhase);

    // 1$ = 5 token
    //  1 token = 1/5

    // setRaise( Intl.NumberFormat().format(Number(TokenSold)*Number(phasePrice)) )

    //Get Next Stage Price
    let SCurrentStage = Number(CurrentStage) + 1;
    // console.log("S current",SCurrentStage);
    let Nextphases = await ContractOf.methods.phases(SCurrentStage).call();
    // console.log(Nextphases);
    let NextphasePrice = Nextphases.price / 1e18;
    let TNextPhasePrice = (1 / NextphasePrice).toFixed(2);
    setNextPhasePrice("0.0035 $");
    // console.log("Next phase price",TNextPhasePrice);

    //

    // Remaining token
    maxTokeninPresale = Number(maxTokeninPresale) - Number(TokenSold);
    // console.log("Remaining token in preslse",maxTokeninPresale);
    setget_maxTokeninPresale(maxTokeninPresale);
    let CanClaim = await ContractOf.methods.CanClaim().call();
    // console.log("CanClaim", CanClaim);
    setIsClaim(CanClaim);
    if (address) {
      //  let address = "0x7f269c43BA2BFC891602fc3222c60b2D5c807d56"
      let Claimable = await ContractOf.methods.Claimable(address).call();
      Claimable = webSupply.utils.fromWei(Claimable.toString());
      // console.log("Claimable",Claimable);

      if (Claimable > 0) {
        setClaimable(Claimable);
      } else {
        setClaimable(0);
      }
    }

    if (address) {
      //  let address = "0x7f269c43BA2BFC891602fc3222c60b2D5c807d56"
      // let referralClaimable = await ContractOfreferal.methods.checkref(address).call();
      // referralClaimable = webSupply.utils.fromWei(referralClaimable.toString());
      // console.log("referralClaimable",referralClaimable);
      let referralClaimable

      if (referralClaimable > 0) {
        setreferralClaimable(referralClaimable);
      } else {
        setreferralClaimable(0);
      }
    }

  };

  useEffect(() => {
    setInterval(() => {
      Claim_status();
    }, 5000);
  }, [address]);




  // Set get_maxTokeninPresale to 6,000,000
  let Gget_maxTokeninPresale = 6000000; //MaxToken in presale
  if (get_maxTokeninPresale !== 0) {
    const ratio = (get_tokeSold / Gget_maxTokeninPresale) * 100;
    // setRatio(ratio);
  } else {
    // console.log("Cannot calculate ratio, getMaxTokeninPresale is zero");
  }

  // Raised

  const formattedValue = Intl.NumberFormat().format(get_tokeSold * 0.2);

  useEffect(() => {
    if (address) {
      setRefAddress(`${history.origin}?ref=${address}`);
    } else {
      setRefAddress("Connect wallet");
    }

    setInterval(() => {
      setCopied(false);
    }, 3000);
  }, [address, copied]);
  return (
    <div className="main_div_landing">
      <div className="main_landing">
        <div className="container">
        <div className="row align-items-center">
              <div className="col-lg-6 ">
                <div className="main_div_Text">
                  <h5 className="text-left">
                    <span style={{ color: "#FF6B00" }}>
                      <p style={{ fontSize: "4.14rem" }}>
                        BITWDN:
                      </p>
                    </span>
                  </h5>
                  <h4>
                    Welcome to BitWDN, a cutting-edge platform designed to integrate the best of decentralized finance (DeFi), digital collectibles, and immersive gaming experiences. Our project combines a decentralized exchange (DEX), a unique NFT collection, a secure wallet, and an engaging Web3 game to offer a comprehensive and innovative blockchain ecosystem

                  </h4>                </div>
              </div>
              <div className="col-lg-6 flex justify-content-end">
                <div className="col-md-12 this_ha">
                  <div className="landing_box">
                    <div className="row">
                      <div className="col-6">
                        <div className="info_pre">
                          <h6>Current stage </h6>
                          <h2>Stage {Number(CurrentStage) + 1}</h2>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <div className="info_pre">
                          <h6>Remaining Tokens </h6>
                          <h2>
                            {Intl.NumberFormat().format(get_maxTokeninPresale)}{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="progress_bar">
                      <div
                        className="inner_pro"
                        style={{
                          width: `${((Number(124545454) + Number(get_tokeSold)) / Number(get_maxTokeninPresale)) * 100
                            }%`,
                        }}
                      ></div>
                      {/* <div className="inner_pro" style={{
                    width: parseInt(Number(get_tokeSold) /
                    Number(get_maxTokeninPresale) /
                    100,)
                  }}></div> */}
                    </div>
                    <div className="row mt-3">
                      <div className="col-6">
                        <div className="info_pre">
                          <h6>Next stage price </h6>
                          <h2>{NextphaseNewPrice}</h2>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <div className="info_pre">
                          <h6>Total Token Sold </h6>
                          <h2 className="text-truncate">{Intl.NumberFormat().format(get_tokeSold)}</h2>
                        </div>
                      </div>
                    </div>

                    <div className="rate mt-1">
                      <h4>1 $ ={phaseNewPrice} bitwdn Token</h4>

                      {/* <h4>$1= {getTokenToUSDT} Realspad</h4> */}
                    </div>

                    <div
                      className="text-center text-white"
                      style={{ fontFamily: "'Inter', sans-serif;" }}
                    >
                      {/* <h6
                        className="span-text"
                        style={{
                          fontSize: "16px",
                          fontFamily: "'Inter', sans-serif;",
                        }}
                      >
                        Your Purchased Realspad : {Claimable}{" "}
                      </h6> */}
                      <h6
                        className="span-text"
                        style={{
                          fontSize: "16px",
                          fontFamily: "'Inter', sans-serif;",
                        }}
                      >
                        Ready to Claim : {Claimable}{" "}
                      </h6>
                    </div>

                    <div className="buy_chain_box">
                      <Tab Claimable={Claimable} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
           



            <div className="row justify-content-center">
              
              <div className="col-lg-8">
                <div className="black_box resvers mt-4">
                  <h2 className="" style={{ textAlign: "left" }}>
                    Refferal Link
                  </h2>
                  <div className="d-flex justify-content-between">
                    <div className="box_busd me-2 " style={{ width: "100%" }}>
                      <input type="text" value={refAddress} />
                    </div>
                    <CopyToClipboard
                      text={refAddress}
                      onCopy={() => setCopied(true)}
                    >
                      <button
                        className="btn copied "
                        style={{ backgroundColor: "#fff" }}
                      >
                        {copied ? <>COPIED</> : "COPY"}
                      </button>
                    </CopyToClipboard>
                  </div>

                  <h2 className="mt-2" style={{ textAlign: "left" }}>
                    Earn 10% for each referral
                  </h2>
                  {/* <h2 className="mt-2" style={{ textAlign: "left" }}>
                  Your Referral Claimable Rewards : {parseFloat(referralClaimable).toFixed(4)} bitwdn Token
                  </h2> */}

                  <button className="buy_BTN" onClick={referralClaimabletoken}>
                    {claimSpinner ? "Loading..." : "Claim Refferal Rewards"}
                  </button>
                </div>
              </div>
              
            
          </div>
        </div>
      </div>
    </div>
  );
}
