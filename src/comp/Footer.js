import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class Footer extends Component {
  static propTypes = {
    info: PropTypes.shape({
      text: PropTypes.string,
    }),
  };
  
  render() {
    const { info } = this.props;
    const text = info ? info.text : null;

    return (
      <footer>
        <p>{text}</p>
      </footer>
    );
  }
}
