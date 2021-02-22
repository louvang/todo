(()=>{"use strict";const e=document.createElement("header"),t=document.createElement("h1");t.textContent="Todo";const n=document.createElement("a");n.href="https://github.com/louvang/todo/issues/new",n.target="_blank",n.textContent="Report a Bug",e.append(t),e.append(n);const a=e,r=(e,t)=>{const n=JSON.parse(localStorage.getItem("categories")),a=JSON.parse(localStorage.getItem("displayedCategories"));if(-1!=n.findIndex((e=>e.name==t)))alert("There's already a title with that name.");else{const r=n.findIndex((t=>t.name==e));-1!=r&&(n[r].name=t,localStorage.setItem("categories",JSON.stringify(n)));const o=a.findIndex((t=>t==e));-1!=o&&(a[o]=t,localStorage.setItem("displayedCategories",JSON.stringify(a)))}},o=(e,t)=>{let n=[];localStorage.getItem("displayedCategories")&&(n=JSON.parse(localStorage.getItem("displayedCategories"))),n[t].name=e,localStorage.setItem("displayedCategories",JSON.stringify(n))};let i=[];localStorage.getItem("tasks")&&(i=JSON.parse(localStorage.getItem("tasks")));class s{constructor(e,t,n,a,r,o){this.category=e,this.desc=t,this.priority=n,this.dueDate=a,this.completed=r,this.id=o}}const c=(e,t,n)=>{i.push(new s(t,e,"none","",!1,n)),localStorage.setItem("tasks",JSON.stringify(i))},d=document.createElement("div");d.classList.add("modal"),d.id="editModal";const u=document.createElement("div");u.classList.add("modal-content");const l=document.createElement("span");l.classList="close",l.textContent="×",l.addEventListener("click",(function(){d.style.display="none"}));const m=document.createElement("h2");m.textContent="Edit Task";const h=document.createElement("div"),g=document.createElement("label");g.htmlFor="task-desc",g.textContent="Description:",h.append(g);const f=document.createElement("input");f.type="text",f.id="task-desc",h.append(f);const p=document.createElement("div");p.append("Priority:");const y=document.createElement("input");y.type="radio",y.name="priority",y.id="none",y.value="none",p.append(y);const w=document.createElement("label");w.htmlFor="none",w.textContent="None",p.append(w);const v=document.createElement("input");v.type="radio",v.name="priority",v.id="low",v.value="low",p.append(v);const b=document.createElement("label");b.htmlFor="low",b.textContent="Low",p.append(b);const k=document.createElement("input");k.type="radio",k.name="priority",k.id="medium",k.value="medium",p.append(k);const S=document.createElement("label");S.htmlFor="medium",S.textContent="Medium",p.append(S);const E=document.createElement("input");E.type="radio",E.name="priority",E.id="high",E.value="high",p.append(E);const C=document.createElement("label");C.htmlFor="high",C.textContent="High",p.append(C);const x=document.createElement("div"),T=document.createElement("label");T.htmlFor="task-date",T.textContent="Due Date (YYYY-MM-DD):",x.append(T);const M=document.createElement("input");M.type="date",M.id="task-date",x.append(M);const I=document.createElement("div");I.id="save-row";const D=document.createElement("button");D.classList.add("delete-task"),D.textContent="Delete Task",I.append(D);const L=document.createElement("button");L.classList.add("save-task"),L.textContent="Save Task",I.append(L),u.append(l),u.append(m),u.append(h),u.append(p),u.append(x),u.append(I),d.append(u),window.onclick=function(e){e.target==d&&(d.style.display="none")};const P=d;function N(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function O(e){N(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function U(e){N(1,arguments);var t=O(e);return!isNaN(t)}var W={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function q(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var B,Y={date:q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},z={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function J(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{var s=e.defaultWidth,c=r.width?String(r.width):e.defaultWidth;a=e.values[c]||e.values[s]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function $(e){return function(t,n){var a=String(t),r=n||{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],s=a.match(i);if(!s)return null;var c,d=s[0],u=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(u)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(d))return n}(u):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(d))return n}(u),c=e.valueCallback?e.valueCallback(c):c,{value:c=r.valueCallback?r.valueCallback(c):c,rest:a.slice(d.length)}}}const F={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof W[e]?W[e]:1===t?W[e].one:W[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:Y,formatRelative:function(e,t,n,a){return z[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:J({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:J({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:J({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:J({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:J({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(B={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(B.matchPattern);if(!r)return null;var o=r[0],i=n.match(B.parsePattern);if(!i)return null;var s=B.valueCallback?B.valueCallback(i[0]):i[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(o.length)}}),era:$({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:$({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:$({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:$({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:$({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function j(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function H(e,t){N(2,arguments);var n=O(e).getTime(),a=j(t);return new Date(n+a)}function X(e,t){N(2,arguments);var n=j(t);return H(e,-n)}function G(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}const Q=function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return G("yy"===t?a%100:a,t.length)},A=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):G(n+1,2)},R=function(e,t){return G(e.getUTCDate(),t.length)},_=function(e,t){return G(e.getUTCHours()%12||12,t.length)},V=function(e,t){return G(e.getUTCHours(),t.length)},K=function(e,t){return G(e.getUTCMinutes(),t.length)},Z=function(e,t){return G(e.getUTCSeconds(),t.length)},ee=function(e,t){var n=t.length,a=e.getUTCMilliseconds();return G(Math.floor(a*Math.pow(10,n-3)),t.length)};var te=864e5;function ne(e){N(1,arguments);var t=1,n=O(e),a=n.getUTCDay(),r=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function ae(e){N(1,arguments);var t=O(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=ne(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=ne(o);return t.getTime()>=r.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function re(e){N(1,arguments);var t=ae(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=ne(n);return a}var oe=6048e5;function ie(e,t){N(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,o=null==r?0:j(r),i=null==n.weekStartsOn?o:j(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=O(e),c=s.getUTCDay(),d=(c<i?7:0)+c-i;return s.setUTCDate(s.getUTCDate()-d),s.setUTCHours(0,0,0,0),s}function se(e,t){N(1,arguments);var n=O(e,t),a=n.getUTCFullYear(),r=t||{},o=r.locale,i=o&&o.options&&o.options.firstWeekContainsDate,s=null==i?1:j(i),c=null==r.firstWeekContainsDate?s:j(r.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(a+1,0,c),d.setUTCHours(0,0,0,0);var u=ie(d,t),l=new Date(0);l.setUTCFullYear(a,0,c),l.setUTCHours(0,0,0,0);var m=ie(l,t);return n.getTime()>=u.getTime()?a+1:n.getTime()>=m.getTime()?a:a-1}function ce(e,t){N(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,o=null==r?1:j(r),i=null==n.firstWeekContainsDate?o:j(n.firstWeekContainsDate),s=se(e,t),c=new Date(0);c.setUTCFullYear(s,0,i),c.setUTCHours(0,0,0,0);var d=ie(c,t);return d}var de=6048e5;function ue(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=t||"";return n+String(r)+i+G(o,2)}function le(e,t){return e%60==0?(e>0?"-":"+")+G(Math.abs(e)/60,2):me(e,t)}function me(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+G(Math.floor(r/60),2)+n+G(r%60,2)}const he={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return Q(e,t)},Y:function(e,t,n,a){var r=se(e,a),o=r>0?r:1-r;return"YY"===t?G(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):G(o,t.length)},R:function(e,t){return G(ae(e),t.length)},u:function(e,t){return G(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return G(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return G(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return A(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return G(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var r=function(e,t){N(1,arguments);var n=O(e),a=ie(n,t).getTime()-ce(n,t).getTime();return Math.round(a/de)+1}(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):G(r,t.length)},I:function(e,t,n){var a=function(e){N(1,arguments);var t=O(e),n=ne(t).getTime()-re(t).getTime();return Math.round(n/oe)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):G(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):R(e,t)},D:function(e,t,n){var a=function(e){N(1,arguments);var t=O(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),r=n-a;return Math.floor(r/te)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):G(a,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return G(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return G(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return G(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return _(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):V(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):G(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):G(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):K(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Z(e,t)},S:function(e,t){return ee(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return le(r);case"XXXX":case"XX":return me(r);case"XXXXX":case"XXX":default:return me(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return le(r);case"xxxx":case"xx":return me(r);case"xxxxx":case"xxx":default:return me(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ue(r,":");case"OOOO":default:return"GMT"+me(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ue(r,":");case"zzzz":default:return"GMT"+me(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return G(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return G((a._originalDate||e).getTime(),t.length)}};function ge(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function fe(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const pe={p:fe,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],o=a[2];if(!o)return ge(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",ge(r,t)).replace("{{time}}",fe(o,t))}};var ye=6e4;function we(e){return e.getTime()%ye}function ve(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var a=n>0?(ye+we(t))%ye:we(t);return n*ye+a}var be=["D","DD"],ke=["YY","YYYY"];function Se(e){return-1!==be.indexOf(e)}function Ee(e){return-1!==ke.indexOf(e)}function Ce(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var xe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Te=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Me=/^'([^]*?)'?$/,Ie=/''/g,De=/[a-zA-Z]/;function Le(e,t,n){N(2,arguments);var a=String(t),r=n||{},o=r.locale||F,i=o.options&&o.options.firstWeekContainsDate,s=null==i?1:j(i),c=null==r.firstWeekContainsDate?s:j(r.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=o.options&&o.options.weekStartsOn,u=null==d?0:j(d),l=null==r.weekStartsOn?u:j(r.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var m=O(e);if(!U(m))throw new RangeError("Invalid time value");var h=ve(m),g=X(m,h),f={firstWeekContainsDate:c,weekStartsOn:l,locale:o,_originalDate:m},p=a.match(Te).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,pe[t])(e,o.formatLong,f):e})).join("").match(xe).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return Pe(n);var i=he[a];if(i)return!r.useAdditionalWeekYearTokens&&Ee(n)&&Ce(n,t,e),!r.useAdditionalDayOfYearTokens&&Se(n)&&Ce(n,t,e),i(g,n,o.localize,f);if(a.match(De))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return p}function Pe(e){return e.match(Me)[1].replace(Ie,"'")}const Ne=(e,t)=>{let n=[];localStorage.getItem("tasks")&&(n=JSON.parse(localStorage.getItem("tasks")));const a=n.findIndex((t=>t.id==e));n[a].completed=t,localStorage.setItem("tasks",JSON.stringify(n))},Oe=(e,t,n,a,r,o)=>{const i=document.createElement("div");i.id=`task-${o}`,i.classList.add("task"),0==r&&("low"==n?i.classList.add("low-priority"):"medium"==n?i.classList.add("med-priority"):"high"==n&&i.classList.add("high-priority"));const s=document.createElement("div");s.classList.add("checkbox");const c=document.createElement("i");0==r?c.classList.add("far","fa-square"):c.classList.add("far","fa-check-square"),c.id=`checkbox-${o}`,s.append(c);const d=document.createElement("div");d.classList.add("desc"),d.id=`desc-${o}`,d.textContent=e;const u=document.createElement("div");u.classList.add("task-ellipsis");const l=document.createElement("i");l.classList.add("fas","fa-ellipsis-v"),l.id=`editIcon-${o}`;const m=document.createElement("div");if(m.classList.add("due-date"),m.id=`due-${o}`,""!=a){let e=a.split("-");const t=parseInt(e[0]),n=parseInt(e[1]),r=parseInt(e[2]);let o=Le(new Date(t,n,r),"PPP");m.textContent=`Due ${o}`}u.append(l),i.append(s),i.append(d),i.append(u),i.append(m),document.getElementById(`col-${t}`).append(i);const h=document.getElementById(`checkbox-${o}`);h.addEventListener("click",(function(){if("fa-square"==h.classList[1]){h.classList.remove("fa-square"),h.classList.add("fa-check-square"),Ne(o,!0);const e=document.getElementById(`task-${o}`);"low-priority"==e.classList[1]?e.classList.remove("low-priority"):"med-priority"==e.classList[1]?e.classList.remove("med-priority"):"high-priority"==e.classList[1]&&e.classList.remove("high-priority")}else if("fa-check-square"==h.classList[1]){h.classList.remove("fa-check-square"),h.classList.add("fa-square"),Ne(o,!1);const e=JSON.parse(localStorage.getItem("tasks")),t=e.findIndex((e=>e.id==o));"low"==e[t].priority?i.classList.add("low-priority"):"medium"==e[t].priority?i.classList.add("med-priority"):"high"==e[t].priority&&i.classList.add("high-priority")}})),document.getElementById(`editIcon-${o}`).addEventListener("click",(function(){P.style.display="block";const e=JSON.parse(localStorage.getItem("tasks")).find((e=>e.id==o));document.getElementById("task-desc").value=e.desc,document.getElementsByName("priority").forEach((e=>{e.checked=!1})),"none"==e.priority?document.getElementById("none").checked=!0:"low"==e.priority?document.getElementById("low").checked=!0:"medium"==e.priority?document.getElementById("medium").checked=!0:"high"==e.priority&&(document.getElementById("high").checked=!0),document.getElementById("task-date").value=e.dueDate,document.querySelector(".delete-task").id=`delete-${o}`,document.querySelector(".save-task").id=`save-${o}`,document.getElementById(`delete-${o}`).addEventListener("click",(function(){let e=document.querySelector(".delete-task").id;e=e.slice(7),o==e&&1==confirm("Are you sure you want to delete this task?")&&((e=>{let t=[];localStorage.getItem("tasks")&&(t=JSON.parse(localStorage.getItem("tasks")));const n=t.findIndex((t=>t.id==e));t.splice(n,1),localStorage.setItem("tasks",JSON.stringify(t))})(o),document.getElementById(`task-${o}`).remove(),P.style.display="none")})),document.getElementById(`save-${o}`).addEventListener("click",(function(){let e=document.querySelector(".save-task").id;if(e=e.slice(5),o==e){const e=document.getElementById("task-desc").value,t=document.getElementById("task-date").value;let n="";1==document.getElementById("none").checked?n="none":1==document.getElementById("low").checked?n="low":1==document.getElementById("medium").checked?n="medium":1==document.getElementById("high").checked&&(n="high"),((e,t,n,a)=>{let r=[];localStorage.getItem("tasks")&&(r=JSON.parse(localStorage.getItem("tasks")));const o=r.findIndex((t=>t.id==e));o>-1?(r[o].desc=t,r[o].priority=n,r[o].dueDate=a):alert("Sorry, that task doesn't seem to exist anymore."),localStorage.setItem("tasks",JSON.stringify(r))})(o,e,n,t),(e=>{let t=[];localStorage.getItem("tasks")&&(t=JSON.parse(localStorage.getItem("tasks")));const n=t.findIndex((t=>t.id==e));document.getElementById(`desc-${e}`).textContent=t[n].desc;const a=document.getElementById(`due-${e}`);if(""==t[n].dueDate)a.textContent="";else{let e=t[n].dueDate.split("-");const r=parseInt(e[0]),o=parseInt(e[1]),i=parseInt(e[2]);let s=Le(new Date(r,o,i),"PPP");a.textContent=`Due ${s}`}const r=document.getElementById(`task-${e}`);"low-priority"==r.classList[1]?r.classList.remove("low-priority"):"med-priority"==r.classList[1]?r.classList.remove("med-priority"):"high-priority"==r.classList[1]&&r.classList.remove("high-priority"),0==t[n].completed&&("low"==t[n].priority?r.classList.add("low-priority"):"medium"==t[n].priority?r.classList.add("med-priority"):"high"==t[n].priority&&r.classList.add("high-priority"))})(o)}P.style.display="none"}))}))},Ue=document.getElementById("content");Ue.append(a),Ue.append(P);const We=document.createElement("div");We.classList.add("todo-container"),Ue.append(We);let qe=[],Be=[],Ye=[];localStorage.getItem("categories")?qe=JSON.parse(localStorage.getItem("categories")):(qe=[{name:"👩‍💻 Work",catId:"camcz5962f"},{name:"🪴 Self-care & Health",catId:"cw5u7v6lno"},{name:"📕 Miscellaneous",catId:"c2hvbu98vc"}],localStorage.setItem("categories",JSON.stringify(qe))),localStorage.getItem("displayedCategories")?Be=JSON.parse(localStorage.getItem("displayedCategories")):(Be=[{name:"👩‍💻 Work",catId:"camcz5962f"},{name:"🪴 Self-care & Health",catId:"cw5u7v6lno"},{name:"📕 Miscellaneous",catId:"c2hvbu98vc"}],localStorage.setItem("displayedCategories",JSON.stringify(Be))),Be.forEach((e=>{((e,t)=>{let n=JSON.parse(localStorage.getItem("displayedCategories"));const a=document.createElement("div");a.classList.add("column"),document.querySelector(".todo-container").append(a);const i=document.createElement("div");i.classList.add("cat-heading"),a.append(i);const s=document.createElement("div");s.classList.add("cat-title"),i.append(s);const d=document.createElement("input");d.type="text",d.value=e,a.id=`col-${t}`,d.id=`cat-${t}`,s.append(d);const u=document.getElementById(`cat-${t}`).value;let l=0;n&&(l=n.findIndex((e=>e.catId==t))),d.onkeyup=function(e){if("Enter"==e.key&&d.value.length>3){r(u,d.value);let e=d.value;d.blur(),o(e,l)}},window.addEventListener("click",(function(){if(n=JSON.parse(localStorage.getItem("displayedCategories")),d.value!=n[l].name){r(u,d.value);let e=d.value;d.blur(),o(e,l)}}));const m=document.createElement("div");m.classList.add("cat-arrow"),i.append(m);const h=document.createElement("i");h.classList.add("fas","fa-caret-down"),h.id=`ddIcon-${t}`,m.append(h);const g=document.createElement("div");g.classList.add("cat-dropdown"),g.id=`dd-${t}`,m.append(g);const f=document.createElement("div");f.classList.add("add-task-form"),a.append(f);const p=document.createElement("div");p.classList.add("task-form-col-1"),f.append(p);const y=document.createElement("input");y.type="text",y.placeholder="Create new task",y.id=`task-${t}`,p.append(y);const w=document.createElement("div");w.classList.add("task-form-col-2"),f.append(w);const v=document.createElement("button");v.textContent="Add",v.id=`add-to-${t}`,v.addEventListener("click",(function(){const e=y.value;if(e.length>3){const n=Math.random().toString(36).substr(2,9);c(e,t,n),Oe(e,t,"none","",!1,n),y.value=""}})),w.append(v),y.onkeypress=function(e){const n=y.value;if("Enter"==e.key&&n.length>3){const e=Math.random().toString(36).substr(2,9);c(n,t,e),Oe(n,t,"none","",!1,e),y.value=""}}})(e.name,e.catId)})),localStorage.getItem("tasks")?Ye=JSON.parse(localStorage.getItem("tasks")):(Ye=[{category:"cw5u7v6lno",desc:"Morning skincare routine",priority:"none",dueDate:"",completed:!0,id:"89skoo1ue"},{category:"cw5u7v6lno",desc:"Morning workout",priority:"none",dueDate:"",completed:!1,id:"ngw51u867"},{category:"cw5u7v6lno",desc:"Track calories (no more than 1200 cals)",priority:"none",dueDate:"",completed:!1,id:"n7229rnaz"},{category:"cw5u7v6lno",desc:"Affirmations and meditation",priority:"none",dueDate:"",completed:!1,id:"qza4hwyvv"},{category:"c2hvbu98vc",desc:"Finish reading SABRIEL by Garth Nix",priority:"none",dueDate:"",completed:!1,id:"rgojjx09j"},{category:"camcz5962f",desc:"Push todo list app to GitHub",priority:"high",dueDate:"2020-02-22",completed:!0,id:"0z9oul22b"},{category:"camcz5962f",desc:"Update portfolio website",priority:"medium",dueDate:"2020-03-02",completed:!1,id:"3vv20j4bo"},{category:"camcz5962f",desc:"Renew domain names and their SSL certifications",priority:"low",dueDate:"2020-08-14",completed:!1,id:"le8ysrrb4"},{category:"c2hvbu98vc",desc:"Call to get car brakes checked",priority:"high",dueDate:"2020-02-24",completed:!1,id:"34bv41i2s"}],localStorage.setItem("tasks",JSON.stringify(Ye))),Be.forEach((e=>{Ye.forEach((t=>{if(t.category==e.catId){let e=t.category;e=`col-${e.replace(/\s/g,"")}`,Oe(t.desc,t.category,t.priority,t.dueDate,t.completed,t.id)}}))}))})();