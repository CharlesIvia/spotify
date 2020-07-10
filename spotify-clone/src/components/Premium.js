import React from "react";

function Premium() {
  return (
    <div className="container premium">
      <div className="prem">
        <h1>Why go Premium?</h1>
      </div>

      <div className="prem-svgs">
        <div className="download">
          <div className="within-down">
            <div className="first-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="svg-one"
              >
                <path d="M15 10h4l-7 8-7-8h4v-10h6v10zm6 9v5h-18v-5h18zm-6 2h-1v1h1v-1zm2 0h-1v1h1v-1zm2 0h-1v1h1v-1z" />
              </svg>
            </div>
            <h2 className="load">Download music.</h2>
            <small>Listen everywhere.</small>
          </div>
        </div>
        <div className="interuption">
          <div className="first-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="svg-one"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </div>
          <h2>No ad interuptions.</h2>
          <small>Listen nonstop music.</small>
        </div>
        <div className="mobile">
          <div className="first-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="svg-one"
            >
              <path d="M6 23v-11c-4.036 0-6 2.715-6 5.5 0 2.807 1.995 5.5 6 5.5zm18-5.5c0-2.785-1.964-5.5-6-5.5v11c4.005 0 6-2.693 6-5.5zm-12-13.522c-3.879-.008-6.861 2.349-7.743 6.195-.751.145-1.479.385-2.161.716.629-5.501 4.319-9.889 9.904-9.889 5.589 0 9.29 4.389 9.916 9.896-.684-.334-1.415-.575-2.169-.721-.881-3.85-3.867-6.205-7.747-6.197z" />
            </svg>
          </div>
          <h2>Even on mobile.</h2>
          <small>Listen everywhere.</small>
        </div>
        <div className="skip">
          <div className="first-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="svg-one"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </div>
          <h2>Unlimited skips.</h2>
          <small>Just hit next.</small>
        </div>
      </div>
    </div>
  );
}
export default Premium;
