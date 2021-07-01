/* 起動時即TL(改良) */

(async()=>{const t=document.body,e={childList:!0,subtree:!0},n=async()=>{r.disconnect();try{const t=await(async()=>{try{return TD.settings.getComposeStayOpen()}catch(t){return null}})();if(!0===t){const e=document.querySelector('.js-compose-close');if(!e)throw new Error;const n=document.createElement('style');return n.insertAdjacentHTML('beforeend','html .drawer[data-drawer=compose]{visibility:hidden!important}html .js-app-content,html .js-app-content.is-open{transition-duration:0s!important;transform:translateX(0)!important;margin-right:0!important}'),document.head.insertAdjacentElement('beforeend',n),e.click(),await(async t=>new Promise((e=>setTimeout(e,t))))(500),n.remove(),t}if(!1===t)return t;throw new Error}catch{r.observe(t,e)}},r=new MutationObserver((()=>{n()}));r.observe(t,e),n()})();

/*!
 * MsecDeck (by taiy) / lunalightp - ずっとフル表示
 * Copyright 2021 taiy https://github.com/taiyme
 * Apache License Version 2.0 https://www.apache.org/licenses/LICENSE-2.0
 * Forked from MarinDeck JS (by taiy) https://github.com/taiyme/marindeck-cssjs
 * Date: 2021-04-19 08:30 JST
 */
{const t=()=>{const t=document.querySelectorAll('.tweet-timestamp:not([data-msecdeck=done])');if(t.length)for(const o of t){o.classList.remove('js-timestamp'),o.dataset.msecdeck='done';const t=o.children[0],s=t.tagName.toLowerCase();if('a'===s){const s=Number(t.href.split('/')[5]),a=n(s<1e14?new Date(Number(o.dataset.time)):e(s));t.textContent=a}if('span'===s){const e=Number(o.dataset.time),s=n(new Date(e));t.textContent=s}}const o=document.querySelectorAll('.tweet-detail>.js-card-container+div.txt-mute>a:first-child:not([data-msecdeck=done])');if(o.length)for(const t of o){t.dataset.msecdeck='done';const o=Number(t.href.split('/')[5]),s=n(o<1e14?new Date(t.textContent.replace(/(am|pm)\s·/,' $1')):e(o),!0);t.textContent=s}},e=t=>{const e=t,n=Math.floor(e/4194304)+1288834974657;return new Date(n)},n=(t,e=!1)=>{const n=(t,e)=>t.toString().padStart(e,'0');return`${`${n(t.getFullYear(),4)}/${n(t.getMonth()+1,2)}/${n(t.getDate(),2)}`} ${`${n(t.getHours(),2)}:${n(t.getMinutes(),2)}:${n(t.getSeconds(),2)}.${n(t.getMilliseconds(),3)}`}`},o=document.body,s={childList:!0,attributes:!1,characterData:!1,subtree:!0};new MutationObserver((()=>{t()})).observe(o,s),t()}



/* highlight */
const highlight=(e,t)=>{const s=(...e)=>{const t=e.length,s=e[t-t],n=e[t-2],r=e[t-1],o=r.indexOf('>',n),i=r.indexOf('<',n);return o<i||-1!==o&&-1===i?s:`<strong>${s}</strong>`},n=t=>{const s=(t||'').replace(/<img .+?alt="(.+?)".+?>/gi,'$1').replace(/<a .+?data-full-url="(https?:\/\/)?(.+?)".+?>.+?<\/a>/,'$2').replace(/(<([^>]+)>)/gi,'');return new RegExp(e,'i').test(s)};new MutationObserver((r=>{for(const i of r||[]){const r=i.target,l=e=>r.classList.contains(e),a=(...e)=>e.reduce(((e,t)=>(Array.isArray(e)?e:[]).concat([l(t)]).filter((e=>e))),null);if(r&&a('js-chirp-container','js-replies-to','js-replies-before','js-tweet-detail','js-message-detail').includes(!0))for(const r of i.addedNodes||[]){const i='function'==typeof r.getElementsByClassName?r.getElementsByClassName('js-tweet-text')[0]:null;i&&n(i.innerHTML)&&(o=i,t&&o.style.setProperty('color',t,'important'),i.innerHTML=i.innerHTML.replace(new RegExp(e,'gi'),s))}}var o})).observe(document.body,{childList:!0,subtree:!0})};

highlight('Marin ?Deck|マリンデック|まりんでっく|㌥','#41adef');
highlight('るな(ちゃ?|くん|さん|こ)|(@|＠)る|むらち|はげち|L1n4r1A','#ffa500');
