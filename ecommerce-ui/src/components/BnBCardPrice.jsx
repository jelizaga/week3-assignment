////////////////////////////////////////////////////////////////////////////////
// BnBCardPrice ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function BnBCardPrice ({cost}) {

  return (
    <div className="bnbcard-price">
      <p>
        ${cost} night
      </p>
    </div>
  );

}

BnBCardPrice.propTypes = {
  cost: PropTypes.number.isRequired
}

export default BnBCardPrice;