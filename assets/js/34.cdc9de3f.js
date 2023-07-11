(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{359:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("本文介绍如何正确配置Beanstalkd容器并实现数据持久化。\n内容由ChatGPT小红书模板生成")])]),s._v(" "),a("h1",{attrs:{id:"起因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[s._v("#")]),s._v(" 起因")]),s._v(" "),a("p",[s._v("嘿，小伙伴们！今天我要分享一个惨痛的教训，一个关于我在部署beanstalk容器时发生的意外。准备好了吗？坐稳了，我们要开始了！")]),s._v(" "),a("p",[s._v("段落一：错误的配置 😢")]),s._v(" "),a("p",[s._v("在我开始之前，我认真地研究了关于beanstalk的资料，并找到了一份docker-compose配置文件。看起来非常简单，所以我信心满满地将其应用到我的生产环境中。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("version: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v("\nservices:\n  beanstalkd:\n   image: schickling/beanstalkd\n   container_name: beanstalkd\n   volumes:\n     - /Beans/data:/data\n   ports:\n      - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11300")]),s._v(":11300\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("然而，事后证明这是一个可怕的错误！网上提供的配置没有足够详尽的信息来确保我正确地设置容器持久化功能。结果，在那个黑暗的夜晚，我的容器突然崩溃了.......")]),s._v(" "),a("p",[s._v("队列里的70w数据就这样毁于一旦！")]),s._v(" "),a("h1",{attrs:{id:"总结-📝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结-📝"}},[s._v("#")]),s._v(" 总结 📝")]),s._v(" "),a("p",[s._v("通过这次惨痛的经历，我学到了几个宝贵的教训。首先，不要只依赖网上提供的资料来进行重要功能的部署。务必仔细检查每个细节，并确保你理解它们背后的原理。")]),s._v(" "),a("p",[s._v("其次，在处理生产环境时，请牢记数据持久化至关重要。无论是使用容器卷（volumes）还是外部存储，确保将数据安全地保存下来，以防止任何灾难性的数据丢失。")]),s._v(" "),a("h1",{attrs:{id:"正确配置的解决方案-💡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确配置的解决方案-💡"}},[s._v("#")]),s._v(" 正确配置的解决方案 💡")]),s._v(" "),a("p",[s._v("我从这次教训中汲取了经验，并找到了解决方案。为了正确地持久化我的beanstalk容器，我修改了上述错误的docker-compose配置。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("version: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v("\nservices:\n  beanstalkd:\n   image: schickling/beanstalkd\n   container_name: beanstalkd\n   command: "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" /data\n   volumes:\n     - /Beans/data:/data\n   ports:\n      - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11300")]),s._v(":11300\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("通过添加command: -b /data参数，我告诉beanstalkd在启动时将其数据保存在指定目录（/data）中。然后，使用卷（volumes）将该目录连接到主机上的一个位置（/www/Docker/Beans/data），确保数据得到安全存储。")]),s._v(" "),a("p",[s._v("结论：\n总之，亲爱的小伙伴们，请记住我的惨痛经历，不要重蹈覆辙！在部署重要容器时，确保正确配置持久化机制，并仔细验证每个细节。这样一来，在未来，你就可以放心使用beanstalk和其他容器技术来构建强大而稳定的应用程序啦！")])])}),[],!1,null,null,null);a.default=t.exports}}]);