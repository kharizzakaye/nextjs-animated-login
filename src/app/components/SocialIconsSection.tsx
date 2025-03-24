import React from 'react'
import { faFacebookF, faGithub, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

const SocialIconsSection = () => {
  return (
    <div className="social-icons">
        <Link href="https://en.wikipedia.org/wiki/Google%2B" target='blank'>
            <FontAwesomeIcon icon={faGooglePlusG} />
        </Link>

        <Link href="https://www.facebook.com/" target='blank'>
            <FontAwesomeIcon icon={faFacebookF} />
        </Link>

        <Link href="https://github.com/" target='blank'>
            <FontAwesomeIcon icon={faGithub} />
        </Link>

        <Link href="https://www.linkedin.com/" target='blank'>
            <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
    </div>
  )
}

export default SocialIconsSection