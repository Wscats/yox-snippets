# Yox Snippets for Visual Studio Code

This extension adds Yox Code Snippets into Visual Studio Code.

这个插件基于最新的 Yox 的 API 添加了Code Snippets。

<a href="https://marketplace.visualstudio.com/items?itemName=Wscats.yox"><img src="https://img.shields.io/badge/Download-+-orange" alt="Download" /></a>
<a href="https://marketplace.visualstudio.com/items?itemName=Wscats.yox"><img src="https://img.shields.io/badge/Macketplace-v2.00-brightgreen" alt="Macketplace" /></a>
<a href="https://github.com/Wscats/yox-snippets"><img src="https://img.shields.io/badge/Github Page-Wscats-yellow" alt="Github Page" /></a>
<a href="https://github.com/Wscats"><img src="https://img.shields.io/badge/Author-Eno Yao-blueviolet" alt="Eno Yao" /></a>
<a href="https://github.com/Wscats"><img src="https://api.netlify.com/api/v1/badges/b652768b-1673-42cd-98dd-3fd807b2ebca/deploy-status" alt="Status" /></a>

<img src="./public/2.gif" />

# Snippets

Including most of the API of Yox. You can type `Yox`, choose `Yox.component`, and press ENTER, then `Yox.component` appear on the screen.

插件的 Snippets 如下表格所示，比如你可以键入 `Yox` 然后按上下键选中 `Yox.component` 再按 Enter 键，就输入了`Yox.component`了。

| Prefix | JavaScript Snippet Content |
| ------ | ------------ |
| `import` | `import ... from ...` |
| `newYox` | `new Yox({...})` |
| `addSpecialEvent` | `Yox.dom.addSpecialEvent(id, function (element, listener) {...})` |
| `Yox.dom.on` | `Yox.dom.on(element, event, listener)` |
| `Yox.dom.off` | `Yox.dom.off(element, event, listener)` |
| `Yox.directive` | `Yox.directive(id, { bind: function (node, directive, vnode) {...} })` |
| `Yox.component` | `Yox.component(id, {...})` |
| `Yox.filter` | `Yox.filter(id, {...})` |
| `Yox.transition` | `Yox.transition(id, { leave: function (node) {...} })` |
| `Yox.watch` | `Yox.watch(keypath, watcher, immediate)` |
| `Yox.unwatch` | `Yox.unwatch(keypath, watcher)` |
| `Yox.watch` | `Yox.watch(keypath, watcher, immediate)` |
| `Yox.forceUpdate` | `Yox.forceUpdate(props)` |
| `Yox.createComponent` | `Yox.watch(options, vnode)` |
| `Yox.partial` | `Yox.partial(name, partial)` |
| `Yox.get` | `Yox.get(keypath, defaultValue)` |
| `Yox.set` | `Yox.set(keypath, value)` |
| `template` | `template: "..."` |
| `name` | `name: "..."` |
| `model` | `model: "..."` |
| `data` | `data: { key: value }` |
| `data` | `data: function () {...}` |
| `filters` | `filters: { definition: function (value) {...} }` |
| `computed` | `computed: { definition: function (value) {...} }` |
| `methods` | `methods: { definition: function (value) {...} }` |
| `watchers` | `watchers: { definition: function (value) {...} }` |
| `transitions` | `transitions: { enter: function (node) {...} }` |
| `directives` | `directives: { definition: function (value) {...} }` |
| `events` | `events: { definition: function (value) {...} }` |
| `partials` | `partials: {...}` |
| `propTypes` | `propTypes: {...}` |
| `components` | `components: {...}` |
| `beforeCreate` | `beforeCreate: function () {...}` |
| `afterCreate` | `afterCreate: function () {...}` |
| `beforeMount` | `beforeMount: function () {...}` |
| `afterMount` | `afterMount: function () {...}` |
| `beforeUpdate` | `beforeUpdate: function () {...}` |
| `afterUpdate` | `afterUpdate: function () {...}` |
| `beforeDestroy` | `beforeDestroy: function () {...}` |
| `afterDestroy` | `afterDestroy: function () {...}` |
| `this.$vnode` | `this.$vnode.xxx` |
| `this.$template` | `this.$template.xxx` |
| `this.$observer` | `this.$observer.xxx` |
| `this.$options` | `this.$options.xxx` |
| `this.$emitter` | `this.$emitter.xxx` |
| `console.log` | `console.log(...)` |


<br />

| Prefix | HTML Snippet Content |
| ------ | ------------ |
| `template` | `<template>...</template>` |
| `{{}}` | `{{...}}` |
| `{{!}}` | `{{!...}}` |
| `on-event` | `on-...=...` |
| `o-directive` | `o-...=...` |
| `transition` | `transition="..."` |
| `#if` | `{{#if condition1}}...{{else if condition2}}...{{else}}...{{/if}}`|
| `#each` | `{{#each items: item}}...{{/each}}` |
| `#partial` | `{{#partial id}}...{{/partial}}` |
| `model` | `model="..."` |
| `<!--` | `<!-- ... -->` |

If you enjoy `Yox`, you should have it! Waiting for you in our heart！

If you think it's useful, you can leave us a [message and like it](https://marketplace.visualstudio.com/items?itemName=Wscats.yox&ssr=false#review-details), Your support is our driving force😀

# License

Yox Snippets is released under the [MIT](http://opensource.org/licenses/MIT).