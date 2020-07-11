import React from "react";

function Cancel() {
  return (
    <div className="cancel">
      <div className="switch">
        <span
          class="iconify"
          data-icon="mdi:toggle-switch"
          data-inline="false"
        ></span>
      </div>

      <div className="instructions">
        <h1 className="cancel-top">Cancel anytime</h1>
        <small className="cancel-small">
          You can cancel monthly plans online anytime.
        </small>
      </div>
    </div>
  );
}

export default Cancel;
