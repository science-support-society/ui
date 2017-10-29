import { injectGlobal } from "styled-components";
import Stars from "./static/stars.png";
import Twinkle from "./static/twinkling.png";

/* eslint no-unused-expressions: 0 */
injectGlobal`
html,
body {
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  color: #fff;
  background-color: black;
  overflow: hidden;
}

::-webkit-scrollbar { 
  display: none; 
}

p {
  font-size: 2vmin;
  letter-spacing: 0.2vmin;
  text-align: left;
  
  @media (max-width: 414px) {
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
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

  @media (max-width: 414px) {
    font-weight: 300;
  }
}
.readable.newChapter.emailSub {
  @media (max-width: 414px) {
    padding-top: 5rem;
  }
}

.centred-text{
  text-align: center;
}

:focus {
  outline: none;
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
