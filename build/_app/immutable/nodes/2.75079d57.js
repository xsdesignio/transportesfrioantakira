import{S as B,i as J,s as W,C as se,k as E,l as g,m as q,h as n,n as C,b as m,E as re,F as le,G as ie,g as L,d as I,q as z,a as k,r as y,c as w,D as $,H as S,J as Z,u as Y,y as O,K as ne,z as H,A as U,B as j,o as oe,v as fe,f as ce}from"../chunks/index.f73538f5.js";import{D as X,I as K}from"../chunks/DefaultSection.54f303b5.js";import{L as Q}from"../chunks/ListCard.acdccccd.js";import{b as M}from"../chunks/paths.dd73b452.js";import{H as ue,F as me}from"../chunks/Header.85195c9d.js";import{C as ee}from"../chunks/Columns2x.da51c112.js";import{a as de}from"../chunks/animations.ccfd3db2.js";function $e(v){let e,f,l,r,s,i,a,o;return{c(){e=E("h1"),f=z("Servicio"),l=k(),r=E("p"),s=z("Descripción de Servicio"),i=k(),a=E("a"),o=z("Link al servicio"),this.h()},l(t){e=g(t,"H1",{});var c=q(e);f=y(c,"Servicio"),c.forEach(n),l=w(t),r=g(t,"P",{});var d=q(r);s=y(d,"Descripción de Servicio"),d.forEach(n),i=w(t),a=g(t,"A",{href:!0});var h=q(a);o=y(h,"Link al servicio"),h.forEach(n),this.h()},h(){C(a,"href","/")},m(t,c){m(t,e,c),$(e,f),m(t,l,c),m(t,r,c),$(r,s),m(t,i,c),m(t,a,c),$(a,o)},p:S,d(t){t&&n(e),t&&n(l),t&&n(r),t&&n(i),t&&n(a)}}}function pe(v){let e,f,l;const r=v[2].default,s=se(r,v,v[1],null),i=s||$e();return{c(){e=E("a"),i&&i.c(),this.h()},l(a){e=g(a,"A",{href:!0,class:!0});var o=q(e);i&&i.l(o),o.forEach(n),this.h()},h(){C(e,"href",f=M+v[0]),C(e,"class","service-card svelte-1yzrgrw")},m(a,o){m(a,e,o),i&&i.m(e,null),l=!0},p(a,[o]){s&&s.p&&(!l||o&2)&&re(s,r,a,a[1],l?ie(r,a[1],o,null):le(a[1]),null),(!l||o&1&&f!==(f=M+a[0]))&&C(e,"href",f)},i(a){l||(L(i,a),l=!0)},o(a){I(i,a),l=!1},d(a){a&&n(e),i&&i.d(a)}}}function _e(v,e,f){let{$$slots:l={},$$scope:r}=e,{link:s}=e;return v.$$set=i=>{"link"in i&&f(0,s=i.link),"$$scope"in i&&f(1,r=i.$$scope)},[s,r,l]}class V extends B{constructor(e){super(),J(this,e,_e,pe,W,{link:0})}}function ve(v){let e,f;const l=v[1].default,r=se(l,v,v[0],null);return{c(){e=E("div"),r&&r.c(),this.h()},l(s){e=g(s,"DIV",{class:!0});var i=q(e);r&&r.l(i),i.forEach(n),this.h()},h(){C(e,"class","grid animate svelte-1msxzx9")},m(s,i){m(s,e,i),r&&r.m(e,null),f=!0},p(s,[i]){r&&r.p&&(!f||i&1)&&re(r,l,s,s[0],f?ie(l,s[0],i,null):le(s[0]),null)},i(s){f||(L(r,s),f=!0)},o(s){I(r,s),f=!1},d(s){s&&n(e),r&&r.d(s)}}}function he(v,e,f){let{$$slots:l={},$$scope:r}=e;return v.$$set=s=>{"$$scope"in s&&f(0,r=s.$$scope)},[r,l]}class ae extends B{constructor(e){super(),J(this,e,he,ve,W,{})}}function be(v){let e,f,l,r,s,i,a,o,t,c,d,h,b,A,_,u,F,P;return{c(){e=E("section"),f=E("div"),l=E("h1"),r=z(v[0]),s=k(),i=E("p"),a=z(v[1]),o=k(),t=E("a"),c=z(v[2]),h=k(),b=E("video"),A=E("source"),this.h()},l(p){e=g(p,"SECTION",{class:!0});var T=q(e);f=g(T,"DIV",{class:!0});var D=q(f);l=g(D,"H1",{class:!0});var x=q(l);r=y(x,v[0]),x.forEach(n),s=w(D),i=g(D,"P",{class:!0});var R=q(i);a=y(R,v[1]),R.forEach(n),o=w(D),t=g(D,"A",{href:!0,class:!0});var G=q(t);c=y(G,v[2]),G.forEach(n),D.forEach(n),h=w(T),b=g(T,"VIDEO",{id:!0,class:!0,"data-hero-video":!0,"data-src-lg":!0,"data-src-sm":!0});var N=q(b);A=g(N,"SOURCE",{src:!0,type:!0}),N.forEach(n),T.forEach(n),this.h()},h(){C(l,"class","hero-title svelte-1fnizyf"),C(i,"class","hero-description svelte-1fnizyf"),C(t,"href",d=M+v[3]),C(t,"class","default-button"),C(f,"class","hero-content animate svelte-1fnizyf"),Z(A.src,_=M+v[4])||C(A,"src",_),C(A,"type","video/mp4"),C(b,"id","background-video"),C(b,"class","hero-media-asset is-visible svelte-1fnizyf"),b.autoplay="true",b.muted="true",b.loop="true",b.playsInline="true",C(b,"data-hero-video",u=M+v[4]),C(b,"data-src-lg",F=M+v[4]),C(b,"data-src-sm",P=M+v[4]),C(e,"class","hero svelte-1fnizyf")},m(p,T){m(p,e,T),$(e,f),$(f,l),$(l,r),$(f,s),$(f,i),$(i,a),$(f,o),$(f,t),$(t,c),$(e,h),$(e,b),$(b,A)},p(p,[T]){T&1&&Y(r,p[0]),T&2&&Y(a,p[1]),T&4&&Y(c,p[2]),T&8&&d!==(d=M+p[3])&&C(t,"href",d),T&16&&!Z(A.src,_=M+p[4])&&C(A,"src",_),T&16&&u!==(u=M+p[4])&&C(b,"data-hero-video",u),T&16&&F!==(F=M+p[4])&&C(b,"data-src-lg",F),T&16&&P!==(P=M+p[4])&&C(b,"data-src-sm",P)},i:S,o:S,d(p){p&&n(e)}}}function Ee(v,e,f){let{title:l}=e,{description:r}=e,{buttonText:s}=e,{buttonUrl:i}=e,{videoUrl:a}=e;return v.$$set=o=>{"title"in o&&f(0,l=o.title),"description"in o&&f(1,r=o.description),"buttonText"in o&&f(2,s=o.buttonText),"buttonUrl"in o&&f(3,i=o.buttonUrl),"videoUrl"in o&&f(4,a=o.videoUrl)},[l,r,s,i,a]}class ge extends B{constructor(e){super(),J(this,e,Ee,be,W,{title:0,description:1,buttonText:2,buttonUrl:3,videoUrl:4})}}function qe(v){let e,f,l,r,s,i,a,o,t,c;return{c(){e=E("div"),f=E("h1"),l=z("¿Quién hay detrás de Frío Antakira?"),r=k(),s=E("p"),i=z("Transportes Frío Antakira tiene sus raíces en una empresa familiar, que con constancia, esfuerzo y un servicio excelente ha conseguido ampliar el equipo hasta contar con una flota propia con la que garantizar la calidad de nuestros servicios."),a=k(),o=E("div"),t=E("iframe"),this.h()},l(d){e=g(d,"DIV",{class:!0});var h=q(e);f=g(h,"H1",{class:!0});var b=q(f);l=y(b,"¿Quién hay detrás de Frío Antakira?"),b.forEach(n),r=w(h),s=g(h,"P",{class:!0});var A=q(s);i=y(A,"Transportes Frío Antakira tiene sus raíces en una empresa familiar, que con constancia, esfuerzo y un servicio excelente ha conseguido ampliar el equipo hasta contar con una flota propia con la que garantizar la calidad de nuestros servicios."),A.forEach(n),h.forEach(n),a=w(d),o=g(d,"DIV",{class:!0});var _=q(o);t=g(_,"IFRAME",{class:!0,src:!0,scrolling:!0,title:!0}),q(t).forEach(n),_.forEach(n),this.h()},h(){C(f,"class","svelte-13xz26x"),C(s,"class","svelte-13xz26x"),C(e,"class","info-element svelte-13xz26x"),C(t,"class","embedly-embed svelte-13xz26x"),Z(t.src,c="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fkw710-t99vs%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dkw710-t99vs&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fkw710-t99vs%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube")||C(t,"src",c),C(t,"scrolling","no"),t.allowFullscreen="",C(t,"title","TRANSPORTES FRÍO ANTAKIRA, operador logístico #Antequera."),C(o,"class","video-container svelte-13xz26x")},m(d,h){m(d,e,h),$(e,f),$(f,l),$(e,r),$(e,s),$(s,i),m(d,a,h),m(d,o,h),$(o,t)},p:S,d(d){d&&n(e),d&&n(a),d&&n(o)}}}function ke(v){let e,f;return e=new ee({props:{$$slots:{default:[qe]},$$scope:{ctx:v}}}),{c(){O(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,r){U(e,l,r),f=!0},p(l,r){const s={};r&4&&(s.$$scope={dirty:r,ctx:l}),e.$set(s)},i(l){f||(L(e.$$.fragment,l),f=!0)},o(l){I(e.$$.fragment,l),f=!1},d(l){j(e,l)}}}function we(v){let e,f,l,r,s,i,a,o;return{c(){e=E("h1"),f=z("Transporte Nacional"),l=k(),r=E("p"),s=z("Consigue que tus mercancías lleguen a toda España mediante nuestro servicio de transporte Nacional. Con rutas personalizadas que aseguran la mayor velocidad y seguridad en el trayecto."),i=k(),a=E("a"),o=z("Obtener más información"),this.h()},l(t){e=g(t,"H1",{});var c=q(e);f=y(c,"Transporte Nacional"),c.forEach(n),l=w(t),r=g(t,"P",{});var d=q(r);s=y(d,"Consigue que tus mercancías lleguen a toda España mediante nuestro servicio de transporte Nacional. Con rutas personalizadas que aseguran la mayor velocidad y seguridad en el trayecto."),d.forEach(n),i=w(t),a=g(t,"A",{href:!0});var h=q(a);o=y(h,"Obtener más información"),h.forEach(n),this.h()},h(){C(a,"href",M+"/transportes/transporte-nacional")},m(t,c){m(t,e,c),$(e,f),m(t,l,c),m(t,r,c),$(r,s),m(t,i,c),m(t,a,c),$(a,o)},p:S,d(t){t&&n(e),t&&n(l),t&&n(r),t&&n(i),t&&n(a)}}}function Ae(v){let e,f,l,r,s,i,a,o;return{c(){e=E("h1"),f=z("Transporte Internacional"),l=k(),r=E("p"),s=z("Llegamos a Francia y Portugal, con rutas a medida que garantizan el buen servicio y una respuesta dinámica e inmediata adaptada a las necesidades de cada cliente."),i=k(),a=E("a"),o=z("Obtener más información"),this.h()},l(t){e=g(t,"H1",{});var c=q(e);f=y(c,"Transporte Internacional"),c.forEach(n),l=w(t),r=g(t,"P",{});var d=q(r);s=y(d,"Llegamos a Francia y Portugal, con rutas a medida que garantizan el buen servicio y una respuesta dinámica e inmediata adaptada a las necesidades de cada cliente."),d.forEach(n),i=w(t),a=g(t,"A",{href:!0});var h=q(a);o=y(h,"Obtener más información"),h.forEach(n),this.h()},h(){C(a,"href",M+"/transportes/transporte-internacional")},m(t,c){m(t,e,c),$(e,f),m(t,l,c),m(t,r,c),$(r,s),m(t,i,c),m(t,a,c),$(a,o)},p:S,d(t){t&&n(e),t&&n(l),t&&n(r),t&&n(i),t&&n(a)}}}function ze(v){let e,f,l,r;return e=new V({props:{link:"/transportes/transporte-nacional",$$slots:{default:[we]},$$scope:{ctx:v}}}),l=new V({props:{link:"/transportes/transporte-internacional",$$slots:{default:[Ae]},$$scope:{ctx:v}}}),{c(){O(e.$$.fragment),f=k(),O(l.$$.fragment)},l(s){H(e.$$.fragment,s),f=w(s),H(l.$$.fragment,s)},m(s,i){U(e,s,i),m(s,f,i),U(l,s,i),r=!0},p(s,i){const a={};i&4&&(a.$$scope={dirty:i,ctx:s}),e.$set(a);const o={};i&4&&(o.$$scope={dirty:i,ctx:s}),l.$set(o)},i(s){r||(L(e.$$.fragment,s),L(l.$$.fragment,s),r=!0)},o(s){I(e.$$.fragment,s),I(l.$$.fragment,s),r=!1},d(s){j(e,s),s&&n(f),j(l,s)}}}function ye(v){let e,f,l,r,s,i,a,o;return{c(){e=E("h1"),f=z("Almacenaje 24 h"),l=k(),r=E("p"),s=z("Almacenamos tu mercancía en el corazón logístico de Andalucía (Antequera). Garantizando la seguridad de la mercancía y la facilidad de su transporte."),i=k(),a=E("a"),o=z("Obtener más información"),this.h()},l(t){e=g(t,"H1",{});var c=q(e);f=y(c,"Almacenaje 24 h"),c.forEach(n),l=w(t),r=g(t,"P",{});var d=q(r);s=y(d,"Almacenamos tu mercancía en el corazón logístico de Andalucía (Antequera). Garantizando la seguridad de la mercancía y la facilidad de su transporte."),d.forEach(n),i=w(t),a=g(t,"A",{href:!0});var h=q(a);o=y(h,"Obtener más información"),h.forEach(n),this.h()},h(){C(a,"href",M+"/logistica/almacenaje")},m(t,c){m(t,e,c),$(e,f),m(t,l,c),m(t,r,c),$(r,s),m(t,i,c),m(t,a,c),$(a,o)},p:S,d(t){t&&n(e),t&&n(l),t&&n(r),t&&n(i),t&&n(a)}}}function Te(v){let e,f,l,r,s,i,a,o;return{c(){e=E("h1"),f=z("Picking"),l=k(),r=E("p"),s=z("Realizamos el picking de tus productos en el lugar y momento indicado. Estamos especializados en todo tipo de mercancías, cubriendo cuales sean sus necesidades."),i=k(),a=E("a"),o=z("Obtener más información"),this.h()},l(t){e=g(t,"H1",{});var c=q(e);f=y(c,"Picking"),c.forEach(n),l=w(t),r=g(t,"P",{});var d=q(r);s=y(d,"Realizamos el picking de tus productos en el lugar y momento indicado. Estamos especializados en todo tipo de mercancías, cubriendo cuales sean sus necesidades."),d.forEach(n),i=w(t),a=g(t,"A",{href:!0});var h=q(a);o=y(h,"Obtener más información"),h.forEach(n),this.h()},h(){C(a,"href",M+"/logistica/picking")},m(t,c){m(t,e,c),$(e,f),m(t,l,c),m(t,r,c),$(r,s),m(t,i,c),m(t,a,c),$(a,o)},p:S,d(t){t&&n(e),t&&n(l),t&&n(r),t&&n(i),t&&n(a)}}}function Ce(v){let e,f,l,r,s,i,a,o;return{c(){e=E("h1"),f=z("Grupaje"),l=k(),r=E("p"),s=z("Realizamos grupaje de mercancías para poder reducir costos y aumentar la eficiencia en el transporte, ya sea de forma nacional o initernacional."),i=k(),a=E("a"),o=z("Obtener más información"),this.h()},l(t){e=g(t,"H1",{});var c=q(e);f=y(c,"Grupaje"),c.forEach(n),l=w(t),r=g(t,"P",{});var d=q(r);s=y(d,"Realizamos grupaje de mercancías para poder reducir costos y aumentar la eficiencia en el transporte, ya sea de forma nacional o initernacional."),d.forEach(n),i=w(t),a=g(t,"A",{href:!0});var h=q(a);o=y(h,"Obtener más información"),h.forEach(n),this.h()},h(){C(a,"href","/logistica/grupaje")},m(t,c){m(t,e,c),$(e,f),m(t,l,c),m(t,r,c),$(r,s),m(t,i,c),m(t,a,c),$(a,o)},p:S,d(t){t&&n(e),t&&n(l),t&&n(r),t&&n(i),t&&n(a)}}}function Fe(v){let e,f,l,r,s,i;return e=new V({props:{link:"/logistica/almacenaje",$$slots:{default:[ye]},$$scope:{ctx:v}}}),l=new V({props:{link:"/logistica/picking",$$slots:{default:[Te]},$$scope:{ctx:v}}}),s=new V({props:{link:"/logistica/grupaje",$$slots:{default:[Ce]},$$scope:{ctx:v}}}),{c(){O(e.$$.fragment),f=k(),O(l.$$.fragment),r=k(),O(s.$$.fragment)},l(a){H(e.$$.fragment,a),f=w(a),H(l.$$.fragment,a),r=w(a),H(s.$$.fragment,a)},m(a,o){U(e,a,o),m(a,f,o),U(l,a,o),m(a,r,o),U(s,a,o),i=!0},p(a,o){const t={};o&4&&(t.$$scope={dirty:o,ctx:a}),e.$set(t);const c={};o&4&&(c.$$scope={dirty:o,ctx:a}),l.$set(c);const d={};o&4&&(d.$$scope={dirty:o,ctx:a}),s.$set(d)},i(a){i||(L(e.$$.fragment,a),L(l.$$.fragment,a),L(s.$$.fragment,a),i=!0)},o(a){I(e.$$.fragment,a),I(l.$$.fragment,a),I(s.$$.fragment,a),i=!1},d(a){j(e,a),a&&n(f),j(l,a),a&&n(r),j(s,a)}}}function Le(v){let e,f,l,r,s,i,a,o;return{c(){e=E("h1"),f=z("Refrigerados y control de temperatura."),l=k(),r=E("p"),s=z("Transportamos todo tipo de mercancías con control de temperatura requerida."),i=k(),a=E("a"),o=z("Obtener más información"),this.h()},l(t){e=g(t,"H1",{});var c=q(e);f=y(c,"Refrigerados y control de temperatura."),c.forEach(n),l=w(t),r=g(t,"P",{});var d=q(r);s=y(d,"Transportamos todo tipo de mercancías con control de temperatura requerida."),d.forEach(n),i=w(t),a=g(t,"A",{href:!0});var h=q(a);o=y(h,"Obtener más información"),h.forEach(n),this.h()},h(){C(a,"href","/")},m(t,c){m(t,e,c),$(e,f),m(t,l,c),m(t,r,c),$(r,s),m(t,i,c),m(t,a,c),$(a,o)},p:S,d(t){t&&n(e),t&&n(l),t&&n(r),t&&n(i),t&&n(a)}}}function Ie(v){let e,f,l,r,s,i,a,o;return{c(){e=E("h1"),f=z("Productos frágiles o con necesidades especiales"),l=k(),r=E("p"),s=z("Transportamos mercancías que requieren una atención especial debido a su tamaño, forma, peso o fragilidad."),i=k(),a=E("a"),o=z("Obtener más información"),this.h()},l(t){e=g(t,"H1",{});var c=q(e);f=y(c,"Productos frágiles o con necesidades especiales"),c.forEach(n),l=w(t),r=g(t,"P",{});var d=q(r);s=y(d,"Transportamos mercancías que requieren una atención especial debido a su tamaño, forma, peso o fragilidad."),d.forEach(n),i=w(t),a=g(t,"A",{href:!0});var h=q(a);o=y(h,"Obtener más información"),h.forEach(n),this.h()},h(){C(a,"href","/")},m(t,c){m(t,e,c),$(e,f),m(t,l,c),m(t,r,c),$(r,s),m(t,i,c),m(t,a,c),$(a,o)},p:S,d(t){t&&n(e),t&&n(l),t&&n(r),t&&n(i),t&&n(a)}}}function Pe(v){let e,f,l,r,s,i,a,o;return{c(){e=E("h1"),f=z("Protección contra el medio ambiente con camiones de Lona."),l=k(),r=E("p"),s=z("Transportamos mercancías que requieren protección contra las inclemencias del tiempo, como la lluvia, la nieve y el sol."),i=k(),a=E("a"),o=z("Obtener más información"),this.h()},l(t){e=g(t,"H1",{});var c=q(e);f=y(c,"Protección contra el medio ambiente con camiones de Lona."),c.forEach(n),l=w(t),r=g(t,"P",{});var d=q(r);s=y(d,"Transportamos mercancías que requieren protección contra las inclemencias del tiempo, como la lluvia, la nieve y el sol."),d.forEach(n),i=w(t),a=g(t,"A",{href:!0});var h=q(a);o=y(h,"Obtener más información"),h.forEach(n),this.h()},h(){C(a,"href","/")},m(t,c){m(t,e,c),$(e,f),m(t,l,c),m(t,r,c),$(r,s),m(t,i,c),m(t,a,c),$(a,o)},p:S,d(t){t&&n(e),t&&n(l),t&&n(r),t&&n(i),t&&n(a)}}}function Oe(v){let e,f,l,r,s,i;return e=new V({props:{link:"/mercancias/refrigerados",$$slots:{default:[Le]},$$scope:{ctx:v}}}),l=new V({props:{link:"/mercancias/especiales",$$slots:{default:[Ie]},$$scope:{ctx:v}}}),s=new V({props:{link:"/mercancias/lonas",$$slots:{default:[Pe]},$$scope:{ctx:v}}}),{c(){O(e.$$.fragment),f=k(),O(l.$$.fragment),r=k(),O(s.$$.fragment)},l(a){H(e.$$.fragment,a),f=w(a),H(l.$$.fragment,a),r=w(a),H(s.$$.fragment,a)},m(a,o){U(e,a,o),m(a,f,o),U(l,a,o),m(a,r,o),U(s,a,o),i=!0},p(a,o){const t={};o&4&&(t.$$scope={dirty:o,ctx:a}),e.$set(t);const c={};o&4&&(c.$$scope={dirty:o,ctx:a}),l.$set(c);const d={};o&4&&(d.$$scope={dirty:o,ctx:a}),s.$set(d)},i(a){i||(L(e.$$.fragment,a),L(l.$$.fragment,a),L(s.$$.fragment,a),i=!0)},o(a){I(e.$$.fragment,a),I(l.$$.fragment,a),I(s.$$.fragment,a),i=!1},d(a){j(e,a),a&&n(f),j(l,a),a&&n(r),j(s,a)}}}function He(v){let e,f,l,r,s,i,a,o,t,c,d,h,b,A,_,u,F,P;return r=new ee({props:{$$slots:{default:[ze]},$$scope:{ctx:v}}}),t=new ae({props:{$$slots:{default:[Fe]},$$scope:{ctx:v}}}),A=new ae({props:{$$slots:{default:[Oe]},$$scope:{ctx:v}}}),{c(){e=E("h3"),f=z("Transporte:"),l=k(),O(r.$$.fragment),s=k(),i=E("h3"),a=z("Logística"),o=k(),O(t.$$.fragment),c=k(),d=E("h3"),h=z("Tipos de Mercancías:"),b=k(),O(A.$$.fragment),_=k(),u=E("a"),F=z("Contacta con nosotros"),this.h()},l(p){e=g(p,"H3",{class:!0});var T=q(e);f=y(T,"Transporte:"),T.forEach(n),l=w(p),H(r.$$.fragment,p),s=w(p),i=g(p,"H3",{class:!0});var D=q(i);a=y(D,"Logística"),D.forEach(n),o=w(p),H(t.$$.fragment,p),c=w(p),d=g(p,"H3",{class:!0});var x=q(d);h=y(x,"Tipos de Mercancías:"),x.forEach(n),b=w(p),H(A.$$.fragment,p),_=w(p),u=g(p,"A",{class:!0,href:!0});var R=q(u);F=y(R,"Contacta con nosotros"),R.forEach(n),this.h()},h(){C(e,"class","centered-thin-text"),C(i,"class","centered-thin-text"),C(d,"class","centered-thin-text"),C(u,"class","default-button centered-button svelte-13xz26x"),C(u,"href","/contacto")},m(p,T){m(p,e,T),$(e,f),m(p,l,T),U(r,p,T),m(p,s,T),m(p,i,T),$(i,a),m(p,o,T),U(t,p,T),m(p,c,T),m(p,d,T),$(d,h),m(p,b,T),U(A,p,T),m(p,_,T),m(p,u,T),$(u,F),P=!0},p(p,T){const D={};T&4&&(D.$$scope={dirty:T,ctx:p}),r.$set(D);const x={};T&4&&(x.$$scope={dirty:T,ctx:p}),t.$set(x);const R={};T&4&&(R.$$scope={dirty:T,ctx:p}),A.$set(R)},i(p){P||(L(r.$$.fragment,p),L(t.$$.fragment,p),L(A.$$.fragment,p),P=!0)},o(p){I(r.$$.fragment,p),I(t.$$.fragment,p),I(A.$$.fragment,p),P=!1},d(p){p&&n(e),p&&n(l),j(r,p),p&&n(s),p&&n(i),p&&n(o),j(t,p),p&&n(c),p&&n(d),p&&n(b),j(A,p),p&&n(_),p&&n(u)}}}function Ue(v){let e,f,l,r,s,i,a,o,t,c,d,h,b,A,_,u,F,P;return{c(){e=E("h2"),f=z("Valores"),l=k(),r=E("ul"),s=E("li"),i=z("Cuidamos de nuestros clientes y trabajadores."),a=k(),o=E("li"),t=z("Garantizamos un servicio de calidad."),c=k(),d=E("li"),h=z("Generamos confianza mediante la transparencia."),b=k(),A=E("li"),_=z("Contribuimos a la sociedad preservando el medio ambiente."),u=k(),F=E("li"),P=z("Aseguramos la igualdad de oportunidades.")},l(p){e=g(p,"H2",{});var T=q(e);f=y(T,"Valores"),T.forEach(n),l=w(p),r=g(p,"UL",{});var D=q(r);s=g(D,"LI",{});var x=q(s);i=y(x,"Cuidamos de nuestros clientes y trabajadores."),x.forEach(n),a=w(D),o=g(D,"LI",{});var R=q(o);t=y(R,"Garantizamos un servicio de calidad."),R.forEach(n),c=w(D),d=g(D,"LI",{});var G=q(d);h=y(G,"Generamos confianza mediante la transparencia."),G.forEach(n),b=w(D),A=g(D,"LI",{});var N=q(A);_=y(N,"Contribuimos a la sociedad preservando el medio ambiente."),N.forEach(n),u=w(D),F=g(D,"LI",{});var te=q(F);P=y(te,"Aseguramos la igualdad de oportunidades."),te.forEach(n),D.forEach(n)},m(p,T){m(p,e,T),$(e,f),m(p,l,T),m(p,r,T),$(r,s),$(s,i),$(r,a),$(r,o),$(o,t),$(r,c),$(r,d),$(d,h),$(r,b),$(r,A),$(A,_),$(r,u),$(r,F),$(F,P)},p:S,d(p){p&&n(e),p&&n(l),p&&n(r)}}}function je(v){let e,f,l,r;return e=new Q({props:{$$slots:{default:[Me]},$$scope:{ctx:v}}}),l=new K({props:{imageUrl:"/assets/images/camionsoldefondo.jpeg"}}),{c(){O(e.$$.fragment),f=k(),O(l.$$.fragment)},l(s){H(e.$$.fragment,s),f=w(s),H(l.$$.fragment,s)},m(s,i){U(e,s,i),m(s,f,i),U(l,s,i),r=!0},i(s){r||(L(e.$$.fragment,s),L(l.$$.fragment,s),r=!0)},o(s){I(e.$$.fragment,s),I(l.$$.fragment,s),r=!1},d(s){j(e,s),s&&n(f),j(l,s)}}}function De(v){let e,f,l,r;return e=new K({props:{imageUrl:"/assets/images/camionsoldefondo.jpeg"}}),l=new Q({props:{$$slots:{default:[Se]},$$scope:{ctx:v}}}),{c(){O(e.$$.fragment),f=k(),O(l.$$.fragment)},l(s){H(e.$$.fragment,s),f=w(s),H(l.$$.fragment,s)},m(s,i){U(e,s,i),m(s,f,i),U(l,s,i),r=!0},i(s){r||(L(e.$$.fragment,s),L(l.$$.fragment,s),r=!0)},o(s){I(e.$$.fragment,s),I(l.$$.fragment,s),r=!1},d(s){j(e,s),s&&n(f),j(l,s)}}}function Me(v){let e,f,l,r,s,i,a,o,t,c,d,h;return{c(){e=E("h2"),f=z("Misión"),l=k(),r=E("ul"),s=E("li"),i=z("Transportar tus mercancías al lugar que necesites, en el momento que necesites, con los cuidados que requieras."),a=k(),o=E("li"),t=z("Ofrecer un servicio de calidad adaptado a las necesidad específica de cada cliente."),c=k(),d=E("li"),h=z("Proporcionar los más altos estándares de calidad y seguridad en el transporte.")},l(b){e=g(b,"H2",{});var A=q(e);f=y(A,"Misión"),A.forEach(n),l=w(b),r=g(b,"UL",{});var _=q(r);s=g(_,"LI",{});var u=q(s);i=y(u,"Transportar tus mercancías al lugar que necesites, en el momento que necesites, con los cuidados que requieras."),u.forEach(n),a=w(_),o=g(_,"LI",{});var F=q(o);t=y(F,"Ofrecer un servicio de calidad adaptado a las necesidad específica de cada cliente."),F.forEach(n),c=w(_),d=g(_,"LI",{});var P=q(d);h=y(P,"Proporcionar los más altos estándares de calidad y seguridad en el transporte."),P.forEach(n),_.forEach(n)},m(b,A){m(b,e,A),$(e,f),m(b,l,A),m(b,r,A),$(r,s),$(s,i),$(r,a),$(r,o),$(o,t),$(r,c),$(r,d),$(d,h)},p:S,d(b){b&&n(e),b&&n(l),b&&n(r)}}}function Se(v){let e,f,l,r,s,i,a,o,t,c,d,h;return{c(){e=E("h2"),f=z("Misión"),l=k(),r=E("ul"),s=E("li"),i=z("Transportar tus mercancías al lugar que necesites, en el momento que necesites, con los cuidados que requieras."),a=k(),o=E("li"),t=z("Ofrecer un servicio de calidad adaptado a las necesidad específica de cada cliente."),c=k(),d=E("li"),h=z("Proporcionar los más altos estándares de calidad y seguridad en el transporte.")},l(b){e=g(b,"H2",{});var A=q(e);f=y(A,"Misión"),A.forEach(n),l=w(b),r=g(b,"UL",{});var _=q(r);s=g(_,"LI",{});var u=q(s);i=y(u,"Transportar tus mercancías al lugar que necesites, en el momento que necesites, con los cuidados que requieras."),u.forEach(n),a=w(_),o=g(_,"LI",{});var F=q(o);t=y(F,"Ofrecer un servicio de calidad adaptado a las necesidad específica de cada cliente."),F.forEach(n),c=w(_),d=g(_,"LI",{});var P=q(d);h=y(P,"Proporcionar los más altos estándares de calidad y seguridad en el transporte."),P.forEach(n),_.forEach(n)},m(b,A){m(b,e,A),$(e,f),m(b,l,A),m(b,r,A),$(r,s),$(s,i),$(r,a),$(r,o),$(o,t),$(r,c),$(r,d),$(d,h)},p:S,d(b){b&&n(e),b&&n(l),b&&n(r)}}}function xe(v){let e,f,l,r,s,i,a,o,t;return{c(){e=E("h2"),f=z("Visión"),l=k(),r=E("ul"),s=E("li"),i=z("De Antequera al resto del mundo. Empezamos con una pequeña flota que va creciendo año a año."),a=k(),o=E("li"),t=z("Contribuimos al desarrollo y al progreso social siendo medioambientalmente eficientes y sostenibles")},l(c){e=g(c,"H2",{});var d=q(e);f=y(d,"Visión"),d.forEach(n),l=w(c),r=g(c,"UL",{});var h=q(r);s=g(h,"LI",{});var b=q(s);i=y(b,"De Antequera al resto del mundo. Empezamos con una pequeña flota que va creciendo año a año."),b.forEach(n),a=w(h),o=g(h,"LI",{});var A=q(o);t=y(A,"Contribuimos al desarrollo y al progreso social siendo medioambientalmente eficientes y sostenibles"),A.forEach(n),h.forEach(n)},m(c,d){m(c,e,d),$(e,f),m(c,l,d),m(c,r,d),$(r,s),$(s,i),$(r,a),$(r,o),$(o,t)},p:S,d(c){c&&n(e),c&&n(l),c&&n(r)}}}function Re(v){let e,f,l,r,s,i,a,o,t,c,d;e=new K({props:{imageUrl:"/assets/images/sunshine.webp"}}),l=new Q({props:{$$slots:{default:[Ue]},$$scope:{ctx:v}}});const h=[De,je],b=[];function A(_,u){return _[0]?0:1}return s=A(v),i=b[s]=h[s](v),o=new K({props:{imageUrl:"/assets/images/camionesenfila.jpeg"}}),c=new Q({props:{$$slots:{default:[xe]},$$scope:{ctx:v}}}),{c(){O(e.$$.fragment),f=k(),O(l.$$.fragment),r=k(),i.c(),a=k(),O(o.$$.fragment),t=k(),O(c.$$.fragment)},l(_){H(e.$$.fragment,_),f=w(_),H(l.$$.fragment,_),r=w(_),i.l(_),a=w(_),H(o.$$.fragment,_),t=w(_),H(c.$$.fragment,_)},m(_,u){U(e,_,u),m(_,f,u),U(l,_,u),m(_,r,u),b[s].m(_,u),m(_,a,u),U(o,_,u),m(_,t,u),U(c,_,u),d=!0},p(_,u){const F={};u&4&&(F.$$scope={dirty:u,ctx:_}),l.$set(F);let P=s;s=A(_),s!==P&&(fe(),I(b[P],1,1,()=>{b[P]=null}),ce(),i=b[s],i||(i=b[s]=h[s](_),i.c()),L(i,1),i.m(a.parentNode,a));const p={};u&4&&(p.$$scope={dirty:u,ctx:_}),c.$set(p)},i(_){d||(L(e.$$.fragment,_),L(l.$$.fragment,_),L(i),L(o.$$.fragment,_),L(c.$$.fragment,_),d=!0)},o(_){I(e.$$.fragment,_),I(l.$$.fragment,_),I(i),I(o.$$.fragment,_),I(c.$$.fragment,_),d=!1},d(_){j(e,_),_&&n(f),j(l,_),_&&n(r),b[s].d(_),_&&n(a),j(o,_),_&&n(t),j(c,_)}}}function Ve(v){let e,f,l,r,s;return e=new ee({props:{$$slots:{default:[Re]},$$scope:{ctx:v}}}),{c(){O(e.$$.fragment),f=k(),l=E("a"),r=z("Contacta con nosotros ->"),this.h()},l(i){H(e.$$.fragment,i),f=w(i),l=g(i,"A",{class:!0,href:!0});var a=q(l);r=y(a,"Contacta con nosotros ->"),a.forEach(n),this.h()},h(){C(l,"class","default-button centered-button svelte-13xz26x"),C(l,"href",M+"/contacto")},m(i,a){U(e,i,a),m(i,f,a),m(i,l,a),$(l,r),s=!0},p(i,a){const o={};a&5&&(o.$$scope={dirty:a,ctx:i}),e.$set(o)},i(i){s||(L(e.$$.fragment,i),s=!0)},o(i){I(e.$$.fragment,i),s=!1},d(i){j(e,i),i&&n(f),i&&n(l)}}}function Ge(v){let e,f,l,r,s,i,a,o,t,c,d,h,b,A,_;return l=new ue({}),s=new ge({props:{title:"Más Seguro, más Rápido, a Cualquier Lugar",description:`Más de 20 años de excelencia en transporte de mercancías,
    brindando seguridad, eficiencia y profesionalismo en cada viaje, tanto a nivel
    nacional como internacional. Tu carga en buenas manos.`,buttonText:"Contacta con nosotros",buttonUrl:"contacto",videoUrl:"/assets/videos/video-transportes.mp4"}}),o=new X({props:{title:"Conócenos",$$slots:{default:[ke]},$$scope:{ctx:v}}}),c=new X({props:{title:"Descubre nuestros servicio",background_color:"#f9f9fb",$$slots:{default:[He]},$$scope:{ctx:v}}}),h=new X({props:{title:"¿Por qué elegir Frío Antakira?",$$slots:{default:[Ve]},$$scope:{ctx:v}}}),A=new me({}),{c(){e=E("meta"),f=k(),O(l.$$.fragment),r=k(),O(s.$$.fragment),i=k(),a=E("div"),O(o.$$.fragment),t=k(),O(c.$$.fragment),d=k(),O(h.$$.fragment),b=k(),O(A.$$.fragment),this.h()},l(u){const F=ne("svelte-6vxl14",document.head);e=g(F,"META",{name:!0,content:!0}),F.forEach(n),f=w(u),H(l.$$.fragment,u),r=w(u),H(s.$$.fragment,u),i=w(u),a=g(u,"DIV",{id:!0});var P=q(a);H(o.$$.fragment,P),P.forEach(n),t=w(u),H(c.$$.fragment,u),d=w(u),H(h.$$.fragment,u),b=w(u),H(A.$$.fragment,u),this.h()},h(){document.title="Transportes Frío Antakira. Ten tu mercancía en el lugar indicado en tiempo record.",C(e,"name","description"),C(e,"content",`
        Más de 20 años de excelencia en transporte de mercancías,
        brindando seguridad, eficiencia y profesionalismo en cada viaje, tanto a nivel
        nacional como internacional. Tu carga en buenas manos.`),C(a,"id","about-us")},m(u,F){$(document.head,e),m(u,f,F),U(l,u,F),m(u,r,F),U(s,u,F),m(u,i,F),m(u,a,F),U(o,a,null),m(u,t,F),U(c,u,F),m(u,d,F),U(h,u,F),m(u,b,F),U(A,u,F),_=!0},p(u,[F]){const P={};F&4&&(P.$$scope={dirty:F,ctx:u}),o.$set(P);const p={};F&4&&(p.$$scope={dirty:F,ctx:u}),c.$set(p);const T={};F&5&&(T.$$scope={dirty:F,ctx:u}),h.$set(T)},i(u){_||(L(l.$$.fragment,u),L(s.$$.fragment,u),L(o.$$.fragment,u),L(c.$$.fragment,u),L(h.$$.fragment,u),L(A.$$.fragment,u),_=!0)},o(u){I(l.$$.fragment,u),I(s.$$.fragment,u),I(o.$$.fragment,u),I(c.$$.fragment,u),I(h.$$.fragment,u),I(A.$$.fragment,u),_=!1},d(u){n(e),u&&n(f),j(l,u),u&&n(r),j(s,u),u&&n(i),u&&n(a),j(o),u&&n(t),j(c,u),u&&n(d),j(h,u),u&&n(b),j(A,u)}}}function Ne(v,e,f){let l=!1;const r=()=>{f(0,l=window.innerWidth<767),console.log("Updating")};return oe(()=>{window.addEventListener("resize",r),de()}),[l]}class Ze extends B{constructor(e){super(),J(this,e,Ne,Ge,W,{})}}export{Ze as component};