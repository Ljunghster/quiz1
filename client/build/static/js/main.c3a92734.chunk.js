(this.webpackJsonpquiz1=this.webpackJsonpquiz1||[]).push([[0],{180:function(e,t,a){e.exports=a(331)},185:function(e,t,a){},315:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(34),l=a.n(i),o=(a(185),a(24)),c=a(25),m=a(27),s=a(26),u=a(168),h=a(8),d=a(153),E=a(337),p=a(345),g=a(343),f=a(31),v=a(338),y=a(346),w=a(344),b=a(347),I=a(348),k=a(170),S=a(339),C=a(341),z=Object(d.createMedia)({breakpoints:{mobile:0,tablet:768,computer:1024}}),x=z.MediaContextProvider,A=z.Media,O=function(e){var t=e.mobile;return r.a.createElement(E.a,{text:!0},r.a.createElement(p.a,{as:"h1",content:"Imagine-a-Company",inverted:!0,style:{fontSize:t?"2em":"4em",fontWeight:"normal",marginBottom:0,marginTop:t?"1.5em":"3em"}}),r.a.createElement(p.a,{as:"h2",content:"Do whatever you want when you want to.",inverted:!0,style:{fontSize:t?"1.5em":"1.7em",fontWeight:"normal",marginTop:t?"0.5em":"1.5em"}}),r.a.createElement(g.a,{primary:!0,size:"huge"},"Get Started",r.a.createElement(f.a,{name:"right arrow"})))},T=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e.hideFixedMenu=function(){return e.setState({fixed:!1})},e.showFixedMenu=function(){return e.setState({fixed:!0})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.children,a=this.state.fixed;return r.a.createElement(A,{greaterThan:"mobile"},r.a.createElement(v.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},r.a.createElement(y.a,{inverted:!0,textAlign:"center",style:{minHeight:700,padding:"1em 0em"},vertical:!0},r.a.createElement(w.a,{fixed:a?"top":null,inverted:!a,pointing:!a,secondary:!a,size:"large"},r.a.createElement(E.a,null,r.a.createElement(w.a.Item,{name:"Home Page",onClick:function(){e.props.history.push("/homepage")}},"Home"),r.a.createElement(w.a.Item,{as:"a"},"Work"),r.a.createElement(w.a.Item,{as:"a"},"Company"),r.a.createElement(w.a.Item,{name:"Random Images",onClick:function(){e.props.history.push("/images")}},"Random Images"),r.a.createElement(w.a.Item,{name:"geoQuiz",onClick:function(){e.props.history.push("/quiz")}},"Geography Quiz"),r.a.createElement(w.a.Item,{position:"right"},r.a.createElement(g.a,{as:"a",inverted:!a},"Log in"),r.a.createElement(g.a,{as:"a",inverted:!a,primary:a,style:{marginLeft:"0.5em"}},"Sign Up")))),r.a.createElement(O,null))),t)}}]),a}(n.Component),L=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleSidebarHide=function(){return e.setState({sidebarOpened:!1})},e.handleToggle=function(){return e.setState({sidebarOpened:!0})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.children,a=this.state.sidebarOpened;return r.a.createElement(A,{as:b.a.Pushable,at:"mobile"},r.a.createElement(b.a.Pushable,null,r.a.createElement(b.a,{as:w.a,animation:"overlay",inverted:!0,onHide:this.handleSidebarHide,vertical:!0,visible:a},r.a.createElement(w.a.Item,{as:"a",active:!0},"Home"),r.a.createElement(w.a.Item,{as:"a"},"Work"),r.a.createElement(w.a.Item,{as:"a"},"Company"),r.a.createElement(w.a.Item,{as:"a"},"Careers"),r.a.createElement(w.a.Item,{as:"a"},"Log in"),r.a.createElement(w.a.Item,{as:"a"},"Sign Up"),r.a.createElement(w.a.Item,{name:"geoQuiz",onClick:function(){e.props.history.push("/quiz")}},"Geography Quiz")),r.a.createElement(b.a.Pusher,{dimmed:a},r.a.createElement(y.a,{inverted:!0,textAlign:"center",style:{minHeight:350,padding:"1em 0em"},vertical:!0},r.a.createElement(E.a,null,r.a.createElement(w.a,{inverted:!0,pointing:!0,secondary:!0,size:"large"},r.a.createElement(w.a.Item,{onClick:this.handleToggle},r.a.createElement(f.a,{name:"sidebar"})),r.a.createElement(w.a.Item,{position:"right"},r.a.createElement(g.a,{as:"a",inverted:!0},"Log in"),r.a.createElement(g.a,{as:"a",inverted:!0,style:{marginLeft:"0.5em"}},"Sign Up")))),r.a.createElement(O,{mobile:!0})),t)))}}]),a}(n.Component),j=function(e){var t=e.children,a=e.history;return r.a.createElement(x,null,r.a.createElement(T,{history:a},t),r.a.createElement(L,{history:a},t))},W=function(e){var t=e.history;return r.a.createElement(j,{history:t},r.a.createElement(y.a,{style:{padding:"8em 0em"},vertical:!0},r.a.createElement(I.a,{container:!0,stackable:!0,verticalAlign:"middle"},r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,{width:8},r.a.createElement(p.a,{as:"h3",style:{fontSize:"2em"}},"We Help Companies and Companions"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."),r.a.createElement(p.a,{as:"h3",style:{fontSize:"2em"}},"We Make Bananas That Can Dance"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.")),r.a.createElement(I.a.Column,{floated:"right",width:6},r.a.createElement(k.a,{bordered:!0,rounded:!0,size:"large",src:"/images/wireframe/white-image.png"}))),r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,{textAlign:"center"},r.a.createElement(g.a,{size:"huge"},"Check Them Out"))))),r.a.createElement(y.a,{style:{padding:"0em"},vertical:!0},r.a.createElement(I.a,{celled:"internally",columns:"equal",stackable:!0},r.a.createElement(I.a.Row,{textAlign:"center"},r.a.createElement(I.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"}},r.a.createElement(p.a,{as:"h3",style:{fontSize:"2em"}},'"What a Company"'),r.a.createElement("p",{style:{fontSize:"1.33em"}},"That is what they all say about us")),r.a.createElement(I.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"}},r.a.createElement(p.a,{as:"h3",style:{fontSize:"2em"}},'"I shouldn\'t have gone with their competitor."'),r.a.createElement("p",{style:{fontSize:"1.33em"}},r.a.createElement(k.a,{avatar:!0,src:"/images/avatar/large/nan.jpg"}),r.a.createElement("b",null,"Nan")," Chief Fun Officer Acme Toys"))))),r.a.createElement(y.a,{style:{padding:"8em 0em"},vertical:!0},r.a.createElement(E.a,{text:!0},r.a.createElement(p.a,{as:"h3",style:{fontSize:"2em"}},"Breaking The Grid, Grabs Your Attention"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention."),r.a.createElement(g.a,{as:"a",size:"large"},"Read More"),r.a.createElement(S.a,{as:"h4",className:"header",horizontal:!0,style:{margin:"3em 0em",textTransform:"uppercase"}},r.a.createElement("a",{href:"#"},"Case Studies")),r.a.createElement(p.a,{as:"h3",style:{fontSize:"2em"}},"Did We Tell You About Our Bananas?"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance."),r.a.createElement(g.a,{as:"a",size:"large"},"I'm Still Quite Interested"))),r.a.createElement(y.a,{inverted:!0,vertical:!0,style:{padding:"5em 0em"}},r.a.createElement(E.a,null,r.a.createElement(I.a,{divided:!0,inverted:!0,stackable:!0},r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,{width:3},r.a.createElement(p.a,{inverted:!0,as:"h4",content:"About"}),r.a.createElement(C.a,{link:!0,inverted:!0},r.a.createElement(C.a.Item,{as:"a"},"Sitemap"),r.a.createElement(C.a.Item,{as:"a"},"Contact Us"),r.a.createElement(C.a.Item,{as:"a"},"Religious Ceremonies"),r.a.createElement(C.a.Item,{as:"a"},"Gazebo Plans"))),r.a.createElement(I.a.Column,{width:3},r.a.createElement(p.a,{inverted:!0,as:"h4",content:"Services"}),r.a.createElement(C.a,{link:!0,inverted:!0},r.a.createElement(C.a.Item,{as:"a"},"Banana Pre-Order"),r.a.createElement(C.a.Item,{as:"a"},"DNA FAQ"),r.a.createElement(C.a.Item,{as:"a"},"How To Access"),r.a.createElement(C.a.Item,{as:"a"},"Favorite X-Men"))),r.a.createElement(I.a.Column,{width:7},r.a.createElement(p.a,{as:"h4",inverted:!0},"Footer Header"),r.a.createElement("p",null,"Extra space for a call to action inside the footer that could help re-engage users.")))))))},M=a(342),Q=a(102),q=a.n(Q),H=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,scores:[]},e.submitNewScore=function(){var e=new URLSearchParams(window.location.search);if(e.get("score")&&e.get("time")){var t=prompt("Enter your name");q.a.post("/api/scores",{name:t,score:Number(e.get("score")),time:Number(e.get("time"))}).then((function(){window.location.href="/"}))}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;q.a.get("/api/scores").then((function(t){e.setState({isLoading:!1,scores:t.data})}))}},{key:"componentDidUpdate",value:function(){this.state.isLoading||this.submitNewScore()}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement("img",{src:"https://i.pinimg.com/originals/f6/65/6a/f6656aa6fdb6b8f905dea0bcc2d71dd8.gif"}):r.a.createElement(r.a.Fragment,null,this.state.scores.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("p",null,"Name: ",e.name),r.a.createElement("p",null,"Score: ",e.score))})))}}]),a}(r.a.Component),N=[{question:"What is the capitol of California",choices:["Sacremento","Austin","Seattle","Washington DC"],answer:0},{question:"What is the capitol of the USA",choices:["Sacremento","Austin","Seattle","Washington DC"],answer:3},{question:"In which ocean is the island nation of Mauritius?",choices:["Pacific","Atlantic","Artic","Indian"],answer:3},{question:"On what continent is Saudi Arabia located?",choices:["Africa","Asia","North America","Europe"],answer:2},{question:"Which state in the USA is a cluster of islands?",choices:["Alaska","Hawaii","Guam","Midway"],answer:1},{question:"What is the capitol of Sweden?",choices:["Sacremento","Austin","Stockholm","Gothenburg"],answer:0},{question:"What is the capitol of Spain?",choices:["Berlin","Madrid","Barcelona","Nice"],answer:1},{question:"What is the capitol of Norway",choices:["Stockholm","Madrid","Seattle","Oslo"],answer:3},{question:"What is the capitol of New York",choices:["NYC","Albany","Rockfeld","Richmond"],answer:1}],P=(a(315),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={currentQuestionIndex:0,answeredQuestionCount:0,score:0,time:90},e.handleClick=function(t){var a=t.target.value,n=N[e.state.currentQuestionIndex].answer;a===N[e.state.currentQuestionIndex].choices[n]&&e.setState({score:e.state.score+1}),N.length-1!==e.state.currentQuestionIndex&&e.setState({currentQuestionIndex:e.state.currentQuestionIndex+1}),e.setState({answeredQuestionCount:e.state.answeredQuestionCount+1})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState({time:e.state.time-1})}),1e3)}},{key:"componentDidUpdate",value:function(){N.length!==this.state.answeredQuestionCount&&0!==this.state.time||this.props.history.push("/highscores?score="+this.state.score+"&time="+this.state.time)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,t=N[this.state.currentQuestionIndex];return r.a.createElement(E.a,null,r.a.createElement(I.a,{columns:2},r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,null,r.a.createElement("p",null,"Time: ",this.state.time),r.a.createElement("p",null,"Score: ",this.state.score)),r.a.createElement(I.a.Column,null,r.a.createElement(H,null)))),r.a.createElement(M.a,{header:t.question}),t.choices.map((function(t){return r.a.createElement(g.a,{key:t,value:t,onClick:e.handleClick},t)})))}}]),a}(r.a.Component)),R=a(340),D=void 0,F=function(){return r.a.createElement("div",null,r.a.createElement(w.a,{fixed:"top",inverted:!0},r.a.createElement(E.a,null,r.a.createElement(w.a.Item,{as:"a",header:!0},r.a.createElement(k.a,{size:"mini",src:"/logo.png",style:{marginRight:"1.5em"}}),"Project Name"),r.a.createElement(w.a.Item,{name:"Home Page",onClick:function(){D.props.history.push("/homepage")}},"Home"),r.a.createElement(R.a,{item:!0,simple:!0,text:"Dropdown"},r.a.createElement(R.a.Menu,null,r.a.createElement(R.a.Item,null,"Quiz",r.a.createElement(w.a.Item,{name:"geoQuiz",onClick:function(){D.props.history.push("/quiz")}},"Geography Quiz")),r.a.createElement(R.a.Item,null,"List Item"),r.a.createElement(R.a.Divider,null),r.a.createElement(R.a.Header,null,"Header Item"),r.a.createElement(R.a.Item,null,r.a.createElement("i",{className:"dropdown icon"}),r.a.createElement("span",{className:"text"},"Submenu"),r.a.createElement(R.a.Menu,null,r.a.createElement(R.a.Item,null,"List Item"),r.a.createElement(R.a.Item,null,"List Item"))),r.a.createElement(R.a.Item,null,"List Item"))))),r.a.createElement(E.a,{text:!0,style:{marginTop:"7em"}},r.a.createElement(p.a,{as:"h1"},"Semantic UI React Fixed Template"),r.a.createElement("p",null,"This is a basic fixed menu template using fixed size containers."),r.a.createElement("p",null,"A text container is used for the main container, which is useful for single column layouts."),r.a.createElement(k.a,{src:"/Applepie.jpeg",style:{marginTop:"2em"}}),r.a.createElement(k.a,{src:"/Cleveland.jpeg",style:{marginTop:"2em"}}),r.a.createElement(k.a,{src:"/Dali1.jpeg",style:{marginTop:"2em"}})),r.a.createElement(y.a,{inverted:!0,vertical:!0,style:{margin:"5em 0em 0em",padding:"5em 0em"}},r.a.createElement(E.a,{textAlign:"center"},r.a.createElement(I.a,{divided:!0,inverted:!0,stackable:!0},r.a.createElement(I.a.Column,{width:3},r.a.createElement(p.a,{inverted:!0,as:"h4",content:"Group 1"}),r.a.createElement(C.a,{link:!0,inverted:!0},r.a.createElement(C.a.Item,{as:"a"},"Link One"),r.a.createElement(C.a.Item,{as:"a"},"Link Two"),r.a.createElement(C.a.Item,{as:"a"},"Link Three"),r.a.createElement(C.a.Item,{as:"a"},"Link Four"))),r.a.createElement(I.a.Column,{width:3},r.a.createElement(p.a,{inverted:!0,as:"h4",content:"Group 2"}),r.a.createElement(C.a,{link:!0,inverted:!0},r.a.createElement(C.a.Item,{as:"a"},"Link One"),r.a.createElement(C.a.Item,{as:"a"},"Link Two"),r.a.createElement(C.a.Item,{as:"a"},"Link Three"),r.a.createElement(C.a.Item,{as:"a"},"Link Four"))),r.a.createElement(I.a.Column,{width:3},r.a.createElement(p.a,{inverted:!0,as:"h4",content:"Group 3"}),r.a.createElement(C.a,{link:!0,inverted:!0},r.a.createElement(C.a.Item,{as:"a"},"Link One"),r.a.createElement(C.a.Item,{as:"a"},"Link Two"),r.a.createElement(C.a.Item,{as:"a"},"Link Three"),r.a.createElement(C.a.Item,{as:"a"},"Link Four"))),r.a.createElement(I.a.Column,{width:7},r.a.createElement(p.a,{inverted:!0,as:"h4",content:"Footer Header"}),r.a.createElement("p",null,"Extra space for a call to action inside the footer that could help re-engage users."))),r.a.createElement(S.a,{inverted:!0,section:!0}),r.a.createElement(k.a,{centered:!0,size:"mini",src:"/logo.png"}),r.a.createElement(C.a,{horizontal:!0,inverted:!0,divided:!0,link:!0,size:"small"},r.a.createElement(C.a.Item,{as:"a",href:"#"},"Site Map"),r.a.createElement(C.a.Item,{as:"a",href:"#"},"Contact Us"),r.a.createElement(C.a.Item,{as:"a",href:"#"},"Terms and Conditions"),r.a.createElement(C.a.Item,{as:"a",href:"#"},"Privacy Policy")))))},B=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/images",component:F}),r.a.createElement(h.a,{exact:!0,path:"/",component:W}),r.a.createElement(h.a,{exact:!0,path:"/highscores",component:H}),r.a.createElement(h.a,{exact:!0,path:"/quiz",component:P})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[180,1,2]]]);
//# sourceMappingURL=main.c3a92734.chunk.js.map