"use strict";(self.webpackChunkcgreggescalante_github_io=self.webpackChunkcgreggescalante_github_io||[]).push([[429],{435:(ge,ae,le)=>{le(583),le(389)},389:(ge,ae,le)=>{var be;void 0!==(be=function(){var ye=function(){function ie(){this.name="TaskTrackingZone",this.microTasks=[],this.macroTasks=[],this.eventTasks=[],this.properties={TaskTrackingZone:this}}return ie.get=function(){return Zone.current.get("TaskTrackingZone")},ie.prototype.getTasksFor=function(ne){switch(ne){case"microTask":return this.microTasks;case"macroTask":return this.macroTasks;case"eventTask":return this.eventTasks}throw new Error("Unknown task format: "+ne)},ie.prototype.onScheduleTask=function(ne,we,he,z){return z.creationLocation=new Error("Task '"+z.type+"' from '"+z.source+"'."),this.getTasksFor(z.type).push(z),ne.scheduleTask(he,z)},ie.prototype.onCancelTask=function(ne,we,he,z){for(var $=this.getTasksFor(z.type),re=0;re<$.length;re++)if($[re]==z){$.splice(re,1);break}return ne.cancelTask(he,z)},ie.prototype.onInvokeTask=function(ne,we,he,z,$,re){if("eventTask"===z.type)return ne.invokeTask(he,z,$,re);for(var ke=this.getTasksFor(z.type),Ee=0;Ee<ke.length;Ee++)if(ke[Ee]==z){ke.splice(Ee,1);break}return ne.invokeTask(he,z,$,re)},ie.prototype.clearEvents=function(){for(;this.eventTasks.length;)Zone.current.cancelTask(this.eventTasks[0])},ie}();Zone.TaskTrackingZoneSpec=ye}.call(ae,le,ae,ge))&&(ge.exports=be)},583:()=>{!function(e){const n=e.performance;function i(I){n&&n.mark&&n.mark(I)}function r(I,p){n&&n.measure&&n.measure(I,p)}i("Zone");const c=e.__Zone_symbol_prefix||"__zone_symbol__";function u(I){return c+I}const f=!0===e[u("forceDuplicateZoneCheck")];if(e.Zone){if(f||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let _=(()=>{class I{constructor(t,o){this._parent=t,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new T(this,this._parent&&this._parent._zoneDelegate,o)}static assertZonePatched(){if(e.Promise!==ee.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=I.current;for(;t.parent;)t=t.parent;return t}static get current(){return B.zone}static get currentTask(){return ce}static __load_patch(t,o,g=!1){if(ee.hasOwnProperty(t)){if(!g&&f)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const P="Zone:"+t;i(P),ee[t]=o(e,I,me),r(P,P)}}get parent(){return this._parent}get name(){return this._name}get(t){const o=this.getZoneWith(t);if(o)return o._properties[t]}getZoneWith(t){let o=this;for(;o;){if(o._properties.hasOwnProperty(t))return o;o=o._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,o){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const g=this._zoneDelegate.intercept(this,t,o),P=this;return function(){return P.runGuarded(g,this,arguments,o)}}run(t,o,g,P){B={parent:B,zone:this};try{return this._zoneDelegate.invoke(this,t,o,g,P)}finally{B=B.parent}}runGuarded(t,o=null,g,P){B={parent:B,zone:this};try{try{return this._zoneDelegate.invoke(this,t,o,g,P)}catch(Q){if(this._zoneDelegate.handleError(this,Q))throw Q}}finally{B=B.parent}}runTask(t,o,g){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||V).name+"; Execution: "+this.name+")");if(t.state===j&&(t.type===R||t.type===M))return;const P=t.state!=Y;P&&t._transitionTo(Y,S),t.runCount++;const Q=ce;ce=t,B={parent:B,zone:this};try{t.type==M&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,o,g)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{t.state!==j&&t.state!==K&&(t.type==R||t.data&&t.data.isPeriodic?P&&t._transitionTo(S,Y):(t.runCount=0,this._updateTaskCount(t,-1),P&&t._transitionTo(j,Y,j))),B=B.parent,ce=Q}}scheduleTask(t){if(t.zone&&t.zone!==this){let g=this;for(;g;){if(g===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);g=g.parent}}t._transitionTo(X,j);const o=[];t._zoneDelegates=o,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(g){throw t._transitionTo(K,X,j),this._zoneDelegate.handleError(this,g),g}return t._zoneDelegates===o&&this._updateTaskCount(t,1),t.state==X&&t._transitionTo(S,X),t}scheduleMicroTask(t,o,g,P){return this.scheduleTask(new m(v,t,o,g,P,void 0))}scheduleMacroTask(t,o,g,P,Q){return this.scheduleTask(new m(M,t,o,g,P,Q))}scheduleEventTask(t,o,g,P,Q){return this.scheduleTask(new m(R,t,o,g,P,Q))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||V).name+"; Execution: "+this.name+")");t._transitionTo(A,S,Y);try{this._zoneDelegate.cancelTask(this,t)}catch(o){throw t._transitionTo(K,A),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(t,-1),t._transitionTo(j,A),t.runCount=0,t}_updateTaskCount(t,o){const g=t._zoneDelegates;-1==o&&(t._zoneDelegates=null);for(let P=0;P<g.length;P++)g[P]._updateTaskCount(t.type,o)}}return I.__symbol__=u,I})();const y={name:"",onHasTask:(I,p,t,o)=>I.hasTask(t,o),onScheduleTask:(I,p,t,o)=>I.scheduleTask(t,o),onInvokeTask:(I,p,t,o,g,P)=>I.invokeTask(t,o,g,P),onCancelTask:(I,p,t,o)=>I.cancelTask(t,o)};class T{constructor(p,t,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=p,this._parentDelegate=t,this._forkZS=o&&(o&&o.onFork?o:t._forkZS),this._forkDlgt=o&&(o.onFork?t:t._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:t._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:t._interceptZS),this._interceptDlgt=o&&(o.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:t._invokeZS),this._invokeDlgt=o&&(o.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:t._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:t._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:t._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:t._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const g=o&&o.onHasTask;(g||t&&t._hasTaskZS)&&(this._hasTaskZS=g?o:y,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=p,o.onScheduleTask||(this._scheduleTaskZS=y,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=y,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=y,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(p,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,p,t):new _(p,t)}intercept(p,t,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,p,t,o):t}invoke(p,t,o,g,P){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,p,t,o,g,P):t.apply(o,g)}handleError(p,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,p,t)}scheduleTask(p,t){let o=t;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,p,t),o||(o=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=v)throw new Error("Task is missing scheduleFn.");d(t)}return o}invokeTask(p,t,o,g){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,p,t,o,g):t.callback.apply(o,g)}cancelTask(p,t){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,p,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");o=t.cancelFn(t)}return o}hasTask(p,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,p,t)}catch(o){this.handleError(p,o)}}_updateTaskCount(p,t){const o=this._taskCounts,g=o[p],P=o[p]=g+t;if(P<0)throw new Error("More tasks executed then were scheduled.");0!=g&&0!=P||this.hasTask(this.zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:p})}}class m{constructor(p,t,o,g,P,Q){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=p,this.source=t,this.data=g,this.scheduleFn=P,this.cancelFn=Q,!o)throw new Error("callback is not defined");this.callback=o;const l=this;this.invoke=p===R&&g&&g.useG?m.invokeTask:function(){return m.invokeTask.call(e,l,this,arguments)}}static invokeTask(p,t,o){p||(p=this),fe++;try{return p.runCount++,p.zone.runTask(p,t,o)}finally{1==fe&&L(),fe--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(j,X)}_transitionTo(p,t,o){if(this._state!==t&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${p}', expecting state '${t}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=p,p==j&&(this._zoneDelegates=null)}toString(){return this.data&&void 0!==this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const Z=u("setTimeout"),N=u("Promise"),O=u("then");let E,G=[],F=!1;function d(I){if(0===fe&&0===G.length)if(E||e[N]&&(E=e[N].resolve(0)),E){let p=E[O];p||(p=E.then),p.call(E,L)}else e[Z](L,0);I&&G.push(I)}function L(){if(!F){for(F=!0;G.length;){const I=G;G=[];for(let p=0;p<I.length;p++){const t=I[p];try{t.zone.runTask(t,null,null)}catch(o){me.onUnhandledError(o)}}}me.microtaskDrainDone(),F=!1}}const V={name:"NO ZONE"},j="notScheduled",X="scheduling",S="scheduled",Y="running",A="canceling",K="unknown",v="microTask",M="macroTask",R="eventTask",ee={},me={symbol:u,currentZoneFrame:()=>B,onUnhandledError:U,microtaskDrainDone:U,scheduleMicroTask:d,showUncaughtError:()=>!_[u("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:U,patchMethod:()=>U,bindArguments:()=>[],patchThen:()=>U,patchMacroTask:()=>U,patchEventPrototype:()=>U,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>U,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>U,wrapWithCurrentZone:()=>U,filterProperties:()=>[],attachOriginToPatched:()=>U,_redefineProperty:()=>U,patchCallbacks:()=>U};let B={parent:null,zone:new _(null,null)},ce=null,fe=0;function U(){}r("Zone","Zone"),e.Zone=_}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);const ae=Object.getOwnPropertyDescriptor,le=Object.defineProperty,se=Object.getPrototypeOf,be=Object.create,ye=Array.prototype.slice,ie="addEventListener",ne="removeEventListener",we=Zone.__symbol__(ie),he=Zone.__symbol__(ne),z="true",$="false",re=Zone.__symbol__("");function ke(e,n){return Zone.current.wrap(e,n)}function Ee(e,n,i,r,c){return Zone.current.scheduleMacroTask(e,n,i,r,c)}const x=Zone.__symbol__,Ie="undefined"!=typeof window,Pe=Ie?window:void 0,J=Ie&&Pe||"object"==typeof self&&self||global,ht=[null];function He(e,n){for(let i=e.length-1;i>=0;i--)"function"==typeof e[i]&&(e[i]=ke(e[i],n+"_"+i));return e}function Ue(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&void 0===e.set)}const We="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,Le=!("nw"in J)&&void 0!==J.process&&"[object process]"==={}.toString.call(J.process),xe=!Le&&!We&&!(!Ie||!Pe.HTMLElement),qe=void 0!==J.process&&"[object process]"==={}.toString.call(J.process)&&!We&&!(!Ie||!Pe.HTMLElement),Me={},Xe=function(e){if(!(e=e||J.event))return;let n=Me[e.type];n||(n=Me[e.type]=x("ON_PROPERTY"+e.type));const i=this||e.target||J,r=i[n];let c;if(xe&&i===Pe&&"error"===e.type){const u=e;c=r&&r.call(this,u.message,u.filename,u.lineno,u.colno,u.error),!0===c&&e.preventDefault()}else c=r&&r.apply(this,arguments),null!=c&&!c&&e.preventDefault();return c};function Ye(e,n,i){let r=ae(e,n);if(!r&&i&&ae(i,n)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;const c=x("on"+n+"patched");if(e.hasOwnProperty(c)&&e[c])return;delete r.writable,delete r.value;const u=r.get,f=r.set,_=n.substr(2);let y=Me[_];y||(y=Me[_]=x("ON_PROPERTY"+_)),r.set=function(T){let m=this;!m&&e===J&&(m=J),m&&(m[y]&&m.removeEventListener(_,Xe),f&&f.apply(m,ht),"function"==typeof T?(m[y]=T,m.addEventListener(_,Xe,!1)):m[y]=null)},r.get=function(){let T=this;if(!T&&e===J&&(T=J),!T)return null;const m=T[y];if(m)return m;if(u){let Z=u&&u.call(this);if(Z)return r.set.call(this,Z),"function"==typeof T.removeAttribute&&T.removeAttribute(n),Z}return null},le(e,n,r),e[c]=!0}function Ke(e,n,i){if(n)for(let r=0;r<n.length;r++)Ye(e,"on"+n[r],i);else{const r=[];for(const c in e)"on"==c.substr(0,2)&&r.push(c);for(let c=0;c<r.length;c++)Ye(e,r[c],i)}}const ue=x("originalInstance");function Se(e){const n=J[e];if(!n)return;J[x(e)]=n,J[e]=function(){const c=He(arguments,e);switch(c.length){case 0:this[ue]=new n;break;case 1:this[ue]=new n(c[0]);break;case 2:this[ue]=new n(c[0],c[1]);break;case 3:this[ue]=new n(c[0],c[1],c[2]);break;case 4:this[ue]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},pe(J[e],n);const i=new n(function(){});let r;for(r in i)"XMLHttpRequest"===e&&"responseBlob"===r||function(c){"function"==typeof i[c]?J[e].prototype[c]=function(){return this[ue][c].apply(this[ue],arguments)}:le(J[e].prototype,c,{set:function(u){"function"==typeof u?(this[ue][c]=ke(u,e+"."+c),pe(this[ue][c],u)):this[ue][c]=u},get:function(){return this[ue][c]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&(J[e][r]=n[r])}function _e(e,n,i){let r=e;for(;r&&!r.hasOwnProperty(n);)r=se(r);!r&&e[n]&&(r=e);const c=x(n);let u=null;if(r&&(!(u=r[c])||!r.hasOwnProperty(c))&&(u=r[c]=r[n],Ue(r&&ae(r,n)))){const _=i(u,c,n);r[n]=function(){return _(this,arguments)},pe(r[n],u)}return u}function _t(e,n,i){let r=null;function c(u){const f=u.data;return f.args[f.cbIdx]=function(){u.invoke.apply(this,arguments)},r.apply(f.target,f.args),u}r=_e(e,n,u=>function(f,_){const y=i(f,_);return y.cbIdx>=0&&"function"==typeof _[y.cbIdx]?Ee(y.name,_[y.cbIdx],y,c):u.apply(f,_)})}function pe(e,n){e[x("OriginalDelegate")]=n}let $e=!1,Fe=!1;function mt(){if($e)return Fe;$e=!0;try{const e=Pe.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Fe=!0)}catch(e){}return Fe}Zone.__load_patch("ZoneAwarePromise",(e,n,i)=>{const r=Object.getOwnPropertyDescriptor,c=Object.defineProperty,f=i.symbol,_=[],y=!0===e[f("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],T=f("Promise"),m=f("then");i.onUnhandledError=l=>{if(i.showUncaughtError()){const s=l&&l.rejection;s?console.error("Unhandled Promise rejection:",s instanceof Error?s.message:s,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",s,s instanceof Error?s.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;_.length;){const l=_.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(s){O(s)}}};const N=f("unhandledPromiseRejectionHandler");function O(l){i.onUnhandledError(l);try{const s=n[N];"function"==typeof s&&s.call(this,l)}catch(s){}}function G(l){return l&&l.then}function F(l){return l}function E(l){return t.reject(l)}const d=f("state"),L=f("value"),V=f("finally"),j=f("parentPromiseValue"),X=f("parentPromiseState"),Y=null,A=!0,K=!1;function M(l,s){return a=>{try{B(l,s,a)}catch(h){B(l,!1,h)}}}const me=f("currentTaskTrace");function B(l,s,a){const h=function(){let l=!1;return function(a){return function(){l||(l=!0,a.apply(null,arguments))}}}();if(l===a)throw new TypeError("Promise resolved with itself");if(l[d]===Y){let w=null;try{("object"==typeof a||"function"==typeof a)&&(w=a&&a.then)}catch(C){return h(()=>{B(l,!1,C)})(),l}if(s!==K&&a instanceof t&&a.hasOwnProperty(d)&&a.hasOwnProperty(L)&&a[d]!==Y)fe(a),B(l,a[d],a[L]);else if(s!==K&&"function"==typeof w)try{w.call(a,h(M(l,s)),h(M(l,!1)))}catch(C){h(()=>{B(l,!1,C)})()}else{l[d]=s;const C=l[L];if(l[L]=a,l[V]===V&&s===A&&(l[d]=l[X],l[L]=l[j]),s===K&&a instanceof Error){const k=n.currentTask&&n.currentTask.data&&n.currentTask.data.__creationTrace__;k&&c(a,me,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(let k=0;k<C.length;)U(l,C[k++],C[k++],C[k++],C[k++]);if(0==C.length&&s==K){l[d]=0;let k=a;try{throw new Error("Uncaught (in promise): "+function u(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(a)+(a&&a.stack?"\n"+a.stack:""))}catch(b){k=b}y&&(k.throwOriginal=!0),k.rejection=a,k.promise=l,k.zone=n.current,k.task=n.currentTask,_.push(k),i.scheduleMicroTask()}}}return l}const ce=f("rejectionHandledHandler");function fe(l){if(0===l[d]){try{const s=n[ce];s&&"function"==typeof s&&s.call(this,{rejection:l[L],promise:l})}catch(s){}l[d]=K;for(let s=0;s<_.length;s++)l===_[s].promise&&_.splice(s,1)}}function U(l,s,a,h,w){fe(l);const C=l[d],k=C?"function"==typeof h?h:F:"function"==typeof w?w:E;s.scheduleMicroTask("Promise.then",()=>{try{const b=l[L],D=!!a&&V===a[V];D&&(a[j]=b,a[X]=C);const H=s.run(k,void 0,D&&k!==E&&k!==F?[]:[b]);B(a,!0,H)}catch(b){B(a,!1,b)}},a)}const p=function(){};class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(s){return B(new this(null),A,s)}static reject(s){return B(new this(null),K,s)}static race(s){let a,h,w=new this((b,D)=>{a=b,h=D});function C(b){a(b)}function k(b){h(b)}for(let b of s)G(b)||(b=this.resolve(b)),b.then(C,k);return w}static all(s){return t.allWithCallback(s)}static allSettled(s){return(this&&this.prototype instanceof t?this:t).allWithCallback(s,{thenCallback:h=>({status:"fulfilled",value:h}),errorCallback:h=>({status:"rejected",reason:h})})}static allWithCallback(s,a){let h,w,C=new this((H,W)=>{h=H,w=W}),k=2,b=0;const D=[];for(let H of s){G(H)||(H=this.resolve(H));const W=b;try{H.then(te=>{D[W]=a?a.thenCallback(te):te,k--,0===k&&h(D)},te=>{a?(D[W]=a.errorCallback(te),k--,0===k&&h(D)):w(te)})}catch(te){w(te)}k++,b++}return k-=2,0===k&&h(D),C}constructor(s){const a=this;if(!(a instanceof t))throw new Error("Must be an instanceof Promise.");a[d]=Y,a[L]=[];try{s&&s(M(a,A),M(a,K))}catch(h){B(a,!1,h)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(s,a){let h=this.constructor[Symbol.species];(!h||"function"!=typeof h)&&(h=this.constructor||t);const w=new h(p),C=n.current;return this[d]==Y?this[L].push(C,w,s,a):U(this,C,w,s,a),w}catch(s){return this.then(null,s)}finally(s){let a=this.constructor[Symbol.species];(!a||"function"!=typeof a)&&(a=t);const h=new a(p);h[V]=V;const w=n.current;return this[d]==Y?this[L].push(w,h,s,s):U(this,w,h,s,s),h}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const o=e[T]=e.Promise;e.Promise=t;const g=f("thenPatched");function P(l){const s=l.prototype,a=r(s,"then");if(a&&(!1===a.writable||!a.configurable))return;const h=s.then;s[m]=h,l.prototype.then=function(w,C){return new t((b,D)=>{h.call(this,b,D)}).then(w,C)},l[g]=!0}return i.patchThen=P,o&&(P(o),_e(e,"fetch",l=>function Q(l){return function(s,a){let h=l.apply(s,a);if(h instanceof t)return h;let w=h.constructor;return w[g]||P(w),h}}(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=_,t}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,i=x("OriginalDelegate"),r=x("Promise"),c=x("Error"),u=function(){if("function"==typeof this){const T=this[i];if(T)return"function"==typeof T?n.call(T):Object.prototype.toString.call(T);if(this===Promise){const m=e[r];if(m)return n.call(m)}if(this===Error){const m=e[c];if(m)return n.call(m)}}return n.call(this)};u[i]=n,Function.prototype.toString=u;const f=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":f.call(this)}});let Re=!1;if("undefined"!=typeof window)try{const e=Object.defineProperty({},"passive",{get:function(){Re=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){Re=!1}const Et={useG:!0},oe={},Je={},Qe=new RegExp("^"+re+"(\\w+)(true|false)$"),Be=x("propagationStopped");function et(e,n){const i=(n?n(e):e)+$,r=(n?n(e):e)+z,c=re+i,u=re+r;oe[e]={},oe[e][$]=c,oe[e][z]=u}function Tt(e,n,i){const r=i&&i.add||ie,c=i&&i.rm||ne,u=i&&i.listeners||"eventListeners",f=i&&i.rmAll||"removeAllListeners",_=x(r),y="."+r+":",Z=function(E,d,L){if(E.isRemoved)return;const V=E.callback;"object"==typeof V&&V.handleEvent&&(E.callback=X=>V.handleEvent(X),E.originalDelegate=V),E.invoke(E,d,[L]);const j=E.options;j&&"object"==typeof j&&j.once&&d[c].call(d,L.type,E.originalDelegate?E.originalDelegate:E.callback,j)},N=function(E){if(!(E=E||e.event))return;const d=this||E.target||e,L=d[oe[E.type][$]];if(L)if(1===L.length)Z(L[0],d,E);else{const V=L.slice();for(let j=0;j<V.length&&(!E||!0!==E[Be]);j++)Z(V[j],d,E)}},O=function(E){if(!(E=E||e.event))return;const d=this||E.target||e,L=d[oe[E.type][z]];if(L)if(1===L.length)Z(L[0],d,E);else{const V=L.slice();for(let j=0;j<V.length&&(!E||!0!==E[Be]);j++)Z(V[j],d,E)}};function G(E,d){if(!E)return!1;let L=!0;d&&void 0!==d.useG&&(L=d.useG);const V=d&&d.vh;let j=!0;d&&void 0!==d.chkDup&&(j=d.chkDup);let X=!1;d&&void 0!==d.rt&&(X=d.rt);let S=E;for(;S&&!S.hasOwnProperty(r);)S=se(S);if(!S&&E[r]&&(S=E),!S||S[_])return!1;const Y=d&&d.eventNameToString,A={},K=S[_]=S[r],v=S[x(c)]=S[c],M=S[x(u)]=S[u],R=S[x(f)]=S[f];let ee;function me(s,a){return!Re&&"object"==typeof s&&s?!!s.capture:Re&&a?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?Object.assign(Object.assign({},s),{passive:!0}):s:{passive:!0}:s}d&&d.prepend&&(ee=S[x(d.prepend)]=S[d.prepend]);const p=L?function(s){if(!A.isExisting)return K.call(A.target,A.eventName,A.capture?O:N,A.options)}:function(s){return K.call(A.target,A.eventName,s.invoke,A.options)},t=L?function(s){if(!s.isRemoved){const a=oe[s.eventName];let h;a&&(h=a[s.capture?z:$]);const w=h&&s.target[h];if(w)for(let C=0;C<w.length;C++)if(w[C]===s){w.splice(C,1),s.isRemoved=!0,0===w.length&&(s.allRemoved=!0,s.target[h]=null);break}}if(s.allRemoved)return v.call(s.target,s.eventName,s.capture?O:N,s.options)}:function(s){return v.call(s.target,s.eventName,s.invoke,s.options)},g=d&&d.diff?d.diff:function(s,a){const h=typeof a;return"function"===h&&s.callback===a||"object"===h&&s.originalDelegate===a},P=Zone[x("UNPATCHED_EVENTS")],Q=e[x("PASSIVE_EVENTS")],l=function(s,a,h,w,C=!1,k=!1){return function(){const b=this||e;let D=arguments[0];d&&d.transferEventName&&(D=d.transferEventName(D));let H=arguments[1];if(!H)return s.apply(this,arguments);if(Le&&"uncaughtException"===D)return s.apply(this,arguments);let W=!1;if("function"!=typeof H){if(!H.handleEvent)return s.apply(this,arguments);W=!0}if(V&&!V(s,H,b,arguments))return;const te=Re&&!!Q&&-1!==Q.indexOf(D),de=me(arguments[2],te);if(P)for(let ve=0;ve<P.length;ve++)if(D===P[ve])return te?s.call(b,D,H,de):s.apply(this,arguments);const ze=!!de&&("boolean"==typeof de||de.capture),it=!(!de||"object"!=typeof de)&&de.once,At=Zone.current;let Ge=oe[D];Ge||(et(D,Y),Ge=oe[D]);const ct=Ge[ze?z:$];let je,Ze=b[ct],at=!1;if(Ze){if(at=!0,j)for(let ve=0;ve<Ze.length;ve++)if(g(Ze[ve],H))return}else Ze=b[ct]=[];const lt=b.constructor.name,ut=Je[lt];ut&&(je=ut[D]),je||(je=lt+a+(Y?Y(D):D)),A.options=de,it&&(A.options.once=!1),A.target=b,A.capture=ze,A.eventName=D,A.isExisting=at;const Oe=L?Et:void 0;Oe&&(Oe.taskData=A);const Te=At.scheduleEventTask(je,H,Oe,h,w);return A.target=null,Oe&&(Oe.taskData=null),it&&(de.once=!0),!Re&&"boolean"==typeof Te.options||(Te.options=de),Te.target=b,Te.capture=ze,Te.eventName=D,W&&(Te.originalDelegate=H),k?Ze.unshift(Te):Ze.push(Te),C?b:void 0}};return S[r]=l(K,y,p,t,X),ee&&(S.prependListener=l(ee,".prependListener:",function(s){return ee.call(A.target,A.eventName,s.invoke,A.options)},t,X,!0)),S[c]=function(){const s=this||e;let a=arguments[0];d&&d.transferEventName&&(a=d.transferEventName(a));const h=arguments[2],w=!!h&&("boolean"==typeof h||h.capture),C=arguments[1];if(!C)return v.apply(this,arguments);if(V&&!V(v,C,s,arguments))return;const k=oe[a];let b;k&&(b=k[w?z:$]);const D=b&&s[b];if(D)for(let H=0;H<D.length;H++){const W=D[H];if(g(W,C))return D.splice(H,1),W.isRemoved=!0,0===D.length&&(W.allRemoved=!0,s[b]=null,"string"==typeof a)&&(s[re+"ON_PROPERTY"+a]=null),W.zone.cancelTask(W),X?s:void 0}return v.apply(this,arguments)},S[u]=function(){const s=this||e;let a=arguments[0];d&&d.transferEventName&&(a=d.transferEventName(a));const h=[],w=tt(s,Y?Y(a):a);for(let C=0;C<w.length;C++){const k=w[C];h.push(k.originalDelegate?k.originalDelegate:k.callback)}return h},S[f]=function(){const s=this||e;let a=arguments[0];if(a){d&&d.transferEventName&&(a=d.transferEventName(a));const h=oe[a];if(h){const k=s[h[$]],b=s[h[z]];if(k){const D=k.slice();for(let H=0;H<D.length;H++){const W=D[H];this[c].call(this,a,W.originalDelegate?W.originalDelegate:W.callback,W.options)}}if(b){const D=b.slice();for(let H=0;H<D.length;H++){const W=D[H];this[c].call(this,a,W.originalDelegate?W.originalDelegate:W.callback,W.options)}}}}else{const h=Object.keys(s);for(let w=0;w<h.length;w++){const k=Qe.exec(h[w]);let b=k&&k[1];b&&"removeListener"!==b&&this[f].call(this,b)}this[f].call(this,"removeListener")}if(X)return this},pe(S[r],K),pe(S[c],v),R&&pe(S[f],R),M&&pe(S[u],M),!0}let F=[];for(let E=0;E<n.length;E++)F[E]=G(n[E],i);return F}function tt(e,n){if(!n){const u=[];for(let f in e){const _=Qe.exec(f);let y=_&&_[1];if(y&&(!n||y===n)){const T=e[f];if(T)for(let m=0;m<T.length;m++)u.push(T[m])}}return u}let i=oe[n];i||(et(n),i=oe[n]);const r=e[i[$]],c=e[i[z]];return r?c?r.concat(c):r.slice():c?c.slice():[]}function gt(e,n){const i=e.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",r=>function(c,u){c[Be]=!0,r&&r.apply(c,u)})}function yt(e,n,i,r,c){const u=Zone.__symbol__(r);if(n[u])return;const f=n[u]=n[r];n[r]=function(_,y,T){return y&&y.prototype&&c.forEach(function(m){const Z=`${i}.${r}::`+m,N=y.prototype;if(N.hasOwnProperty(m)){const O=e.ObjectGetOwnPropertyDescriptor(N,m);O&&O.value?(O.value=e.wrapWithCurrentZone(O.value,Z),e._redefineProperty(y.prototype,m,O)):N[m]&&(N[m]=e.wrapWithCurrentZone(N[m],Z))}else N[m]&&(N[m]=e.wrapWithCurrentZone(N[m],Z))}),f.call(n,_,y,T)},e.attachOriginToPatched(n[r],f)}const Ve=["absolutedeviceorientation","afterinput","afterprint","appinstalled","beforeinstallprompt","beforeprint","beforeunload","devicelight","devicemotion","deviceorientation","deviceorientationabsolute","deviceproximity","hashchange","languagechange","message","mozbeforepaint","offline","online","paint","pageshow","pagehide","popstate","rejectionhandled","storage","unhandledrejection","unload","userproximity","vrdisplayconnected","vrdisplaydisconnected","vrdisplaypresentchange"],wt=["encrypted","waitingforkey","msneedkey","mozinterruptbegin","mozinterruptend"],nt=["load"],rt=["blur","error","focus","load","resize","scroll","messageerror"],Nt=["bounce","finish","start"],ot=["loadstart","progress","abort","error","load","progress","timeout","loadend","readystatechange"],Ce=["upgradeneeded","complete","abort","success","error","blocked","versionchange","close"],Zt=["close","error","open","message"],St=["error","message"],De=["abort","animationcancel","animationend","animationiteration","auxclick","beforeinput","blur","cancel","canplay","canplaythrough","change","compositionstart","compositionupdate","compositionend","cuechange","click","close","contextmenu","curechange","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","drop","durationchange","emptied","ended","error","focus","focusin","focusout","gotpointercapture","input","invalid","keydown","keypress","keyup","load","loadstart","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","orientationchange","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","mozpointerlockchange","webkitpointerlockerchange","pointerlockerror","mozpointerlockerror","webkitpointerlockerror","pointermove","pointout","pointerover","pointerup","progress","ratechange","reset","resize","scroll","seeked","seeking","select","selectionchange","selectstart","show","sort","stalled","submit","suspend","timeupdate","volumechange","touchcancel","touchmove","touchstart","touchend","transitioncancel","transitionend","waiting","wheel"].concat(["webglcontextrestored","webglcontextlost","webglcontextcreationerror"],["autocomplete","autocompleteerror"],["toggle"],["afterscriptexecute","beforescriptexecute","DOMContentLoaded","freeze","fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange","fullscreenerror","mozfullscreenerror","webkitfullscreenerror","msfullscreenerror","readystatechange","visibilitychange","resume"],Ve,["beforecopy","beforecut","beforepaste","copy","cut","paste","dragstart","loadend","animationstart","search","transitionrun","transitionstart","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend"],["activate","afterupdate","ariarequest","beforeactivate","beforedeactivate","beforeeditfocus","beforeupdate","cellchange","controlselect","dataavailable","datasetchanged","datasetcomplete","errorupdate","filterchange","layoutcomplete","losecapture","move","moveend","movestart","propertychange","resizeend","resizestart","rowenter","rowexit","rowsdelete","rowsinserted","command","compassneedscalibration","deactivate","help","mscontentzoom","msmanipulationstatechanged","msgesturechange","msgesturedoubletap","msgestureend","msgesturehold","msgesturestart","msgesturetap","msgotpointercapture","msinertiastart","mslostpointercapture","mspointercancel","mspointerdown","mspointerenter","mspointerhover","mspointerleave","mspointermove","mspointerout","mspointerover","mspointerup","pointerout","mssitemodejumplistitemremoved","msthumbnailclick","stop","storagecommit"]);function st(e,n,i){if(!i||0===i.length)return n;const r=i.filter(u=>u.target===e);if(!r||0===r.length)return n;const c=r[0].ignoreProperties;return n.filter(u=>-1===c.indexOf(u))}function q(e,n,i,r){e&&Ke(e,st(e,n,i),r)}Zone.__load_patch("util",(e,n,i)=>{i.patchOnProperties=Ke,i.patchMethod=_e,i.bindArguments=He,i.patchMacroTask=_t;const r=n.__symbol__("BLACK_LISTED_EVENTS"),c=n.__symbol__("UNPATCHED_EVENTS");e[c]&&(e[r]=e[c]),e[r]&&(n[r]=n[c]=e[r]),i.patchEventPrototype=gt,i.patchEventTarget=Tt,i.isIEOrEdge=mt,i.ObjectDefineProperty=le,i.ObjectGetOwnPropertyDescriptor=ae,i.ObjectCreate=be,i.ArraySlice=ye,i.patchClass=Se,i.wrapWithCurrentZone=ke,i.filterProperties=st,i.attachOriginToPatched=pe,i._redefineProperty=Object.defineProperty,i.patchCallbacks=yt,i.getGlobalObjects=()=>({globalSources:Je,zoneSymbolEventNames:oe,eventNames:De,isBrowser:xe,isMix:qe,isNode:Le,TRUE_STR:z,FALSE_STR:$,ZONE_SYMBOL_PREFIX:re,ADD_EVENT_LISTENER_STR:ie,REMOVE_EVENT_LISTENER_STR:ne})});const Ae=x("zoneTask");function Ne(e,n,i,r){let c=null,u=null;i+=r;const f={};function _(T){const m=T.data;return m.args[0]=function(){return T.invoke.apply(this,arguments)},m.handleId=c.apply(e,m.args),T}function y(T){return u.call(e,T.data.handleId)}c=_e(e,n+=r,T=>function(m,Z){if("function"==typeof Z[0]){const N={isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?Z[1]||0:void 0,args:Z},O=Z[0];Z[0]=function(){try{return O.apply(this,arguments)}finally{N.isPeriodic||("number"==typeof N.handleId?delete f[N.handleId]:N.handleId&&(N.handleId[Ae]=null))}};const G=Ee(n,Z[0],N,_,y);if(!G)return G;const F=G.data.handleId;return"number"==typeof F?f[F]=G:F&&(F[Ae]=G),F&&F.ref&&F.unref&&"function"==typeof F.ref&&"function"==typeof F.unref&&(G.ref=F.ref.bind(F),G.unref=F.unref.bind(F)),"number"==typeof F||F?F:G}return T.apply(e,Z)}),u=_e(e,i,T=>function(m,Z){const N=Z[0];let O;"number"==typeof N?O=f[N]:(O=N&&N[Ae],O||(O=N)),O&&"string"==typeof O.type?"notScheduled"!==O.state&&(O.cancelFn&&O.data.isPeriodic||0===O.runCount)&&("number"==typeof N?delete f[N]:N&&(N[Ae]=null),O.zone.cancelTask(O)):T.apply(e,Z)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("queueMicrotask",(e,n,i)=>{i.patchMethod(e,"queueMicrotask",r=>function(c,u){n.current.scheduleMicroTask("queueMicrotask",u[0])})}),Zone.__load_patch("timers",e=>{const n="set",i="clear";Ne(e,n,i,"Timeout"),Ne(e,n,i,"Interval"),Ne(e,n,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{Ne(e,"request","cancel","AnimationFrame"),Ne(e,"mozRequest","mozCancel","AnimationFrame"),Ne(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const i=["alert","prompt","confirm"];for(let r=0;r<i.length;r++)_e(e,i[r],(u,f,_)=>function(y,T){return n.current.run(u,e,T,_)})}),Zone.__load_patch("EventTarget",(e,n,i)=>{(function Mt(e,n){n.patchEventPrototype(e,n)})(e,i),function Lt(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:r,TRUE_STR:c,FALSE_STR:u,ZONE_SYMBOL_PREFIX:f}=n.getGlobalObjects();for(let y=0;y<i.length;y++){const T=i[y],N=f+(T+u),O=f+(T+c);r[T]={},r[T][u]=N,r[T][c]=O}const _=e.EventTarget;_&&_.prototype&&n.patchEventTarget(e,[_&&_.prototype])}(e,i);const r=e.XMLHttpRequestEventTarget;r&&r.prototype&&i.patchEventTarget(e,[r.prototype])}),Zone.__load_patch("MutationObserver",(e,n,i)=>{Se("MutationObserver"),Se("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,i)=>{Se("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,i)=>{Se("FileReader")}),Zone.__load_patch("on_property",(e,n,i)=>{!function Ot(e,n){if(Le&&!qe||Zone[e.symbol("patchEvents")])return;const i="undefined"!=typeof WebSocket,r=n.__Zone_ignore_on_properties;if(xe){const f=window,_=function pt(){try{const e=Pe.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch(e){}return!1}()?[{target:f,ignoreProperties:["error"]}]:[];q(f,De.concat(["messageerror"]),r&&r.concat(_),se(f)),q(Document.prototype,De,r),void 0!==f.SVGElement&&q(f.SVGElement.prototype,De,r),q(Element.prototype,De,r),q(HTMLElement.prototype,De,r),q(HTMLMediaElement.prototype,wt,r),q(HTMLFrameSetElement.prototype,Ve.concat(rt),r),q(HTMLBodyElement.prototype,Ve.concat(rt),r),q(HTMLFrameElement.prototype,nt,r),q(HTMLIFrameElement.prototype,nt,r);const y=f.HTMLMarqueeElement;y&&q(y.prototype,Nt,r);const T=f.Worker;T&&q(T.prototype,St,r)}const c=n.XMLHttpRequest;c&&q(c.prototype,ot,r);const u=n.XMLHttpRequestEventTarget;u&&q(u&&u.prototype,ot,r),"undefined"!=typeof IDBIndex&&(q(IDBIndex.prototype,Ce,r),q(IDBRequest.prototype,Ce,r),q(IDBOpenDBRequest.prototype,Ce,r),q(IDBDatabase.prototype,Ce,r),q(IDBTransaction.prototype,Ce,r),q(IDBCursor.prototype,Ce,r)),i&&q(WebSocket.prototype,Zt,r)}(i,e)}),Zone.__load_patch("customElements",(e,n,i)=>{!function It(e,n){const{isBrowser:i,isMix:r}=n.getGlobalObjects();(i||r)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,i)}),Zone.__load_patch("XHR",(e,n)=>{!function y(T){const m=T.XMLHttpRequest;if(!m)return;const Z=m.prototype;let O=Z[we],G=Z[he];if(!O){const v=T.XMLHttpRequestEventTarget;if(v){const M=v.prototype;O=M[we],G=M[he]}}const F="readystatechange",E="scheduled";function d(v){const M=v.data,R=M.target;R[u]=!1,R[_]=!1;const ee=R[c];O||(O=R[we],G=R[he]),ee&&G.call(R,F,ee);const me=R[c]=()=>{if(R.readyState===R.DONE)if(!M.aborted&&R[u]&&v.state===E){const ce=R[n.__symbol__("loadfalse")];if(0!==R.status&&ce&&ce.length>0){const fe=v.invoke;v.invoke=function(){const U=R[n.__symbol__("loadfalse")];for(let I=0;I<U.length;I++)U[I]===v&&U.splice(I,1);!M.aborted&&v.state===E&&fe.call(v)},ce.push(v)}else v.invoke()}else!M.aborted&&!1===R[u]&&(R[_]=!0)};return O.call(R,F,me),R[i]||(R[i]=v),A.apply(R,M.args),R[u]=!0,v}function L(){}function V(v){const M=v.data;return M.aborted=!0,K.apply(M.target,M.args)}const j=_e(Z,"open",()=>function(v,M){return v[r]=0==M[2],v[f]=M[1],j.apply(v,M)}),S=x("fetchTaskAborting"),Y=x("fetchTaskScheduling"),A=_e(Z,"send",()=>function(v,M){if(!0===n.current[Y]||v[r])return A.apply(v,M);{const R={target:v,url:v[f],isPeriodic:!1,args:M,aborted:!1},ee=Ee("XMLHttpRequest.send",L,R,d,V);v&&!0===v[_]&&!R.aborted&&ee.state===E&&ee.invoke()}}),K=_e(Z,"abort",()=>function(v,M){const R=function N(v){return v[i]}(v);if(R&&"string"==typeof R.type){if(null==R.cancelFn||R.data&&R.data.aborted)return;R.zone.cancelTask(R)}else if(!0===n.current[S])return K.apply(v,M)})}(e);const i=x("xhrTask"),r=x("xhrSync"),c=x("xhrListener"),u=x("xhrScheduled"),f=x("xhrURL"),_=x("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function dt(e,n){const i=e.constructor.name;for(let r=0;r<n.length;r++){const c=n[r],u=e[c];if(u){if(!Ue(ae(e,c)))continue;e[c]=(_=>{const y=function(){return _.apply(this,He(arguments,i+"."+c))};return pe(y,_),y})(u)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function i(r){return function(c){tt(e,r).forEach(f=>{const _=e.PromiseRejectionEvent;if(_){const y=new _(r,{promise:c.promise,reason:c.rejection});f.invoke(y)}})}}e.PromiseRejectionEvent&&(n[x("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[x("rejectionHandledHandler")]=i("rejectionhandled"))})}},ge=>{ge(ge.s=435)}]);