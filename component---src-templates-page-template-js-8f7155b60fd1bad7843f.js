(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a("q1tI"),i=a.n(n),c=(a("pJf4"),a("Wbzz")),r=a("7Qib"),l=a("iSRb"),o=a.n(l),u=function(e){var t=e.author,a=e.isIndex;return i.a.createElement("div",{className:o.a.author},i.a.createElement(c.Link,{to:"/",onClick:function(){return Object(r.c)("Sidebar_Author","click","AuthorPhoto")}},i.a.createElement("img",{src:Object(c.withPrefix)(t.photo),className:o.a.author__photo,width:"75",height:"75",alt:t.name})),!0===a?i.a.createElement("h1",{className:o.a.author__title,onClick:function(){return Object(r.c)("Sidebar_Author","click","AuthorName_Index")}},i.a.createElement(c.Link,{className:o.a["author__title-link"],to:"/"},t.name)):i.a.createElement("h2",{className:o.a.author__title,onClick:function(){return Object(r.c)("Sidebar_Author","click","AuthorName_NotIndex")}},i.a.createElement(c.Link,{className:o.a["author__title-link"],to:"/"},t.name)),i.a.createElement("p",{className:o.a.author__subtitle,onClick:function(){return Object(r.c)("Sidebar_Author","click","AuthorBio")},dangerouslySetInnerHTML:{__html:t.bio}}))},s=(a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("euHg")),m=a.n(s),_=function(e){var t=e.name,a=e.icon;return i.a.createElement("svg",{className:m.a.icon,viewBox:a.viewBox},i.a.createElement("title",null,t),i.a.createElement("path",{d:a.path}))},d=a("aU/I"),h=a.n(d),p=function(e){var t=e.contacts;return i.a.createElement("div",{className:h.a.contacts},i.a.createElement("ul",{className:h.a.contacts__list},Object.keys(t).map((function(e){return t[e]?i.a.createElement("li",{className:h.a["contacts__list-item"],key:e},i.a.createElement("a",{className:h.a["contacts__list-item-link"],href:Object(r.a)(e,t[e]),onClick:function(){return Object(r.c)("Sidebar_Contact","click",Object(r.a)(e,t[e]))},rel:"noopener noreferrer",target:"_blank"},i.a.createElement(_,{name:e,icon:Object(r.b)(e)}))):null}))))},b=a("Nrk+"),f=a.n(b),k=function(e){var t=e.copyright;return i.a.createElement("div",{className:f.a.copyright},t)};a("E5k/");var g=function(e){var t=e.children,a=e.to,n=e.activeClassName,r=e.partiallyActive,l=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["children","to","activeClassName","partiallyActive"]);return/^\/(?!\/)/.test(a)?i.a.createElement(c.Link,Object.assign({to:a,activeClassName:n,partiallyActive:r},l),t):i.a.createElement("a",Object.assign({href:a},l),t)},v=a("je8k"),E=a.n(v),N=function(e){var t=e.menu;return i.a.createElement("nav",{className:E.a.menu},i.a.createElement("ul",{className:E.a.menu__list},t.map((function(e){return i.a.createElement("li",{className:E.a["menu__list-item"],key:e.path},i.a.createElement(g,{to:e.path,className:E.a["menu__list-item-link"],activeClassName:E.a["menu__list-item-link--active"],onClick:function(){return Object(r.c)("Menu","click",e.path)}},e.label))}))))},y=a("SySy"),O=a.n(y),j=a("gGy4"),x=function(e){var t=e.isIndex,a=Object(j.b)(),n=a.author,c=a.copyright,r=a.menu;return i.a.createElement("div",{className:O.a.sidebar},i.a.createElement("div",{className:O.a.sidebar__inner},i.a.createElement(u,{author:n,isIndex:t}),i.a.createElement(N,{menu:r}),i.a.createElement(p,{contacts:n.contacts}),i.a.createElement(k,{copyright:c})))}},"8vKr":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));var n=a("q1tI"),i=a.n(n),c=a("Zttt"),r=a("/d1K"),l=a("RXmK"),o=a("gGy4"),u="1804719626";t.default=function(e){var t=e.data,a=Object(o.b)(),n=a.title,u=a.subtitle,s=t.markdownRemark.html,m=t.markdownRemark.frontmatter,_=m.title,d=m.description,h=null!==d?d:u;return i.a.createElement(c.a,{title:_+" - "+n,description:h},i.a.createElement(r.a,null),i.a.createElement(l.a,{title:_},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}})))}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),c=a("RBgx"),r=a.n(c),l=function(e){var t=e.title,a=e.children,c=Object(n.useRef)();return Object(n.useEffect)((function(){c.current.scrollIntoView()})),i.a.createElement("div",{ref:c,className:r.a.page},i.a.createElement("div",{className:r.a.page__inner},t&&i.a.createElement("h1",{className:r.a.page__title},t),i.a.createElement("div",{className:r.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,a){e.exports={author:"Author-module--author--JnIMg",author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}}}]);
//# sourceMappingURL=component---src-templates-page-template-js-8f7155b60fd1bad7843f.js.map