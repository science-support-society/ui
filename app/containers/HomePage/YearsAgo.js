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
`;

export class YearsAgo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <H2><FormattedMessage {...messages.yearsAgoHeader} /></H2>
        <ImageCard>
          <img src={Horizontal} alt="" />
          <ImageTitle>Arguably one of the most ambitious accomplishment of all time. <br />
                      Since then no manned mission has ever got above low Earth orbit.</ImageTitle>
        </ImageCard>
      </div>
    );
  }
}

