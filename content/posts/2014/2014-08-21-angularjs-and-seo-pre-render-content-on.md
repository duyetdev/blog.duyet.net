---
template: post
title: AngularJS and SEO - pre-render content on the server
date: '2014-08-21T18:46:00.000+07:00'
category: Javascript
tags:
- SEO
- Angular
modified_time: '2015-01-23T23:25:50.861+07:00'
blogger_id: tag:blogger.com,1999:blog-3454518094181460838.post-5603555434376135856
blogger_orig_url: https://blog.duyet.net/2014/08/angularjs-and-seo-pre-render-content-on.html
slug: /2014/08/angularjs-and-seo-pre-render-content-on.html
description: The simple way to make this content SEO-friendly is to pre-render data on the server and then allow angular to do it's job on the client.

---

The simple way to make this content SEO-friendly is to pre-render data on the server and then allow angular to do it's job on the client.
With angular.js you have an HTML which looks like this:

```js
<span>{{ "{{" }}variableValue}}</span>
    <ul>
    <li ng-repeat="item in items" ng-bind="item.name"></li>
</ul>
```

The simple way to make this content SEO-friendly is to pre-render data on the server and then allow angular to do it's job on the client. For simple variables there is ng-bind. And for lists there is ng-include. Here is the example from above with pre-rendered content:  

```html
<span ng-bind="variableValue">Static indexed value</span>
<ul ng-include="'your/dynamic/list'">
    <li>seo-friendly item1</li>
    <li>seo-friendly item2</li>
</ul>
<script type="text/ng-template" id="your/dynamic/list">
    <li ng-repeat="item in items" ng-bind="item.name"></li>
</script>

```

This way we have initial content for search bots and instructions for angular at the same time.

Note that the solution above works for simple cases but it can be not good for complex pages or if there are many pages. Actually what we do is duplicate the content - we provide static content on the server site and then angular requests content dynamically an overrides static data.

A better (and more complex) solution is to crawl the website and give static page snapshots to search engines. This can be done with a headless browser like PhantomJS which you can run periodically to generate static page snapshots.

There is also an easy way to do this - use a service like BromBone. It will do complex part of the job for you and you only need to redirect search bots to static versions of your pages generated by BromBone.