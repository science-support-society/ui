import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import Parallax from 'react-springy-parallax/dist';
import Animated from 'animated/lib/targets/react-dom';
import * as ArrowDownIcon from 'react-icons/lib/md/keyboard-arrow-down';
import styled from 'styled-components';

import { makeSelectError, makeSelectLoading, makeSelectRepos } from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import MarsPicture from './../../static/mars-planet-min.png';
import { SocialButtons } from './SocialButtons';
import messages from './messages';
import { YearsAgo } from './YearsAgo';
import H1 from '../../components/H1/index';
import { Reason } from './Reason';

const ScrollableMarker = styled.div`
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  
  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
  };
`;

const Mars = styled.div`
  background: url(${MarsPicture}) no-repeat center center;
  background-size: contain;
  width: 100%;
  height: 100%;
`;

const MarsHeading = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-size: 18.875rem;
  letter-spacing: 2rem;
  font-weight: 700;
  
  @media (max-width: 900px) {
    font-size: 10rem;
    letter-spacing: 1rem;
  }
`;

const ContentWrapper = styled.article`
  z-Index: 3;
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const linearEffect = (animation, toValue) => Animated.timing(animation, { toValue, duration: 0 });
    return (
      <ContentWrapper>
        <Helmet
          title="Mars"
          meta={[
            { name: 'description', content: 'Science support project' },
          ]}
        />
        <Parallax pages={3} effect={linearEffect}>
          <Parallax.Layer offset={0} speed={0.1} ><Mars /></Parallax.Layer>
          <Parallax.Layer offset={0.15} speed={0} >
            <MarsHeading>
              <FormattedMessage {...messages.marsHeader} />
            </MarsHeading>
          </Parallax.Layer>
          <Parallax.Layer offset={0.6} speed={0.4}>
            <H1><FormattedMessage {...messages.participateHeader} /></H1>
          </Parallax.Layer>
          <Parallax.Layer offset={0.8} speed={0.3} >
            <p><FormattedMessage {...messages.howmuchParagraph} /></p>
            <p><FormattedMessage {...messages.progressParagraph} /></p>
          </Parallax.Layer>
          <Parallax.Layer offset={0.85} speed={0.6}>
            <ScrollableMarker><ArrowDownIcon /></ScrollableMarker>
          </Parallax.Layer>
          <Parallax.Layer offset={1} speed={0} >
            <YearsAgo />
          </Parallax.Layer>
          <Parallax.Layer offset={2} speed={0} >
            <Reason />
          </Parallax.Layer>
        </Parallax>

        <SocialButtons />
      </ContentWrapper>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
