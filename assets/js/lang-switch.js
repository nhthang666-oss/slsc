// assets/js/lang-switch.js
const translations = {
  en: {
    company: "Saigon Supply Chain Logistics Co., Ltd.",
    tagline: "Connecting the World Through Logistics Excellence",
    home: "Home",
    about: "About Us",
    services: "Services",
    offices: "Offices",
    contact: "Contact",
    address: "123 Nguyen Van Linh, District 7, Ho Chi Minh City, Vietnam",
    phone: "+84 38 279 8634",
    email: "hiring.slschcm@gmail.com",
    copyright: "© 2025 Saigon Supply Chain Logistics Co., Ltd. All Rights Reserved."
  },
  zh: {
    company: "西貢供應鏈物流有限公司",
    tagline: "以卓越物流連接全世界",
    home: "首頁",
    about: "關於我們",
    services: "服務項目",
    offices: "辦事處",
    contact: "聯絡我們",
    address: "越南胡志明市第七郡阮文靈街 123 號",
    phone: "+84 38 279 8634",
    email: "hiring.slschcm@gmail.com",
    copyright: "© 2025 西貢供應鏈物流有限公司 版權所有"
  }
};

const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.id === 'to-zh' ? 'zh' : 'en';
    switchLang(lang);
  });
});

function switchLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  localStorage.setItem('lang', lang);
}

// Ghi nhớ ngôn ngữ người dùng
const savedLang = localStorage.getItem('lang') || 'en';
switchLang(savedLang);
