"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[81],{994:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var r=e(439),a=e(791),i=e(689),c=e(861),o=e(687),p=e.n(o);function s(){return(s=(0,c.Z)(p().mark((function n(t){var e,r,a,i;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"b18f7d88a33ace0e3e4fb83c74434dce",e="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),r="?api_key=".concat("b18f7d88a33ace0e3e4fb83c74434dce","&language=en-US"),n.next=5,fetch("".concat(e).concat(r));case 5:return a=n.sent,n.next=8,a.json();case 8:return i=n.sent,n.abrupt("return",i);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var u,d,f,h,m,l=function(n){return s.apply(this,arguments)},x=e(7),g=e.n(x),v=e(842),w=e(623),Z=e(168),b=e(934),j=e(624),k=b.Z.ul(u||(u=(0,Z.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -10px;\n  }\n"]))),y=b.Z.li(d||(d=(0,Z.Z)(["\n  @media (max-width: 767px) {\n    margin-bottom: 50px;\n  }\n  @media (min-width: 768px) {\n    width: calc((100% - 10px * 8) / 4);\n    margin: 10px;\n  }\n"]))),_=b.Z.div(f||(f=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  height: 375px;\n  margin-bottom: 15px;\n"]))),C=b.Z.img(h||(h=(0,Z.Z)(["\n  width: 250px;\n"]))),N=b.Z.p(m||(m=(0,Z.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  color: ",";\n"])),j.NN),O=e(184);function S(n){var t=n.actors;return(0,O.jsx)(w.Z,{isPadding:!0,children:(0,O.jsx)(k,{children:t.map((function(n){var t=n.id,e=n.name,r=n.photo;return(0,O.jsxs)(y,{children:[(0,O.jsx)(_,{children:(0,O.jsx)(C,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):v,alt:e})}),(0,O.jsx)(N,{children:e})]},t)}))})})}S.prototype={actors:g().arrayOf(g().shape({id:g().number,name:g().string,photo:g().string})).isRequired};var U=S;var q=function(){var n=(0,i.UO)().movieId,t=(0,a.useState)(null),e=(0,r.Z)(t,2),c=e[0],o=e[1];return(0,a.useEffect)((function(){l(n).then((function(n){var t=n.cast,e=[];t.map((function(n){var t={id:n.id,name:n.name,photo:n.profile_path};return e.push(t)})),o(e)}))}),[n]),c&&(0,O.jsx)(U,{actors:c})}},842:function(n,t,e){n.exports=e.p+"static/media/actor.39801e9f8151ec6d8667.png"}}]);
//# sourceMappingURL=cast-view.dba1bbda.chunk.js.map