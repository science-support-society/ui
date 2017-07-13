import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import Parallax from 'react-springy-parallax/dist';
import Animated from 'animated/lib/targets/react-dom';
import * as ArrowDownIcon from 'react-icons/lib/md/keyboard-arrow-down';

import { makeSelectError, makeSelectLoading, makeSelectRepos } from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import Mars from './../../static/mars-planet.png';
// import MiniMars from './../../static/mars-planet-min.webp';
import Nebula from './../../static/nebula.png';
import { SocialButtons } from './SocialButtons';
import messages from './messages';
import { YearsAgo } from './YearsAgo';
import H2 from '../../components/H2/index';
import H1 from '../../components/H1/index';
import { Reason } from './Reason';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  styles = {
    mars: {
      backgroundImage: `url(${Mars})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'contain',
    },
    nebula: {
      backgroundImage: `url(${Nebula})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'contain',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    headingsMain: {
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: '18.875rem',
      letterSpacing: '2rem',
      fontWeight: 700,
    },
    scrollableMarker: {
      fontSize: '4rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    background: {
      zIndex: 3,
    },
  };

      // position: "-webkit-sticky",

  render() {
    const linearEffect = (animation, toValue) => Animated.timing(animation, { toValue, duration: 0 });
    return (
      <article>
        <Helmet
          title="Mars"
          meta={[
            { name: 'description', content: 'Science support project' },
          ]}
        />
        <Parallax style={this.styles.background} pages={3} effect={linearEffect}>
          <Parallax.Layer offset={0} speed={-0.5} style={this.styles.nebula} />
          <Parallax.Layer offset={0} speed={0.1} style={this.styles.mars} />
          <Parallax.Layer offset={0.2} speed={0} >
            <div style={this.styles.headingsMain}>
              <FormattedMessage {...messages.marsHeader} /></div>
          </Parallax.Layer>
          <Parallax.Layer offset={0.6} speed={0.4}>
            <H1><FormattedMessage {...messages.participateHeader} /></H1>
          </Parallax.Layer>
          <Parallax.Layer offset={0.7} speed={0.6}>
            <H2><ArrowDownIcon /></H2>
          </Parallax.Layer>
          <Parallax.Layer offset={0.8} speed={0.3} >
            <p><FormattedMessage {...messages.howmuchParagraph} /></p>
            <p><FormattedMessage {...messages.progressParagraph} /></p>
          </Parallax.Layer>
          <Parallax.Layer offset={1} speed={0} >
            <YearsAgo />
          </Parallax.Layer>
          <Parallax.Layer offset={2} speed={0} >
            <Reason />
          </Parallax.Layer>
        </Parallax>

        <SocialButtons />
      </article>
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
