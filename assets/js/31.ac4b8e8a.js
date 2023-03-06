(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{356:function(t,e,a){"use strict";a.r(e);var o=a(4),r=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("要修改已经运行的 Docker 容器的挂载路径，需要先停止该容器，然后重新启动它并指定新的挂载路径。")])]),t._v(" "),e("h1",{attrs:{id:"停止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止容器"}},[t._v("#")]),t._v(" 停止容器")]),t._v(" "),e("p",[t._v("使用 docker stop 命令停止容器：")]),t._v(" "),e("p",[e("code",[t._v("docker stop <container_name>")])]),t._v(" "),e("p",[t._v("其中 <container_name> 是容器的名称或 ID。")]),t._v(" "),e("h1",{attrs:{id:"修改挂载路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改挂载路径"}},[t._v("#")]),t._v(" 修改挂载路径")]),t._v(" "),e("p",[t._v("使用 docker run 命令重新启动容器，并指定新的挂载路径。如果使用的是 -v 选项进行挂载，则只需要修改该选项中的路径即可。")]),t._v(" "),e("p",[t._v("例如，假设原来启动容器时使用的命令是：")]),t._v(" "),e("p",[e("code",[t._v("docker run -v /path/on/host:/path/in/container myimage")])]),t._v(" "),e("p",[t._v("现在要将 "),e("code",[t._v("/path/on/host")]),t._v(" 修改为 "),e("code",[t._v("/new/path/on/host")]),t._v("，则可以使用以下命令：")]),t._v(" "),e("p",[e("code",[t._v("docker run -v /new/path/on/host:/path/in/container myimage")])]),t._v(" "),e("h1",{attrs:{id:"启动容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[t._v("#")]),t._v(" 启动容器")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("docker start")]),t._v(" 命令启动容器：")]),t._v(" "),e("p",[e("code",[t._v("docker start <container_name>")])]),t._v(" "),e("p",[t._v("容器会以新的挂载路径重新启动。")])])}),[],!1,null,null,null);e.default=r.exports}}]);