(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{630:function(t,e,n){var content=n(636);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("6285525e",content,!0,{sourceMap:!1})},631:function(t,e,n){var content=n(638);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("74fb5490",content,!0,{sourceMap:!1})},632:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var l=n(320);var o=n(376);function r(t){return function(t){if(Array.isArray(t))return Object(l.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},633:function(t,e,n){"use strict";n(148),n(317),n(149),n(135),n(462),n(134),n(133),n(318),n(319),n(252),n(190),n(251),n(150);var l=n(151),o=n(632),r=n(119),c=n(18),_=n(634),v=n(0),d=n(120),h=Object(v.defineComponent)({name:"ComponentInfoSlots",props:{slots:{required:!0,type:Object}},setup:function(){return{showSlots:Object(v.ref)(!1)}}}),m=(n(635),n(56)),f=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return Object.entries(t.slots).length>0?n("KtHeading",{attrs:{text:"Slots",toggleStatus:t.showSlots,toggleCloseText:"Hide",toggleText:"Show",type:"toggle"},on:{toggle:function(e){t.showSlots=!t.showSlots}}},[n("article",{staticClass:"slots-block"},t._l(Object.entries(t.slots),(function(e){var l=e[0],details=e[1];return n("section",{key:l},[n("div",{staticClass:"slots-block__header"},[n("div",{staticClass:"slots-block__header__name",domProps:{textContent:t._s(l)}}),t._v(" "),n("div",{staticClass:"slots-block__header__details"},[details.description?n("div",{staticClass:"slots-block__header__details__description",domProps:{textContent:t._s(details.description)}}):n("div",{staticClass:"slots-block__header__details__empty-description",domProps:{textContent:t._s("No description")}}),t._v(" "),null===details.scope?n("div",{staticClass:"slots-block__header__details__empty-scope",domProps:{textContent:t._s("(Not Scoped)")}}):t._e()])]),t._v(" "),null!==details.scope?n("div",{staticClass:"slots-block__scope"},t._l(Object.entries(details.scope),(function(e){var l=e[0],o=e[1],r=o.description,c=o.type;return n("div",{key:l,staticClass:"slots-block__scope__item"},[n("div",{class:"slots-block__scope__item__type slots-block__scope__item__type--is-"+c,domProps:{textContent:t._s(c)}}),t._v(" "),n("div",{staticClass:"slots-block__scope__item__name",domProps:{textContent:t._s(l)}}),t._v(" "),n("div",null===r?{staticClass:"slots-block__scope__item__description slots-block__scope__item__description--is-empty",domProps:{textContent:t._s("No Description")}}:{staticClass:"slots-block__scope__item__description",domProps:{textContent:t._s(r)}})])})),0):t._e()])})),0)]):t._e()}),[],!1,null,"94399a1c",null).exports;function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var j=Object(v.defineComponent)({props:{component:{required:!0,type:Object}},components:{ComponentInfoSlots:f},setup:function(t){return{Dashes:_.Dashes,labels:Object(v.computed)((function(){var e=[],n=t.component,c=n.meta,_=c.addedVersion,v=c.deprecated,h=c.designs,m=c.typeScript,f=n.name,j=t.component.props?"https://github.com/3YOURMIND/kotti/blob/master/packages/kotti-ui/source/".concat(Object(d.kebabCase)(f.replace(/^Kt/,"Kotti"))):null;return null!==v&&e.push({backgroundColor:"var(--red-20)",color:"var(--red-70)",left:"Deprecated for",right:"v".concat(v.version)}),null!==h?Array.isArray(h)?e.push.apply(e,Object(o.a)(h.map((function(t){return{backgroundColor:"var(--yellow-20)",color:"var(--yellow-70)",left:"Design “".concat(t.title,"”"),link:t.url,right:Object(l.a)({},r.a.MetaDesignType.FIGMA,"Figma")[t.type]}})))):e.push({backgroundColor:"var(--yellow-20)",color:"var(--yellow-70)",left:"Design",link:h.url,right:Object(l.a)({},r.a.MetaDesignType.FIGMA,"Figma")[h.type]}):e.push({backgroundColor:"var(--orange-20)",color:"var(--orange-70)",left:"Design",right:"MISSING"}),m&&e.push({backgroundColor:"var(--primary-20)",color:"var(--primary-70)",left:"TS",link:j?"".concat(j,"/types.ts"):void 0,right:m.namespace}),e.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({backgroundColor:"var(--green-20)",color:"var(--green-70)",left:"Added"},null===_?{right:"unknown"}:{link:"https://github.com/3YOURMIND/kotti/releases/tag/v".concat(_),right:"v".concat(_)})),j&&e.push({backgroundColor:"var(--purple-20)",color:"var(--purple-70)",left:"Source",link:"".concat(j,"/").concat(f,".vue"),right:"".concat(f,".vue")}),e})),showProps:Object(v.ref)(!1),stringifyDefault:function(t){return"function"==typeof t?"".concat(JSON.stringify(t())," *"):JSON.stringify(t)},stringifyType:function(t){return Array.isArray(t)?t.map((function(t){return t.name.toLowerCase()})).join(" | "):t.name.toLowerCase()},Yoco:c.Yoco}}}),y=(n(637),Object(m.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-info-container"},[n("div",{staticClass:"component-info",class:{"component-info--is-deprecated":null!==t.component.meta.deprecated}},[n("h1",{staticClass:"component-info__title",domProps:{textContent:t._s(t.component.name)}}),t._v(" "),n("div",[n("div",{staticClass:"component-info__labels"},t._l(t.labels,(function(label,e){return n("div",{key:e,staticClass:"component-info__label",style:"--background-color: "+label.backgroundColor+"; --color: "+label.color},[n("div",{staticClass:"component-info__label__left",domProps:{textContent:t._s(label.left)}}),t._v(" "),label.link?n("a",{staticClass:"component-info__label__right",attrs:{href:label.link,rel:"noreferrer noopener",target:"_blank"},domProps:{textContent:t._s(label.right)}}):n("div",{staticClass:"component-info__label__right",domProps:{textContent:t._s(label.right)}})])})),0)])]),t._v(" "),null!==t.component.meta.deprecated?n("article",{staticClass:"danger-block"},[n("section",[t._v("\n\t\t\tThis component is deprecated and will be removed in Kotti\n\t\t\t"),n("strong",{domProps:{textContent:t._s("v"+t.component.meta.deprecated.version)}})]),t._v(" "),n("section",[n("div",[n("strong",[t._v("Reason")]),t._v(": "+t._s(t.component.meta.deprecated.reason)+"\n\t\t\t")]),t._v(" "),n("div",[n("strong",{domProps:{textContent:t._s(t.component.meta.deprecated.alternatives.length<2?"Alternative":"Alternatives")}}),t._v(":\n\t\t\t\t"),t._l(t.component.meta.deprecated.alternatives,(function(e){return n("code",{key:e,domProps:{textContent:t._s(e)}})})),t._v(" "),0===t.component.meta.deprecated.alternatives.length?n("span",{domProps:{textContent:t._s(t.Dashes.EmDash)}}):t._e()],2)])]):t._e(),t._v(" "),n("ComponentInfoSlots",{attrs:{slots:t.component.meta.slots}}),t._v(" "),t.component.props?n("KtHeading",{attrs:{text:"Properties (Beta)",toggleStatus:t.showProps,toggleCloseText:"Hide",toggleText:"Show",type:"toggle"},on:{toggle:function(e){t.showProps=!t.showProps}}},[n("table",[n("thead",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Default")]),t._v(" "),n("th",[t._v("Validator")])]),t._v(" "),n("tbody",t._l(Object.entries(t.component.props).sort((function(t,e){var a=t[0],b=e[0];return a.localeCompare(b)})),(function(e){var l=e[0],o=e[1];return n("tr",{key:l},[n("td",[n("code",{domProps:{textContent:t._s(l)}})]),t._v(" "),n("td",[n("code",{domProps:{textContent:t._s(t.stringifyType(o.type))}})]),t._v(" "),n("td",[o.required?n("code",{staticStyle:{"font-style":"italic"},domProps:{textContent:t._s("required")}}):void 0===o.default?n("code",{staticStyle:{"font-style":"italic"},domProps:{textContent:t._s("No default")}}):n("code",{domProps:{textContent:t._s(t.stringifyDefault(o.default))}})]),t._v(" "),n("td",[n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("i",{staticClass:"yoco",style:{color:o.validator?"var(--green-50)":"var(--red-50)"},attrs:{title:o.validator?o.validator.toString():void 0},domProps:{textContent:t._s(o.validator?t.Yoco.Icon.CHECK:t.Yoco.Icon.CLOSE)}}),t._v(" "),o.validator?n("div",{domProps:{textContent:t._s(o.validator.name)}}):t._e()])])])})),0)])]):t._e()],1)}),[],!1,null,"d499df5c",null));e.a=y.exports},634:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.EmDash="—",t.EmDashHTML="&mdash;",t.EnDash="–",t.EnDashHTML="&ndash;",t.FigureDash="‒",t.FigureDashHTML="&#x2012;",t.QuotationDash="―",t.QuotationDashHTML="&horbar;",t.SwungDash="⁓",t.SwungDashHTML="&#x2053;"}(e.Dashes||(e.Dashes={}))},635:function(t,e,n){"use strict";var l=n(630);n.n(l).a},636:function(t,e,n){(e=n(106)(!1)).push([t.i,".slots-block[data-v-94399a1c]{color:var(--support-info-dark);background:var(--support-info-light);border:1px solid var(--support-info-dark);border-radius:3px}.slots-block>*[data-v-94399a1c]{padding:.4rem .6rem}.slots-block[data-v-94399a1c]>:not(:first-child){border-top:1px solid var(--support-info-dark)}.slots-block__header[data-v-94399a1c]{display:flex;flex:1;align-items:center}.slots-block__header__details[data-v-94399a1c],.slots-block__header__details__description[data-v-94399a1c]{flex:1}.slots-block__header__details__empty-description[data-v-94399a1c]{flex:1;font-style:italic}.slots-block__header__details__empty-scope[data-v-94399a1c]{font-style:italic}.slots-block__header__name[data-v-94399a1c]{font-weight:700}.slots-block__header>*[data-v-94399a1c]{display:flex;align-items:center}.slots-block__header[data-v-94399a1c]>:not(:first-child){margin-left:.4rem}.slots-block__scope[data-v-94399a1c]{margin-left:1.5rem}.slots-block__scope__item[data-v-94399a1c]{display:flex;align-items:center}.slots-block__scope__item[data-v-94399a1c]>:not(:first-child){margin-left:.3rem}.slots-block__scope__item__description--is-empty[data-v-94399a1c]{font-style:italic}.slots-block__scope__item__name[data-v-94399a1c]{min-width:100px;font-weight:700}.slots-block__scope__item__type[data-v-94399a1c]{min-width:60px}.slots-block__scope__item__type--is-function[data-v-94399a1c]{color:var(--orange-50)}.slots-block__scope__item__type--is-object[data-v-94399a1c]{color:var(--purple-50)}.slots-block__scope__item__type--is-integer[data-v-94399a1c]{color:var(--green-50)}",""]),t.exports=e},637:function(t,e,n){"use strict";var l=n(631);n.n(l).a},638:function(t,e,n){(e=n(106)(!1)).push([t.i,".component-info[data-v-d499df5c]{display:flex;flex-wrap:wrap;margin:-5px -10px}@media(min-width:960px){.component-info[data-v-d499df5c]{flex-direction:row;align-items:center}}.component-info>*[data-v-d499df5c]{display:flex;margin:5px 10px}.component-info__labels[data-v-d499df5c]{display:flex;flex-wrap:wrap;align-items:center;margin:-5px}.component-info__label[data-v-d499df5c]{display:flex;margin:5px;overflow:hidden;border:1px solid var(--color);border-radius:3px}.component-info__label__left[data-v-d499df5c],.component-info__label__right[data-v-d499df5c]{padding:2px 8px}.component-info__label a.component-info__label__right[data-v-d499df5c]:hover{text-decoration:underline}.component-info__label__left[data-v-d499df5c]{font-weight:700;color:var(--color);background-color:var(--background-color);border-right:1px solid var(--color)}.component-info--is-deprecated .component-info__title[data-v-d499df5c]{-webkit-text-decoration:underline wavy var(--red-50);text-decoration:underline wavy var(--red-50)}.component-info-container[data-v-d499df5c]{margin-bottom:32px}.component-info-container[data-v-d499df5c]>:not(:first-child){margin-top:16px}.danger-block[data-v-d499df5c]{color:var(--red-70);background:var(--support-error-light);border:1px solid var(--support-error-dark);border-radius:3px}.danger-block a[data-v-d499df5c]{color:inherit;text-decoration:underline}.danger-block code+code[data-v-d499df5c]{margin-left:8px}.danger-block>section[data-v-d499df5c]{padding:.4rem .6rem}.danger-block>section[data-v-d499df5c]:not(:first-child){border-top:1px solid var(--support-error-dark)}",""]),t.exports=e},855:function(t,e,n){"use strict";n.r(e);var l=n(233),o=n(0),r=n(633),c=Object(o.defineComponent)({name:"DocumentationPageUsageComponentsInputs",components:{ComponentInfo:r.a},setup:function(){return{component:l.a,v1:Object(o.ref)("Jony One O"),v2:Object(o.ref)(""),v3:Object(o.ref)("Jony Three O"),v4:Object(o.ref)(4),v5:Object(o.ref)("email@example.com")}}}),_=n(56),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ComponentInfo",t._b({},"ComponentInfo",{component:t.component},!1)),t._v(" "),n("h2",[t._v("Label")]),t._v(" "),n("div",{staticClass:"element-example"},[n("KtInput",{attrs:{label:"Name",labelFor:"Name",placeholder:"Add your name"},model:{value:t.v1,callback:function(e){t.v1=e},expression:"v1"}}),t._v(" "),n("KtInput",{attrs:{placeholder:"Add your name"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("h2",[t._v("Icon")]),t._v(" "),n("div",{staticClass:"element-example"},[n("KtInput",{attrs:{placeholder:"Add your name",icon:"user"},model:{value:t.v3,callback:function(e){t.v3=e},expression:"v3"}}),t._v(" "),n("KtInput",{attrs:{iconPosition:"right",placeholder:"Add your name",icon:"user"},model:{value:t.v3,callback:function(e){t.v3=e},expression:"v3"}})],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("h2",[t._v("Icon Dialog")]),t._v(" "),n("div",{staticClass:"element-example"},[n("KtInput",{attrs:{placeholder:"Serach your name",icon:"circle_question",iconPosition:"right",dialog:"Available"},model:{value:t.v3,callback:function(e){t.v3=e},expression:"v3"}}),t._v(" "),n("KtInput",{attrs:{placeholder:"Serach your name",icon:"check",iconPosition:"right"},model:{value:t.v3,callback:function(e){t.v3=e},expression:"v3"}},[n("div",{attrs:{slot:"dialog"},slot:"dialog"},[n("h4",[t._v("Availabe")]),t._v(" "),n("span",[t._v("This user name is availabe")])])])],1),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("h2",[t._v("Addon Text")]),t._v(" "),n("div",{staticClass:"element-example"},[n("KtInput",{attrs:{label:"Name",placeholder:"Add your name",addonText:"User Name"},model:{value:t.v3,callback:function(e){t.v3=e},expression:"v3"}})],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("h2",[t._v("Type")]),t._v(" "),n("div",{staticClass:"element-example"},[n("KtInput",{attrs:{type:"number",label:"Number",step:"0.1",placeholder:"Add your name"},model:{value:t.v4,callback:function(e){t.v4=e},expression:"v4"}}),t._v(" "),n("KtInput",{attrs:{type:"email",label:"Email"},model:{value:t.v5,callback:function(e){t.v5=e},expression:"v5"}})],1),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("h2",[t._v("Disabled")]),t._v(" "),n("div",{staticClass:"element-example white"},[n("KtInput",{attrs:{label:"Disabled Input",placeholder:t.v5,disabled:""}})],1),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),n("h2",[t._v("Validate")]),t._v(" "),n("div",{staticClass:"element-example"},[n("KtInput",{attrs:{label:"Success Input",placeholder:t.v5,validate:"success",validateText:"Your user name is availabe"}}),t._v(" "),n("KtInput",{attrs:{label:"Error Input",placeholder:t.v5,validate:"error",validateText:"Your input is invalid"}}),t._v(" "),n("KtInput",{attrs:{label:"Warning Input",placeholder:t.v5,validate:"warning",validateText:"Your input is wrong"}})],1),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),n("h2",[t._v("Required")]),t._v(" "),n("div",{staticClass:"element-example"},[n("KtInput",{attrs:{placeholder:t.v5,label:"Required Input",required:""}})],1),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),n("h2",[t._v("Compact")]),t._v(" "),n("p",[t._v("In order to save vertical space on the page when many inputs need, and icon only input can not deliver clear information,\nyou can choose compact input style.")]),t._v(" "),t._m(17),t._v(" "),n("div",{staticClass:"element-example"},[n("KtInput",{attrs:{label:"Full Name",placeholder:"Your first name and last name",isCompact:""}}),t._v(" "),n("KtInput",{attrs:{label:"Address",isCompact:""}}),t._v(" "),n("KtInput",{attrs:{label:"Company",isCompact:""}})],1),t._v(" "),t._m(18),t._v(" "),t._m(19)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("label")]),this._v(" props accept "),e("code",[this._v("String")]),this._v(" and show on the top of "),e("code",[this._v("input")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("labelFor")]),this._v(" define the "),e("code",[this._v("for")]),this._v(" attributes in "),e("code",[this._v("label")]),this._v(".")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"v1"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Name"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("labelFor")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Name"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Add your name"')]),t._v("/>")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Add your name"')]),t._v("/>")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("icon")]),this._v(" accepts any "),e("code",[this._v("String")]),this._v(" from yoco, the default location of icon is "),e("code",[this._v("left")]),this._v(",\nto change the location, set "),e("code",[this._v('iconPosition="right"')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"v3"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Add your name"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"user"')]),t._v("/>")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"v2"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Serach your name"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("iconPosition")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"right"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"search"')]),t._v("/>")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you want show addition information of the input field, "),e("code",[this._v("dialog")]),this._v(" accepts "),e("code",[this._v("String")]),this._v(" text or "),e("code",[this._v("dialog")]),this._v(" slot for HTML template.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v("\n\t\t"),n("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"v3"')]),t._v("\n\t\t"),n("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Serach your name"')]),t._v("\n\t\t"),n("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"circle_question"')]),t._v("\n\t\t"),n("span",{staticClass:"hljs-attr"},[t._v("iconPosition")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"right"')]),t._v("\n\t\t"),n("span",{staticClass:"hljs-attr"},[t._v("dialog")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Available"')]),t._v("\n\t\t/>")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"v3"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Serach your name"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"check"')]),t._v("\n\t"),n("span",{staticClass:"hljs-attr"},[t._v("iconPosition")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"right"')]),t._v("\n\t>")]),t._v("\n\t"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"dialog"')]),t._v(">")]),t._v("\n\t\t"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("h4")]),t._v(">")]),t._v("Availabe"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("h4")]),t._v(">")]),t._v("\n\t\t"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("This user name is availabe"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("\n\t"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(">")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When an value needs a fixed prefix or suffix,\nin order to make sure user doesn't put it in input field,\nuse an "),e("code",[this._v("addonText")]),this._v(" to indicate that system has already pre-input this value.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"v3"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Name"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Add your name"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("addonText")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"User Name"')]),t._v("/>")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("For input field it accept types "),n("code",[t._v("Number")]),t._v(", "),n("code",[t._v("text")]),t._v(" and "),n("code",[t._v("email")]),t._v(".\nUsing "),n("code",[t._v("step")]),t._v(" to define the precision.\nIf you want to use "),n("code",[t._v("radio")]),t._v(" type, using KtRadio`.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"v4"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"number"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Number"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("step")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"0.1"')]),t._v("/>")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"v5"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"email"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Email"')]),t._v(" />")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Add "),e("code",[this._v("disabled")]),this._v(" to "),e("code",[this._v("KtInput")]),this._v(" to make input not editable.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Disabled Input"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"v5"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(" />")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("validate")]),this._v(" props accepts three validation: "),e("code",[this._v("success")]),this._v(", "),e("code",[this._v("error")]),this._v(", and "),e("code",[this._v("warning")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Success Input"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"v5"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("validate")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"success"')]),t._v(" />")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Error Input"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"v5"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("validate")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"error"')]),t._v(" />")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Warning Input"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"v5"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("validate")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"warning"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("validateText")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Your input is wrong"')]),t._v("/>")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("required")]),this._v(" marks a field as non-optional. Browsers will also refuse sending the form until the field is filled.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"email@example.com"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Required Input"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("required")]),t._v("/>")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Note that "),e("strong",[e("code",[this._v("isCompact")]),this._v(" is incompatible with "),e("code",[this._v("addonText")])]),this._v(", and won’t be applied if both are passed.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Using "),e("code",[this._v("isCompact")]),this._v(" to enable compact style.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Full Name"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Your first name and last name"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("isCompact")]),t._v("/>")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Address"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("isCompact")]),t._v("/>")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Company"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("isCompact")]),t._v("/>")]),t._v("\n")])])}],!1,null,null,null);e.default=component.exports}}]);