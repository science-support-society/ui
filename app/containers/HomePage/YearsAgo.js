import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import React from 'react';
import H2 from '../../components/H2/index';
import messages from './messages';
import Horizontal from './../../static/horizontal.jpg';

const ImageCard = styled.div`
  position: relative;
`;

const ImageTitle = styled.span`
   position: absolute; 
   top: 80%; 
   left: 0; 
   width: 100%;
   font-size: 1.5rem; 
`;

export class YearsAgo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <H2><FormattedMessage {...messages.yearsAgoHeader} /></H2>
        <ImageCard>
          <img src={Horizontal} alt="" />
          <ImageTitle>
            <FormattedMessage {...messages.imageCaption1} />
            <br />
            <FormattedMessage {...messages.imageCaption2} />
          </ImageTitle>
        </ImageCard>
      </div>
    );
  }
}

