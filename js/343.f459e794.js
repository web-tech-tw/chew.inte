(self["webpackChunkchew_inte"]=self["webpackChunkchew_inte"]||[]).push([[343],{7343:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var i=function(){var t=this,e=t._self._c;return e("div",[t.isNotFound?e("div",[e("div",{staticClass:"mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[e("div",{staticClass:"sm:text-center lg:text-left"},[t._m(0),e("p",{staticClass:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},[t._v(" 您所請求的資源不見了，或者是從來沒有存在過。 ")]),e("div",{staticClass:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},[e("div",{staticClass:"rounded-md shadow"},[t.$router.history.length?e("button",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 md:py-4 md:text-lg md:px-10",on:{click:t.$router.back}},[t._v(" 返回上一頁 ")]):t._e()]),e("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[e("router-link",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-700 bg-violet-100 hover:bg-violet-200 md:py-4 md:text-lg md:px-10",attrs:{to:"/"}},[t._v(" 回首頁 ")])],1)])])])]):e("div",[e("div",{staticClass:"container mx-auto my-5 p-5"},[e("div",{staticClass:"mx-auto max-w-sm rounded overflow-hidden shadow-lg"},[e("div",{staticClass:"px-6 py-4"},[t.isCodeMode?e("div",[e("prism-editor",{ref:"codeEditor",staticClass:"code-editor",attrs:{highlight:t.highlighter,"line-numbers":""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1):e("p",{staticClass:"text-gray-700 text-base"},[t._v(" "+t._s(t.content)+" ")])]),e("div",{staticClass:"px-6 pt-4 pb-2"},t._l(t.gumTimes,(function(n,i){return e("span",{key:i,staticClass:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},[t._v(" "+t._s(t.getTimeTitle(i))+"："+t._s(n)+" ")])})),0)])])])])},s=[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"},[e("span",{staticClass:"block xl:inline"},[t._v("😯 ㄨㄚˊ")]),e("br"),e("span",{staticClass:"block xl:inline"},[t._v("你想找的")]),e("span",{staticClass:"block text-violet-600 xl:inline"},[t._v("文字片段")]),e("span",{staticClass:"block xl:inline"},[t._v("不存在")])])}],r=n(5743),a=n.n(r),u=n(7977),o=n(2549),c=(n(9525),n(7372),{name:"ReaderView",components:{PrismEditor:u.h},props:{code:{type:String,required:!0}},computed:{content(){return this.gum.content||""},isCodeMode(){return"plaintext"!==this.gum.doc_type},gumTimes(){const t=t=>a()(t).format("YYYY-MM-DD HH:mm:ss");return{created_at:t(this.gum.created_at),updated_at:t(this.gum.updated_at)}}},data:()=>({gum:{},isNotFound:!1}),methods:{highlighter(t){return(0,o.highlight)(t,o.languages.js)},getTimeTitle(t){switch(t){case"created_at":return"建立時間";case"updated_at":return"更新時間";default:return t}}},created(){this.$axios.get(`/anonymous/${this.code}`).then((t=>{this.gum=t.data})).catch((t=>{console.log(t),this.isNotFound=!0}))},mounted(){if(this.isCodeMode){const t=this.$refs.codeEditor?.$el?.children[1]?.children[0];t?t.setAttribute("disabled",!0):console.error("editorTextarea is not found.")}}}),d=c,l=n(1001),h=(0,l.Z)(d,i,s,!1,null,null,null),f=h.exports},5743:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",s="second",r="minute",a="hour",u="day",o="week",c="month",d="quarter",l="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},v={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+p(i,2,"0")+":"+p(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,c),r=n-s<0,a=e.clone().add(i+(r?-1:1),c);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:o,d:u,D:h,h:a,m:r,s:s,ms:i,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},x="en",y={};y[x]=g;var M=function(t){return t instanceof D},_=function t(e,n,i){var s;if(!e)return x;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,s=u}return!i&&s&&(x=s),s||!i&&x},b=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},w=v;w.l=_,w.i=M,w.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function g(t){this.$L=_(t.locale,null,!0),this.parse(t)}var p=g.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return w},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return b(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<b(t)},p.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,i=!!w.u(e)||e,d=w.p(t),f=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?s:s.endOf(u)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,g=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case l:return i?f(1,0):f(31,11);case c:return i?f(1,g):f(0,g+1);case o:var x=this.$locale().weekStart||0,y=($<x?$+7:$)-x;return f(i?p-y:p+(6-y),g);case u:case h:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case r:return m(v+"Seconds",2);case s:return m(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,o=w.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[u]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[l]=d+"FullYear",n[a]=d+"Hours",n[r]=d+"Minutes",n[s]=d+"Seconds",n[i]=d+"Milliseconds",n)[o],m=o===u?this.$D+(e-this.$W):e;if(o===c||o===l){var $=this.clone().set(h,1);$.$d[f](m),$.init(),this.$d=$.set(h,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[w.p(t)]()},p.add=function(i,d){var h,f=this;i=Number(i);var m=w.p(d),$=function(t){var e=b(f);return w.w(e.date(e.date()+Math.round(t*i)),f)};if(m===c)return this.set(c,this.$M+i);if(m===l)return this.set(l,this.$y+i);if(m===u)return $(1);if(m===o)return $(7);var g=(h={},h[r]=e,h[a]=n,h[s]=t,h)[m]||1,p=this.$d.getTime()+i*g;return w.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,d=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},l=function(t){return w.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:w.s(u+1,2,"0"),MMM:d(n.monthsShort,u,c,3),MMMM:d(c,u),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,o,2),ddd:d(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:w.s(r,2,"0"),h:l(1),hh:l(2),a:h(r,a,!0),A:h(r,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace($,(function(t,e){return e||m[t]||s.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(i,h,f){var m,$=w.p(h),g=b(i),p=(g.utcOffset()-this.utcOffset())*e,v=this-g,x=w.m(this,g);return x=(m={},m[l]=x/12,m[c]=x,m[d]=x/3,m[o]=(v-p)/6048e5,m[u]=(v-p)/864e5,m[a]=v/n,m[r]=v/e,m[s]=v/t,m)[$]||v,f?x:w.a(x)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=_(t,e,!0);return i&&(n.$L=i),n},p.clone=function(){return w.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),S=D.prototype;return b.prototype=S,[["$ms",i],["$s",s],["$m",r],["$H",a],["$W",u],["$M",c],["$y",l],["$D",h]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,D,b),t.$i=!0),b},b.locale=_,b.isDayjs=M,b.unix=function(t){return b(1e3*t)},b.en=y[x],b.Ls=y,b.p={},b}))}}]);
//# sourceMappingURL=343.f459e794.js.map