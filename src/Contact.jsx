import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Contact;
