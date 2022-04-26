"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[349],{9594:(t,a,e)=>{e.d(a,{Z:()=>n});const s={components:{},props:{tabList:{type:Array,required:!0}},data:function(){return{activeTab:1}},methods:{changeTab:function(){var t=this.$route.query.tab;t&&(this.activeTab=parseInt(t))}}};const n=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-white dark:bg-gray-800 shadow-lg rounded-sm mb-8"},[e("div",{staticClass:"flex flex-col md:flex-row md:-mr-px"},[e("div",{staticClass:"flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-x-gray-700 min-w-60 md:space-y-3"},[e("ul",{staticClass:"flex flex-nowrap md:block mr-3 md:mr-0"},t._l(t.tabList,(function(a,s){return e("li",{key:s,staticClass:"mr-0.5 md:mr-0 md:mb-0.5 cursor-pointer",class:{"text-blue-600 bg-white dark:bg-gray-900":s+1===t.activeTab,"text-white":s+1!==t.activeTab}},[e("label",{staticClass:"flex items-center px-2.5 py-2 rounded whitespace-nowrap cursor-pointer",class:{"bg-indigo-50 dark:bg-gray-900":s+1===t.activeTab},attrs:{for:""+t._uid+s}},[e("IconBase",{staticClass:"w-4 h-4 shrink-0 fill-current text-gray-400 mr-2",class:{"text-indigo-500":s+1===t.activeTab,"text-gray-500":s+1!==t.activeTab},attrs:{paths:a.icons.paths}}),t._v(" "),e("span",{staticClass:"text-sm font-medium text-gray-600",class:{"text-indigo-500":s+1===t.activeTab}},[t._v(t._s(a.title))])],1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.activeTab,expression:"activeTab"}],staticClass:"hidden",attrs:{id:""+t._uid+s,type:"radio",name:t._uid+"-tab"},domProps:{value:s+1,checked:t._q(t.activeTab,s+1)},on:{input:function(a){return t.changeTab()},change:function(a){t.activeTab=s+1}}})])})),0)]),t._v(" "),t._l(t.tabList,(function(a,s){return[s+1===t.activeTab?e("div",{key:s,staticClass:"grow"},[e("div",{staticClass:"p-6 space-y-6"},[t._t("tabPanel-"+(s+1))],2)]):t._e()]}))],2)])}),[],!1,null,null,null).exports},2126:(t,a,e)=>{e.d(a,{Z:()=>n});const s={name:"PageTitle",props:{title:{type:String,required:!0}}};const n=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._t("default",(function(){return[e("h2",{staticClass:"mb-6 md:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-200 sm:text-xl text-2xl"},[t._v("\n      "+t._s(t.title)+"\n    ")])]}))],2)}),[],!1,null,null,null).exports},349:(t,a,e)=>{e.r(a),e.d(a,{default:()=>o});var s=e(2126),n=e(9594);const i={props:{tabList:{type:Array,required:!0}},data:function(){return{activeTab:1}}};var l=e(1900);const r=(0,l.Z)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("ul",{staticClass:"flex items-center mb-6' list-none bg-gray-300 bg-opacity-30 rounded-sm text-center overflow-auto whitespace-nowrap"},t._l(t.tabList,(function(a,s){return e("li",{key:s,staticClass:"w-full px-4 py-2 border",class:{" text-primary-900 bg-white font-semibold":s+1===t.activeTab,"text-gray-600":s+1!==t.activeTab}},[e("label",{staticClass:"cursor-pointer block",attrs:{for:""+t._uid+s},domProps:{textContent:t._s(a.title)}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.activeTab,expression:"activeTab"}],staticClass:"hidden",attrs:{id:""+t._uid+s,type:"radio",name:t._uid+"-tab"},domProps:{value:s+1,checked:t._q(t.activeTab,s+1)},on:{change:function(a){t.activeTab=s+1}}})])})),0),t._v(" "),t._l(t.tabList,(function(a,s){return[s+1===t.activeTab?e("div",{key:s,staticClass:"flex-grow bg-white shadow-xl p-4"},[t._t("tabPanel-"+(s+1))],2):t._e()]}))],2)}),[],!1,null,null,null).exports,c={components:{PageTitle:s.Z,AppTabs:n.Z,AppTabsVertical:r},data:function(){return{tabList:[{title:"My Account",icons:{paths:["M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"]}},{title:"My Notifications",icons:{paths:["M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"]}},{title:"Connected Apps",icons:{paths:["M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"]}},{title:"Plans",icons:{paths:["M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"]}}]}}};const o=(0,l.Z)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container px-6 py-8 mx-auto grid text-gray-600"},[e("PageTitle",{attrs:{title:"Vertical Tabs"}}),t._v(" "),e("app-tabs",{attrs:{"tab-list":t.tabList},scopedSlots:t._u([{key:"tabPanel-1",fn:function(){return[e("section",[e("h3",{staticClass:"text-xl leading-snug text-gray-800 font-bold mb-1"},[t._v("\n          Business Profile\n        ")]),t._v(" "),e("div",{staticClass:"text-sm"},[t._v("\n          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n        ")]),t._v(" "),e("div",{staticClass:"sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5"},[e("fieldset",{staticClass:"w-full"},[e("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Business Name")]),t._v(" "),e("t-input",{attrs:{placeholder:"Business Name"}})],1),t._v(" "),e("fieldset",{staticClass:"w-full"},[e("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Business Name")]),t._v(" "),e("t-input")],1),t._v(" "),e("fieldset",{staticClass:"w-full"},[e("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Business Name")]),t._v(" "),e("t-input")],1)])]),t._v(" "),e("section",[e("h3",{staticClass:"text-xl leading-snug text-gray-800 font-bold mb-1"},[t._v("\n          Business Profile\n        ")]),t._v(" "),e("div",{staticClass:"text-sm"},[t._v("\n          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n        ")]),t._v(" "),e("div",{staticClass:"sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5"},[e("fieldset",{staticClass:"w-full"},[e("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Business Name")]),t._v(" "),e("t-input",{attrs:{placeholder:"Business Name"}})],1),t._v(" "),e("fieldset",{staticClass:"w-full"},[e("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Business Name")]),t._v(" "),e("t-input")],1),t._v(" "),e("fieldset",{staticClass:"w-full"},[e("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Business Name")]),t._v(" "),e("t-input")],1)])]),t._v(" "),e("section",[e("h3",{staticClass:"text-xl leading-snug text-gray-800 font-bold mb-1"},[t._v("\n          Business Profile\n        ")]),t._v(" "),e("div",{staticClass:"text-sm"},[t._v("\n          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n        ")]),t._v(" "),e("div",{staticClass:"sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5"},[e("fieldset",{staticClass:"w-full"},[e("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Business Name")]),t._v(" "),e("t-input",{attrs:{placeholder:"Business Name"}})],1),t._v(" "),e("fieldset",{staticClass:"w-full"},[e("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Business Name")]),t._v(" "),e("t-input")],1),t._v(" "),e("fieldset",{staticClass:"w-full"},[e("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Business Name")]),t._v(" "),e("t-input")],1)])]),t._v(" "),e("section",[e("h3",{staticClass:"text-xl leading-snug text-gray-800 font-bold mb-1"},[t._v("\n          Business Profile\n        ")]),t._v(" "),e("div",{staticClass:"text-sm"},[t._v("\n          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n        ")]),t._v(" "),e("div",{staticClass:"sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5"},[e("fieldset",{staticClass:"w-full"},[e("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Business Name")]),t._v(" "),e("t-input",{attrs:{placeholder:"Business Name"}})],1),t._v(" "),e("fieldset",{staticClass:"w-full"},[e("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Business Name")]),t._v(" "),e("t-input")],1),t._v(" "),e("fieldset",{staticClass:"w-full"},[e("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Business Name")]),t._v(" "),e("t-input")],1)])])]},proxy:!0},{key:"tabPanel-2",fn:function(){return[t._v("\n      Content 2\n    ")]},proxy:!0},{key:"tabPanel-3",fn:function(){return[t._v("\n      Content 3\n    ")]},proxy:!0},{key:"tabPanel-4",fn:function(){return[t._v("\n      Content 4\n    ")]},proxy:!0}])}),t._v(" "),e("AppTabsVertical",{attrs:{"tab-list":t.tabList},scopedSlots:t._u([{key:"tabPanel-1",fn:function(){return[t._v("\n      Content 1\n    ")]},proxy:!0},{key:"tabPanel-2",fn:function(){return[t._v("\n      Content 2\n    ")]},proxy:!0},{key:"tabPanel-3",fn:function(){return[t._v("\n      Content 3\n    ")]},proxy:!0},{key:"tabPanel-4",fn:function(){return[t._v("\n      Content 4\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null).exports}}]);