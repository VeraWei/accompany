(this["webpackJsonpself-isolation-fun-front"]=this["webpackJsonpself-isolation-fun-front"]||[]).push([[0],{17:function(e,t,n){},45:function(e,t,n){e.exports=n(85)},50:function(e,t,n){},51:function(e,t,n){},80:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(36),c=n.n(i),r=n(40),l=n(13),s=n(4),m=n(9),d=n(6),u=n(5),h=(n(50),n(51),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onClickHappy=function(){},e.onClickUpset=function(){},e}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("ul",{className:"emojis"},o.a.createElement("li",{onClick:this.onClickHappy},o.a.createElement("div",{className:"face-1"},o.a.createElement("div",{className:"eyes"}),o.a.createElement("div",{className:"mouth"}))),o.a.createElement("li",{onClick:this.onClickUpset},o.a.createElement("div",{className:"face-2"},o.a.createElement("div",{className:"eyes"}),o.a.createElement("div",{className:"mouth"}))),o.a.createElement("li",null,o.a.createElement("div",{className:"face-3"},o.a.createElement("div",{className:"eyes"}),o.a.createElement("div",{className:"mouth"}))),o.a.createElement("li",{onClick:this.onClickUpset},o.a.createElement("div",{className:"face-4"},o.a.createElement("div",{className:"eyes"}),o.a.createElement("div",{className:"mouth"}))),o.a.createElement("li",{onClick:this.onClickUpset},o.a.createElement("div",{className:"face-5"},o.a.createElement("div",{className:"eyes"}),o.a.createElement("div",{className:"mouth"}))),o.a.createElement("li",{className:"blue",onClick:this.onClickUpset},o.a.createElement("div",{className:"face-6"},o.a.createElement("div",{className:"eyes"}),o.a.createElement("div",{className:"mouth"}))))}}]),n}(o.a.Component)),v=n(14),f=n(1),p=n(37),w=n(43),k=n(44),E={JOKE:"https://accompanybuddy.azurewebsites.net/joke",ADVICE:"https://accompanybuddy.azurewebsites.net/advice",miku_v2:"https://cdn.rawgit.com/mrdoob/three.js/r87/examples/models/mmd/miku/miku_v2.pmd",wavefile_v2:"https://cdn.rawgit.com/mrdoob/three.js/r87/examples/models/mmd/vmds/wavefile_v2.vmd",wavefile_camera:"https://cdn.rawgit.com/mrdoob/three.js/r87/examples/models/mmd/vmds/wavefile_camera.vmd",wavefile_short:"https://cdn.rawgit.com/mrdoob/three.js/r87/examples/models/mmd/audios/wavefile_short.mp3"},y=(n(17),n(52)),C=E.miku_v2,b=[E.wavefile_v2],g=E.wavefile_camera,j=E.wavefile_short,O={delayTime:160/30},N=new f.m,A=new f.Q,S=new w.a,W=new k.a,_=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).container=void 0,e.mesh=void 0,e.camera=void 0,e.scene=void 0,e.material=void 0,e.renderer=void 0,e.effect=void 0,e.helper=void 0,e.ready=!1,e.onProgress=function(e){if(e.lengthComputable){var t=e.loaded/e.total*100;console.log(Math.round(t)+"% downloaded")}},e.loadAnimationCallback=function(t){W.add(e.camera,{animation:t}),(new f.g).load(j,(function(t){var n=new f.f,a=new f.e(n).setBuffer(t);n.position.z=1,W.add(a,O),A.add(a),A.add(n),A.add(e.mesh),e.ready=!0}),e.onProgress,(function(e){console.log(e)}))},e.loadWithAnimationCallback=function(t){e.mesh=t.mesh,W.add(e.mesh,{animation:t.animation,physics:!0}),S.loadAnimation(g,e.camera,e.loadAnimationCallback,e.onProgress,(function(e){console.log(e)}))},e.onWindowResize=function(){e.camera.aspect=window.innerWidth/window.innerHeight,e.camera.updateProjectionMatrix(),e.effect.setSize(window.innerWidth,window.innerHeight)},e.animate=function(){requestAnimationFrame(e.animate),e.renderAnimation()},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){y=t,e.init(),e.animate()}))}},{key:"init",value:function(){this.container=document.createElement("div"),document.body.appendChild(this.container),this.camera=new f.L(45,window.innerWidth/window.innerHeight,1,2e3),A.background=new f.n(16777215),A.add(new f.M(30,10,10,10,void 0,void 0));var e=new f.b(6710886);A.add(e);var t=new f.q(8943462);t.position.set(-1,1,1).normalize(),A.add(t),this.renderer=new f.eb({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.effect=new p.a(this.renderer,{}),S.loadWithAnimation(C,b,this.loadWithAnimationCallback,this.onProgress,(function(e){console.log(e)})),window.addEventListener("resize",this.onWindowResize,!1)}},{key:"renderAnimation",value:function(){this.ready&&W.update(N.getDelta()),this.effect.render(A,this.camera)}},{key:"render",value:function(){return o.a.createElement("div",null)}}]),n}(o.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Blood"))}}]),n}(o.a.Component),D=n(38),I=n(59),z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={content:null},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this,t=this.props.type;I({method:"get",headers:{accept:"application/json"},url:E[t]}).then((function(t){e.setState({content:t.data.content})})).catch((function(e){console.log(e)})).then((function(){}))}},{key:"render",value:function(){var e=this.state.content;return o.a.createElement("div",{className:"container"},e?o.a.createElement("p",null,e):o.a.createElement(D.a,{animation:"grow",variant:"light"}))}}]),n}(o.a.Component),H=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={contentComponent:void 0},e.onClickJoke=function(){e.setState({contentComponent:o.a.createElement(z,{type:"JOKE",key:"1"})})},e.onClickSoup=function(){e.setState({contentComponent:o.a.createElement(z,{type:"ADVICE",key:"2"})})},e.onClickDance=function(){e.setState({contentComponent:o.a.createElement(_,{key:"3"})})},e.onClickBlood=function(){e.setState({contentComponent:o.a.createElement(x,{key:"4"})})},e.onClickSuprise=function(){e.setState({contentComponent:o.a.createElement(z,{type:"JOKE",key:"5"})})},e}return Object(m.a)(n,[{key:"renderContent",value:function(){return this.state.contentComponent}},{key:"renderList",value:function(){return o.a.createElement(v.a.Item,null,o.a.createElement(v.a.Item,{onClick:this.onClickJoke,action:!0,variant:"primary"},"Tell me a joke!"),o.a.createElement(v.a.Item,{onClick:this.onClickSoup,action:!0,variant:"secondary"},"Drink a cup of chicken soup!"),o.a.createElement(v.a.Item,{onClick:this.onClickDance,action:!0,variant:"success"},"Dancing for me!"),o.a.createElement(v.a.Item,{onClick:this.onClickBlood,action:!0,variant:"danger"},"Warm my blood!"),o.a.createElement(v.a.Item,{onClick:this.onClickSuprise,action:!0,variant:"dark"},"I don't care, suprise me!"))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"What do you want?"),this.renderList(),this.renderContent())}}]),n}(o.a.Component),P=(n(76),n(77),n(78));P.registerPlugin(n(79));var J=!1,B=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),a=t.call(this,e),J||a.initAnimation(),a}return Object(m.a)(n,[{key:"initAnimation",value:function(){P.dialog.buttons.YES.text="\u25ba",P.dialog.alert({message:"Holla, nice to meet you here. how are you?",className:"vex-theme-wireframe",callback:function(e){e?console.log("Successfully destroyed the planet1."):console.log("Chicken1.")}}),J=!0}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"words"},o.a.createElement("h1",null,"Holla, nice to meet you here."),o.a.createElement("h3",null,"how are you?")),o.a.createElement(h,null),o.a.createElement(H,null))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(80);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(r.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/self-isolation-fun-front",component:B})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.dbf4e60e.chunk.js.map