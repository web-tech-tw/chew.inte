"use strict";(self["webpackChunkchew_inte"]=self["webpackChunkchew_inte"]||[]).push([[57],{4057:function(t,e,a){a.r(e),a.d(e,{default:function(){return l}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto my-5 p-5"},[e("div",{staticClass:"mx-auto max-w-sm rounded overflow-hidden shadow-lg"},[e("div",{staticClass:"px-6 py-4"},[e("p",{staticClass:"text-gray-700 text-base"},[t._v(" "+t._s(t.gum.content)+" ")])]),t.gum.tags?e("div",{staticClass:"px-6 pt-4 pb-2"},t._l(t.gum.tags,(function(a,s){return e("span",{key:s,staticClass:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},[t._v(" #"+t._s(a)+" ")])})),0):t._e()]),e("div",[t._v(" "+t._s(new Date(1e3*t.gum.created_at))),e("br"),t._v(" "+t._s(new Date(1e3*t.gum.updated_at))+" ")])])},n=[],i={name:"ReaderView",props:{code:{type:String,required:!0}},data:()=>({gum:{}}),created(){this.$axios.get(`/anonymous/${this.code}`).then((t=>{this.gum=t.data}))}},u=i,r=a(1001),d=(0,r.Z)(u,s,n,!1,null,null,null),l=d.exports}}]);
//# sourceMappingURL=57.b0c14957.js.map