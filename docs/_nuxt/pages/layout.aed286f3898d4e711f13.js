webpackJsonp([2],{"3ewR":function(t,e,i){"use strict";var a=i("pLMs"),n=i("Na2r"),o=i.n(n),r=i("ibYi"),s=i.n(r);e.a={name:"layout",components:{Lightbox:a.a},data:function(){return{imgOverview:o.a,imgPadding:s.a}}}},ETiT:function(t,e,i){var a=i("ngBg");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("1963d3fb",a,!0)},M5AN:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lightbox"},[i("div",{staticClass:"lightbox__preview c-hand",on:{click:function(e){t.isLightBoxOpen=!0}}},[i("img",{attrs:{src:t.imgUrl}})]),i("transition",{attrs:{name:"modal"}},[t.isLightBoxOpen?i("div",{staticClass:"lightbox__bg c-hand",on:{click:function(e){t.isLightBoxOpen=!1}}},[i("div",{staticClass:"lightbox__wrapper"},[i("div",{staticClass:"lightbox__container"},[i("img",{attrs:{src:t.imgUrl}})])])]):t._e()])],1)},n=[],o={render:a,staticRenderFns:n};e.a=o},Na2r:function(t,e,i){t.exports=i.p+"img/layout_overview.2a39824.png"},Q3WZ:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".lightbox img[data-v-33278f49]{width:100%;padding:3.2px;padding:.2rem}.lightbox__preview[data-v-33278f49]{height:100%;padding:0;line-height:0;border:1px solid #dbdbdb}.lightbox__bg[data-v-33278f49]{position:fixed;top:0;right:0;background:rgba(0,0,0,.8);width:100%;height:100%;display:table;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;z-index:998}.lightbox__wrapper[data-v-33278f49]{display:table-cell;vertical-align:middle}.lightbox__container[data-v-33278f49]{max-width:80%;margin:0 auto;padding:3.2px;padding:.2rem;line-height:0;background-color:#fff;border-radius:2px;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.33);box-shadow:0 2px 8px rgba(0,0,0,.33);-webkit-transition:all .3s ease;transition:all .3s ease}.modal-enter[data-v-33278f49],.modal-leave-active[data-v-33278f49]{opacity:0}.modal-enter .modal-container[data-v-33278f49],.modal-leave-active .modal-container[data-v-33278f49]{-webkit-transform:scale(1.1);transform:scale(1.1)}",""])},Qye9:function(t,e,i){"use strict";e.a={name:"lightbox",data:function(){return{isLightBoxOpen:!1}},props:{imgUrl:String,imgUrl2x:String}}},c3Cs:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("Layout")]),i("h2",[t._v("Components")]),i("div",{staticClass:"columns"},[t._m(0),i("div",{staticClass:"column col-6 col-md-12"},[i("lightbox",{attrs:{imgUrl:t.imgOverview}})],1)]),i("h3",[t._v("Navbar")]),t._m(1),i("h3",[t._v("Actionbar")]),t._m(2),i("h3",[t._v("Workspace")]),t._m(3),i("h2",[t._v("Metric")]),t._m(4),t._m(5),i("h3",[t._v("Padding and Margin")]),i("div",{staticClass:"columns"},[t._m(6),i("div",{staticClass:"column col-6"},[i("lightbox",{attrs:{imgUrl:t.imgPadding}})],1)]),i("h3",[t._v("Element Heights")]),t._m(7)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column col-6 col-md-12"},[i("p",[t._v("Our layout has 3 main components:\n        "),i("b",[t._v("Navbar")]),t._v(",\n        "),i("b",[t._v("Actionbar")]),t._v(", and\n        "),i("b",[t._v("Workspace")]),t._v(". The\n        "),i("b",[t._v("Actionbar")]),t._v(" can be omited if necessary. However,\n        "),i("b",[t._v("Navbar")]),t._v(" and\n        "),i("b",[t._v("Workspace")]),t._v(" are required for every page.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[t._v("The Navbar is the top-level navgation for user. The width is fixed:\n    "),i("code",[t._v("240px")]),t._v(" or\n    "),i("code",[t._v("12rem")]),t._v(". The background is\n    "),i("code",[t._v("Primay-600 (#2659AB)")]),t._v(".")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[t._v("Actionbar always located between Navbar and Workspace, which can be omited if necessary. Actionbar is consider as attachment\n      to Workspace. It represent addtional and important information of Workspace.\n    ")]),i("p",[t._v("The width of Actionbar is also fixed: "),i("code",[t._v("280px")]),t._v(" or \n    "),i("code",[t._v("14rem")]),t._v(". The bacground color is "),i("code",[t._v("#F8F8F8")]),t._v(".\n    ")]),i("p",[t._v("The elements suggested on Actionbar are: "),i("b",[t._v("primay action button")]),t._v(", Second action buttton, \n    information doesn't require complex interaction, and "),i("b",[t._v("sub-menu of Workspace")]),t._v(".")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[t._v("Workspace designed as a space for related tasks, most of interactions should be include in the area.")]),i("p",[t._v("The width of Workspace is responsive: "),i("code",[t._v("90%")]),t._v(" of the screen width. The background is "),i("code",[t._v("#FFFFFF")]),t._v(",\n    with dropshadow: "),i("code",[t._v("1px 0 1px #DBDBDB")]),t._v(".")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[t._v("Youi's metric based on "),i("code",[t._v("4px")]),t._v(" and we call it is one unit. The unit can be used as variable in "),i("code",[t._v("SCSS")]),t._v(".\n    Table below shows the unit to pixel mapping. ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table table-striped table-hover"},[i("tr",[i("th",[t._v("Unit")]),i("th",[t._v("Pixel")]),i("th",[t._v("SCSS Variable")]),i("th",[t._v("in REM")])]),i("tr",[i("td",[t._v("1 Unit")]),i("td",[t._v("4px")]),i("td",[i("code",[t._v("$unit-1")])]),i("td",[i("code",[t._v(".2rem")])])]),i("tr",[i("td",[t._v("2 Unit")]),i("td",[t._v("8px")]),i("td",[i("code",[t._v("$unit-2")])]),i("td",[i("code",[t._v(".4rem")])])]),i("tr",[i("td",[t._v("4 Unit")]),i("td",[t._v("16px")]),i("td",[i("code",[t._v("$unit-4")])]),i("td",[i("code",[t._v(".8rem")])])]),i("tr",[i("td",[t._v("6 Unit")]),i("td",[t._v("24px")]),i("td",[i("code",[t._v("$unit-6")])]),i("td",[i("code",[t._v("1.2rem")])])]),i("tr",[i("td",[t._v("8 Unit")]),i("td",[t._v("32px")]),i("td",[i("code",[t._v("$unit-8")])]),i("td",[i("code",[t._v("1.6rem")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column col-6"},[i("p",[t._v("Following 3 types of margin or padding metric are suggested:")]),i("ol",[i("li",[i("b",[t._v("Border Padding:")]),t._v(" tha gap between window boader and components, the width is "),i("code",[t._v("32px")]),t._v(". Indicate as 1.")]),i("li",[i("b",[t._v("Block Margin:")]),t._v(" tha gap between two elements in same component, but it's not "),i("b",[t._v("related")]),t._v(" or "),i("b",[t._v("need visual separtion")]),t._v(",\n       the width is "),i("code",[t._v("24px")]),t._v(". Indicate as 2.")]),i("li",[i("b",[t._v("Element Margin:")]),t._v(" the gap between two elements in same component, and it's related. Indicate as 3.")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[t._v("Most of the elements in Youi has fixed height, which is "),i("code",[t._v("32px")]),t._v(".\n    We suggest element's height should match the metric unit.")])])}],o={render:a,staticRenderFns:n};e.a=o},hZia:function(t,e,i){"use strict";function a(t){i("ETiT")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("3ewR"),o=i("c3Cs"),r=i("K60R"),s=a,c=r(n.a,o.a,!1,s,"data-v-ca9e2a26",null);e.default=c.exports},ibYi:function(t,e,i){t.exports=i.p+"img/layout_metric.e1f0845.png"},ngBg:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,"",""])},pLMs:function(t,e,i){"use strict";function a(t){i("x7s6")}var n=i("Qye9"),o=i("M5AN"),r=i("K60R"),s=a,c=r(n.a,o.a,!1,s,"data-v-33278f49",null);e.a=c.exports},x7s6:function(t,e,i){var a=i("Q3WZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("4fcdf9d5",a,!0)}});
//# sourceMappingURL=layout.aed286f3898d4e711f13.js.map