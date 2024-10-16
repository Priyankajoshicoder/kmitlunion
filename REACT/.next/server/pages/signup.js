"use strict";(()=>{var e={};e.id=616,e.ids=[616,888],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},9213:(e,t,r)=>{r.r(t),r.d(t,{config:()=>S,default:()=>h,getServerSideProps:()=>f,getStaticPaths:()=>b,getStaticProps:()=>P,reportWebVitals:()=>j,routeModule:()=>N,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>A,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>v});var s={};r.r(s),r.d(s,{default:()=>x});var a=r(7093),n=r(5244),l=r(1323),i=r(5949),o=r(8161),p=r(997),d=r(6689),u=r(9905),c=r(1163),m=r(1664),g=r.n(m);let x=()=>{let e=(0,u.useStoreActions)(e=>e.auth.setToken),[t,r]=(0,d.useState)(""),[s,a]=(0,d.useState)(""),[n,l]=(0,d.useState)(""),[i,o]=(0,d.useState)(""),m=(0,c.useRouter)();return(0,p.jsxs)(p.Fragment,{children:[p.jsx("h1",{children:"SignUp"}),p.jsx("hr",{}),(0,p.jsxs)("div",{className:"login",children:[(0,p.jsxs)("form",{onSubmit:r=>{r.preventDefault(),fetch(`${"undefined"!=typeof process?process:({}).API_ENDPOINT}register/`,{method:"POST",body:JSON.stringify({email:t,password:s,password2:n}),headers:{"Content-type":"application/json;charset=UTF-8"}}).then(e=>e.json()).then(t=>{"successfully registered new user"===t.response?(m.push("/products"),e(t.token)):o("There was a problem :(")})},children:[(0,p.jsxs)("div",{className:"mb-3",children:[p.jsx("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),p.jsx("input",{placeholder:"Email",onChange:e=>r(e.target.value),type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),(0,p.jsxs)("div",{className:"mb-3",children:[p.jsx("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),p.jsx("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",onChange:e=>a(e.target.value)})]}),(0,p.jsxs)("div",{className:"mb-3",children:[p.jsx("label",{htmlFor:"exampleInputPassword2",className:"form-label",children:"Password"}),p.jsx("input",{type:"password",className:"form-control",id:"exampleInputPassword2",placeholder:"Password",onChange:e=>l(e.target.value)})]}),p.jsx("button",{type:"submit",className:"btn btn-primary",children:"Sign Up"})]}),p.jsx("br",{}),p.jsx(g(),{href:"login",children:p.jsx("a",{children:"Or Log In"})})]}),p.jsx("br",{}),p.jsx("p",{className:"text-danger",children:i})]})},h=(0,l.l)(s,"default"),P=(0,l.l)(s,"getStaticProps"),b=(0,l.l)(s,"getStaticPaths"),f=(0,l.l)(s,"getServerSideProps"),S=(0,l.l)(s,"config"),j=(0,l.l)(s,"reportWebVitals"),v=(0,l.l)(s,"unstable_getStaticProps"),w=(0,l.l)(s,"unstable_getStaticPaths"),y=(0,l.l)(s,"unstable_getStaticParams"),_=(0,l.l)(s,"unstable_getServerProps"),A=(0,l.l)(s,"unstable_getServerSideProps"),N=new a.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/signup",pathname:"/signup",bundlePath:"",filename:""},components:{App:o.default,Document:i.default},userland:s})},5949:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var s=r(997),a=r(6859),n=r.n(a),l=r(6177);class i extends n(){render(){return(0,s.jsxs)(a.Html,{children:[(0,s.jsxs)(a.Head,{children:[s.jsx("script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${l.vt}`}),s.jsx("script",{dangerouslySetInnerHTML:{__html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${l.vt}', {
              page_path: window.location.pathname,
            });
          `}})]}),(0,s.jsxs)("body",{children:[s.jsx(a.Main,{}),s.jsx(a.NextScript,{})]})]})}}},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},9905:e=>{e.exports=require("easy-peasy")},9034:e=>{e.exports=require("framer-motion")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{e.exports=require("prop-types")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},3082:e=>{e.exports=require("react-ga")},997:e=>{e.exports=require("react/jsx-runtime")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[567,16,859,161],()=>r(9213));module.exports=s})();