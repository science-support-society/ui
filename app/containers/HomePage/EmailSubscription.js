import React from 'react';
import styled from 'styled-components';

const EmailInput = styled.input`
  background-color: white;
  type: email;
  width: 20rem;
  height: 3.5rem;
  font-size: 1.5rem;
  color: black;
  border-radius: 5px;
`;

const SubscribeButton = styled.button`
  height: 3.5rem;
  font-size: 1.5rem;
  color: black;
  border-radius: 5px;
  margin-left: -6px;
  padding-left: 16px;
  background-color: rgba(255,255,255, 0.3);
`;

const NoSpam = styled.div`
  padding-top: 5px;
  letter-spacing: 0.1rem;
`;

export class EmailSubscription extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="readable newChapter">
        <form action="">
          <div>
            <EmailInput />
            <SubscribeButton>Subscribe</SubscribeButton>
          </div>
          <NoSpam>We don't spam</NoSpam>
        </form>
      </div>
    );
  }
}

