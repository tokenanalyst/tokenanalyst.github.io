(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"0KLy":function(e,t,n){"use strict";var a=n("KI45"),r=a(n("pbKT")),i=a(n("p0XB")),o=a(n("0iUn")),l=a(n("sLSF")),u=a(n("Tit0")),d=a(n("MI3g")),c=a(n("a7VT")),s=a(n("XXOK")),f=a(n("UXZV")),m=a(n("eVuF")),p=a(n("pLtp"));function x(e){return function(){var t,n=(0,c.default)(e);if(function(){if("undefined"===typeof Reflect||!r.default)return!1;if(r.default.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call((0,r.default)(Date,[],function(){})),!0}catch(e){return!1}}()){var a=(0,c.default)(this).constructor;t=(0,r.default)(n,arguments,a)}else t=n.apply(this,arguments);return(0,d.default)(this,t)}}var h=function(e){return e&&e.__esModule?e:{default:e}};(0,a(n("hfKm")).default)(t,"__esModule",{value:!0});var g=h(n("q1tI")),y=n("Q0KE"),b=[],w=[],v=!1;function k(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}function _(e){var t={loading:!1,loaded:{},error:null},n=[];try{(0,p.default)(e).forEach(function(a){var r=k(e[a]);r.loading?t.loading=!0:(t.loaded[a]=r.loaded,t.error=r.error),n.push(r.promise),r.promise.then(function(e){t.loaded[a]=e}).catch(function(e){t.error=e})})}catch(a){t.error=a}return t.promise=m.default.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function j(e,t){return g.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function E(e,t){var n,a=(0,f.default)({loader:null,loading:null,delay:200,timeout:null,render:j,webpack:null,modules:null},t),r=null;function d(){return r||(r=e(a.loader)),r.promise}if(!v&&"function"===typeof a.webpack){var c=a.webpack();w.push(function(e){var t=!0,n=!1,a=void 0;try{for(var r,i=(0,s.default)(c);!(t=(r=i.next()).done);t=!0){var o=r.value;if(-1!==e.indexOf(o))return d()}}catch(l){n=!0,a=l}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}})}return(n=function(t){(0,u.default)(c,t);var n=x(c);function c(t){var i;return(0,o.default)(this,c),(i=n.call(this,t)).retry=function(){i.setState({error:null,loading:!0,timedOut:!1}),r=e(a.loader),i._loadModule()},d(),i.state={error:r.error,pastDelay:!1,timedOut:!1,loading:r.loading,loaded:r.loaded},i}return(0,l.default)(c,[{key:"componentWillMount",value:function(){this._mounted=!0,this._loadModule()}},{key:"_loadModule",value:function(){var e=this;if(this.context&&(0,i.default)(a.modules)&&a.modules.forEach(function(t){e.context(t)}),r.loading){"number"===typeof a.delay&&(0===a.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},a.delay)),"number"===typeof a.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},a.timeout));var t=function(){e._mounted&&(e.setState({error:r.error,loaded:r.loaded,loading:r.loading}),e._clearTimeouts())};r.promise.then(function(){t()}).catch(function(e){t()})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this._clearTimeouts()}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"render",value:function(){return this.state.loading||this.state.error?g.default.createElement(a.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?a.render(this.state.loaded,this.props):null}}],[{key:"preload",value:function(){return d()}}]),c}(g.default.Component)).contextType=y.LoadableContext,n}function L(e){return E(k,e)}function T(e,t){for(var n=[];e.length;){var a=e.pop();n.push(a(t))}return m.default.all(n).then(function(){if(e.length)return T(e,t)})}L.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return E(_,e)},L.preloadAll=function(){return new m.default(function(e,t){T(b).then(e,t)})},L.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new m.default(function(t){var n=function(){return v=!0,t()};T(w,e).then(n,n)})},window.__NEXT_PRELOADREADY=L.preloadReady,t.default=L},Dsvi:function(e,t,n){"use strict";n.r(t);var a=n("MX0m"),r=n.n(a),i=n("q1tI"),o=n.n(i),l=n("nOHt"),u=n.n(l),d=n("UgXd"),c=n.n(d),s=n("m/Pd"),f=n.n(s),m=n("QJN4"),p=["Historical Order Book and Exchange Flows","Web Platform Access Only","Power-User Charting Tools"],x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"jsx-1666051967 container"},o.a.createElement("div",{className:"jsx-1666051967 title"},"Immediate free access to:"),p.map(function(e){return o.a.createElement("div",{key:e,className:"jsx-1666051967 benefit"},o.a.createElement("img",{src:"/static/svg/marketing/checkbox.svg",height:"30px",alt:"checkbox",className:"jsx-1666051967"}),o.a.createElement("div",{className:"jsx-1666051967 benefit-text"},e))}),o.a.createElement("img",{src:"/static/svg/marketing/man-with-chart.svg",alt:"man-with-chart",className:"jsx-1666051967 image"})),o.a.createElement(r.a,{id:"1666051967"},[".container.jsx-1666051967{padding-top:20px;}",".title.jsx-1666051967{font-weight:bold;font-size:20px;padding-bottom:20px;}",".benefit.jsx-1666051967{padding-top:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".benefit-text.jsx-1666051967{padding-left:10px;}",".image.jsx-1666051967{padding-top:10px;height:300px;}","@media only screen and (max-width:768px){.container.jsx-1666051967{padding-bottom:0px;}.image.jsx-1666051967{padding-top:10px;height:200px;}}"]))},h=c()(function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,"LD4c")).then(function(e){return e.RegisterWidget})},{ssr:!1,loadableGenerated:{webpack:function(){return["LD4c"]},modules:["../components/atomic/organism/RegisterWidget"]}});t.default=function(){var e=Object(i.useContext)(m.a);return Object(i.useEffect)(function(){e.isLoggedIn&&u.a.push("/"),window.scrollTo(0,0)},[e.isLoggedIn]),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null,o.a.createElement("title",{key:"title",className:"jsx-2572478911"},"TokenAnalyst - Register")),!e.isLoggedIn&&o.a.createElement("div",{className:"jsx-2572478911 container"},o.a.createElement("div",{className:"jsx-2572478911 contents"},o.a.createElement(h,null)),o.a.createElement("div",{className:"jsx-2572478911 benefits"},o.a.createElement(x,null))),o.a.createElement(r.a,{id:"2572478911"},[".container.jsx-2572478911{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:Space Grotesk;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;height:700px;}",".contents.jsx-2572478911{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:40%;}",".header.jsx-2572478911{font-size:32px;font-weight:bold;padding:15px;padding-top:30px;text-align:center;}",".benefits.jsx-2572478911{width:40%;}","@media only screen and (max-width:768px){.container.jsx-2572478911{padding-top:0px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}.contents.jsx-2572478911{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:20px;}.contents.jsx-2572478911{width:90%;}.benefits.jsx-2572478911{width:90%;}}"]))}},Q0KE:function(e,t,n){"use strict";var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var r=a(n("q1tI"));t.LoadableContext=r.createContext(null)},UgXd:function(e,t,n){"use strict";var a=n("KI45"),r=a(n("pLtp")),i=a(n("UXZV")),o=a(n("eVuF")),l=function(e){return e&&e.__esModule?e:{default:e}};(0,a(n("hfKm")).default)(t,"__esModule",{value:!0});var u=l(n("q1tI")),d=l(n("0KLy")),c=!1;function s(e,t){if(delete t.webpack,delete t.modules,!c)return e(t);var n=t.loading;return function(){return u.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=s,t.default=function(e,t){var n=d.default,a={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(e instanceof o.default?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=(0,i.default)({},a,e)),a=(0,i.default)({},a,t),"object"===typeof e&&!(e instanceof o.default)&&(e.render&&(a.render=function(t,n){return e.render(n,t)}),e.modules)){n=d.default.Map;var l={},u=e.modules();(0,r.default)(u).forEach(function(e){var t=u[e];"function"!==typeof t.then?l[e]=t:l[e]=function(){return t.then(function(e){return e.default||e})}}),a.loader=l}if(a.loadableGenerated&&delete(a=(0,i.default)({},a,a.loadableGenerated)).loadableGenerated,"boolean"===typeof a.ssr){if(!a.ssr)return delete a.ssr,s(n,a);delete a.ssr}return n(a)}},"c05+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){var e=n("Dsvi");return{page:e.default||e}}])}},[["c05+",1,0]]]);