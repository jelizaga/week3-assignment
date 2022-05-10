////////////////////////////////////////////////////////////////////////////////
// BnBCardButton ///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function BnBCardButton ({inCart}) {

  return (
    <div>
      <button className="bnbcard-button">Add to Cart</button>
    </div>
  );

}

BnBCardButton.propTypes = {
  inCart: PropTypes.bool
}

export default BnBCardButton;