(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{830:function(t,n,e){"use strict";e.r(n);var o={name:"IndexPage",layout:"fullpage",data:function(){return{KottiReadMe:'<section><h1 align="center">@3yourmind/kotti-ui</h1>\n<p align="center">\n\t<a href="https://npmjs.com/package/@3yourmind/kotti-ui"><img src="https://img.shields.io/npm/dm/@3yourmind/kotti-ui.svg?style=for-the-badge"/></a>\n\t<a href="https://npmjs.com/package/@3yourmind/kotti-ui"><img src="https://img.shields.io/npm/types/@3yourmind/kotti-ui.svg?style=for-the-badge"/></a>\n</p>\n<p align="center">\n\t<a href="https://bundlephobia.com/result?p=@3yourmind/kotti-ui"><img src="https://img.shields.io/bundlephobia/minzip/@3yourmind/kotti-ui.svg?style=for-the-badge"/></a>\n\t<a href="https://www.npmjs.com/package/@3yourmind/kotti-ui"><img src="https://img.shields.io/npm/v/@3yourmind/kotti-ui.svg?style=for-the-badge"/></a>\n</p>\n<table border="0" width="100%">\n<col style="width:33%">\n<col style="width:33%">\n<col style="width:33%">\n<tbody>\n<tr style="border: 0px !important;">\n<td valign="top" style="border: 0px !important;"><b>Complete</b>. The most commonly-needed components are implemented in Kotti. More components will be implemented when there is a specific need for them.</td>\n<td valign="top" style="border: 0px !important;"><b>TypeScript Support</b>. Kotti is transitioning to a fully TypeScript-based code-base. While Vue doesn’t support all TS features, we believe that it’s still benefitial in the supported cases.</td>\n<td valign="top" style="border: 0px !important;"><b>Modern</b>. Kotti aims to be a modern UI framework, regularly iterating over the existing design and adjusting it with newer UX improvements.</td>\n</tr>\n<tr style="border: 0px !important;">\n<td valign="top" style="border: 0px !important;"><b>Consistent</b>. The goal is to provide consistent, intuitive, and easy-to-use Vue components that users can immediately understand. Similar components shouldn’t defy expectations.</td>\n<td valign="top" style="border: 0px !important;"><b>Fail-fast</b>. We believe that it’s better to error early than to have hard-to-catch bugs due to API misuse. Our components provide prop validation to catch common mistakes and throw errors in unexpected situations.</td>\n<td valign="top" style="border: 0px !important;"><b>Open-Source</b>. Kotti is licensed under the MIT License — one of the most-permissible software licenses out there. Feel free to fork, modify, and use it. For any project you want.</td>\n</tr>\n</tbody>\n</table>\n<h2>Installation</h2>\n<pre>\n<a href="https://yarnpkg.com">yarn</a> add <a href="https://yarnpkg.com/en/package/@3yourmind/kotti-ui">@3yourmind/kotti-ui</a>\n</pre>\n<p>or</p>\n<pre>\n<a href="https://npmjs.com">npm</a> install --save <a href="https://npmjs.com/package/@3yourmind/kotti-ui">@3yourmind/kotti-ui</a>\n</pre>\n<h2>Documentation &amp; Usage</h2>\n<p><strong>Documentation</strong>: <a href="https://kotti.onrender.com">https://kotti.onrender.com</a> or <a href="https://3yourmind.github.io/kotti/">https://3yourmind.github.io/kotti/</a></p>\n<pre><code class="language-typescript"><span class="hljs-comment">// in main.ts / entrypoint</span>\n<span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span>\n<span class="hljs-keyword">import</span> KottiUI <span class="hljs-keyword">from</span> <span class="hljs-string">\'@3yourmind/kotti-ui\'</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'@3yourmind/kotti-ui/dist/styles.css\'</span>\n\n<span class="hljs-comment">// also make sure to set-up @vue/composition-api as it’s required for newer Kotti features</span>\n<span class="hljs-keyword">import</span> VueCompositionAPI <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vue/composition-api\'</span> <span class="hljs-comment">// right now, 0.6.1 is recommended</span>\nVue.use(VueCompositionAPI) <span class="hljs-comment">// should be added before KottiUi</span>\n\n<span class="hljs-comment">// (optional) register all KtComponents globally</span>\nVue.use(KottiUI)\n\n<span class="hljs-comment">// Alternatively, import the components you need</span>\n<span class="hljs-keyword">import</span> { KtForm } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@3yourmind/kotti-ui\'</span>\n\n<span class="hljs-keyword">const</span> CustomVueComponent = {\n\t<span class="hljs-comment">// ...</span>\n\tcomponents: {\n\t\t<span class="hljs-comment">//...</span>\n\t\tKtForm,\n\t},\n}\n</code></pre>\n<h2>Packages</h2>\n<table>\n<thead>\n<tr>\n<th style="text-align:right">Name</th>\n<th style="text-align:left">NPM</th>\n<th style="text-align:left">Downloads (Month)</th>\n<th style="text-align:left">Downloads (Total)</th>\n<th style="text-align:left">Size</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:right"><a href="/packages/kotti-ui"><code>@3yourmind/kotti-ui</code></a></td>\n<td style="text-align:left"><a href="https://npmjs.com/package/@3yourmind/kotti-ui"><img src="https://img.shields.io/npm/v/@3yourmind/kotti-ui" alt=""></a></td>\n<td style="text-align:left"><img src="https://img.shields.io/npm/dm/@3yourmind/kotti-ui.svg" alt=""></td>\n<td style="text-align:left"><img src="https://img.shields.io/npm/dt/@3yourmind/kotti-ui.svg" alt=""></td>\n<td style="text-align:left"><img src="https://img.shields.io/bundlephobia/minzip/@3yourmind/kotti-ui.svg" alt=""></td>\n</tr>\n<tr>\n<td style="text-align:right"><a href="/packages/yoco"><code>@3yourmind/yoco</code></a></td>\n<td style="text-align:left"><a href="https://npmjs.com/package/@3yourmind/yoco"><img src="https://img.shields.io/npm/v/@3yourmind/yoco" alt=""></a></td>\n<td style="text-align:left"><img src="https://img.shields.io/npm/dm/@3yourmind/yoco.svg" alt=""></td>\n<td style="text-align:left"><img src="https://img.shields.io/npm/dt/@3yourmind/yoco.svg" alt=""></td>\n<td style="text-align:left"><img src="https://img.shields.io/bundlephobia/minzip/@3yourmind/yoco.svg" alt=""></td>\n</tr>\n<tr>\n<td style="text-align:right"><a href="/packages/vue-use-tippy"><code>@3yourmind/vue-use-tippy</code></a></td>\n<td style="text-align:left"><a href="https://npmjs.com/package/@3yourmind/vue-use-tippy"><img src="https://img.shields.io/npm/v/@3yourmind/vue-use-tippy" alt=""></a></td>\n<td style="text-align:left"><img src="https://img.shields.io/npm/dm/@3yourmind/vue-use-tippy.svg" alt=""></td>\n<td style="text-align:left"><img src="https://img.shields.io/npm/dt/@3yourmind/vue-use-tippy.svg" alt=""></td>\n<td style="text-align:left"><img src="https://img.shields.io/bundlephobia/minzip/@3yourmind/vue-use-tippy.svg" alt=""></td>\n</tr>\n<tr>\n<td style="text-align:right"><a href="/packages/sass-node-modules-importer"><code>@3yourmind/sass-node-modules-importer</code></a></td>\n<td style="text-align:left"><a href="https://npmjs.com/package/@3yourmind/sass-node-modules-importer"><img src="https://img.shields.io/npm/v/@3yourmind/sass-node-modules-importer" alt=""></a></td>\n<td style="text-align:left"><img src="https://img.shields.io/npm/dm/@3yourmind/sass-node-modules-importer.svg" alt=""></td>\n<td style="text-align:left"><img src="https://img.shields.io/npm/dt/@3yourmind/sass-node-modules-importer.svg" alt=""></td>\n<td style="text-align:left"><img src="https://img.shields.io/bundlephobia/minzip/@3yourmind/sass-node-modules-importer.svg" alt=""></td>\n</tr>\n</tbody>\n</table>\n<h2>Development Workflow</h2>\n<h3>Initial Setup</h3>\n<p>Remember to use <a href="https://github.com/settings/emails">your GitHub email</a> for this repo</p>\n<pre><code class="language-bash">git <span class="hljs-built_in">clone</span> git@github.com:3yourmind/kotti\n\n<span class="hljs-built_in">cd</span> kotti\n\n<span class="hljs-comment"># configure github email for this repository</span>\ngit config user.email <span class="hljs-string">"123456+githubusername@users.noreply.github.com"</span>\n\n<span class="hljs-comment"># install dependencies</span>\nyarn config <span class="hljs-built_in">set</span> workspaces-experimental <span class="hljs-literal">true</span>\nyarn install\nyarn run lerna bootstrap\n</code></pre>\n<h3>Develop</h3>\n<pre><code class="language-bash"><span class="hljs-comment"># auto-build/watch</span>\nyarn run watch\n</code></pre>\n<p>or</p>\n<pre><code class="language-bash"><span class="hljs-comment"># having to build should hopefully be resolved in a future update</span>\nyarn workspace @3yourmind/sass-node-modules-importer run build\nyarn workspace @3yourmind/yoco run build\nyarn workspace @3yourmind/vue-use-tippy run build\nyarn workspace @3yourmind/kotti-ui run build\n<span class="hljs-comment"># serve at http://localhost:3000</span>\nyarn workspace @3yourmind/documentation run serve\n</code></pre>\n<h3>Linting</h3>\n<pre><code class="language-bash"><span class="hljs-comment"># es-lint (with --fix)</span>\nyarn run fix:eslint\n<span class="hljs-comment"># es-lint (without --fix)</span>\nyarn run check:eslint\n\n<span class="hljs-comment"># stylelint (with --fix)</span>\nyarn run fix:stylelint\n<span class="hljs-comment"># stylelint (without --fix)</span>\nyarn run check:stylelint\n</code></pre>\n<h3>Testing</h3>\n<pre><code class="language-bash">yarn run <span class="hljs-built_in">test</span>\n</code></pre>\n<h3>Publish</h3>\n<pre><code class="language-bash"><span class="hljs-comment"># you may need login to npm with your credentials if you have publishing rights</span>\nnpm login\n\n<span class="hljs-comment"># update the version in `package.json`</span>\n<span class="hljs-comment"># make sure to commit the version bump changes before publishing then run:</span>\n\nnode --version\n<span class="hljs-comment"># make sure it’s 12.x</span>\n\nyarn run lerna publish from-package\n\n<span class="hljs-comment"># update release notes</span>\n<span class="hljs-comment"># https://github.com/3YOURMIND/kotti/releases/new</span>\n</code></pre>\n<h3>Build</h3>\n<pre><code class="language-bash">yarn run lerna run build\n</code></pre>\n<h2>Internals</h2>\n<h3>Important Folders</h3>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">Path</th>\n<th style="text-align:left">Purpose</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left"><code>packages/documentation</code></td>\n<td style="text-align:left">Nuxt-managed documentation</td>\n</tr>\n</tbody>\n</table>\n</section>\n'}}},l=e(59),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.KottiReadMe)}})}),[],!1,null,null,null);n.default=component.exports}}]);