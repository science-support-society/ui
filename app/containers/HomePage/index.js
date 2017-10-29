import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FormattedMessage } from "react-intl";
import Parallax from "react-springy-parallax/dist";
import * as ArrowDownIcon from "react-icons/lib/md/keyboard-arrow-down";
import styled from "styled-components";
import * as firebase from "firebase";

import { makeSelectError, makeSelectLoading, makeSelectAmountsToDonate } from "../../containers/App/selectors";
import { changeAmount } from "./actions";
import MarsPicture from "./../../static/mars-planet-min.png";
import { SocialButtons } from "./SocialButtons";
import messages from "./messages";
import { YearsAgo } from "./YearsAgo";
import H1 from "../../components/H1/index";
import { Reason } from "./Reason";
import EmailSubscription from "./EmailSubscription";
import ToggleGroup from "../../components/RadioGroup/index";

const ScrollableMarker = styled.div`
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  -webkit-animation: bounce 1s ease infinite;
  animation: bounce 1.5s ease infinite;
  
  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
  };
`;

const Mars = styled.div`
  background: url(${MarsPicture}) no-repeat center center;
  background-size: contain;
  height: 100%;
`;

const MarsHeading = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-size: 18vmin;
  letter-spacing: 3.5vmin;
  font-weight: 700;
`;

const ContentWrapper = styled.article`
  z-Index: 3;
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log("bebe");
    // const linearEffect = (animation, toValue) => Animated.timing(animation, { toValue, duration: 0 });
    return (
      <ContentWrapper>
        <Helmet
          title="Mars"
          meta={[
            { name: "description", content: "Science support project" },
          ]}
        />
        {/* effect={linearEffect}*/}
        <Parallax pages={3} ref={(ref) => (this.parallax = ref)} >
          <Parallax.Layer offset={0} speed={0.1} ><Mars /></Parallax.Layer>
          <Parallax.Layer offset={0.25} speed={0} >
            <MarsHeading>
              <FormattedMessage {...messages.marsHeader} />
            </MarsHeading>
          </Parallax.Layer>
          <Parallax.Layer offset={0.5} speed={0.3}>
            <H1><FormattedMessage {...messages.participateHeader} /></H1>
          </Parallax.Layer>
          <Parallax.Layer offset={0.8} speed={3}>
            <ScrollableMarker><ArrowDownIcon onClick={() => this.parallax.scrollTo(0.25)} /></ScrollableMarker>
          </Parallax.Layer>
          <Parallax.Layer offset={1} speed={0.3} >
            <p className="readable centred-text"><FormattedMessage {...messages.howmuchParagraph} />
              <br />
              <FormattedMessage {...messages.progressParagraph} />
            </p>
            <ToggleGroup onToggle={this.props.onToggleAmount} name="selectDonation" values={this.props.amountsToDonate} />
          </Parallax.Layer>
          <Parallax.Layer offset={1.6} speed={0.5}>
            <YearsAgo />
            <br /><br />
            <Reason />
            <EmailSubscription />
          </Parallax.Layer>
        </Parallax>

        <SocialButtons />
      </ContentWrapper>
    );
  }
}

HomePage.propTypes = {
  amountsToDonate: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  onToggleAmount: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    /* onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },*/
    onToggleAmount: (evt) => {
      dispatch(changeAmount(evt.target.value));
    },

  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  amountsToDonate: makeSelectAmountsToDonate(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
