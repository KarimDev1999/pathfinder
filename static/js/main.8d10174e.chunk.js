(this.webpackJsonppathfinder=this.webpackJsonppathfinder||[]).push([[0],{26:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(19),a=n.n(c),s=n(8),i=n(13),o=n(11),u=n(2),l=(n(26),n(20)),d=n.n(l),f=n(1),h=new Array(30).fill(null).map((function(t){return new Array(64).fill(1)})),b=Math.floor(h.length/2),v=Math.floor(h[0].length/2),j=function(t){var e=t.isSearching,n=t.currentAlgorithm,c=t.searchHelper,a=Object(r.useState)([b,v-10]),i=Object(s.a)(a,2),o=i[0],u=i[1],l=Object(r.useState)([b,v+10]),j=Object(s.a)(l,2),p=j[0],m=j[1],x=Object(r.useRef)(),g=Object(r.useRef)();Object(r.useEffect)((function(){o[0]===b&&o[1]===v-10||(document.querySelectorAll(".square").forEach((function(t){t.classList.remove("path","visited","visitedNoAnimation")})),c(n,!1))}),[o,p]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{ref:x,style:{width:"100vw",height:"900px",display:"flex",flexWrap:"wrap"},className:"App",children:h.map((function(t,n){return t.map((function(t,r){return Object(f.jsx)("div",{onMouseDown:function(t){return function(t){if(t.preventDefault(),!e)if(t.target.getAttribute("data-start"))g.current=function(t){u([+t.target.getAttribute("y"),+t.target.getAttribute("x")])},x.current.addEventListener("mousemove",g.current);else if(t.target.getAttribute("data-dest"))g.current=function(t){m([+t.target.getAttribute("y"),+t.target.getAttribute("x")])},x.current.addEventListener("mousemove",g.current);else if(0===t.button){var n=t.target;n.classList.remove("visited","visitedNoAnimation","path"),n.classList.add("wall"),g.current=function(t){n===t.target||t.target.getAttribute("data-start")||t.target.getAttribute("data-dest")||((n=t.target).classList.remove("visited","visitedNoAnimation","path"),n.classList.add("wall"))},x.current.addEventListener("mousemove",g.current)}}(t)},"data-start":r===o[1]&&n===o[0]||void 0,"data-dest":n===p[0]&&r===p[1]||void 0,onMouseUp:function(){return x.current.removeEventListener("mousemove",g.current)},x:r,y:n,className:d()("square",{start:o[0]===n&&o[1]===r},{dest:p[0]===n&&p[1]===r})},n+r)}))}))})})},p=(n(28),new Array(25).fill(null).map((function(t){return new Array(25).fill(1)}))),m=function(){for(var t=Math.floor(12.5),e=[[[t,t]]],n=new Set,r=1;r<=25&&e.length>0;){var c=e.shift();c.forEach((function(e){p[e[0]]&&(1!==p[e[0]][e[1]]||e[0]===t&&e[1]===t||(p[e[0]][e[1]]=r))}));var a=c.reduce((function(t,e){var r=[[e[0]-1,e[1]],[e[0],e[1]-1],[e[0]+1,e[1]],[e[0],e[1]+1]].filter((function(t){return!n.has(t.toString())&&t[0]<=25&&t[0]>=0&&t[1]<=25&&t[1]>=0}));return r.forEach((function(t){n.add(t.toString())})),t.push.apply(t,Object(i.a)(r)),t}),[]);r++,e.push(a)}return p},x=function(){return Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"calc(100vw - 40px)",height:"100vh"},children:[Object(f.jsx)("button",{className:"button",style:{marginBottom:"20px",color:"rgba(75, 114, 241, 0.801)"},onClick:function(){for(var t=function(t){document.querySelectorAll('[wave="'.concat(t,'"]')).forEach((function(e){setTimeout((function(){var n=document.createElement("div");n.classList.add("wave"),e.appendChild(n),setTimeout((function(){e.classList.remove("wave")}),300*t)}),250*t)}))},e=1;e<=25;e++)t(e)},children:"spread"}),Object(f.jsx)("div",{style:{width:"750px",height:"750px",display:"flex",flexWrap:"wrap",margin:"0 auto"},className:"App",children:m().map((function(t,e){return t.map((function(t,n){return Object(f.jsx)("div",{wave:t,x:n,y:e,className:"square"},e+n)}))}))})]})},g=(n(29),function(t){var e=t.dfs,n=t.bfs,r=t.reset,c=Object(u.g)();return Object(f.jsx)("div",{className:"header",children:Object(f.jsxs)("nav",{children:[Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(o.b,{style:{textDecoration:"none",color:"#fff"},to:"/wave",children:"wave-spreading"})}),Object(f.jsx)("li",{children:Object(f.jsx)(o.b,{style:{textDecoration:"none",color:"#fff"},to:"/pathfinder",children:"pathfinder"})})]}),"/pathfinder"===c.pathname&&Object(f.jsx)("ul",{children:Object(f.jsxs)("li",{children:[Object(f.jsx)("button",{className:"button",onClick:e,children:"depth-first-search"}),Object(f.jsx)("button",{className:"button",onClick:n,children:"breadth-first-search"}),Object(f.jsx)("button",{className:"button",onClick:r,children:"reset"})]})})]})})}),O=function(t,e,n){var r=t.prev;for(n.push(e);r;)n.push(r.node),r=r.prev;return n.reverse()},y=function(t,e,n){console.log();for(var r=[],c=document.querySelector("[data-start=true]"),a=document.querySelector("[data-dest=true]"),s=new Set,o=[{node:c,prev:null}],u=0,l=function(){var c=void 0;switch(t){case"dfs":c=o.pop();break;case"bfs":c=o.shift();break;default:return{v:void 0}}if(!s.has(c.node)){s.add(c.node);var l=+c.node.getAttribute("y"),d=+c.node.getAttribute("x");if(e)setTimeout((function(){c.node===a&&function(){for(var t=O(c,a,r),e=function(e){setTimeout((function(){e===t.length-1&&n(!1),r[e].classList.add("path")}),10*e)},s=0;s<t.length;s++)e(s)}(),!c.node.classList.value.includes("start")&&!c.node.classList.value.includes("dest")&&c.node.classList.add("visited")}),10*++u);else{if(c.node===a)for(var f=O(c,a,r),h=0;h<f.length;h++)r[h].classList.add("path");!c.node.classList.value.includes("start")&&!c.node.classList.value.includes("dest")&&c.node.classList.add("visitedNoAnimation")}var b=[document.querySelector('[y="'.concat(l,'"][x="').concat(d-1,'"]')),document.querySelector('[y="'.concat(l,'"][x="').concat(d+1,'"]')),document.querySelector('[y="'.concat(l-1,'"][x="').concat(d,'"]')),document.querySelector('[y="'.concat(l+1,'"][x="').concat(d,'"]'))].filter((function(t){return t&&!t.classList.value.includes("wall")})).map((function(t){return{node:t,prev:c}}));if(c.node===a)return"break";o.push.apply(o,Object(i.a)(b))}};o.length>0;){var d=l();if("break"===d)break;if("object"===typeof d)return d.v}};var w=function(){var t=Object(r.useState)(null),e=Object(s.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(null),i=Object(s.a)(a,2),l=i[0],d=i[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)(g,{reset:function(){c(null),document.querySelectorAll(".square").forEach((function(t){t.classList.remove("path","visited","visitedNoAnimation","wall")}))},bfs:function(){c("bfs"),d(!0),y("bfs",!0,d)},dfs:function(){c("dfs"),d(!0),y("dfs",!0,d)}}),Object(f.jsxs)(u.d,{children:[Object(f.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(u.a,{to:"pathfinder"})}}),Object(f.jsx)(u.b,{path:"/wave",render:function(){return Object(f.jsx)(x,{})}}),Object(f.jsx)(u.b,{path:"/pathfinder",render:function(){return Object(f.jsx)(j,{isSearching:l,currentAlgorithm:n,searchHelper:y})}})]})]})})};n(35);a.a.render(Object(f.jsx)(w,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.8d10174e.chunk.js.map