import React from "react";

import "./form.css";

function form({ change, value, submit }) {
  return (
    <>
      <form onSubmit={submit} className="form">
        <input
          type="text"
          placeholder="add todo"
          onChange={change}
          value={value}
        />
        <button type="submite">submit</button>
      </form>
    </>
  );
}

export default form;
