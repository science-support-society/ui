import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import React from "react";
import H2 from "../../components/H2/index";
import messages from "./messages";
import Horizontal from "./../../static/horizontal.jpg";

const ImageCard = styled.div`
  position: relative;
`;

const ImageCaption = styled.span`
   position: absolute; 
   bottom: 5%; 
   left: 1rem; 
   width: 100%;
   
   @media (max-width: 414px) {
    font-size: 2vmin;
    letter-spacing: 0.1vmin;
  }
`;

export class YearsAgo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="readable">
        <H2><FormattedMessage {...messages.yearsAgoHeader} /></H2>
        <ImageCard>
          <img src={Horizontal} alt="" className="scalableImg" />
          <p>
            <ImageCaption>
              <FormattedMessage {...messages.imageCaption1} />
              <br />
              <FormattedMessage {...messages.imageCaption2} />
            </ImageCaption>
          </p>
        </ImageCard>
      </div>
    );
  }
}

