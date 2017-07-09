/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

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
import Nebula from './../../static/nebula.png';
import { Background } from './Background';
import messages from './messages';


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
    headings: {
      color: '#fff',
      textTransform: 'uppercase',
      textAlign: 'center',
      top: '7%',
      fontFamily: 'Roboto, sans-serif',
    },
    headingsMain: {
      fontSize: '18.875rem',
      fontWeight: 'bold',
      letterSpacing: '2rem',
      fontFamily: 'Roboto, sans-serif',
    },
    headingsSecondary: {
      fontSize: '4rem',
      letterSpacing: '.55rem',
    },
    scrollableMarker: {
      color: '#fff',
      fontSize: '4rem',
      fontWeight: 'bold',
      textAlign: 'center',
      top: '40%',
      fontFamily: 'Roboto, sans-serif',
    },
    background: {
      zIndex: 20,
    },
  };


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
        <Background>
          <div >
            <Parallax style={this.styles.background} pages={2} effect={linearEffect}>
              <Parallax.Layer offset={0} speed={-0.5} style={this.styles.nebula} />
              <Parallax.Layer offset={0} speed={0.1} style={this.styles.mars} />
              <Parallax.Layer offset={0} speed={-0.7} style={this.styles.headings}>
                <div style={this.styles.headingsMain}>
                  <FormattedMessage {...messages.marsHeader} /></div>
                <div style={this.styles.headingsSecondary}><FormattedMessage {...messages.participateHeader} /></div>
              </Parallax.Layer>
              <Parallax.Layer offset={0} speed={-0.4} style={this.styles.scrollableMarker}>
                <ArrowDownIcon />
              </Parallax.Layer>
            </Parallax>
          </div>
        </Background>
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
