const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shop-CXk7bd5M.js","assets/shop-page-B9LQPq9J.js","assets/index-BJSsplde.js","assets/index-oQBvHTCU.css","assets/sparkle-effect-PDTyNbY4.js","assets/crt-B7eijioC.css","assets/sparkle-effect-wrapper-CHcSNOKI.js","assets/register-BgLT4Yrn.js","assets/register-form-BBZLByW7.js","assets/register-form-DuAjJ8AV.css","assets/protected-route-BjuU0N0p.js","assets/blinking-screen-B_5Iv8dt.js","assets/blinking-eye-Bk14VTjG.js","assets/login-FwmpMONF.js","assets/_auth-CfIX3EPo.js","assets/_username-BLnFljdH.js","assets/loading-screen-8JQ4_KOD.js","assets/index-B0PogMcN.js","assets/index-DghiGF0g.css","assets/index-C0vcl4Ck.js","assets/cursor-registry-D3wzEHYW.js","assets/index-R2fxVG3J.js","assets/index-BHiHdlUe.css","assets/apps-BsABYoML.js","assets/user-DBijeGUt.js","assets/apps-CCxgUZZe.css"])))=>i.map(i=>d[i]);
var ip=n=>{
throw TypeError(n)
}
;
var hc=(n,r,i)=>r.has(n)||ip("Cannot "+i);
var S=(n,r,i)=>(hc(n,r,"read from private field"),i?i.call(n):r.get(n)),Ee=(n,r,i)=>r.has(n)?ip("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(n):r.set(n,i),he=(n,r,i,o)=>(hc(n,r,"write to private field"),o?o.call(n,i):r.set(n,i),i),Fe=(n,r,i)=>(hc(n,r,"access private method"),i);
var Za=(n,r,i,o)=>({
set _(l){
he(n,r,l,i)
}
,get _(){
return S(n,r,o)
}

}
);
function rg(n,r){
for(var i=0;
i<r.length;
i++){
const o=r[i];
if(typeof o!="string"&&!Array.isArray(o)){
for(const l in o)if(l!=="default"&&!(l in n)){
const c=Object.getOwnPropertyDescriptor(o,l);
c&&Object.defineProperty(n,l,c.get?c:{
enumerable:!0,get:()=>o[l]
}
)
}

}

}
return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{
value:"Module"
}
))
}
(function(){
const r=document.createElement("link").relList;
if(r&&r.supports&&r.supports("modulepreload"))return;
for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);
new MutationObserver(l=>{
for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)
}
).observe(document,{
childList:!0,subtree:!0
}
);
function i(l){
const c={

}
;
return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c
}
function o(l){
if(l.ep)return;
l.ep=!0;
const c=i(l);
fetch(l.href,c)
}

}
)();
function od(n){
return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n
}
var pc={
exports:{

}

}
,oo={

}
,mc={
exports:{

}

}
,De={

}
;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;
function ig(){
if(sp)return De;
sp=1;
var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),g=Symbol.iterator;
function x(k){
return k===null||typeof k!="object"?null:(k=g&&k[g]||k["@@iterator"],typeof k=="function"?k:null)
}
var L={
isMounted:function(){
return!1
}
,enqueueForceUpdate:function(){

}
,enqueueReplaceState:function(){

}
,enqueueSetState:function(){

}

}
,F=Object.assign,E={

}
;
function D(k,M,te){
this.props=k,this.context=M,this.refs=E,this.updater=te||L
}
D.prototype.isReactComponent={

}
,D.prototype.setState=function(k,M){
if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
this.updater.enqueueSetState(this,k,M,"setState")
}
,D.prototype.forceUpdate=function(k){
this.updater.enqueueForceUpdate(this,k,"forceUpdate")
}
;
function Z(){

}
Z.prototype=D.prototype;
function X(k,M,te){
this.props=k,this.context=M,this.refs=E,this.updater=te||L
}
var K=X.prototype=new Z;
K.constructor=X,F(K,D.prototype),K.isPureReactComponent=!0;
var ae=Array.isArray,we=Object.prototype.hasOwnProperty,$={
current:null
}
,oe={
key:!0,ref:!0,__self:!0,__source:!0
}
;
function b(k,M,te){
var ie,me={

}
,_e=null,Pe=null;
if(M!=null)for(ie in M.ref!==void 0&&(Pe=M.ref),M.key!==void 0&&(_e=""+M.key),M)we.call(M,ie)&&!oe.hasOwnProperty(ie)&&(me[ie]=M[ie]);
var ye=arguments.length-2;
if(ye===1)me.children=te;
else if(1<ye){
for(var Re=Array(ye),Ae=0;
Ae<ye;
Ae++)Re[Ae]=arguments[Ae+2];
me.children=Re
}
if(k&&k.defaultProps)for(ie in ye=k.defaultProps,ye)me[ie]===void 0&&(me[ie]=ye[ie]);
return{
$$typeof:n,type:k,key:_e,ref:Pe,props:me,_owner:$.current
}

}
function O(k,M){
return{
$$typeof:n,type:k.type,key:M,ref:k.ref,props:k.props,_owner:k._owner
}

}
function Q(k){
return typeof k=="object"&&k!==null&&k.$$typeof===n
}
function J(k){
var M={
"=":"=0",":":"=2"
}
;
return"$"+k.replace(/[=:]/g,function(te){
return M[te]
}
)
}
var ne=/\/+/g;
function se(k,M){
return typeof k=="object"&&k!==null&&k.key!=null?J(""+k.key):M.toString(36)
}
function ee(k,M,te,ie,me){
var _e=typeof k;
(_e==="undefined"||_e==="boolean")&&(k=null);
var Pe=!1;
if(k===null)Pe=!0;
else switch(_e){
case"string":case"number":Pe=!0;
break;
case"object":switch(k.$$typeof){
case n:case r:Pe=!0
}

}
if(Pe)return Pe=k,me=me(Pe),k=ie===""?"."+se(Pe,0):ie,ae(me)?(te="",k!=null&&(te=k.replace(ne,"$&/")+"/"),ee(me,M,te,"",function(Ae){
return Ae
}
)):me!=null&&(Q(me)&&(me=O(me,te+(!me.key||Pe&&Pe.key===me.key?"":(""+me.key).replace(ne,"$&/")+"/")+k)),M.push(me)),1;
if(Pe=0,ie=ie===""?".":ie+":",ae(k))for(var ye=0;
ye<k.length;
ye++){
_e=k[ye];
var Re=ie+se(_e,ye);
Pe+=ee(_e,M,te,Re,me)
}
else if(Re=x(k),typeof Re=="function")for(k=Re.call(k),ye=0;
!(_e=k.next()).done;
)_e=_e.value,Re=ie+se(_e,ye++),Pe+=ee(_e,M,te,Re,me);
else if(_e==="object")throw M=String(k),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {
"+Object.keys(k).join(", ")+"
}
":M)+"). If you meant to render a collection of children, use an array instead.");
return Pe
}
function B(k,M,te){
if(k==null)return k;
var ie=[],me=0;
return ee(k,ie,"","",function(_e){
return M.call(te,_e,me++)
}
),ie
}
function A(k){
if(k._status===-1){
var M=k._result;
M=M(),M.then(function(te){
(k._status===0||k._status===-1)&&(k._status=1,k._result=te)
}
,function(te){
(k._status===0||k._status===-1)&&(k._status=2,k._result=te)
}
),k._status===-1&&(k._status=0,k._result=M)
}
if(k._status===1)return k._result.default;
throw k._result
}
var z={
current:null
}
,I={
transition:null
}
,U={
ReactCurrentDispatcher:z,ReactCurrentBatchConfig:I,ReactCurrentOwner:$
}
;
function N(){
throw Error("act(...) is not supported in production builds of React.")
}
return De.Children={
map:B,forEach:function(k,M,te){
B(k,function(){
M.apply(this,arguments)
}
,te)
}
,count:function(k){
var M=0;
return B(k,function(){
M++
}
),M
}
,toArray:function(k){
return B(k,function(M){
return M
}
)||[]
}
,only:function(k){
if(!Q(k))throw Error("React.Children.only expected to receive a single React element child.");
return k
}

}
,De.Component=D,De.Fragment=i,De.Profiler=l,De.PureComponent=X,De.StrictMode=o,De.Suspense=y,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,De.act=N,De.cloneElement=function(k,M,te){
if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");
var ie=F({

}
,k.props),me=k.key,_e=k.ref,Pe=k._owner;
if(M!=null){
if(M.ref!==void 0&&(_e=M.ref,Pe=$.current),M.key!==void 0&&(me=""+M.key),k.type&&k.type.defaultProps)var ye=k.type.defaultProps;
for(Re in M)we.call(M,Re)&&!oe.hasOwnProperty(Re)&&(ie[Re]=M[Re]===void 0&&ye!==void 0?ye[Re]:M[Re])
}
var Re=arguments.length-2;
if(Re===1)ie.children=te;
else if(1<Re){
ye=Array(Re);
for(var Ae=0;
Ae<Re;
Ae++)ye[Ae]=arguments[Ae+2];
ie.children=ye
}
return{
$$typeof:n,type:k.type,key:me,ref:_e,props:ie,_owner:Pe
}

}
,De.createContext=function(k){
return k={
$$typeof:f,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null
}
,k.Provider={
$$typeof:c,_context:k
}
,k.Consumer=k
}
,De.createElement=b,De.createFactory=function(k){
var M=b.bind(null,k);
return M.type=k,M
}
,De.createRef=function(){
return{
current:null
}

}
,De.forwardRef=function(k){
return{
$$typeof:h,render:k
}

}
,De.isValidElement=Q,De.lazy=function(k){
return{
$$typeof:w,_payload:{
_status:-1,_result:k
}
,_init:A
}

}
,De.memo=function(k,M){
return{
$$typeof:m,type:k,compare:M===void 0?null:M
}

}
,De.startTransition=function(k){
var M=I.transition;
I.transition={

}
;
try{
k()
}
finally{
I.transition=M
}

}
,De.unstable_act=N,De.useCallback=function(k,M){
return z.current.useCallback(k,M)
}
,De.useContext=function(k){
return z.current.useContext(k)
}
,De.useDebugValue=function(){

}
,De.useDeferredValue=function(k){
return z.current.useDeferredValue(k)
}
,De.useEffect=function(k,M){
return z.current.useEffect(k,M)
}
,De.useId=function(){
return z.current.useId()
}
,De.useImperativeHandle=function(k,M,te){
return z.current.useImperativeHandle(k,M,te)
}
,De.useInsertionEffect=function(k,M){
return z.current.useInsertionEffect(k,M)
}
,De.useLayoutEffect=function(k,M){
return z.current.useLayoutEffect(k,M)
}
,De.useMemo=function(k,M){
return z.current.useMemo(k,M)
}
,De.useReducer=function(k,M,te){
return z.current.useReducer(k,M,te)
}
,De.useRef=function(k){
return z.current.useRef(k)
}
,De.useState=function(k){
return z.current.useState(k)
}
,De.useSyncExternalStore=function(k,M,te){
return z.current.useSyncExternalStore(k,M,te)
}
,De.useTransition=function(){
return z.current.useTransition()
}
,De.version="18.3.1",De
}
var op;
function Mo(){
return op||(op=1,mc.exports=ig()),mc.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;
function sg(){
if(ap)return oo;
ap=1;
var n=Mo(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={
key:!0,ref:!0,__self:!0,__source:!0
}
;
function f(h,y,m){
var w,g={

}
,x=null,L=null;
m!==void 0&&(x=""+m),y.key!==void 0&&(x=""+y.key),y.ref!==void 0&&(L=y.ref);
for(w in y)o.call(y,w)&&!c.hasOwnProperty(w)&&(g[w]=y[w]);
if(h&&h.defaultProps)for(w in y=h.defaultProps,y)g[w]===void 0&&(g[w]=y[w]);
return{
$$typeof:r,type:h,key:x,ref:L,props:g,_owner:l.current
}

}
return oo.Fragment=i,oo.jsx=f,oo.jsxs=f,oo
}
var lp;
function og(){
return lp||(lp=1,pc.exports=sg()),pc.exports
}
var fe=og(),re=Mo();
const br=od(re),dS=rg({
__proto__:null,default:br
}
,[re]);
var Ha={

}
,yc={
exports:{

}

}
,zt={

}
,vc={
exports:{

}

}
,gc={

}
;
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;
function ag(){
return up||(up=1,function(n){
function r(I,U){
var N=I.length;
I.push(U);
e:for(;
0<N;
){
var k=N-1>>>1,M=I[k];
if(0<l(M,U))I[k]=U,I[N]=M,N=k;
else break e
}

}
function i(I){
return I.length===0?null:I[0]
}
function o(I){
if(I.length===0)return null;
var U=I[0],N=I.pop();
if(N!==U){
I[0]=N;
e:for(var k=0,M=I.length,te=M>>>1;
k<te;
){
var ie=2*(k+1)-1,me=I[ie],_e=ie+1,Pe=I[_e];
if(0>l(me,N))_e<M&&0>l(Pe,me)?(I[k]=Pe,I[_e]=N,k=_e):(I[k]=me,I[ie]=N,k=ie);
else if(_e<M&&0>l(Pe,N))I[k]=Pe,I[_e]=N,k=_e;
else break e
}

}
return U
}
function l(I,U){
var N=I.sortIndex-U.sortIndex;
return N!==0?N:I.id-U.id
}
if(typeof performance=="object"&&typeof performance.now=="function"){
var c=performance;
n.unstable_now=function(){
return c.now()
}

}
else{
var f=Date,h=f.now();
n.unstable_now=function(){
return f.now()-h
}

}
var y=[],m=[],w=1,g=null,x=3,L=!1,F=!1,E=!1,D=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;
typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);
function K(I){
for(var U=i(m);
U!==null;
){
if(U.callback===null)o(m);
else if(U.startTime<=I)o(m),U.sortIndex=U.expirationTime,r(y,U);
else break;
U=i(m)
}

}
function ae(I){
if(E=!1,K(I),!F)if(i(y)!==null)F=!0,A(we);
else{
var U=i(m);
U!==null&&z(ae,U.startTime-I)
}

}
function we(I,U){
F=!1,E&&(E=!1,Z(b),b=-1),L=!0;
var N=x;
try{
for(K(U),g=i(y);
g!==null&&(!(g.expirationTime>U)||I&&!J());
){
var k=g.callback;
if(typeof k=="function"){
g.callback=null,x=g.priorityLevel;
var M=k(g.expirationTime<=U);
U=n.unstable_now(),typeof M=="function"?g.callback=M:g===i(y)&&o(y),K(U)
}
else o(y);
g=i(y)
}
if(g!==null)var te=!0;
else{
var ie=i(m);
ie!==null&&z(ae,ie.startTime-U),te=!1
}
return te
}
finally{
g=null,x=N,L=!1
}

}
var $=!1,oe=null,b=-1,O=5,Q=-1;
function J(){
return!(n.unstable_now()-Q<O)
}
function ne(){
if(oe!==null){
var I=n.unstable_now();
Q=I;
var U=!0;
try{
U=oe(!0,I)
}
finally{
U?se():($=!1,oe=null)
}

}
else $=!1
}
var se;
if(typeof X=="function")se=function(){
X(ne)
}
;
else if(typeof MessageChannel<"u"){
var ee=new MessageChannel,B=ee.port2;
ee.port1.onmessage=ne,se=function(){
B.postMessage(null)
}

}
else se=function(){
D(ne,0)
}
;
function A(I){
oe=I,$||($=!0,se())
}
function z(I,U){
b=D(function(){
I(n.unstable_now())
}
,U)
}
n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){
I.callback=null
}
,n.unstable_continueExecution=function(){
F||L||(F=!0,A(we))
}
,n.unstable_forceFrameRate=function(I){
0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<I?Math.floor(1e3/I):5
}
,n.unstable_getCurrentPriorityLevel=function(){
return x
}
,n.unstable_getFirstCallbackNode=function(){
return i(y)
}
,n.unstable_next=function(I){
switch(x){
case 1:case 2:case 3:var U=3;
break;
default:U=x
}
var N=x;
x=U;
try{
return I()
}
finally{
x=N
}

}
,n.unstable_pauseExecution=function(){

}
,n.unstable_requestPaint=function(){

}
,n.unstable_runWithPriority=function(I,U){
switch(I){
case 1:case 2:case 3:case 4:case 5:break;
default:I=3
}
var N=x;
x=I;
try{
return U()
}
finally{
x=N
}

}
,n.unstable_scheduleCallback=function(I,U,N){
var k=n.unstable_now();
switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?k+N:k):N=k,I){
case 1:var M=-1;
break;
case 2:M=250;
break;
case 5:M=1073741823;
break;
case 4:M=1e4;
break;
default:M=5e3
}
return M=N+M,I={
id:w++,callback:U,priorityLevel:I,startTime:N,expirationTime:M,sortIndex:-1
}
,N>k?(I.sortIndex=N,r(m,I),i(y)===null&&I===i(m)&&(E?(Z(b),b=-1):E=!0,z(ae,N-k))):(I.sortIndex=M,r(y,I),F||L||(F=!0,A(we))),I
}
,n.unstable_shouldYield=J,n.unstable_wrapCallback=function(I){
var U=x;
return function(){
var N=x;
x=U;
try{
return I.apply(this,arguments)
}
finally{
x=N
}

}

}

}
(gc)),gc
}
var cp;
function lg(){
return cp||(cp=1,vc.exports=ag()),vc.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;
function ug(){
if(dp)return zt;
dp=1;
var n=Mo(),r=lg();
function i(e){
for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;
s<arguments.length;
s++)t+="&args[]="+encodeURIComponent(arguments[s]);
return"Minified React error #"+e+";
 visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var o=new Set,l={

}
;
function c(e,t){
f(e,t),f(e+"Capture",t)
}
function f(e,t){
for(l[e]=t,e=0;
e<t.length;
e++)o.add(t[e])
}
var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={

}
,g={

}
;
function x(e){
return y.call(g,e)?!0:y.call(w,e)?!1:m.test(e)?g[e]=!0:(w[e]=!0,!1)
}
function L(e,t,s,a){
if(s!==null&&s.type===0)return!1;
switch(typeof t){
case"function":case"symbol":return!0;
case"boolean":return a?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");
default:return!1
}

}
function F(e,t,s,a){
if(t===null||typeof t>"u"||L(e,t,s,a))return!0;
if(a)return!1;
if(s!==null)switch(s.type){
case 3:return!t;
case 4:return t===!1;
case 5:return isNaN(t);
case 6:return isNaN(t)||1>t
}
return!1
}
function E(e,t,s,a,u,d,p){
this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=u,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=p
}
var D={

}
;
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){
D[e]=new E(e,0,!1,e,null,!1,!1)
}
),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){
var t=e[0];
D[t]=new E(t,1,!1,e[1],null,!1,!1)
}
),["contentEditable","draggable","spellCheck","value"].forEach(function(e){
D[e]=new E(e,2,!1,e.toLowerCase(),null,!1,!1)
}
),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){
D[e]=new E(e,2,!1,e,null,!1,!1)
}
),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){
D[e]=new E(e,3,!1,e.toLowerCase(),null,!1,!1)
}
),["checked","multiple","muted","selected"].forEach(function(e){
D[e]=new E(e,3,!0,e,null,!1,!1)
}
),["capture","download"].forEach(function(e){
D[e]=new E(e,4,!1,e,null,!1,!1)
}
),["cols","rows","size","span"].forEach(function(e){
D[e]=new E(e,6,!1,e,null,!1,!1)
}
),["rowSpan","start"].forEach(function(e){
D[e]=new E(e,5,!1,e.toLowerCase(),null,!1,!1)
}
);
var Z=/[\-:]([a-z])/g;
function X(e){
return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){
var t=e.replace(Z,X);
D[t]=new E(t,1,!1,e,null,!1,!1)
}
),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){
var t=e.replace(Z,X);
D[t]=new E(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
}
),["xml:base","xml:lang","xml:space"].forEach(function(e){
var t=e.replace(Z,X);
D[t]=new E(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
}
),["tabIndex","crossOrigin"].forEach(function(e){
D[e]=new E(e,1,!1,e.toLowerCase(),null,!1,!1)
}
),D.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){
D[e]=new E(e,1,!1,e.toLowerCase(),null,!0,!0)
}
);
function K(e,t,s,a){
var u=D.hasOwnProperty(t)?D[t]:null;
(u!==null?u.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F(t,s,u,a)&&(s=null),a||u===null?x(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):u.mustUseProperty?e[u.propertyName]=s===null?u.type===3?!1:"":s:(t=u.attributeName,a=u.attributeNamespace,s===null?e.removeAttribute(t):(u=u.type,s=u===3||u===4&&s===!0?"":""+s,a?e.setAttributeNS(a,t,s):e.setAttribute(t,s))))
}
var ae=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),$=Symbol.for("react.portal"),oe=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),J=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),I=Symbol.iterator;
function U(e){
return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)
}
var N=Object.assign,k;
function M(e){
if(k===void 0)try{
throw Error()
}
catch(s){
var t=s.stack.trim().match(/\n( *(at )?)/);
k=t&&t[1]||""
}
return`
`+k+e
}
var te=!1;
function ie(e,t){
if(!e||te)return"";
te=!0;
var s=Error.prepareStackTrace;
Error.prepareStackTrace=void 0;
try{
if(t)if(t=function(){
throw Error()
}
,Object.defineProperty(t.prototype,"props",{
set:function(){
throw Error()
}

}
),typeof Reflect=="object"&&Reflect.construct){
try{
Reflect.construct(t,[])
}
catch(j){
var a=j
}
Reflect.construct(e,[],t)
}
else{
try{
t.call()
}
catch(j){
a=j
}
e.call(t.prototype)
}
else{
try{
throw Error()
}
catch(j){
a=j
}
e()
}

}
catch(j){
if(j&&a&&typeof j.stack=="string"){
for(var u=j.stack.split(`
`),d=a.stack.split(`
`),p=u.length-1,_=d.length-1;
1<=p&&0<=_&&u[p]!==d[_];
)_--;
for(;
1<=p&&0<=_;
p--,_--)if(u[p]!==d[_]){
if(p!==1||_!==1)do if(p--,_--,0>_||u[p]!==d[_]){
var C=`
`+u[p].replace(" at new "," at ");
return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C
}
while(1<=p&&0<=_);
break
}

}

}
finally{
te=!1,Error.prepareStackTrace=s
}
return(e=e?e.displayName||e.name:"")?M(e):""
}
function me(e){
switch(e.tag){
case 5:return M(e.type);
case 16:return M("Lazy");
case 13:return M("Suspense");
case 19:return M("SuspenseList");
case 0:case 2:case 15:return e=ie(e.type,!1),e;
case 11:return e=ie(e.type.render,!1),e;
case 1:return e=ie(e.type,!0),e;
default:return""
}

}
function _e(e){
if(e==null)return null;
if(typeof e=="function")return e.displayName||e.name||null;
if(typeof e=="string")return e;
switch(e){
case oe:return"Fragment";
case $:return"Portal";
case O:return"Profiler";
case b:return"StrictMode";
case se:return"Suspense";
case ee:return"SuspenseList"
}
if(typeof e=="object")switch(e.$$typeof){
case J:return(e.displayName||"Context")+".Consumer";
case Q:return(e._context.displayName||"Context")+".Provider";
case ne:var t=e.render;
return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;
case B:return t=e.displayName||null,t!==null?t:_e(e.type)||"Memo";
case A:t=e._payload,e=e._init;
try{
return _e(e(t))
}
catch{

}

}
return null
}
function Pe(e){
var t=e.type;
switch(e.tag){
case 24:return"Cache";
case 9:return(t.displayName||"Context")+".Consumer";
case 10:return(t._context.displayName||"Context")+".Provider";
case 18:return"DehydratedFragment";
case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");
case 7:return"Fragment";
case 5:return t;
case 4:return"Portal";
case 3:return"Root";
case 6:return"Text";
case 16:return _e(t);
case 8:return t===b?"StrictMode":"Mode";
case 22:return"Offscreen";
case 12:return"Profiler";
case 21:return"Scope";
case 13:return"Suspense";
case 19:return"SuspenseList";
case 25:return"TracingMarker";
case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;
if(typeof t=="string")return t
}
return null
}
function ye(e){
switch(typeof e){
case"boolean":case"number":case"string":case"undefined":return e;
case"object":return e;
default:return""
}

}
function Re(e){
var t=e.type;
return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")
}
function Ae(e){
var t=Re(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];
if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){
var u=s.get,d=s.set;
return Object.defineProperty(e,t,{
configurable:!0,get:function(){
return u.call(this)
}
,set:function(p){
a=""+p,d.call(this,p)
}

}
),Object.defineProperty(e,t,{
enumerable:s.enumerable
}
),{
getValue:function(){
return a
}
,setValue:function(p){
a=""+p
}
,stopTracking:function(){
e._valueTracker=null,delete e[t]
}

}

}

}
function Je(e){
e._valueTracker||(e._valueTracker=Ae(e))
}
function _t(e){
if(!e)return!1;
var t=e._valueTracker;
if(!t)return!0;
var s=t.getValue(),a="";
return e&&(a=Re(e)?e.checked?"true":"false":e.value),e=a,e!==s?(t.setValue(e),!0):!1
}
function kt(e){
if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;
try{
return e.activeElement||e.body
}
catch{
return e.body
}

}
function Ft(e,t){
var s=t.checked;
return N({

}
,t,{
defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked
}
)
}
function rt(e,t){
var s=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;
s=ye(t.value!=null?t.value:s),e._wrapperState={
initialChecked:a,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null
}

}
function vt(e,t){
t=t.checked,t!=null&&K(e,"checked",t,!1)
}
function it(e,t){
vt(e,t);
var s=ye(t.value),a=t.type;
if(s!=null)a==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);
else if(a==="submit"||a==="reset"){
e.removeAttribute("value");
return
}
t.hasOwnProperty("value")?tr(e,t.type,s):t.hasOwnProperty("defaultValue")&&tr(e,t.type,ye(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)
}
function Mn(e,t,s){
if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){
var a=t.type;
if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;
t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t
}
s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)
}
function tr(e,t,s){
(t!=="number"||kt(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))
}
var _n=Array.isArray;
function Be(e,t,s,a){
if(e=e.options,t){
t={

}
;
for(var u=0;
u<s.length;
u++)t["$"+s[u]]=!0;
for(s=0;
s<e.length;
s++)u=t.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&a&&(e[s].defaultSelected=!0)
}
else{
for(s=""+ye(s),t=null,u=0;
u<e.length;
u++){
if(e[u].value===s){
e[u].selected=!0,a&&(e[u].defaultSelected=!0);
return
}
t!==null||e[u].disabled||(t=e[u])
}
t!==null&&(t.selected=!0)
}

}
function Ze(e,t){
if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));
return N({

}
,t,{
value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue
}
)
}
function kn(e,t){
var s=t.value;
if(s==null){
if(s=t.children,t=t.defaultValue,s!=null){
if(t!=null)throw Error(i(92));
if(_n(s)){
if(1<s.length)throw Error(i(93));
s=s[0]
}
t=s
}
t==null&&(t=""),s=t
}
e._wrapperState={
initialValue:ye(s)
}

}
function ks(e,t){
var s=ye(t.value),a=ye(t.defaultValue);
s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),a!=null&&(e.defaultValue=""+a)
}
function No(e){
var t=e.textContent;
t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)
}
function Do(e){
switch(e){
case"svg":return"http://www.w3.org/2000/svg";
case"math":return"http://www.w3.org/1998/Math/MathML";
default:return"http://www.w3.org/1999/xhtml"
}

}
function xl(e,t){
return e==null||e==="http://www.w3.org/1999/xhtml"?Do(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e
}
var Ao,vd=function(e){
return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,a,u){
MSApp.execUnsafeLocalFunction(function(){
return e(t,s,a,u)
}
)
}
:e
}
(function(e,t){
if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;
else{
for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ao.firstChild;
e.firstChild;
)e.removeChild(e.firstChild);
for(;
t.firstChild;
)e.appendChild(t.firstChild)
}

}
);
function Ss(e,t){
if(t){
var s=e.firstChild;
if(s&&s===e.lastChild&&s.nodeType===3){
s.nodeValue=t;
return
}

}
e.textContent=t
}
var Cs={
animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0
}
,ay=["Webkit","ms","Moz","O"];
Object.keys(Cs).forEach(function(e){
ay.forEach(function(t){
t=t+e.charAt(0).toUpperCase()+e.substring(1),Cs[t]=Cs[e]
}
)
}
);
function gd(e,t,s){
return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||Cs.hasOwnProperty(e)&&Cs[e]?(""+t).trim():t+"px"
}
function wd(e,t){
e=e.style;
for(var s in t)if(t.hasOwnProperty(s)){
var a=s.indexOf("--")===0,u=gd(s,t[s],a);
s==="float"&&(s="cssFloat"),a?e.setProperty(s,u):e[s]=u
}

}
var ly=N({
menuitem:!0
}
,{
area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0
}
);
function Pl(e,t){
if(t){
if(ly[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));
if(t.dangerouslySetInnerHTML!=null){
if(t.children!=null)throw Error(i(60));
if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))
}
if(t.style!=null&&typeof t.style!="object")throw Error(i(62))
}

}
function Rl(e,t){
if(e.indexOf("-")===-1)return typeof t.is=="string";
switch(e){
case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;
default:return!0
}

}
var El=null;
function Tl(e){
return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e
}
var Il=null,ki=null,Si=null;
function _d(e){
if(e=Qs(e)){
if(typeof Il!="function")throw Error(i(280));
var t=e.stateNode;
t&&(t=aa(t),Il(e.stateNode,e.type,t))
}

}
function kd(e){
ki?Si?Si.push(e):Si=[e]:ki=e
}
function Sd(){
if(ki){
var e=ki,t=Si;
if(Si=ki=null,_d(e),t)for(e=0;
e<t.length;
e++)_d(t[e])
}

}
function Cd(e,t){
return e(t)
}
function xd(){

}
var Ll=!1;
function Pd(e,t,s){
if(Ll)return e(t,s);
Ll=!0;
try{
return Cd(e,t,s)
}
finally{
Ll=!1,(ki!==null||Si!==null)&&(xd(),Sd())
}

}
function xs(e,t){
var s=e.stateNode;
if(s===null)return null;
var a=aa(s);
if(a===null)return null;
s=a[t];
e:switch(t){
case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;
break e;
default:e=!1
}
if(e)return null;
if(s&&typeof s!="function")throw Error(i(231,t,typeof s));
return s
}
var Ol=!1;
if(h)try{
var Ps={

}
;
Object.defineProperty(Ps,"passive",{
get:function(){
Ol=!0
}

}
),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)
}
catch{
Ol=!1
}
function uy(e,t,s,a,u,d,p,_,C){
var j=Array.prototype.slice.call(arguments,3);
try{
t.apply(s,j)
}
catch(q){
this.onError(q)
}

}
var Rs=!1,Bo=null,Uo=!1,jl=null,cy={
onError:function(e){
Rs=!0,Bo=e
}

}
;
function dy(e,t,s,a,u,d,p,_,C){
Rs=!1,Bo=null,uy.apply(cy,arguments)
}
function fy(e,t,s,a,u,d,p,_,C){
if(dy.apply(this,arguments),Rs){
if(Rs){
var j=Bo;
Rs=!1,Bo=null
}
else throw Error(i(198));
Uo||(Uo=!0,jl=j)
}

}
function Br(e){
var t=e,s=e;
if(e.alternate)for(;
t.return;
)t=t.return;
else{
e=t;
do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;
while(e)
}
return t.tag===3?s:null
}
function Rd(e){
if(e.tag===13){
var t=e.memoizedState;
if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated
}
return null
}
function Ed(e){
if(Br(e)!==e)throw Error(i(188))
}
function hy(e){
var t=e.alternate;
if(!t){
if(t=Br(e),t===null)throw Error(i(188));
return t!==e?null:e
}
for(var s=e,a=t;
;
){
var u=s.return;
if(u===null)break;
var d=u.alternate;
if(d===null){
if(a=u.return,a!==null){
s=a;
continue
}
break
}
if(u.child===d.child){
for(d=u.child;
d;
){
if(d===s)return Ed(u),e;
if(d===a)return Ed(u),t;
d=d.sibling
}
throw Error(i(188))
}
if(s.return!==a.return)s=u,a=d;
else{
for(var p=!1,_=u.child;
_;
){
if(_===s){
p=!0,s=u,a=d;
break
}
if(_===a){
p=!0,a=u,s=d;
break
}
_=_.sibling
}
if(!p){
for(_=d.child;
_;
){
if(_===s){
p=!0,s=d,a=u;
break
}
if(_===a){
p=!0,a=d,s=u;
break
}
_=_.sibling
}
if(!p)throw Error(i(189))
}

}
if(s.alternate!==a)throw Error(i(190))
}
if(s.tag!==3)throw Error(i(188));
return s.stateNode.current===s?e:t
}
function Td(e){
return e=hy(e),e!==null?Id(e):null
}
function Id(e){
if(e.tag===5||e.tag===6)return e;
for(e=e.child;
e!==null;
){
var t=Id(e);
if(t!==null)return t;
e=e.sibling
}
return null
}
var Ld=r.unstable_scheduleCallback,Od=r.unstable_cancelCallback,py=r.unstable_shouldYield,my=r.unstable_requestPaint,st=r.unstable_now,yy=r.unstable_getCurrentPriorityLevel,bl=r.unstable_ImmediatePriority,jd=r.unstable_UserBlockingPriority,zo=r.unstable_NormalPriority,vy=r.unstable_LowPriority,bd=r.unstable_IdlePriority,$o=null,Sn=null;
function gy(e){
if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{
Sn.onCommitFiberRoot($o,e,void 0,(e.current.flags&128)===128)
}
catch{

}

}
var on=Math.clz32?Math.clz32:ky,wy=Math.log,_y=Math.LN2;
function ky(e){
return e>>>=0,e===0?32:31-(wy(e)/_y|0)|0
}
var Vo=64,qo=4194304;
function Es(e){
switch(e&-e){
case 1:return 1;
case 2:return 2;
case 4:return 4;
case 8:return 8;
case 16:return 16;
case 32:return 32;
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;
case 134217728:return 134217728;
case 268435456:return 268435456;
case 536870912:return 536870912;
case 1073741824:return 1073741824;
default:return e
}

}
function Qo(e,t){
var s=e.pendingLanes;
if(s===0)return 0;
var a=0,u=e.suspendedLanes,d=e.pingedLanes,p=s&268435455;
if(p!==0){
var _=p&~u;
_!==0?a=Es(_):(d&=p,d!==0&&(a=Es(d)))
}
else p=s&~u,p!==0?a=Es(p):d!==0&&(a=Es(d));
if(a===0)return 0;
if(t!==0&&t!==a&&(t&u)===0&&(u=a&-a,d=t&-t,u>=d||u===16&&(d&4194240)!==0))return t;
if((a&4)!==0&&(a|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;
0<t;
)s=31-on(t),u=1<<s,a|=e[s],t&=~u;
return a
}
function Sy(e,t){
switch(e){
case 1:case 2:case 4:return t+250;
case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;
case 134217728:case 268435456:case 536870912:case 1073741824:return-1;
default:return-1
}

}
function Cy(e,t){
for(var s=e.suspendedLanes,a=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes;
0<d;
){
var p=31-on(d),_=1<<p,C=u[p];
C===-1?((_&s)===0||(_&a)!==0)&&(u[p]=Sy(_,t)):C<=t&&(e.expiredLanes|=_),d&=~_
}

}
function Ml(e){
return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0
}
function Md(){
var e=Vo;
return Vo<<=1,(Vo&4194240)===0&&(Vo=64),e
}
function Fl(e){
for(var t=[],s=0;
31>s;
s++)t.push(e);
return t
}
function Ts(e,t,s){
e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-on(t),e[t]=s
}
function xy(e,t){
var s=e.pendingLanes&~t;
e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;
var a=e.eventTimes;
for(e=e.expirationTimes;
0<s;
){
var u=31-on(s),d=1<<u;
t[u]=0,a[u]=-1,e[u]=-1,s&=~d
}

}
function Nl(e,t){
var s=e.entangledLanes|=t;
for(e=e.entanglements;
s;
){
var a=31-on(s),u=1<<a;
u&t|e[a]&t&&(e[a]|=t),s&=~u
}

}
var Qe=0;
function Fd(e){
return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1
}
var Nd,Dl,Dd,Ad,Bd,Al=!1,Zo=[],nr=null,rr=null,ir=null,Is=new Map,Ls=new Map,sr=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ud(e,t){
switch(e){
case"focusin":case"focusout":nr=null;
break;
case"dragenter":case"dragleave":rr=null;
break;
case"mouseover":case"mouseout":ir=null;
break;
case"pointerover":case"pointerout":Is.delete(t.pointerId);
break;
case"gotpointercapture":case"lostpointercapture":Ls.delete(t.pointerId)
}

}
function Os(e,t,s,a,u,d){
return e===null||e.nativeEvent!==d?(e={
blockedOn:t,domEventName:s,eventSystemFlags:a,nativeEvent:d,targetContainers:[u]
}
,t!==null&&(t=Qs(t),t!==null&&Dl(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)
}
function Ry(e,t,s,a,u){
switch(t){
case"focusin":return nr=Os(nr,e,t,s,a,u),!0;
case"dragenter":return rr=Os(rr,e,t,s,a,u),!0;
case"mouseover":return ir=Os(ir,e,t,s,a,u),!0;
case"pointerover":var d=u.pointerId;
return Is.set(d,Os(Is.get(d)||null,e,t,s,a,u)),!0;
case"gotpointercapture":return d=u.pointerId,Ls.set(d,Os(Ls.get(d)||null,e,t,s,a,u)),!0
}
return!1
}
function zd(e){
var t=Ur(e.target);
if(t!==null){
var s=Br(t);
if(s!==null){
if(t=s.tag,t===13){
if(t=Rd(s),t!==null){
e.blockedOn=t,Bd(e.priority,function(){
Dd(s)
}
);
return
}

}
else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){
e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;
return
}

}

}
e.blockedOn=null
}
function Ho(e){
if(e.blockedOn!==null)return!1;
for(var t=e.targetContainers;
0<t.length;
){
var s=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);
if(s===null){
s=e.nativeEvent;
var a=new s.constructor(s.type,s);
El=a,s.target.dispatchEvent(a),El=null
}
else return t=Qs(s),t!==null&&Dl(t),e.blockedOn=s,!1;
t.shift()
}
return!0
}
function $d(e,t,s){
Ho(e)&&s.delete(t)
}
function Ey(){
Al=!1,nr!==null&&Ho(nr)&&(nr=null),rr!==null&&Ho(rr)&&(rr=null),ir!==null&&Ho(ir)&&(ir=null),Is.forEach($d),Ls.forEach($d)
}
function js(e,t){
e.blockedOn===t&&(e.blockedOn=null,Al||(Al=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ey)))
}
function bs(e){
function t(u){
return js(u,e)
}
if(0<Zo.length){
js(Zo[0],e);
for(var s=1;
s<Zo.length;
s++){
var a=Zo[s];
a.blockedOn===e&&(a.blockedOn=null)
}

}
for(nr!==null&&js(nr,e),rr!==null&&js(rr,e),ir!==null&&js(ir,e),Is.forEach(t),Ls.forEach(t),s=0;
s<sr.length;
s++)a=sr[s],a.blockedOn===e&&(a.blockedOn=null);
for(;
0<sr.length&&(s=sr[0],s.blockedOn===null);
)zd(s),s.blockedOn===null&&sr.shift()
}
var Ci=ae.ReactCurrentBatchConfig,Wo=!0;
function Ty(e,t,s,a){
var u=Qe,d=Ci.transition;
Ci.transition=null;
try{
Qe=1,Bl(e,t,s,a)
}
finally{
Qe=u,Ci.transition=d
}

}
function Iy(e,t,s,a){
var u=Qe,d=Ci.transition;
Ci.transition=null;
try{
Qe=4,Bl(e,t,s,a)
}
finally{
Qe=u,Ci.transition=d
}

}
function Bl(e,t,s,a){
if(Wo){
var u=Ul(e,t,s,a);
if(u===null)ru(e,t,a,Ko,s),Ud(e,a);
else if(Ry(u,e,t,s,a))a.stopPropagation();
else if(Ud(e,a),t&4&&-1<Py.indexOf(e)){
for(;
u!==null;
){
var d=Qs(u);
if(d!==null&&Nd(d),d=Ul(e,t,s,a),d===null&&ru(e,t,a,Ko,s),d===u)break;
u=d
}
u!==null&&a.stopPropagation()
}
else ru(e,t,a,null,s)
}

}
var Ko=null;
function Ul(e,t,s,a){
if(Ko=null,e=Tl(a),e=Ur(e),e!==null)if(t=Br(e),t===null)e=null;
else if(s=t.tag,s===13){
if(e=Rd(t),e!==null)return e;
e=null
}
else if(s===3){
if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;
e=null
}
else t!==e&&(e=null);
return Ko=e,null
}
function Vd(e){
switch(e){
case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;
case"message":switch(yy()){
case bl:return 1;
case jd:return 4;
case zo:case vy:return 16;
case bd:return 536870912;
default:return 16
}
default:return 16
}

}
var or=null,zl=null,Go=null;
function qd(){
if(Go)return Go;
var e,t=zl,s=t.length,a,u="value"in or?or.value:or.textContent,d=u.length;
for(e=0;
e<s&&t[e]===u[e];
e++);
var p=s-e;
for(a=1;
a<=p&&t[s-a]===u[d-a];
a++);
return Go=u.slice(e,1<a?1-a:void 0)
}
function Jo(e){
var t=e.keyCode;
return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0
}
function Yo(){
return!0
}
function Qd(){
return!1
}
function Qt(e){
function t(s,a,u,d,p){
this._reactName=s,this._targetInst=u,this.type=a,this.nativeEvent=d,this.target=p,this.currentTarget=null;
for(var _ in e)e.hasOwnProperty(_)&&(s=e[_],this[_]=s?s(d):d[_]);
return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Yo:Qd,this.isPropagationStopped=Qd,this
}
return N(t.prototype,{
preventDefault:function(){
this.defaultPrevented=!0;
var s=this.nativeEvent;
s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Yo)
}
,stopPropagation:function(){
var s=this.nativeEvent;
s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Yo)
}
,persist:function(){

}
,isPersistent:Yo
}
),t
}
var xi={
eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){
return e.timeStamp||Date.now()
}
,defaultPrevented:0,isTrusted:0
}
,$l=Qt(xi),Ms=N({

}
,xi,{
view:0,detail:0
}
),Ly=Qt(Ms),Vl,ql,Fs,Xo=N({

}
,Ms,{
screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(e){
return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget
}
,movementX:function(e){
return"movementX"in e?e.movementX:(e!==Fs&&(Fs&&e.type==="mousemove"?(Vl=e.screenX-Fs.screenX,ql=e.screenY-Fs.screenY):ql=Vl=0,Fs=e),Vl)
}
,movementY:function(e){
return"movementY"in e?e.movementY:ql
}

}
),Zd=Qt(Xo),Oy=N({

}
,Xo,{
dataTransfer:0
}
),jy=Qt(Oy),by=N({

}
,Ms,{
relatedTarget:0
}
),Ql=Qt(by),My=N({

}
,xi,{
animationName:0,elapsedTime:0,pseudoElement:0
}
),Fy=Qt(My),Ny=N({

}
,xi,{
clipboardData:function(e){
return"clipboardData"in e?e.clipboardData:window.clipboardData
}

}
),Dy=Qt(Ny),Ay=N({

}
,xi,{
data:0
}
),Hd=Qt(Ay),By={
Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"
}
,Uy={
8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"
}
,zy={
Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"
}
;
function $y(e){
var t=this.nativeEvent;
return t.getModifierState?t.getModifierState(e):(e=zy[e])?!!t[e]:!1
}
function Zl(){
return $y
}
var Vy=N({

}
,Ms,{
key:function(e){
if(e.key){
var t=By[e.key]||e.key;
if(t!=="Unidentified")return t
}
return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uy[e.keyCode]||"Unidentified":""
}
,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(e){
return e.type==="keypress"?Jo(e):0
}
,keyCode:function(e){
return e.type==="keydown"||e.type==="keyup"?e.keyCode:0
}
,which:function(e){
return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0
}

}
),qy=Qt(Vy),Qy=N({

}
,Xo,{
pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0
}
),Wd=Qt(Qy),Zy=N({

}
,Ms,{
touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl
}
),Hy=Qt(Zy),Wy=N({

}
,xi,{
propertyName:0,elapsedTime:0,pseudoElement:0
}
),Ky=Qt(Wy),Gy=N({

}
,Xo,{
deltaX:function(e){
return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0
}
,deltaY:function(e){
return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0
}
,deltaZ:0,deltaMode:0
}
),Jy=Qt(Gy),Yy=[9,13,27,32],Hl=h&&"CompositionEvent"in window,Ns=null;
h&&"documentMode"in document&&(Ns=document.documentMode);
var Xy=h&&"TextEvent"in window&&!Ns,Kd=h&&(!Hl||Ns&&8<Ns&&11>=Ns),Gd=" ",Jd=!1;
function Yd(e,t){
switch(e){
case"keyup":return Yy.indexOf(t.keyCode)!==-1;
case"keydown":return t.keyCode!==229;
case"keypress":case"mousedown":case"focusout":return!0;
default:return!1
}

}
function Xd(e){
return e=e.detail,typeof e=="object"&&"data"in e?e.data:null
}
var Pi=!1;
function ev(e,t){
switch(e){
case"compositionend":return Xd(t);
case"keypress":return t.which!==32?null:(Jd=!0,Gd);
case"textInput":return e=t.data,e===Gd&&Jd?null:e;
default:return null
}

}
function tv(e,t){
if(Pi)return e==="compositionend"||!Hl&&Yd(e,t)?(e=qd(),Go=zl=or=null,Pi=!1,e):null;
switch(e){
case"paste":return null;
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){
if(t.char&&1<t.char.length)return t.char;
if(t.which)return String.fromCharCode(t.which)
}
return null;
case"compositionend":return Kd&&t.locale!=="ko"?null:t.data;
default:return null
}

}
var nv={
color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0
}
;
function ef(e){
var t=e&&e.nodeName&&e.nodeName.toLowerCase();
return t==="input"?!!nv[e.type]:t==="textarea"
}
function tf(e,t,s,a){
kd(a),t=ia(t,"onChange"),0<t.length&&(s=new $l("onChange","change",null,s,a),e.push({
event:s,listeners:t
}
))
}
var Ds=null,As=null;
function rv(e){
_f(e,0)
}
function ea(e){
var t=Li(e);
if(_t(t))return e
}
function iv(e,t){
if(e==="change")return t
}
var nf=!1;
if(h){
var Wl;
if(h){
var Kl="oninput"in document;
if(!Kl){
var rf=document.createElement("div");
rf.setAttribute("oninput","return;
"),Kl=typeof rf.oninput=="function"
}
Wl=Kl
}
else Wl=!1;
nf=Wl&&(!document.documentMode||9<document.documentMode)
}
function sf(){
Ds&&(Ds.detachEvent("onpropertychange",of),As=Ds=null)
}
function of(e){
if(e.propertyName==="value"&&ea(As)){
var t=[];
tf(t,As,e,Tl(e)),Pd(rv,t)
}

}
function sv(e,t,s){
e==="focusin"?(sf(),Ds=t,As=s,Ds.attachEvent("onpropertychange",of)):e==="focusout"&&sf()
}
function ov(e){
if(e==="selectionchange"||e==="keyup"||e==="keydown")return ea(As)
}
function av(e,t){
if(e==="click")return ea(t)
}
function lv(e,t){
if(e==="input"||e==="change")return ea(t)
}
function uv(e,t){
return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t
}
var an=typeof Object.is=="function"?Object.is:uv;
function Bs(e,t){
if(an(e,t))return!0;
if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;
var s=Object.keys(e),a=Object.keys(t);
if(s.length!==a.length)return!1;
for(a=0;
a<s.length;
a++){
var u=s[a];
if(!y.call(t,u)||!an(e[u],t[u]))return!1
}
return!0
}
function af(e){
for(;
e&&e.firstChild;
)e=e.firstChild;
return e
}
function lf(e,t){
var s=af(e);
e=0;
for(var a;
s;
){
if(s.nodeType===3){
if(a=e+s.textContent.length,e<=t&&a>=t)return{
node:s,offset:t-e
}
;
e=a
}
e:{
for(;
s;
){
if(s.nextSibling){
s=s.nextSibling;
break e
}
s=s.parentNode
}
s=void 0
}
s=af(s)
}

}
function uf(e,t){
return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1
}
function cf(){
for(var e=window,t=kt();
t instanceof e.HTMLIFrameElement;
){
try{
var s=typeof t.contentWindow.location.href=="string"
}
catch{
s=!1
}
if(s)e=t.contentWindow;
else break;
t=kt(e.document)
}
return t
}
function Gl(e){
var t=e&&e.nodeName&&e.nodeName.toLowerCase();
return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")
}
function cv(e){
var t=cf(),s=e.focusedElem,a=e.selectionRange;
if(t!==s&&s&&s.ownerDocument&&uf(s.ownerDocument.documentElement,s)){
if(a!==null&&Gl(s)){
if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);
else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){
e=e.getSelection();
var u=s.textContent.length,d=Math.min(a.start,u);
a=a.end===void 0?d:Math.min(a.end,u),!e.extend&&d>a&&(u=a,a=d,d=u),u=lf(s,d);
var p=lf(s,a);
u&&p&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),d>a?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))
}

}
for(t=[],e=s;
e=e.parentNode;
)e.nodeType===1&&t.push({
element:e,left:e.scrollLeft,top:e.scrollTop
}
);
for(typeof s.focus=="function"&&s.focus(),s=0;
s<t.length;
s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top
}

}
var dv=h&&"documentMode"in document&&11>=document.documentMode,Ri=null,Jl=null,Us=null,Yl=!1;
function df(e,t,s){
var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;
Yl||Ri==null||Ri!==kt(a)||(a=Ri,"selectionStart"in a&&Gl(a)?a={
start:a.selectionStart,end:a.selectionEnd
}
:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={
anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset
}
),Us&&Bs(Us,a)||(Us=a,a=ia(Jl,"onSelect"),0<a.length&&(t=new $l("onSelect","select",null,t,s),e.push({
event:t,listeners:a
}
),t.target=Ri)))
}
function ta(e,t){
var s={

}
;
return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s
}
var Ei={
animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")
}
,Xl={

}
,ff={

}
;
h&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);
function na(e){
if(Xl[e])return Xl[e];
if(!Ei[e])return e;
var t=Ei[e],s;
for(s in t)if(t.hasOwnProperty(s)&&s in ff)return Xl[e]=t[s];
return e
}
var hf=na("animationend"),pf=na("animationiteration"),mf=na("animationstart"),yf=na("transitionend"),vf=new Map,gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ar(e,t){
vf.set(e,t),c(t,[e])
}
for(var eu=0;
eu<gf.length;
eu++){
var tu=gf[eu],fv=tu.toLowerCase(),hv=tu[0].toUpperCase()+tu.slice(1);
ar(fv,"on"+hv)
}
ar(hf,"onAnimationEnd"),ar(pf,"onAnimationIteration"),ar(mf,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(yf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pv=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));
function wf(e,t,s){
var a=e.type||"unknown-event";
e.currentTarget=s,fy(a,t,void 0,e),e.currentTarget=null
}
function _f(e,t){
t=(t&4)!==0;
for(var s=0;
s<e.length;
s++){
var a=e[s],u=a.event;
a=a.listeners;
e:{
var d=void 0;
if(t)for(var p=a.length-1;
0<=p;
p--){
var _=a[p],C=_.instance,j=_.currentTarget;
if(_=_.listener,C!==d&&u.isPropagationStopped())break e;
wf(u,_,j),d=C
}
else for(p=0;
p<a.length;
p++){
if(_=a[p],C=_.instance,j=_.currentTarget,_=_.listener,C!==d&&u.isPropagationStopped())break e;
wf(u,_,j),d=C
}

}

}
if(Uo)throw e=jl,Uo=!1,jl=null,e
}
function We(e,t){
var s=t[uu];
s===void 0&&(s=t[uu]=new Set);
var a=e+"__bubble";
s.has(a)||(kf(t,e,2,!1),s.add(a))
}
function nu(e,t,s){
var a=0;
t&&(a|=4),kf(s,e,a,t)
}
var ra="_reactListening"+Math.random().toString(36).slice(2);
function $s(e){
if(!e[ra]){
e[ra]=!0,o.forEach(function(s){
s!=="selectionchange"&&(pv.has(s)||nu(s,!1,e),nu(s,!0,e))
}
);
var t=e.nodeType===9?e:e.ownerDocument;
t===null||t[ra]||(t[ra]=!0,nu("selectionchange",!1,t))
}

}
function kf(e,t,s,a){
switch(Vd(t)){
case 1:var u=Ty;
break;
case 4:u=Iy;
break;
default:u=Bl
}
s=u.bind(null,t,s,e),u=void 0,!Ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),a?u!==void 0?e.addEventListener(t,s,{
capture:!0,passive:u
}
):e.addEventListener(t,s,!0):u!==void 0?e.addEventListener(t,s,{
passive:u
}
):e.addEventListener(t,s,!1)
}
function ru(e,t,s,a,u){
var d=a;
if((t&1)===0&&(t&2)===0&&a!==null)e:for(;
;
){
if(a===null)return;
var p=a.tag;
if(p===3||p===4){
var _=a.stateNode.containerInfo;
if(_===u||_.nodeType===8&&_.parentNode===u)break;
if(p===4)for(p=a.return;
p!==null;
){
var C=p.tag;
if((C===3||C===4)&&(C=p.stateNode.containerInfo,C===u||C.nodeType===8&&C.parentNode===u))return;
p=p.return
}
for(;
_!==null;
){
if(p=Ur(_),p===null)return;
if(C=p.tag,C===5||C===6){
a=d=p;
continue e
}
_=_.parentNode
}

}
a=a.return
}
Pd(function(){
var j=d,q=Tl(s),H=[];
e:{
var V=vf.get(e);
if(V!==void 0){
var de=$l,ge=e;
switch(e){
case"keypress":if(Jo(s)===0)break e;
case"keydown":case"keyup":de=qy;
break;
case"focusin":ge="focus",de=Ql;
break;
case"focusout":ge="blur",de=Ql;
break;
case"beforeblur":case"afterblur":de=Ql;
break;
case"click":if(s.button===2)break e;
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Zd;
break;
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=jy;
break;
case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Hy;
break;
case hf:case pf:case mf:de=Fy;
break;
case yf:de=Ky;
break;
case"scroll":de=Ly;
break;
case"wheel":de=Jy;
break;
case"copy":case"cut":case"paste":de=Dy;
break;
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Wd
}
var ke=(t&4)!==0,ot=!ke&&e==="scroll",R=ke?V!==null?V+"Capture":null:V;
ke=[];
for(var P=j,T;
P!==null;
){
T=P;
var Y=T.stateNode;
if(T.tag===5&&Y!==null&&(T=Y,R!==null&&(Y=xs(P,R),Y!=null&&ke.push(Vs(P,Y,T)))),ot)break;
P=P.return
}
0<ke.length&&(V=new de(V,ge,null,s,q),H.push({
event:V,listeners:ke
}
))
}

}
if((t&7)===0){
e:{
if(V=e==="mouseover"||e==="pointerover",de=e==="mouseout"||e==="pointerout",V&&s!==El&&(ge=s.relatedTarget||s.fromElement)&&(Ur(ge)||ge[Fn]))break e;
if((de||V)&&(V=q.window===q?q:(V=q.ownerDocument)?V.defaultView||V.parentWindow:window,de?(ge=s.relatedTarget||s.toElement,de=j,ge=ge?Ur(ge):null,ge!==null&&(ot=Br(ge),ge!==ot||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(de=null,ge=j),de!==ge)){
if(ke=Zd,Y="onMouseLeave",R="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(ke=Wd,Y="onPointerLeave",R="onPointerEnter",P="pointer"),ot=de==null?V:Li(de),T=ge==null?V:Li(ge),V=new ke(Y,P+"leave",de,s,q),V.target=ot,V.relatedTarget=T,Y=null,Ur(q)===j&&(ke=new ke(R,P+"enter",ge,s,q),ke.target=T,ke.relatedTarget=ot,Y=ke),ot=Y,de&&ge)t:{
for(ke=de,R=ge,P=0,T=ke;
T;
T=Ti(T))P++;
for(T=0,Y=R;
Y;
Y=Ti(Y))T++;
for(;
0<P-T;
)ke=Ti(ke),P--;
for(;
0<T-P;
)R=Ti(R),T--;
for(;
P--;
){
if(ke===R||R!==null&&ke===R.alternate)break t;
ke=Ti(ke),R=Ti(R)
}
ke=null
}
else ke=null;
de!==null&&Sf(H,V,de,ke,!1),ge!==null&&ot!==null&&Sf(H,ot,ge,ke,!0)
}

}
e:{
if(V=j?Li(j):window,de=V.nodeName&&V.nodeName.toLowerCase(),de==="select"||de==="input"&&V.type==="file")var Se=iv;
else if(ef(V))if(nf)Se=lv;
else{
Se=ov;
var Ie=sv
}
else(de=V.nodeName)&&de.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(Se=av);
if(Se&&(Se=Se(e,j))){
tf(H,Se,s,q);
break e
}
Ie&&Ie(e,V,j),e==="focusout"&&(Ie=V._wrapperState)&&Ie.controlled&&V.type==="number"&&tr(V,"number",V.value)
}
switch(Ie=j?Li(j):window,e){
case"focusin":(ef(Ie)||Ie.contentEditable==="true")&&(Ri=Ie,Jl=j,Us=null);
break;
case"focusout":Us=Jl=Ri=null;
break;
case"mousedown":Yl=!0;
break;
case"contextmenu":case"mouseup":case"dragend":Yl=!1,df(H,s,q);
break;
case"selectionchange":if(dv)break;
case"keydown":case"keyup":df(H,s,q)
}
var Le;
if(Hl)e:{
switch(e){
case"compositionstart":var be="onCompositionStart";
break e;
case"compositionend":be="onCompositionEnd";
break e;
case"compositionupdate":be="onCompositionUpdate";
break e
}
be=void 0
}
else Pi?Yd(e,s)&&(be="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(be="onCompositionStart");
be&&(Kd&&s.locale!=="ko"&&(Pi||be!=="onCompositionStart"?be==="onCompositionEnd"&&Pi&&(Le=qd()):(or=q,zl="value"in or?or.value:or.textContent,Pi=!0)),Ie=ia(j,be),0<Ie.length&&(be=new Hd(be,e,null,s,q),H.push({
event:be,listeners:Ie
}
),Le?be.data=Le:(Le=Xd(s),Le!==null&&(be.data=Le)))),(Le=Xy?ev(e,s):tv(e,s))&&(j=ia(j,"onBeforeInput"),0<j.length&&(q=new Hd("onBeforeInput","beforeinput",null,s,q),H.push({
event:q,listeners:j
}
),q.data=Le))
}
_f(H,t)
}
)
}
function Vs(e,t,s){
return{
instance:e,listener:t,currentTarget:s
}

}
function ia(e,t){
for(var s=t+"Capture",a=[];
e!==null;
){
var u=e,d=u.stateNode;
u.tag===5&&d!==null&&(u=d,d=xs(e,s),d!=null&&a.unshift(Vs(e,d,u)),d=xs(e,t),d!=null&&a.push(Vs(e,d,u))),e=e.return
}
return a
}
function Ti(e){
if(e===null)return null;
do e=e.return;
while(e&&e.tag!==5);
return e||null
}
function Sf(e,t,s,a,u){
for(var d=t._reactName,p=[];
s!==null&&s!==a;
){
var _=s,C=_.alternate,j=_.stateNode;
if(C!==null&&C===a)break;
_.tag===5&&j!==null&&(_=j,u?(C=xs(s,d),C!=null&&p.unshift(Vs(s,C,_))):u||(C=xs(s,d),C!=null&&p.push(Vs(s,C,_)))),s=s.return
}
p.length!==0&&e.push({
event:t,listeners:p
}
)
}
var mv=/\r\n?/g,yv=/\u0000|\uFFFD/g;
function Cf(e){
return(typeof e=="string"?e:""+e).replace(mv,`
`).replace(yv,"")
}
function sa(e,t,s){
if(t=Cf(t),Cf(e)!==t&&s)throw Error(i(425))
}
function oa(){

}
var iu=null,su=null;
function ou(e,t){
return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null
}
var au=typeof setTimeout=="function"?setTimeout:void 0,vv=typeof clearTimeout=="function"?clearTimeout:void 0,xf=typeof Promise=="function"?Promise:void 0,gv=typeof queueMicrotask=="function"?queueMicrotask:typeof xf<"u"?function(e){
return xf.resolve(null).then(e).catch(wv)
}
:au;
function wv(e){
setTimeout(function(){
throw e
}
)
}
function lu(e,t){
var s=t,a=0;
do{
var u=s.nextSibling;
if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"){
if(a===0){
e.removeChild(u),bs(t);
return
}
a--
}
else s!=="$"&&s!=="$?"&&s!=="$!"||a++;
s=u
}
while(s);
bs(t)
}
function lr(e){
for(;
e!=null;
e=e.nextSibling){
var t=e.nodeType;
if(t===1||t===3)break;
if(t===8){
if(t=e.data,t==="$"||t==="$!"||t==="$?")break;
if(t==="/$")return null
}

}
return e
}
function Pf(e){
e=e.previousSibling;
for(var t=0;
e;
){
if(e.nodeType===8){
var s=e.data;
if(s==="$"||s==="$!"||s==="$?"){
if(t===0)return e;
t--
}
else s==="/$"&&t++
}
e=e.previousSibling
}
return null
}
var Ii=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Ii,qs="__reactProps$"+Ii,Fn="__reactContainer$"+Ii,uu="__reactEvents$"+Ii,_v="__reactListeners$"+Ii,kv="__reactHandles$"+Ii;
function Ur(e){
var t=e[Cn];
if(t)return t;
for(var s=e.parentNode;
s;
){
if(t=s[Fn]||s[Cn]){
if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=Pf(e);
e!==null;
){
if(s=e[Cn])return s;
e=Pf(e)
}
return t
}
e=s,s=e.parentNode
}
return null
}
function Qs(e){
return e=e[Cn]||e[Fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e
}
function Li(e){
if(e.tag===5||e.tag===6)return e.stateNode;
throw Error(i(33))
}
function aa(e){
return e[qs]||null
}
var cu=[],Oi=-1;
function ur(e){
return{
current:e
}

}
function Ke(e){
0>Oi||(e.current=cu[Oi],cu[Oi]=null,Oi--)
}
function He(e,t){
Oi++,cu[Oi]=e.current,e.current=t
}
var cr={

}
,St=ur(cr),Nt=ur(!1),zr=cr;
function ji(e,t){
var s=e.type.contextTypes;
if(!s)return cr;
var a=e.stateNode;
if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;
var u={

}
,d;
for(d in s)u[d]=t[d];
return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u
}
function Dt(e){
return e=e.childContextTypes,e!=null
}
function la(){
Ke(Nt),Ke(St)
}
function Rf(e,t,s){
if(St.current!==cr)throw Error(i(168));
He(St,t),He(Nt,s)
}
function Ef(e,t,s){
var a=e.stateNode;
if(t=t.childContextTypes,typeof a.getChildContext!="function")return s;
a=a.getChildContext();
for(var u in a)if(!(u in t))throw Error(i(108,Pe(e)||"Unknown",u));
return N({

}
,s,a)
}
function ua(e){
return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cr,zr=St.current,He(St,e),He(Nt,Nt.current),!0
}
function Tf(e,t,s){
var a=e.stateNode;
if(!a)throw Error(i(169));
s?(e=Ef(e,t,zr),a.__reactInternalMemoizedMergedChildContext=e,Ke(Nt),Ke(St),He(St,e)):Ke(Nt),He(Nt,s)
}
var Nn=null,ca=!1,du=!1;
function If(e){
Nn===null?Nn=[e]:Nn.push(e)
}
function Sv(e){
ca=!0,If(e)
}
function dr(){
if(!du&&Nn!==null){
du=!0;
var e=0,t=Qe;
try{
var s=Nn;
for(Qe=1;
e<s.length;
e++){
var a=s[e];
do a=a(!0);
while(a!==null)
}
Nn=null,ca=!1
}
catch(u){
throw Nn!==null&&(Nn=Nn.slice(e+1)),Ld(bl,dr),u
}
finally{
Qe=t,du=!1
}

}
return null
}
var bi=[],Mi=0,da=null,fa=0,Gt=[],Jt=0,$r=null,Dn=1,An="";
function Vr(e,t){
bi[Mi++]=fa,bi[Mi++]=da,da=e,fa=t
}
function Lf(e,t,s){
Gt[Jt++]=Dn,Gt[Jt++]=An,Gt[Jt++]=$r,$r=e;
var a=Dn;
e=An;
var u=32-on(a)-1;
a&=~(1<<u),s+=1;
var d=32-on(t)+u;
if(30<d){
var p=u-u%5;
d=(a&(1<<p)-1).toString(32),a>>=p,u-=p,Dn=1<<32-on(t)+u|s<<u|a,An=d+e
}
else Dn=1<<d|s<<u|a,An=e
}
function fu(e){
e.return!==null&&(Vr(e,1),Lf(e,1,0))
}
function hu(e){
for(;
e===da;
)da=bi[--Mi],bi[Mi]=null,fa=bi[--Mi],bi[Mi]=null;
for(;
e===$r;
)$r=Gt[--Jt],Gt[Jt]=null,An=Gt[--Jt],Gt[Jt]=null,Dn=Gt[--Jt],Gt[Jt]=null
}
var Zt=null,Ht=null,Ge=!1,ln=null;
function Of(e,t){
var s=tn(5,null,null,0);
s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)
}
function jf(e,t){
switch(e.tag){
case 5:var s=e.type;
return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Zt=e,Ht=lr(t.firstChild),!0):!1;
case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Zt=e,Ht=null,!0):!1;
case 13:return t=t.nodeType!==8?null:t,t!==null?(s=$r!==null?{
id:Dn,overflow:An
}
:null,e.memoizedState={
dehydrated:t,treeContext:s,retryLane:1073741824
}
,s=tn(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,Zt=e,Ht=null,!0):!1;
default:return!1
}

}
function pu(e){
return(e.mode&1)!==0&&(e.flags&128)===0
}
function mu(e){
if(Ge){
var t=Ht;
if(t){
var s=t;
if(!jf(e,t)){
if(pu(e))throw Error(i(418));
t=lr(s.nextSibling);
var a=Zt;
t&&jf(e,t)?Of(a,s):(e.flags=e.flags&-4097|2,Ge=!1,Zt=e)
}

}
else{
if(pu(e))throw Error(i(418));
e.flags=e.flags&-4097|2,Ge=!1,Zt=e
}

}

}
function bf(e){
for(e=e.return;
e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;
)e=e.return;
Zt=e
}
function ha(e){
if(e!==Zt)return!1;
if(!Ge)return bf(e),Ge=!0,!1;
var t;
if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ou(e.type,e.memoizedProps)),t&&(t=Ht)){
if(pu(e))throw Mf(),Error(i(418));
for(;
t;
)Of(e,t),t=lr(t.nextSibling)
}
if(bf(e),e.tag===13){
if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));
e:{
for(e=e.nextSibling,t=0;
e;
){
if(e.nodeType===8){
var s=e.data;
if(s==="/$"){
if(t===0){
Ht=lr(e.nextSibling);
break e
}
t--
}
else s!=="$"&&s!=="$!"&&s!=="$?"||t++
}
e=e.nextSibling
}
Ht=null
}

}
else Ht=Zt?lr(e.stateNode.nextSibling):null;
return!0
}
function Mf(){
for(var e=Ht;
e;
)e=lr(e.nextSibling)
}
function Fi(){
Ht=Zt=null,Ge=!1
}
function yu(e){
ln===null?ln=[e]:ln.push(e)
}
var Cv=ae.ReactCurrentBatchConfig;
function Zs(e,t,s){
if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){
if(s._owner){
if(s=s._owner,s){
if(s.tag!==1)throw Error(i(309));
var a=s.stateNode
}
if(!a)throw Error(i(147,e));
var u=a,d=""+e;
return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(p){
var _=u.refs;
p===null?delete _[d]:_[d]=p
}
,t._stringRef=d,t)
}
if(typeof e!="string")throw Error(i(284));
if(!s._owner)throw Error(i(290,e))
}
return e
}
function pa(e,t){
throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {
"+Object.keys(t).join(", ")+"
}
":e))
}
function Ff(e){
var t=e._init;
return t(e._payload)
}
function Nf(e){
function t(R,P){
if(e){
var T=R.deletions;
T===null?(R.deletions=[P],R.flags|=16):T.push(P)
}

}
function s(R,P){
if(!e)return null;
for(;
P!==null;
)t(R,P),P=P.sibling;
return null
}
function a(R,P){
for(R=new Map;
P!==null;
)P.key!==null?R.set(P.key,P):R.set(P.index,P),P=P.sibling;
return R
}
function u(R,P){
return R=wr(R,P),R.index=0,R.sibling=null,R
}
function d(R,P,T){
return R.index=T,e?(T=R.alternate,T!==null?(T=T.index,T<P?(R.flags|=2,P):T):(R.flags|=2,P)):(R.flags|=1048576,P)
}
function p(R){
return e&&R.alternate===null&&(R.flags|=2),R
}
function _(R,P,T,Y){
return P===null||P.tag!==6?(P=ac(T,R.mode,Y),P.return=R,P):(P=u(P,T),P.return=R,P)
}
function C(R,P,T,Y){
var Se=T.type;
return Se===oe?q(R,P,T.props.children,Y,T.key):P!==null&&(P.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===A&&Ff(Se)===P.type)?(Y=u(P,T.props),Y.ref=Zs(R,P,T),Y.return=R,Y):(Y=Aa(T.type,T.key,T.props,null,R.mode,Y),Y.ref=Zs(R,P,T),Y.return=R,Y)
}
function j(R,P,T,Y){
return P===null||P.tag!==4||P.stateNode.containerInfo!==T.containerInfo||P.stateNode.implementation!==T.implementation?(P=lc(T,R.mode,Y),P.return=R,P):(P=u(P,T.children||[]),P.return=R,P)
}
function q(R,P,T,Y,Se){
return P===null||P.tag!==7?(P=Jr(T,R.mode,Y,Se),P.return=R,P):(P=u(P,T),P.return=R,P)
}
function H(R,P,T){
if(typeof P=="string"&&P!==""||typeof P=="number")return P=ac(""+P,R.mode,T),P.return=R,P;
if(typeof P=="object"&&P!==null){
switch(P.$$typeof){
case we:return T=Aa(P.type,P.key,P.props,null,R.mode,T),T.ref=Zs(R,null,P),T.return=R,T;
case $:return P=lc(P,R.mode,T),P.return=R,P;
case A:var Y=P._init;
return H(R,Y(P._payload),T)
}
if(_n(P)||U(P))return P=Jr(P,R.mode,T,null),P.return=R,P;
pa(R,P)
}
return null
}
function V(R,P,T,Y){
var Se=P!==null?P.key:null;
if(typeof T=="string"&&T!==""||typeof T=="number")return Se!==null?null:_(R,P,""+T,Y);
if(typeof T=="object"&&T!==null){
switch(T.$$typeof){
case we:return T.key===Se?C(R,P,T,Y):null;
case $:return T.key===Se?j(R,P,T,Y):null;
case A:return Se=T._init,V(R,P,Se(T._payload),Y)
}
if(_n(T)||U(T))return Se!==null?null:q(R,P,T,Y,null);
pa(R,T)
}
return null
}
function de(R,P,T,Y,Se){
if(typeof Y=="string"&&Y!==""||typeof Y=="number")return R=R.get(T)||null,_(P,R,""+Y,Se);
if(typeof Y=="object"&&Y!==null){
switch(Y.$$typeof){
case we:return R=R.get(Y.key===null?T:Y.key)||null,C(P,R,Y,Se);
case $:return R=R.get(Y.key===null?T:Y.key)||null,j(P,R,Y,Se);
case A:var Ie=Y._init;
return de(R,P,T,Ie(Y._payload),Se)
}
if(_n(Y)||U(Y))return R=R.get(T)||null,q(P,R,Y,Se,null);
pa(P,Y)
}
return null
}
function ge(R,P,T,Y){
for(var Se=null,Ie=null,Le=P,be=P=0,mt=null;
Le!==null&&be<T.length;
be++){
Le.index>be?(mt=Le,Le=null):mt=Le.sibling;
var Ve=V(R,Le,T[be],Y);
if(Ve===null){
Le===null&&(Le=mt);
break
}
e&&Le&&Ve.alternate===null&&t(R,Le),P=d(Ve,P,be),Ie===null?Se=Ve:Ie.sibling=Ve,Ie=Ve,Le=mt
}
if(be===T.length)return s(R,Le),Ge&&Vr(R,be),Se;
if(Le===null){
for(;
be<T.length;
be++)Le=H(R,T[be],Y),Le!==null&&(P=d(Le,P,be),Ie===null?Se=Le:Ie.sibling=Le,Ie=Le);
return Ge&&Vr(R,be),Se
}
for(Le=a(R,Le);
be<T.length;
be++)mt=de(Le,R,be,T[be],Y),mt!==null&&(e&&mt.alternate!==null&&Le.delete(mt.key===null?be:mt.key),P=d(mt,P,be),Ie===null?Se=mt:Ie.sibling=mt,Ie=mt);
return e&&Le.forEach(function(_r){
return t(R,_r)
}
),Ge&&Vr(R,be),Se
}
function ke(R,P,T,Y){
var Se=U(T);
if(typeof Se!="function")throw Error(i(150));
if(T=Se.call(T),T==null)throw Error(i(151));
for(var Ie=Se=null,Le=P,be=P=0,mt=null,Ve=T.next();
Le!==null&&!Ve.done;
be++,Ve=T.next()){
Le.index>be?(mt=Le,Le=null):mt=Le.sibling;
var _r=V(R,Le,Ve.value,Y);
if(_r===null){
Le===null&&(Le=mt);
break
}
e&&Le&&_r.alternate===null&&t(R,Le),P=d(_r,P,be),Ie===null?Se=_r:Ie.sibling=_r,Ie=_r,Le=mt
}
if(Ve.done)return s(R,Le),Ge&&Vr(R,be),Se;
if(Le===null){
for(;
!Ve.done;
be++,Ve=T.next())Ve=H(R,Ve.value,Y),Ve!==null&&(P=d(Ve,P,be),Ie===null?Se=Ve:Ie.sibling=Ve,Ie=Ve);
return Ge&&Vr(R,be),Se
}
for(Le=a(R,Le);
!Ve.done;
be++,Ve=T.next())Ve=de(Le,R,be,Ve.value,Y),Ve!==null&&(e&&Ve.alternate!==null&&Le.delete(Ve.key===null?be:Ve.key),P=d(Ve,P,be),Ie===null?Se=Ve:Ie.sibling=Ve,Ie=Ve);
return e&&Le.forEach(function(ng){
return t(R,ng)
}
),Ge&&Vr(R,be),Se
}
function ot(R,P,T,Y){
if(typeof T=="object"&&T!==null&&T.type===oe&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){
switch(T.$$typeof){
case we:e:{
for(var Se=T.key,Ie=P;
Ie!==null;
){
if(Ie.key===Se){
if(Se=T.type,Se===oe){
if(Ie.tag===7){
s(R,Ie.sibling),P=u(Ie,T.props.children),P.return=R,R=P;
break e
}

}
else if(Ie.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===A&&Ff(Se)===Ie.type){
s(R,Ie.sibling),P=u(Ie,T.props),P.ref=Zs(R,Ie,T),P.return=R,R=P;
break e
}
s(R,Ie);
break
}
else t(R,Ie);
Ie=Ie.sibling
}
T.type===oe?(P=Jr(T.props.children,R.mode,Y,T.key),P.return=R,R=P):(Y=Aa(T.type,T.key,T.props,null,R.mode,Y),Y.ref=Zs(R,P,T),Y.return=R,R=Y)
}
return p(R);
case $:e:{
for(Ie=T.key;
P!==null;
){
if(P.key===Ie)if(P.tag===4&&P.stateNode.containerInfo===T.containerInfo&&P.stateNode.implementation===T.implementation){
s(R,P.sibling),P=u(P,T.children||[]),P.return=R,R=P;
break e
}
else{
s(R,P);
break
}
else t(R,P);
P=P.sibling
}
P=lc(T,R.mode,Y),P.return=R,R=P
}
return p(R);
case A:return Ie=T._init,ot(R,P,Ie(T._payload),Y)
}
if(_n(T))return ge(R,P,T,Y);
if(U(T))return ke(R,P,T,Y);
pa(R,T)
}
return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,P!==null&&P.tag===6?(s(R,P.sibling),P=u(P,T),P.return=R,R=P):(s(R,P),P=ac(T,R.mode,Y),P.return=R,R=P),p(R)):s(R,P)
}
return ot
}
var Ni=Nf(!0),Df=Nf(!1),ma=ur(null),ya=null,Di=null,vu=null;
function gu(){
vu=Di=ya=null
}
function wu(e){
var t=ma.current;
Ke(ma),e._currentValue=t
}
function _u(e,t,s){
for(;
e!==null;
){
var a=e.alternate;
if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===s)break;
e=e.return
}

}
function Ai(e,t){
ya=e,vu=Di=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(At=!0),e.firstContext=null)
}
function Yt(e){
var t=e._currentValue;
if(vu!==e)if(e={
context:e,memoizedValue:t,next:null
}
,Di===null){
if(ya===null)throw Error(i(308));
Di=e,ya.dependencies={
lanes:0,firstContext:e
}

}
else Di=Di.next=e;
return t
}
var qr=null;
function ku(e){
qr===null?qr=[e]:qr.push(e)
}
function Af(e,t,s,a){
var u=t.interleaved;
return u===null?(s.next=s,ku(t)):(s.next=u.next,u.next=s),t.interleaved=s,Bn(e,a)
}
function Bn(e,t){
e.lanes|=t;
var s=e.alternate;
for(s!==null&&(s.lanes|=t),s=e,e=e.return;
e!==null;
)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;
return s.tag===3?s.stateNode:null
}
var fr=!1;
function Su(e){
e.updateQueue={
baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{
pending:null,interleaved:null,lanes:0
}
,effects:null
}

}
function Bf(e,t){
e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={
baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects
}
)
}
function Un(e,t){
return{
eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null
}

}
function hr(e,t,s){
var a=e.updateQueue;
if(a===null)return null;
if(a=a.shared,($e&2)!==0){
var u=a.pending;
return u===null?t.next=t:(t.next=u.next,u.next=t),a.pending=t,Bn(e,s)
}
return u=a.interleaved,u===null?(t.next=t,ku(a)):(t.next=u.next,u.next=t),a.interleaved=t,Bn(e,s)
}
function va(e,t,s){
if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){
var a=t.lanes;
a&=e.pendingLanes,s|=a,t.lanes=s,Nl(e,s)
}

}
function Uf(e,t){
var s=e.updateQueue,a=e.alternate;
if(a!==null&&(a=a.updateQueue,s===a)){
var u=null,d=null;
if(s=s.firstBaseUpdate,s!==null){
do{
var p={
eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null
}
;
d===null?u=d=p:d=d.next=p,s=s.next
}
while(s!==null);
d===null?u=d=t:d=d.next=t
}
else u=d=t;
s={
baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:a.shared,effects:a.effects
}
,e.updateQueue=s;
return
}
e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t
}
function ga(e,t,s,a){
var u=e.updateQueue;
fr=!1;
var d=u.firstBaseUpdate,p=u.lastBaseUpdate,_=u.shared.pending;
if(_!==null){
u.shared.pending=null;
var C=_,j=C.next;
C.next=null,p===null?d=j:p.next=j,p=C;
var q=e.alternate;
q!==null&&(q=q.updateQueue,_=q.lastBaseUpdate,_!==p&&(_===null?q.firstBaseUpdate=j:_.next=j,q.lastBaseUpdate=C))
}
if(d!==null){
var H=u.baseState;
p=0,q=j=C=null,_=d;
do{
var V=_.lane,de=_.eventTime;
if((a&V)===V){
q!==null&&(q=q.next={
eventTime:de,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null
}
);
e:{
var ge=e,ke=_;
switch(V=t,de=s,ke.tag){
case 1:if(ge=ke.payload,typeof ge=="function"){
H=ge.call(de,H,V);
break e
}
H=ge;
break e;
case 3:ge.flags=ge.flags&-65537|128;
case 0:if(ge=ke.payload,V=typeof ge=="function"?ge.call(de,H,V):ge,V==null)break e;
H=N({

}
,H,V);
break e;
case 2:fr=!0
}

}
_.callback!==null&&_.lane!==0&&(e.flags|=64,V=u.effects,V===null?u.effects=[_]:V.push(_))
}
else de={
eventTime:de,lane:V,tag:_.tag,payload:_.payload,callback:_.callback,next:null
}
,q===null?(j=q=de,C=H):q=q.next=de,p|=V;
if(_=_.next,_===null){
if(_=u.shared.pending,_===null)break;
V=_,_=V.next,V.next=null,u.lastBaseUpdate=V,u.shared.pending=null
}

}
while(!0);
if(q===null&&(C=H),u.baseState=C,u.firstBaseUpdate=j,u.lastBaseUpdate=q,t=u.shared.interleaved,t!==null){
u=t;
do p|=u.lane,u=u.next;
while(u!==t)
}
else d===null&&(u.shared.lanes=0);
Hr|=p,e.lanes=p,e.memoizedState=H
}

}
function zf(e,t,s){
if(e=t.effects,t.effects=null,e!==null)for(t=0;
t<e.length;
t++){
var a=e[t],u=a.callback;
if(u!==null){
if(a.callback=null,a=s,typeof u!="function")throw Error(i(191,u));
u.call(a)
}

}

}
var Hs={

}
,xn=ur(Hs),Ws=ur(Hs),Ks=ur(Hs);
function Qr(e){
if(e===Hs)throw Error(i(174));
return e
}
function Cu(e,t){
switch(He(Ks,t),He(Ws,e),He(xn,Hs),e=t.nodeType,e){
case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");
break;
default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)
}
Ke(xn),He(xn,t)
}
function Bi(){
Ke(xn),Ke(Ws),Ke(Ks)
}
function $f(e){
Qr(Ks.current);
var t=Qr(xn.current),s=xl(t,e.type);
t!==s&&(He(Ws,e),He(xn,s))
}
function xu(e){
Ws.current===e&&(Ke(xn),Ke(Ws))
}
var Ye=ur(0);
function wa(e){
for(var t=e;
t!==null;
){
if(t.tag===13){
var s=t.memoizedState;
if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t
}
else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){
if((t.flags&128)!==0)return t
}
else if(t.child!==null){
t.child.return=t,t=t.child;
continue
}
if(t===e)break;
for(;
t.sibling===null;
){
if(t.return===null||t.return===e)return null;
t=t.return
}
t.sibling.return=t.return,t=t.sibling
}
return null
}
var Pu=[];
function Ru(){
for(var e=0;
e<Pu.length;
e++)Pu[e]._workInProgressVersionPrimary=null;
Pu.length=0
}
var _a=ae.ReactCurrentDispatcher,Eu=ae.ReactCurrentBatchConfig,Zr=0,Xe=null,ut=null,ht=null,ka=!1,Gs=!1,Js=0,xv=0;
function Ct(){
throw Error(i(321))
}
function Tu(e,t){
if(t===null)return!1;
for(var s=0;
s<t.length&&s<e.length;
s++)if(!an(e[s],t[s]))return!1;
return!0
}
function Iu(e,t,s,a,u,d){
if(Zr=d,Xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_a.current=e===null||e.memoizedState===null?Tv:Iv,e=s(a,u),Gs){
d=0;
do{
if(Gs=!1,Js=0,25<=d)throw Error(i(301));
d+=1,ht=ut=null,t.updateQueue=null,_a.current=Lv,e=s(a,u)
}
while(Gs)
}
if(_a.current=xa,t=ut!==null&&ut.next!==null,Zr=0,ht=ut=Xe=null,ka=!1,t)throw Error(i(300));
return e
}
function Lu(){
var e=Js!==0;
return Js=0,e
}
function Pn(){
var e={
memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null
}
;
return ht===null?Xe.memoizedState=ht=e:ht=ht.next=e,ht
}
function Xt(){
if(ut===null){
var e=Xe.alternate;
e=e!==null?e.memoizedState:null
}
else e=ut.next;
var t=ht===null?Xe.memoizedState:ht.next;
if(t!==null)ht=t,ut=e;
else{
if(e===null)throw Error(i(310));
ut=e,e={
memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null
}
,ht===null?Xe.memoizedState=ht=e:ht=ht.next=e
}
return ht
}
function Ys(e,t){
return typeof t=="function"?t(e):t
}
function Ou(e){
var t=Xt(),s=t.queue;
if(s===null)throw Error(i(311));
s.lastRenderedReducer=e;
var a=ut,u=a.baseQueue,d=s.pending;
if(d!==null){
if(u!==null){
var p=u.next;
u.next=d.next,d.next=p
}
a.baseQueue=u=d,s.pending=null
}
if(u!==null){
d=u.next,a=a.baseState;
var _=p=null,C=null,j=d;
do{
var q=j.lane;
if((Zr&q)===q)C!==null&&(C=C.next={
lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null
}
),a=j.hasEagerState?j.eagerState:e(a,j.action);
else{
var H={
lane:q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null
}
;
C===null?(_=C=H,p=a):C=C.next=H,Xe.lanes|=q,Hr|=q
}
j=j.next
}
while(j!==null&&j!==d);
C===null?p=a:C.next=_,an(a,t.memoizedState)||(At=!0),t.memoizedState=a,t.baseState=p,t.baseQueue=C,s.lastRenderedState=a
}
if(e=s.interleaved,e!==null){
u=e;
do d=u.lane,Xe.lanes|=d,Hr|=d,u=u.next;
while(u!==e)
}
else u===null&&(s.lanes=0);
return[t.memoizedState,s.dispatch]
}
function ju(e){
var t=Xt(),s=t.queue;
if(s===null)throw Error(i(311));
s.lastRenderedReducer=e;
var a=s.dispatch,u=s.pending,d=t.memoizedState;
if(u!==null){
s.pending=null;
var p=u=u.next;
do d=e(d,p.action),p=p.next;
while(p!==u);
an(d,t.memoizedState)||(At=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),s.lastRenderedState=d
}
return[d,a]
}
function Vf(){

}
function qf(e,t){
var s=Xe,a=Xt(),u=t(),d=!an(a.memoizedState,u);
if(d&&(a.memoizedState=u,At=!0),a=a.queue,bu(Hf.bind(null,s,a,e),[e]),a.getSnapshot!==t||d||ht!==null&&ht.memoizedState.tag&1){
if(s.flags|=2048,Xs(9,Zf.bind(null,s,a,u,t),void 0,null),pt===null)throw Error(i(349));
(Zr&30)!==0||Qf(s,t,u)
}
return u
}
function Qf(e,t,s){
e.flags|=16384,e={
getSnapshot:t,value:s
}
,t=Xe.updateQueue,t===null?(t={
lastEffect:null,stores:null
}
,Xe.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))
}
function Zf(e,t,s,a){
t.value=s,t.getSnapshot=a,Wf(t)&&Kf(e)
}
function Hf(e,t,s){
return s(function(){
Wf(t)&&Kf(e)
}
)
}
function Wf(e){
var t=e.getSnapshot;
e=e.value;
try{
var s=t();
return!an(e,s)
}
catch{
return!0
}

}
function Kf(e){
var t=Bn(e,1);
t!==null&&fn(t,e,1,-1)
}
function Gf(e){
var t=Pn();
return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={
pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:e
}
,t.queue=e,e=e.dispatch=Ev.bind(null,Xe,e),[t.memoizedState,e]
}
function Xs(e,t,s,a){
return e={
tag:e,create:t,destroy:s,deps:a,next:null
}
,t=Xe.updateQueue,t===null?(t={
lastEffect:null,stores:null
}
,Xe.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(a=s.next,s.next=e,e.next=a,t.lastEffect=e)),e
}
function Jf(){
return Xt().memoizedState
}
function Sa(e,t,s,a){
var u=Pn();
Xe.flags|=e,u.memoizedState=Xs(1|t,s,void 0,a===void 0?null:a)
}
function Ca(e,t,s,a){
var u=Xt();
a=a===void 0?null:a;
var d=void 0;
if(ut!==null){
var p=ut.memoizedState;
if(d=p.destroy,a!==null&&Tu(a,p.deps)){
u.memoizedState=Xs(t,s,d,a);
return
}

}
Xe.flags|=e,u.memoizedState=Xs(1|t,s,d,a)
}
function Yf(e,t){
return Sa(8390656,8,e,t)
}
function bu(e,t){
return Ca(2048,8,e,t)
}
function Xf(e,t){
return Ca(4,2,e,t)
}
function eh(e,t){
return Ca(4,4,e,t)
}
function th(e,t){
if(typeof t=="function")return e=e(),t(e),function(){
t(null)
}
;
if(t!=null)return e=e(),t.current=e,function(){
t.current=null
}

}
function nh(e,t,s){
return s=s!=null?s.concat([e]):null,Ca(4,4,th.bind(null,t,e),s)
}
function Mu(){

}
function rh(e,t){
var s=Xt();
t=t===void 0?null:t;
var a=s.memoizedState;
return a!==null&&t!==null&&Tu(t,a[1])?a[0]:(s.memoizedState=[e,t],e)
}
function ih(e,t){
var s=Xt();
t=t===void 0?null:t;
var a=s.memoizedState;
return a!==null&&t!==null&&Tu(t,a[1])?a[0]:(e=e(),s.memoizedState=[e,t],e)
}
function sh(e,t,s){
return(Zr&21)===0?(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=s):(an(s,t)||(s=Md(),Xe.lanes|=s,Hr|=s,e.baseState=!0),t)
}
function Pv(e,t){
var s=Qe;
Qe=s!==0&&4>s?s:4,e(!0);
var a=Eu.transition;
Eu.transition={

}
;
try{
e(!1),t()
}
finally{
Qe=s,Eu.transition=a
}

}
function oh(){
return Xt().memoizedState
}
function Rv(e,t,s){
var a=vr(e);
if(s={
lane:a,action:s,hasEagerState:!1,eagerState:null,next:null
}
,ah(e))lh(t,s);
else if(s=Af(e,t,s,a),s!==null){
var u=Lt();
fn(s,e,a,u),uh(s,t,a)
}

}
function Ev(e,t,s){
var a=vr(e),u={
lane:a,action:s,hasEagerState:!1,eagerState:null,next:null
}
;
if(ah(e))lh(t,u);
else{
var d=e.alternate;
if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{
var p=t.lastRenderedState,_=d(p,s);
if(u.hasEagerState=!0,u.eagerState=_,an(_,p)){
var C=t.interleaved;
C===null?(u.next=u,ku(t)):(u.next=C.next,C.next=u),t.interleaved=u;
return
}

}
catch{

}
finally{

}
s=Af(e,t,u,a),s!==null&&(u=Lt(),fn(s,e,a,u),uh(s,t,a))
}

}
function ah(e){
var t=e.alternate;
return e===Xe||t!==null&&t===Xe
}
function lh(e,t){
Gs=ka=!0;
var s=e.pending;
s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t
}
function uh(e,t,s){
if((s&4194240)!==0){
var a=t.lanes;
a&=e.pendingLanes,s|=a,t.lanes=s,Nl(e,s)
}

}
var xa={
readContext:Yt,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1
}
,Tv={
readContext:Yt,useCallback:function(e,t){
return Pn().memoizedState=[e,t===void 0?null:t],e
}
,useContext:Yt,useEffect:Yf,useImperativeHandle:function(e,t,s){
return s=s!=null?s.concat([e]):null,Sa(4194308,4,th.bind(null,t,e),s)
}
,useLayoutEffect:function(e,t){
return Sa(4194308,4,e,t)
}
,useInsertionEffect:function(e,t){
return Sa(4,2,e,t)
}
,useMemo:function(e,t){
var s=Pn();
return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e
}
,useReducer:function(e,t,s){
var a=Pn();
return t=s!==void 0?s(t):t,a.memoizedState=a.baseState=t,e={
pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t
}
,a.queue=e,e=e.dispatch=Rv.bind(null,Xe,e),[a.memoizedState,e]
}
,useRef:function(e){
var t=Pn();
return e={
current:e
}
,t.memoizedState=e
}
,useState:Gf,useDebugValue:Mu,useDeferredValue:function(e){
return Pn().memoizedState=e
}
,useTransition:function(){
var e=Gf(!1),t=e[0];
return e=Pv.bind(null,e[1]),Pn().memoizedState=e,[t,e]
}
,useMutableSource:function(){

}
,useSyncExternalStore:function(e,t,s){
var a=Xe,u=Pn();
if(Ge){
if(s===void 0)throw Error(i(407));
s=s()
}
else{
if(s=t(),pt===null)throw Error(i(349));
(Zr&30)!==0||Qf(a,t,s)
}
u.memoizedState=s;
var d={
value:s,getSnapshot:t
}
;
return u.queue=d,Yf(Hf.bind(null,a,d,e),[e]),a.flags|=2048,Xs(9,Zf.bind(null,a,d,s,t),void 0,null),s
}
,useId:function(){
var e=Pn(),t=pt.identifierPrefix;
if(Ge){
var s=An,a=Dn;
s=(a&~(1<<32-on(a)-1)).toString(32)+s,t=":"+t+"R"+s,s=Js++,0<s&&(t+="H"+s.toString(32)),t+=":"
}
else s=xv++,t=":"+t+"r"+s.toString(32)+":";
return e.memoizedState=t
}
,unstable_isNewReconciler:!1
}
,Iv={
readContext:Yt,useCallback:rh,useContext:Yt,useEffect:bu,useImperativeHandle:nh,useInsertionEffect:Xf,useLayoutEffect:eh,useMemo:ih,useReducer:Ou,useRef:Jf,useState:function(){
return Ou(Ys)
}
,useDebugValue:Mu,useDeferredValue:function(e){
var t=Xt();
return sh(t,ut.memoizedState,e)
}
,useTransition:function(){
var e=Ou(Ys)[0],t=Xt().memoizedState;
return[e,t]
}
,useMutableSource:Vf,useSyncExternalStore:qf,useId:oh,unstable_isNewReconciler:!1
}
,Lv={
readContext:Yt,useCallback:rh,useContext:Yt,useEffect:bu,useImperativeHandle:nh,useInsertionEffect:Xf,useLayoutEffect:eh,useMemo:ih,useReducer:ju,useRef:Jf,useState:function(){
return ju(Ys)
}
,useDebugValue:Mu,useDeferredValue:function(e){
var t=Xt();
return ut===null?t.memoizedState=e:sh(t,ut.memoizedState,e)
}
,useTransition:function(){
var e=ju(Ys)[0],t=Xt().memoizedState;
return[e,t]
}
,useMutableSource:Vf,useSyncExternalStore:qf,useId:oh,unstable_isNewReconciler:!1
}
;
function un(e,t){
if(e&&e.defaultProps){
t=N({

}
,t),e=e.defaultProps;
for(var s in e)t[s]===void 0&&(t[s]=e[s]);
return t
}
return t
}
function Fu(e,t,s,a){
t=e.memoizedState,s=s(a,t),s=s==null?t:N({

}
,t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)
}
var Pa={
isMounted:function(e){
return(e=e._reactInternals)?Br(e)===e:!1
}
,enqueueSetState:function(e,t,s){
e=e._reactInternals;
var a=Lt(),u=vr(e),d=Un(a,u);
d.payload=t,s!=null&&(d.callback=s),t=hr(e,d,u),t!==null&&(fn(t,e,u,a),va(t,e,u))
}
,enqueueReplaceState:function(e,t,s){
e=e._reactInternals;
var a=Lt(),u=vr(e),d=Un(a,u);
d.tag=1,d.payload=t,s!=null&&(d.callback=s),t=hr(e,d,u),t!==null&&(fn(t,e,u,a),va(t,e,u))
}
,enqueueForceUpdate:function(e,t){
e=e._reactInternals;
var s=Lt(),a=vr(e),u=Un(s,a);
u.tag=2,t!=null&&(u.callback=t),t=hr(e,u,a),t!==null&&(fn(t,e,a,s),va(t,e,a))
}

}
;
function ch(e,t,s,a,u,d,p){
return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,p):t.prototype&&t.prototype.isPureReactComponent?!Bs(s,a)||!Bs(u,d):!0
}
function dh(e,t,s){
var a=!1,u=cr,d=t.contextType;
return typeof d=="object"&&d!==null?d=Yt(d):(u=Dt(t)?zr:St.current,a=t.contextTypes,d=(a=a!=null)?ji(e,u):cr),t=new t(s,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pa,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=d),t
}
function fh(e,t,s,a){
e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,a),t.state!==e&&Pa.enqueueReplaceState(t,t.state,null)
}
function Nu(e,t,s,a){
var u=e.stateNode;
u.props=s,u.state=e.memoizedState,u.refs={

}
,Su(e);
var d=t.contextType;
typeof d=="object"&&d!==null?u.context=Yt(d):(d=Dt(t)?zr:St.current,u.context=ji(e,d)),u.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Fu(e,t,d,s),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&Pa.enqueueReplaceState(u,u.state,null),ga(e,s,u,a),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)
}
function Ui(e,t){
try{
var s="",a=t;
do s+=me(a),a=a.return;
while(a);
var u=s
}
catch(d){
u=`
Error generating stack: `+d.message+`
`+d.stack
}
return{
value:e,source:t,stack:u,digest:null
}

}
function Du(e,t,s){
return{
value:e,source:null,stack:s??null,digest:t??null
}

}
function Au(e,t){
try{
console.error(t.value)
}
catch(s){
setTimeout(function(){
throw s
}
)
}

}
var Ov=typeof WeakMap=="function"?WeakMap:Map;
function hh(e,t,s){
s=Un(-1,s),s.tag=3,s.payload={
element:null
}
;
var a=t.value;
return s.callback=function(){
ja||(ja=!0,Xu=a),Au(e,t)
}
,s
}
function ph(e,t,s){
s=Un(-1,s),s.tag=3;
var a=e.type.getDerivedStateFromError;
if(typeof a=="function"){
var u=t.value;
s.payload=function(){
return a(u)
}
,s.callback=function(){
Au(e,t)
}

}
var d=e.stateNode;
return d!==null&&typeof d.componentDidCatch=="function"&&(s.callback=function(){
Au(e,t),typeof a!="function"&&(mr===null?mr=new Set([this]):mr.add(this));
var p=t.stack;
this.componentDidCatch(t.value,{
componentStack:p!==null?p:""
}
)
}
),s
}
function mh(e,t,s){
var a=e.pingCache;
if(a===null){
a=e.pingCache=new Ov;
var u=new Set;
a.set(t,u)
}
else u=a.get(t),u===void 0&&(u=new Set,a.set(t,u));
u.has(s)||(u.add(s),e=Qv.bind(null,e,t,s),t.then(e,e))
}
function yh(e){
do{
var t;
if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;
e=e.return
}
while(e!==null);
return null
}
function vh(e,t,s,a,u){
return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=Un(-1,1),t.tag=2,hr(s,t,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)
}
var jv=ae.ReactCurrentOwner,At=!1;
function It(e,t,s,a){
t.child=e===null?Df(t,null,s,a):Ni(t,e.child,s,a)
}
function gh(e,t,s,a,u){
s=s.render;
var d=t.ref;
return Ai(t,u),a=Iu(e,t,s,a,d,u),s=Lu(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,zn(e,t,u)):(Ge&&s&&fu(t),t.flags|=1,It(e,t,a,u),t.child)
}
function wh(e,t,s,a,u){
if(e===null){
var d=s.type;
return typeof d=="function"&&!oc(d)&&d.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=d,_h(e,t,d,a,u)):(e=Aa(s.type,null,a,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)
}
if(d=e.child,(e.lanes&u)===0){
var p=d.memoizedProps;
if(s=s.compare,s=s!==null?s:Bs,s(p,a)&&e.ref===t.ref)return zn(e,t,u)
}
return t.flags|=1,e=wr(d,a),e.ref=t.ref,e.return=t,t.child=e
}
function _h(e,t,s,a,u){
if(e!==null){
var d=e.memoizedProps;
if(Bs(d,a)&&e.ref===t.ref)if(At=!1,t.pendingProps=a=d,(e.lanes&u)!==0)(e.flags&131072)!==0&&(At=!0);
else return t.lanes=e.lanes,zn(e,t,u)
}
return Bu(e,t,s,a,u)
}
function kh(e,t,s){
var a=t.pendingProps,u=a.children,d=e!==null?e.memoizedState:null;
if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={
baseLanes:0,cachePool:null,transitions:null
}
,He($i,Wt),Wt|=s;
else{
if((s&1073741824)===0)return e=d!==null?d.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={
baseLanes:e,cachePool:null,transitions:null
}
,t.updateQueue=null,He($i,Wt),Wt|=e,null;
t.memoizedState={
baseLanes:0,cachePool:null,transitions:null
}
,a=d!==null?d.baseLanes:s,He($i,Wt),Wt|=a
}
else d!==null?(a=d.baseLanes|s,t.memoizedState=null):a=s,He($i,Wt),Wt|=a;
return It(e,t,u,s),t.child
}
function Sh(e,t){
var s=t.ref;
(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)
}
function Bu(e,t,s,a,u){
var d=Dt(s)?zr:St.current;
return d=ji(t,d),Ai(t,u),s=Iu(e,t,s,a,d,u),a=Lu(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,zn(e,t,u)):(Ge&&a&&fu(t),t.flags|=1,It(e,t,s,u),t.child)
}
function Ch(e,t,s,a,u){
if(Dt(s)){
var d=!0;
ua(t)
}
else d=!1;
if(Ai(t,u),t.stateNode===null)Ea(e,t),dh(t,s,a),Nu(t,s,a,u),a=!0;
else if(e===null){
var p=t.stateNode,_=t.memoizedProps;
p.props=_;
var C=p.context,j=s.contextType;
typeof j=="object"&&j!==null?j=Yt(j):(j=Dt(s)?zr:St.current,j=ji(t,j));
var q=s.getDerivedStateFromProps,H=typeof q=="function"||typeof p.getSnapshotBeforeUpdate=="function";
H||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==a||C!==j)&&fh(t,p,a,j),fr=!1;
var V=t.memoizedState;
p.state=V,ga(t,a,p,u),C=t.memoizedState,_!==a||V!==C||Nt.current||fr?(typeof q=="function"&&(Fu(t,s,q,a),C=t.memoizedState),(_=fr||ch(t,s,_,a,V,C,j))?(H||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=C),p.props=a,p.state=C,p.context=j,a=_):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),a=!1)
}
else{
p=t.stateNode,Bf(e,t),_=t.memoizedProps,j=t.type===t.elementType?_:un(t.type,_),p.props=j,H=t.pendingProps,V=p.context,C=s.contextType,typeof C=="object"&&C!==null?C=Yt(C):(C=Dt(s)?zr:St.current,C=ji(t,C));
var de=s.getDerivedStateFromProps;
(q=typeof de=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==H||V!==C)&&fh(t,p,a,C),fr=!1,V=t.memoizedState,p.state=V,ga(t,a,p,u);
var ge=t.memoizedState;
_!==H||V!==ge||Nt.current||fr?(typeof de=="function"&&(Fu(t,s,de,a),ge=t.memoizedState),(j=fr||ch(t,s,j,a,V,ge,C)||!1)?(q||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,ge,C),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,ge,C)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||_===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ge),p.props=a,p.state=ge,p.context=C,a=j):(typeof p.componentDidUpdate!="function"||_===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),a=!1)
}
return Uu(e,t,s,a,d,u)
}
function Uu(e,t,s,a,u,d){
Sh(e,t);
var p=(t.flags&128)!==0;
if(!a&&!p)return u&&Tf(t,s,!1),zn(e,t,d);
a=t.stateNode,jv.current=t;
var _=p&&typeof s.getDerivedStateFromError!="function"?null:a.render();
return t.flags|=1,e!==null&&p?(t.child=Ni(t,e.child,null,d),t.child=Ni(t,null,_,d)):It(e,t,_,d),t.memoizedState=a.state,u&&Tf(t,s,!0),t.child
}
function xh(e){
var t=e.stateNode;
t.pendingContext?Rf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rf(e,t.context,!1),Cu(e,t.containerInfo)
}
function Ph(e,t,s,a,u){
return Fi(),yu(u),t.flags|=256,It(e,t,s,a),t.child
}
var zu={
dehydrated:null,treeContext:null,retryLane:0
}
;
function $u(e){
return{
baseLanes:e,cachePool:null,transitions:null
}

}
function Rh(e,t,s){
var a=t.pendingProps,u=Ye.current,d=!1,p=(t.flags&128)!==0,_;
if((_=p)||(_=e!==null&&e.memoizedState===null?!1:(u&2)!==0),_?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),He(Ye,u&1),e===null)return mu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=a.children,e=a.fallback,d?(a=t.mode,d=t.child,p={
mode:"hidden",children:p
}
,(a&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=p):d=Ba(p,a,0,null),e=Jr(e,a,s,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=$u(s),t.memoizedState=zu,e):Vu(t,p));
if(u=e.memoizedState,u!==null&&(_=u.dehydrated,_!==null))return bv(e,t,p,a,_,u,s);
if(d){
d=a.fallback,p=t.mode,u=e.child,_=u.sibling;
var C={
mode:"hidden",children:a.children
}
;
return(p&1)===0&&t.child!==u?(a=t.child,a.childLanes=0,a.pendingProps=C,t.deletions=null):(a=wr(u,C),a.subtreeFlags=u.subtreeFlags&14680064),_!==null?d=wr(_,d):(d=Jr(d,p,s,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,a=d,d=t.child,p=e.child.memoizedState,p=p===null?$u(s):{
baseLanes:p.baseLanes|s,cachePool:null,transitions:p.transitions
}
,d.memoizedState=p,d.childLanes=e.childLanes&~s,t.memoizedState=zu,a
}
return d=e.child,e=d.sibling,a=wr(d,{
mode:"visible",children:a.children
}
),(t.mode&1)===0&&(a.lanes=s),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a
}
function Vu(e,t){
return t=Ba({
mode:"visible",children:t
}
,e.mode,0,null),t.return=e,e.child=t
}
function Ra(e,t,s,a){
return a!==null&&yu(a),Ni(t,e.child,null,s),e=Vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e
}
function bv(e,t,s,a,u,d,p){
if(s)return t.flags&256?(t.flags&=-257,a=Du(Error(i(422))),Ra(e,t,p,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=a.fallback,u=t.mode,a=Ba({
mode:"visible",children:a.children
}
,u,0,null),d=Jr(d,u,p,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,(t.mode&1)!==0&&Ni(t,e.child,null,p),t.child.memoizedState=$u(p),t.memoizedState=zu,d);
if((t.mode&1)===0)return Ra(e,t,p,null);
if(u.data==="$!"){
if(a=u.nextSibling&&u.nextSibling.dataset,a)var _=a.dgst;
return a=_,d=Error(i(419)),a=Du(d,a,void 0),Ra(e,t,p,a)
}
if(_=(p&e.childLanes)!==0,At||_){
if(a=pt,a!==null){
switch(p&-p){
case 4:u=2;
break;
case 16:u=8;
break;
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;
break;
case 536870912:u=268435456;
break;
default:u=0
}
u=(u&(a.suspendedLanes|p))!==0?0:u,u!==0&&u!==d.retryLane&&(d.retryLane=u,Bn(e,u),fn(a,e,u,-1))
}
return sc(),a=Du(Error(i(421))),Ra(e,t,p,a)
}
return u.data==="$?"?(t.flags|=128,t.child=e.child,t=Zv.bind(null,e),u._reactRetry=t,null):(e=d.treeContext,Ht=lr(u.nextSibling),Zt=t,Ge=!0,ln=null,e!==null&&(Gt[Jt++]=Dn,Gt[Jt++]=An,Gt[Jt++]=$r,Dn=e.id,An=e.overflow,$r=t),t=Vu(t,a.children),t.flags|=4096,t)
}
function Eh(e,t,s){
e.lanes|=t;
var a=e.alternate;
a!==null&&(a.lanes|=t),_u(e.return,t,s)
}
function qu(e,t,s,a,u){
var d=e.memoizedState;
d===null?e.memoizedState={
isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:u
}
:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=s,d.tailMode=u)
}
function Th(e,t,s){
var a=t.pendingProps,u=a.revealOrder,d=a.tail;
if(It(e,t,a.children,s),a=Ye.current,(a&2)!==0)a=a&1|2,t.flags|=128;
else{
if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;
e!==null;
){
if(e.tag===13)e.memoizedState!==null&&Eh(e,s,t);
else if(e.tag===19)Eh(e,s,t);
else if(e.child!==null){
e.child.return=e,e=e.child;
continue
}
if(e===t)break e;
for(;
e.sibling===null;
){
if(e.return===null||e.return===t)break e;
e=e.return
}
e.sibling.return=e.return,e=e.sibling
}
a&=1
}
if(He(Ye,a),(t.mode&1)===0)t.memoizedState=null;
else switch(u){
case"forwards":for(s=t.child,u=null;
s!==null;
)e=s.alternate,e!==null&&wa(e)===null&&(u=s),s=s.sibling;
s=u,s===null?(u=t.child,t.child=null):(u=s.sibling,s.sibling=null),qu(t,!1,u,s,d);
break;
case"backwards":for(s=null,u=t.child,t.child=null;
u!==null;
){
if(e=u.alternate,e!==null&&wa(e)===null){
t.child=u;
break
}
e=u.sibling,u.sibling=s,s=u,u=e
}
qu(t,!0,s,null,d);
break;
case"together":qu(t,!1,null,null,void 0);
break;
default:t.memoizedState=null
}
return t.child
}
function Ea(e,t){
(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)
}
function zn(e,t,s){
if(e!==null&&(t.dependencies=e.dependencies),Hr|=t.lanes,(s&t.childLanes)===0)return null;
if(e!==null&&t.child!==e.child)throw Error(i(153));
if(t.child!==null){
for(e=t.child,s=wr(e,e.pendingProps),t.child=s,s.return=t;
e.sibling!==null;
)e=e.sibling,s=s.sibling=wr(e,e.pendingProps),s.return=t;
s.sibling=null
}
return t.child
}
function Mv(e,t,s){
switch(t.tag){
case 3:xh(t),Fi();
break;
case 5:$f(t);
break;
case 1:Dt(t.type)&&ua(t);
break;
case 4:Cu(t,t.stateNode.containerInfo);
break;
case 10:var a=t.type._context,u=t.memoizedProps.value;
He(ma,a._currentValue),a._currentValue=u;
break;
case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(He(Ye,Ye.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?Rh(e,t,s):(He(Ye,Ye.current&1),e=zn(e,t,s),e!==null?e.sibling:null);
He(Ye,Ye.current&1);
break;
case 19:if(a=(s&t.childLanes)!==0,(e.flags&128)!==0){
if(a)return Th(e,t,s);
t.flags|=128
}
if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),He(Ye,Ye.current),a)break;
return null;
case 22:case 23:return t.lanes=0,kh(e,t,s)
}
return zn(e,t,s)
}
var Ih,Qu,Lh,Oh;
Ih=function(e,t){
for(var s=t.child;
s!==null;
){
if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);
else if(s.tag!==4&&s.child!==null){
s.child.return=s,s=s.child;
continue
}
if(s===t)break;
for(;
s.sibling===null;
){
if(s.return===null||s.return===t)return;
s=s.return
}
s.sibling.return=s.return,s=s.sibling
}

}
,Qu=function(){

}
,Lh=function(e,t,s,a){
var u=e.memoizedProps;
if(u!==a){
e=t.stateNode,Qr(xn.current);
var d=null;
switch(s){
case"input":u=Ft(e,u),a=Ft(e,a),d=[];
break;
case"select":u=N({

}
,u,{
value:void 0
}
),a=N({

}
,a,{
value:void 0
}
),d=[];
break;
case"textarea":u=Ze(e,u),a=Ze(e,a),d=[];
break;
default:typeof u.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=oa)
}
Pl(s,a);
var p;
s=null;
for(j in u)if(!a.hasOwnProperty(j)&&u.hasOwnProperty(j)&&u[j]!=null)if(j==="style"){
var _=u[j];
for(p in _)_.hasOwnProperty(p)&&(s||(s={

}
),s[p]="")
}
else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(l.hasOwnProperty(j)?d||(d=[]):(d=d||[]).push(j,null));
for(j in a){
var C=a[j];
if(_=u!=null?u[j]:void 0,a.hasOwnProperty(j)&&C!==_&&(C!=null||_!=null))if(j==="style")if(_){
for(p in _)!_.hasOwnProperty(p)||C&&C.hasOwnProperty(p)||(s||(s={

}
),s[p]="");
for(p in C)C.hasOwnProperty(p)&&_[p]!==C[p]&&(s||(s={

}
),s[p]=C[p])
}
else s||(d||(d=[]),d.push(j,s)),s=C;
else j==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,_=_?_.__html:void 0,C!=null&&_!==C&&(d=d||[]).push(j,C)):j==="children"?typeof C!="string"&&typeof C!="number"||(d=d||[]).push(j,""+C):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(l.hasOwnProperty(j)?(C!=null&&j==="onScroll"&&We("scroll",e),d||_===C||(d=[])):(d=d||[]).push(j,C))
}
s&&(d=d||[]).push("style",s);
var j=d;
(t.updateQueue=j)&&(t.flags|=4)
}

}
,Oh=function(e,t,s,a){
s!==a&&(t.flags|=4)
}
;
function eo(e,t){
if(!Ge)switch(e.tailMode){
case"hidden":t=e.tail;
for(var s=null;
t!==null;
)t.alternate!==null&&(s=t),t=t.sibling;
s===null?e.tail=null:s.sibling=null;
break;
case"collapsed":s=e.tail;
for(var a=null;
s!==null;
)s.alternate!==null&&(a=s),s=s.sibling;
a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null
}

}
function xt(e){
var t=e.alternate!==null&&e.alternate.child===e.child,s=0,a=0;
if(t)for(var u=e.child;
u!==null;
)s|=u.lanes|u.childLanes,a|=u.subtreeFlags&14680064,a|=u.flags&14680064,u.return=e,u=u.sibling;
else for(u=e.child;
u!==null;
)s|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=e,u=u.sibling;
return e.subtreeFlags|=a,e.childLanes=s,t
}
function Fv(e,t,s){
var a=t.pendingProps;
switch(hu(t),t.tag){
case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(t),null;
case 1:return Dt(t.type)&&la(),xt(t),null;
case 3:return a=t.stateNode,Bi(),Ke(Nt),Ke(St),Ru(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ha(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ln!==null&&(nc(ln),ln=null))),Qu(e,t),xt(t),null;
case 5:xu(t);
var u=Qr(Ks.current);
if(s=t.type,e!==null&&t.stateNode!=null)Lh(e,t,s,a,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);
else{
if(!a){
if(t.stateNode===null)throw Error(i(166));
return xt(t),null
}
if(e=Qr(xn.current),ha(t)){
a=t.stateNode,s=t.type;
var d=t.memoizedProps;
switch(a[Cn]=t,a[qs]=d,e=(t.mode&1)!==0,s){
case"dialog":We("cancel",a),We("close",a);
break;
case"iframe":case"object":case"embed":We("load",a);
break;
case"video":case"audio":for(u=0;
u<zs.length;
u++)We(zs[u],a);
break;
case"source":We("error",a);
break;
case"img":case"image":case"link":We("error",a),We("load",a);
break;
case"details":We("toggle",a);
break;
case"input":rt(a,d),We("invalid",a);
break;
case"select":a._wrapperState={
wasMultiple:!!d.multiple
}
,We("invalid",a);
break;
case"textarea":kn(a,d),We("invalid",a)
}
Pl(s,d),u=null;
for(var p in d)if(d.hasOwnProperty(p)){
var _=d[p];
p==="children"?typeof _=="string"?a.textContent!==_&&(d.suppressHydrationWarning!==!0&&sa(a.textContent,_,e),u=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(d.suppressHydrationWarning!==!0&&sa(a.textContent,_,e),u=["children",""+_]):l.hasOwnProperty(p)&&_!=null&&p==="onScroll"&&We("scroll",a)
}
switch(s){
case"input":Je(a),Mn(a,d,!0);
break;
case"textarea":Je(a),No(a);
break;
case"select":case"option":break;
default:typeof d.onClick=="function"&&(a.onclick=oa)
}
a=u,t.updateQueue=a,a!==null&&(t.flags|=4)
}
else{
p=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Do(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=p.createElement(s,{
is:a.is
}
):(e=p.createElement(s),s==="select"&&(p=e,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):e=p.createElementNS(e,s),e[Cn]=t,e[qs]=a,Ih(e,t,!1,!1),t.stateNode=e;
e:{
switch(p=Rl(s,a),s){
case"dialog":We("cancel",e),We("close",e),u=a;
break;
case"iframe":case"object":case"embed":We("load",e),u=a;
break;
case"video":case"audio":for(u=0;
u<zs.length;
u++)We(zs[u],e);
u=a;
break;
case"source":We("error",e),u=a;
break;
case"img":case"image":case"link":We("error",e),We("load",e),u=a;
break;
case"details":We("toggle",e),u=a;
break;
case"input":rt(e,a),u=Ft(e,a),We("invalid",e);
break;
case"option":u=a;
break;
case"select":e._wrapperState={
wasMultiple:!!a.multiple
}
,u=N({

}
,a,{
value:void 0
}
),We("invalid",e);
break;
case"textarea":kn(e,a),u=Ze(e,a),We("invalid",e);
break;
default:u=a
}
Pl(s,u),_=u;
for(d in _)if(_.hasOwnProperty(d)){
var C=_[d];
d==="style"?wd(e,C):d==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&vd(e,C)):d==="children"?typeof C=="string"?(s!=="textarea"||C!=="")&&Ss(e,C):typeof C=="number"&&Ss(e,""+C):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(l.hasOwnProperty(d)?C!=null&&d==="onScroll"&&We("scroll",e):C!=null&&K(e,d,C,p))
}
switch(s){
case"input":Je(e),Mn(e,a,!1);
break;
case"textarea":Je(e),No(e);
break;
case"option":a.value!=null&&e.setAttribute("value",""+ye(a.value));
break;
case"select":e.multiple=!!a.multiple,d=a.value,d!=null?Be(e,!!a.multiple,d,!1):a.defaultValue!=null&&Be(e,!!a.multiple,a.defaultValue,!0);
break;
default:typeof u.onClick=="function"&&(e.onclick=oa)
}
switch(s){
case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;
break e;
case"img":a=!0;
break e;
default:a=!1
}

}
a&&(t.flags|=4)
}
t.ref!==null&&(t.flags|=512,t.flags|=2097152)
}
return xt(t),null;
case 6:if(e&&t.stateNode!=null)Oh(e,t,e.memoizedProps,a);
else{
if(typeof a!="string"&&t.stateNode===null)throw Error(i(166));
if(s=Qr(Ks.current),Qr(xn.current),ha(t)){
if(a=t.stateNode,s=t.memoizedProps,a[Cn]=t,(d=a.nodeValue!==s)&&(e=Zt,e!==null))switch(e.tag){
case 3:sa(a.nodeValue,s,(e.mode&1)!==0);
break;
case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sa(a.nodeValue,s,(e.mode&1)!==0)
}
d&&(t.flags|=4)
}
else a=(s.nodeType===9?s:s.ownerDocument).createTextNode(a),a[Cn]=t,t.stateNode=a
}
return xt(t),null;
case 13:if(Ke(Ye),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){
if(Ge&&Ht!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Mf(),Fi(),t.flags|=98560,d=!1;
else if(d=ha(t),a!==null&&a.dehydrated!==null){
if(e===null){
if(!d)throw Error(i(318));
if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));
d[Cn]=t
}
else Fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;
xt(t),d=!1
}
else ln!==null&&(nc(ln),ln=null),d=!0;
if(!d)return t.flags&65536?t:null
}
return(t.flags&128)!==0?(t.lanes=s,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ye.current&1)!==0?ct===0&&(ct=3):sc())),t.updateQueue!==null&&(t.flags|=4),xt(t),null);
case 4:return Bi(),Qu(e,t),e===null&&$s(t.stateNode.containerInfo),xt(t),null;
case 10:return wu(t.type._context),xt(t),null;
case 17:return Dt(t.type)&&la(),xt(t),null;
case 19:if(Ke(Ye),d=t.memoizedState,d===null)return xt(t),null;
if(a=(t.flags&128)!==0,p=d.rendering,p===null)if(a)eo(d,!1);
else{
if(ct!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;
e!==null;
){
if(p=wa(e),p!==null){
for(t.flags|=128,eo(d,!1),a=p.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=s,s=t.child;
s!==null;
)d=s,e=a,d.flags&=14680066,p=d.alternate,p===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=p.childLanes,d.lanes=p.lanes,d.child=p.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=p.memoizedProps,d.memoizedState=p.memoizedState,d.updateQueue=p.updateQueue,d.type=p.type,e=p.dependencies,d.dependencies=e===null?null:{
lanes:e.lanes,firstContext:e.firstContext
}
),s=s.sibling;
return He(Ye,Ye.current&1|2),t.child
}
e=e.sibling
}
d.tail!==null&&st()>Vi&&(t.flags|=128,a=!0,eo(d,!1),t.lanes=4194304)
}
else{
if(!a)if(e=wa(p),e!==null){
if(t.flags|=128,a=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),eo(d,!0),d.tail===null&&d.tailMode==="hidden"&&!p.alternate&&!Ge)return xt(t),null
}
else 2*st()-d.renderingStartTime>Vi&&s!==1073741824&&(t.flags|=128,a=!0,eo(d,!1),t.lanes=4194304);
d.isBackwards?(p.sibling=t.child,t.child=p):(s=d.last,s!==null?s.sibling=p:t.child=p,d.last=p)
}
return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=st(),t.sibling=null,s=Ye.current,He(Ye,a?s&1|2:s&1),t):(xt(t),null);
case 22:case 23:return ic(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Wt&1073741824)!==0&&(xt(t),t.subtreeFlags&6&&(t.flags|=8192)):xt(t),null;
case 24:return null;
case 25:return null
}
throw Error(i(156,t.tag))
}
function Nv(e,t){
switch(hu(t),t.tag){
case 1:return Dt(t.type)&&la(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;
case 3:return Bi(),Ke(Nt),Ke(St),Ru(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;
case 5:return xu(t),null;
case 13:if(Ke(Ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){
if(t.alternate===null)throw Error(i(340));
Fi()
}
return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;
case 19:return Ke(Ye),null;
case 4:return Bi(),null;
case 10:return wu(t.type._context),null;
case 22:case 23:return ic(),null;
case 24:return null;
default:return null
}

}
var Ta=!1,Pt=!1,Dv=typeof WeakSet=="function"?WeakSet:Set,ve=null;
function zi(e,t){
var s=e.ref;
if(s!==null)if(typeof s=="function")try{
s(null)
}
catch(a){
tt(e,t,a)
}
else s.current=null
}
function Zu(e,t,s){
try{
s()
}
catch(a){
tt(e,t,a)
}

}
var jh=!1;
function Av(e,t){
if(iu=Wo,e=cf(),Gl(e)){
if("selectionStart"in e)var s={
start:e.selectionStart,end:e.selectionEnd
}
;
else e:{
s=(s=e.ownerDocument)&&s.defaultView||window;
var a=s.getSelection&&s.getSelection();
if(a&&a.rangeCount!==0){
s=a.anchorNode;
var u=a.anchorOffset,d=a.focusNode;
a=a.focusOffset;
try{
s.nodeType,d.nodeType
}
catch{
s=null;
break e
}
var p=0,_=-1,C=-1,j=0,q=0,H=e,V=null;
t:for(;
;
){
for(var de;
H!==s||u!==0&&H.nodeType!==3||(_=p+u),H!==d||a!==0&&H.nodeType!==3||(C=p+a),H.nodeType===3&&(p+=H.nodeValue.length),(de=H.firstChild)!==null;
)V=H,H=de;
for(;
;
){
if(H===e)break t;
if(V===s&&++j===u&&(_=p),V===d&&++q===a&&(C=p),(de=H.nextSibling)!==null)break;
H=V,V=H.parentNode
}
H=de
}
s=_===-1||C===-1?null:{
start:_,end:C
}

}
else s=null
}
s=s||{
start:0,end:0
}

}
else s=null;
for(su={
focusedElem:e,selectionRange:s
}
,Wo=!1,ve=t;
ve!==null;
)if(t=ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ve=e;
else for(;
ve!==null;
){
t=ve;
try{
var ge=t.alternate;
if((t.flags&1024)!==0)switch(t.tag){
case 0:case 11:case 15:break;
case 1:if(ge!==null){
var ke=ge.memoizedProps,ot=ge.memoizedState,R=t.stateNode,P=R.getSnapshotBeforeUpdate(t.elementType===t.type?ke:un(t.type,ke),ot);
R.__reactInternalSnapshotBeforeUpdate=P
}
break;
case 3:var T=t.stateNode.containerInfo;
T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);
break;
case 5:case 6:case 4:case 17:break;
default:throw Error(i(163))
}

}
catch(Y){
tt(t,t.return,Y)
}
if(e=t.sibling,e!==null){
e.return=t.return,ve=e;
break
}
ve=t.return
}
return ge=jh,jh=!1,ge
}
function to(e,t,s){
var a=t.updateQueue;
if(a=a!==null?a.lastEffect:null,a!==null){
var u=a=a.next;
do{
if((u.tag&e)===e){
var d=u.destroy;
u.destroy=void 0,d!==void 0&&Zu(t,s,d)
}
u=u.next
}
while(u!==a)
}

}
function Ia(e,t){
if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){
var s=t=t.next;
do{
if((s.tag&e)===e){
var a=s.create;
s.destroy=a()
}
s=s.next
}
while(s!==t)
}

}
function Hu(e){
var t=e.ref;
if(t!==null){
var s=e.stateNode;
switch(e.tag){
case 5:e=s;
break;
default:e=s
}
typeof t=="function"?t(e):t.current=e
}

}
function bh(e){
var t=e.alternate;
t!==null&&(e.alternate=null,bh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Cn],delete t[qs],delete t[uu],delete t[_v],delete t[kv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null
}
function Mh(e){
return e.tag===5||e.tag===3||e.tag===4
}
function Fh(e){
e:for(;
;
){
for(;
e.sibling===null;
){
if(e.return===null||Mh(e.return))return null;
e=e.return
}
for(e.sibling.return=e.return,e=e.sibling;
e.tag!==5&&e.tag!==6&&e.tag!==18;
){
if(e.flags&2||e.child===null||e.tag===4)continue e;
e.child.return=e,e=e.child
}
if(!(e.flags&2))return e.stateNode
}

}
function Wu(e,t,s){
var a=e.tag;
if(a===5||a===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=oa));
else if(a!==4&&(e=e.child,e!==null))for(Wu(e,t,s),e=e.sibling;
e!==null;
)Wu(e,t,s),e=e.sibling
}
function Ku(e,t,s){
var a=e.tag;
if(a===5||a===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);
else if(a!==4&&(e=e.child,e!==null))for(Ku(e,t,s),e=e.sibling;
e!==null;
)Ku(e,t,s),e=e.sibling
}
var gt=null,cn=!1;
function pr(e,t,s){
for(s=s.child;
s!==null;
)Nh(e,t,s),s=s.sibling
}
function Nh(e,t,s){
if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{
Sn.onCommitFiberUnmount($o,s)
}
catch{

}
switch(s.tag){
case 5:Pt||zi(s,t);
case 6:var a=gt,u=cn;
gt=null,pr(e,t,s),gt=a,cn=u,gt!==null&&(cn?(e=gt,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):gt.removeChild(s.stateNode));
break;
case 18:gt!==null&&(cn?(e=gt,s=s.stateNode,e.nodeType===8?lu(e.parentNode,s):e.nodeType===1&&lu(e,s),bs(e)):lu(gt,s.stateNode));
break;
case 4:a=gt,u=cn,gt=s.stateNode.containerInfo,cn=!0,pr(e,t,s),gt=a,cn=u;
break;
case 0:case 11:case 14:case 15:if(!Pt&&(a=s.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){
u=a=a.next;
do{
var d=u,p=d.destroy;
d=d.tag,p!==void 0&&((d&2)!==0||(d&4)!==0)&&Zu(s,t,p),u=u.next
}
while(u!==a)
}
pr(e,t,s);
break;
case 1:if(!Pt&&(zi(s,t),a=s.stateNode,typeof a.componentWillUnmount=="function"))try{
a.props=s.memoizedProps,a.state=s.memoizedState,a.componentWillUnmount()
}
catch(_){
tt(s,t,_)
}
pr(e,t,s);
break;
case 21:pr(e,t,s);
break;
case 22:s.mode&1?(Pt=(a=Pt)||s.memoizedState!==null,pr(e,t,s),Pt=a):pr(e,t,s);
break;
default:pr(e,t,s)
}

}
function Dh(e){
var t=e.updateQueue;
if(t!==null){
e.updateQueue=null;
var s=e.stateNode;
s===null&&(s=e.stateNode=new Dv),t.forEach(function(a){
var u=Hv.bind(null,e,a);
s.has(a)||(s.add(a),a.then(u,u))
}
)
}

}
function dn(e,t){
var s=t.deletions;
if(s!==null)for(var a=0;
a<s.length;
a++){
var u=s[a];
try{
var d=e,p=t,_=p;
e:for(;
_!==null;
){
switch(_.tag){
case 5:gt=_.stateNode,cn=!1;
break e;
case 3:gt=_.stateNode.containerInfo,cn=!0;
break e;
case 4:gt=_.stateNode.containerInfo,cn=!0;
break e
}
_=_.return
}
if(gt===null)throw Error(i(160));
Nh(d,p,u),gt=null,cn=!1;
var C=u.alternate;
C!==null&&(C.return=null),u.return=null
}
catch(j){
tt(u,t,j)
}

}
if(t.subtreeFlags&12854)for(t=t.child;
t!==null;
)Ah(t,e),t=t.sibling
}
function Ah(e,t){
var s=e.alternate,a=e.flags;
switch(e.tag){
case 0:case 11:case 14:case 15:if(dn(t,e),Rn(e),a&4){
try{
to(3,e,e.return),Ia(3,e)
}
catch(ke){
tt(e,e.return,ke)
}
try{
to(5,e,e.return)
}
catch(ke){
tt(e,e.return,ke)
}

}
break;
case 1:dn(t,e),Rn(e),a&512&&s!==null&&zi(s,s.return);
break;
case 5:if(dn(t,e),Rn(e),a&512&&s!==null&&zi(s,s.return),e.flags&32){
var u=e.stateNode;
try{
Ss(u,"")
}
catch(ke){
tt(e,e.return,ke)
}

}
if(a&4&&(u=e.stateNode,u!=null)){
var d=e.memoizedProps,p=s!==null?s.memoizedProps:d,_=e.type,C=e.updateQueue;
if(e.updateQueue=null,C!==null)try{
_==="input"&&d.type==="radio"&&d.name!=null&&vt(u,d),Rl(_,p);
var j=Rl(_,d);
for(p=0;
p<C.length;
p+=2){
var q=C[p],H=C[p+1];
q==="style"?wd(u,H):q==="dangerouslySetInnerHTML"?vd(u,H):q==="children"?Ss(u,H):K(u,q,H,j)
}
switch(_){
case"input":it(u,d);
break;
case"textarea":ks(u,d);
break;
case"select":var V=u._wrapperState.wasMultiple;
u._wrapperState.wasMultiple=!!d.multiple;
var de=d.value;
de!=null?Be(u,!!d.multiple,de,!1):V!==!!d.multiple&&(d.defaultValue!=null?Be(u,!!d.multiple,d.defaultValue,!0):Be(u,!!d.multiple,d.multiple?[]:"",!1))
}
u[qs]=d
}
catch(ke){
tt(e,e.return,ke)
}

}
break;
case 6:if(dn(t,e),Rn(e),a&4){
if(e.stateNode===null)throw Error(i(162));
u=e.stateNode,d=e.memoizedProps;
try{
u.nodeValue=d
}
catch(ke){
tt(e,e.return,ke)
}

}
break;
case 3:if(dn(t,e),Rn(e),a&4&&s!==null&&s.memoizedState.isDehydrated)try{
bs(t.containerInfo)
}
catch(ke){
tt(e,e.return,ke)
}
break;
case 4:dn(t,e),Rn(e);
break;
case 13:dn(t,e),Rn(e),u=e.child,u.flags&8192&&(d=u.memoizedState!==null,u.stateNode.isHidden=d,!d||u.alternate!==null&&u.alternate.memoizedState!==null||(Yu=st())),a&4&&Dh(e);
break;
case 22:if(q=s!==null&&s.memoizedState!==null,e.mode&1?(Pt=(j=Pt)||q,dn(t,e),Pt=j):dn(t,e),Rn(e),a&8192){
if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!q&&(e.mode&1)!==0)for(ve=e,q=e.child;
q!==null;
){
for(H=ve=q;
ve!==null;
){
switch(V=ve,de=V.child,V.tag){
case 0:case 11:case 14:case 15:to(4,V,V.return);
break;
case 1:zi(V,V.return);
var ge=V.stateNode;
if(typeof ge.componentWillUnmount=="function"){
a=V,s=V.return;
try{
t=a,ge.props=t.memoizedProps,ge.state=t.memoizedState,ge.componentWillUnmount()
}
catch(ke){
tt(a,s,ke)
}

}
break;
case 5:zi(V,V.return);
break;
case 22:if(V.memoizedState!==null){
zh(H);
continue
}

}
de!==null?(de.return=V,ve=de):zh(H)
}
q=q.sibling
}
e:for(q=null,H=e;
;
){
if(H.tag===5){
if(q===null){
q=H;
try{
u=H.stateNode,j?(d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(_=H.stateNode,C=H.memoizedProps.style,p=C!=null&&C.hasOwnProperty("display")?C.display:null,_.style.display=gd("display",p))
}
catch(ke){
tt(e,e.return,ke)
}

}

}
else if(H.tag===6){
if(q===null)try{
H.stateNode.nodeValue=j?"":H.memoizedProps
}
catch(ke){
tt(e,e.return,ke)
}

}
else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){
H.child.return=H,H=H.child;
continue
}
if(H===e)break e;
for(;
H.sibling===null;
){
if(H.return===null||H.return===e)break e;
q===H&&(q=null),H=H.return
}
q===H&&(q=null),H.sibling.return=H.return,H=H.sibling
}

}
break;
case 19:dn(t,e),Rn(e),a&4&&Dh(e);
break;
case 21:break;
default:dn(t,e),Rn(e)
}

}
function Rn(e){
var t=e.flags;
if(t&2){
try{
e:{
for(var s=e.return;
s!==null;
){
if(Mh(s)){
var a=s;
break e
}
s=s.return
}
throw Error(i(160))
}
switch(a.tag){
case 5:var u=a.stateNode;
a.flags&32&&(Ss(u,""),a.flags&=-33);
var d=Fh(e);
Ku(e,d,u);
break;
case 3:case 4:var p=a.stateNode.containerInfo,_=Fh(e);
Wu(e,_,p);
break;
default:throw Error(i(161))
}

}
catch(C){
tt(e,e.return,C)
}
e.flags&=-3
}
t&4096&&(e.flags&=-4097)
}
function Bv(e,t,s){
ve=e,Bh(e)
}
function Bh(e,t,s){
for(var a=(e.mode&1)!==0;
ve!==null;
){
var u=ve,d=u.child;
if(u.tag===22&&a){
var p=u.memoizedState!==null||Ta;
if(!p){
var _=u.alternate,C=_!==null&&_.memoizedState!==null||Pt;
_=Ta;
var j=Pt;
if(Ta=p,(Pt=C)&&!j)for(ve=u;
ve!==null;
)p=ve,C=p.child,p.tag===22&&p.memoizedState!==null?$h(u):C!==null?(C.return=p,ve=C):$h(u);
for(;
d!==null;
)ve=d,Bh(d),d=d.sibling;
ve=u,Ta=_,Pt=j
}
Uh(e)
}
else(u.subtreeFlags&8772)!==0&&d!==null?(d.return=u,ve=d):Uh(e)
}

}
function Uh(e){
for(;
ve!==null;
){
var t=ve;
if((t.flags&8772)!==0){
var s=t.alternate;
try{
if((t.flags&8772)!==0)switch(t.tag){
case 0:case 11:case 15:Pt||Ia(5,t);
break;
case 1:var a=t.stateNode;
if(t.flags&4&&!Pt)if(s===null)a.componentDidMount();
else{
var u=t.elementType===t.type?s.memoizedProps:un(t.type,s.memoizedProps);
a.componentDidUpdate(u,s.memoizedState,a.__reactInternalSnapshotBeforeUpdate)
}
var d=t.updateQueue;
d!==null&&zf(t,d,a);
break;
case 3:var p=t.updateQueue;
if(p!==null){
if(s=null,t.child!==null)switch(t.child.tag){
case 5:s=t.child.stateNode;
break;
case 1:s=t.child.stateNode
}
zf(t,p,s)
}
break;
case 5:var _=t.stateNode;
if(s===null&&t.flags&4){
s=_;
var C=t.memoizedProps;
switch(t.type){
case"button":case"input":case"select":case"textarea":C.autoFocus&&s.focus();
break;
case"img":C.src&&(s.src=C.src)
}

}
break;
case 6:break;
case 4:break;
case 12:break;
case 13:if(t.memoizedState===null){
var j=t.alternate;
if(j!==null){
var q=j.memoizedState;
if(q!==null){
var H=q.dehydrated;
H!==null&&bs(H)
}

}

}
break;
case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(i(163))
}
Pt||t.flags&512&&Hu(t)
}
catch(V){
tt(t,t.return,V)
}

}
if(t===e){
ve=null;
break
}
if(s=t.sibling,s!==null){
s.return=t.return,ve=s;
break
}
ve=t.return
}

}
function zh(e){
for(;
ve!==null;
){
var t=ve;
if(t===e){
ve=null;
break
}
var s=t.sibling;
if(s!==null){
s.return=t.return,ve=s;
break
}
ve=t.return
}

}
function $h(e){
for(;
ve!==null;
){
var t=ve;
try{
switch(t.tag){
case 0:case 11:case 15:var s=t.return;
try{
Ia(4,t)
}
catch(C){
tt(t,s,C)
}
break;
case 1:var a=t.stateNode;
if(typeof a.componentDidMount=="function"){
var u=t.return;
try{
a.componentDidMount()
}
catch(C){
tt(t,u,C)
}

}
var d=t.return;
try{
Hu(t)
}
catch(C){
tt(t,d,C)
}
break;
case 5:var p=t.return;
try{
Hu(t)
}
catch(C){
tt(t,p,C)
}

}

}
catch(C){
tt(t,t.return,C)
}
if(t===e){
ve=null;
break
}
var _=t.sibling;
if(_!==null){
_.return=t.return,ve=_;
break
}
ve=t.return
}

}
var Uv=Math.ceil,La=ae.ReactCurrentDispatcher,Gu=ae.ReactCurrentOwner,en=ae.ReactCurrentBatchConfig,$e=0,pt=null,lt=null,wt=0,Wt=0,$i=ur(0),ct=0,no=null,Hr=0,Oa=0,Ju=0,ro=null,Bt=null,Yu=0,Vi=1/0,$n=null,ja=!1,Xu=null,mr=null,ba=!1,yr=null,Ma=0,io=0,ec=null,Fa=-1,Na=0;
function Lt(){
return($e&6)!==0?st():Fa!==-1?Fa:Fa=st()
}
function vr(e){
return(e.mode&1)===0?1:($e&2)!==0&&wt!==0?wt&-wt:Cv.transition!==null?(Na===0&&(Na=Md()),Na):(e=Qe,e!==0||(e=window.event,e=e===void 0?16:Vd(e.type)),e)
}
function fn(e,t,s,a){
if(50<io)throw io=0,ec=null,Error(i(185));
Ts(e,s,a),(($e&2)===0||e!==pt)&&(e===pt&&(($e&2)===0&&(Oa|=s),ct===4&&gr(e,wt)),Ut(e,a),s===1&&$e===0&&(t.mode&1)===0&&(Vi=st()+500,ca&&dr()))
}
function Ut(e,t){
var s=e.callbackNode;
Cy(e,t);
var a=Qo(e,e===pt?wt:0);
if(a===0)s!==null&&Od(s),e.callbackNode=null,e.callbackPriority=0;
else if(t=a&-a,e.callbackPriority!==t){
if(s!=null&&Od(s),t===1)e.tag===0?Sv(qh.bind(null,e)):If(qh.bind(null,e)),gv(function(){
($e&6)===0&&dr()
}
),s=null;
else{
switch(Fd(a)){
case 1:s=bl;
break;
case 4:s=jd;
break;
case 16:s=zo;
break;
case 536870912:s=bd;
break;
default:s=zo
}
s=Yh(s,Vh.bind(null,e))
}
e.callbackPriority=t,e.callbackNode=s
}

}
function Vh(e,t){
if(Fa=-1,Na=0,($e&6)!==0)throw Error(i(327));
var s=e.callbackNode;
if(qi()&&e.callbackNode!==s)return null;
var a=Qo(e,e===pt?wt:0);
if(a===0)return null;
if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Da(e,a);
else{
t=a;
var u=$e;
$e|=2;
var d=Zh();
(pt!==e||wt!==t)&&($n=null,Vi=st()+500,Kr(e,t));
do try{
Vv();
break
}
catch(_){
Qh(e,_)
}
while(!0);
gu(),La.current=d,$e=u,lt!==null?t=0:(pt=null,wt=0,t=ct)
}
if(t!==0){
if(t===2&&(u=Ml(e),u!==0&&(a=u,t=tc(e,u))),t===1)throw s=no,Kr(e,0),gr(e,a),Ut(e,st()),s;
if(t===6)gr(e,a);
else{
if(u=e.current.alternate,(a&30)===0&&!zv(u)&&(t=Da(e,a),t===2&&(d=Ml(e),d!==0&&(a=d,t=tc(e,d))),t===1))throw s=no,Kr(e,0),gr(e,a),Ut(e,st()),s;
switch(e.finishedWork=u,e.finishedLanes=a,t){
case 0:case 1:throw Error(i(345));
case 2:Gr(e,Bt,$n);
break;
case 3:if(gr(e,a),(a&130023424)===a&&(t=Yu+500-st(),10<t)){
if(Qo(e,0)!==0)break;
if(u=e.suspendedLanes,(u&a)!==a){
Lt(),e.pingedLanes|=e.suspendedLanes&u;
break
}
e.timeoutHandle=au(Gr.bind(null,e,Bt,$n),t);
break
}
Gr(e,Bt,$n);
break;
case 4:if(gr(e,a),(a&4194240)===a)break;
for(t=e.eventTimes,u=-1;
0<a;
){
var p=31-on(a);
d=1<<p,p=t[p],p>u&&(u=p),a&=~d
}
if(a=u,a=st()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Uv(a/1960))-a,10<a){
e.timeoutHandle=au(Gr.bind(null,e,Bt,$n),a);
break
}
Gr(e,Bt,$n);
break;
case 5:Gr(e,Bt,$n);
break;
default:throw Error(i(329))
}

}

}
return Ut(e,st()),e.callbackNode===s?Vh.bind(null,e):null
}
function tc(e,t){
var s=ro;
return e.current.memoizedState.isDehydrated&&(Kr(e,t).flags|=256),e=Da(e,t),e!==2&&(t=Bt,Bt=s,t!==null&&nc(t)),e
}
function nc(e){
Bt===null?Bt=e:Bt.push.apply(Bt,e)
}
function zv(e){
for(var t=e;
;
){
if(t.flags&16384){
var s=t.updateQueue;
if(s!==null&&(s=s.stores,s!==null))for(var a=0;
a<s.length;
a++){
var u=s[a],d=u.getSnapshot;
u=u.value;
try{
if(!an(d(),u))return!1
}
catch{
return!1
}

}

}
if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;
else{
if(t===e)break;
for(;
t.sibling===null;
){
if(t.return===null||t.return===e)return!0;
t=t.return
}
t.sibling.return=t.return,t=t.sibling
}

}
return!0
}
function gr(e,t){
for(t&=~Ju,t&=~Oa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;
0<t;
){
var s=31-on(t),a=1<<s;
e[s]=-1,t&=~a
}

}
function qh(e){
if(($e&6)!==0)throw Error(i(327));
qi();
var t=Qo(e,0);
if((t&1)===0)return Ut(e,st()),null;
var s=Da(e,t);
if(e.tag!==0&&s===2){
var a=Ml(e);
a!==0&&(t=a,s=tc(e,a))
}
if(s===1)throw s=no,Kr(e,0),gr(e,t),Ut(e,st()),s;
if(s===6)throw Error(i(345));
return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gr(e,Bt,$n),Ut(e,st()),null
}
function rc(e,t){
var s=$e;
$e|=1;
try{
return e(t)
}
finally{
$e=s,$e===0&&(Vi=st()+500,ca&&dr())
}

}
function Wr(e){
yr!==null&&yr.tag===0&&($e&6)===0&&qi();
var t=$e;
$e|=1;
var s=en.transition,a=Qe;
try{
if(en.transition=null,Qe=1,e)return e()
}
finally{
Qe=a,en.transition=s,$e=t,($e&6)===0&&dr()
}

}
function ic(){
Wt=$i.current,Ke($i)
}
function Kr(e,t){
e.finishedWork=null,e.finishedLanes=0;
var s=e.timeoutHandle;
if(s!==-1&&(e.timeoutHandle=-1,vv(s)),lt!==null)for(s=lt.return;
s!==null;
){
var a=s;
switch(hu(a),a.tag){
case 1:a=a.type.childContextTypes,a!=null&&la();
break;
case 3:Bi(),Ke(Nt),Ke(St),Ru();
break;
case 5:xu(a);
break;
case 4:Bi();
break;
case 13:Ke(Ye);
break;
case 19:Ke(Ye);
break;
case 10:wu(a.type._context);
break;
case 22:case 23:ic()
}
s=s.return
}
if(pt=e,lt=e=wr(e.current,null),wt=Wt=t,ct=0,no=null,Ju=Oa=Hr=0,Bt=ro=null,qr!==null){
for(t=0;
t<qr.length;
t++)if(s=qr[t],a=s.interleaved,a!==null){
s.interleaved=null;
var u=a.next,d=s.pending;
if(d!==null){
var p=d.next;
d.next=u,a.next=p
}
s.pending=a
}
qr=null
}
return e
}
function Qh(e,t){
do{
var s=lt;
try{
if(gu(),_a.current=xa,ka){
for(var a=Xe.memoizedState;
a!==null;
){
var u=a.queue;
u!==null&&(u.pending=null),a=a.next
}
ka=!1
}
if(Zr=0,ht=ut=Xe=null,Gs=!1,Js=0,Gu.current=null,s===null||s.return===null){
ct=1,no=t,lt=null;
break
}
e:{
var d=e,p=s.return,_=s,C=t;
if(t=wt,_.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){
var j=C,q=_,H=q.tag;
if((q.mode&1)===0&&(H===0||H===11||H===15)){
var V=q.alternate;
V?(q.updateQueue=V.updateQueue,q.memoizedState=V.memoizedState,q.lanes=V.lanes):(q.updateQueue=null,q.memoizedState=null)
}
var de=yh(p);
if(de!==null){
de.flags&=-257,vh(de,p,_,d,t),de.mode&1&&mh(d,j,t),t=de,C=j;
var ge=t.updateQueue;
if(ge===null){
var ke=new Set;
ke.add(C),t.updateQueue=ke
}
else ge.add(C);
break e
}
else{
if((t&1)===0){
mh(d,j,t),sc();
break e
}
C=Error(i(426))
}

}
else if(Ge&&_.mode&1){
var ot=yh(p);
if(ot!==null){
(ot.flags&65536)===0&&(ot.flags|=256),vh(ot,p,_,d,t),yu(Ui(C,_));
break e
}

}
d=C=Ui(C,_),ct!==4&&(ct=2),ro===null?ro=[d]:ro.push(d),d=p;
do{
switch(d.tag){
case 3:d.flags|=65536,t&=-t,d.lanes|=t;
var R=hh(d,C,t);
Uf(d,R);
break e;
case 1:_=C;
var P=d.type,T=d.stateNode;
if((d.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(mr===null||!mr.has(T)))){
d.flags|=65536,t&=-t,d.lanes|=t;
var Y=ph(d,_,t);
Uf(d,Y);
break e
}

}
d=d.return
}
while(d!==null)
}
Wh(s)
}
catch(Se){
t=Se,lt===s&&s!==null&&(lt=s=s.return);
continue
}
break
}
while(!0)
}
function Zh(){
var e=La.current;
return La.current=xa,e===null?xa:e
}
function sc(){
(ct===0||ct===3||ct===2)&&(ct=4),pt===null||(Hr&268435455)===0&&(Oa&268435455)===0||gr(pt,wt)
}
function Da(e,t){
var s=$e;
$e|=2;
var a=Zh();
(pt!==e||wt!==t)&&($n=null,Kr(e,t));
do try{
$v();
break
}
catch(u){
Qh(e,u)
}
while(!0);
if(gu(),$e=s,La.current=a,lt!==null)throw Error(i(261));
return pt=null,wt=0,ct
}
function $v(){
for(;
lt!==null;
)Hh(lt)
}
function Vv(){
for(;
lt!==null&&!py();
)Hh(lt)
}
function Hh(e){
var t=Jh(e.alternate,e,Wt);
e.memoizedProps=e.pendingProps,t===null?Wh(e):lt=t,Gu.current=null
}
function Wh(e){
var t=e;
do{
var s=t.alternate;
if(e=t.return,(t.flags&32768)===0){
if(s=Fv(s,t,Wt),s!==null){
lt=s;
return
}

}
else{
if(s=Nv(s,t),s!==null){
s.flags&=32767,lt=s;
return
}
if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;
else{
ct=6,lt=null;
return
}

}
if(t=t.sibling,t!==null){
lt=t;
return
}
lt=t=e
}
while(t!==null);
ct===0&&(ct=5)
}
function Gr(e,t,s){
var a=Qe,u=en.transition;
try{
en.transition=null,Qe=1,qv(e,t,s,a)
}
finally{
en.transition=u,Qe=a
}
return null
}
function qv(e,t,s,a){
do qi();
while(yr!==null);
if(($e&6)!==0)throw Error(i(327));
s=e.finishedWork;
var u=e.finishedLanes;
if(s===null)return null;
if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(i(177));
e.callbackNode=null,e.callbackPriority=0;
var d=s.lanes|s.childLanes;
if(xy(e,d),e===pt&&(lt=pt=null,wt=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||ba||(ba=!0,Yh(zo,function(){
return qi(),null
}
)),d=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||d){
d=en.transition,en.transition=null;
var p=Qe;
Qe=1;
var _=$e;
$e|=4,Gu.current=null,Av(e,s),Ah(s,e),cv(su),Wo=!!iu,su=iu=null,e.current=s,Bv(s),my(),$e=_,Qe=p,en.transition=d
}
else e.current=s;
if(ba&&(ba=!1,yr=e,Ma=u),d=e.pendingLanes,d===0&&(mr=null),gy(s.stateNode),Ut(e,st()),t!==null)for(a=e.onRecoverableError,s=0;
s<t.length;
s++)u=t[s],a(u.value,{
componentStack:u.stack,digest:u.digest
}
);
if(ja)throw ja=!1,e=Xu,Xu=null,e;
return(Ma&1)!==0&&e.tag!==0&&qi(),d=e.pendingLanes,(d&1)!==0?e===ec?io++:(io=0,ec=e):io=0,dr(),null
}
function qi(){
if(yr!==null){
var e=Fd(Ma),t=en.transition,s=Qe;
try{
if(en.transition=null,Qe=16>e?16:e,yr===null)var a=!1;
else{
if(e=yr,yr=null,Ma=0,($e&6)!==0)throw Error(i(331));
var u=$e;
for($e|=4,ve=e.current;
ve!==null;
){
var d=ve,p=d.child;
if((ve.flags&16)!==0){
var _=d.deletions;
if(_!==null){
for(var C=0;
C<_.length;
C++){
var j=_[C];
for(ve=j;
ve!==null;
){
var q=ve;
switch(q.tag){
case 0:case 11:case 15:to(8,q,d)
}
var H=q.child;
if(H!==null)H.return=q,ve=H;
else for(;
ve!==null;
){
q=ve;
var V=q.sibling,de=q.return;
if(bh(q),q===j){
ve=null;
break
}
if(V!==null){
V.return=de,ve=V;
break
}
ve=de
}

}

}
var ge=d.alternate;
if(ge!==null){
var ke=ge.child;
if(ke!==null){
ge.child=null;
do{
var ot=ke.sibling;
ke.sibling=null,ke=ot
}
while(ke!==null)
}

}
ve=d
}

}
if((d.subtreeFlags&2064)!==0&&p!==null)p.return=d,ve=p;
else e:for(;
ve!==null;
){
if(d=ve,(d.flags&2048)!==0)switch(d.tag){
case 0:case 11:case 15:to(9,d,d.return)
}
var R=d.sibling;
if(R!==null){
R.return=d.return,ve=R;
break e
}
ve=d.return
}

}
var P=e.current;
for(ve=P;
ve!==null;
){
p=ve;
var T=p.child;
if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,ve=T;
else e:for(p=P;
ve!==null;
){
if(_=ve,(_.flags&2048)!==0)try{
switch(_.tag){
case 0:case 11:case 15:Ia(9,_)
}

}
catch(Se){
tt(_,_.return,Se)
}
if(_===p){
ve=null;
break e
}
var Y=_.sibling;
if(Y!==null){
Y.return=_.return,ve=Y;
break e
}
ve=_.return
}

}
if($e=u,dr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{
Sn.onPostCommitFiberRoot($o,e)
}
catch{

}
a=!0
}
return a
}
finally{
Qe=s,en.transition=t
}

}
return!1
}
function Kh(e,t,s){
t=Ui(s,t),t=hh(e,t,1),e=hr(e,t,1),t=Lt(),e!==null&&(Ts(e,1,t),Ut(e,t))
}
function tt(e,t,s){
if(e.tag===3)Kh(e,e,s);
else for(;
t!==null;
){
if(t.tag===3){
Kh(t,e,s);
break
}
else if(t.tag===1){
var a=t.stateNode;
if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(mr===null||!mr.has(a))){
e=Ui(s,e),e=ph(t,e,1),t=hr(t,e,1),e=Lt(),t!==null&&(Ts(t,1,e),Ut(t,e));
break
}

}
t=t.return
}

}
function Qv(e,t,s){
var a=e.pingCache;
a!==null&&a.delete(t),t=Lt(),e.pingedLanes|=e.suspendedLanes&s,pt===e&&(wt&s)===s&&(ct===4||ct===3&&(wt&130023424)===wt&&500>st()-Yu?Kr(e,0):Ju|=s),Ut(e,t)
}
function Gh(e,t){
t===0&&((e.mode&1)===0?t=1:(t=qo,qo<<=1,(qo&130023424)===0&&(qo=4194304)));
var s=Lt();
e=Bn(e,t),e!==null&&(Ts(e,t,s),Ut(e,s))
}
function Zv(e){
var t=e.memoizedState,s=0;
t!==null&&(s=t.retryLane),Gh(e,s)
}
function Hv(e,t){
var s=0;
switch(e.tag){
case 13:var a=e.stateNode,u=e.memoizedState;
u!==null&&(s=u.retryLane);
break;
case 19:a=e.stateNode;
break;
default:throw Error(i(314))
}
a!==null&&a.delete(t),Gh(e,s)
}
var Jh;
Jh=function(e,t,s){
if(e!==null)if(e.memoizedProps!==t.pendingProps||Nt.current)At=!0;
else{
if((e.lanes&s)===0&&(t.flags&128)===0)return At=!1,Mv(e,t,s);
At=(e.flags&131072)!==0
}
else At=!1,Ge&&(t.flags&1048576)!==0&&Lf(t,fa,t.index);
switch(t.lanes=0,t.tag){
case 2:var a=t.type;
Ea(e,t),e=t.pendingProps;
var u=ji(t,St.current);
Ai(t,s),u=Iu(null,t,a,e,u,s);
var d=Lu();
return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Dt(a)?(d=!0,ua(t)):d=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Su(t),u.updater=Pa,t.stateNode=u,u._reactInternals=t,Nu(t,a,e,s),t=Uu(null,t,a,!0,d,s)):(t.tag=0,Ge&&d&&fu(t),It(null,t,u,s),t=t.child),t;
case 16:a=t.elementType;
e:{
switch(Ea(e,t),e=t.pendingProps,u=a._init,a=u(a._payload),t.type=a,u=t.tag=Kv(a),e=un(a,e),u){
case 0:t=Bu(null,t,a,e,s);
break e;
case 1:t=Ch(null,t,a,e,s);
break e;
case 11:t=gh(null,t,a,e,s);
break e;
case 14:t=wh(null,t,a,un(a.type,e),s);
break e
}
throw Error(i(306,a,""))
}
return t;
case 0:return a=t.type,u=t.pendingProps,u=t.elementType===a?u:un(a,u),Bu(e,t,a,u,s);
case 1:return a=t.type,u=t.pendingProps,u=t.elementType===a?u:un(a,u),Ch(e,t,a,u,s);
case 3:e:{
if(xh(t),e===null)throw Error(i(387));
a=t.pendingProps,d=t.memoizedState,u=d.element,Bf(e,t),ga(t,a,null,s);
var p=t.memoizedState;
if(a=p.element,d.isDehydrated)if(d={
element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions
}
,t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){
u=Ui(Error(i(423)),t),t=Ph(e,t,a,s,u);
break e
}
else if(a!==u){
u=Ui(Error(i(424)),t),t=Ph(e,t,a,s,u);
break e
}
else for(Ht=lr(t.stateNode.containerInfo.firstChild),Zt=t,Ge=!0,ln=null,s=Df(t,null,a,s),t.child=s;
s;
)s.flags=s.flags&-3|4096,s=s.sibling;
else{
if(Fi(),a===u){
t=zn(e,t,s);
break e
}
It(e,t,a,s)
}
t=t.child
}
return t;
case 5:return $f(t),e===null&&mu(t),a=t.type,u=t.pendingProps,d=e!==null?e.memoizedProps:null,p=u.children,ou(a,u)?p=null:d!==null&&ou(a,d)&&(t.flags|=32),Sh(e,t),It(e,t,p,s),t.child;
case 6:return e===null&&mu(t),null;
case 13:return Rh(e,t,s);
case 4:return Cu(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ni(t,null,a,s):It(e,t,a,s),t.child;
case 11:return a=t.type,u=t.pendingProps,u=t.elementType===a?u:un(a,u),gh(e,t,a,u,s);
case 7:return It(e,t,t.pendingProps,s),t.child;
case 8:return It(e,t,t.pendingProps.children,s),t.child;
case 12:return It(e,t,t.pendingProps.children,s),t.child;
case 10:e:{
if(a=t.type._context,u=t.pendingProps,d=t.memoizedProps,p=u.value,He(ma,a._currentValue),a._currentValue=p,d!==null)if(an(d.value,p)){
if(d.children===u.children&&!Nt.current){
t=zn(e,t,s);
break e
}

}
else for(d=t.child,d!==null&&(d.return=t);
d!==null;
){
var _=d.dependencies;
if(_!==null){
p=d.child;
for(var C=_.firstContext;
C!==null;
){
if(C.context===a){
if(d.tag===1){
C=Un(-1,s&-s),C.tag=2;
var j=d.updateQueue;
if(j!==null){
j=j.shared;
var q=j.pending;
q===null?C.next=C:(C.next=q.next,q.next=C),j.pending=C
}

}
d.lanes|=s,C=d.alternate,C!==null&&(C.lanes|=s),_u(d.return,s,t),_.lanes|=s;
break
}
C=C.next
}

}
else if(d.tag===10)p=d.type===t.type?null:d.child;
else if(d.tag===18){
if(p=d.return,p===null)throw Error(i(341));
p.lanes|=s,_=p.alternate,_!==null&&(_.lanes|=s),_u(p,s,t),p=d.sibling
}
else p=d.child;
if(p!==null)p.return=d;
else for(p=d;
p!==null;
){
if(p===t){
p=null;
break
}
if(d=p.sibling,d!==null){
d.return=p.return,p=d;
break
}
p=p.return
}
d=p
}
It(e,t,u.children,s),t=t.child
}
return t;
case 9:return u=t.type,a=t.pendingProps.children,Ai(t,s),u=Yt(u),a=a(u),t.flags|=1,It(e,t,a,s),t.child;
case 14:return a=t.type,u=un(a,t.pendingProps),u=un(a.type,u),wh(e,t,a,u,s);
case 15:return _h(e,t,t.type,t.pendingProps,s);
case 17:return a=t.type,u=t.pendingProps,u=t.elementType===a?u:un(a,u),Ea(e,t),t.tag=1,Dt(a)?(e=!0,ua(t)):e=!1,Ai(t,s),dh(t,a,u),Nu(t,a,u,s),Uu(null,t,a,!0,e,s);
case 19:return Th(e,t,s);
case 22:return kh(e,t,s)
}
throw Error(i(156,t.tag))
}
;
function Yh(e,t){
return Ld(e,t)
}
function Wv(e,t,s,a){
this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null
}
function tn(e,t,s,a){
return new Wv(e,t,s,a)
}
function oc(e){
return e=e.prototype,!(!e||!e.isReactComponent)
}
function Kv(e){
if(typeof e=="function")return oc(e)?1:0;
if(e!=null){
if(e=e.$$typeof,e===ne)return 11;
if(e===B)return 14
}
return 2
}
function wr(e,t){
var s=e.alternate;
return s===null?(s=tn(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{
lanes:t.lanes,firstContext:t.firstContext
}
,s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s
}
function Aa(e,t,s,a,u,d){
var p=2;
if(a=e,typeof e=="function")oc(e)&&(p=1);
else if(typeof e=="string")p=5;
else e:switch(e){
case oe:return Jr(s.children,u,d,t);
case b:p=8,u|=8;
break;
case O:return e=tn(12,s,t,u|2),e.elementType=O,e.lanes=d,e;
case se:return e=tn(13,s,t,u),e.elementType=se,e.lanes=d,e;
case ee:return e=tn(19,s,t,u),e.elementType=ee,e.lanes=d,e;
case z:return Ba(s,u,d,t);
default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){
case Q:p=10;
break e;
case J:p=9;
break e;
case ne:p=11;
break e;
case B:p=14;
break e;
case A:p=16,a=null;
break e
}
throw Error(i(130,e==null?e:typeof e,""))
}
return t=tn(p,s,t,u),t.elementType=e,t.type=a,t.lanes=d,t
}
function Jr(e,t,s,a){
return e=tn(7,e,a,t),e.lanes=s,e
}
function Ba(e,t,s,a){
return e=tn(22,e,a,t),e.elementType=z,e.lanes=s,e.stateNode={
isHidden:!1
}
,e
}
function ac(e,t,s){
return e=tn(6,e,null,t),e.lanes=s,e
}
function lc(e,t,s){
return t=tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={
containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation
}
,t
}
function Gv(e,t,s,a,u){
this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=a,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null
}
function uc(e,t,s,a,u,d,p,_,C){
return e=new Gv(e,t,s,_,C),t===1?(t=1,d===!0&&(t|=8)):t=0,d=tn(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={
element:a,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null
}
,Su(d),e
}
function Jv(e,t,s){
var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;
return{
$$typeof:$,key:a==null?null:""+a,children:e,containerInfo:t,implementation:s
}

}
function Xh(e){
if(!e)return cr;
e=e._reactInternals;
e:{
if(Br(e)!==e||e.tag!==1)throw Error(i(170));
var t=e;
do{
switch(t.tag){
case 3:t=t.stateNode.context;
break e;
case 1:if(Dt(t.type)){
t=t.stateNode.__reactInternalMemoizedMergedChildContext;
break e
}

}
t=t.return
}
while(t!==null);
throw Error(i(171))
}
if(e.tag===1){
var s=e.type;
if(Dt(s))return Ef(e,s,t)
}
return t
}
function ep(e,t,s,a,u,d,p,_,C){
return e=uc(s,a,!0,e,u,d,p,_,C),e.context=Xh(null),s=e.current,a=Lt(),u=vr(s),d=Un(a,u),d.callback=t??null,hr(s,d,u),e.current.lanes=u,Ts(e,u,a),Ut(e,a),e
}
function Ua(e,t,s,a){
var u=t.current,d=Lt(),p=vr(u);
return s=Xh(s),t.context===null?t.context=s:t.pendingContext=s,t=Un(d,p),t.payload={
element:e
}
,a=a===void 0?null:a,a!==null&&(t.callback=a),e=hr(u,t,p),e!==null&&(fn(e,u,p,d),va(e,u,p)),p
}
function za(e){
if(e=e.current,!e.child)return null;
switch(e.child.tag){
case 5:return e.child.stateNode;
default:return e.child.stateNode
}

}
function tp(e,t){
if(e=e.memoizedState,e!==null&&e.dehydrated!==null){
var s=e.retryLane;
e.retryLane=s!==0&&s<t?s:t
}

}
function cc(e,t){
tp(e,t),(e=e.alternate)&&tp(e,t)
}
function Yv(){
return null
}
var np=typeof reportError=="function"?reportError:function(e){
console.error(e)
}
;
function dc(e){
this._internalRoot=e
}
$a.prototype.render=dc.prototype.render=function(e){
var t=this._internalRoot;
if(t===null)throw Error(i(409));
Ua(e,t,null,null)
}
,$a.prototype.unmount=dc.prototype.unmount=function(){
var e=this._internalRoot;
if(e!==null){
this._internalRoot=null;
var t=e.containerInfo;
Wr(function(){
Ua(null,e,null,null)
}
),t[Fn]=null
}

}
;
function $a(e){
this._internalRoot=e
}
$a.prototype.unstable_scheduleHydration=function(e){
if(e){
var t=Ad();
e={
blockedOn:null,target:e,priority:t
}
;
for(var s=0;
s<sr.length&&t!==0&&t<sr[s].priority;
s++);
sr.splice(s,0,e),s===0&&zd(e)
}

}
;
function fc(e){
return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)
}
function Va(e){
return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))
}
function rp(){

}
function Xv(e,t,s,a,u){
if(u){
if(typeof a=="function"){
var d=a;
a=function(){
var j=za(p);
d.call(j)
}

}
var p=ep(t,a,e,0,null,!1,!1,"",rp);
return e._reactRootContainer=p,e[Fn]=p.current,$s(e.nodeType===8?e.parentNode:e),Wr(),p
}
for(;
u=e.lastChild;
)e.removeChild(u);
if(typeof a=="function"){
var _=a;
a=function(){
var j=za(C);
_.call(j)
}

}
var C=uc(e,0,!1,null,null,!1,!1,"",rp);
return e._reactRootContainer=C,e[Fn]=C.current,$s(e.nodeType===8?e.parentNode:e),Wr(function(){
Ua(t,C,s,a)
}
),C
}
function qa(e,t,s,a,u){
var d=s._reactRootContainer;
if(d){
var p=d;
if(typeof u=="function"){
var _=u;
u=function(){
var C=za(p);
_.call(C)
}

}
Ua(t,p,e,u)
}
else p=Xv(s,t,e,u,a);
return za(p)
}
Nd=function(e){
switch(e.tag){
case 3:var t=e.stateNode;
if(t.current.memoizedState.isDehydrated){
var s=Es(t.pendingLanes);
s!==0&&(Nl(t,s|1),Ut(t,st()),($e&6)===0&&(Vi=st()+500,dr()))
}
break;
case 13:Wr(function(){
var a=Bn(e,1);
if(a!==null){
var u=Lt();
fn(a,e,1,u)
}

}
),cc(e,1)
}

}
,Dl=function(e){
if(e.tag===13){
var t=Bn(e,134217728);
if(t!==null){
var s=Lt();
fn(t,e,134217728,s)
}
cc(e,134217728)
}

}
,Dd=function(e){
if(e.tag===13){
var t=vr(e),s=Bn(e,t);
if(s!==null){
var a=Lt();
fn(s,e,t,a)
}
cc(e,t)
}

}
,Ad=function(){
return Qe
}
,Bd=function(e,t){
var s=Qe;
try{
return Qe=e,t()
}
finally{
Qe=s
}

}
,Il=function(e,t,s){
switch(t){
case"input":if(it(e,s),t=s.name,s.type==="radio"&&t!=null){
for(s=e;
s.parentNode;
)s=s.parentNode;
for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;
t<s.length;
t++){
var a=s[t];
if(a!==e&&a.form===e.form){
var u=aa(a);
if(!u)throw Error(i(90));
_t(a),it(a,u)
}

}

}
break;
case"textarea":ks(e,s);
break;
case"select":t=s.value,t!=null&&Be(e,!!s.multiple,t,!1)
}

}
,Cd=rc,xd=Wr;
var eg={
usingClientEntryPoint:!1,Events:[Qs,Li,aa,kd,Sd,rc]
}
,so={
findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"
}
,tg={
bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){
return e=Td(e),e===null?null:e.stateNode
}
,findFiberByHostInstance:so.findFiberByHostInstance||Yv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"
}
;
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){
var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;
if(!Qa.isDisabled&&Qa.supportsFiber)try{
$o=Qa.inject(tg),Sn=Qa
}
catch{

}

}
return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eg,zt.createPortal=function(e,t){
var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;
if(!fc(t))throw Error(i(200));
return Jv(e,t,null,s)
}
,zt.createRoot=function(e,t){
if(!fc(e))throw Error(i(299));
var s=!1,a="",u=np;
return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=uc(e,1,!1,null,null,s,!1,a,u),e[Fn]=t.current,$s(e.nodeType===8?e.parentNode:e),new dc(t)
}
,zt.findDOMNode=function(e){
if(e==null)return null;
if(e.nodeType===1)return e;
var t=e._reactInternals;
if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));
return e=Td(t),e=e===null?null:e.stateNode,e
}
,zt.flushSync=function(e){
return Wr(e)
}
,zt.hydrate=function(e,t,s){
if(!Va(t))throw Error(i(200));
return qa(null,e,t,!0,s)
}
,zt.hydrateRoot=function(e,t,s){
if(!fc(e))throw Error(i(405));
var a=s!=null&&s.hydratedSources||null,u=!1,d="",p=np;
if(s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),t=ep(t,null,e,1,s??null,u,!1,d,p),e[Fn]=t.current,$s(e),a)for(e=0;
e<a.length;
e++)s=a[e],u=s._getVersion,u=u(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,u]:t.mutableSourceEagerHydrationData.push(s,u);
return new $a(t)
}
,zt.render=function(e,t,s){
if(!Va(t))throw Error(i(200));
return qa(null,e,t,!1,s)
}
,zt.unmountComponentAtNode=function(e){
if(!Va(e))throw Error(i(40));
return e._reactRootContainer?(Wr(function(){
qa(null,null,e,!1,function(){
e._reactRootContainer=null,e[Fn]=null
}
)
}
),!0):!1
}
,zt.unstable_batchedUpdates=rc,zt.unstable_renderSubtreeIntoContainer=function(e,t,s,a){
if(!Va(s))throw Error(i(200));
if(e==null||e._reactInternals===void 0)throw Error(i(38));
return qa(e,t,s,!1,a)
}
,zt.version="18.3.1-next-f1338f8080-20240426",zt
}
var fp;
function Xp(){
if(fp)return yc.exports;
fp=1;
function n(){
if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
}
catch(r){
console.error(r)
}

}
return n(),yc.exports=ug(),yc.exports
}
var hp;
function cg(){
if(hp)return Ha;
hp=1;
var n=Xp();
return Ha.createRoot=n.createRoot,Ha.hydrateRoot=n.hydrateRoot,Ha
}
var dg=cg(),ws=class{
constructor(){
this.listeners=new Set,this.subscribe=this.subscribe.bind(this)
}
subscribe(n){
return this.listeners.add(n),this.onSubscribe(),()=>{
this.listeners.delete(n),this.onUnsubscribe()
}

}
hasListeners(){
return this.listeners.size>0
}
onSubscribe(){

}
onUnsubscribe(){

}

}
,fi=typeof window>"u"||"Deno"in globalThis;
function bt(){

}
function fg(n,r){
return typeof n=="function"?n(r):n
}
function Nc(n){
return typeof n=="number"&&n>=0&&n!==1/0
}
function em(n,r){
return Math.max(n+(r||0)-Date.now(),0)
}
function Gi(n,r){
return typeof n=="function"?n(r):n
}
function yn(n,r){
return typeof n=="function"?n(r):n
}
function pp(n,r){
const{
type:i="all",exact:o,fetchStatus:l,predicate:c,queryKey:f,stale:h
}
=n;
if(f){
if(o){
if(r.queryHash!==ad(f,r.options))return!1
}
else if(!mo(r.queryKey,f))return!1
}
if(i!=="all"){
const y=r.isActive();
if(i==="active"&&!y||i==="inactive"&&y)return!1
}
return!(typeof h=="boolean"&&r.isStale()!==h||l&&l!==r.state.fetchStatus||c&&!c(r))
}
function mp(n,r){
const{
exact:i,status:o,predicate:l,mutationKey:c
}
=n;
if(c){
if(!r.options.mutationKey)return!1;
if(i){
if(hi(r.options.mutationKey)!==hi(c))return!1
}
else if(!mo(r.options.mutationKey,c))return!1
}
return!(o&&r.state.status!==o||l&&!l(r))
}
function ad(n,r){
return((r==null?void 0:r.queryKeyHashFn)||hi)(n)
}
function hi(n){
return JSON.stringify(n,(r,i)=>Dc(i)?Object.keys(i).sort().reduce((o,l)=>(o[l]=i[l],o),{

}
):i)
}
function mo(n,r){
return n===r?!0:typeof n!=typeof r?!1:n&&r&&typeof n=="object"&&typeof r=="object"?Object.keys(r).every(i=>mo(n[i],r[i])):!1
}
function tm(n,r){
if(n===r)return n;
const i=yp(n)&&yp(r);
if(i||Dc(n)&&Dc(r)){
const o=i?n:Object.keys(n),l=o.length,c=i?r:Object.keys(r),f=c.length,h=i?[]:{

}
;
let y=0;
for(let m=0;
m<f;
m++){
const w=i?m:c[m];
(!i&&o.includes(w)||i)&&n[w]===void 0&&r[w]===void 0?(h[w]=void 0,y++):(h[w]=tm(n[w],r[w]),h[w]===n[w]&&n[w]!==void 0&&y++)
}
return l===f&&y===l?n:h
}
return r
}
function nl(n,r){
if(!r||Object.keys(n).length!==Object.keys(r).length)return!1;
for(const i in n)if(n[i]!==r[i])return!1;
return!0
}
function yp(n){
return Array.isArray(n)&&n.length===Object.keys(n).length
}
function Dc(n){
if(!vp(n))return!1;
const r=n.constructor;
if(r===void 0)return!0;
const i=r.prototype;
return!(!vp(i)||!i.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)
}
function vp(n){
return Object.prototype.toString.call(n)==="[object Object]"
}
function hg(n){
return new Promise(r=>{
setTimeout(r,n)
}
)
}
function Ac(n,r,i){
return typeof i.structuralSharing=="function"?i.structuralSharing(n,r):i.structuralSharing!==!1?tm(n,r):r
}
function pg(n,r,i=0){
const o=[...n,r];
return i&&o.length>i?o.slice(1):o
}
function mg(n,r,i=0){
const o=[r,...n];
return i&&o.length>i?o.slice(0,-1):o
}
var ld=Symbol();
function nm(n,r){
return!n.queryFn&&(r!=null&&r.initialPromise)?()=>r.initialPromise:!n.queryFn||n.queryFn===ld?()=>Promise.reject(new Error(`Missing queryFn: '${
n.queryHash
}
'`)):n.queryFn
}
function rm(n,r){
return typeof n=="function"?n(...r):!!n
}
var ni,Sr,ts,Vp,yg=(Vp=class extends ws{
constructor(){
super();
Ee(this,ni);
Ee(this,Sr);
Ee(this,ts);
he(this,ts,r=>{
if(!fi&&window.addEventListener){
const i=()=>r();
return window.addEventListener("visibilitychange",i,!1),()=>{
window.removeEventListener("visibilitychange",i)
}

}

}
)
}
onSubscribe(){
S(this,Sr)||this.setEventListener(S(this,ts))
}
onUnsubscribe(){
var r;
this.hasListeners()||((r=S(this,Sr))==null||r.call(this),he(this,Sr,void 0))
}
setEventListener(r){
var i;
he(this,ts,r),(i=S(this,Sr))==null||i.call(this),he(this,Sr,r(o=>{
typeof o=="boolean"?this.setFocused(o):this.onFocus()
}
))
}
setFocused(r){
S(this,ni)!==r&&(he(this,ni,r),this.onFocus())
}
onFocus(){
const r=this.isFocused();
this.listeners.forEach(i=>{
i(r)
}
)
}
isFocused(){
var r;
return typeof S(this,ni)=="boolean"?S(this,ni):((r=globalThis.document)==null?void 0:r.visibilityState)!=="hidden"
}

}
,ni=new WeakMap,Sr=new WeakMap,ts=new WeakMap,Vp),ud=new yg,ns,Cr,rs,qp,vg=(qp=class extends ws{
constructor(){
super();
Ee(this,ns,!0);
Ee(this,Cr);
Ee(this,rs);
he(this,rs,r=>{
if(!fi&&window.addEventListener){
const i=()=>r(!0),o=()=>r(!1);
return window.addEventListener("online",i,!1),window.addEventListener("offline",o,!1),()=>{
window.removeEventListener("online",i),window.removeEventListener("offline",o)
}

}

}
)
}
onSubscribe(){
S(this,Cr)||this.setEventListener(S(this,rs))
}
onUnsubscribe(){
var r;
this.hasListeners()||((r=S(this,Cr))==null||r.call(this),he(this,Cr,void 0))
}
setEventListener(r){
var i;
he(this,rs,r),(i=S(this,Cr))==null||i.call(this),he(this,Cr,r(this.setOnline.bind(this)))
}
setOnline(r){
S(this,ns)!==r&&(he(this,ns,r),this.listeners.forEach(o=>{
o(r)
}
))
}
isOnline(){
return S(this,ns)
}

}
,ns=new WeakMap,Cr=new WeakMap,rs=new WeakMap,qp),rl=new vg;
function Bc(){
let n,r;
const i=new Promise((l,c)=>{
n=l,r=c
}
);
i.status="pending",i.catch(()=>{

}
);
function o(l){
Object.assign(i,l),delete i.resolve,delete i.reject
}
return i.resolve=l=>{
o({
status:"fulfilled",value:l
}
),n(l)
}
,i.reject=l=>{
o({
status:"rejected",reason:l
}
),r(l)
}
,i
}
function gg(n){
return Math.min(1e3*2**n,3e4)
}
function im(n){
return(n??"online")==="online"?rl.isOnline():!0
}
var sm=class extends Error{
constructor(n){
super("CancelledError"),this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent
}

}
;
function wc(n){
return n instanceof sm
}
function om(n){
let r=!1,i=0,o=!1,l;
const c=Bc(),f=E=>{
var D;
o||(x(new sm(E)),(D=n.abort)==null||D.call(n))
}
,h=()=>{
r=!0
}
,y=()=>{
r=!1
}
,m=()=>ud.isFocused()&&(n.networkMode==="always"||rl.isOnline())&&n.canRun(),w=()=>im(n.networkMode)&&n.canRun(),g=E=>{
var D;
o||(o=!0,(D=n.onSuccess)==null||D.call(n,E),l==null||l(),c.resolve(E))
}
,x=E=>{
var D;
o||(o=!0,(D=n.onError)==null||D.call(n,E),l==null||l(),c.reject(E))
}
,L=()=>new Promise(E=>{
var D;
l=Z=>{
(o||m())&&E(Z)
}
,(D=n.onPause)==null||D.call(n)
}
).then(()=>{
var E;
l=void 0,o||(E=n.onContinue)==null||E.call(n)
}
),F=()=>{
if(o)return;
let E;
const D=i===0?n.initialPromise:void 0;
try{
E=D??n.fn()
}
catch(Z){
E=Promise.reject(Z)
}
Promise.resolve(E).then(g).catch(Z=>{
var $;
if(o)return;
const X=n.retry??(fi?0:3),K=n.retryDelay??gg,ae=typeof K=="function"?K(i,Z):K,we=X===!0||typeof X=="number"&&i<X||typeof X=="function"&&X(i,Z);
if(r||!we){
x(Z);
return
}
i++,($=n.onFail)==null||$.call(n,i,Z),hg(ae).then(()=>m()?void 0:L()).then(()=>{
r?x(Z):F()
}
)
}
)
}
;
return{
promise:c,cancel:f,continue:()=>(l==null||l(),c),cancelRetry:h,continueRetry:y,canStart:w,start:()=>(w()?F():L().then(F),c)
}

}
var wg=n=>setTimeout(n,0);
function _g(){
let n=[],r=0,i=h=>{
h()
}
,o=h=>{
h()
}
,l=wg;
const c=h=>{
r?n.push(h):l(()=>{
i(h)
}
)
}
,f=()=>{
const h=n;
n=[],h.length&&l(()=>{
o(()=>{
h.forEach(y=>{
i(y)
}
)
}
)
}
)
}
;
return{
batch:h=>{
let y;
r++;
try{
y=h()
}
finally{
r--,r||f()
}
return y
}
,batchCalls:h=>(...y)=>{
c(()=>{
h(...y)
}
)
}
,schedule:c,setNotifyFunction:h=>{
i=h
}
,setBatchNotifyFunction:h=>{
o=h
}
,setScheduler:h=>{
l=h
}

}

}
var dt=_g(),ri,Qp,am=(Qp=class{
constructor(){
Ee(this,ri)
}
destroy(){
this.clearGcTimeout()
}
scheduleGc(){
this.clearGcTimeout(),Nc(this.gcTime)&&he(this,ri,setTimeout(()=>{
this.optionalRemove()
}
,this.gcTime))
}
updateGcTime(n){
this.gcTime=Math.max(this.gcTime||0,n??(fi?1/0:5*60*1e3))
}
clearGcTimeout(){
S(this,ri)&&(clearTimeout(S(this,ri)),he(this,ri,void 0))
}

}
,ri=new WeakMap,Qp),is,ss,rn,ii,Rt,Lo,si,hn,Zn,Zp,kg=(Zp=class extends am{
constructor(r){
super();
Ee(this,hn);
Ee(this,is);
Ee(this,ss);
Ee(this,rn);
Ee(this,ii);
Ee(this,Rt);
Ee(this,Lo);
Ee(this,si);
he(this,si,!1),he(this,Lo,r.defaultOptions),this.setOptions(r.options),this.observers=[],he(this,ii,r.client),he(this,rn,S(this,ii).getQueryCache()),this.queryKey=r.queryKey,this.queryHash=r.queryHash,he(this,is,Sg(this.options)),this.state=r.state??S(this,is),this.scheduleGc()
}
get meta(){
return this.options.meta
}
get promise(){
var r;
return(r=S(this,Rt))==null?void 0:r.promise
}
setOptions(r){
this.options={
...S(this,Lo),...r
}
,this.updateGcTime(this.options.gcTime)
}
optionalRemove(){
!this.observers.length&&this.state.fetchStatus==="idle"&&S(this,rn).remove(this)
}
setData(r,i){
const o=Ac(this.state.data,r,this.options);
return Fe(this,hn,Zn).call(this,{
data:o,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt,manual:i==null?void 0:i.manual
}
),o
}
setState(r,i){
Fe(this,hn,Zn).call(this,{
type:"setState",state:r,setStateOptions:i
}
)
}
cancel(r){
var o,l;
const i=(o=S(this,Rt))==null?void 0:o.promise;
return(l=S(this,Rt))==null||l.cancel(r),i?i.then(bt).catch(bt):Promise.resolve()
}
destroy(){
super.destroy(),this.cancel({
silent:!0
}
)
}
reset(){
this.destroy(),this.setState(S(this,is))
}
isActive(){
return this.observers.some(r=>yn(r.options.enabled,this)!==!1)
}
isDisabled(){
return this.getObserversCount()>0?!this.isActive():this.options.queryFn===ld||this.state.dataUpdateCount+this.state.errorUpdateCount===0
}
isStale(){
return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(r=>r.getCurrentResult().isStale):this.state.data===void 0
}
isStaleByTime(r=0){
return this.state.isInvalidated||this.state.data===void 0||!em(this.state.dataUpdatedAt,r)
}
onFocus(){
var i;
const r=this.observers.find(o=>o.shouldFetchOnWindowFocus());
r==null||r.refetch({
cancelRefetch:!1
}
),(i=S(this,Rt))==null||i.continue()
}
onOnline(){
var i;
const r=this.observers.find(o=>o.shouldFetchOnReconnect());
r==null||r.refetch({
cancelRefetch:!1
}
),(i=S(this,Rt))==null||i.continue()
}
addObserver(r){
this.observers.includes(r)||(this.observers.push(r),this.clearGcTimeout(),S(this,rn).notify({
type:"observerAdded",query:this,observer:r
}
))
}
removeObserver(r){
this.observers.includes(r)&&(this.observers=this.observers.filter(i=>i!==r),this.observers.length||(S(this,Rt)&&(S(this,si)?S(this,Rt).cancel({
revert:!0
}
):S(this,Rt).cancelRetry()),this.scheduleGc()),S(this,rn).notify({
type:"observerRemoved",query:this,observer:r
}
))
}
getObserversCount(){
return this.observers.length
}
invalidate(){
this.state.isInvalidated||Fe(this,hn,Zn).call(this,{
type:"invalidate"
}
)
}
fetch(r,i){
var y,m,w;
if(this.state.fetchStatus!=="idle"){
if(this.state.data!==void 0&&(i!=null&&i.cancelRefetch))this.cancel({
silent:!0
}
);
else if(S(this,Rt))return S(this,Rt).continueRetry(),S(this,Rt).promise
}
if(r&&this.setOptions(r),!this.options.queryFn){
const g=this.observers.find(x=>x.options.queryFn);
g&&this.setOptions(g.options)
}
const o=new AbortController,l=g=>{
Object.defineProperty(g,"signal",{
enumerable:!0,get:()=>(he(this,si,!0),o.signal)
}
)
}
,c=()=>{
const g=nm(this.options,i),x={
client:S(this,ii),queryKey:this.queryKey,meta:this.meta
}
;
return l(x),he(this,si,!1),this.options.persister?this.options.persister(g,x,this):g(x)
}
,f={
fetchOptions:i,options:this.options,queryKey:this.queryKey,client:S(this,ii),state:this.state,fetchFn:c
}
;
l(f),(y=this.options.behavior)==null||y.onFetch(f,this),he(this,ss,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((m=f.fetchOptions)==null?void 0:m.meta))&&Fe(this,hn,Zn).call(this,{
type:"fetch",meta:(w=f.fetchOptions)==null?void 0:w.meta
}
);
const h=g=>{
var x,L,F,E;
wc(g)&&g.silent||Fe(this,hn,Zn).call(this,{
type:"error",error:g
}
),wc(g)||((L=(x=S(this,rn).config).onError)==null||L.call(x,g,this),(E=(F=S(this,rn).config).onSettled)==null||E.call(F,this.state.data,g,this)),this.scheduleGc()
}
;
return he(this,Rt,om({
initialPromise:i==null?void 0:i.initialPromise,fn:f.fetchFn,abort:o.abort.bind(o),onSuccess:g=>{
var x,L,F,E;
if(g===void 0){
h(new Error(`${
this.queryHash
}
 data is undefined`));
return
}
try{
this.setData(g)
}
catch(D){
h(D);
return
}
(L=(x=S(this,rn).config).onSuccess)==null||L.call(x,g,this),(E=(F=S(this,rn).config).onSettled)==null||E.call(F,g,this.state.error,this),this.scheduleGc()
}
,onError:h,onFail:(g,x)=>{
Fe(this,hn,Zn).call(this,{
type:"failed",failureCount:g,error:x
}
)
}
,onPause:()=>{
Fe(this,hn,Zn).call(this,{
type:"pause"
}
)
}
,onContinue:()=>{
Fe(this,hn,Zn).call(this,{
type:"continue"
}
)
}
,retry:f.options.retry,retryDelay:f.options.retryDelay,networkMode:f.options.networkMode,canRun:()=>!0
}
)),S(this,Rt).start()
}

}
,is=new WeakMap,ss=new WeakMap,rn=new WeakMap,ii=new WeakMap,Rt=new WeakMap,Lo=new WeakMap,si=new WeakMap,hn=new WeakSet,Zn=function(r){
const i=o=>{
switch(r.type){
case"failed":return{
...o,fetchFailureCount:r.failureCount,fetchFailureReason:r.error
}
;
case"pause":return{
...o,fetchStatus:"paused"
}
;
case"continue":return{
...o,fetchStatus:"fetching"
}
;
case"fetch":return{
...o,...lm(o.data,this.options),fetchMeta:r.meta??null
}
;
case"success":return{
...o,data:r.data,dataUpdateCount:o.dataUpdateCount+1,dataUpdatedAt:r.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!r.manual&&{
fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null
}

}
;
case"error":const l=r.error;
return wc(l)&&l.revert&&S(this,ss)?{
...S(this,ss),fetchStatus:"idle"
}
:{
...o,error:l,errorUpdateCount:o.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:o.fetchFailureCount+1,fetchFailureReason:l,fetchStatus:"idle",status:"error"
}
;
case"invalidate":return{
...o,isInvalidated:!0
}
;
case"setState":return{
...o,...r.state
}

}

}
;
this.state=i(this.state),dt.batch(()=>{
this.observers.forEach(o=>{
o.onQueryUpdate()
}
),S(this,rn).notify({
query:this,type:"updated",action:r
}
)
}
)
}
,Zp);
function lm(n,r){
return{
fetchFailureCount:0,fetchFailureReason:null,fetchStatus:im(r.networkMode)?"fetching":"paused",...n===void 0&&{
error:null,status:"pending"
}

}

}
function Sg(n){
const r=typeof n.initialData=="function"?n.initialData():n.initialData,i=r!==void 0,o=i?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;
return{
data:r,dataUpdateCount:0,dataUpdatedAt:i?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"
}

}
var En,Hp,um=(Hp=class extends ws{
constructor(r={

}
){
super();
Ee(this,En);
this.config=r,he(this,En,new Map)
}
build(r,i,o){
const l=i.queryKey,c=i.queryHash??ad(l,i);
let f=this.get(c);
return f||(f=new kg({
client:r,queryKey:l,queryHash:c,options:r.defaultQueryOptions(i),state:o,defaultOptions:r.getQueryDefaults(l)
}
),this.add(f)),f
}
add(r){
S(this,En).has(r.queryHash)||(S(this,En).set(r.queryHash,r),this.notify({
type:"added",query:r
}
))
}
remove(r){
const i=S(this,En).get(r.queryHash);
i&&(r.destroy(),i===r&&S(this,En).delete(r.queryHash),this.notify({
type:"removed",query:r
}
))
}
clear(){
dt.batch(()=>{
this.getAll().forEach(r=>{
this.remove(r)
}
)
}
)
}
get(r){
return S(this,En).get(r)
}
getAll(){
return[...S(this,En).values()]
}
find(r){
const i={
exact:!0,...r
}
;
return this.getAll().find(o=>pp(i,o))
}
findAll(r={

}
){
const i=this.getAll();
return Object.keys(r).length>0?i.filter(o=>pp(r,o)):i
}
notify(r){
dt.batch(()=>{
this.listeners.forEach(i=>{
i(r)
}
)
}
)
}
onFocus(){
dt.batch(()=>{
this.getAll().forEach(r=>{
r.onFocus()
}
)
}
)
}
onOnline(){
dt.batch(()=>{
this.getAll().forEach(r=>{
r.onOnline()
}
)
}
)
}

}
,En=new WeakMap,Hp),Tn,Ot,oi,In,kr,Wp,Cg=(Wp=class extends am{
constructor(r){
super();
Ee(this,In);
Ee(this,Tn);
Ee(this,Ot);
Ee(this,oi);
this.mutationId=r.mutationId,he(this,Ot,r.mutationCache),he(this,Tn,[]),this.state=r.state||cm(),this.setOptions(r.options),this.scheduleGc()
}
setOptions(r){
this.options=r,this.updateGcTime(this.options.gcTime)
}
get meta(){
return this.options.meta
}
addObserver(r){
S(this,Tn).includes(r)||(S(this,Tn).push(r),this.clearGcTimeout(),S(this,Ot).notify({
type:"observerAdded",mutation:this,observer:r
}
))
}
removeObserver(r){
he(this,Tn,S(this,Tn).filter(i=>i!==r)),this.scheduleGc(),S(this,Ot).notify({
type:"observerRemoved",mutation:this,observer:r
}
)
}
optionalRemove(){
S(this,Tn).length||(this.state.status==="pending"?this.scheduleGc():S(this,Ot).remove(this))
}
continue(){
var r;
return((r=S(this,oi))==null?void 0:r.continue())??this.execute(this.state.variables)
}
async execute(r){
var c,f,h,y,m,w,g,x,L,F,E,D,Z,X,K,ae,we,$,oe,b;
const i=()=>{
Fe(this,In,kr).call(this,{
type:"continue"
}
)
}
;
he(this,oi,om({
fn:()=>this.options.mutationFn?this.options.mutationFn(r):Promise.reject(new Error("No mutationFn found")),onFail:(O,Q)=>{
Fe(this,In,kr).call(this,{
type:"failed",failureCount:O,error:Q
}
)
}
,onPause:()=>{
Fe(this,In,kr).call(this,{
type:"pause"
}
)
}
,onContinue:i,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>S(this,Ot).canRun(this)
}
));
const o=this.state.status==="pending",l=!S(this,oi).canStart();
try{
if(o)i();
else{
Fe(this,In,kr).call(this,{
type:"pending",variables:r,isPaused:l
}
),await((f=(c=S(this,Ot).config).onMutate)==null?void 0:f.call(c,r,this));
const Q=await((y=(h=this.options).onMutate)==null?void 0:y.call(h,r));
Q!==this.state.context&&Fe(this,In,kr).call(this,{
type:"pending",context:Q,variables:r,isPaused:l
}
)
}
const O=await S(this,oi).start();
return await((w=(m=S(this,Ot).config).onSuccess)==null?void 0:w.call(m,O,r,this.state.context,this)),await((x=(g=this.options).onSuccess)==null?void 0:x.call(g,O,r,this.state.context)),await((F=(L=S(this,Ot).config).onSettled)==null?void 0:F.call(L,O,null,this.state.variables,this.state.context,this)),await((D=(E=this.options).onSettled)==null?void 0:D.call(E,O,null,r,this.state.context)),Fe(this,In,kr).call(this,{
type:"success",data:O
}
),O
}
catch(O){
try{
throw await((X=(Z=S(this,Ot).config).onError)==null?void 0:X.call(Z,O,r,this.state.context,this)),await((ae=(K=this.options).onError)==null?void 0:ae.call(K,O,r,this.state.context)),await(($=(we=S(this,Ot).config).onSettled)==null?void 0:$.call(we,void 0,O,this.state.variables,this.state.context,this)),await((b=(oe=this.options).onSettled)==null?void 0:b.call(oe,void 0,O,r,this.state.context)),O
}
finally{
Fe(this,In,kr).call(this,{
type:"error",error:O
}
)
}

}
finally{
S(this,Ot).runNext(this)
}

}

}
,Tn=new WeakMap,Ot=new WeakMap,oi=new WeakMap,In=new WeakSet,kr=function(r){
const i=o=>{
switch(r.type){
case"failed":return{
...o,failureCount:r.failureCount,failureReason:r.error
}
;
case"pause":return{
...o,isPaused:!0
}
;
case"continue":return{
...o,isPaused:!1
}
;
case"pending":return{
...o,context:r.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:r.isPaused,status:"pending",variables:r.variables,submittedAt:Date.now()
}
;
case"success":return{
...o,data:r.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1
}
;
case"error":return{
...o,data:void 0,error:r.error,failureCount:o.failureCount+1,failureReason:r.error,isPaused:!1,status:"error"
}

}

}
;
this.state=i(this.state),dt.batch(()=>{
S(this,Tn).forEach(o=>{
o.onMutationUpdate(r)
}
),S(this,Ot).notify({
mutation:this,type:"updated",action:r
}
)
}
)
}
,Wp);
function cm(){
return{
context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0
}

}
var Kn,pn,Oo,Kp,xg=(Kp=class extends ws{
constructor(r={

}
){
super();
Ee(this,Kn);
Ee(this,pn);
Ee(this,Oo);
this.config=r,he(this,Kn,new Set),he(this,pn,new Map),he(this,Oo,0)
}
build(r,i,o){
const l=new Cg({
mutationCache:this,mutationId:++Za(this,Oo)._,options:r.defaultMutationOptions(i),state:o
}
);
return this.add(l),l
}
add(r){
S(this,Kn).add(r);
const i=Wa(r);
if(typeof i=="string"){
const o=S(this,pn).get(i);
o?o.push(r):S(this,pn).set(i,[r])
}
this.notify({
type:"added",mutation:r
}
)
}
remove(r){
if(S(this,Kn).delete(r)){
const i=Wa(r);
if(typeof i=="string"){
const o=S(this,pn).get(i);
if(o)if(o.length>1){
const l=o.indexOf(r);
l!==-1&&o.splice(l,1)
}
else o[0]===r&&S(this,pn).delete(i)
}

}
this.notify({
type:"removed",mutation:r
}
)
}
canRun(r){
const i=Wa(r);
if(typeof i=="string"){
const o=S(this,pn).get(i),l=o==null?void 0:o.find(c=>c.state.status==="pending");
return!l||l===r
}
else return!0
}
runNext(r){
var o;
const i=Wa(r);
if(typeof i=="string"){
const l=(o=S(this,pn).get(i))==null?void 0:o.find(c=>c!==r&&c.state.isPaused);
return(l==null?void 0:l.continue())??Promise.resolve()
}
else return Promise.resolve()
}
clear(){
dt.batch(()=>{
S(this,Kn).forEach(r=>{
this.notify({
type:"removed",mutation:r
}
)
}
),S(this,Kn).clear(),S(this,pn).clear()
}
)
}
getAll(){
return Array.from(S(this,Kn))
}
find(r){
const i={
exact:!0,...r
}
;
return this.getAll().find(o=>mp(i,o))
}
findAll(r={

}
){
return this.getAll().filter(i=>mp(r,i))
}
notify(r){
dt.batch(()=>{
this.listeners.forEach(i=>{
i(r)
}
)
}
)
}
resumePausedMutations(){
const r=this.getAll().filter(i=>i.state.isPaused);
return dt.batch(()=>Promise.all(r.map(i=>i.continue().catch(bt))))
}

}
,Kn=new WeakMap,pn=new WeakMap,Oo=new WeakMap,Kp);
function Wa(n){
var r;
return(r=n.options.scope)==null?void 0:r.id
}
function gp(n){
return{
onFetch:(r,i)=>{
var w,g,x,L,F;
const o=r.options,l=(x=(g=(w=r.fetchOptions)==null?void 0:w.meta)==null?void 0:g.fetchMore)==null?void 0:x.direction,c=((L=r.state.data)==null?void 0:L.pages)||[],f=((F=r.state.data)==null?void 0:F.pageParams)||[];
let h={
pages:[],pageParams:[]
}
,y=0;
const m=async()=>{
let E=!1;
const D=K=>{
Object.defineProperty(K,"signal",{
enumerable:!0,get:()=>(r.signal.aborted?E=!0:r.signal.addEventListener("abort",()=>{
E=!0
}
),r.signal)
}
)
}
,Z=nm(r.options,r.fetchOptions),X=async(K,ae,we)=>{
if(E)return Promise.reject();
if(ae==null&&K.pages.length)return Promise.resolve(K);
const $={
client:r.client,queryKey:r.queryKey,pageParam:ae,direction:we?"backward":"forward",meta:r.options.meta
}
;
D($);
const oe=await Z($),{
maxPages:b
}
=r.options,O=we?mg:pg;
return{
pages:O(K.pages,oe,b),pageParams:O(K.pageParams,ae,b)
}

}
;
if(l&&c.length){
const K=l==="backward",ae=K?Pg:wp,we={
pages:c,pageParams:f
}
,$=ae(o,we);
h=await X(we,$,K)
}
else{
const K=n??c.length;
do{
const ae=y===0?f[0]??o.initialPageParam:wp(o,h);
if(y>0&&ae==null)break;
h=await X(h,ae),y++
}
while(y<K)
}
return h
}
;
r.options.persister?r.fetchFn=()=>{
var E,D;
return(D=(E=r.options).persister)==null?void 0:D.call(E,m,{
client:r.client,queryKey:r.queryKey,meta:r.options.meta,signal:r.signal
}
,i)
}
:r.fetchFn=m
}

}

}
function wp(n,{
pages:r,pageParams:i
}
){
const o=r.length-1;
return r.length>0?n.getNextPageParam(r[o],r,i[o],i):void 0
}
function Pg(n,{
pages:r,pageParams:i
}
){
var o;
return r.length>0?(o=n.getPreviousPageParam)==null?void 0:o.call(n,r[0],r,i[0],i):void 0
}
var nt,xr,Pr,os,as,Rr,ls,us,Gp,Rg=(Gp=class{
constructor(n={

}
){
Ee(this,nt);
Ee(this,xr);
Ee(this,Pr);
Ee(this,os);
Ee(this,as);
Ee(this,Rr);
Ee(this,ls);
Ee(this,us);
he(this,nt,n.queryCache||new um),he(this,xr,n.mutationCache||new xg),he(this,Pr,n.defaultOptions||{

}
),he(this,os,new Map),he(this,as,new Map),he(this,Rr,0)
}
mount(){
Za(this,Rr)._++,S(this,Rr)===1&&(he(this,ls,ud.subscribe(async n=>{
n&&(await this.resumePausedMutations(),S(this,nt).onFocus())
}
)),he(this,us,rl.subscribe(async n=>{
n&&(await this.resumePausedMutations(),S(this,nt).onOnline())
}
)))
}
unmount(){
var n,r;
Za(this,Rr)._--,S(this,Rr)===0&&((n=S(this,ls))==null||n.call(this),he(this,ls,void 0),(r=S(this,us))==null||r.call(this),he(this,us,void 0))
}
isFetching(n){
return S(this,nt).findAll({
...n,fetchStatus:"fetching"
}
).length
}
isMutating(n){
return S(this,xr).findAll({
...n,status:"pending"
}
).length
}
getQueryData(n){
var i;
const r=this.defaultQueryOptions({
queryKey:n
}
);
return(i=S(this,nt).get(r.queryHash))==null?void 0:i.state.data
}
ensureQueryData(n){
const r=this.defaultQueryOptions(n),i=S(this,nt).build(this,r),o=i.state.data;
return o===void 0?this.fetchQuery(n):(n.revalidateIfStale&&i.isStaleByTime(Gi(r.staleTime,i))&&this.prefetchQuery(r),Promise.resolve(o))
}
getQueriesData(n){
return S(this,nt).findAll(n).map(({
queryKey:r,state:i
}
)=>{
const o=i.data;
return[r,o]
}
)
}
setQueryData(n,r,i){
const o=this.defaultQueryOptions({
queryKey:n
}
),l=S(this,nt).get(o.queryHash),c=l==null?void 0:l.state.data,f=fg(r,c);
if(f!==void 0)return S(this,nt).build(this,o).setData(f,{
...i,manual:!0
}
)
}
setQueriesData(n,r,i){
return dt.batch(()=>S(this,nt).findAll(n).map(({
queryKey:o
}
)=>[o,this.setQueryData(o,r,i)]))
}
getQueryState(n){
var i;
const r=this.defaultQueryOptions({
queryKey:n
}
);
return(i=S(this,nt).get(r.queryHash))==null?void 0:i.state
}
removeQueries(n){
const r=S(this,nt);
dt.batch(()=>{
r.findAll(n).forEach(i=>{
r.remove(i)
}
)
}
)
}
resetQueries(n,r){
const i=S(this,nt);
return dt.batch(()=>(i.findAll(n).forEach(o=>{
o.reset()
}
),this.refetchQueries({
type:"active",...n
}
,r)))
}
cancelQueries(n,r={

}
){
const i={
revert:!0,...r
}
,o=dt.batch(()=>S(this,nt).findAll(n).map(l=>l.cancel(i)));
return Promise.all(o).then(bt).catch(bt)
}
invalidateQueries(n,r={

}
){
return dt.batch(()=>(S(this,nt).findAll(n).forEach(i=>{
i.invalidate()
}
),(n==null?void 0:n.refetchType)==="none"?Promise.resolve():this.refetchQueries({
...n,type:(n==null?void 0:n.refetchType)??(n==null?void 0:n.type)??"active"
}
,r)))
}
refetchQueries(n,r={

}
){
const i={
...r,cancelRefetch:r.cancelRefetch??!0
}
,o=dt.batch(()=>S(this,nt).findAll(n).filter(l=>!l.isDisabled()).map(l=>{
let c=l.fetch(void 0,i);
return i.throwOnError||(c=c.catch(bt)),l.state.fetchStatus==="paused"?Promise.resolve():c
}
));
return Promise.all(o).then(bt)
}
fetchQuery(n){
const r=this.defaultQueryOptions(n);
r.retry===void 0&&(r.retry=!1);
const i=S(this,nt).build(this,r);
return i.isStaleByTime(Gi(r.staleTime,i))?i.fetch(r):Promise.resolve(i.state.data)
}
prefetchQuery(n){
return this.fetchQuery(n).then(bt).catch(bt)
}
fetchInfiniteQuery(n){
return n.behavior=gp(n.pages),this.fetchQuery(n)
}
prefetchInfiniteQuery(n){
return this.fetchInfiniteQuery(n).then(bt).catch(bt)
}
ensureInfiniteQueryData(n){
return n.behavior=gp(n.pages),this.ensureQueryData(n)
}
resumePausedMutations(){
return rl.isOnline()?S(this,xr).resumePausedMutations():Promise.resolve()
}
getQueryCache(){
return S(this,nt)
}
getMutationCache(){
return S(this,xr)
}
getDefaultOptions(){
return S(this,Pr)
}
setDefaultOptions(n){
he(this,Pr,n)
}
setQueryDefaults(n,r){
S(this,os).set(hi(n),{
queryKey:n,defaultOptions:r
}
)
}
getQueryDefaults(n){
const r=[...S(this,os).values()],i={

}
;
return r.forEach(o=>{
mo(n,o.queryKey)&&Object.assign(i,o.defaultOptions)
}
),i
}
setMutationDefaults(n,r){
S(this,as).set(hi(n),{
mutationKey:n,defaultOptions:r
}
)
}
getMutationDefaults(n){
const r=[...S(this,as).values()],i={

}
;
return r.forEach(o=>{
mo(n,o.mutationKey)&&Object.assign(i,o.defaultOptions)
}
),i
}
defaultQueryOptions(n){
if(n._defaulted)return n;
const r={
...S(this,Pr).queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0
}
;
return r.queryHash||(r.queryHash=ad(r.queryKey,r)),r.refetchOnReconnect===void 0&&(r.refetchOnReconnect=r.networkMode!=="always"),r.throwOnError===void 0&&(r.throwOnError=!!r.suspense),!r.networkMode&&r.persister&&(r.networkMode="offlineFirst"),r.queryFn===ld&&(r.enabled=!1),r
}
defaultMutationOptions(n){
return n!=null&&n._defaulted?n:{
...S(this,Pr).mutations,...(n==null?void 0:n.mutationKey)&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0
}

}
clear(){
S(this,nt).clear(),S(this,xr).clear()
}

}
,nt=new WeakMap,xr=new WeakMap,Pr=new WeakMap,os=new WeakMap,as=new WeakMap,Rr=new WeakMap,ls=new WeakMap,us=new WeakMap,Gp),$t,Ue,jo,jt,ai,cs,Er,Tr,bo,ds,fs,li,ui,Ir,hs,qe,lo,Uc,zc,$c,Vc,qc,Qc,Zc,dm,Jp,Eg=(Jp=class extends ws{
constructor(r,i){
super();
Ee(this,qe);
Ee(this,$t);
Ee(this,Ue);
Ee(this,jo);
Ee(this,jt);
Ee(this,ai);
Ee(this,cs);
Ee(this,Er);
Ee(this,Tr);
Ee(this,bo);
Ee(this,ds);
Ee(this,fs);
Ee(this,li);
Ee(this,ui);
Ee(this,Ir);
Ee(this,hs,new Set);
this.options=i,he(this,$t,r),he(this,Tr,null),he(this,Er,Bc()),this.options.experimental_prefetchInRender||S(this,Er).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(i)
}
bindMethods(){
this.refetch=this.refetch.bind(this)
}
onSubscribe(){
this.listeners.size===1&&(S(this,Ue).addObserver(this),_p(S(this,Ue),this.options)?Fe(this,qe,lo).call(this):this.updateResult(),Fe(this,qe,Vc).call(this))
}
onUnsubscribe(){
this.hasListeners()||this.destroy()
}
shouldFetchOnReconnect(){
return Hc(S(this,Ue),this.options,this.options.refetchOnReconnect)
}
shouldFetchOnWindowFocus(){
return Hc(S(this,Ue),this.options,this.options.refetchOnWindowFocus)
}
destroy(){
this.listeners=new Set,Fe(this,qe,qc).call(this),Fe(this,qe,Qc).call(this),S(this,Ue).removeObserver(this)
}
setOptions(r){
const i=this.options,o=S(this,Ue);
if(this.options=S(this,$t).defaultQueryOptions(r),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof yn(this.options.enabled,S(this,Ue))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
Fe(this,qe,Zc).call(this),S(this,Ue).setOptions(this.options),i._defaulted&&!nl(this.options,i)&&S(this,$t).getQueryCache().notify({
type:"observerOptionsUpdated",query:S(this,Ue),observer:this
}
);
const l=this.hasListeners();
l&&kp(S(this,Ue),o,this.options,i)&&Fe(this,qe,lo).call(this),this.updateResult(),l&&(S(this,Ue)!==o||yn(this.options.enabled,S(this,Ue))!==yn(i.enabled,S(this,Ue))||Gi(this.options.staleTime,S(this,Ue))!==Gi(i.staleTime,S(this,Ue)))&&Fe(this,qe,Uc).call(this);
const c=Fe(this,qe,zc).call(this);
l&&(S(this,Ue)!==o||yn(this.options.enabled,S(this,Ue))!==yn(i.enabled,S(this,Ue))||c!==S(this,Ir))&&Fe(this,qe,$c).call(this,c)
}
getOptimisticResult(r){
const i=S(this,$t).getQueryCache().build(S(this,$t),r),o=this.createResult(i,r);
return Ig(this,o)&&(he(this,jt,o),he(this,cs,this.options),he(this,ai,S(this,Ue).state)),o
}
getCurrentResult(){
return S(this,jt)
}
trackResult(r,i){
return new Proxy(r,{
get:(o,l)=>(this.trackProp(l),i==null||i(l),Reflect.get(o,l))
}
)
}
trackProp(r){
S(this,hs).add(r)
}
getCurrentQuery(){
return S(this,Ue)
}
refetch({
...r
}
={

}
){
return this.fetch({
...r
}
)
}
fetchOptimistic(r){
const i=S(this,$t).defaultQueryOptions(r),o=S(this,$t).getQueryCache().build(S(this,$t),i);
return o.fetch().then(()=>this.createResult(o,i))
}
fetch(r){
return Fe(this,qe,lo).call(this,{
...r,cancelRefetch:r.cancelRefetch??!0
}
).then(()=>(this.updateResult(),S(this,jt)))
}
createResult(r,i){
var O;
const o=S(this,Ue),l=this.options,c=S(this,jt),f=S(this,ai),h=S(this,cs),m=r!==o?r.state:S(this,jo),{
state:w
}
=r;
let g={
...w
}
,x=!1,L;
if(i._optimisticResults){
const Q=this.hasListeners(),J=!Q&&_p(r,i),ne=Q&&kp(r,o,i,l);
(J||ne)&&(g={
...g,...lm(w.data,r.options)
}
),i._optimisticResults==="isRestoring"&&(g.fetchStatus="idle")
}
let{
error:F,errorUpdatedAt:E,status:D
}
=g;
L=g.data;
let Z=!1;
if(i.placeholderData!==void 0&&L===void 0&&D==="pending"){
let Q;
c!=null&&c.isPlaceholderData&&i.placeholderData===(h==null?void 0:h.placeholderData)?(Q=c.data,Z=!0):Q=typeof i.placeholderData=="function"?i.placeholderData((O=S(this,fs))==null?void 0:O.state.data,S(this,fs)):i.placeholderData,Q!==void 0&&(D="success",L=Ac(c==null?void 0:c.data,Q,i),x=!0)
}
if(i.select&&L!==void 0&&!Z)if(c&&L===(f==null?void 0:f.data)&&i.select===S(this,bo))L=S(this,ds);
else try{
he(this,bo,i.select),L=i.select(L),L=Ac(c==null?void 0:c.data,L,i),he(this,ds,L),he(this,Tr,null)
}
catch(Q){
he(this,Tr,Q)
}
S(this,Tr)&&(F=S(this,Tr),L=S(this,ds),E=Date.now(),D="error");
const X=g.fetchStatus==="fetching",K=D==="pending",ae=D==="error",we=K&&X,$=L!==void 0,b={
status:D,fetchStatus:g.fetchStatus,isPending:K,isSuccess:D==="success",isError:ae,isInitialLoading:we,isLoading:we,data:L,dataUpdatedAt:g.dataUpdatedAt,error:F,errorUpdatedAt:E,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>m.dataUpdateCount||g.errorUpdateCount>m.errorUpdateCount,isFetching:X,isRefetching:X&&!K,isLoadingError:ae&&!$,isPaused:g.fetchStatus==="paused",isPlaceholderData:x,isRefetchError:ae&&$,isStale:cd(r,i),refetch:this.refetch,promise:S(this,Er)
}
;
if(this.options.experimental_prefetchInRender){
const Q=se=>{
b.status==="error"?se.reject(b.error):b.data!==void 0&&se.resolve(b.data)
}
,J=()=>{
const se=he(this,Er,b.promise=Bc());
Q(se)
}
,ne=S(this,Er);
switch(ne.status){
case"pending":r.queryHash===o.queryHash&&Q(ne);
break;
case"fulfilled":(b.status==="error"||b.data!==ne.value)&&J();
break;
case"rejected":(b.status!=="error"||b.error!==ne.reason)&&J();
break
}

}
return b
}
updateResult(){
const r=S(this,jt),i=this.createResult(S(this,Ue),this.options);
if(he(this,ai,S(this,Ue).state),he(this,cs,this.options),S(this,ai).data!==void 0&&he(this,fs,S(this,Ue)),nl(i,r))return;
he(this,jt,i);
const o=()=>{
if(!r)return!0;
const{
notifyOnChangeProps:l
}
=this.options,c=typeof l=="function"?l():l;
if(c==="all"||!c&&!S(this,hs).size)return!0;
const f=new Set(c??S(this,hs));
return this.options.throwOnError&&f.add("error"),Object.keys(S(this,jt)).some(h=>{
const y=h;
return S(this,jt)[y]!==r[y]&&f.has(y)
}
)
}
;
Fe(this,qe,dm).call(this,{
listeners:o()
}
)
}
onQueryUpdate(){
this.updateResult(),this.hasListeners()&&Fe(this,qe,Vc).call(this)
}

}
,$t=new WeakMap,Ue=new WeakMap,jo=new WeakMap,jt=new WeakMap,ai=new WeakMap,cs=new WeakMap,Er=new WeakMap,Tr=new WeakMap,bo=new WeakMap,ds=new WeakMap,fs=new WeakMap,li=new WeakMap,ui=new WeakMap,Ir=new WeakMap,hs=new WeakMap,qe=new WeakSet,lo=function(r){
Fe(this,qe,Zc).call(this);
let i=S(this,Ue).fetch(this.options,r);
return r!=null&&r.throwOnError||(i=i.catch(bt)),i
}
,Uc=function(){
Fe(this,qe,qc).call(this);
const r=Gi(this.options.staleTime,S(this,Ue));
if(fi||S(this,jt).isStale||!Nc(r))return;
const o=em(S(this,jt).dataUpdatedAt,r)+1;
he(this,li,setTimeout(()=>{
S(this,jt).isStale||this.updateResult()
}
,o))
}
,zc=function(){
return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(S(this,Ue)):this.options.refetchInterval)??!1
}
,$c=function(r){
Fe(this,qe,Qc).call(this),he(this,Ir,r),!(fi||yn(this.options.enabled,S(this,Ue))===!1||!Nc(S(this,Ir))||S(this,Ir)===0)&&he(this,ui,setInterval(()=>{
(this.options.refetchIntervalInBackground||ud.isFocused())&&Fe(this,qe,lo).call(this)
}
,S(this,Ir)))
}
,Vc=function(){
Fe(this,qe,Uc).call(this),Fe(this,qe,$c).call(this,Fe(this,qe,zc).call(this))
}
,qc=function(){
S(this,li)&&(clearTimeout(S(this,li)),he(this,li,void 0))
}
,Qc=function(){
S(this,ui)&&(clearInterval(S(this,ui)),he(this,ui,void 0))
}
,Zc=function(){
const r=S(this,$t).getQueryCache().build(S(this,$t),this.options);
if(r===S(this,Ue))return;
const i=S(this,Ue);
he(this,Ue,r),he(this,jo,r.state),this.hasListeners()&&(i==null||i.removeObserver(this),r.addObserver(this))
}
,dm=function(r){
dt.batch(()=>{
r.listeners&&this.listeners.forEach(i=>{
i(S(this,jt))
}
),S(this,$t).getQueryCache().notify({
query:S(this,Ue),type:"observerResultsUpdated"
}
)
}
)
}
,Jp);
function Tg(n,r){
return yn(r.enabled,n)!==!1&&n.state.data===void 0&&!(n.state.status==="error"&&r.retryOnMount===!1)
}
function _p(n,r){
return Tg(n,r)||n.state.data!==void 0&&Hc(n,r,r.refetchOnMount)
}
function Hc(n,r,i){
if(yn(r.enabled,n)!==!1){
const o=typeof i=="function"?i(n):i;
return o==="always"||o!==!1&&cd(n,r)
}
return!1
}
function kp(n,r,i,o){
return(n!==r||yn(o.enabled,n)===!1)&&(!i.suspense||n.state.status!=="error")&&cd(n,i)
}
function cd(n,r){
return yn(r.enabled,n)!==!1&&n.isStaleByTime(Gi(r.staleTime,n))
}
function Ig(n,r){
return!nl(n.getCurrentResult(),r)
}
var Lr,Or,Vt,Gn,Xn,Ya,Wc,Yp,Lg=(Yp=class extends ws{
constructor(i,o){
super();
Ee(this,Xn);
Ee(this,Lr);
Ee(this,Or);
Ee(this,Vt);
Ee(this,Gn);
he(this,Lr,i),this.setOptions(o),this.bindMethods(),Fe(this,Xn,Ya).call(this)
}
bindMethods(){
this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)
}
setOptions(i){
var l;
const o=this.options;
this.options=S(this,Lr).defaultMutationOptions(i),nl(this.options,o)||S(this,Lr).getMutationCache().notify({
type:"observerOptionsUpdated",mutation:S(this,Vt),observer:this
}
),o!=null&&o.mutationKey&&this.options.mutationKey&&hi(o.mutationKey)!==hi(this.options.mutationKey)?this.reset():((l=S(this,Vt))==null?void 0:l.state.status)==="pending"&&S(this,Vt).setOptions(this.options)
}
onUnsubscribe(){
var i;
this.hasListeners()||(i=S(this,Vt))==null||i.removeObserver(this)
}
onMutationUpdate(i){
Fe(this,Xn,Ya).call(this),Fe(this,Xn,Wc).call(this,i)
}
getCurrentResult(){
return S(this,Or)
}
reset(){
var i;
(i=S(this,Vt))==null||i.removeObserver(this),he(this,Vt,void 0),Fe(this,Xn,Ya).call(this),Fe(this,Xn,Wc).call(this)
}
mutate(i,o){
var l;
return he(this,Gn,o),(l=S(this,Vt))==null||l.removeObserver(this),he(this,Vt,S(this,Lr).getMutationCache().build(S(this,Lr),this.options)),S(this,Vt).addObserver(this),S(this,Vt).execute(i)
}

}
,Lr=new WeakMap,Or=new WeakMap,Vt=new WeakMap,Gn=new WeakMap,Xn=new WeakSet,Ya=function(){
var o;
const i=((o=S(this,Vt))==null?void 0:o.state)??cm();
he(this,Or,{
...i,isPending:i.status==="pending",isSuccess:i.status==="success",isError:i.status==="error",isIdle:i.status==="idle",mutate:this.mutate,reset:this.reset
}
)
}
,Wc=function(i){
dt.batch(()=>{
var o,l,c,f,h,y,m,w;
if(S(this,Gn)&&this.hasListeners()){
const g=S(this,Or).variables,x=S(this,Or).context;
(i==null?void 0:i.type)==="success"?((l=(o=S(this,Gn)).onSuccess)==null||l.call(o,i.data,g,x),(f=(c=S(this,Gn)).onSettled)==null||f.call(c,i.data,null,g,x)):(i==null?void 0:i.type)==="error"&&((y=(h=S(this,Gn)).onError)==null||y.call(h,i.error,g,x),(w=(m=S(this,Gn)).onSettled)==null||w.call(m,void 0,i.error,g,x))
}
this.listeners.forEach(g=>{
g(S(this,Or))
}
)
}
)
}
,Yp),fm=re.createContext(void 0),hm=n=>{
const r=re.useContext(fm);
if(!r)throw new Error("No QueryClient set, use QueryClientProvider to set one");
return r
}
,Og=({
client:n,children:r
}
)=>(re.useEffect(()=>(n.mount(),()=>{
n.unmount()
}
),[n]),fe.jsx(fm.Provider,{
value:n,children:r
}
)),pm=re.createContext(!1),jg=()=>re.useContext(pm);
pm.Provider;
function bg(){
let n=!1;
return{
clearReset:()=>{
n=!1
}
,reset:()=>{
n=!0
}
,isReset:()=>n
}

}
var Mg=re.createContext(bg()),Fg=()=>re.useContext(Mg),Ng=(n,r)=>{
(n.suspense||n.throwOnError||n.experimental_prefetchInRender)&&(r.isReset()||(n.retryOnMount=!1))
}
,Dg=n=>{
re.useEffect(()=>{
n.clearReset()
}
,[n])
}
,Ag=({
result:n,errorResetBoundary:r,throwOnError:i,query:o,suspense:l
}
)=>n.isError&&!r.isReset()&&!n.isFetching&&o&&(l&&n.data===void 0||rm(i,[n.error,o])),Bg=n=>{
const r=n.staleTime;
n.suspense&&(n.staleTime=typeof r=="function"?(...i)=>Math.max(r(...i),1e3):Math.max(r??1e3,1e3),typeof n.gcTime=="number"&&(n.gcTime=Math.max(n.gcTime,1e3)))
}
,Ug=(n,r)=>n.isLoading&&n.isFetching&&!r,zg=(n,r)=>(n==null?void 0:n.suspense)&&r.isPending,Sp=(n,r,i)=>r.fetchOptimistic(n).catch(()=>{
i.clearReset()
}
);
function $g(n,r,i){
var g,x,L,F,E;
const o=hm(),l=jg(),c=Fg(),f=o.defaultQueryOptions(n);
(x=(g=o.getDefaultOptions().queries)==null?void 0:g._experimental_beforeQuery)==null||x.call(g,f),f._optimisticResults=l?"isRestoring":"optimistic",Bg(f),Ng(f,c),Dg(c);
const h=!o.getQueryCache().get(f.queryHash),[y]=re.useState(()=>new r(o,f)),m=y.getOptimisticResult(f),w=!l&&n.subscribed!==!1;
if(re.useSyncExternalStore(re.useCallback(D=>{
const Z=w?y.subscribe(dt.batchCalls(D)):bt;
return y.updateResult(),Z
}
,[y,w]),()=>y.getCurrentResult(),()=>y.getCurrentResult()),re.useEffect(()=>{
y.setOptions(f)
}
,[f,y]),zg(f,m))throw Sp(f,y,c);
if(Ag({
result:m,errorResetBoundary:c,throwOnError:f.throwOnError,query:o.getQueryCache().get(f.queryHash),suspense:f.suspense
}
))throw m.error;
if((F=(L=o.getDefaultOptions().queries)==null?void 0:L._experimental_afterQuery)==null||F.call(L,f,m),f.experimental_prefetchInRender&&!fi&&Ug(m,l)){
const D=h?Sp(f,y,c):(E=o.getQueryCache().get(f.queryHash))==null?void 0:E.promise;
D==null||D.catch(bt).finally(()=>{
y.updateResult()
}
)
}
return f.notifyOnChangeProps?m:y.trackResult(m)
}
function ft(n,r){
return $g(n,Eg)
}
function Te(n,r){
const i=hm(),[o]=re.useState(()=>new Lg(i,n));
re.useEffect(()=>{
o.setOptions(n)
}
,[o,n]);
const l=re.useSyncExternalStore(re.useCallback(f=>o.subscribe(dt.batchCalls(f)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),c=re.useCallback((f,h)=>{
o.mutate(f,h).catch(bt)
}
,[o]);
if(l.error&&rm(o.options.throwOnError,[l.error]))throw l.error;
return{
...l,mutate:c,mutateAsync:l.mutate
}

}
const Cp=n=>{
let r;
const i=new Set,o=(m,w)=>{
const g=typeof m=="function"?m(r):m;
if(!Object.is(g,r)){
const x=r;
r=w??(typeof g!="object"||g===null)?g:Object.assign({

}
,r,g),i.forEach(L=>L(r,x))
}

}
,l=()=>r,h={
setState:o,getState:l,getInitialState:()=>y,subscribe:m=>(i.add(m),()=>i.delete(m))
}
,y=r=n(o,l,h);
return h
}
,Vg=n=>n?Cp(n):Cp,qg=n=>n;
function Qg(n,r=qg){
const i=br.useSyncExternalStore(n.subscribe,()=>r(n.getState()),()=>r(n.getInitialState()));
return br.useDebugValue(i),i
}
const xp=n=>{
const r=Vg(n),i=o=>Qg(r,o);
return Object.assign(i,r),i
}
,mm=n=>n?xp(n):xp;
function ym(n,r){
let i;
try{
i=n()
}
catch{
return
}
return{
getItem:l=>{
var c;
const f=y=>y===null?null:JSON.parse(y,void 0),h=(c=i.getItem(l))!=null?c:null;
return h instanceof Promise?h.then(f):f(h)
}
,setItem:(l,c)=>i.setItem(l,JSON.stringify(c,void 0)),removeItem:l=>i.removeItem(l)
}

}
const Kc=n=>r=>{
try{
const i=n(r);
return i instanceof Promise?i:{
then(o){
return Kc(o)(i)
}
,catch(o){
return this
}

}

}
catch(i){
return{
then(o){
return this
}
,catch(o){
return Kc(o)(i)
}

}

}

}
,Zg=(n,r)=>(i,o,l)=>{
let c={
storage:ym(()=>localStorage),partialize:E=>E,version:0,merge:(E,D)=>({
...D,...E
}
),...r
}
,f=!1;
const h=new Set,y=new Set;
let m=c.storage;
if(!m)return n((...E)=>{
console.warn(`[zustand persist middleware] Unable to update item '${
c.name
}
', the given storage is currently unavailable.`),i(...E)
}
,o,l);
const w=()=>{
const E=c.partialize({
...o()
}
);
return m.setItem(c.name,{
state:E,version:c.version
}
)
}
,g=l.setState;
l.setState=(E,D)=>{
g(E,D),w()
}
;
const x=n((...E)=>{
i(...E),w()
}
,o,l);
l.getInitialState=()=>x;
let L;
const F=()=>{
var E,D;
if(!m)return;
f=!1,h.forEach(X=>{
var K;
return X((K=o())!=null?K:x)
}
);
const Z=((D=c.onRehydrateStorage)==null?void 0:D.call(c,(E=o())!=null?E:x))||void 0;
return Kc(m.getItem.bind(m))(c.name).then(X=>{
if(X)if(typeof X.version=="number"&&X.version!==c.version){
if(c.migrate){
const K=c.migrate(X.state,X.version);
return K instanceof Promise?K.then(ae=>[!0,ae]):[!0,K]
}
console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
}
else return[!1,X.state];
return[!1,void 0]
}
).then(X=>{
var K;
const[ae,we]=X;
if(L=c.merge(we,(K=o())!=null?K:x),i(L,!0),ae)return w()
}
).then(()=>{
Z==null||Z(L,void 0),L=o(),f=!0,y.forEach(X=>X(L))
}
).catch(X=>{
Z==null||Z(void 0,X)
}
)
}
;
return l.persist={
setOptions:E=>{
c={
...c,...E
}
,E.storage&&(m=E.storage)
}
,clearStorage:()=>{
m==null||m.removeItem(c.name)
}
,getOptions:()=>c,rehydrate:()=>F(),hasHydrated:()=>f,onHydrate:E=>(h.add(E),()=>{
h.delete(E)
}
),onFinishHydration:E=>(y.add(E),()=>{
y.delete(E)
}
)
}
,c.skipHydration||F(),L||x
}
,Hg=Zg,_c=[{
id:"default",name:"Default",className:""
}
,{
id:"winxp",name:"Windows XP",className:"theme-winxp"
}
],Pp=mm()(Hg((n,r)=>({
currentTheme:_c[0],availableThemes:_c,customThemes:[],setTheme:i=>{
const{
availableThemes:o,customThemes:l
}
=r(),c=[...o,...l].find(f=>f.id===i);
c&&n({
currentTheme:c
}
)
}
,addCustomTheme:i=>{
const o={
...i,isCustom:!0
}
;
n(l=>({
customThemes:[...l.customThemes,o]
}
))
}
,removeCustomTheme:i=>{
n(o=>({
customThemes:o.customThemes.filter(l=>l.id!==i),currentTheme:o.currentTheme.id===i?_c[0]:o.currentTheme
}
))
}

}
),{
name:"windows-theme-storage",storage:ym(()=>localStorage),partialize:n=>({
currentTheme:n.currentTheme,customThemes:n.customThemes
}
)
}
));
var Xa={
exports:{

}

}
,Wg=Xa.exports,Rp;
function Kg(){
return Rp||(Rp=1,function(n,r){
(function(i,o){
n.exports=o()
}
)(Wg,function(){
var i=1e3,o=6e4,l=36e5,c="millisecond",f="second",h="minute",y="hour",m="day",w="week",g="month",x="quarter",L="year",F="date",E="Invalid Date",D=/^(\d{
4
}
)[-/]?(\d{
1,2
}
)?[-/]?(\d{
0,2
}
)[Tt\s]*(\d{
1,2
}
)?:?(\d{
1,2
}
)?:?(\d{
1,2
}
)?[.:]?(\d+)?$/,Z=/\[([^\]]+)]|Y{
1,4
}
|M{
1,4
}
|D{
1,2
}
|d{
1,4
}
|H{
1,2
}
|h{
1,2
}
|a|A|m{
1,2
}
|s{
1,2
}
|Z{
1,2
}
|SSS/g,X={
name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(ee){
var B=["th","st","nd","rd"],A=ee%100;
return"["+ee+(B[(A-20)%10]||B[A]||B[0])+"]"
}

}
,K=function(ee,B,A){
var z=String(ee);
return!z||z.length>=B?ee:""+Array(B+1-z.length).join(A)+ee
}
,ae={
s:K,z:function(ee){
var B=-ee.utcOffset(),A=Math.abs(B),z=Math.floor(A/60),I=A%60;
return(B<=0?"+":"-")+K(z,2,"0")+":"+K(I,2,"0")
}
,m:function ee(B,A){
if(B.date()<A.date())return-ee(A,B);
var z=12*(A.year()-B.year())+(A.month()-B.month()),I=B.clone().add(z,g),U=A-I<0,N=B.clone().add(z+(U?-1:1),g);
return+(-(z+(A-I)/(U?I-N:N-I))||0)
}
,a:function(ee){
return ee<0?Math.ceil(ee)||0:Math.floor(ee)
}
,p:function(ee){
return{
M:g,y:L,w,d:m,D:F,h:y,m:h,s:f,ms:c,Q:x
}
[ee]||String(ee||"").toLowerCase().replace(/s$/,"")
}
,u:function(ee){
return ee===void 0
}

}
,we="en",$={

}
;
$[we]=X;
var oe="$isDayjsObject",b=function(ee){
return ee instanceof ne||!(!ee||!ee[oe])
}
,O=function ee(B,A,z){
var I;
if(!B)return we;
if(typeof B=="string"){
var U=B.toLowerCase();
$[U]&&(I=U),A&&($[U]=A,I=U);
var N=B.split("-");
if(!I&&N.length>1)return ee(N[0])
}
else{
var k=B.name;
$[k]=B,I=k
}
return!z&&I&&(we=I),I||!z&&we
}
,Q=function(ee,B){
if(b(ee))return ee.clone();
var A=typeof B=="object"?B:{

}
;
return A.date=ee,A.args=arguments,new ne(A)
}
,J=ae;
J.l=O,J.i=b,J.w=function(ee,B){
return Q(ee,{
locale:B.$L,utc:B.$u,x:B.$x,$offset:B.$offset
}
)
}
;
var ne=function(){
function ee(A){
this.$L=O(A.locale,null,!0),this.parse(A),this.$x=this.$x||A.x||{

}
,this[oe]=!0
}
var B=ee.prototype;
return B.parse=function(A){
this.$d=function(z){
var I=z.date,U=z.utc;
if(I===null)return new Date(NaN);
if(J.u(I))return new Date;
if(I instanceof Date)return new Date(I);
if(typeof I=="string"&&!/Z$/i.test(I)){
var N=I.match(D);
if(N){
var k=N[2]-1||0,M=(N[7]||"0").substring(0,3);
return U?new Date(Date.UTC(N[1],k,N[3]||1,N[4]||0,N[5]||0,N[6]||0,M)):new Date(N[1],k,N[3]||1,N[4]||0,N[5]||0,N[6]||0,M)
}

}
return new Date(I)
}
(A),this.init()
}
,B.init=function(){
var A=this.$d;
this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()
}
,B.$utils=function(){
return J
}
,B.isValid=function(){
return this.$d.toString()!==E
}
,B.isSame=function(A,z){
var I=Q(A);
return this.startOf(z)<=I&&I<=this.endOf(z)
}
,B.isAfter=function(A,z){
return Q(A)<this.startOf(z)
}
,B.isBefore=function(A,z){
return this.endOf(z)<Q(A)
}
,B.$g=function(A,z,I){
return J.u(A)?this[z]:this.set(I,A)
}
,B.unix=function(){
return Math.floor(this.valueOf()/1e3)
}
,B.valueOf=function(){
return this.$d.getTime()
}
,B.startOf=function(A,z){
var I=this,U=!!J.u(z)||z,N=J.p(A),k=function(Re,Ae){
var Je=J.w(I.$u?Date.UTC(I.$y,Ae,Re):new Date(I.$y,Ae,Re),I);
return U?Je:Je.endOf(m)
}
,M=function(Re,Ae){
return J.w(I.toDate()[Re].apply(I.toDate("s"),(U?[0,0,0,0]:[23,59,59,999]).slice(Ae)),I)
}
,te=this.$W,ie=this.$M,me=this.$D,_e="set"+(this.$u?"UTC":"");
switch(N){
case L:return U?k(1,0):k(31,11);
case g:return U?k(1,ie):k(0,ie+1);
case w:var Pe=this.$locale().weekStart||0,ye=(te<Pe?te+7:te)-Pe;
return k(U?me-ye:me+(6-ye),ie);
case m:case F:return M(_e+"Hours",0);
case y:return M(_e+"Minutes",1);
case h:return M(_e+"Seconds",2);
case f:return M(_e+"Milliseconds",3);
default:return this.clone()
}

}
,B.endOf=function(A){
return this.startOf(A,!1)
}
,B.$set=function(A,z){
var I,U=J.p(A),N="set"+(this.$u?"UTC":""),k=(I={

}
,I[m]=N+"Date",I[F]=N+"Date",I[g]=N+"Month",I[L]=N+"FullYear",I[y]=N+"Hours",I[h]=N+"Minutes",I[f]=N+"Seconds",I[c]=N+"Milliseconds",I)[U],M=U===m?this.$D+(z-this.$W):z;
if(U===g||U===L){
var te=this.clone().set(F,1);
te.$d[k](M),te.init(),this.$d=te.set(F,Math.min(this.$D,te.daysInMonth())).$d
}
else k&&this.$d[k](M);
return this.init(),this
}
,B.set=function(A,z){
return this.clone().$set(A,z)
}
,B.get=function(A){
return this[J.p(A)]()
}
,B.add=function(A,z){
var I,U=this;
A=Number(A);
var N=J.p(z),k=function(ie){
var me=Q(U);
return J.w(me.date(me.date()+Math.round(ie*A)),U)
}
;
if(N===g)return this.set(g,this.$M+A);
if(N===L)return this.set(L,this.$y+A);
if(N===m)return k(1);
if(N===w)return k(7);
var M=(I={

}
,I[h]=o,I[y]=l,I[f]=i,I)[N]||1,te=this.$d.getTime()+A*M;
return J.w(te,this)
}
,B.subtract=function(A,z){
return this.add(-1*A,z)
}
,B.format=function(A){
var z=this,I=this.$locale();
if(!this.isValid())return I.invalidDate||E;
var U=A||"YYYY-MM-DDTHH:mm:ssZ",N=J.z(this),k=this.$H,M=this.$m,te=this.$M,ie=I.weekdays,me=I.months,_e=I.meridiem,Pe=function(Ae,Je,_t,kt){
return Ae&&(Ae[Je]||Ae(z,U))||_t[Je].slice(0,kt)
}
,ye=function(Ae){
return J.s(k%12||12,Ae,"0")
}
,Re=_e||function(Ae,Je,_t){
var kt=Ae<12?"AM":"PM";
return _t?kt.toLowerCase():kt
}
;
return U.replace(Z,function(Ae,Je){
return Je||function(_t){
switch(_t){
case"YY":return String(z.$y).slice(-2);
case"YYYY":return J.s(z.$y,4,"0");
case"M":return te+1;
case"MM":return J.s(te+1,2,"0");
case"MMM":return Pe(I.monthsShort,te,me,3);
case"MMMM":return Pe(me,te);
case"D":return z.$D;
case"DD":return J.s(z.$D,2,"0");
case"d":return String(z.$W);
case"dd":return Pe(I.weekdaysMin,z.$W,ie,2);
case"ddd":return Pe(I.weekdaysShort,z.$W,ie,3);
case"dddd":return ie[z.$W];
case"H":return String(k);
case"HH":return J.s(k,2,"0");
case"h":return ye(1);
case"hh":return ye(2);
case"a":return Re(k,M,!0);
case"A":return Re(k,M,!1);
case"m":return String(M);
case"mm":return J.s(M,2,"0");
case"s":return String(z.$s);
case"ss":return J.s(z.$s,2,"0");
case"SSS":return J.s(z.$ms,3,"0");
case"Z":return N
}
return null
}
(Ae)||N.replace(":","")
}
)
}
,B.utcOffset=function(){
return 15*-Math.round(this.$d.getTimezoneOffset()/15)
}
,B.diff=function(A,z,I){
var U,N=this,k=J.p(z),M=Q(A),te=(M.utcOffset()-this.utcOffset())*o,ie=this-M,me=function(){
return J.m(N,M)
}
;
switch(k){
case L:U=me()/12;
break;
case g:U=me();
break;
case x:U=me()/3;
break;
case w:U=(ie-te)/6048e5;
break;
case m:U=(ie-te)/864e5;
break;
case y:U=ie/l;
break;
case h:U=ie/o;
break;
case f:U=ie/i;
break;
default:U=ie
}
return I?U:J.a(U)
}
,B.daysInMonth=function(){
return this.endOf(g).$D
}
,B.$locale=function(){
return $[this.$L]
}
,B.locale=function(A,z){
if(!A)return this.$L;
var I=this.clone(),U=O(A,z,!0);
return U&&(I.$L=U),I
}
,B.clone=function(){
return J.w(this.$d,this)
}
,B.toDate=function(){
return new Date(this.valueOf())
}
,B.toJSON=function(){
return this.isValid()?this.toISOString():null
}
,B.toISOString=function(){
return this.$d.toISOString()
}
,B.toString=function(){
return this.$d.toUTCString()
}
,ee
}
(),se=ne.prototype;
return Q.prototype=se,[["$ms",c],["$s",f],["$m",h],["$H",y],["$W",m],["$M",g],["$y",L],["$D",F]].forEach(function(ee){
se[ee[1]]=function(B){
return this.$g(B,ee[0],ee[1])
}

}
),Q.extend=function(ee,B){
return ee.$i||(ee(B,ne,Q),ee.$i=!0),Q
}
,Q.locale=O,Q.isDayjs=b,Q.unix=function(ee){
return Q(1e3*ee)
}
,Q.en=$[we],Q.Ls=$,Q.p={

}
,Q
}
)
}
(Xa)),Xa.exports
}
var Gg=Kg();
const ps=od(Gg);
var ze;
(function(n){
n.assertEqual=l=>l;
function r(l){

}
n.assertIs=r;
function i(l){
throw new Error
}
n.assertNever=i,n.arrayToEnum=l=>{
const c={

}
;
for(const f of l)c[f]=f;
return c
}
,n.getValidEnumValues=l=>{
const c=n.objectKeys(l).filter(h=>typeof l[l[h]]!="number"),f={

}
;
for(const h of c)f[h]=l[h];
return n.objectValues(f)
}
,n.objectValues=l=>n.objectKeys(l).map(function(c){
return l[c]
}
),n.objectKeys=typeof Object.keys=="function"?l=>Object.keys(l):l=>{
const c=[];
for(const f in l)Object.prototype.hasOwnProperty.call(l,f)&&c.push(f);
return c
}
,n.find=(l,c)=>{
for(const f of l)if(c(f))return f
}
,n.isInteger=typeof Number.isInteger=="function"?l=>Number.isInteger(l):l=>typeof l=="number"&&isFinite(l)&&Math.floor(l)===l;
function o(l,c=" | "){
return l.map(f=>typeof f=="string"?`'${
f
}
'`:f).join(c)
}
n.joinValues=o,n.jsonStringifyReplacer=(l,c)=>typeof c=="bigint"?c.toString():c
}
)(ze||(ze={

}
));
var Gc;
(function(n){
n.mergeShapes=(r,i)=>({
...r,...i
}
)
}
)(Gc||(Gc={

}
));
const pe=ze.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Wn=n=>{
switch(typeof n){
case"undefined":return pe.undefined;
case"string":return pe.string;
case"number":return isNaN(n)?pe.nan:pe.number;
case"boolean":return pe.boolean;
case"function":return pe.function;
case"bigint":return pe.bigint;
case"symbol":return pe.symbol;
case"object":return Array.isArray(n)?pe.array:n===null?pe.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?pe.promise:typeof Map<"u"&&n instanceof Map?pe.map:typeof Set<"u"&&n instanceof Set?pe.set:typeof Date<"u"&&n instanceof Date?pe.date:pe.object;
default:return pe.unknown
}

}
,W=ze.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Jg=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:");
class Kt extends Error{
get errors(){
return this.issues
}
constructor(r){
super(),this.issues=[],this.addIssue=o=>{
this.issues=[...this.issues,o]
}
,this.addIssues=(o=[])=>{
this.issues=[...this.issues,...o]
}
;
const i=new.target.prototype;
Object.setPrototypeOf?Object.setPrototypeOf(this,i):this.__proto__=i,this.name="ZodError",this.issues=r
}
format(r){
const i=r||function(c){
return c.message
}
,o={
_errors:[]
}
,l=c=>{
for(const f of c.issues)if(f.code==="invalid_union")f.unionErrors.map(l);
else if(f.code==="invalid_return_type")l(f.returnTypeError);
else if(f.code==="invalid_arguments")l(f.argumentsError);
else if(f.path.length===0)o._errors.push(i(f));
else{
let h=o,y=0;
for(;
y<f.path.length;
){
const m=f.path[y];
y===f.path.length-1?(h[m]=h[m]||{
_errors:[]
}
,h[m]._errors.push(i(f))):h[m]=h[m]||{
_errors:[]
}
,h=h[m],y++
}

}

}
;
return l(this),o
}
static assert(r){
if(!(r instanceof Kt))throw new Error(`Not a ZodError: ${
r
}
`)
}
toString(){
return this.message
}
get message(){
return JSON.stringify(this.issues,ze.jsonStringifyReplacer,2)
}
get isEmpty(){
return this.issues.length===0
}
flatten(r=i=>i.message){
const i={

}
,o=[];
for(const l of this.issues)l.path.length>0?(i[l.path[0]]=i[l.path[0]]||[],i[l.path[0]].push(r(l))):o.push(r(l));
return{
formErrors:o,fieldErrors:i
}

}
get formErrors(){
return this.flatten()
}

}
Kt.create=n=>new Kt(n);
const ms=(n,r)=>{
let i;
switch(n.code){
case W.invalid_type:n.received===pe.undefined?i="Required":i=`Expected ${
n.expected
}
, received ${
n.received
}
`;
break;
case W.invalid_literal:i=`Invalid literal value, expected ${
JSON.stringify(n.expected,ze.jsonStringifyReplacer)
}
`;
break;
case W.unrecognized_keys:i=`Unrecognized key(s) in object: ${
ze.joinValues(n.keys,", ")
}
`;
break;
case W.invalid_union:i="Invalid input";
break;
case W.invalid_union_discriminator:i=`Invalid discriminator value. Expected ${
ze.joinValues(n.options)
}
`;
break;
case W.invalid_enum_value:i=`Invalid enum value. Expected ${
ze.joinValues(n.options)
}
, received '${
n.received
}
'`;
break;
case W.invalid_arguments:i="Invalid function arguments";
break;
case W.invalid_return_type:i="Invalid function return type";
break;
case W.invalid_date:i="Invalid date";
break;
case W.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(i=`Invalid input: must include "${
n.validation.includes
}
"`,typeof n.validation.position=="number"&&(i=`${
i
}
 at one or more positions greater than or equal to ${
n.validation.position
}
`)):"startsWith"in n.validation?i=`Invalid input: must start with "${
n.validation.startsWith
}
"`:"endsWith"in n.validation?i=`Invalid input: must end with "${
n.validation.endsWith
}
"`:ze.assertNever(n.validation):n.validation!=="regex"?i=`Invalid ${
n.validation
}
`:i="Invalid";
break;
case W.too_small:n.type==="array"?i=`Array must contain ${
n.exact?"exactly":n.inclusive?"at least":"more than"
}
 ${
n.minimum
}
 element(s)`:n.type==="string"?i=`String must contain ${
n.exact?"exactly":n.inclusive?"at least":"over"
}
 ${
n.minimum
}
 character(s)`:n.type==="number"?i=`Number must be ${
n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "
}
${
n.minimum
}
`:n.type==="date"?i=`Date must be ${
n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "
}
${
new Date(Number(n.minimum))
}
`:i="Invalid input";
break;
case W.too_big:n.type==="array"?i=`Array must contain ${
n.exact?"exactly":n.inclusive?"at most":"less than"
}
 ${
n.maximum
}
 element(s)`:n.type==="string"?i=`String must contain ${
n.exact?"exactly":n.inclusive?"at most":"under"
}
 ${
n.maximum
}
 character(s)`:n.type==="number"?i=`Number must be ${
n.exact?"exactly":n.inclusive?"less than or equal to":"less than"
}
 ${
n.maximum
}
`:n.type==="bigint"?i=`BigInt must be ${
n.exact?"exactly":n.inclusive?"less than or equal to":"less than"
}
 ${
n.maximum
}
`:n.type==="date"?i=`Date must be ${
n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"
}
 ${
new Date(Number(n.maximum))
}
`:i="Invalid input";
break;
case W.custom:i="Invalid input";
break;
case W.invalid_intersection_types:i="Intersection results could not be merged";
break;
case W.not_multiple_of:i=`Number must be a multiple of ${
n.multipleOf
}
`;
break;
case W.not_finite:i="Number must be finite";
break;
default:i=r.defaultError,ze.assertNever(n)
}
return{
message:i
}

}
;
let vm=ms;
function Yg(n){
vm=n
}
function il(){
return vm
}
const sl=n=>{
const{
data:r,path:i,errorMaps:o,issueData:l
}
=n,c=[...i,...l.path||[]],f={
...l,path:c
}
;
if(l.message!==void 0)return{
...l,path:c,message:l.message
}
;
let h="";
const y=o.filter(m=>!!m).slice().reverse();
for(const m of y)h=m(f,{
data:r,defaultError:h
}
).message;
return{
...l,path:c,message:h
}

}
,Xg=[];
function le(n,r){
const i=il(),o=sl({
issueData:r,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,i,i===ms?void 0:ms].filter(l=>!!l)
}
);
n.common.issues.push(o)
}
class Tt{
constructor(){
this.value="valid"
}
dirty(){
this.value==="valid"&&(this.value="dirty")
}
abort(){
this.value!=="aborted"&&(this.value="aborted")
}
static mergeArray(r,i){
const o=[];
for(const l of i){
if(l.status==="aborted")return je;
l.status==="dirty"&&r.dirty(),o.push(l.value)
}
return{
status:r.value,value:o
}

}
static async mergeObjectAsync(r,i){
const o=[];
for(const l of i){
const c=await l.key,f=await l.value;
o.push({
key:c,value:f
}
)
}
return Tt.mergeObjectSync(r,o)
}
static mergeObjectSync(r,i){
const o={

}
;
for(const l of i){
const{
key:c,value:f
}
=l;
if(c.status==="aborted"||f.status==="aborted")return je;
c.status==="dirty"&&r.dirty(),f.status==="dirty"&&r.dirty(),c.value!=="__proto__"&&(typeof f.value<"u"||l.alwaysSet)&&(o[c.value]=f.value)
}
return{
status:r.value,value:o
}

}

}
const je=Object.freeze({
status:"aborted"
}
),Hi=n=>({
status:"dirty",value:n
}
),Mt=n=>({
status:"valid",value:n
}
),Jc=n=>n.status==="aborted",Yc=n=>n.status==="dirty",pi=n=>n.status==="valid",yo=n=>typeof Promise<"u"&&n instanceof Promise;
function ol(n,r,i,o){
if(typeof r=="function"?n!==r||!0:!r.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");
return r.get(n)
}
function gm(n,r,i,o,l){
if(typeof r=="function"?n!==r||!0:!r.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");
return r.set(n,i),i
}
var Ce;
(function(n){
n.errToObj=r=>typeof r=="string"?{
message:r
}
:r||{

}
,n.toString=r=>typeof r=="string"?r:r==null?void 0:r.message
}
)(Ce||(Ce={

}
));
var uo,co;
class On{
constructor(r,i,o,l){
this._cachedPath=[],this.parent=r,this.data=i,this._path=o,this._key=l
}
get path(){
return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath
}

}
const Ep=(n,r)=>{
if(pi(r))return{
success:!0,data:r.value
}
;
if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");
return{
success:!1,get error(){
if(this._error)return this._error;
const i=new Kt(n.common.issues);
return this._error=i,this._error
}

}

}
;
function Me(n){
if(!n)return{

}
;
const{
errorMap:r,invalid_type_error:i,required_error:o,description:l
}
=n;
if(r&&(i||o))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
return r?{
errorMap:r,description:l
}
:{
errorMap:(f,h)=>{
var y,m;
const{
message:w
}
=n;
return f.code==="invalid_enum_value"?{
message:w??h.defaultError
}
:typeof h.data>"u"?{
message:(y=w??o)!==null&&y!==void 0?y:h.defaultError
}
:f.code!=="invalid_type"?{
message:h.defaultError
}
:{
message:(m=w??i)!==null&&m!==void 0?m:h.defaultError
}

}
,description:l
}

}
class Ne{
get description(){
return this._def.description
}
_getType(r){
return Wn(r.data)
}
_getOrReturnCtx(r,i){
return i||{
common:r.parent.common,data:r.data,parsedType:Wn(r.data),schemaErrorMap:this._def.errorMap,path:r.path,parent:r.parent
}

}
_processInputParams(r){
return{
status:new Tt,ctx:{
common:r.parent.common,data:r.data,parsedType:Wn(r.data),schemaErrorMap:this._def.errorMap,path:r.path,parent:r.parent
}

}

}
_parseSync(r){
const i=this._parse(r);
if(yo(i))throw new Error("Synchronous parse encountered promise.");
return i
}
_parseAsync(r){
const i=this._parse(r);
return Promise.resolve(i)
}
parse(r,i){
const o=this.safeParse(r,i);
if(o.success)return o.data;
throw o.error
}
safeParse(r,i){
var o;
const l={
common:{
issues:[],async:(o=i==null?void 0:i.async)!==null&&o!==void 0?o:!1,contextualErrorMap:i==null?void 0:i.errorMap
}
,path:(i==null?void 0:i.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:r,parsedType:Wn(r)
}
,c=this._parseSync({
data:r,path:l.path,parent:l
}
);
return Ep(l,c)
}
"~validate"(r){
var i,o;
const l={
common:{
issues:[],async:!!this["~standard"].async
}
,path:[],schemaErrorMap:this._def.errorMap,parent:null,data:r,parsedType:Wn(r)
}
;
if(!this["~standard"].async)try{
const c=this._parseSync({
data:r,path:[],parent:l
}
);
return pi(c)?{
value:c.value
}
:{
issues:l.common.issues
}

}
catch(c){
!((o=(i=c==null?void 0:c.message)===null||i===void 0?void 0:i.toLowerCase())===null||o===void 0)&&o.includes("encountered")&&(this["~standard"].async=!0),l.common={
issues:[],async:!0
}

}
return this._parseAsync({
data:r,path:[],parent:l
}
).then(c=>pi(c)?{
value:c.value
}
:{
issues:l.common.issues
}
)
}
async parseAsync(r,i){
const o=await this.safeParseAsync(r,i);
if(o.success)return o.data;
throw o.error
}
async safeParseAsync(r,i){
const o={
common:{
issues:[],contextualErrorMap:i==null?void 0:i.errorMap,async:!0
}
,path:(i==null?void 0:i.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:r,parsedType:Wn(r)
}
,l=this._parse({
data:r,path:o.path,parent:o
}
),c=await(yo(l)?l:Promise.resolve(l));
return Ep(o,c)
}
refine(r,i){
const o=l=>typeof i=="string"||typeof i>"u"?{
message:i
}
:typeof i=="function"?i(l):i;
return this._refinement((l,c)=>{
const f=r(l),h=()=>c.addIssue({
code:W.custom,...o(l)
}
);
return typeof Promise<"u"&&f instanceof Promise?f.then(y=>y?!0:(h(),!1)):f?!0:(h(),!1)
}
)
}
refinement(r,i){
return this._refinement((o,l)=>r(o)?!0:(l.addIssue(typeof i=="function"?i(o,l):i),!1))
}
_refinement(r){
return new wn({
schema:this,typeName:Oe.ZodEffects,effect:{
type:"refinement",refinement:r
}

}
)
}
superRefine(r){
return this._refinement(r)
}
constructor(r){
this.spa=this.safeParseAsync,this._def=r,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={
version:1,vendor:"zod",validate:i=>this["~validate"](i)
}

}
optional(){
return Ln.create(this,this._def)
}
nullable(){
return Dr.create(this,this._def)
}
nullish(){
return this.nullable().optional()
}
array(){
return gn.create(this)
}
promise(){
return vs.create(this,this._def)
}
or(r){
return _o.create([this,r],this._def)
}
and(r){
return ko.create(this,r,this._def)
}
transform(r){
return new wn({
...Me(this._def),schema:this,typeName:Oe.ZodEffects,effect:{
type:"transform",transform:r
}

}
)
}
default(r){
const i=typeof r=="function"?r:()=>r;
return new Ro({
...Me(this._def),innerType:this,defaultValue:i,typeName:Oe.ZodDefault
}
)
}
brand(){
return new dd({
typeName:Oe.ZodBranded,type:this,...Me(this._def)
}
)
}
catch(r){
const i=typeof r=="function"?r:()=>r;
return new Eo({
...Me(this._def),innerType:this,catchValue:i,typeName:Oe.ZodCatch
}
)
}
describe(r){
const i=this.constructor;
return new i({
...this._def,description:r
}
)
}
pipe(r){
return Fo.create(this,r)
}
readonly(){
return To.create(this)
}
isOptional(){
return this.safeParse(void 0).success
}
isNullable(){
return this.safeParse(null).success
}

}
const e0=/^c[^\s-]{
8,
}
$/i,t0=/^[0-9a-z]+$/,n0=/^[0-9A-HJKMNP-TV-Z]{
26
}
$/i,r0=/^[0-9a-fA-F]{
8
}
\b-[0-9a-fA-F]{
4
}
\b-[0-9a-fA-F]{
4
}
\b-[0-9a-fA-F]{
4
}
\b-[0-9a-fA-F]{
12
}
$/i,i0=/^[a-z0-9_-]{
21
}
$/i,s0=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,o0=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,a0=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{
2,
}
$/i,l0="^(\\p{
Extended_Pictographic
}
|\\p{
Emoji_Component
}
)+$";
let kc;
const u0=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){
3
}
(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,c0=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){
3
}
(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,d0=/^(([0-9a-fA-F]{
1,4
}
:){
7,7
}
[0-9a-fA-F]{
1,4
}
|([0-9a-fA-F]{
1,4
}
:){
1,7
}
:|([0-9a-fA-F]{
1,4
}
:){
1,6
}
:[0-9a-fA-F]{
1,4
}
|([0-9a-fA-F]{
1,4
}
:){
1,5
}
(:[0-9a-fA-F]{
1,4
}
){
1,2
}
|([0-9a-fA-F]{
1,4
}
:){
1,4
}
(:[0-9a-fA-F]{
1,4
}
){
1,3
}
|([0-9a-fA-F]{
1,4
}
:){
1,3
}
(:[0-9a-fA-F]{
1,4
}
){
1,4
}
|([0-9a-fA-F]{
1,4
}
:){
1,2
}
(:[0-9a-fA-F]{
1,4
}
){
1,5
}
|[0-9a-fA-F]{
1,4
}
:((:[0-9a-fA-F]{
1,4
}
){
1,6
}
)|:((:[0-9a-fA-F]{
1,4
}
){
1,7
}
|:)|fe80:(:[0-9a-fA-F]{
0,4
}
){
0,4
}
%[0-9a-zA-Z]{
1,
}
|::(ffff(:0{
1,4
}
){
0,1
}
:){
0,1
}
((25[0-5]|(2[0-4]|1{
0,1
}
[0-9]){
0,1
}
[0-9])\.){
3,3
}
(25[0-5]|(2[0-4]|1{
0,1
}
[0-9]){
0,1
}
[0-9])|([0-9a-fA-F]{
1,4
}
:){
1,4
}
:((25[0-5]|(2[0-4]|1{
0,1
}
[0-9]){
0,1
}
[0-9])\.){
3,3
}
(25[0-5]|(2[0-4]|1{
0,1
}
[0-9]){
0,1
}
[0-9]))$/,f0=/^(([0-9a-fA-F]{
1,4
}
:){
7,7
}
[0-9a-fA-F]{
1,4
}
|([0-9a-fA-F]{
1,4
}
:){
1,7
}
:|([0-9a-fA-F]{
1,4
}
:){
1,6
}
:[0-9a-fA-F]{
1,4
}
|([0-9a-fA-F]{
1,4
}
:){
1,5
}
(:[0-9a-fA-F]{
1,4
}
){
1,2
}
|([0-9a-fA-F]{
1,4
}
:){
1,4
}
(:[0-9a-fA-F]{
1,4
}
){
1,3
}
|([0-9a-fA-F]{
1,4
}
:){
1,3
}
(:[0-9a-fA-F]{
1,4
}
){
1,4
}
|([0-9a-fA-F]{
1,4
}
:){
1,2
}
(:[0-9a-fA-F]{
1,4
}
){
1,5
}
|[0-9a-fA-F]{
1,4
}
:((:[0-9a-fA-F]{
1,4
}
){
1,6
}
)|:((:[0-9a-fA-F]{
1,4
}
){
1,7
}
|:)|fe80:(:[0-9a-fA-F]{
0,4
}
){
0,4
}
%[0-9a-zA-Z]{
1,
}
|::(ffff(:0{
1,4
}
){
0,1
}
:){
0,1
}
((25[0-5]|(2[0-4]|1{
0,1
}
[0-9]){
0,1
}
[0-9])\.){
3,3
}
(25[0-5]|(2[0-4]|1{
0,1
}
[0-9]){
0,1
}
[0-9])|([0-9a-fA-F]{
1,4
}
:){
1,4
}
:((25[0-5]|(2[0-4]|1{
0,1
}
[0-9]){
0,1
}
[0-9])\.){
3,3
}
(25[0-5]|(2[0-4]|1{
0,1
}
[0-9]){
0,1
}
[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,h0=/^([0-9a-zA-Z+/]{
4
}
)*(([0-9a-zA-Z+/]{
2
}
==)|([0-9a-zA-Z+/]{
3
}
=))?$/,p0=/^([0-9a-zA-Z-_]{
4
}
)*(([0-9a-zA-Z-_]{
2
}
(==)?)|([0-9a-zA-Z-_]{
3
}
(=)?))?$/,wm="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{
4
}
-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",m0=new RegExp(`^${
wm
}
$`);
function _m(n){
let r="[0-5]\\d";
n.precision?r=`${
r
}
\\.\\d{
${
n.precision
}

}
`:n.precision==null&&(r=`${
r
}
(\\.\\d+)?`);
const i=n.precision?"+":"?";
return`([01]\\d|2[0-3]):[0-5]\\d(:${
r
}
)${
i
}
`
}
function y0(n){
return new RegExp(`^${
_m(n)
}
$`)
}
function km(n){
let r=`${
wm
}
T${
_m(n)
}
`;
const i=[];
return i.push(n.local?"Z?":"Z"),n.offset&&i.push("([+-]\\d{
2
}
:?\\d{
2
}
)"),r=`${
r
}
(${
i.join("|")
}
)`,new RegExp(`^${
r
}
$`)
}
function v0(n,r){
return!!((r==="v4"||!r)&&u0.test(n)||(r==="v6"||!r)&&d0.test(n))
}
function g0(n,r){
if(!s0.test(n))return!1;
try{
const[i]=n.split("."),o=i.replace(/-/g,"+").replace(/_/g,"/").padEnd(i.length+(4-i.length%4)%4,"="),l=JSON.parse(atob(o));
return!(typeof l!="object"||l===null||!l.typ||!l.alg||r&&l.alg!==r)
}
catch{
return!1
}

}
function w0(n,r){
return!!((r==="v4"||!r)&&c0.test(n)||(r==="v6"||!r)&&f0.test(n))
}
class vn extends Ne{
_parse(r){
if(this._def.coerce&&(r.data=String(r.data)),this._getType(r)!==pe.string){
const c=this._getOrReturnCtx(r);
return le(c,{
code:W.invalid_type,expected:pe.string,received:c.parsedType
}
),je
}
const o=new Tt;
let l;
for(const c of this._def.checks)if(c.kind==="min")r.data.length<c.value&&(l=this._getOrReturnCtx(r,l),le(l,{
code:W.too_small,minimum:c.value,type:"string",inclusive:!0,exact:!1,message:c.message
}
),o.dirty());
else if(c.kind==="max")r.data.length>c.value&&(l=this._getOrReturnCtx(r,l),le(l,{
code:W.too_big,maximum:c.value,type:"string",inclusive:!0,exact:!1,message:c.message
}
),o.dirty());
else if(c.kind==="length"){
const f=r.data.length>c.value,h=r.data.length<c.value;
(f||h)&&(l=this._getOrReturnCtx(r,l),f?le(l,{
code:W.too_big,maximum:c.value,type:"string",inclusive:!0,exact:!0,message:c.message
}
):h&&le(l,{
code:W.too_small,minimum:c.value,type:"string",inclusive:!0,exact:!0,message:c.message
}
),o.dirty())
}
else if(c.kind==="email")a0.test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"email",code:W.invalid_string,message:c.message
}
),o.dirty());
else if(c.kind==="emoji")kc||(kc=new RegExp(l0,"u")),kc.test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"emoji",code:W.invalid_string,message:c.message
}
),o.dirty());
else if(c.kind==="uuid")r0.test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"uuid",code:W.invalid_string,message:c.message
}
),o.dirty());
else if(c.kind==="nanoid")i0.test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"nanoid",code:W.invalid_string,message:c.message
}
),o.dirty());
else if(c.kind==="cuid")e0.test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"cuid",code:W.invalid_string,message:c.message
}
),o.dirty());
else if(c.kind==="cuid2")t0.test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"cuid2",code:W.invalid_string,message:c.message
}
),o.dirty());
else if(c.kind==="ulid")n0.test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"ulid",code:W.invalid_string,message:c.message
}
),o.dirty());
else if(c.kind==="url")try{
new URL(r.data)
}
catch{
l=this._getOrReturnCtx(r,l),le(l,{
validation:"url",code:W.invalid_string,message:c.message
}
),o.dirty()
}
else c.kind==="regex"?(c.regex.lastIndex=0,c.regex.test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"regex",code:W.invalid_string,message:c.message
}
),o.dirty())):c.kind==="trim"?r.data=r.data.trim():c.kind==="includes"?r.data.includes(c.value,c.position)||(l=this._getOrReturnCtx(r,l),le(l,{
code:W.invalid_string,validation:{
includes:c.value,position:c.position
}
,message:c.message
}
),o.dirty()):c.kind==="toLowerCase"?r.data=r.data.toLowerCase():c.kind==="toUpperCase"?r.data=r.data.toUpperCase():c.kind==="startsWith"?r.data.startsWith(c.value)||(l=this._getOrReturnCtx(r,l),le(l,{
code:W.invalid_string,validation:{
startsWith:c.value
}
,message:c.message
}
),o.dirty()):c.kind==="endsWith"?r.data.endsWith(c.value)||(l=this._getOrReturnCtx(r,l),le(l,{
code:W.invalid_string,validation:{
endsWith:c.value
}
,message:c.message
}
),o.dirty()):c.kind==="datetime"?km(c).test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
code:W.invalid_string,validation:"datetime",message:c.message
}
),o.dirty()):c.kind==="date"?m0.test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
code:W.invalid_string,validation:"date",message:c.message
}
),o.dirty()):c.kind==="time"?y0(c).test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
code:W.invalid_string,validation:"time",message:c.message
}
),o.dirty()):c.kind==="duration"?o0.test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"duration",code:W.invalid_string,message:c.message
}
),o.dirty()):c.kind==="ip"?v0(r.data,c.version)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"ip",code:W.invalid_string,message:c.message
}
),o.dirty()):c.kind==="jwt"?g0(r.data,c.alg)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"jwt",code:W.invalid_string,message:c.message
}
),o.dirty()):c.kind==="cidr"?w0(r.data,c.version)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"cidr",code:W.invalid_string,message:c.message
}
),o.dirty()):c.kind==="base64"?h0.test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"base64",code:W.invalid_string,message:c.message
}
),o.dirty()):c.kind==="base64url"?p0.test(r.data)||(l=this._getOrReturnCtx(r,l),le(l,{
validation:"base64url",code:W.invalid_string,message:c.message
}
),o.dirty()):ze.assertNever(c);
return{
status:o.value,value:r.data
}

}
_regex(r,i,o){
return this.refinement(l=>r.test(l),{
validation:i,code:W.invalid_string,...Ce.errToObj(o)
}
)
}
_addCheck(r){
return new vn({
...this._def,checks:[...this._def.checks,r]
}
)
}
email(r){
return this._addCheck({
kind:"email",...Ce.errToObj(r)
}
)
}
url(r){
return this._addCheck({
kind:"url",...Ce.errToObj(r)
}
)
}
emoji(r){
return this._addCheck({
kind:"emoji",...Ce.errToObj(r)
}
)
}
uuid(r){
return this._addCheck({
kind:"uuid",...Ce.errToObj(r)
}
)
}
nanoid(r){
return this._addCheck({
kind:"nanoid",...Ce.errToObj(r)
}
)
}
cuid(r){
return this._addCheck({
kind:"cuid",...Ce.errToObj(r)
}
)
}
cuid2(r){
return this._addCheck({
kind:"cuid2",...Ce.errToObj(r)
}
)
}
ulid(r){
return this._addCheck({
kind:"ulid",...Ce.errToObj(r)
}
)
}
base64(r){
return this._addCheck({
kind:"base64",...Ce.errToObj(r)
}
)
}
base64url(r){
return this._addCheck({
kind:"base64url",...Ce.errToObj(r)
}
)
}
jwt(r){
return this._addCheck({
kind:"jwt",...Ce.errToObj(r)
}
)
}
ip(r){
return this._addCheck({
kind:"ip",...Ce.errToObj(r)
}
)
}
cidr(r){
return this._addCheck({
kind:"cidr",...Ce.errToObj(r)
}
)
}
datetime(r){
var i,o;
return typeof r=="string"?this._addCheck({
kind:"datetime",precision:null,offset:!1,local:!1,message:r
}
):this._addCheck({
kind:"datetime",precision:typeof(r==null?void 0:r.precision)>"u"?null:r==null?void 0:r.precision,offset:(i=r==null?void 0:r.offset)!==null&&i!==void 0?i:!1,local:(o=r==null?void 0:r.local)!==null&&o!==void 0?o:!1,...Ce.errToObj(r==null?void 0:r.message)
}
)
}
date(r){
return this._addCheck({
kind:"date",message:r
}
)
}
time(r){
return typeof r=="string"?this._addCheck({
kind:"time",precision:null,message:r
}
):this._addCheck({
kind:"time",precision:typeof(r==null?void 0:r.precision)>"u"?null:r==null?void 0:r.precision,...Ce.errToObj(r==null?void 0:r.message)
}
)
}
duration(r){
return this._addCheck({
kind:"duration",...Ce.errToObj(r)
}
)
}
regex(r,i){
return this._addCheck({
kind:"regex",regex:r,...Ce.errToObj(i)
}
)
}
includes(r,i){
return this._addCheck({
kind:"includes",value:r,position:i==null?void 0:i.position,...Ce.errToObj(i==null?void 0:i.message)
}
)
}
startsWith(r,i){
return this._addCheck({
kind:"startsWith",value:r,...Ce.errToObj(i)
}
)
}
endsWith(r,i){
return this._addCheck({
kind:"endsWith",value:r,...Ce.errToObj(i)
}
)
}
min(r,i){
return this._addCheck({
kind:"min",value:r,...Ce.errToObj(i)
}
)
}
max(r,i){
return this._addCheck({
kind:"max",value:r,...Ce.errToObj(i)
}
)
}
length(r,i){
return this._addCheck({
kind:"length",value:r,...Ce.errToObj(i)
}
)
}
nonempty(r){
return this.min(1,Ce.errToObj(r))
}
trim(){
return new vn({
...this._def,checks:[...this._def.checks,{
kind:"trim"
}
]
}
)
}
toLowerCase(){
return new vn({
...this._def,checks:[...this._def.checks,{
kind:"toLowerCase"
}
]
}
)
}
toUpperCase(){
return new vn({
...this._def,checks:[...this._def.checks,{
kind:"toUpperCase"
}
]
}
)
}
get isDatetime(){
return!!this._def.checks.find(r=>r.kind==="datetime")
}
get isDate(){
return!!this._def.checks.find(r=>r.kind==="date")
}
get isTime(){
return!!this._def.checks.find(r=>r.kind==="time")
}
get isDuration(){
return!!this._def.checks.find(r=>r.kind==="duration")
}
get isEmail(){
return!!this._def.checks.find(r=>r.kind==="email")
}
get isURL(){
return!!this._def.checks.find(r=>r.kind==="url")
}
get isEmoji(){
return!!this._def.checks.find(r=>r.kind==="emoji")
}
get isUUID(){
return!!this._def.checks.find(r=>r.kind==="uuid")
}
get isNANOID(){
return!!this._def.checks.find(r=>r.kind==="nanoid")
}
get isCUID(){
return!!this._def.checks.find(r=>r.kind==="cuid")
}
get isCUID2(){
return!!this._def.checks.find(r=>r.kind==="cuid2")
}
get isULID(){
return!!this._def.checks.find(r=>r.kind==="ulid")
}
get isIP(){
return!!this._def.checks.find(r=>r.kind==="ip")
}
get isCIDR(){
return!!this._def.checks.find(r=>r.kind==="cidr")
}
get isBase64(){
return!!this._def.checks.find(r=>r.kind==="base64")
}
get isBase64url(){
return!!this._def.checks.find(r=>r.kind==="base64url")
}
get minLength(){
let r=null;
for(const i of this._def.checks)i.kind==="min"&&(r===null||i.value>r)&&(r=i.value);
return r
}
get maxLength(){
let r=null;
for(const i of this._def.checks)i.kind==="max"&&(r===null||i.value<r)&&(r=i.value);
return r
}

}
vn.create=n=>{
var r;
return new vn({
checks:[],typeName:Oe.ZodString,coerce:(r=n==null?void 0:n.coerce)!==null&&r!==void 0?r:!1,...Me(n)
}
)
}
;
function _0(n,r){
const i=(n.toString().split(".")[1]||"").length,o=(r.toString().split(".")[1]||"").length,l=i>o?i:o,c=parseInt(n.toFixed(l).replace(".","")),f=parseInt(r.toFixed(l).replace(".",""));
return c%f/Math.pow(10,l)
}
class Mr extends Ne{
constructor(){
super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf
}
_parse(r){
if(this._def.coerce&&(r.data=Number(r.data)),this._getType(r)!==pe.number){
const c=this._getOrReturnCtx(r);
return le(c,{
code:W.invalid_type,expected:pe.number,received:c.parsedType
}
),je
}
let o;
const l=new Tt;
for(const c of this._def.checks)c.kind==="int"?ze.isInteger(r.data)||(o=this._getOrReturnCtx(r,o),le(o,{
code:W.invalid_type,expected:"integer",received:"float",message:c.message
}
),l.dirty()):c.kind==="min"?(c.inclusive?r.data<c.value:r.data<=c.value)&&(o=this._getOrReturnCtx(r,o),le(o,{
code:W.too_small,minimum:c.value,type:"number",inclusive:c.inclusive,exact:!1,message:c.message
}
),l.dirty()):c.kind==="max"?(c.inclusive?r.data>c.value:r.data>=c.value)&&(o=this._getOrReturnCtx(r,o),le(o,{
code:W.too_big,maximum:c.value,type:"number",inclusive:c.inclusive,exact:!1,message:c.message
}
),l.dirty()):c.kind==="multipleOf"?_0(r.data,c.value)!==0&&(o=this._getOrReturnCtx(r,o),le(o,{
code:W.not_multiple_of,multipleOf:c.value,message:c.message
}
),l.dirty()):c.kind==="finite"?Number.isFinite(r.data)||(o=this._getOrReturnCtx(r,o),le(o,{
code:W.not_finite,message:c.message
}
),l.dirty()):ze.assertNever(c);
return{
status:l.value,value:r.data
}

}
gte(r,i){
return this.setLimit("min",r,!0,Ce.toString(i))
}
gt(r,i){
return this.setLimit("min",r,!1,Ce.toString(i))
}
lte(r,i){
return this.setLimit("max",r,!0,Ce.toString(i))
}
lt(r,i){
return this.setLimit("max",r,!1,Ce.toString(i))
}
setLimit(r,i,o,l){
return new Mr({
...this._def,checks:[...this._def.checks,{
kind:r,value:i,inclusive:o,message:Ce.toString(l)
}
]
}
)
}
_addCheck(r){
return new Mr({
...this._def,checks:[...this._def.checks,r]
}
)
}
int(r){
return this._addCheck({
kind:"int",message:Ce.toString(r)
}
)
}
positive(r){
return this._addCheck({
kind:"min",value:0,inclusive:!1,message:Ce.toString(r)
}
)
}
negative(r){
return this._addCheck({
kind:"max",value:0,inclusive:!1,message:Ce.toString(r)
}
)
}
nonpositive(r){
return this._addCheck({
kind:"max",value:0,inclusive:!0,message:Ce.toString(r)
}
)
}
nonnegative(r){
return this._addCheck({
kind:"min",value:0,inclusive:!0,message:Ce.toString(r)
}
)
}
multipleOf(r,i){
return this._addCheck({
kind:"multipleOf",value:r,message:Ce.toString(i)
}
)
}
finite(r){
return this._addCheck({
kind:"finite",message:Ce.toString(r)
}
)
}
safe(r){
return this._addCheck({
kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Ce.toString(r)
}
)._addCheck({
kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Ce.toString(r)
}
)
}
get minValue(){
let r=null;
for(const i of this._def.checks)i.kind==="min"&&(r===null||i.value>r)&&(r=i.value);
return r
}
get maxValue(){
let r=null;
for(const i of this._def.checks)i.kind==="max"&&(r===null||i.value<r)&&(r=i.value);
return r
}
get isInt(){
return!!this._def.checks.find(r=>r.kind==="int"||r.kind==="multipleOf"&&ze.isInteger(r.value))
}
get isFinite(){
let r=null,i=null;
for(const o of this._def.checks){
if(o.kind==="finite"||o.kind==="int"||o.kind==="multipleOf")return!0;
o.kind==="min"?(i===null||o.value>i)&&(i=o.value):o.kind==="max"&&(r===null||o.value<r)&&(r=o.value)
}
return Number.isFinite(i)&&Number.isFinite(r)
}

}
Mr.create=n=>new Mr({
checks:[],typeName:Oe.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...Me(n)
}
);
class Fr extends Ne{
constructor(){
super(...arguments),this.min=this.gte,this.max=this.lte
}
_parse(r){
if(this._def.coerce)try{
r.data=BigInt(r.data)
}
catch{
return this._getInvalidInput(r)
}
if(this._getType(r)!==pe.bigint)return this._getInvalidInput(r);
let o;
const l=new Tt;
for(const c of this._def.checks)c.kind==="min"?(c.inclusive?r.data<c.value:r.data<=c.value)&&(o=this._getOrReturnCtx(r,o),le(o,{
code:W.too_small,type:"bigint",minimum:c.value,inclusive:c.inclusive,message:c.message
}
),l.dirty()):c.kind==="max"?(c.inclusive?r.data>c.value:r.data>=c.value)&&(o=this._getOrReturnCtx(r,o),le(o,{
code:W.too_big,type:"bigint",maximum:c.value,inclusive:c.inclusive,message:c.message
}
),l.dirty()):c.kind==="multipleOf"?r.data%c.value!==BigInt(0)&&(o=this._getOrReturnCtx(r,o),le(o,{
code:W.not_multiple_of,multipleOf:c.value,message:c.message
}
),l.dirty()):ze.assertNever(c);
return{
status:l.value,value:r.data
}

}
_getInvalidInput(r){
const i=this._getOrReturnCtx(r);
return le(i,{
code:W.invalid_type,expected:pe.bigint,received:i.parsedType
}
),je
}
gte(r,i){
return this.setLimit("min",r,!0,Ce.toString(i))
}
gt(r,i){
return this.setLimit("min",r,!1,Ce.toString(i))
}
lte(r,i){
return this.setLimit("max",r,!0,Ce.toString(i))
}
lt(r,i){
return this.setLimit("max",r,!1,Ce.toString(i))
}
setLimit(r,i,o,l){
return new Fr({
...this._def,checks:[...this._def.checks,{
kind:r,value:i,inclusive:o,message:Ce.toString(l)
}
]
}
)
}
_addCheck(r){
return new Fr({
...this._def,checks:[...this._def.checks,r]
}
)
}
positive(r){
return this._addCheck({
kind:"min",value:BigInt(0),inclusive:!1,message:Ce.toString(r)
}
)
}
negative(r){
return this._addCheck({
kind:"max",value:BigInt(0),inclusive:!1,message:Ce.toString(r)
}
)
}
nonpositive(r){
return this._addCheck({
kind:"max",value:BigInt(0),inclusive:!0,message:Ce.toString(r)
}
)
}
nonnegative(r){
return this._addCheck({
kind:"min",value:BigInt(0),inclusive:!0,message:Ce.toString(r)
}
)
}
multipleOf(r,i){
return this._addCheck({
kind:"multipleOf",value:r,message:Ce.toString(i)
}
)
}
get minValue(){
let r=null;
for(const i of this._def.checks)i.kind==="min"&&(r===null||i.value>r)&&(r=i.value);
return r
}
get maxValue(){
let r=null;
for(const i of this._def.checks)i.kind==="max"&&(r===null||i.value<r)&&(r=i.value);
return r
}

}
Fr.create=n=>{
var r;
return new Fr({
checks:[],typeName:Oe.ZodBigInt,coerce:(r=n==null?void 0:n.coerce)!==null&&r!==void 0?r:!1,...Me(n)
}
)
}
;
class vo extends Ne{
_parse(r){
if(this._def.coerce&&(r.data=!!r.data),this._getType(r)!==pe.boolean){
const o=this._getOrReturnCtx(r);
return le(o,{
code:W.invalid_type,expected:pe.boolean,received:o.parsedType
}
),je
}
return Mt(r.data)
}

}
vo.create=n=>new vo({
typeName:Oe.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...Me(n)
}
);
class mi extends Ne{
_parse(r){
if(this._def.coerce&&(r.data=new Date(r.data)),this._getType(r)!==pe.date){
const c=this._getOrReturnCtx(r);
return le(c,{
code:W.invalid_type,expected:pe.date,received:c.parsedType
}
),je
}
if(isNaN(r.data.getTime())){
const c=this._getOrReturnCtx(r);
return le(c,{
code:W.invalid_date
}
),je
}
const o=new Tt;
let l;
for(const c of this._def.checks)c.kind==="min"?r.data.getTime()<c.value&&(l=this._getOrReturnCtx(r,l),le(l,{
code:W.too_small,message:c.message,inclusive:!0,exact:!1,minimum:c.value,type:"date"
}
),o.dirty()):c.kind==="max"?r.data.getTime()>c.value&&(l=this._getOrReturnCtx(r,l),le(l,{
code:W.too_big,message:c.message,inclusive:!0,exact:!1,maximum:c.value,type:"date"
}
),o.dirty()):ze.assertNever(c);
return{
status:o.value,value:new Date(r.data.getTime())
}

}
_addCheck(r){
return new mi({
...this._def,checks:[...this._def.checks,r]
}
)
}
min(r,i){
return this._addCheck({
kind:"min",value:r.getTime(),message:Ce.toString(i)
}
)
}
max(r,i){
return this._addCheck({
kind:"max",value:r.getTime(),message:Ce.toString(i)
}
)
}
get minDate(){
let r=null;
for(const i of this._def.checks)i.kind==="min"&&(r===null||i.value>r)&&(r=i.value);
return r!=null?new Date(r):null
}
get maxDate(){
let r=null;
for(const i of this._def.checks)i.kind==="max"&&(r===null||i.value<r)&&(r=i.value);
return r!=null?new Date(r):null
}

}
mi.create=n=>new mi({
checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:Oe.ZodDate,...Me(n)
}
);
class al extends Ne{
_parse(r){
if(this._getType(r)!==pe.symbol){
const o=this._getOrReturnCtx(r);
return le(o,{
code:W.invalid_type,expected:pe.symbol,received:o.parsedType
}
),je
}
return Mt(r.data)
}

}
al.create=n=>new al({
typeName:Oe.ZodSymbol,...Me(n)
}
);
class go extends Ne{
_parse(r){
if(this._getType(r)!==pe.undefined){
const o=this._getOrReturnCtx(r);
return le(o,{
code:W.invalid_type,expected:pe.undefined,received:o.parsedType
}
),je
}
return Mt(r.data)
}

}
go.create=n=>new go({
typeName:Oe.ZodUndefined,...Me(n)
}
);
class wo extends Ne{
_parse(r){
if(this._getType(r)!==pe.null){
const o=this._getOrReturnCtx(r);
return le(o,{
code:W.invalid_type,expected:pe.null,received:o.parsedType
}
),je
}
return Mt(r.data)
}

}
wo.create=n=>new wo({
typeName:Oe.ZodNull,...Me(n)
}
);
class ys extends Ne{
constructor(){
super(...arguments),this._any=!0
}
_parse(r){
return Mt(r.data)
}

}
ys.create=n=>new ys({
typeName:Oe.ZodAny,...Me(n)
}
);
class ci extends Ne{
constructor(){
super(...arguments),this._unknown=!0
}
_parse(r){
return Mt(r.data)
}

}
ci.create=n=>new ci({
typeName:Oe.ZodUnknown,...Me(n)
}
);
class er extends Ne{
_parse(r){
const i=this._getOrReturnCtx(r);
return le(i,{
code:W.invalid_type,expected:pe.never,received:i.parsedType
}
),je
}

}
er.create=n=>new er({
typeName:Oe.ZodNever,...Me(n)
}
);
class ll extends Ne{
_parse(r){
if(this._getType(r)!==pe.undefined){
const o=this._getOrReturnCtx(r);
return le(o,{
code:W.invalid_type,expected:pe.void,received:o.parsedType
}
),je
}
return Mt(r.data)
}

}
ll.create=n=>new ll({
typeName:Oe.ZodVoid,...Me(n)
}
);
class gn extends Ne{
_parse(r){
const{
ctx:i,status:o
}
=this._processInputParams(r),l=this._def;
if(i.parsedType!==pe.array)return le(i,{
code:W.invalid_type,expected:pe.array,received:i.parsedType
}
),je;
if(l.exactLength!==null){
const f=i.data.length>l.exactLength.value,h=i.data.length<l.exactLength.value;
(f||h)&&(le(i,{
code:f?W.too_big:W.too_small,minimum:h?l.exactLength.value:void 0,maximum:f?l.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:l.exactLength.message
}
),o.dirty())
}
if(l.minLength!==null&&i.data.length<l.minLength.value&&(le(i,{
code:W.too_small,minimum:l.minLength.value,type:"array",inclusive:!0,exact:!1,message:l.minLength.message
}
),o.dirty()),l.maxLength!==null&&i.data.length>l.maxLength.value&&(le(i,{
code:W.too_big,maximum:l.maxLength.value,type:"array",inclusive:!0,exact:!1,message:l.maxLength.message
}
),o.dirty()),i.common.async)return Promise.all([...i.data].map((f,h)=>l.type._parseAsync(new On(i,f,i.path,h)))).then(f=>Tt.mergeArray(o,f));
const c=[...i.data].map((f,h)=>l.type._parseSync(new On(i,f,i.path,h)));
return Tt.mergeArray(o,c)
}
get element(){
return this._def.type
}
min(r,i){
return new gn({
...this._def,minLength:{
value:r,message:Ce.toString(i)
}

}
)
}
max(r,i){
return new gn({
...this._def,maxLength:{
value:r,message:Ce.toString(i)
}

}
)
}
length(r,i){
return new gn({
...this._def,exactLength:{
value:r,message:Ce.toString(i)
}

}
)
}
nonempty(r){
return this.min(1,r)
}

}
gn.create=(n,r)=>new gn({
type:n,minLength:null,maxLength:null,exactLength:null,typeName:Oe.ZodArray,...Me(r)
}
);
function Qi(n){
if(n instanceof et){
const r={

}
;
for(const i in n.shape){
const o=n.shape[i];
r[i]=Ln.create(Qi(o))
}
return new et({
...n._def,shape:()=>r
}
)
}
else return n instanceof gn?new gn({
...n._def,type:Qi(n.element)
}
):n instanceof Ln?Ln.create(Qi(n.unwrap())):n instanceof Dr?Dr.create(Qi(n.unwrap())):n instanceof jn?jn.create(n.items.map(r=>Qi(r))):n
}
class et extends Ne{
constructor(){
super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend
}
_getCached(){
if(this._cached!==null)return this._cached;
const r=this._def.shape(),i=ze.objectKeys(r);
return this._cached={
shape:r,keys:i
}

}
_parse(r){
if(this._getType(r)!==pe.object){
const m=this._getOrReturnCtx(r);
return le(m,{
code:W.invalid_type,expected:pe.object,received:m.parsedType
}
),je
}
const{
status:o,ctx:l
}
=this._processInputParams(r),{
shape:c,keys:f
}
=this._getCached(),h=[];
if(!(this._def.catchall instanceof er&&this._def.unknownKeys==="strip"))for(const m in l.data)f.includes(m)||h.push(m);
const y=[];
for(const m of f){
const w=c[m],g=l.data[m];
y.push({
key:{
status:"valid",value:m
}
,value:w._parse(new On(l,g,l.path,m)),alwaysSet:m in l.data
}
)
}
if(this._def.catchall instanceof er){
const m=this._def.unknownKeys;
if(m==="passthrough")for(const w of h)y.push({
key:{
status:"valid",value:w
}
,value:{
status:"valid",value:l.data[w]
}

}
);
else if(m==="strict")h.length>0&&(le(l,{
code:W.unrecognized_keys,keys:h
}
),o.dirty());
else if(m!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")
}
else{
const m=this._def.catchall;
for(const w of h){
const g=l.data[w];
y.push({
key:{
status:"valid",value:w
}
,value:m._parse(new On(l,g,l.path,w)),alwaysSet:w in l.data
}
)
}

}
return l.common.async?Promise.resolve().then(async()=>{
const m=[];
for(const w of y){
const g=await w.key,x=await w.value;
m.push({
key:g,value:x,alwaysSet:w.alwaysSet
}
)
}
return m
}
).then(m=>Tt.mergeObjectSync(o,m)):Tt.mergeObjectSync(o,y)
}
get shape(){
return this._def.shape()
}
strict(r){
return Ce.errToObj,new et({
...this._def,unknownKeys:"strict",...r!==void 0?{
errorMap:(i,o)=>{
var l,c,f,h;
const y=(f=(c=(l=this._def).errorMap)===null||c===void 0?void 0:c.call(l,i,o).message)!==null&&f!==void 0?f:o.defaultError;
return i.code==="unrecognized_keys"?{
message:(h=Ce.errToObj(r).message)!==null&&h!==void 0?h:y
}
:{
message:y
}

}

}
:{

}

}
)
}
strip(){
return new et({
...this._def,unknownKeys:"strip"
}
)
}
passthrough(){
return new et({
...this._def,unknownKeys:"passthrough"
}
)
}
extend(r){
return new et({
...this._def,shape:()=>({
...this._def.shape(),...r
}
)
}
)
}
merge(r){
return new et({
unknownKeys:r._def.unknownKeys,catchall:r._def.catchall,shape:()=>({
...this._def.shape(),...r._def.shape()
}
),typeName:Oe.ZodObject
}
)
}
setKey(r,i){
return this.augment({
[r]:i
}
)
}
catchall(r){
return new et({
...this._def,catchall:r
}
)
}
pick(r){
const i={

}
;
return ze.objectKeys(r).forEach(o=>{
r[o]&&this.shape[o]&&(i[o]=this.shape[o])
}
),new et({
...this._def,shape:()=>i
}
)
}
omit(r){
const i={

}
;
return ze.objectKeys(this.shape).forEach(o=>{
r[o]||(i[o]=this.shape[o])
}
),new et({
...this._def,shape:()=>i
}
)
}
deepPartial(){
return Qi(this)
}
partial(r){
const i={

}
;
return ze.objectKeys(this.shape).forEach(o=>{
const l=this.shape[o];
r&&!r[o]?i[o]=l:i[o]=l.optional()
}
),new et({
...this._def,shape:()=>i
}
)
}
required(r){
const i={

}
;
return ze.objectKeys(this.shape).forEach(o=>{
if(r&&!r[o])i[o]=this.shape[o];
else{
let c=this.shape[o];
for(;
c instanceof Ln;
)c=c._def.innerType;
i[o]=c
}

}
),new et({
...this._def,shape:()=>i
}
)
}
keyof(){
return Sm(ze.objectKeys(this.shape))
}

}
et.create=(n,r)=>new et({
shape:()=>n,unknownKeys:"strip",catchall:er.create(),typeName:Oe.ZodObject,...Me(r)
}
);
et.strictCreate=(n,r)=>new et({
shape:()=>n,unknownKeys:"strict",catchall:er.create(),typeName:Oe.ZodObject,...Me(r)
}
);
et.lazycreate=(n,r)=>new et({
shape:n,unknownKeys:"strip",catchall:er.create(),typeName:Oe.ZodObject,...Me(r)
}
);
class _o extends Ne{
_parse(r){
const{
ctx:i
}
=this._processInputParams(r),o=this._def.options;
function l(c){
for(const h of c)if(h.result.status==="valid")return h.result;
for(const h of c)if(h.result.status==="dirty")return i.common.issues.push(...h.ctx.common.issues),h.result;
const f=c.map(h=>new Kt(h.ctx.common.issues));
return le(i,{
code:W.invalid_union,unionErrors:f
}
),je
}
if(i.common.async)return Promise.all(o.map(async c=>{
const f={
...i,common:{
...i.common,issues:[]
}
,parent:null
}
;
return{
result:await c._parseAsync({
data:i.data,path:i.path,parent:f
}
),ctx:f
}

}
)).then(l);
{
let c;
const f=[];
for(const y of o){
const m={
...i,common:{
...i.common,issues:[]
}
,parent:null
}
,w=y._parseSync({
data:i.data,path:i.path,parent:m
}
);
if(w.status==="valid")return w;
w.status==="dirty"&&!c&&(c={
result:w,ctx:m
}
),m.common.issues.length&&f.push(m.common.issues)
}
if(c)return i.common.issues.push(...c.ctx.common.issues),c.result;
const h=f.map(y=>new Kt(y));
return le(i,{
code:W.invalid_union,unionErrors:h
}
),je
}

}
get options(){
return this._def.options
}

}
_o.create=(n,r)=>new _o({
options:n,typeName:Oe.ZodUnion,...Me(r)
}
);
const Hn=n=>n instanceof Co?Hn(n.schema):n instanceof wn?Hn(n.innerType()):n instanceof xo?[n.value]:n instanceof Nr?n.options:n instanceof Po?ze.objectValues(n.enum):n instanceof Ro?Hn(n._def.innerType):n instanceof go?[void 0]:n instanceof wo?[null]:n instanceof Ln?[void 0,...Hn(n.unwrap())]:n instanceof Dr?[null,...Hn(n.unwrap())]:n instanceof dd||n instanceof To?Hn(n.unwrap()):n instanceof Eo?Hn(n._def.innerType):[];
class wl extends Ne{
_parse(r){
const{
ctx:i
}
=this._processInputParams(r);
if(i.parsedType!==pe.object)return le(i,{
code:W.invalid_type,expected:pe.object,received:i.parsedType
}
),je;
const o=this.discriminator,l=i.data[o],c=this.optionsMap.get(l);
return c?i.common.async?c._parseAsync({
data:i.data,path:i.path,parent:i
}
):c._parseSync({
data:i.data,path:i.path,parent:i
}
):(le(i,{
code:W.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[o]
}
),je)
}
get discriminator(){
return this._def.discriminator
}
get options(){
return this._def.options
}
get optionsMap(){
return this._def.optionsMap
}
static create(r,i,o){
const l=new Map;
for(const c of i){
const f=Hn(c.shape[r]);
if(!f.length)throw new Error(`A discriminator value for key \`${
r
}
\` could not be extracted from all schema options`);
for(const h of f){
if(l.has(h))throw new Error(`Discriminator property ${
String(r)
}
 has duplicate value ${
String(h)
}
`);
l.set(h,c)
}

}
return new wl({
typeName:Oe.ZodDiscriminatedUnion,discriminator:r,options:i,optionsMap:l,...Me(o)
}
)
}

}
function Xc(n,r){
const i=Wn(n),o=Wn(r);
if(n===r)return{
valid:!0,data:n
}
;
if(i===pe.object&&o===pe.object){
const l=ze.objectKeys(r),c=ze.objectKeys(n).filter(h=>l.indexOf(h)!==-1),f={
...n,...r
}
;
for(const h of c){
const y=Xc(n[h],r[h]);
if(!y.valid)return{
valid:!1
}
;
f[h]=y.data
}
return{
valid:!0,data:f
}

}
else if(i===pe.array&&o===pe.array){
if(n.length!==r.length)return{
valid:!1
}
;
const l=[];
for(let c=0;
c<n.length;
c++){
const f=n[c],h=r[c],y=Xc(f,h);
if(!y.valid)return{
valid:!1
}
;
l.push(y.data)
}
return{
valid:!0,data:l
}

}
else return i===pe.date&&o===pe.date&&+n==+r?{
valid:!0,data:n
}
:{
valid:!1
}

}
class ko extends Ne{
_parse(r){
const{
status:i,ctx:o
}
=this._processInputParams(r),l=(c,f)=>{
if(Jc(c)||Jc(f))return je;
const h=Xc(c.value,f.value);
return h.valid?((Yc(c)||Yc(f))&&i.dirty(),{
status:i.value,value:h.data
}
):(le(o,{
code:W.invalid_intersection_types
}
),je)
}
;
return o.common.async?Promise.all([this._def.left._parseAsync({
data:o.data,path:o.path,parent:o
}
),this._def.right._parseAsync({
data:o.data,path:o.path,parent:o
}
)]).then(([c,f])=>l(c,f)):l(this._def.left._parseSync({
data:o.data,path:o.path,parent:o
}
),this._def.right._parseSync({
data:o.data,path:o.path,parent:o
}
))
}

}
ko.create=(n,r,i)=>new ko({
left:n,right:r,typeName:Oe.ZodIntersection,...Me(i)
}
);
class jn extends Ne{
_parse(r){
const{
status:i,ctx:o
}
=this._processInputParams(r);
if(o.parsedType!==pe.array)return le(o,{
code:W.invalid_type,expected:pe.array,received:o.parsedType
}
),je;
if(o.data.length<this._def.items.length)return le(o,{
code:W.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"
}
),je;
!this._def.rest&&o.data.length>this._def.items.length&&(le(o,{
code:W.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"
}
),i.dirty());
const c=[...o.data].map((f,h)=>{
const y=this._def.items[h]||this._def.rest;
return y?y._parse(new On(o,f,o.path,h)):null
}
).filter(f=>!!f);
return o.common.async?Promise.all(c).then(f=>Tt.mergeArray(i,f)):Tt.mergeArray(i,c)
}
get items(){
return this._def.items
}
rest(r){
return new jn({
...this._def,rest:r
}
)
}

}
jn.create=(n,r)=>{
if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
return new jn({
items:n,typeName:Oe.ZodTuple,rest:null,...Me(r)
}
)
}
;
class So extends Ne{
get keySchema(){
return this._def.keyType
}
get valueSchema(){
return this._def.valueType
}
_parse(r){
const{
status:i,ctx:o
}
=this._processInputParams(r);
if(o.parsedType!==pe.object)return le(o,{
code:W.invalid_type,expected:pe.object,received:o.parsedType
}
),je;
const l=[],c=this._def.keyType,f=this._def.valueType;
for(const h in o.data)l.push({
key:c._parse(new On(o,h,o.path,h)),value:f._parse(new On(o,o.data[h],o.path,h)),alwaysSet:h in o.data
}
);
return o.common.async?Tt.mergeObjectAsync(i,l):Tt.mergeObjectSync(i,l)
}
get element(){
return this._def.valueType
}
static create(r,i,o){
return i instanceof Ne?new So({
keyType:r,valueType:i,typeName:Oe.ZodRecord,...Me(o)
}
):new So({
keyType:vn.create(),valueType:r,typeName:Oe.ZodRecord,...Me(i)
}
)
}

}
class ul extends Ne{
get keySchema(){
return this._def.keyType
}
get valueSchema(){
return this._def.valueType
}
_parse(r){
const{
status:i,ctx:o
}
=this._processInputParams(r);
if(o.parsedType!==pe.map)return le(o,{
code:W.invalid_type,expected:pe.map,received:o.parsedType
}
),je;
const l=this._def.keyType,c=this._def.valueType,f=[...o.data.entries()].map(([h,y],m)=>({
key:l._parse(new On(o,h,o.path,[m,"key"])),value:c._parse(new On(o,y,o.path,[m,"value"]))
}
));
if(o.common.async){
const h=new Map;
return Promise.resolve().then(async()=>{
for(const y of f){
const m=await y.key,w=await y.value;
if(m.status==="aborted"||w.status==="aborted")return je;
(m.status==="dirty"||w.status==="dirty")&&i.dirty(),h.set(m.value,w.value)
}
return{
status:i.value,value:h
}

}
)
}
else{
const h=new Map;
for(const y of f){
const m=y.key,w=y.value;
if(m.status==="aborted"||w.status==="aborted")return je;
(m.status==="dirty"||w.status==="dirty")&&i.dirty(),h.set(m.value,w.value)
}
return{
status:i.value,value:h
}

}

}

}
ul.create=(n,r,i)=>new ul({
valueType:r,keyType:n,typeName:Oe.ZodMap,...Me(i)
}
);
class yi extends Ne{
_parse(r){
const{
status:i,ctx:o
}
=this._processInputParams(r);
if(o.parsedType!==pe.set)return le(o,{
code:W.invalid_type,expected:pe.set,received:o.parsedType
}
),je;
const l=this._def;
l.minSize!==null&&o.data.size<l.minSize.value&&(le(o,{
code:W.too_small,minimum:l.minSize.value,type:"set",inclusive:!0,exact:!1,message:l.minSize.message
}
),i.dirty()),l.maxSize!==null&&o.data.size>l.maxSize.value&&(le(o,{
code:W.too_big,maximum:l.maxSize.value,type:"set",inclusive:!0,exact:!1,message:l.maxSize.message
}
),i.dirty());
const c=this._def.valueType;
function f(y){
const m=new Set;
for(const w of y){
if(w.status==="aborted")return je;
w.status==="dirty"&&i.dirty(),m.add(w.value)
}
return{
status:i.value,value:m
}

}
const h=[...o.data.values()].map((y,m)=>c._parse(new On(o,y,o.path,m)));
return o.common.async?Promise.all(h).then(y=>f(y)):f(h)
}
min(r,i){
return new yi({
...this._def,minSize:{
value:r,message:Ce.toString(i)
}

}
)
}
max(r,i){
return new yi({
...this._def,maxSize:{
value:r,message:Ce.toString(i)
}

}
)
}
size(r,i){
return this.min(r,i).max(r,i)
}
nonempty(r){
return this.min(1,r)
}

}
yi.create=(n,r)=>new yi({
valueType:n,minSize:null,maxSize:null,typeName:Oe.ZodSet,...Me(r)
}
);
class Ji extends Ne{
constructor(){
super(...arguments),this.validate=this.implement
}
_parse(r){
const{
ctx:i
}
=this._processInputParams(r);
if(i.parsedType!==pe.function)return le(i,{
code:W.invalid_type,expected:pe.function,received:i.parsedType
}
),je;
function o(h,y){
return sl({
data:h,path:i.path,errorMaps:[i.common.contextualErrorMap,i.schemaErrorMap,il(),ms].filter(m=>!!m),issueData:{
code:W.invalid_arguments,argumentsError:y
}

}
)
}
function l(h,y){
return sl({
data:h,path:i.path,errorMaps:[i.common.contextualErrorMap,i.schemaErrorMap,il(),ms].filter(m=>!!m),issueData:{
code:W.invalid_return_type,returnTypeError:y
}

}
)
}
const c={
errorMap:i.common.contextualErrorMap
}
,f=i.data;
if(this._def.returns instanceof vs){
const h=this;
return Mt(async function(...y){
const m=new Kt([]),w=await h._def.args.parseAsync(y,c).catch(L=>{
throw m.addIssue(o(y,L)),m
}
),g=await Reflect.apply(f,this,w);
return await h._def.returns._def.type.parseAsync(g,c).catch(L=>{
throw m.addIssue(l(g,L)),m
}
)
}
)
}
else{
const h=this;
return Mt(function(...y){
const m=h._def.args.safeParse(y,c);
if(!m.success)throw new Kt([o(y,m.error)]);
const w=Reflect.apply(f,this,m.data),g=h._def.returns.safeParse(w,c);
if(!g.success)throw new Kt([l(w,g.error)]);
return g.data
}
)
}

}
parameters(){
return this._def.args
}
returnType(){
return this._def.returns
}
args(...r){
return new Ji({
...this._def,args:jn.create(r).rest(ci.create())
}
)
}
returns(r){
return new Ji({
...this._def,returns:r
}
)
}
implement(r){
return this.parse(r)
}
strictImplement(r){
return this.parse(r)
}
static create(r,i,o){
return new Ji({
args:r||jn.create([]).rest(ci.create()),returns:i||ci.create(),typeName:Oe.ZodFunction,...Me(o)
}
)
}

}
class Co extends Ne{
get schema(){
return this._def.getter()
}
_parse(r){
const{
ctx:i
}
=this._processInputParams(r);
return this._def.getter()._parse({
data:i.data,path:i.path,parent:i
}
)
}

}
Co.create=(n,r)=>new Co({
getter:n,typeName:Oe.ZodLazy,...Me(r)
}
);
class xo extends Ne{
_parse(r){
if(r.data!==this._def.value){
const i=this._getOrReturnCtx(r);
return le(i,{
received:i.data,code:W.invalid_literal,expected:this._def.value
}
),je
}
return{
status:"valid",value:r.data
}

}
get value(){
return this._def.value
}

}
xo.create=(n,r)=>new xo({
value:n,typeName:Oe.ZodLiteral,...Me(r)
}
);
function Sm(n,r){
return new Nr({
values:n,typeName:Oe.ZodEnum,...Me(r)
}
)
}
class Nr extends Ne{
constructor(){
super(...arguments),uo.set(this,void 0)
}
_parse(r){
if(typeof r.data!="string"){
const i=this._getOrReturnCtx(r),o=this._def.values;
return le(i,{
expected:ze.joinValues(o),received:i.parsedType,code:W.invalid_type
}
),je
}
if(ol(this,uo)||gm(this,uo,new Set(this._def.values)),!ol(this,uo).has(r.data)){
const i=this._getOrReturnCtx(r),o=this._def.values;
return le(i,{
received:i.data,code:W.invalid_enum_value,options:o
}
),je
}
return Mt(r.data)
}
get options(){
return this._def.values
}
get enum(){
const r={

}
;
for(const i of this._def.values)r[i]=i;
return r
}
get Values(){
const r={

}
;
for(const i of this._def.values)r[i]=i;
return r
}
get Enum(){
const r={

}
;
for(const i of this._def.values)r[i]=i;
return r
}
extract(r,i=this._def){
return Nr.create(r,{
...this._def,...i
}
)
}
exclude(r,i=this._def){
return Nr.create(this.options.filter(o=>!r.includes(o)),{
...this._def,...i
}
)
}

}
uo=new WeakMap;
Nr.create=Sm;
class Po extends Ne{
constructor(){
super(...arguments),co.set(this,void 0)
}
_parse(r){
const i=ze.getValidEnumValues(this._def.values),o=this._getOrReturnCtx(r);
if(o.parsedType!==pe.string&&o.parsedType!==pe.number){
const l=ze.objectValues(i);
return le(o,{
expected:ze.joinValues(l),received:o.parsedType,code:W.invalid_type
}
),je
}
if(ol(this,co)||gm(this,co,new Set(ze.getValidEnumValues(this._def.values))),!ol(this,co).has(r.data)){
const l=ze.objectValues(i);
return le(o,{
received:o.data,code:W.invalid_enum_value,options:l
}
),je
}
return Mt(r.data)
}
get enum(){
return this._def.values
}

}
co=new WeakMap;
Po.create=(n,r)=>new Po({
values:n,typeName:Oe.ZodNativeEnum,...Me(r)
}
);
class vs extends Ne{
unwrap(){
return this._def.type
}
_parse(r){
const{
ctx:i
}
=this._processInputParams(r);
if(i.parsedType!==pe.promise&&i.common.async===!1)return le(i,{
code:W.invalid_type,expected:pe.promise,received:i.parsedType
}
),je;
const o=i.parsedType===pe.promise?i.data:Promise.resolve(i.data);
return Mt(o.then(l=>this._def.type.parseAsync(l,{
path:i.path,errorMap:i.common.contextualErrorMap
}
)))
}

}
vs.create=(n,r)=>new vs({
type:n,typeName:Oe.ZodPromise,...Me(r)
}
);
class wn extends Ne{
innerType(){
return this._def.schema
}
sourceType(){
return this._def.schema._def.typeName===Oe.ZodEffects?this._def.schema.sourceType():this._def.schema
}
_parse(r){
const{
status:i,ctx:o
}
=this._processInputParams(r),l=this._def.effect||null,c={
addIssue:f=>{
le(o,f),f.fatal?i.abort():i.dirty()
}
,get path(){
return o.path
}

}
;
if(c.addIssue=c.addIssue.bind(c),l.type==="preprocess"){
const f=l.transform(o.data,c);
if(o.common.async)return Promise.resolve(f).then(async h=>{
if(i.value==="aborted")return je;
const y=await this._def.schema._parseAsync({
data:h,path:o.path,parent:o
}
);
return y.status==="aborted"?je:y.status==="dirty"||i.value==="dirty"?Hi(y.value):y
}
);
{
if(i.value==="aborted")return je;
const h=this._def.schema._parseSync({
data:f,path:o.path,parent:o
}
);
return h.status==="aborted"?je:h.status==="dirty"||i.value==="dirty"?Hi(h.value):h
}

}
if(l.type==="refinement"){
const f=h=>{
const y=l.refinement(h,c);
if(o.common.async)return Promise.resolve(y);
if(y instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
return h
}
;
if(o.common.async===!1){
const h=this._def.schema._parseSync({
data:o.data,path:o.path,parent:o
}
);
return h.status==="aborted"?je:(h.status==="dirty"&&i.dirty(),f(h.value),{
status:i.value,value:h.value
}
)
}
else return this._def.schema._parseAsync({
data:o.data,path:o.path,parent:o
}
).then(h=>h.status==="aborted"?je:(h.status==="dirty"&&i.dirty(),f(h.value).then(()=>({
status:i.value,value:h.value
}
))))
}
if(l.type==="transform")if(o.common.async===!1){
const f=this._def.schema._parseSync({
data:o.data,path:o.path,parent:o
}
);
if(!pi(f))return f;
const h=l.transform(f.value,c);
if(h instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
return{
status:i.value,value:h
}

}
else return this._def.schema._parseAsync({
data:o.data,path:o.path,parent:o
}
).then(f=>pi(f)?Promise.resolve(l.transform(f.value,c)).then(h=>({
status:i.value,value:h
}
)):f);
ze.assertNever(l)
}

}
wn.create=(n,r,i)=>new wn({
schema:n,typeName:Oe.ZodEffects,effect:r,...Me(i)
}
);
wn.createWithPreprocess=(n,r,i)=>new wn({
schema:r,effect:{
type:"preprocess",transform:n
}
,typeName:Oe.ZodEffects,...Me(i)
}
);
class Ln extends Ne{
_parse(r){
return this._getType(r)===pe.undefined?Mt(void 0):this._def.innerType._parse(r)
}
unwrap(){
return this._def.innerType
}

}
Ln.create=(n,r)=>new Ln({
innerType:n,typeName:Oe.ZodOptional,...Me(r)
}
);
class Dr extends Ne{
_parse(r){
return this._getType(r)===pe.null?Mt(null):this._def.innerType._parse(r)
}
unwrap(){
return this._def.innerType
}

}
Dr.create=(n,r)=>new Dr({
innerType:n,typeName:Oe.ZodNullable,...Me(r)
}
);
class Ro extends Ne{
_parse(r){
const{
ctx:i
}
=this._processInputParams(r);
let o=i.data;
return i.parsedType===pe.undefined&&(o=this._def.defaultValue()),this._def.innerType._parse({
data:o,path:i.path,parent:i
}
)
}
removeDefault(){
return this._def.innerType
}

}
Ro.create=(n,r)=>new Ro({
innerType:n,typeName:Oe.ZodDefault,defaultValue:typeof r.default=="function"?r.default:()=>r.default,...Me(r)
}
);
class Eo extends Ne{
_parse(r){
const{
ctx:i
}
=this._processInputParams(r),o={
...i,common:{
...i.common,issues:[]
}

}
,l=this._def.innerType._parse({
data:o.data,path:o.path,parent:{
...o
}

}
);
return yo(l)?l.then(c=>({
status:"valid",value:c.status==="valid"?c.value:this._def.catchValue({
get error(){
return new Kt(o.common.issues)
}
,input:o.data
}
)
}
)):{
status:"valid",value:l.status==="valid"?l.value:this._def.catchValue({
get error(){
return new Kt(o.common.issues)
}
,input:o.data
}
)
}

}
removeCatch(){
return this._def.innerType
}

}
Eo.create=(n,r)=>new Eo({
innerType:n,typeName:Oe.ZodCatch,catchValue:typeof r.catch=="function"?r.catch:()=>r.catch,...Me(r)
}
);
class cl extends Ne{
_parse(r){
if(this._getType(r)!==pe.nan){
const o=this._getOrReturnCtx(r);
return le(o,{
code:W.invalid_type,expected:pe.nan,received:o.parsedType
}
),je
}
return{
status:"valid",value:r.data
}

}

}
cl.create=n=>new cl({
typeName:Oe.ZodNaN,...Me(n)
}
);
const k0=Symbol("zod_brand");
class dd extends Ne{
_parse(r){
const{
ctx:i
}
=this._processInputParams(r),o=i.data;
return this._def.type._parse({
data:o,path:i.path,parent:i
}
)
}
unwrap(){
return this._def.type
}

}
class Fo extends Ne{
_parse(r){
const{
status:i,ctx:o
}
=this._processInputParams(r);
if(o.common.async)return(async()=>{
const c=await this._def.in._parseAsync({
data:o.data,path:o.path,parent:o
}
);
return c.status==="aborted"?je:c.status==="dirty"?(i.dirty(),Hi(c.value)):this._def.out._parseAsync({
data:c.value,path:o.path,parent:o
}
)
}
)();
{
const l=this._def.in._parseSync({
data:o.data,path:o.path,parent:o
}
);
return l.status==="aborted"?je:l.status==="dirty"?(i.dirty(),{
status:"dirty",value:l.value
}
):this._def.out._parseSync({
data:l.value,path:o.path,parent:o
}
)
}

}
static create(r,i){
return new Fo({
in:r,out:i,typeName:Oe.ZodPipeline
}
)
}

}
class To extends Ne{
_parse(r){
const i=this._def.innerType._parse(r),o=l=>(pi(l)&&(l.value=Object.freeze(l.value)),l);
return yo(i)?i.then(l=>o(l)):o(i)
}
unwrap(){
return this._def.innerType
}

}
To.create=(n,r)=>new To({
innerType:n,typeName:Oe.ZodReadonly,...Me(r)
}
);
function Tp(n,r){
const i=typeof n=="function"?n(r):typeof n=="string"?{
message:n
}
:n;
return typeof i=="string"?{
message:i
}
:i
}
function Cm(n,r={

}
,i){
return n?ys.create().superRefine((o,l)=>{
var c,f;
const h=n(o);
if(h instanceof Promise)return h.then(y=>{
var m,w;
if(!y){
const g=Tp(r,o),x=(w=(m=g.fatal)!==null&&m!==void 0?m:i)!==null&&w!==void 0?w:!0;
l.addIssue({
code:"custom",...g,fatal:x
}
)
}

}
);
if(!h){
const y=Tp(r,o),m=(f=(c=y.fatal)!==null&&c!==void 0?c:i)!==null&&f!==void 0?f:!0;
l.addIssue({
code:"custom",...y,fatal:m
}
)
}

}
):ys.create()
}
const S0={
object:et.lazycreate
}
;
var Oe;
(function(n){
n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"
}
)(Oe||(Oe={

}
));
const C0=(n,r={
message:`Input not instance of ${
n.name
}
`
}
)=>Cm(i=>i instanceof n,r),xm=vn.create,Pm=Mr.create,x0=cl.create,P0=Fr.create,Rm=vo.create,R0=mi.create,E0=al.create,T0=go.create,I0=wo.create,L0=ys.create,O0=ci.create,j0=er.create,b0=ll.create,M0=gn.create,F0=et.create,N0=et.strictCreate,D0=_o.create,A0=wl.create,B0=ko.create,U0=jn.create,z0=So.create,$0=ul.create,V0=yi.create,q0=Ji.create,Q0=Co.create,Z0=xo.create,H0=Nr.create,W0=Po.create,K0=vs.create,Ip=wn.create,G0=Ln.create,J0=Dr.create,Y0=wn.createWithPreprocess,X0=Fo.create,ew=()=>xm().optional(),tw=()=>Pm().optional(),nw=()=>Rm().optional(),rw={
string:n=>vn.create({
...n,coerce:!0
}
),number:n=>Mr.create({
...n,coerce:!0
}
),boolean:n=>vo.create({
...n,coerce:!0
}
),bigint:n=>Fr.create({
...n,coerce:!0
}
),date:n=>mi.create({
...n,coerce:!0
}
)
}
,iw=je;
var v=Object.freeze({
__proto__:null,defaultErrorMap:ms,setErrorMap:Yg,getErrorMap:il,makeIssue:sl,EMPTY_PATH:Xg,addIssueToContext:le,ParseStatus:Tt,INVALID:je,DIRTY:Hi,OK:Mt,isAborted:Jc,isDirty:Yc,isValid:pi,isAsync:yo,get util(){
return ze
}
,get objectUtil(){
return Gc
}
,ZodParsedType:pe,getParsedType:Wn,ZodType:Ne,datetimeRegex:km,ZodString:vn,ZodNumber:Mr,ZodBigInt:Fr,ZodBoolean:vo,ZodDate:mi,ZodSymbol:al,ZodUndefined:go,ZodNull:wo,ZodAny:ys,ZodUnknown:ci,ZodNever:er,ZodVoid:ll,ZodArray:gn,ZodObject:et,ZodUnion:_o,ZodDiscriminatedUnion:wl,ZodIntersection:ko,ZodTuple:jn,ZodRecord:So,ZodMap:ul,ZodSet:yi,ZodFunction:Ji,ZodLazy:Co,ZodLiteral:xo,ZodEnum:Nr,ZodNativeEnum:Po,ZodPromise:vs,ZodEffects:wn,ZodTransformer:wn,ZodOptional:Ln,ZodNullable:Dr,ZodDefault:Ro,ZodCatch:Eo,ZodNaN:cl,BRAND:k0,ZodBranded:dd,ZodPipeline:Fo,ZodReadonly:To,custom:Cm,Schema:Ne,ZodSchema:Ne,late:S0,get ZodFirstPartyTypeKind(){
return Oe
}
,coerce:rw,any:L0,array:M0,bigint:P0,boolean:Rm,date:R0,discriminatedUnion:A0,effect:Ip,enum:H0,function:q0,instanceof:C0,intersection:B0,lazy:Q0,literal:Z0,map:$0,nan:x0,nativeEnum:W0,never:j0,null:I0,nullable:J0,number:Pm,object:F0,oboolean:nw,onumber:tw,optional:G0,ostring:ew,pipeline:X0,preprocess:Y0,promise:K0,record:z0,set:V0,strictObject:N0,string:xm,symbol:E0,transformer:Ip,tuple:U0,undefined:T0,union:D0,unknown:O0,void:b0,NEVER:iw,ZodIssueCode:W,quotelessJson:Jg,ZodError:Kt
}
);
class Em extends Error{
constructor(r,i){
super(i),this.status=r
}

}
class sw extends Em{
constructor(r){
super(r.status,P_(r)),this.details=r
}

}
const ow=n=>{
td=n
}
,ue=(n,r)=>fetch(`https://api.coff.in${
n
}
`,{
credentials:"include",...r
}
),dl={
Default:0,WindowsXP:1
}
,_l={
Circle:0,Square:1
}
,_s={
Satoshi:0,FiraCode:1,Poppins:2,Array:3,Drippy:4,Minecraft:5,Outfit:6,Chillax:7,Velocity:8,Technor:9,JetbrainsMono:10,Silkscreen:11,Parkinsans:12
}
,aw={
Banned:0,Unbanned:1,Extended:2,Reduced:3
}
,hS={
0:"Banned",1:"Unbanned",2:"Extended",3:"Reduced"
}
,fd=v.object({
theme:v.nativeEnum(dl)
}
),lw=v.object({
id:v.number(),username:v.string(),email:v.string(),balance:v.number(),settings:fd,claims:v.string().array(),roles:v.string().array()
}
),uw=v.object({
id:v.number(),username:v.string(),email:v.string(),balance:v.number(),settings:fd,claims:v.string().array(),roles:v.string().array()
}
),cw=v.object({
page:v.number().transform(n=>n.toString()),pageSize:v.number().transform(n=>n.toString()),search:v.string().nullish().transform(n=>n??void 0)
}
),dw=v.object({
id:v.number(),username:v.string(),email:v.string(),balance:v.number()
}
),fw=v.object({
totalCount:v.number(),items:dw.array()
}
),hw=v.object({
totalCount:v.number()
}
),pw=v.object({
email:v.string(),username:v.string()
}
),mw=v.object({
theme:v.nativeEnum(dl)
}
),yw=v.object({
userId:v.number(),email:v.string(),username:v.string(),balance:v.number().nullish().transform(n=>n??void 0)
}
),vw=v.object({
userId:v.string(),roles:v.array(v.string())
}
);
v.object({
requiresInvitationToRegister:v.boolean()
}
);
const gw=v.object({
id:v.number(),url:v.string().nullish().transform(n=>n??void 0),iconFilePath:v.string().nullish().transform(n=>n??void 0),iconColor:v.string(),isGlowEnabled:v.boolean(),iconZoom:v.number()
}
),Tm=v.object({
profileFrameFilePath:v.string().nullish().transform(n=>n??void 0),profilePictureFilePath:v.string().nullish().transform(n=>n??void 0),profilePictureZoom:v.number(),profilePictureStyle:v.nativeEnum(_l),bioText:v.string().nullish().transform(n=>n??void 0),isBioTextGlowEnabled:v.boolean(),bioLinks:gw.array(),cardBorderRadius:v.number(),cardBackgroundImageBlur:v.number(),cardBackgroundImageOpacity:v.number(),cardBackgroundImageZoom:v.number(),cardTiltEffectEnabled:v.boolean(),cardBackgroundImageFilePath:v.string().nullish().transform(n=>n??void 0),textFont:v.nativeEnum(_s),textColor:v.string()
}
),ww=Tm.extend({
username:v.string()
}
),_w=v.object({
backgroundImageFilePath:v.string().nullish().transform(n=>n??void 0),cursorFilePath:v.string().nullish().transform(n=>n??void 0),cursorTrailId:v.number().nullish().transform(n=>n??void 0),cursorTrailJsonConfig:v.string().nullish().transform(n=>n??void 0),particlesId:v.number().nullish().transform(n=>n??void 0),particlesJsonConfig:v.string().nullish().transform(n=>n??void 0),particlesColor:v.string().nullish().transform(n=>n??void 0),songFilePath:v.string().nullish().transform(n=>n??void 0),songVolume:v.number(),welcomeText:v.string().nullish().transform(n=>n??void 0),welcomeTextFont:v.nativeEnum(_s)
}
),kw=Tm.extend({
linkedProfile:ww.nullish().transform(n=>n??void 0),sharedProfileData:_w
}
),Sw=v.object({
userId:v.number(),reason:v.string(),banUntil:v.instanceof(ps).transform(n=>n.toISOString()).nullish().transform(n=>n??void 0)
}
),Sc=v.object({
id:v.number(),userId:v.number(),action:v.nativeEnum(aw),reason:v.string(),bannedAt:v.string().transform(n=>ps(n)),bannedUntil:v.string().transform(n=>ps(n)).nullish().transform(n=>n??void 0),createdByUserId:v.number().nullish().transform(n=>n??void 0),createdByUsername:v.string().nullish().transform(n=>n??void 0)
}
),Cw=v.object({
userId:v.number(),reason:v.string()
}
),xw=v.object({
username:v.string(),valueSpent:v.number()
}
),Pw=v.object({
entries:xw.array()
}
),Rw=v.object({
username:v.string(),valueSpent:v.number()
}
),Ew=v.object({
entries:Rw.array()
}
),Tw=v.object({
username:v.string(),email:v.string()
}
),Iw=v.object({
id:v.number(),code:v.string()
}
),Lw=v.object({
count:v.number()
}
),ed=v.object({
id:v.number(),code:v.string(),email:v.string().nullish().transform(n=>n??void 0),username:v.string().nullish().transform(n=>n??void 0),isRedeemed:v.boolean(),redeemedBy:v.string().nullish().transform(n=>n??void 0),createdBy:v.string(),createdAt:v.string().transform(n=>ps(n))
}
),Ow=v.object({
page:v.number().transform(n=>n.toString()),pageSize:v.number().transform(n=>n.toString()),excludeRedeemed:v.boolean().transform(n=>n.toString()).nullish().transform(n=>n??void 0)
}
),jw=v.object({
totalCount:v.number(),items:ed.array()
}
),bw=v.object({
totalCount:v.number(),redeemedCount:v.number()
}
),qt=v.object({
id:v.string().uuid(),name:v.string().nullish().transform(n=>n??void 0),filePath:v.string()
}
),Im=v.object({
id:v.number(),url:v.string().nullish().transform(n=>n??void 0),icon:qt.nullish().transform(n=>n??void 0),iconColor:v.string(),isGlowEnabled:v.boolean(),iconZoom:v.number()
}
),Lm=v.object({
id:v.number(),name:v.string(),profileFrame:qt.nullish().transform(n=>n??void 0),profilePicture:qt.nullish().transform(n=>n??void 0),profilePictureZoom:v.number(),profilePictureStyle:v.nativeEnum(_l),bioText:v.string().nullish().transform(n=>n??void 0),isBioTextGlowEnabled:v.boolean(),bioLinks:Im.array(),cardBorderRadius:v.number(),cardBackgroundImageBlur:v.number(),cardBackgroundImageOpacity:v.number(),cardBackgroundImageZoom:v.number(),cardTiltEffectEnabled:v.boolean(),cardBackgroundImage:qt.nullish().transform(n=>n??void 0),textFont:v.nativeEnum(_s),textColor:v.string()
}
),Mw=Lm.extend({
username:v.string()
}
),Om=v.object({
id:v.number(),backgroundImage:qt.nullish().transform(n=>n??void 0),cursor:qt.nullish().transform(n=>n??void 0),cursorTrailId:v.number().nullish().transform(n=>n??void 0),cursorTrailJsonConfig:v.string().nullish().transform(n=>n??void 0),particlesId:v.number().nullish().transform(n=>n??void 0),particlesJsonConfig:v.string().nullish().transform(n=>n??void 0),particlesColor:v.string().nullish().transform(n=>n??void 0),song:qt.nullish().transform(n=>n??void 0),songVolume:v.number(),welcomeText:v.string().nullish().transform(n=>n??void 0),welcomeTextFont:v.nativeEnum(_s)
}
),jm=Lm.extend({
linkedProfile:Mw.nullish().transform(n=>n??void 0),sharedEditorProfileData:Om
}
),Fw=v.object({
id:v.number(),activeProfileId:v.number().nullish().transform(n=>n??void 0),profiles:jm.array()
}
),Nw=v.object({
profileId:v.number(),text:v.string().nullish().transform(n=>n??void 0)
}
),Dw=v.object({
profileId:v.number(),fontType:v.nativeEnum(_s)
}
),Aw=v.object({
volume:v.number(),profileId:v.number()
}
),Bw=v.object({
file:v.instanceof(File).nullish().transform(n=>n??void 0),profileId:v.number().transform(n=>n.toString())
}
),Uw=v.object({
name:v.string()
}
),zw=v.object({
id:v.number(),name:v.string(),textColor:v.string(),sharedEditorProfileData:Om
}
),$w=v.object({
profileId:v.number().nullish().transform(n=>n??void 0)
}
),Vw=v.object({
profileId:v.number(),style:v.nativeEnum(_l)
}
),qw=v.object({
zoom:v.number(),profileId:v.number()
}
),Qw=v.object({
file:v.instanceof(File).nullish().transform(n=>n??void 0),profileId:v.number().transform(n=>n.toString())
}
),Zw=v.object({
file:v.instanceof(File),style:v.nativeEnum(_l).transform(n=>n.toString())
}
),Hw=v.object({
profileId:v.number(),requestId:v.number()
}
),Ww=v.object({
profileId:v.number(),username:v.string()
}
),Kw=v.object({
id:v.number(),fromUsername:v.string(),createdAt:v.string().transform(n=>ps(n))
}
),Gw=v.object({
id:v.number(),toUsername:v.string(),createdAt:v.string().transform(n=>ps(n))
}
),Jw=v.object({
profileId:v.number(),cursorTrailId:v.number().nullish().transform(n=>n??void 0)
}
),Yw=v.object({
file:v.instanceof(File).nullish().transform(n=>n??void 0),profileId:v.number().transform(n=>n.toString())
}
),Xw=v.object({
blur:v.number(),profileId:v.number()
}
),e_=v.object({
borderRadius:v.number(),profileId:v.number()
}
),t_=v.object({
opacity:v.number(),profileId:v.number()
}
),n_=v.object({
enabled:v.boolean(),profileId:v.number()
}
),r_=v.object({
zoom:v.number(),profileId:v.number()
}
),i_=v.object({
file:v.instanceof(File).nullish().transform(n=>n??void 0),profileId:v.number().transform(n=>n.toString())
}
),s_=v.object({
profileId:v.number(),text:v.string().nullish().transform(n=>n??void 0)
}
),o_=v.object({
profileId:v.number(),enabled:v.boolean()
}
),a_=v.object({
profileId:v.number(),color:v.string()
}
),l_=v.object({
profileId:v.number(),fontType:v.nativeEnum(_s)
}
),u_=v.object({
profileId:v.number(),url:v.string().nullish().transform(n=>n??void 0),iconAssetId:v.string().uuid().nullish().transform(n=>n??void 0),iconColor:v.string(),isGlowEnabled:v.boolean()
}
),c_=v.object({
profileId:v.number(),bioLinkId:v.number(),url:v.string().nullish().transform(n=>n??void 0),iconAssetId:v.string().uuid().nullish().transform(n=>n??void 0),iconColor:v.string(),isGlowEnabled:v.boolean()
}
),d_=v.object({
profileId:v.number(),bioLinkId:v.number(),zoom:v.number()
}
),f_=v.object({
file:v.instanceof(File)
}
),h_=v.object({
profileId:v.number(),particlesId:v.number().nullish().transform(n=>n??void 0),color:v.string().nullish().transform(n=>n??void 0)
}
),p_=v.object({
file:v.instanceof(File).nullish().transform(n=>n??void 0),profileId:v.number().transform(n=>n.toString())
}
),m_=v.object({
name:v.string(),jsonConfig:v.string()
}
),y_=v.object({
id:v.number(),name:v.string(),jsonConfig:v.string()
}
),v_=v.object({
id:v.number(),name:v.string(),jsonConfig:v.string()
}
),g_=v.object({
id:v.number(),name:v.string(),jsonConfig:v.string()
}
),w_=v.object({
name:v.string(),jsonConfig:v.string()
}
),__=v.object({
id:v.number(),name:v.string(),jsonConfig:v.string()
}
),k_=v.object({
id:v.number(),name:v.string(),jsonConfig:v.string()
}
),S_=v.object({
id:v.number(),name:v.string(),jsonConfig:v.string()
}
),C_=v.object({
username:v.string(),password:v.string()
}
),Lp=v.object({
hasLoggedInOnce:v.boolean(),settings:fd
}
),x_=v.object({
username:v.string(),email:v.string(),password:v.string(),inviteCode:v.string().nullish().transform(n=>n??void 0)
}
),Vn={
fetch:{
async getClaims(){
const n=await ue(Vn.url.getClaims(),{
method:"GET"
}
);
return n.ok||await ce(n),await n.json()
}
,async login(n){
const r=await ue(Vn.url.login(),{
method:"POST",body:JSON.stringify(C_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r);
const i=await r.json();
return Lp.parse(i)
}
,async logout(){
const n=await ue(Vn.url.logout(),{
method:"POST"
}
);
n.ok||await ce(n)
}
,async register(n){
const r=await ue(Vn.url.register(),{
method:"POST",body:JSON.stringify(x_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r);
const i=await r.json();
return Lp.parse(i)
}

}
,url:{
getClaims(){
return"/api/auth/roles"
}
,login(){
return"/api/auth/login"
}
,logout(){
return"/api/auth/logout"
}
,register(){
return"/api/auth/register"
}

}
,key:{
getClaims(){
return["api/auth/roles"]
}
,login(n){
return["api/auth/login",n]
}
,logout(){
return["api/auth/logout"]
}
,register(n){
return["api/auth/register",n]
}

}
,useQuery:{
getClaims(n={

}
){
return ft({
queryKey:Vn.key.getClaims(),queryFn:()=>Vn.fetch.getClaims(),...n
}
)
}

}
,useMutation:{
login({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>Vn.fetch.login(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,logout({
onSuccess:n,...r
}
){
return Te({
mutationFn:()=>Vn.fetch.logout(),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,register({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>Vn.fetch.register(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}

}

}
,qn={
fetch:{
async createBackgroundParticle(n){
const r=await ue(qn.url.createBackgroundParticle(),{
method:"POST",body:JSON.stringify(w_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r);
const i=await r.json();
return __.parse(i)
}
,async deleteBackgroundParticle(n){
const r=await ue(qn.url.deleteBackgroundParticle(n),{
method:"DELETE"
}
);
r.ok||await ce(r)
}
,async getBackgroundParticles(){
const n=await ue(qn.url.getBackgroundParticles(),{
method:"GET"
}
);
n.ok||await ce(n);
const r=await n.json();
return k_.array().parse(r)
}
,async updateBackgroundParticle(n){
const r=await ue(qn.url.updateBackgroundParticle(),{
method:"PUT",body:JSON.stringify(S_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}

}
,url:{
createBackgroundParticle(){
return"/api/background-particles"
}
,deleteBackgroundParticle(n){
return`/api/background-particles/${
n.id
}
`
}
,getBackgroundParticles(){
return"/api/background-particles"
}
,updateBackgroundParticle(){
return"/api/background-particles"
}

}
,key:{
createBackgroundParticle(n){
return["api/background-particles",n]
}
,deleteBackgroundParticle(n){
return["api/background-particles/{
id
}
",n]
}
,getBackgroundParticles(){
return["api/background-particles"]
}
,updateBackgroundParticle(n){
return["api/background-particles",n]
}

}
,useQuery:{
getBackgroundParticles(n={

}
){
return ft({
queryKey:qn.key.getBackgroundParticles(),queryFn:()=>qn.fetch.getBackgroundParticles(),...n
}
)
}

}
,useMutation:{
createBackgroundParticle({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>qn.fetch.createBackgroundParticle(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,deleteBackgroundParticle({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>qn.fetch.deleteBackgroundParticle(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateBackgroundParticle({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>qn.fetch.updateBackgroundParticle(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}

}

}
,Qn={
fetch:{
async createCursorTrail(n){
const r=await ue(Qn.url.createCursorTrail(),{
method:"POST",body:JSON.stringify(m_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r);
const i=await r.json();
return y_.parse(i)
}
,async deleteCursorTrail(n){
const r=await ue(Qn.url.deleteCursorTrail(n),{
method:"DELETE"
}
);
r.ok||await ce(r)
}
,async getCursorTrails(){
const n=await ue(Qn.url.getCursorTrails(),{
method:"GET"
}
);
n.ok||await ce(n);
const r=await n.json();
return v_.array().parse(r)
}
,async updateCursorTrail(n){
const r=await ue(Qn.url.updateCursorTrail(),{
method:"PUT",body:JSON.stringify(g_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}

}
,url:{
createCursorTrail(){
return"/api/cursor-trails"
}
,deleteCursorTrail(n){
return`/api/cursor-trails/${
n.id
}
`
}
,getCursorTrails(){
return"/api/cursor-trails"
}
,updateCursorTrail(){
return"/api/cursor-trails"
}

}
,key:{
createCursorTrail(n){
return["api/cursor-trails",n]
}
,deleteCursorTrail(n){
return["api/cursor-trails/{
id
}
",n]
}
,getCursorTrails(){
return["api/cursor-trails"]
}
,updateCursorTrail(n){
return["api/cursor-trails",n]
}

}
,useQuery:{
getCursorTrails(n={

}
){
return ft({
queryKey:Qn.key.getCursorTrails(),queryFn:()=>Qn.fetch.getCursorTrails(),...n
}
)
}

}
,useMutation:{
createCursorTrail({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>Qn.fetch.createCursorTrail(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,deleteCursorTrail({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>Qn.fetch.deleteCursorTrail(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateCursorTrail({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>Qn.fetch.updateCursorTrail(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}

}

}
,G={
fetch:{
async acceptProfileLinkRequest(n){
const r=await ue(G.url.acceptProfileLinkRequest(),{
method:"PATCH",body:JSON.stringify(Hw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async cancelProfileLinkRequest(n){
const r=await ue(G.url.cancelProfileLinkRequest(n),{
method:"DELETE"
}
);
r.ok||await ce(r)
}
,async createBioLink(n){
const r=await ue(G.url.createBioLink(),{
method:"POST",body:JSON.stringify(u_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r);
const i=await r.json();
return Im.parse(i)
}
,async createProfile(n){
const r=await ue(G.url.createProfile(),{
method:"POST",body:JSON.stringify(Uw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r);
const i=await r.json();
return zw.parse(i)
}
,async createProfileLinkRequest(n){
const r=await ue(G.url.createProfileLinkRequest(),{
method:"POST",body:JSON.stringify(Ww.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async deleteBioLink(n){
const r=await ue(G.url.deleteBioLink(n),{
method:"DELETE"
}
);
r.ok||await ce(r)
}
,async deleteProfile(n){
const r=await ue(G.url.deleteProfile(n),{
method:"DELETE"
}
);
r.ok||await ce(r)
}
,async getBioLinkIcons(){
const n=await ue(G.url.getBioLinkIcons(),{
method:"GET"
}
);
n.ok||await ce(n);
const r=await n.json();
return qt.array().parse(r)
}
,async getEditorSettings(){
const n=await ue(G.url.getEditorSettings(),{
method:"GET"
}
);
if(n.ok||await ce(n),n.status==204)return null;
const r=await n.json();
return r===null?null:Fw.parse(r)
}
,async getProfile(n){
const r=await ue(G.url.getProfile(n),{
method:"GET"
}
);
r.ok||await ce(r);
const i=await r.json();
return jm.parse(i)
}
,async getProfileLinkRequestsEndpoint(){
const n=await ue(G.url.getProfileLinkRequestsEndpoint(),{
method:"GET"
}
);
n.ok||await ce(n);
const r=await n.json();
return Kw.array().parse(r)
}
,async getSentProfileLinkRequests(){
const n=await ue(G.url.getSentProfileLinkRequests(),{
method:"GET"
}
);
n.ok||await ce(n);
const r=await n.json();
return Gw.array().parse(r)
}
,async invalidateCache(){
const n=await ue(G.url.invalidateCache(),{
method:"PATCH"
}
);
n.ok||await ce(n)
}
,async unlinkProfile(n){
const r=await ue(G.url.unlinkProfile(n),{
method:"PATCH"
}
);
r.ok||await ce(r)
}
,async updateActiveProfile(n){
const r=await ue(G.url.updateActiveProfile(),{
method:"PATCH",body:JSON.stringify($w.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateBackgroundParticles(n){
const r=await ue(G.url.updateBackgroundParticles(),{
method:"PUT",body:JSON.stringify(h_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateBioLink(n){
const r=await ue(G.url.updateBioLink(),{
method:"PUT",body:JSON.stringify(c_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateBioLinkIconZoom(n){
const r=await ue(G.url.updateBioLinkIconZoom(),{
method:"PATCH",body:JSON.stringify(d_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateBioText(n){
const r=await ue(G.url.updateBioText(),{
method:"PATCH",body:JSON.stringify(s_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateBioTextGlowState(n){
const r=await ue(G.url.updateBioTextGlowState(),{
method:"PATCH",body:JSON.stringify(o_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateCardBlur(n){
const r=await ue(G.url.updateCardBlur(),{
method:"PATCH",body:JSON.stringify(Xw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateCardBorderRadius(n){
const r=await ue(G.url.updateCardBorderRadius(),{
method:"PATCH",body:JSON.stringify(e_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateCardOpacity(n){
const r=await ue(G.url.updateCardOpacity(),{
method:"PATCH",body:JSON.stringify(t_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateCardTiltEffect(n){
const r=await ue(G.url.updateCardTiltEffect(),{
method:"PATCH",body:JSON.stringify(n_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateCardZoom(n){
const r=await ue(G.url.updateCardZoom(),{
method:"PATCH",body:JSON.stringify(r_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateEditorCursorTrail(n){
const r=await ue(G.url.updateEditorCursorTrail(),{
method:"PUT",body:JSON.stringify(Jw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateProfilePictureStyle(n){
const r=await ue(G.url.updateProfilePictureStyle(),{
method:"PATCH",body:JSON.stringify(Vw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateProfilePictureZoom(n){
const r=await ue(G.url.updateProfilePictureZoom(),{
method:"PATCH",body:JSON.stringify(qw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateSongVolume(n){
const r=await ue(G.url.updateSongVolume(),{
method:"PATCH",body:JSON.stringify(Aw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateTextColor(n){
const r=await ue(G.url.updateTextColor(),{
method:"PATCH",body:JSON.stringify(a_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateTextFont(n){
const r=await ue(G.url.updateTextFont(),{
method:"PATCH",body:JSON.stringify(l_.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateWelcomeText(n){
const r=await ue(G.url.updateWelcomeText(),{
method:"PATCH",body:JSON.stringify(Nw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateWelcomeTextFont(n){
const r=await ue(G.url.updateWelcomeTextFont(),{
method:"PATCH",body:JSON.stringify(Dw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async uploadBackgroundMedia(n){
const r=new FormData;
for(const[l,c]of Object.entries(p_.parse(n)))c!=null&&r.append(l,c);
const i=await ue(G.url.uploadBackgroundMedia(),{
method:"PATCH",body:r
}
);
if(i.ok||await ce(i),i.status==204)return null;
const o=await i.json();
return o===null?null:qt.parse(o)
}
,async uploadBioLinkIcon(n){
const r=new FormData;
for(const[l,c]of Object.entries(f_.parse(n)))c!=null&&r.append(l,c);
const i=await ue(G.url.uploadBioLinkIcon(),{
method:"POST",body:r
}
);
i.ok||await ce(i);
const o=await i.json();
return qt.parse(o)
}
,async uploadCardBackgroundImage(n){
const r=new FormData;
for(const[l,c]of Object.entries(i_.parse(n)))c!=null&&r.append(l,c);
const i=await ue(G.url.uploadCardBackgroundImage(),{
method:"PATCH",body:r
}
);
if(i.ok||await ce(i),i.status==204)return null;
const o=await i.json();
return o===null?null:qt.parse(o)
}
,async uploadCursorImage(n){
const r=new FormData;
for(const[l,c]of Object.entries(Yw.parse(n)))c!=null&&r.append(l,c);
const i=await ue(G.url.uploadCursorImage(),{
method:"PATCH",body:r
}
);
if(i.ok||await ce(i),i.status==204)return null;
const o=await i.json();
return o===null?null:qt.parse(o)
}
,async uploadProfilePicture(n){
const r=new FormData;
for(const[l,c]of Object.entries(Qw.parse(n)))c!=null&&r.append(l,c);
const i=await ue(G.url.uploadProfilePicture(),{
method:"PATCH",body:r
}
);
if(i.ok||await ce(i),i.status==204)return null;
const o=await i.json();
return o===null?null:qt.parse(o)
}
,async uploadProfilePictureFrame(n){
const r=new FormData;
for(const[o,l]of Object.entries(Zw.parse(n)))l!=null&&r.append(o,l);
const i=await ue(G.url.uploadProfilePictureFrame(),{
method:"POST",body:r
}
);
i.ok||await ce(i)
}
,async uploadSong(n){
const r=new FormData;
for(const[l,c]of Object.entries(Bw.parse(n)))c!=null&&r.append(l,c);
const i=await ue(G.url.uploadSong(),{
method:"PATCH",body:r
}
);
if(i.ok||await ce(i),i.status==204)return null;
const o=await i.json();
return o===null?null:qt.parse(o)
}

}
,url:{
acceptProfileLinkRequest(){
return"/api/editor/profiles/links/requests"
}
,cancelProfileLinkRequest(n){
return`/api/editor/profiles/links/requests/${
n.requestId
}
`
}
,createBioLink(){
return"/api/editor/profile/bio-link"
}
,createProfile(){
return"/api/editor/profile"
}
,createProfileLinkRequest(){
return"/api/editor/profiles/links/requests"
}
,deleteBioLink(n){
return`/api/editor/profile/bio-link/${
n.bioLinkId
}
`
}
,deleteProfile(n){
return`/api/editor/profile/${
n.id
}
`
}
,getBioLinkIcons(){
return"/api/editor/bio-link/icons"
}
,getEditorSettings(){
return"/api/editor"
}
,getProfile(n){
return`/api/editor/profile/${
n.profileId
}
`
}
,getProfileLinkRequestsEndpoint(){
return"/api/editor/profiles/links/requests"
}
,getSentProfileLinkRequests(){
return"/api/editor/profiles/links/requests/sent"
}
,invalidateCache(){
return"/api/editor/cache/invalidate"
}
,unlinkProfile(n){
return`/api/editor/profiles/${
n.profileId
}
/unlink`
}
,updateActiveProfile(){
return"/api/editor/profile/active-profile"
}
,updateBackgroundParticles(){
return"/api/editor/profile/background/particles"
}
,updateBioLink(){
return"/api/editor/profile/bio-link"
}
,updateBioLinkIconZoom(){
return"/api/editor/profile/bio-link/zoom"
}
,updateBioText(){
return"/api/editor/profile/bio-text"
}
,updateBioTextGlowState(){
return"/api/editor/profile/bio-text/glow"
}
,updateCardBlur(){
return"/api/editor/profile/card/blur"
}
,updateCardBorderRadius(){
return"/api/editor/profile/card/border-radius"
}
,updateCardOpacity(){
return"/api/editor/profile/card/opacity"
}
,updateCardTiltEffect(){
return"/api/editor/profile/card/tilt-effect"
}
,updateCardZoom(){
return"/api/editor/profile/card/zoom"
}
,updateEditorCursorTrail(){
return"/api/editor/profile/cursor/trails"
}
,updateProfilePictureStyle(){
return"/api/editor/profile/profile-picture/style"
}
,updateProfilePictureZoom(){
return"/api/editor/profile/profile-picture/zoom"
}
,updateSongVolume(){
return"/api/editor/profile/song/volume"
}
,updateTextColor(){
return"/api/editor/profile/text/color"
}
,updateTextFont(){
return"/api/editor/profile/text/font"
}
,updateWelcomeText(){
return"/api/editor/welcome-text"
}
,updateWelcomeTextFont(){
return"/api/editor/welcome-text/font"
}
,uploadBackgroundMedia(){
return"/api/editor/profile/background"
}
,uploadBioLinkIcon(){
return"/api/editor/bio-link/icons"
}
,uploadCardBackgroundImage(){
return"/api/editor/profile/card/background-image"
}
,uploadCursorImage(){
return"/api/editor/profile/cursor"
}
,uploadProfilePicture(){
return"/api/editor/profile/profile-picture"
}
,uploadProfilePictureFrame(){
return"/api/editor/profile/frame"
}
,uploadSong(){
return"/api/editor/profile/song"
}

}
,key:{
acceptProfileLinkRequest(n){
return["api/editor/profiles/links/requests",n]
}
,cancelProfileLinkRequest(n){
return["api/editor/profiles/links/requests/{
requestId
}
",n]
}
,createBioLink(n){
return["api/editor/profile/bio-link",n]
}
,createProfile(n){
return["api/editor/profile",n]
}
,createProfileLinkRequest(n){
return["api/editor/profiles/links/requests",n]
}
,deleteBioLink(n){
return["api/editor/profile/bio-link/{
bioLinkId
}
",n]
}
,deleteProfile(n){
return["api/editor/profile/{
id
}
",n]
}
,getBioLinkIcons(){
return["api/editor/bio-link/icons"]
}
,getEditorSettings(){
return["api/editor"]
}
,getProfile(n){
return["api/editor/profile/{
profileId
}
",n]
}
,getProfileLinkRequestsEndpoint(){
return["api/editor/profiles/links/requests"]
}
,getSentProfileLinkRequests(){
return["api/editor/profiles/links/requests/sent"]
}
,invalidateCache(){
return["api/editor/cache/invalidate"]
}
,unlinkProfile(n){
return["api/editor/profiles/{
profileId
}
/unlink",n]
}
,updateActiveProfile(n){
return["api/editor/profile/active-profile",n]
}
,updateBackgroundParticles(n){
return["api/editor/profile/background/particles",n]
}
,updateBioLink(n){
return["api/editor/profile/bio-link",n]
}
,updateBioLinkIconZoom(n){
return["api/editor/profile/bio-link/zoom",n]
}
,updateBioText(n){
return["api/editor/profile/bio-text",n]
}
,updateBioTextGlowState(n){
return["api/editor/profile/bio-text/glow",n]
}
,updateCardBlur(n){
return["api/editor/profile/card/blur",n]
}
,updateCardBorderRadius(n){
return["api/editor/profile/card/border-radius",n]
}
,updateCardOpacity(n){
return["api/editor/profile/card/opacity",n]
}
,updateCardTiltEffect(n){
return["api/editor/profile/card/tilt-effect",n]
}
,updateCardZoom(n){
return["api/editor/profile/card/zoom",n]
}
,updateEditorCursorTrail(n){
return["api/editor/profile/cursor/trails",n]
}
,updateProfilePictureStyle(n){
return["api/editor/profile/profile-picture/style",n]
}
,updateProfilePictureZoom(n){
return["api/editor/profile/profile-picture/zoom",n]
}
,updateSongVolume(n){
return["api/editor/profile/song/volume",n]
}
,updateTextColor(n){
return["api/editor/profile/text/color",n]
}
,updateTextFont(n){
return["api/editor/profile/text/font",n]
}
,updateWelcomeText(n){
return["api/editor/welcome-text",n]
}
,updateWelcomeTextFont(n){
return["api/editor/welcome-text/font",n]
}
,uploadBackgroundMedia(n){
return["api/editor/profile/background",n]
}
,uploadBioLinkIcon(n){
return["api/editor/bio-link/icons",n]
}
,uploadCardBackgroundImage(n){
return["api/editor/profile/card/background-image",n]
}
,uploadCursorImage(n){
return["api/editor/profile/cursor",n]
}
,uploadProfilePicture(n){
return["api/editor/profile/profile-picture",n]
}
,uploadProfilePictureFrame(n){
return["api/editor/profile/frame",n]
}
,uploadSong(n){
return["api/editor/profile/song",n]
}

}
,useQuery:{
getBioLinkIcons(n={

}
){
return ft({
queryKey:G.key.getBioLinkIcons(),queryFn:()=>G.fetch.getBioLinkIcons(),...n
}
)
}
,getEditorSettings(n={

}
){
return ft({
queryKey:G.key.getEditorSettings(),queryFn:()=>G.fetch.getEditorSettings(),...n
}
)
}
,getProfile(n,r={

}
){
const i=re.useMemo(()=>n!==void 0,[n]);
return ft({
queryKey:G.key.getProfile(n),queryFn:()=>G.fetch.getProfile(n),enabled:i,...r
}
)
}
,getProfileLinkRequestsEndpoint(n={

}
){
return ft({
queryKey:G.key.getProfileLinkRequestsEndpoint(),queryFn:()=>G.fetch.getProfileLinkRequestsEndpoint(),...n
}
)
}
,getSentProfileLinkRequests(n={

}
){
return ft({
queryKey:G.key.getSentProfileLinkRequests(),queryFn:()=>G.fetch.getSentProfileLinkRequests(),...n
}
)
}

}
,fetchQuery:{
getBioLinkIcons(){
return xe().fetchQuery({
queryKey:G.key.getBioLinkIcons(),queryFn:()=>G.fetch.getBioLinkIcons()
}
)
}
,getEditorSettings(){
return xe().fetchQuery({
queryKey:G.key.getEditorSettings(),queryFn:()=>G.fetch.getEditorSettings()
}
)
}
,getProfile(n){
return xe().fetchQuery({
queryKey:G.key.getProfile(n),queryFn:()=>G.fetch.getProfile(n)
}
)
}
,getProfileLinkRequestsEndpoint(){
return xe().fetchQuery({
queryKey:G.key.getProfileLinkRequestsEndpoint(),queryFn:()=>G.fetch.getProfileLinkRequestsEndpoint()
}
)
}
,getSentProfileLinkRequests(){
return xe().fetchQuery({
queryKey:G.key.getSentProfileLinkRequests(),queryFn:()=>G.fetch.getSentProfileLinkRequests()
}
)
}

}
,useMutation:{
acceptProfileLinkRequest({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.acceptProfileLinkRequest(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,cancelProfileLinkRequest({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.cancelProfileLinkRequest(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,createBioLink({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.createBioLink(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,createProfile({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.createProfile(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,createProfileLinkRequest({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.createProfileLinkRequest(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,deleteBioLink({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.deleteBioLink(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,deleteProfile({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.deleteProfile(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,unlinkProfile({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.unlinkProfile(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateActiveProfile({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateActiveProfile(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateBackgroundParticles({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateBackgroundParticles(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateBioLink({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateBioLink(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateBioLinkIconZoom({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateBioLinkIconZoom(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateBioText({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateBioText(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateBioTextGlowState({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateBioTextGlowState(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateCardBlur({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateCardBlur(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateCardBorderRadius({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateCardBorderRadius(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateCardOpacity({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateCardOpacity(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateCardTiltEffect({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateCardTiltEffect(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateCardZoom({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateCardZoom(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateEditorCursorTrail({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateEditorCursorTrail(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateProfilePictureStyle({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateProfilePictureStyle(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateProfilePictureZoom({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateProfilePictureZoom(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateSongVolume({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateSongVolume(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateTextColor({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateTextColor(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateTextFont({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateTextFont(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateWelcomeText({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateWelcomeText(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateWelcomeTextFont({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.updateWelcomeTextFont(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,uploadBackgroundMedia({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.uploadBackgroundMedia(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,uploadBioLinkIcon({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.uploadBioLinkIcon(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,uploadCardBackgroundImage({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.uploadCardBackgroundImage(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,uploadCursorImage({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.uploadCursorImage(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,uploadProfilePicture({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.uploadProfilePicture(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,uploadProfilePictureFrame({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.uploadProfilePictureFrame(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,uploadSong({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>G.fetch.uploadSong(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}

}

}
,yt={
fetch:{
async createInvite(n){
const r=await ue(yt.url.createInvite(),{
method:"POST",body:JSON.stringify(Tw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r);
const i=await r.json();
return Iw.parse(i)
}
,async createInvitesBulk(n){
const r=await ue(yt.url.createInvitesBulk(),{
method:"POST",body:JSON.stringify(Lw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
return r.ok||await ce(r),await r.json()
}
,async deleteInvite(n){
const r=await ue(yt.url.deleteInvite(n),{
method:"DELETE"
}
);
r.ok||await ce(r)
}
,async getInvite(n){
const r=await ue(yt.url.getInvite(n),{
method:"GET"
}
);
r.ok||await ce(r);
const i=await r.json();
return ed.parse(i)
}
,async getInviteByCode(n){
const r=await ue(yt.url.getInviteByCode(n),{
method:"GET"
}
);
r.ok||await ce(r);
const i=await r.json();
return ed.parse(i)
}
,async getInvites(n){
const r=await ue(yt.url.getInvites(n),{
method:"GET"
}
);
r.ok||await ce(r);
const i=await r.json();
return jw.parse(i)
}
,async getInviteStats(){
const n=await ue(yt.url.getInviteStats(),{
method:"GET"
}
);
n.ok||await ce(n);
const r=await n.json();
return bw.parse(r)
}

}
,url:{
createInvite(){
return"/api/invites"
}
,createInvitesBulk(){
return"/api/invites/bulk"
}
,deleteInvite(n){
return`/api/invites/${
n.id
}
`
}
,getInvite(n){
return`/api/invites/${
n.id
}
`
}
,getInviteByCode(n){
return`/api/invites/code/${
n.code
}
`
}
,getInvites(n){
const r=new URLSearchParams;
for(const[i,o]of Object.entries(Ow.parse(n)))o!=null&&r.append(i,o);
return`/api/invites?${
r
}
`
}
,getInviteStats(){
return"/api/invites/stats"
}

}
,key:{
createInvite(n){
return["api/invites",n]
}
,createInvitesBulk(n){
return["api/invites/bulk",n]
}
,deleteInvite(n){
return["api/invites/{
id
}
",n]
}
,getInvite(n){
return["api/invites/{
id
}
",n]
}
,getInviteByCode(n){
return["api/invites/code/{
code
}
",n]
}
,getInvites(n){
return["api/invites",n]
}
,getInviteStats(){
return["api/invites/stats"]
}

}
,useQuery:{
getInvite(n,r={

}
){
const i=re.useMemo(()=>n!==void 0,[n]);
return ft({
queryKey:yt.key.getInvite(n),queryFn:()=>yt.fetch.getInvite(n),enabled:i,...r
}
)
}
,getInviteByCode(n,r={

}
){
const i=re.useMemo(()=>n!==void 0,[n]);
return ft({
queryKey:yt.key.getInviteByCode(n),queryFn:()=>yt.fetch.getInviteByCode(n),enabled:i,...r
}
)
}
,getInvites(n,r={

}
){
const i=re.useMemo(()=>n!==void 0,[n]);
return ft({
queryKey:yt.key.getInvites(n),queryFn:()=>yt.fetch.getInvites(n),enabled:i,...r
}
)
}
,getInviteStats(n={

}
){
return ft({
queryKey:yt.key.getInviteStats(),queryFn:()=>yt.fetch.getInviteStats(),...n
}
)
}

}
,useMutation:{
createInvite({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>yt.fetch.createInvite(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,createInvitesBulk({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>yt.fetch.createInvitesBulk(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,deleteInvite({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>yt.fetch.deleteInvite(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}

}

}
,ao={
fetch:{
async getLeaderboard(){
const n=await ue(ao.url.getLeaderboard(),{
method:"GET"
}
);
n.ok||await ce(n);
const r=await n.json();
return Pw.parse(r)
}
,async updateLeaderboard(n){
const r=await ue(ao.url.updateLeaderboard(),{
method:"POST",body:JSON.stringify(Ew.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}

}
,url:{
getLeaderboard(){
return"/api/leaderboard"
}
,updateLeaderboard(){
return"/api/leaderboard"
}

}
,key:{
getLeaderboard(){
return["api/leaderboard"]
}
,updateLeaderboard(n){
return["api/leaderboard",n]
}

}
,useQuery:{
getLeaderboard(n={

}
){
return ft({
queryKey:ao.key.getLeaderboard(),queryFn:()=>ao.fetch.getLeaderboard(),...n
}
)
}

}
,useMutation:{
updateLeaderboard({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>ao.fetch.updateLeaderboard(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}

}

}
,Yr={
fetch:{
async banUser(n){
const r=await ue(Yr.url.banUser(),{
method:"POST",body:JSON.stringify(Sw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r);
const i=await r.json();
return Sc.parse(i)
}
,async getBanHistory(n){
const r=await ue(Yr.url.getBanHistory(n),{
method:"GET"
}
);
r.ok||await ce(r);
const i=await r.json();
return Sc.array().parse(i)
}
,async unbanUser(n){
const r=await ue(Yr.url.unbanUser(),{
method:"POST",body:JSON.stringify(Cw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r);
const i=await r.json();
return Sc.parse(i)
}

}
,url:{
banUser(){
return"/api/moderation/users/ban"
}
,getBanHistory(n){
return`/api/moderation/users/${
n.userId
}
/bans`
}
,unbanUser(){
return"/api/moderation/users/unban"
}

}
,key:{
banUser(n){
return["api/moderation/users/ban",n]
}
,getBanHistory(n){
return["api/moderation/users/{
userId
}
/bans",n]
}
,unbanUser(n){
return["api/moderation/users/unban",n]
}

}
,useQuery:{
getBanHistory(n,r={

}
){
const i=re.useMemo(()=>n!==void 0,[n]);
return ft({
queryKey:Yr.key.getBanHistory(n),queryFn:()=>Yr.fetch.getBanHistory(n),enabled:i,...r
}
)
}

}
,useMutation:{
banUser({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>Yr.fetch.banUser(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,unbanUser({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>Yr.fetch.unbanUser(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}

}

}
,Cc={
fetch:{
async getUserProfile(n){
const r=await ue(Cc.url.getUserProfile(n),{
method:"GET"
}
);
if(r.ok||await ce(r),r.status==204)return null;
const i=await r.json();
return i===null?null:kw.parse(i)
}

}
,url:{
getUserProfile(n){
return`/api/profile/${
n.username
}
`
}

}
,key:{
getUserProfile(n){
return["api/profile/{
username
}
",n]
}

}
,useQuery:{
getUserProfile(n,r={

}
){
const i=re.useMemo(()=>n!==void 0,[n]);
return ft({
queryKey:Cc.key.getUserProfile(n),queryFn:()=>Cc.fetch.getUserProfile(n),enabled:i,...r
}
)
}

}

}
,at={
fetch:{
async getMe(){
const n=await ue(at.url.getMe(),{
method:"GET"
}
);
n.ok||await ce(n);
const r=await n.json();
return lw.parse(r)
}
,async getUser(n){
const r=await ue(at.url.getUser(n),{
method:"GET"
}
);
r.ok||await ce(r);
const i=await r.json();
return uw.parse(i)
}
,async getUsers(n){
const r=await ue(at.url.getUsers(n),{
method:"GET"
}
);
r.ok||await ce(r);
const i=await r.json();
return fw.parse(i)
}
,async getUsersStats(){
const n=await ue(at.url.getUsersStats(),{
method:"GET"
}
);
n.ok||await ce(n);
const r=await n.json();
return hw.parse(r)
}
,async updateMe(n){
const r=await ue(at.url.updateMe(),{
method:"PUT",body:JSON.stringify(pw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateTheme(n){
const r=await ue(at.url.updateTheme(),{
method:"PATCH",body:JSON.stringify(mw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateUser(n){
const r=await ue(at.url.updateUser(),{
method:"PUT",body:JSON.stringify(yw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}
,async updateUserRoles(n){
const r=await ue(at.url.updateUserRoles(),{
method:"PATCH",body:JSON.stringify(vw.parse(n)),headers:{
"Content-Type":"application/json"
}

}
);
r.ok||await ce(r)
}

}
,url:{
getMe(){
return"/api/users/me"
}
,getUser(n){
return`/api/users/${
n.userId
}
`
}
,getUsers(n){
const r=new URLSearchParams;
for(const[i,o]of Object.entries(cw.parse(n)))o!=null&&r.append(i,o);
return`/api/users?${
r
}
`
}
,getUsersStats(){
return"/api/users/stats"
}
,updateMe(){
return"/api/users/me"
}
,updateTheme(){
return"/api/users/me/theme"
}
,updateUser(){
return"/api/users"
}
,updateUserRoles(){
return"/api/users/roles"
}

}
,key:{
getMe(){
return["api/users/me"]
}
,getUser(n){
return["api/users/{
userId
}
",n]
}
,getUsers(n){
return["api/users",n]
}
,getUsersStats(){
return["api/users/stats"]
}
,updateMe(n){
return["api/users/me",n]
}
,updateTheme(n){
return["api/users/me/theme",n]
}
,updateUser(n){
return["api/users",n]
}
,updateUserRoles(n){
return["api/users/roles",n]
}

}
,useQuery:{
getMe(n={

}
){
return ft({
queryKey:at.key.getMe(),queryFn:()=>at.fetch.getMe(),...n
}
)
}
,getUser(n,r={

}
){
const i=re.useMemo(()=>n!==void 0,[n]);
return ft({
queryKey:at.key.getUser(n),queryFn:()=>at.fetch.getUser(n),enabled:i,...r
}
)
}
,getUsers(n,r={

}
){
const i=re.useMemo(()=>n!==void 0,[n]);
return ft({
queryKey:at.key.getUsers(n),queryFn:()=>at.fetch.getUsers(n),enabled:i,...r
}
)
}
,getUsersStats(n={

}
){
return ft({
queryKey:at.key.getUsersStats(),queryFn:()=>at.fetch.getUsersStats(),...n
}
)
}

}
,useMutation:{
updateMe({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>at.fetch.updateMe(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateTheme({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>at.fetch.updateTheme(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateUser({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>at.fetch.updateUser(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}
,updateUserRoles({
onSuccess:n,...r
}
){
return Te({
mutationFn:i=>at.fetch.updateUserRoles(i),...r,onSuccess:(i,o,l)=>{
xe().invalidateQueries(),n==null||n(i,o,l)
}

}
)
}

}

}
;
let td;
const xe=()=>{
if(!td)throw new Error("queryClient not set.");
return td
}
,ce=async n=>{
let r=await n.json().catch(i=>({

}
));
throw r.status&&(r.detail||r.title)?new sw(r):new Em(n.status,"An unknown error has occurred.")
}
,P_=n=>{
const r=[n.title,n.detail];
return n.errors&&r.push(...Object.values(n.errors).flat()),r.filter(i=>!!i).join(`
`)
}
;
function R_({
children:n
}
){
var l;
const r=Pp(c=>c.currentTheme),i=Pp(c=>c.setTheme),{
data:o
}
=at.useQuery.getMe();
return re.useEffect(()=>{
var c;
((c=o==null?void 0:o.settings)==null?void 0:c.theme)!==void 0?o.settings.theme===dl.Default?i("default"):o.settings.theme===dl.WindowsXP&&i("winxp"):r||i("winxp")
}
,[(l=o==null?void 0:o.settings)==null?void 0:l.theme,r,i]),fe.jsx("div",{
className:(r==null?void 0:r.className)??"","data-theme":(r==null?void 0:r.id)??"default",children:n
}
)
}
var E_="Invariant failed";
function Jn(n,r){
if(!n)throw new Error(E_)
}
const Yi=new WeakMap,el=new WeakMap,fl={
current:[]
}
;
let xc=!1,po=0;
const fo=new Set,Ka=new Map;
function bm(n){
const r=Array.from(n).sort((i,o)=>i instanceof Xi&&i.options.deps.includes(o)?1:o instanceof Xi&&o.options.deps.includes(i)?-1:0);
for(const i of r){
if(fl.current.includes(i))continue;
fl.current.push(i),i.recompute();
const o=el.get(i);
if(o)for(const l of o){
const c=Yi.get(l);
c&&bm(c)
}

}

}
function T_(n){
n.listeners.forEach(r=>r({
prevVal:n.prevState,currentVal:n.state
}
))
}
function I_(n){
n.listeners.forEach(r=>r({
prevVal:n.prevState,currentVal:n.state
}
))
}
function Mm(n){
if(po>0&&!Ka.has(n)&&Ka.set(n,n.prevState),fo.add(n),!(po>0)&&!xc)try{
for(xc=!0;
fo.size>0;
){
const r=Array.from(fo);
fo.clear();
for(const i of r){
const o=Ka.get(i)??i.prevState;
i.prevState=o,T_(i)
}
for(const i of r){
const o=Yi.get(i);
o&&(fl.current.push(i),bm(o))
}
for(const i of r){
const o=Yi.get(i);
if(o)for(const l of o)I_(l)
}

}

}
finally{
xc=!1,fl.current=[],Ka.clear()
}

}
function Pc(n){
po++;
try{
n()
}
finally{
if(po--,po===0){
const r=Array.from(fo)[0];
r&&Mm(r)
}

}

}
class nd{
constructor(r,i){
this.listeners=new Set,this.subscribe=o=>{
var l,c;
this.listeners.add(o);
const f=(c=(l=this.options)==null?void 0:l.onSubscribe)==null?void 0:c.call(l,o,this);
return()=>{
this.listeners.delete(o),f==null||f()
}

}
,this.setState=o=>{
var l,c,f;
this.prevState=this.state,this.state=(l=this.options)!=null&&l.updateFn?this.options.updateFn(this.prevState)(o):o(this.prevState),(f=(c=this.options)==null?void 0:c.onUpdate)==null||f.call(c),Mm(this)
}
,this.prevState=r,this.state=r,this.options=i
}

}
class Xi{
constructor(r){
this.listeners=new Set,this._subscriptions=[],this.lastSeenDepValues=[],this.getDepVals=()=>{
const i=[],o=[];
for(const l of this.options.deps)i.push(l.prevState),o.push(l.state);
return this.lastSeenDepValues=o,{
prevDepVals:i,currDepVals:o,prevVal:this.prevState??void 0
}

}
,this.recompute=()=>{
var i,o;
this.prevState=this.state;
const{
prevDepVals:l,currDepVals:c,prevVal:f
}
=this.getDepVals();
this.state=this.options.fn({
prevDepVals:l,currDepVals:c,prevVal:f
}
),(o=(i=this.options).onUpdate)==null||o.call(i)
}
,this.checkIfRecalculationNeededDeeply=()=>{
for(const c of this.options.deps)c instanceof Xi&&c.checkIfRecalculationNeededDeeply();
let i=!1;
const o=this.lastSeenDepValues,{
currDepVals:l
}
=this.getDepVals();
for(let c=0;
c<l.length;
c++)if(l[c]!==o[c]){
i=!0;
break
}
i&&this.recompute()
}
,this.mount=()=>(this.registerOnGraph(),this.checkIfRecalculationNeededDeeply(),()=>{
this.unregisterFromGraph();
for(const i of this._subscriptions)i()
}
),this.subscribe=i=>{
var o,l;
this.listeners.add(i);
const c=(l=(o=this.options).onSubscribe)==null?void 0:l.call(o,i,this);
return()=>{
this.listeners.delete(i),c==null||c()
}

}
,this.options=r,this.state=r.fn({
prevDepVals:void 0,prevVal:void 0,currDepVals:this.getDepVals().currDepVals
}
)
}
registerOnGraph(r=this.options.deps){
for(const i of r)if(i instanceof Xi)i.registerOnGraph(),this.registerOnGraph(i.options.deps);
else if(i instanceof nd){
let o=Yi.get(i);
o||(o=new Set,Yi.set(i,o)),o.add(this);
let l=el.get(this);
l||(l=new Set,el.set(this,l)),l.add(i)
}

}
unregisterFromGraph(r=this.options.deps){
for(const i of r)if(i instanceof Xi)this.unregisterFromGraph(i.options.deps);
else if(i instanceof nd){
const o=Yi.get(i);
o&&o.delete(this);
const l=el.get(this);
l&&l.delete(i)
}

}

}
const jr="__TSR_index",Op="popstate",jp="beforeunload";
function Fm(n){
let r=n.getLocation();
const i=new Set,o=f=>{
r=n.getLocation(),i.forEach(h=>h({
location:r,action:f
}
))
}
,l=f=>{
n.notifyOnIndexChange??!0?o(f):r=n.getLocation()
}
,c=async({
task:f,navigateOpts:h,...y
}
)=>{
var m,w;
if((h==null?void 0:h.ignoreBlocker)??!1){
f();
return
}
const x=((m=n.getBlockers)==null?void 0:m.call(n))??[],L=y.type==="PUSH"||y.type==="REPLACE";
if(typeof document<"u"&&x.length&&L)for(const F of x){
const E=Io(y.path,y.state);
if(await F.blockerFn({
currentLocation:r,nextLocation:E,action:y.type
}
)){
(w=n.onBlocked)==null||w.call(n);
return
}

}
f()
}
;
return{
get location(){
return r
}
,get length(){
return n.getLength()
}
,subscribers:i,subscribe:f=>(i.add(f),()=>{
i.delete(f)
}
),push:(f,h,y)=>{
const m=r.state[jr];
h=rd(m+1,h),c({
task:()=>{
n.pushState(f,h),o({
type:"PUSH"
}
)
}
,navigateOpts:y,type:"PUSH",path:f,state:h
}
)
}
,replace:(f,h,y)=>{
const m=r.state[jr];
h=rd(m,h),c({
task:()=>{
n.replaceState(f,h),o({
type:"REPLACE"
}
)
}
,navigateOpts:y,type:"REPLACE",path:f,state:h
}
)
}
,go:(f,h)=>{
c({
task:()=>{
n.go(f),l({
type:"GO",index:f
}
)
}
,navigateOpts:h,type:"GO"
}
)
}
,back:f=>{
c({
task:()=>{
n.back((f==null?void 0:f.ignoreBlocker)??!1),l({
type:"BACK"
}
)
}
,navigateOpts:f,type:"BACK"
}
)
}
,forward:f=>{
c({
task:()=>{
n.forward((f==null?void 0:f.ignoreBlocker)??!1),l({
type:"FORWARD"
}
)
}
,navigateOpts:f,type:"FORWARD"
}
)
}
,canGoBack:()=>r.state[jr]!==0,createHref:f=>n.createHref(f),block:f=>{
var h;
if(!n.setBlockers)return()=>{

}
;
const y=((h=n.getBlockers)==null?void 0:h.call(n))??[];
return n.setBlockers([...y,f]),()=>{
var m,w;
const g=((m=n.getBlockers)==null?void 0:m.call(n))??[];
(w=n.setBlockers)==null||w.call(n,g.filter(x=>x!==f))
}

}
,flush:()=>{
var f;
return(f=n.flush)==null?void 0:f.call(n)
}
,destroy:()=>{
var f;
return(f=n.destroy)==null?void 0:f.call(n)
}
,notify:o
}

}
function rd(n,r){
return r||(r={

}
),{
...r,key:hd(),[jr]:n
}

}
function L_(n){
var r;
const i=typeof document<"u"?window:void 0,o=i.history.pushState,l=i.history.replaceState;
let c=[];
const f=()=>c,h=O=>c=O,y=O=>O,m=()=>Io(`${
i.location.pathname
}
${
i.location.search
}
${
i.location.hash
}
`,i.history.state);
(r=i.history.state)!=null&&r.key||i.history.replaceState({
[jr]:0,key:hd()
}
,"");
let w=m(),g,x=!1,L=!1,F=!1,E=!1;
const D=()=>w;
let Z,X;
const K=()=>{
Z&&(b._ignoreSubscribers=!0,(Z.isPush?i.history.pushState:i.history.replaceState)(Z.state,"",Z.href),b._ignoreSubscribers=!1,Z=void 0,X=void 0,g=void 0)
}
,ae=(O,Q,J)=>{
const ne=y(Q);
X||(g=w),w=Io(Q,J),Z={
href:ne,state:J,isPush:(Z==null?void 0:Z.isPush)||O==="push"
}
,X||(X=Promise.resolve().then(()=>K()))
}
,we=O=>{
w=m(),b.notify({
type:O
}
)
}
,$=async()=>{
if(L){
L=!1;
return
}
const O=m(),Q=O.state[jr]-w.state[jr],J=Q===1,ne=Q===-1,se=!J&&!ne||x;
x=!1;
const ee=se?"GO":ne?"BACK":"FORWARD",B=se?{
type:"GO",index:Q
}
:{
type:ne?"BACK":"FORWARD"
}
;
if(F)F=!1;
else{
const A=f();
if(typeof document<"u"&&A.length){
for(const z of A)if(await z.blockerFn({
currentLocation:w,nextLocation:O,action:ee
}
)){
L=!0,i.history.go(1),b.notify(B);
return
}

}

}
w=m(),b.notify(B)
}
,oe=O=>{
if(E){
E=!1;
return
}
let Q=!1;
const J=f();
if(typeof document<"u"&&J.length)for(const ne of J){
const se=ne.enableBeforeUnload??!0;
if(se===!0){
Q=!0;
break
}
if(typeof se=="function"&&se()===!0){
Q=!0;
break
}

}
if(Q)return O.preventDefault(),O.returnValue=""
}
,b=Fm({
getLocation:D,getLength:()=>i.history.length,pushState:(O,Q)=>ae("push",O,Q),replaceState:(O,Q)=>ae("replace",O,Q),back:O=>(O&&(F=!0),E=!0,i.history.back()),forward:O=>{
O&&(F=!0),E=!0,i.history.forward()
}
,go:O=>{
x=!0,i.history.go(O)
}
,createHref:O=>y(O),flush:K,destroy:()=>{
i.history.pushState=o,i.history.replaceState=l,i.removeEventListener(jp,oe,{
capture:!0
}
),i.removeEventListener(Op,$)
}
,onBlocked:()=>{
g&&w!==g&&(w=g)
}
,getBlockers:f,setBlockers:h,notifyOnIndexChange:!1
}
);
return i.addEventListener(jp,oe,{
capture:!0
}
),i.addEventListener(Op,$),i.history.pushState=function(...O){
const Q=o.apply(i.history,O);
return b._ignoreSubscribers||we("PUSH"),Q
}
,i.history.replaceState=function(...O){
const Q=l.apply(i.history,O);
return b._ignoreSubscribers||we("REPLACE"),Q
}
,b
}
function O_(n={
initialEntries:["/"]
}
){
const r=n.initialEntries;
let i=n.initialIndex?Math.min(Math.max(n.initialIndex,0),r.length-1):r.length-1;
const o=r.map((c,f)=>rd(f,void 0));
return Fm({
getLocation:()=>Io(r[i],o[i]),getLength:()=>r.length,pushState:(c,f)=>{
i<r.length-1&&(r.splice(i+1),o.splice(i+1)),o.push(f),r.push(c),i=Math.max(r.length-1,0)
}
,replaceState:(c,f)=>{
o[i]=f,r[i]=c
}
,back:()=>{
i=Math.max(i-1,0)
}
,forward:()=>{
i=Math.min(i+1,r.length-1)
}
,go:c=>{
i=Math.min(Math.max(i+c,0),r.length-1)
}
,createHref:c=>c
}
)
}
function Io(n,r){
const i=n.indexOf("#"),o=n.indexOf("?");
return{
href:n,pathname:n.substring(0,i>0?o>0?Math.min(i,o):i:o>0?o:n.length),hash:i>-1?n.substring(i):"",search:o>-1?n.slice(o,i===-1?void 0:i):"",state:r||{
[jr]:0,key:hd()
}

}

}
function hd(){
return(Math.random()+1).toString(36).substring(7)
}
function Wi(n){
return n[n.length-1]
}
function j_(n){
return typeof n=="function"
}
function ei(n,r){
return j_(n)?n(r):n
}
function id(n,r){
return r.reduce((i,o)=>(i[o]=n[o],i),{

}
)
}
function nn(n,r){
if(n===r)return n;
const i=r,o=Mp(n)&&Mp(i);
if(o||hl(n)&&hl(i)){
const l=o?n:Object.keys(n),c=l.length,f=o?i:Object.keys(i),h=f.length,y=o?[]:{

}
;
let m=0;
for(let w=0;
w<h;
w++){
const g=o?w:f[w];
(!o&&l.includes(g)||o)&&n[g]===void 0&&i[g]===void 0?(y[g]=void 0,m++):(y[g]=nn(n[g],i[g]),y[g]===n[g]&&n[g]!==void 0&&m++)
}
return c===h&&m===c?n:y
}
return i
}
function hl(n){
if(!bp(n))return!1;
const r=n.constructor;
if(typeof r>"u")return!0;
const i=r.prototype;
return!(!bp(i)||!i.hasOwnProperty("isPrototypeOf"))
}
function bp(n){
return Object.prototype.toString.call(n)==="[object Object]"
}
function Mp(n){
return Array.isArray(n)&&n.length===Object.keys(n).length
}
function Fp(n,r){
let i=Object.keys(n);
return r&&(i=i.filter(o=>n[o]!==void 0)),i
}
function es(n,r,i){
if(n===r)return!0;
if(typeof n!=typeof r)return!1;
if(hl(n)&&hl(r)){
const o=(i==null?void 0:i.ignoreUndefined)??!0,l=Fp(n,o),c=Fp(r,o);
return!(i!=null&&i.partial)&&l.length!==c.length?!1:c.every(f=>es(n[f],r[f],i))
}
return Array.isArray(n)&&Array.isArray(r)?n.length!==r.length?!1:!n.some((o,l)=>!es(o,r[l],i)):!1
}
function Zi(n){
let r,i;
const o=new Promise((l,c)=>{
r=l,i=c
}
);
return o.status="pending",o.resolve=l=>{
o.status="resolved",o.value=l,r(l),n==null||n(l)
}
,o.reject=l=>{
o.status="rejected",i(l)
}
,o
}
function b_(n){
return/%[0-9A-Fa-f]{
2
}
/.test(n)
}
function Yn(n){
return kl(n.filter(r=>r!==void 0).join("/"))
}
function kl(n){
return n.replace(/\/{
2,
}
/g,"/")
}
function pd(n){
return n==="/"?n:n.replace(/^\/{
1,
}
/,"")
}
function ti(n){
return n==="/"?n:n.replace(/\/{
1,
}
$/,"")
}
function M_(n){
return ti(pd(n))
}
function pl(n,r){
return n!=null&&n.endsWith("/")&&n!=="/"&&n!==`${
r
}
/`?n.slice(0,-1):n
}
function F_(n,r,i){
return pl(n,i)===pl(r,i)
}
function N_({
basepath:n,base:r,to:i,trailingSlash:o="never",caseSensitive:l
}
){
var c,f;
r=ml(n,r,l),i=ml(n,i,l);
let h=gs(r);
const y=gs(i);
h.length>1&&((c=Wi(h))==null?void 0:c.value)==="/"&&h.pop(),y.forEach((w,g)=>{
w.value==="/"?g?g===y.length-1&&h.push(w):h=[w]:w.value===".."?h.pop():w.value==="."||h.push(w)
}
),h.length>1&&(((f=Wi(h))==null?void 0:f.value)==="/"?o==="never"&&h.pop():o==="always"&&h.push({
type:"pathname",value:"/"
}
));
const m=Yn([n,...h.map(w=>w.value)]);
return kl(m)
}
function gs(n){
if(!n)return[];
n=kl(n);
const r=[];
if(n.slice(0,1)==="/"&&(n=n.substring(1),r.push({
type:"pathname",value:"/"
}
)),!n)return r;
const i=n.split("/").filter(Boolean);
return r.push(...i.map(o=>o==="$"||o==="*"?{
type:"wildcard",value:o
}
:o.charAt(0)==="$"?{
type:"param",value:o
}
:{
type:"pathname",value:o.includes("%25")?o.split("%25").map(l=>decodeURI(l)).join("%25"):decodeURI(o)
}
)),n.slice(-1)==="/"&&(n=n.substring(1),r.push({
type:"pathname",value:"/"
}
)),r
}
function Ga({
path:n,params:r,leaveWildcards:i,leaveParams:o,decodeCharMap:l
}
){
const c=gs(n);
function f(w){
const g=r[w],x=typeof g=="string";
return["*","_splat"].includes(w)?x?encodeURI(g):g:x?D_(g,l):g
}
let h=!1;
const y={

}
,m=Yn(c.map(w=>{
if(w.type==="wildcard"){
y._splat=r._splat;
const g=f("_splat");
return i?`${
w.value
}
${
g??""
}
`:g
}
if(w.type==="param"){
const g=w.value.substring(1);
if(!h&&!(g in r)&&(h=!0),y[g]=r[g],o){
const x=f(w.value);
return`${
w.value
}
${
x??""
}
`
}
return f(g)??"undefined"
}
return w.value
}
));
return{
usedParams:y,interpolatedPath:m,isMissingParams:h
}

}
function D_(n,r){
let i=encodeURIComponent(n);
if(r)for(const[o,l]of r)i=i.replaceAll(o,l);
return i
}
function Ja(n,r,i){
const o=A_(n,r,i);
if(!(i.to&&!o))return o??{

}

}
function ml(n,r,i=!1){
const o=i?n:n.toLowerCase(),l=i?r:r.toLowerCase();
switch(!0){
case o==="/":return r;
case l===o:return"";
case r.length<n.length:return r;
case l[o.length]!=="/":return r;
case l.startsWith(o):return r.slice(n.length);
default:return r
}

}
function A_(n,r,i){
if(n!=="/"&&!r.startsWith(n))return;
r=ml(n,r,i.caseSensitive);
const o=ml(n,`${
i.to??"$"
}
`,i.caseSensitive),l=gs(r),c=gs(o);
r.startsWith("/")||l.unshift({
type:"pathname",value:"/"
}
),o.startsWith("/")||c.unshift({
type:"pathname",value:"/"
}
);
const f={

}
;
return(()=>{
for(let y=0;
y<Math.max(l.length,c.length);
y++){
const m=l[y],w=c[y],g=y>=l.length-1,x=y>=c.length-1;
if(w){
if(w.type==="wildcard"){
const L=decodeURI(Yn(l.slice(y).map(F=>F.value)));
return f["*"]=L,f._splat=L,!0
}
if(w.type==="pathname"){
if(w.value==="/"&&!(m!=null&&m.value))return!0;
if(m){
if(i.caseSensitive){
if(w.value!==m.value)return!1
}
else if(w.value.toLowerCase()!==m.value.toLowerCase())return!1
}

}
if(!m)return!1;
if(w.type==="param"){
if(m.value==="/")return!1;
m.value.charAt(0)!=="$"&&(f[w.value.substring(1)]=decodeURIComponent(m.value))
}

}
if(!g&&x)return f["**"]=Yn(l.slice(y+1).map(L=>L.value)),!!i.fuzzy&&(w==null?void 0:w.value)!=="/"
}
return!0
}
)()?f:void 0
}
function sn(n){
return!!(n!=null&&n.isNotFound)
}
const yl="tsr-scroll-restoration-v1_3";
let Nm=!1;
try{
Nm=typeof window<"u"&&typeof window.sessionStorage=="object"
}
catch{

}
const B_=(n,r)=>{
let i;
return(...o)=>{
i||(i=setTimeout(()=>{
n(...o),i=null
}
,r))
}

}
,Ki=Nm?{
state:JSON.parse(window.sessionStorage.getItem(yl)||"null")||{

}
,set:r=>(Ki.state=ei(r,Ki.state)||Ki.state,window.sessionStorage.setItem(yl,JSON.stringify(Ki.state)))
}
:void 0,sd=n=>n.state.key||n.href;
function U_(n){
const r=[];
let i;
for(;
i=n.parentNode;
)r.unshift(`${
n.tagName
}
:nth-child(${
[].indexOf.call(i.children,n)+1
}
)`),n=i;
return`${
r.join(" > ")
}
`.toLowerCase()
}
let vl=!1;
function Dm(n,r,i,o,l){
var c;
let f;
try{
f=JSON.parse(sessionStorage.getItem(n)||"{

}
")
}
catch(m){
console.error(m);
return
}
const h=r||((c=window.history.state)==null?void 0:c.key),y=f[h];
vl=!0,(()=>{
if(o&&y){
for(const w in y){
const g=y[w];
if(w==="window")window.scrollTo({
top:g.scrollY,left:g.scrollX,behavior:i
}
);
else if(w){
const x=document.querySelector(w);
x&&(x.scrollLeft=g.scrollX,x.scrollTop=g.scrollY)
}

}
return
}
const m=window.location.hash.split("#")[1];
if(m){
const w=(window.history.state||{

}
).__hashScrollIntoViewOptions??!0;
if(w){
const g=document.getElementById(m);
g&&g.scrollIntoView(w)
}
return
}
["window",...(l==null?void 0:l.filter(w=>w!=="window"))??[]].forEach(w=>{
const g=w==="window"?window:document.querySelector(w);
g&&g.scrollTo({
top:0,left:0,behavior:i
}
)
}
)
}
)(),vl=!1
}
function z_(n,r){
if((n.options.scrollRestoration??!1)&&(n.isScrollRestoring=!0),typeof document>"u"||n.isScrollRestorationSetup)return;
n.isScrollRestorationSetup=!0,vl=!1;
const o=n.options.getScrollRestorationKey||sd;
window.history.scrollRestoration="manual";
const l=c=>{
if(vl||!n.isScrollRestoring)return;
let f="";
if(c.target===document||c.target===window)f="window";
else{
const y=c.target.getAttribute("data-scroll-restoration-id");
y?f=`[data-scroll-restoration-id="${
y
}
"]`:f=U_(c.target)
}
const h=o(n.state.location);
Ki.set(y=>{
const m=y[h]=y[h]||{

}
,w=m[f]=m[f]||{

}
;
if(f==="window")w.scrollX=window.scrollX||0,w.scrollY=window.scrollY||0;
else if(f){
const g=document.querySelector(f);
g&&(w.scrollX=g.scrollLeft||0,w.scrollY=g.scrollTop||0)
}
return y
}
)
}
;
typeof document<"u"&&document.addEventListener("scroll",B_(l,100),!0),n.subscribe("onRendered",c=>{
const f=o(c.toLocation);
if(!n.resetNextScroll){
n.resetNextScroll=!0;
return
}
Dm(yl,f,n.options.scrollRestorationBehavior||void 0,n.isScrollRestoring||void 0,n.options.scrollToTopSelectors||void 0),n.isScrollRestoring&&Ki.set(h=>(h[f]=h[f]||{

}
,h))
}
)
}
function $_(n){
if(typeof document<"u"&&document.querySelector){
const r=n.state.location.state.__hashScrollIntoViewOptions??!0;
if(r&&n.state.location.hash!==""){
const i=document.getElementById(n.state.location.hash);
i&&i.scrollIntoView(r)
}

}

}
function V_(n,r){
const i=Object.entries(n).flatMap(([l,c])=>Array.isArray(c)?c.map(f=>[l,String(f)]):[[l,String(c)]]);
return""+new URLSearchParams(i).toString()
}
function Rc(n){
if(!n)return"";
const r=b_(n)?decodeURIComponent(n):decodeURIComponent(encodeURIComponent(n));
return r==="false"?!1:r==="true"?!0:+r*0===0&&+r+""===r?+r:r
}
function q_(n,r){
const i=n;
return[...new URLSearchParams(i).entries()].reduce((c,[f,h])=>{
const y=c[f];
return y==null?c[f]=Rc(h):c[f]=Array.isArray(y)?[...y,Rc(h)]:[y,Rc(h)],c
}
,{

}
)
}
const Q_=H_(JSON.parse),Z_=W_(JSON.stringify,JSON.parse);
function H_(n){
return r=>{
r.substring(0,1)==="?"&&(r=r.substring(1));
const i=q_(r);
for(const o in i){
const l=i[o];
if(typeof l=="string")try{
i[o]=n(l)
}
catch{

}

}
return i
}

}
function W_(n,r){
function i(o){
if(typeof o=="object"&&o!==null)try{
return n(o)
}
catch{

}
else if(typeof o=="string"&&typeof r=="function")try{
return r(o),n(o)
}
catch{

}
return o
}
return o=>{
o={
...o
}
,Object.keys(o).forEach(c=>{
const f=o[c];
typeof f>"u"||f===void 0?delete o[c]:o[c]=i(f)
}
);
const l=V_(o).toString();
return l?`?${
l
}
`:""
}

}
const mn="__root__";
function Xr(n){
return!!(n!=null&&n.isRedirect)
}
function Ec(n){
return!!(n!=null&&n.isRedirect)&&n.href
}
function di(n){
const r=n.resolvedLocation,i=n.location,o=(r==null?void 0:r.pathname)!==i.pathname,l=(r==null?void 0:r.href)!==i.href,c=(r==null?void 0:r.hash)!==i.hash;
return{
fromLocation:r,toLocation:i,pathChanged:o,hrefChanged:l,hashChanged:c
}

}
class K_{
constructor(r){
this.tempLocationKey=`${
Math.round(Math.random()*1e7)
}
`,this.resetNextScroll=!0,this.shouldViewTransition=void 0,this.isViewTransitionTypesSupported=void 0,this.subscribers=new Set,this.isScrollRestoring=!1,this.isScrollRestorationSetup=!1,this.startTransition=i=>i(),this.update=i=>{
var o;
i.notFoundRoute&&console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");
const l=this.options;
this.options={
...this.options,...i
}
,this.isServer=this.options.isServer??typeof document>"u",this.pathParamsDecodeCharMap=this.options.pathParamsAllowedCharacters?new Map(this.options.pathParamsAllowedCharacters.map(c=>[encodeURIComponent(c),c])):void 0,(!this.basepath||i.basepath&&i.basepath!==l.basepath)&&(i.basepath===void 0||i.basepath===""||i.basepath==="/"?this.basepath="/":this.basepath=`/${
M_(i.basepath)
}
`),(!this.history||this.options.history&&this.options.history!==this.history)&&(this.history=this.options.history??(this.isServer?O_({
initialEntries:[this.basepath||"/"]
}
):L_()),this.latestLocation=this.parseLocation()),this.options.routeTree!==this.routeTree&&(this.routeTree=this.options.routeTree,this.buildRouteTree()),this.__store||(this.__store=new nd(J_(this.latestLocation),{
onUpdate:()=>{
this.__store.state={
...this.state,cachedMatches:this.state.cachedMatches.filter(c=>!["redirected"].includes(c.status))
}

}

}
),z_(this)),typeof window<"u"&&"CSS"in window&&typeof((o=window.CSS)==null?void 0:o.supports)=="function"&&(this.isViewTransitionTypesSupported=window.CSS.supports("selector(:active-view-transition-type(a)"))
}
,this.buildRouteTree=()=>{
this.routesById={

}
,this.routesByPath={

}
;
const i=this.options.notFoundRoute;
i&&(i.init({
originalIndex:99999999999,defaultSsr:this.options.defaultSsr
}
),this.routesById[i.id]=i);
const o=f=>{
f.forEach((h,y)=>{
h.init({
originalIndex:y,defaultSsr:this.options.defaultSsr
}
);
const m=this.routesById[h.id];
if(Jn(!m,`Duplicate routes found with id: ${
String(h.id)
}
`),this.routesById[h.id]=h,!h.isRoot&&h.path){
const g=ti(h.fullPath);
(!this.routesByPath[g]||h.fullPath.endsWith("/"))&&(this.routesByPath[g]=h)
}
const w=h.children;
w!=null&&w.length&&o(w)
}
)
}
;
o([this.routeTree]);
const l=[];
Object.values(this.routesById).forEach((f,h)=>{
var y;
if(f.isRoot||!f.path)return;
const m=pd(f.fullPath),w=gs(m);
for(;
w.length>1&&((y=w[0])==null?void 0:y.value)==="/";
)w.shift();
const g=w.map(x=>x.value==="/"?.75:x.type==="param"?.5:x.type==="wildcard"?.25:1);
l.push({
child:f,trimmed:m,parsed:w,index:h,scores:g
}
)
}
),this.flatRoutes=l.sort((f,h)=>{
const y=Math.min(f.scores.length,h.scores.length);
for(let m=0;
m<y;
m++)if(f.scores[m]!==h.scores[m])return h.scores[m]-f.scores[m];
if(f.scores.length!==h.scores.length)return h.scores.length-f.scores.length;
for(let m=0;
m<y;
m++)if(f.parsed[m].value!==h.parsed[m].value)return f.parsed[m].value>h.parsed[m].value?1:-1;
return f.index-h.index
}
).map((f,h)=>(f.child.rank=h,f.child))
}
,this.subscribe=(i,o)=>{
const l={
eventType:i,fn:o
}
;
return this.subscribers.add(l),()=>{
this.subscribers.delete(l)
}

}
,this.emit=i=>{
this.subscribers.forEach(o=>{
o.eventType===i.type&&o.fn(i)
}
)
}
,this.parseLocation=(i,o)=>{
const l=({
pathname:y,search:m,hash:w,state:g
}
)=>{
const x=this.options.parseSearch(m),L=this.options.stringifySearch(x);
return{
pathname:y,searchStr:L,search:nn(i==null?void 0:i.search,x),hash:w.split("#").reverse()[0]??"",href:`${
y
}
${
L
}
${
w
}
`,state:nn(i==null?void 0:i.state,g)
}

}
,c=l(o??this.history.location),{
__tempLocation:f,__tempKey:h
}
=c.state;
if(f&&(!h||h===this.tempLocationKey)){
const y=l(f);
return y.state.key=c.state.key,delete y.state.__tempLocation,{
...y,maskedLocation:c
}

}
return c
}
,this.resolvePathWithBase=(i,o)=>N_({
basepath:this.basepath,base:i,to:kl(o),trailingSlash:this.options.trailingSlash,caseSensitive:this.options.caseSensitive
}
),this.matchRoutes=(i,o,l)=>typeof i=="string"?this.matchRoutesInternal({
pathname:i,search:o
}
,l):this.matchRoutesInternal(i,o),this.getMatchedRoutes=(i,o)=>{
let l={

}
;
const c=ti(i.pathname),f=w=>Ja(this.basepath,c,{
to:w.fullPath,caseSensitive:w.options.caseSensitive??this.options.caseSensitive,fuzzy:!0
}
);
let h=(o==null?void 0:o.to)!==void 0?this.routesByPath[o.to]:void 0;
h?l=f(h):h=this.flatRoutes.find(w=>{
const g=f(w);
return g?(l=g,!0):!1
}
);
let y=h||this.routesById[mn];
const m=[y];
for(;
y.parentRoute;
)y=y.parentRoute,m.unshift(y);
return{
matchedRoutes:m,routeParams:l,foundRoute:h
}

}
,this.cancelMatch=i=>{
const o=this.getMatch(i);
o&&(o.abortController.abort(),clearTimeout(o.pendingTimeout))
}
,this.cancelMatches=()=>{
var i;
(i=this.state.pendingMatches)==null||i.forEach(o=>{
this.cancelMatch(o.id)
}
)
}
,this.buildLocation=i=>{
const o=(c={

}
,f)=>{
var h,y,m,w,g,x,L;
const F=c._fromLocation?this.matchRoutes(c._fromLocation,{
_buildLocation:!0
}
):this.state.matches,E=c.from!=null?F.find(ne=>Ja(this.basepath,ti(ne.pathname),{
to:c.from,caseSensitive:!1,fuzzy:!1
}
)):void 0,D=(E==null?void 0:E.pathname)||this.latestLocation.pathname;
Jn(c.from==null||E!=null,"Could not find match for from: "+c.from);
const Z=(h=this.state.pendingMatches)!=null&&h.length?(y=Wi(this.state.pendingMatches))==null?void 0:y.search:((m=Wi(F))==null?void 0:m.search)||this.latestLocation.search,X=f==null?void 0:f.matchedRoutes.filter(ne=>F.find(se=>se.routeId===ne.id));
let K;
if(c.to){
const ne=(E==null?void 0:E.fullPath)||((w=Wi(F))==null?void 0:w.fullPath)||this.latestLocation.pathname;
K=this.resolvePathWithBase(ne,`${
c.to
}
`)
}
else{
const ne=this.routesById[(g=X==null?void 0:X.find(se=>{
const ee=Ga({
path:se.fullPath,params:(f==null?void 0:f.routeParams)??{

}
,decodeCharMap:this.pathParamsDecodeCharMap
}
).interpolatedPath;
return Yn([this.basepath,ee])===D
}
))==null?void 0:g.id];
K=this.resolvePathWithBase(D,(ne==null?void 0:ne.to)??D)
}
const ae={
...(x=Wi(F))==null?void 0:x.params
}
;
let we=(c.params??!0)===!0?ae:{
...ae,...ei(c.params,ae)
}
;
Object.keys(we).length>0&&(f==null||f.matchedRoutes.map(ne=>{
var se;
return((se=ne.options.params)==null?void 0:se.stringify)??ne.options.stringifyParams
}
).filter(Boolean).forEach(ne=>{
we={
...we,...ne(we)
}

}
)),K=Ga({
path:K,params:we??{

}
,leaveWildcards:!1,leaveParams:i.leaveParams,decodeCharMap:this.pathParamsDecodeCharMap
}
).interpolatedPath;
let $=Z;
if(i._includeValidateSearch&&((L=this.options.search)!=null&&L.strict)){
let ne={

}
;
f==null||f.matchedRoutes.forEach(se=>{
try{
se.options.validateSearch&&(ne={
...ne,...Tc(se.options.validateSearch,{
...ne,...$
}
)??{

}

}
)
}
catch{

}

}
),$=ne
}
$=(ne=>{
const se=(f==null?void 0:f.matchedRoutes.reduce((A,z)=>{
var I;
const U=[];
if("search"in z.options)(I=z.options.search)!=null&&I.middlewares&&U.push(...z.options.search.middlewares);
else if(z.options.preSearchFilters||z.options.postSearchFilters){
const N=({
search:k,next:M
}
)=>{
let te=k;
"preSearchFilters"in z.options&&z.options.preSearchFilters&&(te=z.options.preSearchFilters.reduce((me,_e)=>_e(me),k));
const ie=M(te);
return"postSearchFilters"in z.options&&z.options.postSearchFilters?z.options.postSearchFilters.reduce((me,_e)=>_e(me),ie):ie
}
;
U.push(N)
}
if(i._includeValidateSearch&&z.options.validateSearch){
const N=({
search:k,next:M
}
)=>{
const te=M(k);
try{
return{
...te,...Tc(z.options.validateSearch,te)??{

}

}

}
catch{
return te
}

}
;
U.push(N)
}
return A.concat(U)
}
,[]))??[],ee=({
search:A
}
)=>c.search?c.search===!0?A:ei(c.search,A):{

}
;
se.push(ee);
const B=(A,z)=>{
if(A>=se.length)return z;
const I=se[A];
return I({
search:z,next:N=>B(A+1,N)
}
)
}
;
return B(0,ne)
}
)($),$=nn(Z,$);
const b=this.options.stringifySearch($),O=c.hash===!0?this.latestLocation.hash:c.hash?ei(c.hash,this.latestLocation.hash):void 0,Q=O?`#${
O
}
`:"";
let J=c.state===!0?this.latestLocation.state:c.state?ei(c.state,this.latestLocation.state):{

}
;
return J=nn(this.latestLocation.state,J),{
pathname:K,search:$,searchStr:b,state:J,hash:O??"",href:`${
K
}
${
b
}
${
Q
}
`,unmaskOnReload:c.unmaskOnReload
}

}
,l=(c={

}
,f)=>{
var h;
const y=o(c);
let m=f?o(f):void 0;
if(!m){
let x={

}
;
const L=(h=this.options.routeMasks)==null?void 0:h.find(F=>{
const E=Ja(this.basepath,y.pathname,{
to:F.from,caseSensitive:!1,fuzzy:!1
}
);
return E?(x=E,!0):!1
}
);
if(L){
const{
from:F,...E
}
=L;
f={
...id(i,["from"]),...E,params:x
}
,m=o(f)
}

}
const w=this.getMatchedRoutes(y,c),g=o(c,w);
if(m){
const x=this.getMatchedRoutes(m,f),L=o(f,x);
g.maskedLocation=L
}
return g
}
;
return i.mask?l(i,{
...id(i,["from"]),...i.mask
}
):l(i)
}
,this.commitLocation=({
viewTransition:i,ignoreBlocker:o,...l
}
)=>{
const c=()=>{
const y=["key","__TSR_index","__hashScrollIntoViewOptions"];
y.forEach(w=>{
l.state[w]=this.latestLocation.state[w]
}
);
const m=es(l.state,this.latestLocation.state);
return y.forEach(w=>{
delete l.state[w]
}
),m
}
,f=this.latestLocation.href===l.href,h=this.commitLocationPromise;
if(this.commitLocationPromise=Zi(()=>{
h==null||h.resolve()
}
),f&&c())this.load();
else{
let{
maskedLocation:y,hashScrollIntoView:m,...w
}
=l;
y&&(w={
...y,state:{
...y.state,__tempKey:void 0,__tempLocation:{
...w,search:w.searchStr,state:{
...w.state,__tempKey:void 0,__tempLocation:void 0,key:void 0
}

}

}

}
,(w.unmaskOnReload??this.options.unmaskOnReload??!1)&&(w.state.__tempKey=this.tempLocationKey)),w.state.__hashScrollIntoViewOptions=m??this.options.defaultHashScrollIntoView??!0,this.shouldViewTransition=i,this.history[l.replace?"replace":"push"](w.href,w.state,{
ignoreBlocker:o
}
)
}
return this.resetNextScroll=l.resetScroll??!0,this.history.subscribers.size||this.load(),this.commitLocationPromise
}
,this.buildAndCommitLocation=({
replace:i,resetScroll:o,hashScrollIntoView:l,viewTransition:c,ignoreBlocker:f,href:h,...y
}
={

}
)=>{
if(h){
const w=this.history.location.state.__TSR_index,g=Io(h,{
__TSR_index:i?w:w+1
}
);
y.to=g.pathname,y.search=this.options.parseSearch(g.search),y.hash=g.hash.slice(1)
}
const m=this.buildLocation({
...y,_includeValidateSearch:!0
}
);
return this.commitLocation({
...m,viewTransition:c,replace:i,resetScroll:o,hashScrollIntoView:l,ignoreBlocker:f
}
)
}
,this.navigate=({
to:i,reloadDocument:o,href:l,...c
}
)=>{
if(o){
if(!l){
const f=this.buildLocation({
to:i,...c
}
);
l=this.history.createHref(f.href)
}
c.replace?window.location.replace(l):window.location.href=l;
return
}
return this.buildAndCommitLocation({
...c,href:l,to:i
}
)
}
,this.load=async i=>{
this.latestLocation=this.parseLocation(this.latestLocation);
let o,l,c;
for(c=new Promise(f=>{
this.startTransition(async()=>{
var h;
try{
const y=this.latestLocation,m=this.state.resolvedLocation;
this.cancelMatches();
let w;
Pc(()=>{
w=this.matchRoutes(y),this.__store.setState(g=>({
...g,status:"pending",isLoading:!0,location:y,pendingMatches:w,cachedMatches:g.cachedMatches.filter(x=>!w.find(L=>L.id===x.id))
}
))
}
),this.state.redirect||this.emit({
type:"onBeforeNavigate",...di({
resolvedLocation:m,location:y
}
)
}
),this.emit({
type:"onBeforeLoad",...di({
resolvedLocation:m,location:y
}
)
}
),await this.loadMatches({
sync:i==null?void 0:i.sync,matches:w,location:y,onReady:async()=>{
this.startViewTransition(async()=>{
let g,x,L;
Pc(()=>{
this.__store.setState(F=>{
const E=F.matches,D=F.pendingMatches||F.matches;
return g=E.filter(Z=>!D.find(X=>X.id===Z.id)),x=D.filter(Z=>!E.find(X=>X.id===Z.id)),L=E.filter(Z=>D.find(X=>X.id===Z.id)),{
...F,isLoading:!1,loadedAt:Date.now(),matches:D,pendingMatches:void 0,cachedMatches:[...F.cachedMatches,...g.filter(Z=>Z.status!=="error")]
}

}
),this.clearExpiredCache()
}
),[[g,"onLeave"],[x,"onEnter"],[L,"onStay"]].forEach(([F,E])=>{
F.forEach(D=>{
var Z,X;
(X=(Z=this.looseRoutesById[D.routeId].options)[E])==null||X.call(Z,D)
}
)
}
)
}
)
}

}
)
}
catch(y){
Ec(y)?(o=y,this.isServer||this.navigate({
...o,replace:!0,ignoreBlocker:!0
}
)):sn(y)&&(l=y),this.__store.setState(m=>({
...m,statusCode:o?o.statusCode:l?404:m.matches.some(w=>w.status==="error")?500:200,redirect:o
}
))
}
this.latestLoadPromise===c&&((h=this.commitLocationPromise)==null||h.resolve(),this.latestLoadPromise=void 0,this.commitLocationPromise=void 0),f()
}
)
}
),this.latestLoadPromise=c,await c;
this.latestLoadPromise&&c!==this.latestLoadPromise;
)await this.latestLoadPromise;
this.hasNotFoundMatch()&&this.__store.setState(f=>({
...f,statusCode:404
}
))
}
,this.startViewTransition=i=>{
const o=this.shouldViewTransition??this.options.defaultViewTransition;
if(delete this.shouldViewTransition,o&&typeof document<"u"&&"startViewTransition"in document&&typeof document.startViewTransition=="function"){
let l;
if(typeof o=="object"&&this.isViewTransitionTypesSupported){
const c=this.latestLocation,f=this.state.resolvedLocation,h=typeof o.types=="function"?o.types(di({
resolvedLocation:f,location:c
}
)):o.types;
l={
update:i,types:h
}

}
else l=i;
document.startViewTransition(l)
}
else i()
}
,this.updateMatch=(i,o)=>{
var l;
let c;
const f=(l=this.state.pendingMatches)==null?void 0:l.find(w=>w.id===i),h=this.state.matches.find(w=>w.id===i),y=this.state.cachedMatches.find(w=>w.id===i),m=f?"pendingMatches":h?"matches":y?"cachedMatches":"";
return m&&this.__store.setState(w=>{
var g;
return{
...w,[m]:(g=w[m])==null?void 0:g.map(x=>x.id===i?c=o(x):x)
}

}
),c
}
,this.getMatch=i=>[...this.state.cachedMatches,...this.state.pendingMatches??[],...this.state.matches].find(o=>o.id===i),this.loadMatches=async({
location:i,matches:o,preload:l,onReady:c,updateMatch:f=this.updateMatch,sync:h
}
)=>{
let y,m=!1;
const w=async()=>{
m||(m=!0,await(c==null?void 0:c()))
}
,g=L=>!!(l&&!this.state.matches.find(F=>F.id===L)),x=(L,F)=>{
var E,D,Z,X;
if(Ec(F)&&!F.reloadDocument)throw F;
if(Xr(F)||sn(F)){
if(f(L.id,K=>({
...K,status:Xr(F)?"redirected":sn(F)?"notFound":"error",isFetching:!1,error:F,beforeLoadPromise:void 0,loaderPromise:void 0
}
)),F.routeId||(F.routeId=L.routeId),(E=L.beforeLoadPromise)==null||E.resolve(),(D=L.loaderPromise)==null||D.resolve(),(Z=L.loadPromise)==null||Z.resolve(),Xr(F))throw m=!0,F=this.resolveRedirect({
...F,_fromLocation:i
}
),F;
if(sn(F))throw this._handleNotFound(o,F,{
updateMatch:f
}
),(X=this.serverSsr)==null||X.onMatchSettled({
router:this,match:this.getMatch(L.id)
}
),F
}

}
;
try{
await new Promise((L,F)=>{
(async()=>{
var E,D,Z,X;
try{
const K=($,oe,b)=>{
var O,Q;
const{
id:J,routeId:ne
}
=o[$],se=this.looseRoutesById[ne];
if(oe instanceof Promise)throw oe;
oe.routerCode=b,y=y??$,x(this.getMatch(J),oe);
try{
(Q=(O=se.options).onError)==null||Q.call(O,oe)
}
catch(ee){
oe=ee,x(this.getMatch(J),oe)
}
f(J,ee=>{
var B,A;
return(B=ee.beforeLoadPromise)==null||B.resolve(),(A=ee.loadPromise)==null||A.resolve(),{
...ee,error:oe,status:"error",isFetching:!1,updatedAt:Date.now(),abortController:new AbortController,beforeLoadPromise:void 0
}

}
)
}
;
for(const[$,{
id:oe,routeId:b
}
]of o.entries()){
const O=this.getMatch(oe),Q=(E=o[$-1])==null?void 0:E.id,J=this.looseRoutesById[b],ne=J.options.pendingMs??this.options.defaultPendingMs,se=!!(c&&!this.isServer&&!g(oe)&&(J.options.loader||J.options.beforeLoad||Np(J))&&typeof ne=="number"&&ne!==1/0&&(J.options.pendingComponent??((D=this.options)==null?void 0:D.defaultPendingComponent)));
let ee=!0;
if((O.beforeLoadPromise||O.loaderPromise)&&(se&&setTimeout(()=>{
try{
w()
}
catch{

}

}
,ne),await O.beforeLoadPromise,ee=this.getMatch(oe).status!=="success"),ee){
try{
f(oe,Pe=>{
const ye=Pe.loadPromise;
return{
...Pe,loadPromise:Zi(()=>{
ye==null||ye.resolve()
}
),beforeLoadPromise:Zi()
}

}
);
const B=new AbortController;
let A;
se&&(A=setTimeout(()=>{
try{
w()
}
catch{

}

}
,ne));
const{
paramsError:z,searchError:I
}
=this.getMatch(oe);
z&&K($,z,"PARSE_PARAMS"),I&&K($,I,"VALIDATE_SEARCH");
const U=()=>Q?this.getMatch(Q).context:this.options.context??{

}
;
f(oe,Pe=>({
...Pe,isFetching:"beforeLoad",fetchCount:Pe.fetchCount+1,abortController:B,pendingTimeout:A,context:{
...U(),...Pe.__routeContext
}

}
));
const{
search:N,params:k,context:M,cause:te
}
=this.getMatch(oe),ie=g(oe),me={
search:N,abortController:B,params:k,preload:ie,context:M,location:i,navigate:Pe=>this.navigate({
...Pe,_fromLocation:i
}
),buildLocation:this.buildLocation,cause:ie?"preload":te,matches:o
}
,_e=await((X=(Z=J.options).beforeLoad)==null?void 0:X.call(Z,me))??{

}
;
(Xr(_e)||sn(_e))&&K($,_e,"BEFORE_LOAD"),f(oe,Pe=>({
...Pe,__beforeLoadContext:_e,context:{
...U(),...Pe.__routeContext,..._e
}
,abortController:B
}
))
}
catch(B){
K($,B,"BEFORE_LOAD")
}
f(oe,B=>{
var A;
return(A=B.beforeLoadPromise)==null||A.resolve(),{
...B,beforeLoadPromise:void 0,isFetching:!1
}

}
)
}

}
const ae=o.slice(0,y),we=[];
ae.forEach(({
id:$,routeId:oe
}
,b)=>{
we.push((async()=>{
const{
loaderPromise:O
}
=this.getMatch($);
let Q=!1,J=!1;
if(O){
await O;
const ne=this.getMatch($);
ne.error&&x(ne,ne.error)
}
else{
const ne=we[b-1],se=this.looseRoutesById[oe],ee=()=>{
const{
params:te,loaderDeps:ie,abortController:me,context:_e,cause:Pe
}
=this.getMatch($),ye=g($);
return{
params:te,deps:ie,preload:!!ye,parentMatchPromise:ne,abortController:me,context:_e,location:i,navigate:Re=>this.navigate({
...Re,_fromLocation:i
}
),cause:ye?"preload":Pe,route:se
}

}
,B=Date.now()-this.getMatch($).updatedAt,A=g($),z=A?se.options.preloadStaleTime??this.options.defaultPreloadStaleTime??3e4:se.options.staleTime??this.options.defaultStaleTime??0,I=se.options.shouldReload,U=typeof I=="function"?I(ee()):I;
f($,te=>({
...te,loaderPromise:Zi(),preload:!!A&&!this.state.matches.find(ie=>ie.id===$)
}
));
const N=async()=>{
var te,ie,me,_e,Pe,ye,Re,Ae,Je,_t,kt;
try{
const Ft=async()=>{
const rt=this.getMatch($);
rt.minPendingPromise&&await rt.minPendingPromise
}
;
try{
this.loadRouteChunk(se),f($,kn=>({
...kn,isFetching:"loader"
}
));
const rt=await((ie=(te=se.options).loader)==null?void 0:ie.call(te,ee()));
x(this.getMatch($),rt),await se._lazyPromise,await Ft();
const vt={
matches:o,match:this.getMatch($),params:this.getMatch($).params,loaderData:rt
}
,it=(_e=(me=se.options).head)==null?void 0:_e.call(me,vt),Mn=it==null?void 0:it.meta,tr=it==null?void 0:it.links,_n=it==null?void 0:it.scripts,Be=(ye=(Pe=se.options).scripts)==null?void 0:ye.call(Pe,vt),Ze=(Ae=(Re=se.options).headers)==null?void 0:Ae.call(Re,{
loaderData:rt
}
);
await se._componentsPromise,f($,kn=>({
...kn,error:void 0,status:"success",isFetching:!1,updatedAt:Date.now(),loaderData:rt,meta:Mn,links:tr,headScripts:_n,headers:Ze,scripts:Be
}
))
}
catch(rt){
let vt=rt;
await Ft(),x(this.getMatch($),rt);
try{
(_t=(Je=se.options).onError)==null||_t.call(Je,rt)
}
catch(it){
vt=it,x(this.getMatch($),it)
}
f($,it=>({
...it,error:vt,status:"error",isFetching:!1
}
))
}
(kt=this.serverSsr)==null||kt.onMatchSettled({
router:this,match:this.getMatch($)
}
)
}
catch(Ft){
f($,rt=>({
...rt,loaderPromise:void 0
}
)),x(this.getMatch($),Ft)
}

}
,{
status:k,invalid:M
}
=this.getMatch($);
Q=k==="success"&&(M||(U??B>z)),A&&se.options.preload===!1||(Q&&!h?(J=!0,(async()=>{
try{
await N();
const{
loaderPromise:te,loadPromise:ie
}
=this.getMatch($);
te==null||te.resolve(),ie==null||ie.resolve(),f($,me=>({
...me,loaderPromise:void 0
}
))
}
catch(te){
Ec(te)&&await this.navigate(te)
}

}
)()):(k!=="success"||Q&&h)&&await N())
}
if(!J){
const{
loaderPromise:ne,loadPromise:se
}
=this.getMatch($);
ne==null||ne.resolve(),se==null||se.resolve()
}
return f($,ne=>({
...ne,isFetching:J?ne.isFetching:!1,loaderPromise:J?ne.loaderPromise:void 0,invalid:!1
}
)),this.getMatch($)
}
)())
}
),await Promise.all(we),L()
}
catch(K){
F(K)
}

}
)()
}
),await w()
}
catch(L){
if(Xr(L)||sn(L))throw sn(L)&&!l&&await w(),L
}
return o
}
,this.invalidate=i=>{
const o=l=>{
var c;
return((c=i==null?void 0:i.filter)==null?void 0:c.call(i,l))??!0?{
...l,invalid:!0,...l.status==="error"?{
status:"pending",error:void 0
}
:{

}

}
:l
}
;
return this.__store.setState(l=>{
var c;
return{
...l,matches:l.matches.map(o),cachedMatches:l.cachedMatches.map(o),pendingMatches:(c=l.pendingMatches)==null?void 0:c.map(o)
}

}
),this.load({
sync:i==null?void 0:i.sync
}
)
}
,this.resolveRedirect=i=>{
const o=i;
return o.href||(o.href=this.buildLocation(o).href),o
}
,this.clearCache=i=>{
const o=i==null?void 0:i.filter;
o!==void 0?this.__store.setState(l=>({
...l,cachedMatches:l.cachedMatches.filter(c=>!o(c))
}
)):this.__store.setState(l=>({
...l,cachedMatches:[]
}
))
}
,this.clearExpiredCache=()=>{
const i=o=>{
const l=this.looseRoutesById[o.routeId];
if(!l.options.loader)return!0;
const c=(o.preload?l.options.preloadGcTime??this.options.defaultPreloadGcTime:l.options.gcTime??this.options.defaultGcTime)??5*60*1e3;
return!(o.status!=="error"&&Date.now()-o.updatedAt<c)
}
;
this.clearCache({
filter:i
}
)
}
,this.loadRouteChunk=i=>(i._lazyPromise===void 0&&(i.lazyFn?i._lazyPromise=i.lazyFn().then(o=>{
const{
id:l,...c
}
=o.options;
Object.assign(i.options,c)
}
):i._lazyPromise=Promise.resolve()),i._componentsPromise===void 0&&(i._componentsPromise=i._lazyPromise.then(()=>Promise.all(Am.map(async o=>{
const l=i.options[o];
l!=null&&l.preload&&await l.preload()
}
)))),i._componentsPromise),this.preloadRoute=async i=>{
const o=this.buildLocation(i);
let l=this.matchRoutes(o,{
throwOnError:!0,preload:!0,dest:i
}
);
const c=new Set([...this.state.matches,...this.state.pendingMatches??[]].map(h=>h.id)),f=new Set([...c,...this.state.cachedMatches.map(h=>h.id)]);
Pc(()=>{
l.forEach(h=>{
f.has(h.id)||this.__store.setState(y=>({
...y,cachedMatches:[...y.cachedMatches,h]
}
))
}
)
}
);
try{
return l=await this.loadMatches({
matches:l,location:o,preload:!0,updateMatch:(h,y)=>{
c.has(h)?l=l.map(m=>m.id===h?y(m):m):this.updateMatch(h,y)
}

}
),l
}
catch(h){
if(Xr(h))return h.reloadDocument?void 0:await this.preloadRoute({
...h,_fromLocation:o
}
);
sn(h)||console.error(h);
return
}

}
,this.matchRoute=(i,o)=>{
const l={
...i,to:i.to?this.resolvePathWithBase(i.from||"",i.to):void 0,params:i.params||{

}
,leaveParams:!0
}
,c=this.buildLocation(l);
if(o!=null&&o.pending&&this.state.status!=="pending")return!1;
const h=((o==null?void 0:o.pending)===void 0?!this.state.isLoading:o.pending)?this.latestLocation:this.state.resolvedLocation||this.state.location,y=Ja(this.basepath,h.pathname,{
...o,to:c.pathname
}
);
return!y||i.params&&!es(y,i.params,{
partial:!0
}
)?!1:y&&((o==null?void 0:o.includeSearch)??!0)?es(h.search,c.search,{
partial:!0
}
)?y:!1:y
}
,this._handleNotFound=(i,o,{
updateMatch:l=this.updateMatch
}
={

}
)=>{
var c;
const f=this.routesById[o.routeId??""]??this.routeTree,h={

}
;
for(const m of i)h[m.routeId]=m;
!f.options.notFoundComponent&&((c=this.options)!=null&&c.defaultNotFoundComponent)&&(f.options.notFoundComponent=this.options.defaultNotFoundComponent),Jn(f.options.notFoundComponent);
const y=h[f.id];
Jn(y,"Could not find match for route: "+f.id),l(y.id,m=>({
...m,status:"notFound",error:o,isFetching:!1
}
)),o.routerCode==="BEFORE_LOAD"&&f.parentRoute&&(o.routeId=f.parentRoute.id,this._handleNotFound(i,o,{
updateMatch:l
}
))
}
,this.hasNotFoundMatch=()=>this.__store.state.matches.some(i=>i.status==="notFound"||i.globalNotFound),this.update({
defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...r,caseSensitive:r.caseSensitive??!1,notFoundMode:r.notFoundMode??"fuzzy",stringifySearch:r.stringifySearch??Z_,parseSearch:r.parseSearch??Q_
}
),typeof document<"u"&&(window.__TSR_ROUTER__=this)
}
get state(){
return this.__store.state
}
get looseRoutesById(){
return this.routesById
}
matchRoutesInternal(r,i){
const{
foundRoute:o,matchedRoutes:l,routeParams:c
}
=this.getMatchedRoutes(r,i==null?void 0:i.dest);
let f=!1;
(o?o.path!=="/"&&c["**"]:ti(r.pathname))&&(this.options.notFoundRoute?l.push(this.options.notFoundRoute):f=!0);
const h=(()=>{
if(f){
if(this.options.notFoundMode!=="root")for(let g=l.length-1;
g>=0;
g--){
const x=l[g];
if(x.children)return x.id
}
return mn
}

}
)(),y=l.map(g=>{
var x;
let L;
const F=((x=g.options.params)==null?void 0:x.parse)??g.options.parseParams;
if(F)try{
const E=F(c);
Object.assign(c,E)
}
catch(E){
if(L=new G_(E.message,{
cause:E
}
),i!=null&&i.throwOnError)throw L;
return L
}

}
),m=[],w=g=>(g==null?void 0:g.id)?g.context??this.options.context??{

}
:this.options.context??{

}
;
return l.forEach((g,x)=>{
var L,F;
const E=m[x-1],[D,Z,X]=(()=>{
const se=(E==null?void 0:E.search)??r.search,ee=(E==null?void 0:E._strictSearch)??{

}
;
try{
const B=Tc(g.options.validateSearch,{
...se
}
)??{

}
;
return[{
...se,...B
}
,{
...ee,...B
}
,void 0]
}
catch(B){
let A=B;
if(B instanceof gl||(A=new gl(B.message,{
cause:B
}
)),i!=null&&i.throwOnError)throw A;
return[se,{

}
,A]
}

}
)(),K=((F=(L=g.options).loaderDeps)==null?void 0:F.call(L,{
search:D
}
))??"",ae=K?JSON.stringify(K):"",{
usedParams:we,interpolatedPath:$
}
=Ga({
path:g.fullPath,params:c,decodeCharMap:this.pathParamsDecodeCharMap
}
),oe=Ga({
path:g.id,params:c,leaveWildcards:!0,decodeCharMap:this.pathParamsDecodeCharMap
}
).interpolatedPath+ae,b=this.getMatch(oe),O=this.state.matches.find(se=>se.routeId===g.id),Q=O?"stay":"enter";
let J;
if(b)J={
...b,cause:Q,params:O?nn(O.params,c):c,_strictParams:we,search:nn(O?O.search:b.search,D),_strictSearch:Z
}
;
else{
const se=g.options.loader||g.options.beforeLoad||g.lazyFn||Np(g)?"pending":"success";
J={
id:oe,index:x,routeId:g.id,params:O?nn(O.params,c):c,_strictParams:we,pathname:Yn([this.basepath,$]),updatedAt:Date.now(),search:O?nn(O.search,D):D,_strictSearch:Z,searchError:void 0,status:se,isFetching:!1,error:void 0,paramsError:y[x],__routeContext:{

}
,__beforeLoadContext:{

}
,context:{

}
,abortController:new AbortController,fetchCount:0,cause:Q,loaderDeps:O?nn(O.loaderDeps,K):K,invalid:!1,preload:!1,links:void 0,scripts:void 0,headScripts:void 0,meta:void 0,staticData:g.options.staticData||{

}
,loadPromise:Zi(),fullPath:g.fullPath
}

}
i!=null&&i.preload||(J.globalNotFound=h===g.id),J.searchError=X;
const ne=w(E);
J.context={
...ne,...J.__routeContext,...J.__beforeLoadContext
}
,m.push(J)
}
),m.forEach((g,x)=>{
var L,F,E,D,Z,X,K,ae;
const we=this.looseRoutesById[g.routeId];
if(!this.getMatch(g.id)&&(i==null?void 0:i._buildLocation)!==!0){
const oe=m[x-1],b=w(oe),O={
deps:g.loaderDeps,params:g.params,context:b,location:r,navigate:Q=>this.navigate({
...Q,_fromLocation:r
}
),buildLocation:this.buildLocation,cause:g.cause,abortController:g.abortController,preload:!!g.preload,matches:m
}
;
g.__routeContext=((F=(L=we.options).context)==null?void 0:F.call(L,O))??{

}
,g.context={
...b,...g.__routeContext,...g.__beforeLoadContext
}

}
if(g.status==="success"){
g.headers=(D=(E=we.options).headers)==null?void 0:D.call(E,{
loaderData:g.loaderData
}
);
const oe={
matches:m,match:g,params:g.params,loaderData:g.loaderData
}
,b=(X=(Z=we.options).head)==null?void 0:X.call(Z,oe);
g.links=b==null?void 0:b.links,g.headScripts=b==null?void 0:b.scripts,g.meta=b==null?void 0:b.meta,g.scripts=(ae=(K=we.options).scripts)==null?void 0:ae.call(K,oe)
}

}
),m
}

}
class gl extends Error{

}
class G_ extends Error{

}
function J_(n){
return{
loadedAt:0,isLoading:!1,isTransitioning:!1,status:"idle",resolvedLocation:void 0,location:n,matches:[],pendingMatches:[],cachedMatches:[],statusCode:200
}

}
function Tc(n,r){
if(n==null)return{

}
;
if("~standard"in n){
const i=n["~standard"].validate(r);
if(i instanceof Promise)throw new gl("Async validation not supported");
if(i.issues)throw new gl(JSON.stringify(i.issues,void 0,2),{
cause:i
}
);
return i.value
}
return"parse"in n?n.parse(r):typeof n=="function"?n(r):{

}

}
const Am=["component","errorComponent","pendingComponent","notFoundComponent"];
function Np(n){
var r;
for(const i of Am)if((r=n.options[i])!=null&&r.preload)return!0;
return!1
}
const Y_="Error preloading route! ☝️";
class Bm{
constructor(r){
if(this.init=i=>{
var o,l;
this.originalIndex=i.originalIndex;
const c=this.options,f=!(c!=null&&c.path)&&!(c!=null&&c.id);
if(this.parentRoute=(l=(o=this.options).getParentRoute)==null?void 0:l.call(o),f)this._path=mn;
else if(!this.parentRoute)throw new Error("Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.");
let h=f?mn:c==null?void 0:c.path;
h&&h!=="/"&&(h=pd(h));
const y=(c==null?void 0:c.id)||h;
let m=f?mn:Yn([this.parentRoute.id===mn?"":this.parentRoute.id,y]);
h===mn&&(h="/"),m!==mn&&(m=Yn(["/",m]));
const w=m===mn?"/":Yn([this.parentRoute.fullPath,h]);
this._path=h,this._id=m,this._fullPath=w,this._to=w,this._ssr=(c==null?void 0:c.ssr)??i.defaultSsr??!0
}
,this.addChildren=i=>this._addFileChildren(i),this._addFileChildren=i=>(Array.isArray(i)&&(this.children=i),typeof i=="object"&&i!==null&&(this.children=Object.values(i)),this),this._addFileTypes=()=>this,this.updateLoader=i=>(Object.assign(this.options,i),this),this.update=i=>(Object.assign(this.options,i),this),this.lazy=i=>(this.lazyFn=i,this),this.options=r||{

}
,this.isRoot=!(r!=null&&r.getParentRoute),r!=null&&r.id&&(r!=null&&r.path))throw new Error("Route cannot have both an 'id' and a 'path' option.")
}
get to(){
return this._to
}
get id(){
return this._id
}
get path(){
return this._path
}
get fullPath(){
return this._fullPath
}
get ssr(){
return this._ssr
}

}
class X_ extends Bm{
constructor(r){
super(r)
}

}
function md(n){
const r=n.errorComponent??Sl;
return fe.jsx(ek,{
getResetKey:n.getResetKey,onCatch:n.onCatch,children:({
error:i,reset:o
}
)=>i?re.createElement(r,{
error:i,reset:o
}
):n.children
}
)
}
class ek extends re.Component{
constructor(){
super(...arguments),this.state={
error:null
}

}
static getDerivedStateFromProps(r){
return{
resetKey:r.getResetKey()
}

}
static getDerivedStateFromError(r){
return{
error:r
}

}
reset(){
this.setState({
error:null
}
)
}
componentDidUpdate(r,i){
i.error&&i.resetKey!==this.state.resetKey&&this.reset()
}
componentDidCatch(r,i){
this.props.onCatch&&this.props.onCatch(r,i)
}
render(){
return this.props.children({
error:this.state.resetKey!==this.props.getResetKey()?null:this.state.error,reset:()=>{
this.reset()
}

}
)
}

}
function Sl({
error:n
}
){
const[r,i]=re.useState(!1);
return fe.jsxs("div",{
style:{
padding:".5rem",maxWidth:"100%"
}
,children:[fe.jsxs("div",{
style:{
display:"flex",alignItems:"center",gap:".5rem"
}
,children:[fe.jsx("strong",{
style:{
fontSize:"1rem"
}
,children:"Something went wrong!"
}
),fe.jsx("button",{
style:{
appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"
}
,onClick:()=>i(o=>!o),children:r?"Hide Error":"Show Error"
}
)]
}
),fe.jsx("div",{
style:{
height:".25rem"
}

}
),r?fe.jsx("div",{
children:fe.jsx("pre",{
style:{
fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"
}
,children:n.message?fe.jsx("code",{
children:n.message
}
):null
}
)
}
):null]
}
)
}
function tk({
children:n,fallback:r=null
}
){
return nk()?fe.jsx(br.Fragment,{
children:n
}
):fe.jsx(br.Fragment,{
children:r
}
)
}
function nk(){
return br.useSyncExternalStore(rk,()=>!0,()=>!1)
}
function rk(){
return()=>{

}

}
var Ic={
exports:{

}

}
,Lc={

}
,Oc={
exports:{

}

}
,jc={

}
;
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;
function ik(){
if(Dp)return jc;
Dp=1;
var n=Mo();
function r(g,x){
return g===x&&(g!==0||1/g===1/x)||g!==g&&x!==x
}
var i=typeof Object.is=="function"?Object.is:r,o=n.useState,l=n.useEffect,c=n.useLayoutEffect,f=n.useDebugValue;
function h(g,x){
var L=x(),F=o({
inst:{
value:L,getSnapshot:x
}

}
),E=F[0].inst,D=F[1];
return c(function(){
E.value=L,E.getSnapshot=x,y(E)&&D({
inst:E
}
)
}
,[g,L,x]),l(function(){
return y(E)&&D({
inst:E
}
),g(function(){
y(E)&&D({
inst:E
}
)
}
)
}
,[g]),f(L),L
}
function y(g){
var x=g.getSnapshot;
g=g.value;
try{
var L=x();
return!i(g,L)
}
catch{
return!0
}

}
function m(g,x){
return x()
}
var w=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:h;
return jc.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:w,jc
}
var Ap;
function sk(){
return Ap||(Ap=1,Oc.exports=ik()),Oc.exports
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;
function ok(){
if(Bp)return Lc;
Bp=1;
var n=Mo(),r=sk();
function i(m,w){
return m===w&&(m!==0||1/m===1/w)||m!==m&&w!==w
}
var o=typeof Object.is=="function"?Object.is:i,l=r.useSyncExternalStore,c=n.useRef,f=n.useEffect,h=n.useMemo,y=n.useDebugValue;
return Lc.useSyncExternalStoreWithSelector=function(m,w,g,x,L){
var F=c(null);
if(F.current===null){
var E={
hasValue:!1,value:null
}
;
F.current=E
}
else E=F.current;
F=h(function(){
function Z($){
if(!X){
if(X=!0,K=$,$=x($),L!==void 0&&E.hasValue){
var oe=E.value;
if(L(oe,$))return ae=oe
}
return ae=$
}
if(oe=ae,o(K,$))return oe;
var b=x($);
return L!==void 0&&L(oe,b)?(K=$,oe):(K=$,ae=b)
}
var X=!1,K,ae,we=g===void 0?null:g;
return[function(){
return Z(w())
}
,we===null?void 0:function(){
return Z(we())
}
]
}
,[w,g,x,L]);
var D=l(m,F[0],F[1]);
return f(function(){
E.hasValue=!0,E.value=D
}
,[D]),y(D),D
}
,Lc
}
var Up;
function ak(){
return Up||(Up=1,Ic.exports=ok()),Ic.exports
}
var lk=ak();
function uk(n,r=i=>i){
return lk.useSyncExternalStoreWithSelector(n.subscribe,()=>n.state,()=>n.state,r,ck)
}
function ck(n,r){
if(Object.is(n,r))return!0;
if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;
if(n instanceof Map&&r instanceof Map){
if(n.size!==r.size)return!1;
for(const[o,l]of n)if(!r.has(o)||!Object.is(l,r.get(o)))return!1;
return!0
}
if(n instanceof Set&&r instanceof Set){
if(n.size!==r.size)return!1;
for(const o of n)if(!r.has(o))return!1;
return!0
}
const i=Object.keys(n);
if(i.length!==Object.keys(r).length)return!1;
for(let o=0;
o<i.length;
o++)if(!Object.prototype.hasOwnProperty.call(r,i[o])||!Object.is(n[i[o]],r[i[o]]))return!1;
return!0
}
const bc=re.createContext(null);
function Um(){
return typeof document>"u"?bc:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=bc,bc)
}
function bn(n){
const r=re.useContext(Um());
return n==null||n.warn,r
}
function Et(n){
const r=bn({
warn:(n==null?void 0:n.router)===void 0
}
),i=(n==null?void 0:n.router)||r,o=re.useRef(void 0);
return uk(i.__store,l=>{
if(n!=null&&n.select){
if(n.structuralSharing??i.options.defaultStructuralSharing){
const c=nn(o.current,n.select(l));
return o.current=c,c
}
return n.select(l)
}
return l
}
)
}
const Cl=re.createContext(void 0),dk=re.createContext(void 0);
function Ar(n){
const r=re.useContext(n.from?dk:Cl);
return Et({
select:o=>{
const l=o.matches.find(c=>n.from?n.from===c.routeId:c.id===r);
if(Jn(!((n.shouldThrow??!0)&&!l),`Could not find ${
n.from?`an active match from "${
n.from
}
"`:"a nearest match!"
}
`),l!==void 0)return n.select?n.select(l):l
}
,structuralSharing:n.structuralSharing
}
)
}
function zm(n){
return Ar({
from:n.from,strict:n.strict,structuralSharing:n.structuralSharing,select:r=>n.select?n.select(r.loaderData):r.loaderData
}
)
}
function $m(n){
const{
select:r,...i
}
=n;
return Ar({
...i,select:o=>r?r(o.loaderDeps):o.loaderDeps
}
)
}
function Vm(n){
return Ar({
from:n.from,strict:n.strict,shouldThrow:n.shouldThrow,structuralSharing:n.structuralSharing,select:r=>n.select?n.select(r.params):r.params
}
)
}
function qm(n){
return Ar({
from:n.from,strict:n.strict,shouldThrow:n.shouldThrow,structuralSharing:n.structuralSharing,select:r=>n.select?n.select(r.search):r.search
}
)
}
function Qm(n){
const{
navigate:r
}
=bn();
return re.useCallback(i=>r({
from:n==null?void 0:n.from,...i
}
),[n==null?void 0:n.from,r])
}
var Zm=Xp();
const pS=od(Zm),ho=typeof window<"u"?re.useLayoutEffect:re.useEffect;
function Mc(n){
const r=re.useRef({
value:n,prev:null
}
),i=r.current.value;
return n!==i&&(r.current={
value:n,prev:i
}
),r.current.prev
}
function fk(n,r,i={

}
,o={

}
){
const l=re.useRef(typeof IntersectionObserver=="function"),c=re.useRef(null);
return re.useEffect(()=>{
if(!(!n.current||!l.current||o.disabled))return c.current=new IntersectionObserver(([f])=>{
r(f)
}
,i),c.current.observe(n.current),()=>{
var f;
(f=c.current)==null||f.disconnect()
}

}
,[r,i,o.disabled,n]),c.current
}
function hk(n){
const r=re.useRef(null);
return re.useImperativeHandle(n,()=>r.current,[]),r
}
function pk(){
const n=bn(),r=re.useRef({
router:n,mounted:!1
}
),i=Et({
select:({
isLoading:g
}
)=>g
}
),[o,l]=re.useState(!1),c=Et({
select:g=>g.matches.some(x=>x.status==="pending"),structuralSharing:!0
}
),f=Mc(i),h=i||o||c,y=Mc(h),m=i||c,w=Mc(m);
return n.isServer||(n.startTransition=g=>{
l(!0),re.startTransition(()=>{
g(),l(!1)
}
)
}
),re.useEffect(()=>{
const g=n.history.subscribe(n.load),x=n.buildLocation({
to:n.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0
}
);
return ti(n.latestLocation.href)!==ti(x.href)&&n.commitLocation({
...x,replace:!0
}
),()=>{
g()
}

}
,[n,n.history]),ho(()=>{
if(typeof window<"u"&&n.clientSsr||r.current.router===n&&r.current.mounted)return;
r.current={
router:n,mounted:!0
}
,(async()=>{
try{
await n.load()
}
catch(x){
console.error(x)
}

}
)()
}
,[n]),ho(()=>{
f&&!i&&n.emit({
type:"onLoad",...di(n.state)
}
)
}
,[f,n,i]),ho(()=>{
w&&!m&&n.emit({
type:"onBeforeRouteMount",...di(n.state)
}
)
}
,[m,w,n]),ho(()=>{
y&&!h&&(n.emit({
type:"onResolved",...di(n.state)
}
),n.__store.setState(g=>({
...g,status:"idle",resolvedLocation:g.location
}
)),$_(n))
}
,[h,y,n]),null
}
function mk(n){
const r=Et({
select:i=>`not-found-${
i.location.pathname
}
-${
i.status
}
`
}
);
return fe.jsx(md,{
getResetKey:()=>r,onCatch:(i,o)=>{
var l;
if(sn(i))(l=n.onCatch)==null||l.call(n,i,o);
else throw i
}
,errorComponent:({
error:i
}
)=>{
var o;
if(sn(i))return(o=n.fallback)==null?void 0:o.call(n,i);
throw i
}
,children:n.children
}
)
}
function yk(){
return fe.jsx("p",{
children:"Not Found"
}
)
}
function tl(n){
return fe.jsx(fe.Fragment,{
children:n.children
}
)
}
function Hm(n,r,i){
return r.options.notFoundComponent?fe.jsx(r.options.notFoundComponent,{
data:i
}
):n.options.defaultNotFoundComponent?fe.jsx(n.options.defaultNotFoundComponent,{
data:i
}
):fe.jsx(yk,{

}
)
}
var Fc,zp;
function vk(){
if(zp)return Fc;
zp=1;
const n={

}
,r=n.hasOwnProperty,i=(b,O)=>{
for(const Q in b)r.call(b,Q)&&O(Q,b[Q])
}
,o=(b,O)=>(O&&i(O,(Q,J)=>{
b[Q]=J
}
),b),l=(b,O)=>{
const Q=b.length;
let J=-1;
for(;
++J<Q;
)O(b[J])
}
,c=b=>"\\u"+("0000"+b).slice(-4),f=(b,O)=>{
let Q=b.toString(16);
return O?Q:Q.toUpperCase()
}
,h=n.toString,y=Array.isArray,m=b=>typeof Buffer=="function"&&Buffer.isBuffer(b),w=b=>h.call(b)=="[object Object]",g=b=>typeof b=="string"||h.call(b)=="[object String]",x=b=>typeof b=="number"||h.call(b)=="[object Number]",L=b=>typeof b=="bigint",F=b=>typeof b=="function",E=b=>h.call(b)=="[object Map]",D=b=>h.call(b)=="[object Set]",Z={
"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"
}
,X=/[\\\b\f\n\r\t]/,K=/[0-9]/,ae=/[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,we=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,$=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,oe=(b,O)=>{
const Q=()=>{
z=A,++O.indentLevel,A=O.indent.repeat(O.indentLevel)
}
,J={
escapeEverything:!1,minimal:!1,isScriptContext:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"	",indentLevel:0,__inline1__:!1,__inline2__:!1
}
,ne=O&&O.json;
ne&&(J.quotes="double",J.wrap=!0),O=o(J,O),O.quotes!="single"&&O.quotes!="double"&&O.quotes!="backtick"&&(O.quotes="single");
const se=O.quotes=="double"?'"':O.quotes=="backtick"?"`":"'",ee=O.compact,B=O.lowercaseHex;
let A=O.indent.repeat(O.indentLevel),z="";
const I=O.__inline1__,U=O.__inline2__,N=ee?"":`
`;
let k,M=!0;
const te=O.numbers=="binary",ie=O.numbers=="octal",me=O.numbers=="decimal",_e=O.numbers=="hexadecimal";
if(ne&&b&&F(b.toJSON)&&(b=b.toJSON()),!g(b)){
if(E(b))return b.size==0?"new Map()":(ee||(O.__inline1__=!0,O.__inline2__=!1),"new Map("+oe(Array.from(b),O)+")");
if(D(b))return b.size==0?"new Set()":"new Set("+oe(Array.from(b),O)+")";
if(m(b))return b.length==0?"Buffer.from([])":"Buffer.from("+oe(Array.from(b),O)+")";
if(y(b))return k=[],O.wrap=!0,I&&(O.__inline1__=!1,O.__inline2__=!0),U||Q(),l(b,ye=>{
M=!1,U&&(O.__inline2__=!1),k.push((ee||U?"":A)+oe(ye,O))
}
),M?"[]":U?"["+k.join(", ")+"]":"["+N+k.join(","+N)+N+(ee?"":z)+"]";
if(x(b)||L(b)){
if(ne)return JSON.stringify(Number(b));
let ye;
if(me)ye=String(b);
else if(_e){
let Re=b.toString(16);
B||(Re=Re.toUpperCase()),ye="0x"+Re
}
else te?ye="0b"+b.toString(2):ie&&(ye="0o"+b.toString(8));
return L(b)?ye+"n":ye
}
else return L(b)?ne?JSON.stringify(Number(b)):b+"n":w(b)?(k=[],O.wrap=!0,Q(),i(b,(ye,Re)=>{
M=!1,k.push((ee?"":A)+oe(ye,O)+":"+(ee?"":" ")+oe(Re,O))
}
),M?"{

}
":"{
"+N+k.join(","+N)+N+(ee?"":z)+"
}
"):ne?JSON.stringify(b)||"null":String(b)
}
const Pe=O.escapeEverything?we:$;
return k=b.replace(Pe,(ye,Re,Ae,Je,_t,kt)=>{
if(Re){
if(O.minimal)return Re;
const rt=Re.charCodeAt(0),vt=Re.charCodeAt(1);
if(O.es6){
const it=(rt-55296)*1024+vt-56320+65536;
return"\\u{
"+f(it,B)+"
}
"
}
return c(f(rt,B))+c(f(vt,B))
}
if(Ae)return c(f(Ae.charCodeAt(0),B));
if(ye=="\0"&&!ne&&!K.test(kt.charAt(_t+1)))return"\\0";
if(Je)return Je==se||O.escapeEverything?"\\"+Je:Je;
if(X.test(ye))return Z[ye];
if(O.minimal&&!ae.test(ye))return ye;
const Ft=f(ye.charCodeAt(0),B);
return ne||Ft.length>2?c(Ft):"\\x"+("00"+Ft).slice(-2)
}
),se=="`"&&(k=k.replace(/\$\{
/g,"\\${
")),O.isScriptContext&&(k=k.replace(/<\/(script|style)/gi,"<\\/$1").replace(/<!--/g,ne?"\\u003C!--":"\\x3C!--")),O.wrap&&(k=se+k+se),k
}
;
return oe.version="3.0.2",Fc=oe,Fc
}
vk();
function gk({
children:n,log:r
}
){
return typeof document<"u"?null:fe.jsx("script",{
className:"tsr-once",dangerouslySetInnerHTML:{
__html:[n,"",'if (typeof __TSR_SSR__ !== "undefined") __TSR_SSR__.cleanScripts()'].filter(Boolean).join(`
`)
}

}
)
}
function wk(){
const n=bn(),i=(n.options.getScrollRestorationKey||sd)(n.latestLocation),o=i!==sd(n.latestLocation)?i:null;
return!n.isScrollRestoring||!n.isServer?null:fe.jsx(gk,{
children:`(${
Dm.toString()
}
)(${
JSON.stringify(yl)
}
,${
JSON.stringify(o)
}
, undefined, true)`,log:!1
}
)
}
const Wm=re.memo(function({
matchId:r
}
){
var i,o;
const l=bn(),c=Et({
select:Z=>{
var X;
return(X=Z.matches.find(K=>K.id===r))==null?void 0:X.routeId
}

}
);
Jn(c);
const f=l.routesById[c],h=f.options.pendingComponent??l.options.defaultPendingComponent,y=h?fe.jsx(h,{

}
):null,m=f.options.errorComponent??l.options.defaultErrorComponent,w=f.options.onCatch??l.options.defaultOnCatch,g=f.isRoot?f.options.notFoundComponent??((i=l.options.notFoundRoute)==null?void 0:i.options.component):f.options.notFoundComponent,x=(!f.isRoot||f.options.wrapInSuspense)&&(f.options.wrapInSuspense??h??((o=f.options.errorComponent)==null?void 0:o.preload))?re.Suspense:tl,L=m?md:tl,F=g?mk:tl,E=Et({
select:Z=>Z.loadedAt
}
),D=Et({
select:Z=>{
var X;
const K=Z.matches.findIndex(ae=>ae.id===r);
return(X=Z.matches[K-1])==null?void 0:X.routeId
}

}
);
return fe.jsxs(fe.Fragment,{
children:[fe.jsx(Cl.Provider,{
value:r,children:fe.jsx(x,{
fallback:y,children:fe.jsx(L,{
getResetKey:()=>E,errorComponent:m||Sl,onCatch:(Z,X)=>{
if(sn(Z))throw Z;
w==null||w(Z,X)
}
,children:fe.jsx(F,{
fallback:Z=>{
if(!g||Z.routeId&&Z.routeId!==c||!Z.routeId&&!f.isRoot)throw Z;
return re.createElement(g,Z)
}
,children:fe.jsx(kk,{
matchId:r
}
)
}
)
}
)
}
)
}
),D===mn&&l.options.scrollRestoration?fe.jsxs(fe.Fragment,{
children:[fe.jsx(_k,{

}
),fe.jsx(wk,{

}
)]
}
):null]
}
)
}
);
function _k(){
const n=bn(),r=re.useRef(void 0);
return fe.jsx("script",{
suppressHydrationWarning:!0,ref:i=>{
i&&(r.current===void 0||r.current.href!==n.latestLocation.href)&&(n.emit({
type:"onRendered",...di(n.state)
}
),r.current=n.latestLocation)
}

}
,n.latestLocation.state.key)
}
const kk=re.memo(function({
matchId:r
}
){
var i,o,l;
const c=bn(),{
match:f,key:h,routeId:y
}
=Et({
select:x=>{
const L=x.matches.findIndex(K=>K.id===r),F=x.matches[L],E=F.routeId,D=c.routesById[E].options.remountDeps??c.options.defaultRemountDeps,Z=D==null?void 0:D({
routeId:E,loaderDeps:F.loaderDeps,params:F._strictParams,search:F._strictSearch
}
);
return{
key:Z?JSON.stringify(Z):void 0,routeId:E,match:id(F,["id","status","error"])
}

}
,structuralSharing:!0
}
),m=c.routesById[y],w=re.useMemo(()=>{
const x=m.options.component??c.options.defaultComponent;
return x?fe.jsx(x,{

}
,h):fe.jsx(yd,{

}
)
}
,[h,m.options.component,c.options.defaultComponent]),g=(m.options.errorComponent??c.options.defaultErrorComponent)||Sl;
if(f.status==="notFound")return Jn(sn(f.error)),Hm(c,m,f.error);
if(f.status==="redirected")throw Jn(Xr(f.error)),(i=c.getMatch(f.id))==null?void 0:i.loadPromise;
if(f.status==="error"){
if(c.isServer)return fe.jsx(g,{
error:f.error,reset:void 0,info:{
componentStack:""
}

}
);
throw f.error
}
if(f.status==="pending"){
const x=m.options.pendingMinMs??c.options.defaultPendingMinMs;
if(x&&!((o=c.getMatch(f.id))!=null&&o.minPendingPromise)&&!c.isServer){
const L=Zi();
Promise.resolve().then(()=>{
c.updateMatch(f.id,F=>({
...F,minPendingPromise:L
}
))
}
),setTimeout(()=>{
L.resolve(),c.updateMatch(f.id,F=>({
...F,minPendingPromise:void 0
}
))
}
,x)
}
throw(l=c.getMatch(f.id))==null?void 0:l.loadPromise
}
return w
}
),yd=re.memo(function(){
const r=bn(),i=re.useContext(Cl),o=Et({
select:m=>{
var w;
return(w=m.matches.find(g=>g.id===i))==null?void 0:w.routeId
}

}
),l=r.routesById[o],c=Et({
select:m=>{
const g=m.matches.find(x=>x.id===i);
return Jn(g),g.globalNotFound
}

}
),f=Et({
select:m=>{
var w;
const g=m.matches,x=g.findIndex(L=>L.id===i);
return(w=g[x+1])==null?void 0:w.id
}

}
);
if(c)return Hm(r,l,void 0);
if(!f)return null;
const h=fe.jsx(Wm,{
matchId:f
}
),y=r.options.defaultPendingComponent?fe.jsx(r.options.defaultPendingComponent,{

}
):null;
return i===mn?fe.jsx(re.Suspense,{
fallback:y,children:h
}
):h
}
);
function Sk(){
const n=bn(),r=n.options.defaultPendingComponent?fe.jsx(n.options.defaultPendingComponent,{

}
):null,i=n.isServer||typeof document<"u"&&n.clientSsr?tl:re.Suspense,o=fe.jsxs(i,{
fallback:r,children:[fe.jsx(pk,{

}
),fe.jsx(Ck,{

}
)]
}
);
return n.options.InnerWrap?fe.jsx(n.options.InnerWrap,{
children:o
}
):o
}
function Ck(){
const n=Et({
select:i=>{
var o;
return(o=i.matches[0])==null?void 0:o.id
}

}
),r=Et({
select:i=>i.loadedAt
}
);
return fe.jsx(Cl.Provider,{
value:n,children:fe.jsx(md,{
getResetKey:()=>r,errorComponent:Sl,onCatch:i=>{
i.message||i.toString()
}
,children:n?fe.jsx(Wm,{
matchId:n
}
):null
}
)
}
)
}
function xk(n){
return Et({
select:r=>{
const i=r.matches;
return n!=null&&n.select?n.select(i):i
}
,structuralSharing:n==null?void 0:n.structuralSharing
}
)
}
function Pk(n,r){
const i=bn(),[o,l]=re.useState(!1),c=re.useRef(!1),f=hk(r),{
activeProps:h=()=>({
className:"active"
}
),inactiveProps:y=()=>({

}
),activeOptions:m,to:w,preload:g,preloadDelay:x,hashScrollIntoView:L,replace:F,startTransition:E,resetScroll:D,viewTransition:Z,children:X,target:K,disabled:ae,style:we,className:$,onClick:oe,onFocus:b,onMouseEnter:O,onMouseLeave:Q,onTouchStart:J,ignoreBlocker:ne,...se
}
=n,{
params:ee,search:B,hash:A,state:z,mask:I,reloadDocument:U,...N
}
=se,k=re.useMemo(()=>{
try{
return new URL(`${
w
}
`),"external"
}
catch{

}
return"internal"
}
,[w]),M=Et({
select:Be=>Be.location.search,structuralSharing:!0
}
),te=xk({
select:Be=>{
var Ze;
return n.from??((Ze=Be[Be.length-1])==null?void 0:Ze.fullPath)
}

}
),ie=re.useMemo(()=>({
...n,from:te
}
),[n,te]),me=re.useMemo(()=>i.buildLocation(ie),[i,ie,M]),_e=re.useMemo(()=>ie.reloadDocument?!1:g??i.options.defaultPreload,[i.options.defaultPreload,g,ie.reloadDocument]),Pe=x??i.options.defaultPreloadDelay??0,ye=Et({
select:Be=>{
if(m!=null&&m.exact){
if(!F_(Be.location.pathname,me.pathname,i.basepath))return!1
}
else{
const Ze=pl(Be.location.pathname,i.basepath).split("/");
if(!pl(me.pathname,i.basepath).split("/").every((No,Do)=>No===Ze[Do]))return!1
}
return((m==null?void 0:m.includeSearch)??!0)&&!es(Be.location.search,me.search,{
partial:!(m!=null&&m.exact),ignoreUndefined:!(m!=null&&m.explicitUndefined)
}
)?!1:m!=null&&m.includeHash?Be.location.hash===me.hash:!0
}

}
),Re=re.useCallback(()=>{
i.preloadRoute(ie).catch(Be=>{
console.warn(Be),console.warn(Y_)
}
)
}
,[ie,i]),Ae=re.useCallback(Be=>{
Be!=null&&Be.isIntersecting&&Re()
}
,[Re]);
if(fk(f,Ae,{
rootMargin:"100px"
}
,{
disabled:!!ae||_e!=="viewport"
}
),ho(()=>{
c.current||!ae&&_e==="render"&&(Re(),c.current=!0)
}
,[ae,Re,_e]),k==="external")return{
...N,ref:f,type:k,href:w,...X&&{
children:X
}
,...K&&{
target:K
}
,...ae&&{
disabled:ae
}
,...we&&{
style:we
}
,...$&&{
className:$
}
,...oe&&{
onClick:oe
}
,...b&&{
onFocus:b
}
,...O&&{
onMouseEnter:O
}
,...Q&&{
onMouseLeave:Q
}
,...J&&{
onTouchStart:J
}

}
;
const Je=Be=>{
if(!ae&&!Rk(Be)&&!Be.defaultPrevented&&(!K||K==="_self")&&Be.button===0){
Be.preventDefault(),Zm.flushSync(()=>{
l(!0)
}
);
const Ze=i.subscribe("onResolved",()=>{
Ze(),l(!1)
}
);
return i.navigate({
...ie,replace:F,resetScroll:D,hashScrollIntoView:L,startTransition:E,viewTransition:Z,ignoreBlocker:ne
}
)
}

}
,_t=Be=>{
ae||_e&&Re()
}
,kt=_t,Ft=Be=>{
if(ae)return;
const Ze=Be.target||{

}
;
if(_e){
if(Ze.preloadTimeout)return;
Ze.preloadTimeout=setTimeout(()=>{
Ze.preloadTimeout=null,Re()
}
,Pe)
}

}
,rt=Be=>{
if(ae)return;
const Ze=Be.target||{

}
;
Ze.preloadTimeout&&(clearTimeout(Ze.preloadTimeout),Ze.preloadTimeout=null)
}
,vt=Be=>Ze=>{
var kn;
(kn=Ze.persist)==null||kn.call(Ze),Be.filter(Boolean).forEach(ks=>{
Ze.defaultPrevented||ks(Ze)
}
)
}
,it=ye?ei(h,{

}
)??{

}
:{

}
,Mn=ye?{

}
:ei(y,{

}
),tr=[$,it.className,Mn.className].filter(Boolean).join(" "),_n={
...we,...it.style,...Mn.style
}
;
return{
...N,...it,...Mn,href:ae?void 0:me.maskedLocation?i.history.createHref(me.maskedLocation.href):i.history.createHref(me.href),ref:f,onClick:vt([oe,Je]),onFocus:vt([b,_t]),onMouseEnter:vt([O,Ft]),onMouseLeave:vt([Q,rt]),onTouchStart:vt([J,kt]),disabled:!!ae,target:K,...Object.keys(_n).length&&{
style:_n
}
,...tr&&{
className:tr
}
,...ae&&{
role:"link","aria-disabled":!0
}
,...ye&&{
"data-status":"active","aria-current":"page"
}
,...o&&{
"data-transitioning":"transitioning"
}

}

}
const Km=re.forwardRef((n,r)=>{
const{
_asChild:i,...o
}
=n,{
type:l,ref:c,...f
}
=Pk(o,r),h=typeof o.children=="function"?o.children({
isActive:f["data-status"]==="active"
}
):o.children;
return typeof i>"u"&&delete f.disabled,re.createElement(i||"a",{
...f,ref:c
}
,h)
}
);
function Rk(n){
return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)
}
let Ek=class extends Bm{
constructor(r){
super(r),this.useMatch=i=>Ar({
select:i==null?void 0:i.select,from:this.id,structuralSharing:i==null?void 0:i.structuralSharing
}
),this.useRouteContext=i=>Ar({
...i,from:this.id,select:o=>i!=null&&i.select?i.select(o.context):o.context
}
),this.useSearch=i=>qm({
select:i==null?void 0:i.select,structuralSharing:i==null?void 0:i.structuralSharing,from:this.id
}
),this.useParams=i=>Vm({
select:i==null?void 0:i.select,structuralSharing:i==null?void 0:i.structuralSharing,from:this.id
}
),this.useLoaderDeps=i=>$m({
...i,from:this.id
}
),this.useLoaderData=i=>zm({
...i,from:this.id
}
),this.useNavigate=()=>Qm({
from:this.fullPath
}
),this.Link=br.forwardRef((i,o)=>fe.jsx(Km,{
ref:o,from:this.fullPath,...i
}
)),this.$$typeof=Symbol.for("react.memo")
}

}
;
function Tk(n){
return new Ek(n)
}
function Ik(){
return n=>Ok(n)
}
class Lk extends X_{
constructor(r){
super(r),this.useMatch=i=>Ar({
select:i==null?void 0:i.select,from:this.id,structuralSharing:i==null?void 0:i.structuralSharing
}
),this.useRouteContext=i=>Ar({
...i,from:this.id,select:o=>i!=null&&i.select?i.select(o.context):o.context
}
),this.useSearch=i=>qm({
select:i==null?void 0:i.select,structuralSharing:i==null?void 0:i.structuralSharing,from:this.id
}
),this.useParams=i=>Vm({
select:i==null?void 0:i.select,structuralSharing:i==null?void 0:i.structuralSharing,from:this.id
}
),this.useLoaderDeps=i=>$m({
...i,from:this.id
}
),this.useLoaderData=i=>zm({
...i,from:this.id
}
),this.useNavigate=()=>Qm({
from:this.fullPath
}
),this.Link=br.forwardRef((i,o)=>fe.jsx(Km,{
ref:o,from:this.fullPath,...i
}
)),this.$$typeof=Symbol.for("react.memo")
}

}
function Ok(n){
return new Lk(n)
}
function vi(n){
return new jk(n,{
silent:!0
}
).createRoute
}
class jk{
constructor(r,i){
this.path=r,this.createRoute=o=>{
this.silent;
const l=Tk(o);
return l.isRoot=!1,l
}
,this.silent=i==null?void 0:i.silent
}

}
function bk(n){
return typeof(n==null?void 0:n.message)!="string"?!1:n.message.startsWith("Failed to fetch dynamically imported module")||n.message.startsWith("error loading dynamically imported module")||n.message.startsWith("Importing a module script failed")
}
function gi(n,r,i){
let o,l,c,f;
const h=()=>typeof document>"u"&&(i==null?void 0:i())===!1?(l=()=>null,Promise.resolve()):(o||(o=n().then(m=>{
o=void 0,l=m[r]
}
).catch(m=>{
if(c=m,bk(c)&&c instanceof Error&&typeof window<"u"&&typeof sessionStorage<"u"){
const w=`tanstack_router_reload:${
c.message
}
`;
sessionStorage.getItem(w)||(sessionStorage.setItem(w,"1"),f=!0)
}

}
)),o),y=function(w){
if(f)throw window.location.reload(),new Promise(()=>{

}
);
if(c)throw c;
if(!l)throw h();
return(i==null?void 0:i())===!1?fe.jsx(tk,{
fallback:fe.jsx(yd,{

}
),children:re.createElement(l,w)
}
):re.createElement(l,w)
}
;
return y.preload=h,y
}
const Mk=n=>new Fk(n);
class Fk extends K_{
constructor(r){
super(r)
}

}
function Nk({
router:n,children:r,...i
}
){
n.update({
...n.options,...i,context:{
...n.options.context,...i.context
}

}
);
const o=Um(),l=fe.jsx(o.Provider,{
value:n,children:r
}
);
return n.options.Wrap?fe.jsx(n.options.Wrap,{
children:l
}
):l
}
function Dk({
router:n,...r
}
){
return fe.jsx(Nk,{
router:n,...r,children:fe.jsx(Sk,{

}
)
}
)
}
const yS=re.createContext({
editorProfile:null,setEditorProfile:()=>{

}
,updateEditorProfile:()=>{

}
,selectedArea:null,selectArea:()=>{

}

}
),Gm=re.createContext(void 0);
function vS({
children:n
}
){
const[r,i]=re.useState({
enabled:!1
}
),o=re.useCallback(c=>{
i(f=>{
const h={
...f,...c
}
;
return console.log("Updating preview state:",h),h
}
)
}
,[]),l=re.useMemo(()=>({
previewState:r,setPreviewState:i,updatePreviewState:o
}
),[r,o]);
return fe.jsx(Gm.Provider,{
value:l,children:n
}
)
}
function gS(){
const n=re.useContext(Gm);
if(!n)throw new Error("useParticlePreview must be used within a ParticlePreviewProvider");
return n
}
const Ak=mm(n=>({
isEnabled:!0,color:"red",count:120,enableSparkles:()=>n({
isEnabled:!0
}
),disableSparkles:()=>n({
isEnabled:!1
}
),setSparkleColor:r=>n({
color:r
}
),setSparkleCount:r=>n({
count:r
}
)
}
)),Jm=re.createContext(void 0);
function Bk({
children:n
}
){
const[r,i]=re.useState(!1),{
enableSparkles:o,disableSparkles:l
}
=Ak(),c=f=>{
i(f),f?l():o()
}
;
return fe.jsx(Jm.Provider,{
value:{
isCursorTrailPreviewActive:r,setIsCursorTrailPreviewActive:c
}
,children:n
}
)
}
function wS(){
const n=re.useContext(Jm);
if(!n)throw new Error("useCursorTrailPreview must be used within a CursorTrailPreviewProvider");
return n
}
const Uk=()=>null,zk=()=>null,wi=Ik()({
component:()=>fe.jsxs(fe.Fragment,{
children:[fe.jsx(yd,{

}
),fe.jsx(Uk,{

}
),fe.jsx(zk,{

}
)]
}
)
}
),$k="modulepreload",Vk=function(n){
return"/"+n
}
,$p={

}
,_i=function(r,i,o){
let l=Promise.resolve();
if(i&&i.length>0){
let f=function(m){
return Promise.all(m.map(w=>Promise.resolve(w).then(g=>({
status:"fulfilled",value:g
}
),g=>({
status:"rejected",reason:g
}
))))
}
;
document.getElementsByTagName("link");
const h=document.querySelector("meta[property=csp-nonce]"),y=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));
l=f(i.map(m=>{
if(m=Vk(m),m in $p)return;
$p[m]=!0;
const w=m.endsWith(".css"),g=w?'[rel="stylesheet"]':"";
if(document.querySelector(`link[href="${
m
}
"]${
g
}
`))return;
const x=document.createElement("link");
if(x.rel=w?"stylesheet":$k,w||(x.as="script"),x.crossOrigin="",x.href=m,y&&x.setAttribute("nonce",y),document.head.appendChild(x),w)return new Promise((L,F)=>{
x.addEventListener("load",L),x.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${
m
}
`)))
}
)
}
))
}
function c(f){
const h=new Event("vite:preloadError",{
cancelable:!0
}
);
if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f
}
return l.then(f=>{
for(const h of f||[])h.status==="rejected"&&c(h.reason);
return r().catch(c)
}
)
}
,qk=()=>_i(()=>import("./shop-CXk7bd5M.js"),__vite__mapDeps([0,1,2,3,4,5,6])),Ym=vi("/shop")({
component:gi(qk,"component",()=>Ym.ssr)
}
),Qk=()=>_i(()=>import("./register-BgLT4Yrn.js"),__vite__mapDeps([7,8,9,10,11,12,4,5,6])),Xm=vi("/register")({
component:gi(Qk,"component",()=>Xm.ssr)
}
),Zk=()=>_i(()=>import("./login-FwmpMONF.js"),__vite__mapDeps([13,8,9,10,11,12,4,5,6])),ey=vi("/login")({
component:gi(Zk,"component",()=>ey.ssr)
}
),Hk=()=>_i(()=>import("./_auth-CfIX3EPo.js"),__vite__mapDeps([14,8,9,10,11,12,5])),ty=vi("/_auth")({
component:gi(Hk,"component",()=>ty.ssr)
}
),Wk=()=>_i(()=>import("./_username-BLnFljdH.js"),__vite__mapDeps([15,8,9,16,17,18,5,19,20,11,12])),ny=vi("/$username")({
component:gi(Wk,"component",()=>ny.ssr)
}
),Kk=()=>_i(()=>import("./index-R2fxVG3J.js"),__vite__mapDeps([21,4,5,6,22])),ry=vi("/")({
component:gi(Kk,"component",()=>ry.ssr)
}
),Gk=()=>_i(()=>import("./apps-BsABYoML.js").then(n=>n.a),__vite__mapDeps([23,8,9,17,18,24,2,3,4,5,25])),iy=vi("/_auth/os/apps")({
component:gi(Gk,"component",()=>iy.ssr)
}
),Jk=Ym.update({
id:"/shop",path:"/shop",getParentRoute:()=>wi
}
),Yk=Xm.update({
id:"/register",path:"/register",getParentRoute:()=>wi
}
),Xk=ey.update({
id:"/login",path:"/login",getParentRoute:()=>wi
}
),sy=ty.update({
id:"/_auth",getParentRoute:()=>wi
}
),eS=ny.update({
id:"/$username",path:"/$username",getParentRoute:()=>wi
}
),tS=ry.update({
id:"/",path:"/",getParentRoute:()=>wi
}
),nS=iy.update({
id:"/os/apps",path:"/os/apps",getParentRoute:()=>sy
}
),rS={
AuthOsAppsRoute:nS
}
,iS=sy._addFileChildren(rS),sS={
IndexRoute:tS,UsernameRoute:eS,AuthRoute:iS,LoginRoute:Xk,RegisterRoute:Yk,ShopRoute:Jk
}
,oS=wi._addFileChildren(sS)._addFileTypes(),aS=Mk({
routeTree:oS
}
),lS=1e3*60,oy=new Rg({
queryCache:new um,defaultOptions:{
queries:{
gcTime:5*lS
}

}

}
);
ow(oy);
function uS(){
return fe.jsx(Og,{
client:oy,children:fe.jsx(Bk,{
children:fe.jsx(R_,{
children:fe.jsx(Dk,{
router:aS
}
)
}
)
}
)
}
)
}
dg.createRoot(document.getElementById("root")).render(fe.jsx(re.StrictMode,{
children:fe.jsx(uS,{

}
)
}
));
export{
wS as A,hS as B,Qn as C,Te as D,yS as E,Em as F,vS as G,O_ as H,Mk as I,Dk as J,Ok as K,Km as L,Tk as M,yt as N,yd as O,sw as P,dl as Q,br as R,_i as _,at as a,Et as b,_l as c,_s as d,Vm as e,mm as f,hm as g,Vn as h,Pp as i,fe as j,od as k,aw as l,Yr as m,ps as n,Ak as o,Cc as p,dS as q,re as r,Zm as s,pS as t,Qm as u,ao as v,G as w,gS as x,qn as y,v as z
}
;
