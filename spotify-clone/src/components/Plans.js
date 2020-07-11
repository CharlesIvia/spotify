import React from "react";

function Plans() {
  let tick = (
    <span
      class="iconify ticked"
      data-icon="subway:tick"
      data-inline="false"
    ></span>
  );
  return (
    <div className="container plans">
      <div className="plans-top">
        <h1>Pick your Premium</h1>
        <small>
          Listen without limits on your phone, speaker, and other devices.
        </small>
      </div>

      <div className="cards">
        <div className="card">
          <div className="free">1 month free</div>
          <h2>Individual</h2>
          <h3 className="card-small">$9.99/month after offer period</h3>
          <h3 className="card-small">1 account</h3>

          <div className="line"></div>

          <div className="tick">
            <p>{tick} Listen to music ad free</p>
            <p>{tick} Play anywhere - even offline</p>
            <p>{tick} On-demand playback</p>
            <p className="last-tick">{tick} 2 Premium accounts for one.</p>
          </div>
          <div>
            <button className="buy-btn">GET STARTED</button>
          </div>

          <a href="#home">Terms and conditions apply</a>
        </div>

        <div className="card">
          <div className="free">1 month free</div>
          <h2>Duo</h2>
          <h3 className="card-small">$9.99/month after offer period</h3>
          <h3 className="card-small">1 account</h3>
          <div className="line"></div>
          <div className="tick">
            <p>{tick} Listen to music ad free</p>
            <p>{tick} Play anywhere - even offline</p>
            <p>{tick} On-demand playback</p>
            <p>{tick} 2 Premium accounts for one.</p>
          </div>
          <div>
            <button className="buy-btn">GET STARTED</button>
          </div>

          <a href="#home">Terms and conditions apply</a>
        </div>

        <div className="card">
          <div className="free">1 month free</div>
          <h2>Family</h2>
          <h3 className="card-small">$9.99/month after offer period</h3>
          <h3 className="card-small">1 account</h3>
          <div className="line"></div>
          <div className="tick">
            <p>{tick} Listen to music ad free</p>
            <p>{tick} Play anywhere - even offline</p>
            <p>{tick} On-demand playback</p>
            <p>{tick} 2 Premium accounts for one.</p>
          </div>
          <div>
            <button className="buy-btn">GET STARTED</button>
          </div>

          <a href="#home">Terms and conditions apply</a>
        </div>

        <div className="card">
          <div className="free">1 month free</div>
          <h2>Student</h2>
          <h3 className="card-small">$9.99/month after offer period</h3>
          <h3 className="card-small">1 account</h3>
          <div className="line"></div>
          <div className="tick">
            <p>{tick} Listen to music ad free</p>
            <p>{tick} Play anywhere - even offline</p>
            <p>{tick} On-demand playback</p>
            <p>{tick} 2 Premium accounts for one.</p>
          </div>
          <div>
            <button className="buy-btn">GET STARTED</button>
          </div>

          <a href="#home">Terms and conditions apply</a>
        </div>
      </div>
    </div>
  );
}

export default Plans;
