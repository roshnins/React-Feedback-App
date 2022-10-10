import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

function AboutIconLink() {
  return (
    <div className='about-link'>
      {/* another way to write Link
      <Link
        to={{
          pathname: "/about",
          search: "?sort=name",
          hash: "#hello",
        }}
      > */}

      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
