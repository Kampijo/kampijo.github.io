(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4GYE":function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=a("Bl7J"),o=a("vrFN");t.default=function(e){var t,a=e.data,l=e.location,c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.allMarkdownRemark.nodes;return 0===m.length?n.a.createElement(i.a,{location:l,title:c},n.a.createElement(o.a,{title:"My Ramblings"}),n.a.createElement("p",null,"No blog posts found.")):n.a.createElement(i.a,{location:l,title:c},n.a.createElement(o.a,{title:"My Ramblings"}),n.a.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.a.createElement("li",{key:e.fields.slug},n.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h2",null,n.a.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},t))),n.a.createElement("small",null,e.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-my-ramblings-js-d93cd4f510bbf5656c89.js.map