# Yox Snippets for Visual Studio Code

This extension adds Yox Code Snippets into Visual Studio Code.

这个插件基于最新的 Yox 的 API 添加了Code Snippets。

<a href="https://marketplace.visualstudio.com/items?itemName=Wscats.eno"><img src="https://img.shields.io/badge/Download-+-orange" alt="Download" /></a>
<a href="https://marketplace.visualstudio.com/items?itemName=Wscats.eno"><img src="https://img.shields.io/badge/Macketplace-v2.00-brightgreen" alt="Macketplace" /></a>
<a href="https://github.com/Wscats/compile-hero"><img src="https://img.shields.io/badge/Github Page-Wscats-yellow" alt="Github Page" /></a>
<a href="https://github.com/Wscats"><img src="https://img.shields.io/badge/Author-Eno Yao-blueviolet" alt="Eno Yao" /></a>
<a href="https://github.com/Wscats"><img src="https://api.netlify.com/api/v1/badges/b652768b-1673-42cd-98dd-3fd807b2ebca/deploy-status" alt="Status" /></a>

# Snippets

Including most of the API of Yox. You can type `Yox`, choose `Yox.component`, and press ENTER, then `Yox.component` appear on the screen.

插件的 Snippets 如下表格所示，比如你可以键入 `Yox` 然后按上下键选中 `Yox.component` 再按 Enter 键，就输入了`Yox.component`了。

| Prefix | JavaScript Snippet Content |
| ------ | ------------ |
| `import` | `import ... from ...` |
| `newYox` | `new Yox({...})` |
| `addSpecialEvent` | `Yox.dom.addSpecialEvent(...)` |
| `addSpecialEvent` | `Yox.dom.addSpecialEvent(...)` |

<br />

| Prefix | HTML Snippet Content |
| ------ | ------------ |
| `template` | `<template></template>` |
| `script` | `<script></script>` |
| `style` | `<style></style>` |
| `vText` | `v-text=msg` |
| `vHtml` | `v-html=html` |
| `vShow` | `v-show` |
| `vIf` | `v-if` |
| `vElse` | `v-else` |
| `vElseIf` | `v-else-if` |
| `vForWithoutKey` | `v-for` |
| `vFor` | `v-for="" :key=""` |
| `vOn` | `v-on` |
| `vBind` | `v-bind` |
| `vModel` | `v-model` |
| `vPre` | `v-pre` |
| `vCloak` | `v-cloak` |
| `vOnce` | `v-once` |
| `key` | `:key` |
| `ref` | `ref`|
| `slotA` | `slot=""`|
| `slotE` | `<slot></slot>`|
| `slotScope` | `slot-scope=""`|
| `component` | `<component :is=''></component>`|
| `keepAlive` | `<keep-alive></keep-alive>` |
| `transition` | `<transition></transition>` |
| `transitionGroup` | `<transition-group></transition-group>` |
| `enterClass` | `enter-class=''`|
| `leaveClass` | `leave-class=''`|
| `appearClass` | `appear-class=''`|
| `enterToClass` | `enter-to-class=''`|
| `leaveToClass` | `leave-to-class=''`|
| `appearToClass` | `appear-to-class=''`|
| `enterActiveClass` | `enter-active-class=''`|
| `leaveActiveClass` | `leave-active-class=''`|
| `appearActiveClass` | `appear-active-class=''`|
| `beforeEnterEvent` | `@before-enter=''`|
| `beforeLeaveEvent` | `@before-leave=''`|
| `beforeAppearEvent` | `@before-appear=''`|
| `enterEvent` | `@enter=''`|
| `leaveEvent` | `@leave=''`|
| `appearEvent` | `@appear=''`|
| `afterEnterEvent` | `@after-enter=''`|
| `afterLeaveEvent` | `@after-leave=''`|
| `afterAppearEvent` | `@after-appear=''`|
| `enterCancelledEvent` | `@enter-cancelled=''`|
| `leaveCancelledEvent` | `@leave-cancelled=''`|
| `appearCancelledEvent` | `@appear-cancelled=''`|

<br />

| Prefix | Vue Router Snippet Content |
| ------ | ------------ |
| `routerLink` | `<router-link></router-link>` |
| `routerView` | `<router-view></router-view>` |
| `to` | `to=""` |
| `tag` | `tag=""` |
| `newVueRouter` | `const router = newVueRouter({ })` |
| `routerBeforeEach` | `router.beforeEach((to, from, next) => { }` |
| `routerBeforeResolve` | `router.beforeResolve((to, from, next) => { }` |
| `routerAfterEach` | `router.afterEach((to, from) => { }` |
| `routerPush` | `router.push()` |
| `routerReplace` | `router.replace()` |
| `routerGo` | `router.back()` |
| `routerBack` | `router.push()` |
| `routerForward` | `router.forward()` |
| `routerGetMatchedComponents` | `router.getMatchedComponents()` |
| `routerResolve` | `router.resolve()` |
| `routerAddRoutes` | `router.addRoutes()` |
| `routerOnReady` | `router.onReady()` |
| `routerOnError` | `router.onError()` |
| `routes` | `routes: []` |
| `beforeEnter` | `beforeEnter: (to, from, next) => { }` |
| `beforeRouteEnter` | `beforeRouteEnter (to, from, next) { }` |
| `beforeRouteLeave` | `beforeRouteLeave (to, from, next) { }` |
| `scrollBehavior` | `scrollBehavior (to, from, savedPosition) { }` |

<br />

| Prefix | Vuex Snippet Content |
| ------ | ------------ |
| `newVuexStore` | `const store = new Vuex.Store({ })` |

| Prefix | Nuxt.js Snippet Content |
| ------ | ------------ |
| `nuxt` | `<nuxt/>` |
| `nuxtChild` | `<nuxt-child/>` |
| `nuxtLink` | `<nuxt-link to=""/>` |
| `asyncData` | `asyncData() {}` |