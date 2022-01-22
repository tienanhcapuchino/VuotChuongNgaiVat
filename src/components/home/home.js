import React from "react";
// import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <div>
        <input type="button" value="Trả lời chướng ngại vật" />
      </div>
      <br />
      <div id="countdown">
        <div id="tiles"></div>
        <div class="labels">
          <li>Secs</li>
        </div>
      </div>
      <div>
        <input type="text" placeholder="Câu trả lời của bạn là" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </div>
    </>
  );
}
