(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={term:{name:`2026–2027 学年第一学期`,school:`华南理工大学 · 生物医学科学与工程学院`,start:`2026-08-31`,teachingWeeks:18,examWeeks:[19,20],end:`2027-01-17`},events:[{id:`ideology`,course:`硕士思政课`,subtitle:`国际 10 班`,category:`公共必修`,tone:`violet`,weekday:1,weeks:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],blocks:[{start:`14:00`,end:`15:35`,slots:`5–6 节`}],location:`F3-b308`,calendar:!0},{id:`laboratory-safety`,course:`生物医学实验室安全与防护`,subtitle:`第 3 周 · 周二上午班`,category:`专业基础`,tone:`blue`,weekday:2,weeks:[3],blocks:[{start:`10:40`,end:`12:15`,slots:`3–4 节`}],location:`F3b-409`,calendar:!0},{id:`academic-writing`,course:`论文写作与学术规范`,subtitle:``,category:`公共必修`,tone:`coral`,weekday:2,weeks:[5,6,7,8],blocks:[{start:`08:50`,end:`12:15`,slots:`1–4 节`}],location:`F3-a301`,calendar:!0},{id:`cancer-biology`,course:`癌症生物学`,subtitle:``,category:`专业选修`,tone:`rose`,weekday:3,weeks:[11,12,13,14,15,16,17,18],blocks:[{start:`08:50`,end:`12:15`,slots:`1–4 节`}],location:`F3-b303`,calendar:!0},{id:`tissue-engineering-tue`,course:`Tissue Engineering and Artificial Organs`,subtitle:`组织工程与人工器官`,category:`专业选修`,tone:`mint`,weekday:2,weeks:[8,9,10,11,12,13,14,15],blocks:[{start:`19:00`,end:`20:40`,slots:`9–10 节`}],location:`F3-b201`,calendar:!0},{id:`tissue-engineering-thu`,course:`Tissue Engineering and Artificial Organs`,subtitle:`组织工程与人工器官`,category:`专业选修`,tone:`mint`,weekday:4,weeks:[8,9,10,11,12,13,14,15],blocks:[{start:`19:00`,end:`20:40`,slots:`9–10 节`}],location:`F3-b201`,calendar:!0},{id:`laboratory-animals`,course:`实验动物学`,subtitle:`周五全天密集课`,category:`专业基础`,tone:`blue`,weekday:5,weeks:[14,15,16,17],blocks:[{start:`08:50`,end:`12:15`,slots:`1–4 节`},{start:`14:00`,end:`17:25`,slots:`5–8 节`}],location:`机能实验室 C1a-207`,calendar:!0},{id:`biomaterials`,course:`高等生物材料技术`,subtitle:`周六全天密集课`,category:`专业基础`,tone:`lavender`,weekday:6,weeks:[11,12,13,14],blocks:[{start:`08:50`,end:`12:15`,slots:`1–4 节`},{start:`14:00`,end:`17:25`,slots:`5–8 节`}],location:`按分组见附表`,calendar:!0,status:`tentative`}],pending:[],keyDates:[{date:`2026-09-25`,label:`中秋节放假`,detail:`放假 1 天`},{date:`2026-10-01`,label:`国庆节放假`,detail:`10 月 1–3 日`},{date:`2026-11-17`,label:`校庆日`,detail:`华南理工大学校庆`},{date:`2027-01-01`,label:`元旦放假`,detail:`放假 1 天`},{date:`2027-01-04`,label:`考试周开始`,detail:`第 19–20 周`},{date:`2027-01-18`,label:`寒假开始`,detail:`至 2 月 28 日`}]},t=[`周一`,`周二`,`周三`,`周四`,`周五`,`周六`,`周日`],n={violet:`紫罗兰`,coral:`珊瑚橙`,rose:`玫瑰红`,mint:`薄荷绿`,blue:`湖蓝`,lavender:`薰衣草`},r=(()=>{let[t,n,r]=e.term.start.split(`-`).map(Number);return new Date(t,n-1,r,12,0,0)})(),i=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),n},a=e=>{let t=i(r,(e-1)*7);return{start:t,end:i(t,6)}},o=e=>new Intl.DateTimeFormat(`zh-CN`,{month:`numeric`,day:`numeric`}).format(e),s=()=>{let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12),n=Math.floor((t.getTime()-r.getTime())/864e5),i=Math.floor(n/7)+1;return i>=1&&i<=20?i:3},c=(e,t,n)=>e.weekday===t&&e.weeks.includes(n),l=e=>{let t=e.blocks[0],n=e.blocks[e.blocks.length-1];return`${t.start}–${n.end} · ${e.blocks.map(e=>e.slots).join(` / `)}`},u=e=>`
  <article class="course-card tone-${e.tone}" aria-label="${e.course}，${l(e)}">
    <div class="course-card-top">
      <span class="course-category">${e.category}</span>
      <span class="course-dot" aria-label="${n[e.tone]}标记"></span>
    </div>
    <h3>${e.course}</h3>
    ${e.subtitle?`<p class="course-subtitle">${e.subtitle}</p>`:``}
    <p class="course-time">${l(e)}</p>
    <p class="course-location">${e.location}</p>
    ${e.status===`tentative`?`<span class="course-status">分组地点待确认</span>`:``}
  </article>`,d=document.querySelector(`#app`);if(!d)throw Error(`App root is missing`);var f=s();function p(){return new URL(`calendar.ics`,window.location.href).toString()}function m(n){let{start:r}=a(n);return t.map((t,a)=>{let s=a+1,l=i(r,a),d=e.events.filter(e=>c(e,s,n));return`
        <section class="day-column">
          <div class="day-heading">
            <span>${t}</span>
            <time datetime="${l.toISOString().slice(0,10)}">${o(l)}</time>
          </div>
          <div class="day-events">
            ${d.length?d.map(u).join(``):`<p class="open-block">研究 / 阅读<br /><span>留给自己的推进时间</span></p>`}
          </div>
        </section>`}).join(``)}function h(){let e=a(f),t=document.querySelector(`#week-title`),n=document.querySelector(`#week-range`),r=document.querySelector(`#week-grid`),i=document.querySelector(`#week-select`),s=document.querySelector(`#previous-week`),c=document.querySelector(`#next-week`);!t||!n||!r||!i||!s||!c||(t.textContent=`第 ${f} ${f<=18?`教学`:`考试`}周`,n.textContent=`${o(e.start)} — ${o(e.end)}`,r.innerHTML=m(f),i.value=String(f),s.disabled=f===1,c.disabled=f===20)}function g(){let n=s(),r=e.events.flatMap(e=>e.weeks.map(t=>({event:e,week:t}))).filter(({week:e})=>e>=n).sort((e,t)=>e.week-t.week)[0],i=r?`下一节：第 ${r.week} 周 · ${t[r.event.weekday-1]} ${r.event.course}`:`本学期固定课程已结束`;d.innerHTML=`
    <main>
      <header class="hero">
        <a class="wordmark" href="#week-view">RESEARCH TERM</a>
        <nav aria-label="页面导航">
          <a href="#week-view">课表</a>
          <a href="#term-map">校历</a>
          <a href="#calendar-sync">日历同步</a>
        </nav>
      </header>

      <section class="intro" aria-labelledby="page-title">
        <div>
          <p class="eyebrow">2026 AUTUMN · MASTER'S TIMETABLE</p>
          <h1 id="page-title">把课表，变成<br />可持续推进的节奏。</h1>
          <p class="intro-copy">${e.term.school}<br />${e.term.name} · 1–18 周为教学周</p>
        </div>
        <div class="intro-aside">
          <span>已规划</span>
          <strong>13 <small>学分</small></strong>
          <p>${i}</p>
        </div>
      </section>

      <section class="week-panel" id="week-view" aria-labelledby="week-title">
        <div class="week-toolbar">
          <div>
            <p class="section-kicker">本周视图</p>
            <h2 id="week-title"></h2>
            <p id="week-range" class="week-range"></p>
          </div>
          <div class="week-controls" aria-label="切换教学周">
            <button type="button" id="previous-week" aria-label="上一周">←</button>
            <label class="sr-only" for="week-select">选择教学周</label>
            <select id="week-select"></select>
            <button type="button" id="next-week" aria-label="下一周">→</button>
          </div>
        </div>
        <div class="schedule-scroll" aria-live="polite">
          <div class="week-grid" id="week-grid"></div>
        </div>
        <div class="legend" aria-label="课程类型说明">
          <span><i class="legend-dot violet"></i>公共必修</span>
          <span><i class="legend-dot blue"></i>专业基础</span>
          <span><i class="legend-dot mint"></i>专业选修</span>
          <span><i class="legend-dot gray"></i>研究 / 阅读</span>
        </div>
      </section>

      <section class="support-grid">
        <section class="notice-card" aria-labelledby="pending-title">
          <p class="section-kicker">已完成核对</p>
          <h2 id="pending-title">安全课已补录</h2>
          <p>第 3 周周二第 3–4 节，10:40–12:15，F3b-409。</p>
          <span class="notice-tag">已写入日历订阅源</span>
        </section>

        <section class="calendar-card" id="calendar-sync" aria-labelledby="calendar-title">
          <p class="section-kicker">iPhone Calendar</p>
          <h2 id="calendar-title">订阅，而不是一次性导入</h2>
          <p>课程变更后，只要更新网页并重新发布，iPhone 日历会从同一个地址获取最新课表。</p>
          <div class="calendar-actions">
            <button type="button" class="button-primary" id="subscribe-calendar">订阅日历</button>
            <button type="button" class="button-secondary" id="copy-calendar">复制订阅链接</button>
          </div>
          <a class="download-link" href="./calendar.ics" download>下载 .ics（一次性导入）</a>
          <p class="calendar-feedback" id="calendar-feedback" role="status"></p>
        </section>
      </section>

      <section class="term-map" id="term-map" aria-labelledby="term-title">
        <div class="term-map-heading">
          <div>
            <p class="section-kicker">校历节点</p>
            <h2 id="term-title">这个学期的时间轴</h2>
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
        <span>更新课程后运行构建，即会刷新 <code>calendar.ics</code></span>
      </footer>
    </main>`;let a=document.querySelector(`#week-select`);a&&(a.innerHTML=Array.from({length:20},(e,t)=>{let n=t+1;return`<option value="${n}">第 ${n} ${n<=18?`教学`:`考试`}周</option>`}).join(``),a.addEventListener(`change`,()=>{f=Number(a.value),h()})),document.querySelector(`#previous-week`)?.addEventListener(`click`,()=>{f=Math.max(1,f-1),h()}),document.querySelector(`#next-week`)?.addEventListener(`click`,()=>{f=Math.min(20,f+1),h()}),document.querySelector(`#subscribe-calendar`)?.addEventListener(`click`,()=>{let e=p(),t=document.querySelector(`#calendar-feedback`);t&&(t.textContent=`正在打开 iPhone 日历订阅…`),window.location.href=e.replace(/^https?/,`webcal`)}),document.querySelector(`#copy-calendar`)?.addEventListener(`click`,async()=>{let e=document.querySelector(`#calendar-feedback`);try{await navigator.clipboard.writeText(p()),e&&(e.textContent=`订阅链接已复制。请在 iPhone 日历中粘贴并订阅。`)}catch{e&&(e.textContent=`请复制此链接：${p()}`)}}),h()}g();