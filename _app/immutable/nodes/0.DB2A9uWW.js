import{s as It,n as Et,h as Ht,q as Dt,r as jt,u as Bt,v as Pt,w as Vt}from"../chunks/scheduler.DVnydKK9.js";import{S as Ct,i as Lt,d as r,w as e,b as t,y as Ot,c as a,z as Ft,v as kt,h as l,H as St,l as zt,m as Tt,n as xt,r as Nt,a as Mt,A as ce,u as Gt,g as k,e as i,f as F,B as S,q as qt,j as T,t as z}from"../chunks/index.BNl9KgGF.js";import{h as At,g as Rt}from"../chunks/new_head-1.B08dDXaL.js";import"../chunks/entry.DLFYdScg.js";new TextEncoder;const Ut=!1;async function Kt({fetch:n}){const u=async()=>({item:await(await n("https://api.dexscreener.com/latest/dex/pairs/ethereum/0x2bbf5243e49e8f0025988754dac6620ab0d3e162")).json()}),f=async()=>({item:await(await n("https://api.dexscreener.com/latest/dex/pairs/ethereum/0xa43fe16908251ee70ef74718545e4fe6c5ccec9f")).json()}),v=async()=>({item:await(await n("https://api.dexscreener.com/latest/dex/pairs/ethereum/0x5c6919b79fac1c3555675ae59a9ac2484f3972f5")).json()});return{price:await u(),pricePepe:await f(),priceHoppy:await v()}}const ra=Object.freeze(Object.defineProperty({__proto__:null,load:Kt,prerender:Ut},Symbol.toStringTag,{value:"Module"}));function Wt(n){let u,f,v,d,_,m,c,C,g,A,M,w,b,y,x,H,p=`  <script type="application/ld+json">{
       "@context": "https://schema.org",
       "@type": "Website",
       "name": "${n[0]},
       "url": "${n[3]}",
       "logo": ${n[2]}  }<\/script>`,U;return document.title=u=n[0],{c(){f=l("meta"),v=l("meta"),d=l("meta"),m=l("meta"),c=l("meta"),C=l("meta"),g=l("meta"),A=l("meta"),M=l("meta"),w=l("meta"),b=l("meta"),y=l("meta"),x=l("meta"),H=new St(!1),U=kt(),this.h()},l(h){const s=Ot("svelte-1ul9k7v",document.head);f=a(s,"META",{name:!0,content:!0}),v=a(s,"META",{property:!0,content:!0}),d=a(s,"META",{property:!0,content:!0}),m=a(s,"META",{property:!0,content:!0}),c=a(s,"META",{property:!0,content:!0}),C=a(s,"META",{property:!0,content:!0}),g=a(s,"META",{property:!0,content:!0}),A=a(s,"META",{name:!0,content:!0}),M=a(s,"META",{property:!0,content:!0}),w=a(s,"META",{property:!0,content:!0}),b=a(s,"META",{name:!0,content:!0}),y=a(s,"META",{name:!0,content:!0}),x=a(s,"META",{name:!0,content:!0}),H=Ft(s,!1),U=kt(),s.forEach(r),this.h()},h(){e(f,"name","description"),e(f,"content",n[1]),e(v,"property","og_site_name"),e(v,"content",n[3]),e(d,"property","og:url"),e(d,"content",_="https://"+n[3]),e(m,"property","og:type"),e(m,"content","website"),e(c,"property","og:title"),e(c,"content",n[0]),e(C,"property","og:description"),e(C,"content",n[1]),e(g,"property","og:image"),e(g,"content",n[2]),e(A,"name","twitter:card"),e(A,"content","summary_large_image"),e(M,"property","twitter:domain"),e(M,"content",n[3]),e(w,"property","twitter:url"),e(w,"content",n[3]),e(b,"name","twitter:title"),e(b,"content",n[0]),e(y,"name","twitter:description"),e(y,"content",n[1]),e(x,"name","twitter:image"),e(x,"content",n[2]),H.a=U},m(h,s){t(document.head,f),t(document.head,v),t(document.head,d),t(document.head,m),t(document.head,c),t(document.head,C),t(document.head,g),t(document.head,A),t(document.head,M),t(document.head,w),t(document.head,b),t(document.head,y),t(document.head,x),H.m(p,document.head),t(document.head,U)},p(h,[s]){s&1&&u!==(u=h[0])&&(document.title=u),s&2&&e(f,"content",h[1]),s&8&&e(v,"content",h[3]),s&8&&_!==(_="https://"+h[3])&&e(d,"content",_),s&1&&e(c,"content",h[0]),s&2&&e(C,"content",h[1]),s&4&&e(g,"content",h[2]),s&8&&e(M,"content",h[3]),s&8&&e(w,"content",h[3]),s&1&&e(b,"content",h[0]),s&2&&e(y,"content",h[1]),s&4&&e(x,"content",h[2]),s&13&&p!==(p=`  <script type="application/ld+json">{
       "@context": "https://schema.org",
       "@type": "Website",
       "name": "${h[0]},
       "url": "${h[3]}",
       "logo": ${h[2]}  }<\/script>`)&&H.p(p)},i:Et,o:Et,d(h){h&&H.d(),r(f),r(v),r(d),r(m),r(c),r(C),r(g),r(A),r(M),r(w),r(b),r(y),r(x),r(U)}}}function Xt(n,u,f){let{title:v="Home | Example.com"}=u,{description:d="Description of your website."}=u,{image:_}=u,{website:m}=u;return n.$$set=c=>{"title"in c&&f(0,v=c.title),"description"in c&&f(1,d=c.description),"image"in c&&f(2,_=c.image),"website"in c&&f(3,m=c.website)},[v,d,_,m]}class Yt extends Ct{constructor(u){super(),Lt(this,u,Xt,Wt,It,{title:0,description:1,image:2,website:3})}}function Jt(n){let u=!1,f=()=>{u=!1},v,d,_,m,c,C,g,A,M,w,b,y,x,H,p,U=n[3].priceChange.h24>=0?"+":"",h,s=n[3].priceChange.h24+"",ye,Ee,ke,Y,Te,Je=new Intl.NumberFormat().format(n[3].fdv)+"",xe,Me,K,J,Qe="VOLUME (24h)",Ae,Q,Ie,Ze=new Intl.NumberFormat().format(n[3].volume.h24)+"",Ce,Le,Z,B,$,$e=`<a class="text-3xl text-stroke text-white font-Genty flex items-center gap-1 md:gap-5 svelte-yfya1p" href="/#home"><img src="${At}" class="-scale-x-[1] w-[49px] md:w-[70px]" alt=""/>
						groggo</a>`,He,ae,D,le,et='<a href="/#about" class="">About</a>',De,ne,tt='<a href="/#tokenomics" class="">Tokenomics</a>',je,re,at='<a href="/#how" class="">How to buy</a>',Be,ue,P,Pe,Ve,ee,lt='<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>',pe,Oe,Fe,W,te,Se,I,se,N,nt=`<img src="${At}" class="-scale-x-[1] w-[49px] md:w-[70px]" alt=""/>

					groggo`,ze,de,G,rt="About",Ne,me,q,st="Tokenomics",Ge,fe,R,ot="How to buy",qe,he,j,Re,V,Ue,it;Ht(n[8]),d=new Yt({props:{title:Qt,description:Zt,image:n[4],website:$t}});const Ke=n[7].default,L=Dt(Ke,n,n[6],null);return{c(){qt(d.$$.fragment),_=T(),m=l("div"),c=l("input"),C=T(),g=l("div"),A=l("div"),M=l("section"),w=l("a"),b=l("article"),y=l("div"),x=l("p"),H=z("MARKET CAP "),p=l("span"),h=z(U),ye=z(s),Ee=z("%"),ke=T(),Y=l("p"),Te=z("$"),xe=z(Je),Me=T(),K=l("div"),J=l("p"),J.textContent=Qe,Ae=T(),Q=l("p"),Ie=z("$"),Ce=z(Ze),Le=T(),Z=l("div"),B=l("div"),$=l("div"),$.innerHTML=$e,He=T(),ae=l("div"),D=l("ul"),le=l("li"),le.innerHTML=et,De=T(),ne=l("li"),ne.innerHTML=tt,je=T(),re=l("li"),re.innerHTML=at,Be=T(),ue=l("li"),P=l("a"),Pe=z("Buy now"),Ve=T(),ee=l("div"),ee.innerHTML=lt,Oe=T(),L&&L.c(),Fe=T(),W=l("div"),te=l("label"),Se=T(),I=l("ul"),se=l("div"),N=l("a"),N.innerHTML=nt,ze=T(),de=l("li"),G=l("a"),G.textContent=rt,Ne=T(),me=l("li"),q=l("a"),q.textContent=st,Ge=T(),fe=l("li"),R=l("a"),R.textContent=ot,qe=T(),he=l("li"),j=l("a"),Re=z("Buy now"),this.h()},l(o){Gt(d.$$.fragment,o),_=k(o),m=a(o,"DIV",{class:!0});var E=i(m);c=a(E,"INPUT",{id:!0,type:!0,class:!0}),C=k(E),g=a(E,"DIV",{class:!0});var oe=i(g);A=a(oe,"DIV",{class:!0});var ct=i(A);M=a(ct,"SECTION",{class:!0});var ut=i(M);w=a(ut,"A",{href:!0,target:!0,rel:!0});var dt=i(w);b=a(dt,"ARTICLE",{class:!0});var ge=i(b);y=a(ge,"DIV",{class:!0});var ve=i(y);x=a(ve,"P",{class:!0});var We=i(x);H=F(We,"MARKET CAP "),p=a(We,"SPAN",{class:!0});var _e=i(p);h=F(_e,U),ye=F(_e,s),Ee=F(_e,"%"),_e.forEach(r),We.forEach(r),ke=k(ve),Y=a(ve,"P",{class:!0});var Xe=i(Y);Te=F(Xe,"$"),xe=F(Xe,Je),Xe.forEach(r),ve.forEach(r),Me=k(ge),K=a(ge,"DIV",{class:!0});var we=i(K);J=a(we,"P",{class:!0,"data-svelte-h":!0}),S(J)!=="svelte-10gcuhl"&&(J.textContent=Qe),Ae=k(we),Q=a(we,"P",{class:!0});var Ye=i(Q);Ie=F(Ye,"$"),Ce=F(Ye,Ze),Ye.forEach(r),we.forEach(r),ge.forEach(r),dt.forEach(r),ut.forEach(r),ct.forEach(r),Le=k(oe),Z=a(oe,"DIV",{class:!0});var mt=i(Z);B=a(mt,"DIV",{class:!0});var ie=i(B);$=a(ie,"DIV",{class:!0,"data-svelte-h":!0}),S($)!=="svelte-1b4m99h"&&($.innerHTML=$e),He=k(ie),ae=a(ie,"DIV",{class:!0});var ft=i(ae);D=a(ft,"UL",{class:!0});var X=i(D);le=a(X,"LI",{"data-svelte-h":!0}),S(le)!=="svelte-igfu42"&&(le.innerHTML=et),De=k(X),ne=a(X,"LI",{"data-svelte-h":!0}),S(ne)!=="svelte-5d8mk6"&&(ne.innerHTML=tt),je=k(X),re=a(X,"LI",{"data-svelte-h":!0}),S(re)!=="svelte-7hg093"&&(re.innerHTML=at),Be=k(X),ue=a(X,"LI",{});var ht=i(ue);P=a(ht,"A",{target:!0,rel:!0,href:!0,class:!0});var pt=i(P);Pe=F(pt,"Buy now"),pt.forEach(r),ht.forEach(r),X.forEach(r),ft.forEach(r),Ve=k(ie),ee=a(ie,"DIV",{class:!0,"data-svelte-h":!0}),S(ee)!=="svelte-6ei6i2"&&(ee.innerHTML=lt),ie.forEach(r),mt.forEach(r),Oe=k(oe),L&&L.l(oe),oe.forEach(r),Fe=k(E),W=a(E,"DIV",{class:!0});var be=i(W);te=a(be,"LABEL",{for:!0,"aria-label":!0,class:!0}),i(te).forEach(r),Se=k(be),I=a(be,"UL",{class:!0});var O=i(I);se=a(O,"DIV",{class:!0});var gt=i(se);N=a(gt,"A",{class:!0,href:!0,"data-svelte-h":!0}),S(N)!=="svelte-10m5ala"&&(N.innerHTML=nt),gt.forEach(r),ze=k(O),de=a(O,"LI",{});var vt=i(de);G=a(vt,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(G)!=="svelte-isghzh"&&(G.textContent=rt),vt.forEach(r),Ne=k(O),me=a(O,"LI",{});var _t=i(me);q=a(_t,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(q)!=="svelte-119h9qn"&&(q.textContent=st),_t.forEach(r),Ge=k(O),fe=a(O,"LI",{});var wt=i(fe);R=a(wt,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(R)!=="svelte-uwwymy"&&(R.textContent=ot),wt.forEach(r),qe=k(O),he=a(O,"LI",{});var bt=i(he);j=a(bt,"A",{target:!0,rel:!0,href:!0,class:!0});var yt=i(j);Re=F(yt,"Buy now"),yt.forEach(r),bt.forEach(r),O.forEach(r),be.forEach(r),E.forEach(r),this.h()},h(){e(c,"id","my-drawer-3"),e(c,"type","checkbox"),e(c,"class","drawer-toggle"),e(p,"class","font-black "+(n[3].priceChange.h24>=0?"text-green-500":"text-red-500")),e(x,"class","text-xs"),e(Y,"class","lg:text-2xl font-bold"),e(y,"class","grid"),e(J,"class","text-xs"),e(Q,"class","lg:text-2xl font-bold"),e(K,"class","grid"),e(b,"class","grid px-4 gap-6 lg:gap-40 grid-cols-2"),e(w,"href",n[1]),e(w,"target","_blank"),e(w,"rel","noopener noreferrer"),e(M,"class","w-[95vw] flex items-center justify-between text-white lg:w-[70vw]"),e(A,"class","bg-black grid items-center justify-center py-5 w-full"),e($,"class","mx-2 flex-1 px-2"),e(P,"target","_blank"),e(P,"rel","noopener noreferrer"),e(P,"href",n[0]),e(P,"class","btn text-xl btn-accent font-bold"),e(D,"class","menu font-bold gap-2 items-center text-xl menu-horizontal"),e(ae,"class","hidden flex-none md:block"),e(ee,"class","flex-none md:hidden"),e(B,"class","lg:w-[90vw] w-full xl:w-[70vw] py-2 items-center flex justify-center "),e(Z,"class",pe="w-full transition-all duration-200 z-30 sticky "+(n[2]>=200?"!bg-black text-white shadow-md":"")+" top-0 h-full grid justify-items-center"),e(g,"class","drawer-content bg-[#0adf44] flex lg:items-center relative flex-col"),e(te,"for","my-drawer-3"),e(te,"aria-label","close sidebar"),e(te,"class","drawer-overlay"),e(N,"class","text-3xl text-white font-Genty flex items-center gap-1 md:gap-5"),e(N,"href","/#home"),e(se,"class","mx-2 pb-10 px-2"),e(G,"href","/#about"),e(G,"class",""),e(q,"href","/#tokenomics"),e(q,"class",""),e(R,"href","/#how"),e(R,"class",""),e(j,"target","_blank"),e(j,"rel","noopener noreferrer"),e(j,"href",n[0]),e(j,"class","btn text-2xl btn-accent font-bold"),e(I,"class","menu text-2xl tracking-tighter gap-2 font-bold bg-black text-white min-h-full w-80 p-4"),e(W,"class","drawer-side z-40"),e(m,"class","!tracking-widest drawer font-Stim")},m(o,E){Nt(d,o,E),Mt(o,_,E),Mt(o,m,E),t(m,c),t(m,C),t(m,g),t(g,A),t(A,M),t(M,w),t(w,b),t(b,y),t(y,x),t(x,H),t(x,p),t(p,h),t(p,ye),t(p,Ee),t(y,ke),t(y,Y),t(Y,Te),t(Y,xe),t(b,Me),t(b,K),t(K,J),t(K,Ae),t(K,Q),t(Q,Ie),t(Q,Ce),t(g,Le),t(g,Z),t(Z,B),t(B,$),t(B,He),t(B,ae),t(ae,D),t(D,le),t(D,De),t(D,ne),t(D,je),t(D,re),t(D,Be),t(D,ue),t(ue,P),t(P,Pe),t(B,Ve),t(B,ee),t(g,Oe),L&&L.m(g,null),t(m,Fe),t(m,W),t(W,te),t(W,Se),t(W,I),t(I,se),t(se,N),t(I,ze),t(I,de),t(de,G),t(I,Ne),t(I,me),t(me,q),t(I,Ge),t(I,fe),t(fe,R),t(I,qe),t(I,he),t(he,j),t(j,Re),V=!0,Ue||(it=[ce(window,"scroll",()=>{u=!0,clearTimeout(v),v=setTimeout(f,100),n[8]()}),ce(N,"click",n[9]),ce(G,"click",n[10]),ce(q,"click",n[11]),ce(R,"click",n[12]),ce(j,"click",n[13])],Ue=!0)},p(o,[E]){E&4&&!u&&(u=!0,clearTimeout(v),scrollTo(window.pageXOffset,o[2]),v=setTimeout(f,100)),(!V||E&2)&&e(w,"href",o[1]),(!V||E&1)&&e(P,"href",o[0]),(!V||E&4&&pe!==(pe="w-full transition-all duration-200 z-30 sticky "+(o[2]>=200?"!bg-black text-white shadow-md":"")+" top-0 h-full grid justify-items-center"))&&e(Z,"class",pe),L&&L.p&&(!V||E&64)&&Bt(L,Ke,o,o[6],V?Vt(Ke,o[6],E,null):Pt(o[6]),null),(!V||E&1)&&e(j,"href",o[0])},i(o){V||(xt(d.$$.fragment,o),xt(L,o),V=!0)},o(o){Tt(d.$$.fragment,o),Tt(L,o),V=!1},d(o){o&&(r(_),r(m)),zt(d,o),L&&L.d(o),Ue=!1,jt(it)}}}let Qt="GROGGO | ETH",Zt="Groggo, the Blue Frog (aka Blue Pepe) is a community-take-over token. He’s an original character from Matt Furie’s book “Mindviscosity”. Follow his curious spirit and adventures into Memeland 🎒💙 - Name from 'Hedz by Matt Furie Collection' of original NFT's on OpenSea, #571.",$t="groggocto.vip";function ea(n,u,f){let{$$slots:v={},$$scope:d}=u,{data:_}=u,{buy:m="https://app.uniswap.org/swap?outputCurrency=0x420110D74c4c3ea14043A09E81FAD53e1932F54c"}=u,{dexscreener:c="https://dexscreener.com/ethereum/0x2bbf5243e49e8f0025988754dac6620ab0d3e162"}=u,{price:{item:{pair:C}}}=_,g,A=Rt;function M(){f(2,g=window.pageYOffset)}const w=()=>{document.getElementById("my-drawer-3").click()},b=()=>{document.getElementById("my-drawer-3").click()},y=()=>{document.getElementById("my-drawer-3").click()},x=()=>{document.getElementById("my-drawer-3").click()},H=()=>{document.getElementById("my-drawer-3").click()};return n.$$set=p=>{"data"in p&&f(5,_=p.data),"buy"in p&&f(0,m=p.buy),"dexscreener"in p&&f(1,c=p.dexscreener),"$$scope"in p&&f(6,d=p.$$scope)},[m,c,g,C,A,_,d,v,M,w,b,y,x,H]}class sa extends Ct{constructor(u){super(),Lt(this,u,ea,Jt,It,{data:5,buy:0,dexscreener:1})}}export{sa as component,ra as universal};