(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["demo-default"],{"87b3":function(e,t,n){"use strict";n("d3b7"),n("96cf");function r(e,t,n,r,o,a,s){try{var u=e[a](s),c=u.value}catch(i){return void n(i)}u.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var s=e.apply(t,n);function u(e){r(s,o,a,u,c,"next",e)}function c(e){r(s,o,a,u,c,"throw",e)}u(void 0)}))}}var a=n("5530"),s=n("2f62");t["a"]={computed:Object(a["a"])({},Object(s["b"])(["demo"])),methods:{load:function(e,t){var n=this;return o(regeneratorRuntime.mark((function r(){var o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.$store.dispatch("demo/setData",{value:{fields:[],datasource:{},listeners:[]},profile:{}}),r.next=3,fetch(e,{method:"GET"});case 3:return o=r.sent,r.next=6,fetch(t,{method:"GET"});case 6:return a=r.sent,r.t0=n.$store,r.next=10,a.json();case 10:return r.t1=r.sent,r.next=13,o.json();case 13:r.t2=r.sent,r.t3={value:r.t1,profile:r.t2},r.t0.dispatch.call(r.t0,"demo/setData",r.t3);case 16:case"end":return r.stop()}}),r)})))()}}}},a4f6:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-jdesign",{attrs:{profile:e.demo.profile},model:{value:e.demo.value,callback:function(t){e.$set(e.demo,"value",t)},expression:"demo.value"}})},o=[],a=n("87b3"),s={mixins:[a["a"]],mounted:function(){this.load("data/element/demo-profile.json","data/element/default.json")}},u=s,c=n("2877"),i=Object(c["a"])(u,r,o,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=demo-default.3e178fc1.js.map