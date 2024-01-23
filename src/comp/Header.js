import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    const { info } = this.props;

    if (!info) {
      return null;
    }

    return (
      <header>
        <h1>{info.title}</h1>
        <p>{info.subtitle}</p>
      </header>
    );
  }
}

Header.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};