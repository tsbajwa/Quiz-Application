import React from "react";
import { Link } from "react-router-dom";
export default function FrontPage() {
  return (
    <div className="frontPage__container">
      <h1>H1 Text here</h1>
      <h2>H2 text here</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit laoreet dui, non
        fermentum turpis tristique vel. In hac habitasse platea dictumst. In id tellus lorem. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet condimentum ex, ac placerat
        nisi. In vulputate maximus consectetur. Maecenas dolor nisi, commodo at nisi eget,
        ullamcorper laoreet magna. Phasellus sed turpis dapibus nisi pellentesque condimentum.
        Phasellus quis sapien enim. Ut non leo faucibus, vehicula lectus at, finibus justo. Proin
        porttitor finibus neque, feugiat iaculis dolor pulvinar ac. Nulla tincidunt quis dui non
        ultricies. Praesent condimentum vel nisi id consectetur. Nullam at egestas turpis. Maecenas
        nec blandit nulla, et dictum nulla. Sed et eros rutrum, sodales lorem sit amet, efficitur
        elit. Cras feugiat tincidunt odio, non blandit libero. Duis eleifend, justo at hendrerit
        gravida, turpis augue maximus orci, a vehicula est nisi ut justo. Phasellus porttitor a diam
        eget tempor.
      </p>
      <Link to="/quiz" className="frontPage__link">
        Take Quiz Now
      </Link>
    </div>
  );
}
