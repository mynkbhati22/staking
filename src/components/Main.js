import React from "react";
import InfoCards from "./InfoCards";

export default function Main() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="main-area">
            <h1 className="heading">MetaWeb3Pad</h1>
            <span className="text-light">
              StakeMetaWeb3Pad & Liquidity Pool (LP) to earn
            </span>
          </div>
        </div>
        <InfoCards />
      </section>
    </div>
  );
}