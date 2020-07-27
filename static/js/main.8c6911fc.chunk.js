(this["webpackJsonpjob-junction"]=this["webpackJsonpjob-junction"]||[]).push([[0],{158:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),o=t.n(c),l=(t(57),t(19)),i=t(7),s=t(11),m=t(12),u=t.n(m),p="make-request",d="get-data",E="error",b="update-has-next-page",g="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";function h(e,a){switch(a.type){case p:return{loading:!0,jobs:[]};case d:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case E:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,error:a.payload.error,jobs:[]});case b:return Object(i.a)(Object(i.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}}var f=t(162),j=t(165),y=t(160),v=t(161),k=t(164),O=t(30),w=t.n(O);function N(e){var a=e.jobz,t=Object(n.useState)(!1),c=Object(s.a)(t,2),o=c[0],l=c[1];return r.a.createElement(j.a,{className:"mb-3"},r.a.createElement(j.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(j.a.Title,null,a.title," - ",r.a.createElement("span",{className:"text-muted font-weight-light"},a.company)),r.a.createElement(j.a.Subtitle,null,new Date(a.created_at).toLocaleDateString()),r.a.createElement(y.a,{variant:"secondary",className:"mr-2"},a.type),r.a.createElement(y.a,{variant:"secondary"},a.location),r.a.createElement("div",{style:{wordBreak:"break-all"}},r.a.createElement(w.a,{source:a.how_to_apply}))),r.a.createElement("img",{className:"d-none d-md-block",height:"50px",alt:a.company,src:a.company_logo})),r.a.createElement(j.a.Text,null,r.a.createElement(v.a,{onClick:function(){return l((function(e){return!e}))},variant:"primary"},o?"Hide Details":"View Details")),r.a.createElement(k.a,{in:o},r.a.createElement("div",{className:"mt-4"},r.a.createElement(w.a,{source:a.description})))))}var x=t(166);function C(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function c(e){t((function(a){return a+e}))}return r.a.createElement(x.a,null,1!==a&&r.a.createElement(x.a.Prev,{onClick:function(){return c(-1)}}),1!==a&&r.a.createElement(x.a.Item,{onClick:function(){return t(1)}},"1"),a>2&&r.a.createElement(x.a.Ellipsis,null),a>2&&r.a.createElement(x.a.Item,{onClick:function(){return c(-1)}},a-1),r.a.createElement(x.a.Item,{active:!0},a),n&&r.a.createElement(x.a.Item,{onClick:function(){return c(1)}},a+1),n&&r.a.createElement(x.a.Next,{onClick:function(){return c(1)}}))}var P=t(163),T=t(51);function D(e){var a=e.params,t=e.onParamChange;return r.a.createElement(P.a,{className:"mb-4"},r.a.createElement(P.a.Row,null,r.a.createElement(P.a.Group,{as:T.a},r.a.createElement(P.a.Label,null,"Description"),r.a.createElement(P.a.Control,{type:"text",onChange:t,value:a.description,name:"description"})),r.a.createElement(P.a.Group,{as:T.a},r.a.createElement(P.a.Label,null,"Location"),r.a.createElement(P.a.Control,{type:"text",onChange:t,value:a.location,name:"location"})),r.a.createElement(P.a.Group,{as:T.a,xs:"auto",className:"mt-auto"},r.a.createElement(P.a.Check,{onChange:t,value:a.fulltime,name:"full_time",id:"full_time",label:"Only Full Time",type:"checkbox",className:"mb-2"}))))}var S=function(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(1),m=Object(s.a)(o,2),j=m[0],y=m[1],v=function(e,a){var t=Object(n.useReducer)(h,{jobs:[],loading:!0}),r=Object(s.a)(t,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){var t=u.a.CancelToken.source();o({type:p}),u.a.get(g,{cancelToken:t.token,params:Object(i.a)({markdown:!0,page:a},e)}).then((function(e){o({type:d,payload:{jobs:e.data}})})).catch((function(e){u.a.isCancel(e)||o({type:E,payload:{error:e}})}));var n=u.a.CancelToken.source();return u.a.get(g,{cancelToken:n.token,params:Object(i.a)({markdown:!0,page:a+1},e)}).then((function(e){o({type:b,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){u.a.isCancel(e)||o({type:E,payload:{error:e}})})),function(){t.cancel(),n.cancel()}}),[e,a]),c}(t,j),k=v.jobs,O=v.loading,w=v.error,x=v.hasNextPage;return r.a.createElement(f.a,{className:"my-4"},r.a.createElement("h1",{className:"mb-4"},"Jobs Junction"),r.a.createElement(D,{params:t,onParamChange:function(e){var a=e.target.name,t=e.target.value;y(1),c((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(l.a)({},a,t))}))}}),r.a.createElement(C,{page:j,setPage:y,hasNextPage:x}),O&&r.a.createElement("h1",null,"Loading Data..."),w&&r.a.createElement("h1",null,"Error. Try Refreshing."),k.map((function(e){return r.a.createElement(N,{key:e.id,jobz:e})})),r.a.createElement(C,{page:j,setPage:y,hasNextPage:x}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,a,t){e.exports=t(158)},57:function(e,a,t){}},[[52,1,2]]]);
//# sourceMappingURL=main.8c6911fc.chunk.js.map