"use strict";(self["webpackChunkchew_inte"]=self["webpackChunkchew_inte"]||[]).push([[324],{9324:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=function(){var t=this,e=t._self._c;return e("div",[e("prism-editor",{staticClass:"code-editor",attrs:{highlight:t.highlighter,"line-numbers":""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),e("div",{staticClass:"operations w-32 bg-gray-500 h-full"},[e("button",{staticClass:"w-full flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium text-gray-100 bg-gray-700 hover:bg-gray-600",on:{click:t.handleSubmit}},[t._v(" 我打完了 ")]),e("button",{staticClass:"w-full flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200",on:{click:t.goWriter}},[t._v(" 一般模式 ")])])],1)},s=[],a=r(7977),i=r(2549),o=(r(9525),r(7372),{name:"CoderView",components:{PrismEditor:a.h},data:()=>({content:""}),methods:{highlighter(t){return(0,i.highlight)(t,i.languages.js)},goWriter(){this.$router.push("/writer")},async handleSubmit(){const t=new URLSearchParams;t.set("content",this.content),t.set("doc_type","javascript");const e=await this.$axios.post("/anonymous",t);this.$router.push({name:"code",params:{result:e.data}})}}}),c=o,l=r(1001),u=(0,l.Z)(c,n,s,!1,null,null,null),h=u.exports}}]);
//# sourceMappingURL=324.0d995e32.js.map