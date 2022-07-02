import React from "react";
import "../styles/Pagebottom.css";

function Pagebottom() {
  return (
    <div>
      <br></br>
      <hr size="1" width="75%" color="#E5E4E2"></hr>
      <h3 className="pagebottom__lindogourmet"> LindoGourmet</h3>
      <p className="pagebottom__phone"> Phone: (408) 600-1202 </p>
      <p className="pagebottom__email">
        {" "}
        Email:{" "}
        <a href="mailto:support@lindogourmet.com">
          support@lindogourmet.com
        </a>{" "}
      </p>
      <p className="pagebottom__address">
        {" "}
        897 Independence Ave. #2G, Mountain View, CA 94043
      </p>
      <p className="pagebottom__address">
        {" "}
        See our <a href="/terms">Terms and Conditions</a> and{" "}
        <a href="/privacy">Privacy Policy</a>.{" "}
      </p>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Pagebottom;
