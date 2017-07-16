import { injectGlobal } from 'styled-components';
import Stars from './static/stars.png';
import Twinkle from './static/twinkling.png';

/* eslint no-unused-expressions: 0 */
injectGlobal`
html,
body {
  height: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  color: #fff;
  background-color: black;
  overflow: hidden;
}

p {
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  text-align: left;
}

.scalableImg {
  max-width: 100%;
  height: auto;
}

.newChapter {
  padding-top: 10rem;
}

.readable {
  margin: auto;
  max-width: 960px;
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

@keyframes bounce {
0% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
}
15% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
}
30% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
}
45% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
}
60% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
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
  background: url(${Stars}) repeat top center;
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
