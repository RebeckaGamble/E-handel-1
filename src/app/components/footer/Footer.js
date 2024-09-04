import React from "react";

function Footer() {
  return (
    <footer>
      <div className="flex flex-row between">
        <p>© 2024 Shopping Store</p>
        <ul className="flex flex-row">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
