(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{630:function(t,e,o){var content=o(636);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(107).default)("6285525e",content,!0,{sourceMap:!1})},631:function(t,e,o){var content=o(638);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(107).default)("74fb5490",content,!0,{sourceMap:!1})},632:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(320);var l=o(376);function r(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},633:function(t,e,o){"use strict";o(148),o(317),o(149),o(135),o(462),o(134),o(133),o(318),o(319),o(252),o(190),o(251),o(150);var n=o(151),l=o(632),r=o(119),c=o(18),_=o(634),d=o(0),v=o(120),f=Object(d.defineComponent)({name:"ComponentInfoSlots",props:{slots:{required:!0,type:Object}},setup:function(){return{showSlots:Object(d.ref)(!1)}}}),m=(o(635),o(56)),h=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return Object.entries(t.slots).length>0?o("KtHeading",{attrs:{text:"Slots",toggleStatus:t.showSlots,toggleCloseText:"Hide",toggleText:"Show",type:"toggle"},on:{toggle:function(e){t.showSlots=!t.showSlots}}},[o("article",{staticClass:"slots-block"},t._l(Object.entries(t.slots),(function(e){var n=e[0],details=e[1];return o("section",{key:n},[o("div",{staticClass:"slots-block__header"},[o("div",{staticClass:"slots-block__header__name",domProps:{textContent:t._s(n)}}),t._v(" "),o("div",{staticClass:"slots-block__header__details"},[details.description?o("div",{staticClass:"slots-block__header__details__description",domProps:{textContent:t._s(details.description)}}):o("div",{staticClass:"slots-block__header__details__empty-description",domProps:{textContent:t._s("No description")}}),t._v(" "),null===details.scope?o("div",{staticClass:"slots-block__header__details__empty-scope",domProps:{textContent:t._s("(Not Scoped)")}}):t._e()])]),t._v(" "),null!==details.scope?o("div",{staticClass:"slots-block__scope"},t._l(Object.entries(details.scope),(function(e){var n=e[0],l=e[1],r=l.description,c=l.type;return o("div",{key:n,staticClass:"slots-block__scope__item"},[o("div",{class:"slots-block__scope__item__type slots-block__scope__item__type--is-"+c,domProps:{textContent:t._s(c)}}),t._v(" "),o("div",{staticClass:"slots-block__scope__item__name",domProps:{textContent:t._s(n)}}),t._v(" "),o("div",null===r?{staticClass:"slots-block__scope__item__description slots-block__scope__item__description--is-empty",domProps:{textContent:t._s("No Description")}}:{staticClass:"slots-block__scope__item__description",domProps:{textContent:t._s(r)}})])})),0):t._e()])})),0)]):t._e()}),[],!1,null,"94399a1c",null).exports;function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var x=Object(d.defineComponent)({props:{component:{required:!0,type:Object}},components:{ComponentInfoSlots:h},setup:function(t){return{Dashes:_.Dashes,labels:Object(d.computed)((function(){var e=[],o=t.component,c=o.meta,_=c.addedVersion,d=c.deprecated,f=c.designs,m=c.typeScript,h=o.name,x=t.component.props?"https://github.com/3YOURMIND/kotti/blob/master/packages/kotti-ui/source/".concat(Object(v.kebabCase)(h.replace(/^Kt/,"Kotti"))):null;return null!==d&&e.push({backgroundColor:"var(--red-20)",color:"var(--red-70)",left:"Deprecated for",right:"v".concat(d.version)}),null!==f?Array.isArray(f)?e.push.apply(e,Object(l.a)(f.map((function(t){return{backgroundColor:"var(--yellow-20)",color:"var(--yellow-70)",left:"Design “".concat(t.title,"”"),link:t.url,right:Object(n.a)({},r.a.MetaDesignType.FIGMA,"Figma")[t.type]}})))):e.push({backgroundColor:"var(--yellow-20)",color:"var(--yellow-70)",left:"Design",link:f.url,right:Object(n.a)({},r.a.MetaDesignType.FIGMA,"Figma")[f.type]}):e.push({backgroundColor:"var(--orange-20)",color:"var(--orange-70)",left:"Design",right:"MISSING"}),m&&e.push({backgroundColor:"var(--primary-20)",color:"var(--primary-70)",left:"TS",link:x?"".concat(x,"/types.ts"):void 0,right:m.namespace}),e.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({backgroundColor:"var(--green-20)",color:"var(--green-70)",left:"Added"},null===_?{right:"unknown"}:{link:"https://github.com/3YOURMIND/kotti/releases/tag/v".concat(_),right:"v".concat(_)})),x&&e.push({backgroundColor:"var(--purple-20)",color:"var(--purple-70)",left:"Source",link:"".concat(x,"/").concat(h,".vue"),right:"".concat(h,".vue")}),e})),showProps:Object(d.ref)(!1),stringifyDefault:function(t){return"function"==typeof t?"".concat(JSON.stringify(t())," *"):JSON.stringify(t)},stringifyType:function(t){return Array.isArray(t)?t.map((function(t){return t.name.toLowerCase()})).join(" | "):t.name.toLowerCase()},Yoco:c.Yoco}}}),C=(o(637),Object(m.a)(x,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component-info-container"},[o("div",{staticClass:"component-info",class:{"component-info--is-deprecated":null!==t.component.meta.deprecated}},[o("h1",{staticClass:"component-info__title",domProps:{textContent:t._s(t.component.name)}}),t._v(" "),o("div",[o("div",{staticClass:"component-info__labels"},t._l(t.labels,(function(label,e){return o("div",{key:e,staticClass:"component-info__label",style:"--background-color: "+label.backgroundColor+"; --color: "+label.color},[o("div",{staticClass:"component-info__label__left",domProps:{textContent:t._s(label.left)}}),t._v(" "),label.link?o("a",{staticClass:"component-info__label__right",attrs:{href:label.link,rel:"noreferrer noopener",target:"_blank"},domProps:{textContent:t._s(label.right)}}):o("div",{staticClass:"component-info__label__right",domProps:{textContent:t._s(label.right)}})])})),0)])]),t._v(" "),null!==t.component.meta.deprecated?o("article",{staticClass:"danger-block"},[o("section",[t._v("\n\t\t\tThis component is deprecated and will be removed in Kotti\n\t\t\t"),o("strong",{domProps:{textContent:t._s("v"+t.component.meta.deprecated.version)}})]),t._v(" "),o("section",[o("div",[o("strong",[t._v("Reason")]),t._v(": "+t._s(t.component.meta.deprecated.reason)+"\n\t\t\t")]),t._v(" "),o("div",[o("strong",{domProps:{textContent:t._s(t.component.meta.deprecated.alternatives.length<2?"Alternative":"Alternatives")}}),t._v(":\n\t\t\t\t"),t._l(t.component.meta.deprecated.alternatives,(function(e){return o("code",{key:e,domProps:{textContent:t._s(e)}})})),t._v(" "),0===t.component.meta.deprecated.alternatives.length?o("span",{domProps:{textContent:t._s(t.Dashes.EmDash)}}):t._e()],2)])]):t._e(),t._v(" "),o("ComponentInfoSlots",{attrs:{slots:t.component.meta.slots}}),t._v(" "),t.component.props?o("KtHeading",{attrs:{text:"Properties (Beta)",toggleStatus:t.showProps,toggleCloseText:"Hide",toggleText:"Show",type:"toggle"},on:{toggle:function(e){t.showProps=!t.showProps}}},[o("table",[o("thead",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",[t._v("Default")]),t._v(" "),o("th",[t._v("Validator")])]),t._v(" "),o("tbody",t._l(Object.entries(t.component.props).sort((function(t,e){var a=t[0],b=e[0];return a.localeCompare(b)})),(function(e){var n=e[0],l=e[1];return o("tr",{key:n},[o("td",[o("code",{domProps:{textContent:t._s(n)}})]),t._v(" "),o("td",[o("code",{domProps:{textContent:t._s(t.stringifyType(l.type))}})]),t._v(" "),o("td",[l.required?o("code",{staticStyle:{"font-style":"italic"},domProps:{textContent:t._s("required")}}):void 0===l.default?o("code",{staticStyle:{"font-style":"italic"},domProps:{textContent:t._s("No default")}}):o("code",{domProps:{textContent:t._s(t.stringifyDefault(l.default))}})]),t._v(" "),o("td",[o("div",{staticStyle:{display:"flex","align-items":"center"}},[o("i",{staticClass:"yoco",style:{color:l.validator?"var(--green-50)":"var(--red-50)"},attrs:{title:l.validator?l.validator.toString():void 0},domProps:{textContent:t._s(l.validator?t.Yoco.Icon.CHECK:t.Yoco.Icon.CLOSE)}}),t._v(" "),l.validator?o("div",{domProps:{textContent:t._s(l.validator.name)}}):t._e()])])])})),0)])]):t._e()],1)}),[],!1,null,"d499df5c",null));e.a=C.exports},634:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.EmDash="—",t.EmDashHTML="&mdash;",t.EnDash="–",t.EnDashHTML="&ndash;",t.FigureDash="‒",t.FigureDashHTML="&#x2012;",t.QuotationDash="―",t.QuotationDashHTML="&horbar;",t.SwungDash="⁓",t.SwungDashHTML="&#x2053;"}(e.Dashes||(e.Dashes={}))},635:function(t,e,o){"use strict";var n=o(630);o.n(n).a},636:function(t,e,o){(e=o(106)(!1)).push([t.i,".slots-block[data-v-94399a1c]{color:var(--support-info-dark);background:var(--support-info-light);border:1px solid var(--support-info-dark);border-radius:3px}.slots-block>*[data-v-94399a1c]{padding:.4rem .6rem}.slots-block[data-v-94399a1c]>:not(:first-child){border-top:1px solid var(--support-info-dark)}.slots-block__header[data-v-94399a1c]{display:flex;flex:1;align-items:center}.slots-block__header__details[data-v-94399a1c],.slots-block__header__details__description[data-v-94399a1c]{flex:1}.slots-block__header__details__empty-description[data-v-94399a1c]{flex:1;font-style:italic}.slots-block__header__details__empty-scope[data-v-94399a1c]{font-style:italic}.slots-block__header__name[data-v-94399a1c]{font-weight:700}.slots-block__header>*[data-v-94399a1c]{display:flex;align-items:center}.slots-block__header[data-v-94399a1c]>:not(:first-child){margin-left:.4rem}.slots-block__scope[data-v-94399a1c]{margin-left:1.5rem}.slots-block__scope__item[data-v-94399a1c]{display:flex;align-items:center}.slots-block__scope__item[data-v-94399a1c]>:not(:first-child){margin-left:.3rem}.slots-block__scope__item__description--is-empty[data-v-94399a1c]{font-style:italic}.slots-block__scope__item__name[data-v-94399a1c]{min-width:100px;font-weight:700}.slots-block__scope__item__type[data-v-94399a1c]{min-width:60px}.slots-block__scope__item__type--is-function[data-v-94399a1c]{color:var(--orange-50)}.slots-block__scope__item__type--is-object[data-v-94399a1c]{color:var(--purple-50)}.slots-block__scope__item__type--is-integer[data-v-94399a1c]{color:var(--green-50)}",""]),t.exports=e},637:function(t,e,o){"use strict";var n=o(631);o.n(n).a},638:function(t,e,o){(e=o(106)(!1)).push([t.i,".component-info[data-v-d499df5c]{display:flex;flex-wrap:wrap;margin:-5px -10px}@media(min-width:960px){.component-info[data-v-d499df5c]{flex-direction:row;align-items:center}}.component-info>*[data-v-d499df5c]{display:flex;margin:5px 10px}.component-info__labels[data-v-d499df5c]{display:flex;flex-wrap:wrap;align-items:center;margin:-5px}.component-info__label[data-v-d499df5c]{display:flex;margin:5px;overflow:hidden;border:1px solid var(--color);border-radius:3px}.component-info__label__left[data-v-d499df5c],.component-info__label__right[data-v-d499df5c]{padding:2px 8px}.component-info__label a.component-info__label__right[data-v-d499df5c]:hover{text-decoration:underline}.component-info__label__left[data-v-d499df5c]{font-weight:700;color:var(--color);background-color:var(--background-color);border-right:1px solid var(--color)}.component-info--is-deprecated .component-info__title[data-v-d499df5c]{-webkit-text-decoration:underline wavy var(--red-50);text-decoration:underline wavy var(--red-50)}.component-info-container[data-v-d499df5c]{margin-bottom:32px}.component-info-container[data-v-d499df5c]>:not(:first-child){margin-top:16px}.danger-block[data-v-d499df5c]{color:var(--red-70);background:var(--support-error-light);border:1px solid var(--support-error-dark);border-radius:3px}.danger-block a[data-v-d499df5c]{color:inherit;text-decoration:underline}.danger-block code+code[data-v-d499df5c]{margin-left:8px}.danger-block>section[data-v-d499df5c]{padding:.4rem .6rem}.danger-block>section[data-v-d499df5c]:not(:first-child){border-top:1px solid var(--support-error-dark)}",""]),t.exports=e},854:function(t,e,o){"use strict";o.r(e);var n=o(217),l=o(0),r=o(633),c=Object(l.defineComponent)({name:"DocumentationPageUsageComponentsInlineEdit",components:{ComponentInfo:r.a},setup:function(){return{component:n.a,showAlert:function(t){return window.alert(t)},value1:Object(l.ref)("")}}}),_=o(56),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("ComponentInfo",t._b({},"ComponentInfo",{component:t.component},!1)),t._v(" "),o("h2",[t._v("Basic")]),t._v(" "),o("div",{staticClass:"element-example white"},[o("KtInlineEdit",{staticClass:"mb-16px",attrs:{label:"Picture Title",placeholder:"Give a title",invalidMessage:"Click to change the title"},on:{confirm:function(e){return t.showAlert("Confirmed Function")},dismiss:function(e){return t.showAlert("Dismissed Function")}},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v(" "),o("img",{attrs:{src:"https://picsum.photos/800/200"}})],1),t._v(" "),t._m(0),t._v(" "),o("h2",[t._v("Usage")]),t._v(" "),o("h3",[t._v("Attributes")]),t._v(" "),t._m(1),t._v(" "),o("h3",[t._v("Input Events")]),t._v(" "),t._m(2),t._v(" "),o("h3",[t._v("Button Events")]),t._v(" "),t._m(3)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("pre",[o("code",{staticClass:"language-html"},[o("span",{staticClass:"hljs-tag"},[t._v("<"),o("span",{staticClass:"hljs-name"},[t._v("KtInlineEdit")]),t._v("\n\t"),o("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),o("span",{staticClass:"hljs-string"},[t._v('"Picture Title"')]),t._v("\n\t"),o("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),o("span",{staticClass:"hljs-string"},[t._v('"this holder"')]),t._v("\n\t"),o("span",{staticClass:"hljs-attr"},[t._v("invalidMessage")]),t._v("="),o("span",{staticClass:"hljs-string"},[t._v('"Click to change the title"')]),t._v("\n\t"),o("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),o("span",{staticClass:"hljs-string"},[t._v('"value1"')]),t._v("\n\t@"),o("span",{staticClass:"hljs-attr"},[t._v("confirm")]),t._v("="),o("span",{staticClass:"hljs-string"},[t._v("\"showAlert('Confirmed Function')\"")]),t._v("\n\t@"),o("span",{staticClass:"hljs-attr"},[t._v("dismiss")]),t._v("="),o("span",{staticClass:"hljs-string"},[t._v("\"showAlert('Dismissed Function')\"")]),t._v("\n\t"),o("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),o("span",{staticClass:"hljs-string"},[t._v('"mb-16px"')]),t._v("\n/>")]),t._v("\n"),o("span",{staticClass:"hljs-tag"},[t._v("<"),o("span",{staticClass:"hljs-name"},[t._v("img")]),t._v(" "),o("span",{staticClass:"hljs-attr"},[t._v("src")]),t._v("="),o("span",{staticClass:"hljs-string"},[t._v('"https://picsum.photos/800/200"')]),t._v("/>")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("Attribute")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Accepted values")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Default")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("invalidMessage")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("message")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("String")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v('"Click to edit"')])])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("label")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("label text")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("String")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("—")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("value")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("value of message and input value")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("v-model")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("—")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("multiline")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("allow input enter multilines")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("Boolean")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("false")])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("Event Name")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Parameters")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("change")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("triggers when input value changes")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("(event: Event)")])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("Event Name")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Parameters")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("confirm")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("triggers when confirm button clicked")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("(event: Event)")])])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("dismiss")])]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("triggers when dismiss button clicked")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[t._v("(event: Event)")])])])])])}],!1,null,null,null);e.default=component.exports}}]);