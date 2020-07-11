import React from "react";

function Plans() {
  let tick = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z" />
    </svg>
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
          <h3>$9.99/month after offer period</h3>
          <h3>1 account</h3>

          <div className="tick">
            <p>{tick} Listen to music ad free</p>
            <p>{tick} Play anywhere - even offline</p>
            <p>{tick} On-demand playback</p>
            <p>{tick} 2 Premium accounts for a couple under one roof</p>
          </div>
          <div>
            <button>GET STARTED</button>
          </div>

          <a href="#home">Terms and conditions apply</a>
        </div>

        <div className="card">
          <div className="free">1 month free</div>
          <h2>Individual</h2>
          <h3>$9.99/month after offer period</h3>
          <h3>1 account</h3>

          <div className="tick">
            <p>{tick} Listen to music ad free</p>
            <p>{tick} Play anywhere - even offline</p>
            <p>{tick} On-demand playback</p>
            <p>{tick} 2 Premium accounts for a couple under one roof</p>
          </div>
          <div>
            <button>GET STARTED</button>
          </div>

          <a href="#home">Terms and conditions apply</a>
        </div>

        <div className="card">
          <div className="free">1 month free</div>
          <h2>Individual</h2>
          <h3>$9.99/month after offer period</h3>
          <h3>1 account</h3>

          <div className="tick">
            <p>{tick} Listen to music ad free</p>
            <p>{tick} Play anywhere - even offline</p>
            <p>{tick} On-demand playback</p>
            <p>{tick} 2 Premium accounts for a couple under one roof</p>
          </div>
          <div>
            <button>GET STARTED</button>
          </div>

          <a href="#home">Terms and conditions apply</a>
        </div>

        <div className="card">
          <div className="free">1 month free</div>
          <h2>Individual</h2>
          <h3>$9.99/month after offer period</h3>
          <h3>1 account</h3>

          <div className="tick">
            <p>{tick} Listen to music ad free</p>
            <p>{tick} Play anywhere - even offline</p>
            <p>{tick} On-demand playback</p>
            <p>{tick} 2 Premium accounts for a couple under one roof</p>
          </div>
          <div>
            <button>GET STARTED</button>
          </div>

          <a href="#home">Terms and conditions apply</a>
        </div>
      </div>
    </div>
  );
}

export default Plans;
