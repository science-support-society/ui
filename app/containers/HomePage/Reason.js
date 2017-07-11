import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import React from 'react';
import H2 from '../../components/H2/index';
import messages from './messages';

export class Reason extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <H2><FormattedMessage {...messages.reasonHeader} /></H2>
        <p><FormattedMessage {...messages.reasonParagraph1} /></p>
        <p><FormattedMessage {...messages.reasonParagraph2} /></p>
        <p><FormattedMessage {...messages.reasonParagraph3} /></p>

      </div>
    );
  }
}

