import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { subscribe } from "./actions";

const EmailInput = styled.input`
  background-color: white;
  width: 20rem;
  height: 3.5rem;
  font-size: 1.5rem;
  border-radius: 5px;
  color: black;
  
  @media (max-width: 414px) {
    width: 60%;
  }
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

const SubscriptionWrapper = styled.div`
@media (max-width: 414px) {
  text-align: center;
}`;

let email;

const EmailSub = (props) => (
  <div className="readable newChapter emailSub" >
    <form name="subscribe">
      <SubscriptionWrapper>
        <EmailInput type="email" onChange={(e) => (email = e.target.value)} />
        <SubscribeButton type="button" onClick={() => props.subscribeEmail(email)}>Subscribe</SubscribeButton>
        <NoSpam>We dont spam</NoSpam>
      </SubscriptionWrapper>
    </form>
  </div>);


EmailSub.propTypes = {
  subscribeEmail: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    subscribeEmail: (emailV) => {
      dispatch(subscribe(emailV));
    },
  };
}

export default connect(() => ({}), mapDispatchToProps)(EmailSub);
