import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareSVG from '../images/shareIcon.svg';

const LINK_COPIED_MESSAGE_TIME = 4000;

function ShareButton({ testId }) {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handleShareButton = () => {
    const URL = window.location.href;
    copy(URL);
    setIsLinkCopied(true);
    setTimeout(() => setIsLinkCopied(false), LINK_COPIED_MESSAGE_TIME);
  };

  return (
    <>
      <button
        onClick={ handleShareButton }
        type="button"
        data-testid={ testId }
        src={ shareSVG }
      >
        <img src={ shareSVG } alt="share" />
      </button>
      {isLinkCopied && <p>Link copied!</p>}
    </>
  );
}

ShareButton.propTypes = {
  testId: PropTypes.string,
}.isRequired;

export default ShareButton;
