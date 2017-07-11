import React from 'react';
import styled from 'styled-components';
import * as TwitterIcon from 'react-icons/lib/ti/social-twitter';
import * as FacebookIcon from 'react-icons/lib/ti/social-facebook';
import * as YoutubeIcon from 'react-icons/lib/ti/social-youtube';

const StickyWrapper = styled.div`
  z-index: 40;
  position: fixed;
  width: 6rem;
  top: 1rem;
  right: 1rem;
  color: white;
  background-color: red`;

const SocialButton = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: blue;
  margin: 1px 0 1px;
`;

export class SocialButtons extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  style = {
    socialButton: {
      width: '50%',
      height: '50%',
      margin: '1.5rem 0 0 1.5rem',
    },
  }
  render() {
    return (
      <StickyWrapper>
        <SocialButton><TwitterIcon style={this.style.socialButton} /></SocialButton>
        <SocialButton><FacebookIcon style={this.style.socialButton} /></SocialButton>
        <SocialButton><YoutubeIcon style={this.style.socialButton} /></SocialButton>
      </StickyWrapper>
    );
  }
}

