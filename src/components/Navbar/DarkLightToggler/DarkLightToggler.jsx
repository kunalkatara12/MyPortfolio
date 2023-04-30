import React from "react";
import "./DarkLightToggler.scss";
function DarkLightToggler() {
  return (
    <div class="toggle-switch">
      <label class="switch-label">
        <input type="checkbox" class="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
  );
}

export default DarkLightToggler;
