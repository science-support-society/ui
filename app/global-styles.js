import { injectGlobal } from 'styled-components';
import Stars from './static/stars.png';
import Twinkle from './static/twinkling.png';

/* eslint no-unused-expressions: 0 */
injectGlobal`
html,
body {
  height: 100%;
  width: 100%;
  fontFamily: 'Roboto, sans-serif';
  color: #fff;  
}

p {
  fontSize: '1.5rem';
}

@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

.stars, .twinkling, .clouds {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background:#000 url(${Stars}) repeat top center;
  z-index: 1;
}

.twinkling{
  background:transparent url(${Twinkle}) repeat top center;
  z-index: 2;

  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}
`;
