"use strict";(self["webpackChunkchew_inte"]=self["webpackChunkchew_inte"]||[]).push([[388],{9388:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto my-5 p-5"},[e("div",{staticClass:"mx-auto max-w-sm rounded overflow-hidden shadow-lg"},[e("div",{staticClass:"px-6 py-4"},[t.codeMode?e("div",[e("prism-editor",{ref:"codeEditor",staticClass:"code-editor",attrs:{highlight:t.highlighter,"line-numbers":""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1):e("p",{staticClass:"text-gray-700 text-base"},[t._v(" "+t._s(t.content)+" ")])]),t.gum.tags?e("div",{staticClass:"px-6 pt-4 pb-2"},t._l(t.gum.tags,(function(s,n){return e("span",{key:n,staticClass:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},[t._v(" #"+t._s(s)+" ")])})),0):t._e()]),e("div",[t._v(" "+t._s(new Date(1e3*t.gum.created_at))),e("br"),t._v(" "+t._s(new Date(1e3*t.gum.updated_at))+" ")])])},i=[],a=s(7977),o=s(2549),r=(s(9525),s(7372),{name:"ReaderView",components:{PrismEditor:a.h},props:{code:{type:String,required:!0}},computed:{content(){return this.gum.content||""},codeMode(){return"plaintext"!==this.gum.doc_type}},data:()=>({gum:{}}),methods:{highlighter(t){return(0,o.highlight)(t,o.languages.js)}},created(){this.$axios.get(`/anonymous/${this.code}`).then((t=>{this.gum=t.data}))},mounted(){const t=this.$refs.codeEditor?.$el?.children[1]?.children[0];t?t.setAttribute("disabled",!0):console.error("editorTextarea is not found.")}}),d=r,c=s(1001),u=(0,c.Z)(d,n,i,!1,null,null,null),l=u.exports}}]);
//# sourceMappingURL=388.59856f22.js.map