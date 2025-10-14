
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    offices: "Offices",
    contact: "Contact",
    tagline: "Connecting the World Through Logistics Excellence",
    company: "Saigon Supply Chain Logistics Co., Ltd.",
    address: "123 Nguyen Van Linh, District 7, Ho Chi Minh City, Vietnam",
    phone: "+84 28 1234 5678",
    email: "info@saigonsupplychain.com",
    copyright: "© 2025 Saigon Supply Chain Logistics Co., Ltd. All Rights Reserved."
  },
  zh: {
    home: "首頁",
    about: "關於我們",
    services: "服務項目",
    offices: "辦公據點",
    contact: "聯絡我們",
    tagline: "透過卓越物流，連結世界",
    company: "Saigon Supply Chain Logistics Co., Ltd.",
    address: "123 Nguyen Van Linh, District 7, Ho Chi Minh City, Vietnam",
    phone: "+84 28 1234 5678",
    email: "info@saigonsupplychain.com",
    copyright: "© 2025 Saigon Supply Chain Logistics Co., Ltd. 版權所有。"
  }
};

function setLang(lang){
  const t = translations[lang]||translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(t[key]) el.innerText = t[key];
  });
  localStorage.setItem('site-lang', lang);
}

document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('site-lang') || 'en';
  setLang(saved);
  document.getElementById('to-en').addEventListener('click', ()=> setLang('en'));
  document.getElementById('to-zh').addEventListener('click', ()=> setLang('zh'));
});
