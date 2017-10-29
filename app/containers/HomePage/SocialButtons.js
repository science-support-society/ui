import React from "react";
import styled from "styled-components";
import * as TwitterIcon from "react-icons/lib/ti/social-twitter";
import * as FacebookIcon from "react-icons/lib/ti/social-facebook";
import * as YoutubeIcon from "react-icons/lib/ti/social-youtube";

const StickyWrapper = styled.div`
  z-index: 40;
  position: fixed;
  top: 3vmin;
  right: 0; 
  @media (max-width: 414px) {
    display: none;
  }
`;

const BUTTON_SIZE = "4rem";

const SocialButton = styled.a`
  display: block;
  color: white;
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  background-color: rgba(256, 256, 256, 0.6);
  margin: 1px 0;
  
  &:hover {
    cursor: pointer;
    background-color: rgba(256, 256, 256, 0.8);
  }
`;

export class SocialButtons extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  style = {
    socialButton: {
      width: "50%",
      height: "50%",
      margin: "1rem 0 0 1rem",
    },
  };

  render() {
    return (
      <StickyWrapper>
        <SocialButton><TwitterIcon style={this.style.socialButton} /></SocialButton>
        <SocialButton href="https://www.facebook.com/sciencesupportsociety/"><FacebookIcon style={this.style.socialButton} /></SocialButton>
        <SocialButton><YoutubeIcon style={this.style.socialButton} /></SocialButton>
      </StickyWrapper>
    );
  }
}

