(this["webpackJsonprecipee-app"]=this["webpackJsonprecipee-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={recipee:"Recipee_recipee__1UvkU",image:"Recipee_image__BRKvA"}},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),s=(a(12),a(2)),l=a.n(s),u=a(6),o=a(1),p=a(3),m=a.n(p),f=function(e){return c.a.createElement("div",{className:m.a.recipee},c.a.createElement("h1",null,e.title),c.a.createElement("ol",null,e.ingredients.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,e.calories.toFixed()," calories"),c.a.createElement("img",{className:m.a.image,src:e.image,alt:""}))},b=(a(14),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),p=s[0],m=s[1],b=Object(n.useState)("chicken"),d=Object(o.a)(b,2),h=d[0],E=d[1];Object(n.useEffect)((function(){v()}),[h]);var g="https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("22821280","&app_key=").concat("56bae580f88f7dd78f1d4f71469f0019"),v=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(p),m("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",onChange:function(e){m(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"recipees"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))});i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.2969c4ae.chunk.js.map