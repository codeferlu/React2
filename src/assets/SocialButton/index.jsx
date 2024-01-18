import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, faTwitter, faFontAwesome, faFacebook, faLinkedin)

const SocialButton = ({ icon, onClick }) => {
  return (
    <>
    <button onClick={onClick}>
     
    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
    </button>
    <button onClick={onClick}>
    
    <FontAwesomeIcon icon="fa-brands fa-twitter" />
    </button>
    <button onClick={onClick}>
   
      <FontAwesomeIcon icon="fa-brands fa-facebook" />
    </button>

    </>
    
    
  );
};

export default SocialButton;
