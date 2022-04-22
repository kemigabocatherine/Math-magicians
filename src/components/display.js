import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const showOutcome = (total, operation, next) => {
  let outcome = 0;
  if (total) {
    outcome = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    outcome = next;
  }
  return outcome;
};

class Displayed extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, operation, next } = this.props;

    return (
      <div>
        <div id="result">{showOutcome(total, operation, next)}</div>
      </div>
    );
  }
}

Displayed.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Displayed;
