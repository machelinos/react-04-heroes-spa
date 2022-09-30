import React from 'react';
import PropTypes from 'prop-types';

export const HeroItem = ({hero}) => {
  return (
    <li>
        {hero.superhero}
    </li>
  )
}

HeroItem.propTypes = {
  hero: PropTypes.any.isRequired
}
