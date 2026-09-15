(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={term:{name:`2026–2027 学年第一学期`,school:`华南理工大学 · 生物医学科学与工程学院`,start:`2026-08-31`,teachingWeeks:18,examWeeks:[19,20],end:`2027-01-17`},events:[{id:`ideology`,course:`硕士思政课`,subtitle:`国际 10 班`,category:`公共必修`,tone:`violet`,weekday:1,weeks:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],blocks:[{start:`14:00`,end:`15:35`,slots:`5–6 节`}],location:`F3-b308`,calendar:!0},{id:`laboratory-safety`,course:`生物医学实验室安全与防护`,subtitle:`第 3 周 · 周二上午班`,category:`专业基础`,tone:`blue`,weekday:2,weeks:[3],blocks:[{start:`10:40`,end:`12:15`,slots:`3–4 节`}],location:`F3b-409`,calendar:!0},{id:`academic-writing`,course:`论文写作与学术规范`,subtitle:``,category:`公共必修`,tone:`coral`,weekday:2,weeks:[5,6,7,8],blocks:[{start:`08:50`,end:`12:15`,slots:`1–4 节`}],location:`F3-a301`,calendar:!0},{id:`cancer-biology`,course:`癌症生物学`,subtitle:``,category:`专业选修`,tone:`rose`,weekday:3,weeks:[11,12,13,14,15,16,17,18],blocks:[{start:`08:50`,end:`12:15`,slots:`1–4 节`}],location:`F3-b303`,calendar:!0},{id:`tissue-engineering-tue`,course:`Tissue Engineering and Artificial Organs`,subtitle:`组织工程与人工器官`,category:`专业选修`,tone:`mint`,weekday:2,weeks:[8,9,10,11,12,13,14,15],blocks:[{start:`19:00`,end:`20:40`,slots:`9–10 节`}],location:`F3-b201`,calendar:!0},{id:`tissue-engineering-thu`,course:`Tissue Engineering and Artificial Organs`,subtitle:`组织工程与人工器官`,category:`专业选修`,tone:`mint`,weekday:4,weeks:[8,9,10,11,12,13,14,15],blocks:[{start:`19:00`,end:`20:40`,slots:`9–10 节`}],location:`F3-b201`,calendar:!0},{id:`laboratory-animals`,course:`实验动物学`,subtitle:`周五全天密集课`,category:`专业基础`,tone:`blue`,weekday:5,weeks:[14,15,16,17],blocks:[{start:`08:50`,end:`12:15`,slots:`1–4 节`},{start:`14:00`,end:`17:25`,slots:`5–8 节`}],location:`机能实验室 C1a-207`,calendar:!0},{id:`biomaterials`,course:`高等生物材料技术`,subtitle:`周六全天密集课`,category:`专业基础`,tone:`lavender`,weekday:6,weeks:[11,12,13,14],blocks:[{start:`08:50`,end:`12:15`,slots:`1–4 节`},{start:`14:00`,end:`17:25`,slots:`5–8 节`}],location:`按分组见附表`,calendar:!0,status:`tentative`}],pending:[],keyDates:[{date:`2026-09-25`,label:`中秋节放假`,detail:`放假 1 天`},{date:`2026-10-01`,label:`国庆节放假`,detail:`10 月 1–3 日`},{date:`2026-11-17`,label:`校庆日`,detail:`华南理工大学校庆`},{date:`2027-01-01`,label:`元旦放假`,detail:`放假 1 天`},{date:`2027-01-04`,label:`考试周开始`,detail:`第 19–20 周`},{date:`2027-01-18`,label:`寒假开始`,detail:`至 2 月 28 日`}]},t=[`周一`,`周二`,`周三`,`周四`,`周五`,`周六`,`周日`],n=[{slot:1,start:`08:50`},{slot:2,start:`09:40`},{slot:3,start:`10:40`},{slot:4,start:`11:30`},{slot:5,start:`14:00`},{slot:6,start:`14:50`},{slot:7,start:`15:45`},{slot:8,start:`16:40`},{slot:9,start:`19:00`},{slot:10,start:`19:55`}],r=(()=>{let[t,n,r]=e.term.start.split(`-`).map(Number);return new Date(t,n-1,r,12,0,0)})(),i=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),n},a=(e=new Date)=>new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0),o=e=>{let t=i(r,(e-1)*7);return{start:t,end:i(t,6)}},s=e=>new Intl.DateTimeFormat(`zh-CN`,{month:`numeric`,day:`numeric`}).format(e),c=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,l=()=>{let e=Math.floor((a().getTime()-r.getTime())/864e5),t=Math.floor(e/7)+1;return t>=1&&t<=20?t:3},u=e=>{let t=e.slots.match(/\d+/g)?.map(Number)??[1],n=t[0],r=t[1]??n;return{first:n,last:r,span:r-n+1}},d=e=>e.id===`academic-writing`?`论文写作`:e.id===`laboratory-safety`?`实验室安全与防护`:e.id.startsWith(`tissue-engineering`)?`组织工程与人工器官`:e.course,f=()=>new URL(`calendar.ics`,window.location.href).toString(),p=document.querySelector(`#app`);if(!p)throw Error(`App root is missing`);var m=l();function h(r){let{start:s}=o(r),l=c(a()),f=e.events.filter(e=>e.weeks.includes(r));return`
    <div class="timetable-corner" style="grid-column:1;grid-row:1"><span>节次</span></div>
    ${t.map((e,t)=>{let n=i(s,t);return`
        <div class="day-header${c(n)===l?` is-today`:``}" style="grid-column:${t+2};grid-row:1">
          <strong>${e}</strong>
          <time datetime="${c(n)}">${n.getMonth()+1}/${n.getDate()}</time>
        </div>`}).join(``)}
    ${n.map(({slot:e,start:t})=>`
        <div class="time-label${e===4||e===8?` is-break-end`:``}" style="grid-column:1;grid-row:${e+1}">
          <strong>${e}</strong><span>${t}</span>
        </div>`).join(``)}
    ${n.flatMap(({slot:e})=>t.map((t,n)=>`<div class="${[`grid-cell`,c(i(s,n))===l?`is-today`:``,e===4||e===8?`is-break-end`:``].filter(Boolean).join(` `)}" style="grid-column:${n+2};grid-row:${e+1}" aria-hidden="true"></div>`)).join(``)}
    ${f.flatMap(e=>e.blocks.map((t,n)=>{let{first:r,span:i}=u(t),a=e.status,o=d(e);return`
          <article
            class="timetable-course tone-${e.tone}${a===`tentative`?` is-tentative`:``}"
            style="grid-column:${e.weekday+1};grid-row:${r+1} / span ${i}"
            aria-label="${e.course}，${t.slots}，${e.location}"
            title="${e.course}｜${t.slots}｜${e.location}"
          >
            <span class="course-name">${o}</span>
            <span class="course-room">${e.location}</span>
            <span class="course-slot">${t.slots}${a===`tentative`?` · 待确认`:``}${e.blocks.length>1?` · ${n+1}/${e.blocks.length}`:``}</span>
          </article>`})).join(``)}`}function g(t){let n=e.events.filter(e=>e.weeks.includes(t)),r=new Set(n.map(e=>e.course)).size,i=n.reduce((e,t)=>e+t.blocks.length,0);return r?`本周 ${r} 门课 · ${i} 个上课时段`:`本周没有固定课程，适合集中推进实验与阅读`}function _(){let t=l(),n=a().getDay(),r=n===0?7:n,i=e.events.filter(e=>e.weekday===r&&e.weeks.includes(t));return i.length?`今天：${i.map(e=>`${d(e)} ${e.blocks[0].start}`).join(`；`)}`:`今天没有固定课程，给实验和阅读留一段完整时间。`}function v(){let e=o(m),t=document.querySelector(`#week-title`),n=document.querySelector(`#week-range`),r=document.querySelector(`#week-summary`),i=document.querySelector(`#timetable-grid`),a=document.querySelector(`#week-select`),c=document.querySelector(`#previous-week`),u=document.querySelector(`#next-week`),d=document.querySelector(`#current-week`);!t||!n||!r||!i||!a||!c||!u||!d||(t.textContent=`第 ${m} ${m<=18?`教学`:`考试`}周`,n.textContent=`${s(e.start)} — ${s(e.end)}`,r.textContent=g(m),i.innerHTML=h(m),a.value=String(m),c.disabled=m===1,u.disabled=m===20,d.disabled=m===l())}function y(){p.innerHTML=`
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

        <div class="today-note"><span>今天</span><p>${_()}</p></div>

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
          <p class="section-kicker">课程核对</p>
          <h2 id="verified-title">7 门秋季课程已覆盖</h2>
          <p>安全课已补录：第 3 周周二第 3–4 节，10:40–12:15，F3b-409。</p>
          <span class="notice-tag">培养计划已复核</span>
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
        <span>课程数据源：培养计划、学院课表（2026 年 9 月 14 日校对版）、2026 秋季校历</span>
        <span>个人课表最近复核：2026 年 9 月 15 日</span>
      </footer>
    </main>`;let t=document.querySelector(`#week-select`);t&&(t.innerHTML=Array.from({length:20},(e,t)=>{let n=t+1;return`<option value="${n}">第 ${n} ${n<=18?`教学`:`考试`}周</option>`}).join(``),t.addEventListener(`change`,()=>{m=Number(t.value),v()})),document.querySelector(`#previous-week`)?.addEventListener(`click`,()=>{m=Math.max(1,m-1),v()}),document.querySelector(`#next-week`)?.addEventListener(`click`,()=>{m=Math.min(20,m+1),v()}),document.querySelector(`#current-week`)?.addEventListener(`click`,()=>{m=l(),v()}),document.querySelectorAll(`[data-subscribe-calendar]`).forEach(e=>{e.addEventListener(`click`,()=>{let e=document.querySelector(`#calendar-feedback`);e&&(e.textContent=`正在打开 iPhone 日历订阅…`),window.location.href=f().replace(/^https?/,`webcal`)})}),document.querySelector(`#copy-calendar`)?.addEventListener(`click`,async()=>{let e=document.querySelector(`#calendar-feedback`);try{await navigator.clipboard.writeText(f()),e&&(e.textContent=`订阅链接已复制。`)}catch{e&&(e.textContent=`请复制此链接：${f()}`)}});let n=document.querySelector(`#timetable-grid`);if(n){let e=0;n.addEventListener(`touchstart`,t=>{e=t.changedTouches[0]?.clientX??0},{passive:!0}),n.addEventListener(`touchend`,t=>{let n=(t.changedTouches[0]?.clientX??e)-e;Math.abs(n)<64||(m=n<0?Math.min(20,m+1):Math.max(1,m-1),v())},{passive:!0})}v()}y();