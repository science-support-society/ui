import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import { subscribe } from "./actions";
import { makeSelectEmail } from "./selectors";

const EmailInput = styled.input`
  background-color: white;
  width: 20rem;
  height: 3.5rem;
  font-size: 1.5rem;
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

class EmailSubscription extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.email = props.email;
  }

  email;

  render() {
    return (
      <div className="readable newChapter">
        <form onSubmit={() => this.props.subscribeEmail(this.props.email)} name="subscribe" className="subscribeForm">
          <div>
            <EmailInput type="email" value={this.email} />
            <SubscribeButton type="click" onClick={this.props.subscribeEmail(this.email)}>Subscribe</SubscribeButton>
          </div>
          <NoSpam>We dont spam</NoSpam>
        </form>
      </div>
    );
  }
}

EmailSubscription.propTypes = {
  subscribeEmail: React.PropTypes.func,
  email: React.PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    subscribeEmail: (evt) => {
      console.log("bebe", evt);
      dispatch(subscribe(evt));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailSubscription);
