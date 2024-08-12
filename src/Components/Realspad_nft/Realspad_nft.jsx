import React from "react";
import "./Realspad_nft.css";
import nft from "../Assets/nft.jpg";
import hit from "../Assets/how_it_works.jpg";

export default function Realspad_nft() {
  return (
    <div className="main_realspad_nft">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 text-start">
            <h1 className="lower_tkn text-start ">The Realspad’s NFT </h1>
            <p className="nft_para">
              The Real Estate NFT Launchpad is presumably one of the most
              instigative features. druggies will have the occasion to invest in
              new real estate NFTs for a lower price before it hits the
              secondary request. The property is offered 10% below the secondary
              request listing price.
            </p>
            <p className="nft_para">
              All parcels listed on Launchpad must pass a strict selection
              process to give our druggies with the stylish occasion to earn
              both rental yield and capital appreciation. In addition, we work
              data from leading third- party merchandisers to insure that all
              our internal exploration and analysis tools are accurate and
              dependable in current request conditions.
            </p>
            <p className="nft_para fw-bold  ">
              “Free NFT Properties will Be Distributed for Above $101 Token
              Purchasers and Staked Realspad (Reals Token) Tokens.”
            </p>
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <img src={nft} className="rounded" alt="" />
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-md-6 mt-3 mt-md-0">
            <img src={hit} className="rounded" alt="" />
          </div>
          <div className="col-md-6 text-start mt-3 mt-md-0">
            <h1 className="lower_tkn text-start ">How it works? </h1>
            <p className="nft_para">
              Investors pool funds and invest in RealsPad project. RealsPad
              issues Realspad(Reals Token)s to investors in proportion to their invested
              amount. Investors can choose to stake their tokens, hold them, or
              exchange them in the open market.
            </p>
            <ul>
              <li className="hw_lis fw-blod">
                Staked tokens are used by RealsPad for various purposes:
              </li>
              <li className="hw_lis">
              <span className="fw-bold">   Purchase of properties:</span> RealsPad uses staked funds to acquire
                properties.
              </li>
              <li className="hw_lis">
              <span className="fw-bold">  Leasing of properties: </span> RealsPad leases the purchased properties
                to generate rental income.
              </li>
              <li className="hw_lis">
              <span className="fw-bold">  Development of sites: </span> RealsPad utilizes staked funds for
                developing properties/sites, increasing their value.
              </li>
              <li className="hw_lis">
              <span className="fw-bold">    Marketing at a higher price: </span> RealsPad promotes the
                properties/sites to attract potential buyers or tenants at a
                premium price.
              </li>
              <li className="hw_lis">
              <span className="fw-bold">   Profit generation: </span> The revenue generated from property leasing,
                property sales, and site development is considered profit.
              </li>
              <li className="hw_lis">
              <span className="fw-bold">    Deducting company expenditures: </span> RealsPad deducts its operational
                expenses, such as maintenance costs, marketing expenses, and
                management fees, from the generated profit.
              </li>
              <li className="hw_lis">
              <span className="fw-bold">  Profit distribution: </span> After deducting the expenditures, RealsPad
                distributes a portion of the remaining profit to the token
                stakers. Token stakers receive their share of profit according
                to the number of tokens they stake. Investors can choose to
                reinvest their profits, sell their tokens on the open market, or
                hold them for future participation in the project.
                Realspad(Reals Token) TOKENOMICS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
