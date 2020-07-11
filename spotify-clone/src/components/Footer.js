import React from "react";

function Footer() {
  return (
    <div className="container footer">
      <div className="left">
        <p>Legal</p>
        <p>Cookies</p>
        <p>Terms</p>
      </div>

      <div className="right">
        <h1 className="usa">
          USA{" "}
          <span
            class="iconify flag"
            data-icon="la:flag-usa-solid"
            data-inline="false"
          ></span>
        </h1>
        <p>
          <span
            class="iconify copy"
            data-icon="la:copyright-solid"
            data-inline="false"
          ></span>
          2020 Spotify AB
        </p>
      </div>
    </div>
  );
}

export default Footer;
