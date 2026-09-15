(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={term:{name:`2026–2027 学年第一学期`,school:`华南理工大学 · 生物医学科学与工程学院`,start:`2026-08-31`,teachingWeeks:18,examWeeks:[19,20],end:`2027-01-17`},events:[{id:`ideology`,course:`硕士思政课`,subtitle:`国际 10 班`,category:`公共必修`,tone:`violet`,weekday:1,weeks:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],blocks:[{start:`14:00`,end:`15:35`,slots:`5–6 节`}],location:`F3-b308`,calendar:!0},{id:`laboratory-safety`,course:`生物医学实验室安全与防护`,subtitle:`第 3 周 · 周二上午班`,category:`专业基础`,tone:`blue`,weekday:2,weeks:[3],blocks:[{start:`10:40`,end:`12:15`,slots:`3–4 节`}],location:`F3b-409`,calendar:!0},{id:`academic-writing`,course:`论文写作与学术规范`,subtitle:``,category:`公共必修`,tone:`coral`,weekday:2,weeks:[5,6,7,8],blocks:[{start:`08:50`,end:`12:15`,slots:`1–4 节`}],location:`F3-a301`,calendar:!0},{id:`cancer-biology`,course:`癌症生物学`,subtitle:``,category:`专业选修`,tone:`rose`,weekday:3,weeks:[11,12,13,14,15,16,17,18],blocks:[{start:`08:50`,end:`12:15`,slots:`1–4 节`}],location:`F3-b303`,calendar:!0},{id:`tissue-engineering-tue`,course:`Tissue Engineering and Artificial Organs`,subtitle:`组织工程与人工器官`,category:`专业选修`,tone:`mint`,weekday:2,weeks:[8,9,10,11,12,13,14,15],blocks:[{start:`19:00`,end:`20:40`,slots:`9–10 节`}],location:`F3-b201`,calendar:!0},{id:`tissue-engineering-thu`,course:`Tissue Engineering and Artificial Organs`,subtitle:`组织工程与人工器官`,category:`专业选修`,tone:`mint`,weekday:4,weeks:[8,9,10,11,12,13,14,15],blocks:[{start:`19:00`,end:`20:40`,slots:`9–10 节`}],location:`F3-b201`,calendar:!0},{id:`laboratory-animals`,course:`实验动物学`,subtitle:`周五全天密集课`,category:`专业基础`,tone:`blue`,weekday:5,weeks:[14,15,16,17],blocks:[{start:`08:50`,end:`12:15`,slots:`1–4 节`},{start:`14:00`,end:`17:25`,slots:`5–8 节`}],location:`机能实验室 C1a-207`,calendar:!0},{id:`biomaterials`,course:`高等生物材料技术`,subtitle:`周六全天密集课`,category:`专业基础`,tone:`lavender`,weekday:6,weeks:[11,12,13,14],blocks:[{start:`08:50`,end:`12:15`,slots:`1–4 节`},{start:`14:00`,end:`17:25`,slots:`5–8 节`}],location:`按分组见附表`,calendar:!0,status:`tentative`}],pending:[],calendarAdjustments:{holidays:[{id:`mid-autumn-2026`,start:`2026-09-25`,end:`2026-09-27`,label:`中秋节放假`},{id:`national-day-2026`,start:`2026-10-01`,end:`2026-10-07`,label:`国庆节放假`}],moves:[{id:`makeup-20260920`,from:`2026-10-06`,to:`2026-09-20`,label:`按周二课表上课`},{id:`makeup-20261010`,from:`2026-10-07`,to:`2026-10-10`,label:`按周三课表上课`}]},keyDates:[{date:`2026-09-20`,label:`调休上课`,detail:`按原 10 月 6 日周二课表`},{date:`2026-09-25`,label:`中秋节放假`,detail:`9 月 25–27 日，共 3 天`},{date:`2026-10-01`,label:`国庆节放假`,detail:`10 月 1–7 日，共 7 天`},{date:`2026-10-10`,label:`调休上课`,detail:`按原 10 月 7 日周三课表`},{date:`2026-11-17`,label:`校庆日`,detail:`华南理工大学校庆`},{date:`2027-01-01`,label:`元旦放假`,detail:`放假 1 天`},{date:`2027-01-04`,label:`考试周开始`,detail:`第 19–20 周`},{date:`2027-01-18`,label:`寒假开始`,detail:`至 2 月 28 日`}]},t=[`周一`,`周二`,`周三`,`周四`,`周五`,`周六`,`周日`],n=[{slot:1,start:`08:50`},{slot:2,start:`09:40`},{slot:3,start:`10:40`},{slot:4,start:`11:30`},{slot:5,start:`14:00`},{slot:6,start:`14:50`},{slot:7,start:`15:45`},{slot:8,start:`16:40`},{slot:9,start:`19:00`},{slot:10,start:`19:55`}],r=(()=>{let[t,n,r]=e.term.start.split(`-`).map(Number);return new Date(t,n-1,r,12,0,0)})(),i=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),n},a=(e=new Date)=>new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0),o=e=>{let t=i(r,(e-1)*7);return{start:t,end:i(t,6)}},s=e=>new Intl.DateTimeFormat(`zh-CN`,{month:`numeric`,day:`numeric`}).format(e),c=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,l=e=>{let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r,12,0,0)},u=t=>{let n=c(t);return e.calendarAdjustments.holidays.find(e=>n>=e.start&&n<=e.end)},d=t=>{let n=c(t);return e.calendarAdjustments.moves.find(e=>e.to===n)},f=()=>{let e=Math.floor((a().getTime()-r.getTime())/864e5),t=Math.floor(e/7)+1;return t>=1&&t<=20?t:3},p=e=>{let t=e.slots.match(/\d+/g)?.map(Number)??[1],n=t[0],r=t[1]??n;return{first:n,last:r,span:r-n+1}},m=e=>e.id===`academic-writing`?`论文写作`:e.id===`laboratory-safety`?`实验室安全与防护`:e.id.startsWith(`tissue-engineering`)?`组织工程与人工器官`:e.course,h=e.events.flatMap(t=>t.weeks.flatMap(n=>{let a=i(r,(n-1)*7+t.weekday-1),o=c(a),s=e.calendarAdjustments.moves.find(e=>e.from===o);if(!s&&u(a))return[];let d=s?l(s.to):a,f=d.getDay();return[{event:t,date:d,weekday:f===0?7:f,originalWeek:n,note:s?`调课`:``}]})),g=e=>{let{start:t,end:n}=o(e);return h.filter(e=>e.date>=t&&e.date<=n)},_=()=>new URL(`calendar.ics`,window.location.href).toString(),v=document.querySelector(`#app`);if(!v)throw Error(`App root is missing`);var y=f();function b(e){let{start:r}=o(e),s=c(a()),l=g(e);return`
    <div class="timetable-corner" style="grid-column:1;grid-row:1"><span>节次</span></div>
    ${t.map((e,t)=>{let n=i(r,t),a=c(n)===s,o=u(n),l=d(n);return`
        <div class="${[`day-header`,a?`is-today`:``,o?`is-holiday`:``,l?`is-makeup`:``].filter(Boolean).join(` `)}" style="grid-column:${t+2};grid-row:1">
          <strong>${e}</strong>
          <time datetime="${c(n)}">${n.getMonth()+1}/${n.getDate()}</time>
          ${o?`<em class="day-status">休</em>`:l?`<em class="day-status">调</em>`:``}
        </div>`}).join(``)}
    ${n.map(({slot:e,start:t})=>`
        <div class="time-label${e===4||e===8?` is-break-end`:``}" style="grid-column:1;grid-row:${e+1}">
          <strong>${e}</strong><span>${t}</span>
        </div>`).join(``)}
    ${n.flatMap(({slot:e})=>t.map((t,n)=>{let a=i(r,n),o=c(a)===s,l=u(a),f=d(a);return`<div class="${[`grid-cell`,o?`is-today`:``,l?`is-holiday`:``,f?`is-makeup`:``,e===4||e===8?`is-break-end`:``].filter(Boolean).join(` `)}" style="grid-column:${n+2};grid-row:${e+1}" aria-hidden="true"></div>`})).join(``)}
    ${l.flatMap(e=>{let t=e.event;return t.blocks.map((n,r)=>{let{first:i,span:a}=p(n),o=t.status,s=m(t);return`
          <article
            class="timetable-course tone-${t.tone}${o===`tentative`?` is-tentative`:``}"
            style="grid-column:${e.weekday+1};grid-row:${i+1} / span ${a}"
            aria-label="${t.course}，${n.slots}，${t.location}"
            title="${t.course}｜${n.slots}｜${t.location}"
          >
            <span class="course-name">${s}</span>
            <span class="course-room">${t.location}</span>
            <span class="course-slot">${n.slots}${e.note?` · ${e.note}`:``}${o===`tentative`?` · 待确认`:``}${t.blocks.length>1?` · ${r+1}/${t.blocks.length}`:``}</span>
          </article>`})}).join(``)}`}function x(e){let t=g(e).map(e=>e.event),n=new Set(t.map(e=>e.course)).size,r=t.reduce((e,t)=>e+t.blocks.length,0);return n?`本周 ${n} 门课 · ${r} 个上课时段`:`本周没有固定课程，适合集中推进实验与阅读`}function S(){let e=c(a()),t=h.filter(t=>c(t.date)===e);return t.length?`今天：${t.map(({event:e,note:t})=>`${m(e)} ${e.blocks[0].start}${t?`（调课）`:``}`).join(`；`)}`:`今天没有固定课程，给实验和阅读留一段完整时间。`}function C(){let e=o(y),t=document.querySelector(`#week-title`),n=document.querySelector(`#week-range`),r=document.querySelector(`#week-summary`),i=document.querySelector(`#timetable-grid`),a=document.querySelector(`#week-select`),c=document.querySelector(`#previous-week`),l=document.querySelector(`#next-week`),u=document.querySelector(`#current-week`);!t||!n||!r||!i||!a||!c||!l||!u||(t.textContent=`第 ${y} ${y<=18?`教学`:`考试`}周`,n.textContent=`${s(e.start)} — ${s(e.end)}`,r.textContent=x(y),i.innerHTML=b(y),a.value=String(y),c.disabled=y===1,l.disabled=y===20,u.disabled=y===f())}function w(){v.innerHTML=`
    <main>
      <header class="app-bar">
        <a class="brand" href="#week-view" aria-label="回到课表顶部">
          <span class="brand-mark">研</span>
          <span><strong>我的研究生课表</strong><small>${e.term.name}</small></span>
        </a>
        <nav aria-label="快捷操作">
          <button type="button" class="ghost-button" id="current-week">回到本周</button>
          <button type="button" class="primary-button" data-subscribe-calendar>订阅到 iPhone</button>
        </nav>
      </header>

      <section class="schedule-shell" id="week-view" aria-labelledby="week-title">
        <div class="schedule-heading">
          <div>
            <p class="section-kicker">每周课表</p>
            <div class="week-title-line">
              <h1 id="week-title"></h1>
              <span id="week-range"></span>
            </div>
            <p class="week-summary" id="week-summary"></p>
          </div>
          <div class="week-controls" aria-label="切换教学周">
            <button type="button" id="previous-week" aria-label="上一周">←</button>
            <label class="sr-only" for="week-select">选择教学周</label>
            <select id="week-select"></select>
            <button type="button" id="next-week" aria-label="下一周">→</button>
          </div>
        </div>

        <div class="today-note"><span>今天</span><p>${S()}</p></div>

        <div class="timetable-wrap">
          <div class="timetable" id="timetable-grid" aria-live="polite"></div>
        </div>
        <p class="swipe-hint">左右滑动课表区域可切换周次 · 色块高度对应上课节数</p>

        <div class="legend" aria-label="课程类型说明">
          <span><i class="legend-dot violet"></i>公共必修</span>
          <span><i class="legend-dot blue"></i>专业基础</span>
          <span><i class="legend-dot mint"></i>专业选修</span>
          <span><i class="legend-dot lavender"></i>分组地点待确认</span>
        </div>
      </section>

      <section class="support-grid">
        <section class="notice-card" aria-labelledby="verified-title">
          <p class="section-kicker">放假调休</p>
          <h2 id="verified-title">中秋、国庆安排已同步</h2>
          <p>9 月 20 日按周二课表上课；9 月 25–27 日放假；10 月 1–7 日放假；10 月 10 日按周三课表上课。</p>
          <span class="notice-tag">课程日期已自动调整</span>
        </section>

        <section class="calendar-card" id="calendar-sync" aria-labelledby="calendar-title">
          <p class="section-kicker">iPhone Calendar</p>
          <h2 id="calendar-title">课程变化会沿用同一订阅地址</h2>
          <p>使用订阅模式后，网页更新会同步到 iPhone 日历，无需反复导入文件。</p>
          <div class="calendar-actions">
            <button type="button" class="primary-button" data-subscribe-calendar>订阅日历</button>
            <button type="button" class="secondary-button" id="copy-calendar">复制订阅链接</button>
          </div>
          <a class="download-link" href="./calendar.ics" download>下载 .ics（一次性导入）</a>
          <p class="calendar-feedback" id="calendar-feedback" role="status"></p>
        </section>
      </section>

      <section class="term-map" aria-labelledby="term-title">
        <div class="term-map-heading">
          <div>
            <p class="section-kicker">校历节点</p>
            <h2 id="term-title">本学期时间轴</h2>
          </div>
          <p>教学：8 月 31 日 — 1 月 3 日<br />考试：1 月 4 日 — 1 月 17 日</p>
        </div>
        <ol class="date-list">
          ${e.keyDates.map(e=>`
                <li>
                  <time datetime="${e.date}">${e.date.slice(5).replace(`-`,`.`)}</time>
                  <div><strong>${e.label}</strong><span>${e.detail}</span></div>
                </li>`).join(``)}
        </ol>
      </section>

      <footer>
        <span>课程数据源：培养计划、学院课表（2026 年 9 月 14 日校对版）、2026 秋季校历及放假通知</span>
        <span>个人课表最近复核：2026 年 9 月 15 日</span>
      </footer>
    </main>`;let t=document.querySelector(`#week-select`);t&&(t.innerHTML=Array.from({length:20},(e,t)=>{let n=t+1;return`<option value="${n}">第 ${n} ${n<=18?`教学`:`考试`}周</option>`}).join(``),t.addEventListener(`change`,()=>{y=Number(t.value),C()})),document.querySelector(`#previous-week`)?.addEventListener(`click`,()=>{y=Math.max(1,y-1),C()}),document.querySelector(`#next-week`)?.addEventListener(`click`,()=>{y=Math.min(20,y+1),C()}),document.querySelector(`#current-week`)?.addEventListener(`click`,()=>{y=f(),C()}),document.querySelectorAll(`[data-subscribe-calendar]`).forEach(e=>{e.addEventListener(`click`,()=>{let e=document.querySelector(`#calendar-feedback`);e&&(e.textContent=`正在打开 iPhone 日历订阅…`),window.location.href=_().replace(/^https?/,`webcal`)})}),document.querySelector(`#copy-calendar`)?.addEventListener(`click`,async()=>{let e=document.querySelector(`#calendar-feedback`);try{await navigator.clipboard.writeText(_()),e&&(e.textContent=`订阅链接已复制。`)}catch{e&&(e.textContent=`请复制此链接：${_()}`)}});let n=document.querySelector(`#timetable-grid`);if(n){let e=0;n.addEventListener(`touchstart`,t=>{e=t.changedTouches[0]?.clientX??0},{passive:!0}),n.addEventListener(`touchend`,t=>{let n=(t.changedTouches[0]?.clientX??e)-e;Math.abs(n)<64||(y=n<0?Math.min(20,y+1):Math.max(1,y-1),C())},{passive:!0})}C()}w();