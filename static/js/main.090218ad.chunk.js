(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),c=n.n(r),i=(n(14),n(1)),o=n(2),l=n(5),m=n(3),u=n(4),d=n(6),p=(n(16),n(17),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={enum:n.props.enum,number:n.props.num},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Box"},s.a.createElement("h2",null," ",this.props.num," "),s.a.createElement("p",{className:"Enum"},this.props.enum))}}]),t}(s.a.Component)),h=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={days:n.props.time.days,hours:n.props.time.hours,mins:n.props.time.mins,secs:n.props.time.secs,seconds:n.props.seconds},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Timer"},s.a.createElement(p,{enum:"Days",num:this.props.time.days}),s.a.createElement(p,{enum:"Hours",num:this.props.time.hours}),s.a.createElement(p,{enum:"Minutes",num:this.props.time.mins}),s.a.createElement(p,{enum:"Seconds",num:this.props.time.secs}))}}]),t}(s.a.Component),b=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{className:"Input"},s.a.createElement("h2",null," Timer Settings "),s.a.createElement("p",null,"Input and set the countdown timer"),s.a.createElement("br",null),s.a.createElement("div",{className:"Set"},s.a.createElement("div",null,s.a.createElement("label",null,"Days:"),s.a.createElement("br",null),s.a.createElement("input",{type:"number",id:"days",placeholder:"Days",min:"0",name:"Days"})),s.a.createElement("div",null,s.a.createElement("label",null,"Hours:"),s.a.createElement("br",null),s.a.createElement("input",{type:"number",id:"hours",placeholder:"Hours",min:"0",max:"24",name:"Hours"})),s.a.createElement("div",null,s.a.createElement("label",null,"Minutes:"),s.a.createElement("br",null),s.a.createElement("input",{type:"number",id:"mins",placeholder:"Minutes",min:"0",max:"60",name:"Minutes"})),s.a.createElement("div",null,s.a.createElement("label",null,"Seconds:"),s.a.createElement("br",null),s.a.createElement("input",{type:"number",id:"secs",placeholder:"Seconds",min:"0",max:"60",name:"Seconds"}))),s.a.createElement("input",{type:"submit",onClick:this.props.set,value:"Set",className:"setButton"})))}}]),t}(s.a.Component),E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={time:{},seconds:0,resetSeconds:0},e.timer=0,e.startTimer=e.startTimer.bind(Object(d.a)(Object(d.a)(e))),e.countDown=e.countDown.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.secondsToTime(this.state.seconds);this.setState({time:e})}},{key:"componentDidUpdate",value:function(e){}},{key:"secondsToTime",value:function(e){var t=e%86400,n=t%3600,a=n%60;return{days:Math.floor(e/86400),hours:Math.floor(t/3600),mins:Math.floor(n/60),secs:Math.ceil(a)}}},{key:"startTimer",value:function(){0==this.timer&&this.state.seconds>0&&(this.timer=setInterval(this.countDown,1e3))}},{key:"countDown",value:function(){var e=this.state.seconds-1;console.log(e),this.setState({time:this.secondsToTime(e),seconds:e}),0==e&&clearInterval(this.timer)}},{key:"set",value:function(e){e.preventDefault();var t={};t.days=document.getElementById("days").value,t.hours=document.getElementById("hours").value,t.mins=document.getElementById("mins").value,t.secs=document.getElementById("secs").value;var n=24*t.days*60*60+60*t.hours*60+60*t.mins+1*t.secs;this.setState({time:t,seconds:n,resetSeconds:n})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(h,{time:this.state.time,seconds:this.state.seconds}),s.a.createElement("button",{onClick:this.startTimer},"Start"),s.a.createElement(b,{set:this.set.bind(this)}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.090218ad.chunk.js.map