(function () {
  "use strict";

  var STORAGE_LANG = "cmst_lang";
  var STORAGE_THEME = "cmst_theme";

  var I18N = {
    ro: {
      brandSubtitle:
        'IPLT „Onisifor Ghibu” — Comisia metodică: matematică și științe',
      skipMain: "Sari la conținut",
      navHome: "Acasă",
      navMath: "Matematică",
      navPhys: "Fizică",
      navChem: "Chimie",
      navInfo: "Informatică",
      navBio: "Biologie",
      navLogin: "Autentificare",
      navRegister: "Înregistrare",
      navLogout: "Ieșire",
      roleTeacher: "profesor",
      roleStudent: "elev",
      emptyEvents: "Nu există evenimente.",
      emptyAwards: "Nu există premii sau diplome înregistrate.",
      teacherPanel: "Gestiune (profesor)",
      teacherAddEvent: "Adaugă eveniment",
      teacherEventTitle: "Titlu",
      teacherEventDesc: "Descriere",
      teacherEventDate: "Data",
      teacherEventStatus: "Tip",
      teacherEventStatusUp: "Viitor",
      teacherEventStatusPast: "Trecut",
      teacherEventPhoto: "Fotografie eveniment (opțional, max 5 MB)",
      teacherSaveEvent: "Salvează evenimentul",
      teacherAddAward: "Adaugă premiu / diplomă",
      teacherAwardTitle: "Titlu",
      teacherAwardDesc: "Descriere",
      teacherAwardType: "Tip",
      teacherAwardYear: "An",
      teacherAwardRecipient: "Beneficiar (opțional)",
      teacherAwardPhoto: "Fotografie diplomă / premiu (opțional, max 5 MB)",
      teacherSaveAward: "Salvează",
      teacherDelete: "Șterge",
      awardTypePrize: "Premiu",
      awardTypeDiploma: "Diplomă",
      awardTypeCertificate: "Certificat",
      awardTypeOther: "Altele",
      authEmail: "E-mail",
      authPassword: "Parolă",
      authFullName: "Nume complet",
      authRole: "Rol",
      authRoleTeacher: "Profesor",
      authRoleStudent: "Elev",
      authSubmitLogin: "Autentificare",
      authSubmitRegister: "Creare cont",
      authNoAccount: "Nu ai cont? Înregistrare",
      authHaveAccount: "Ai deja cont? Autentificare",
      formError: "A apărut o eroare. Verifică datele sau drepturile contului.",
      dbLoadError: "Nu s-au putut încărca datele din server.",
      confirmDelete: "Ștergi această înregistrare?",
      footerContact: "Contact",
      footerSocial: "Linkuri",
      footerSchool: "Instituție",
      footerAddress: "Adresă",
      footerPhone: "Telefon",
      footerEmail: "E-mail",
      footerOfficialSite: "Site-ul oficial al liceului",
      footerFacebook: "Facebook — IPLT „Onisifor Ghibu”",
      logoAltSchool: "Logo IPLT „Onisifor Ghibu”",
      themeLight: "Luminos",
      themeDark: "Întunecat",
      homeTitle: "Bun venit",
      homeLead:
        "Portalul comisiei metodice pentru disciplinele științelor reale: matematică, fizică, chimie, informatică și biologie.",
      homeUpcoming: "Evenimente viitoare (comisie)",
      homeSubjects: "Discipline",
      cardOlimpiada: "Etapa locală — Olimpiada de matematică",
      cardOlimpiadaDesc: "Înscrieri până pe 15 mai. Sala de conferințe, etaj 2.",
      cardLab: "Ziua porților deschise — laborator fizică",
      cardLabDesc: "Demonstrații pentru clasele a IX–a XI-a.",
      cardTraining: "Formare metodică — chimie organică",
      cardTrainingDesc: "Întâlnire online; linkul se trimite pe e-mail.",
      subTeachers: "Profesori",
      subUpcoming: "Evenimente viitoare",
      subPast: "Evenimente trecute",
      subAwards: "Premii, diplome și recunoașteri",
      subLeadership: "Conducerea instituției",
      teacherRole: "Profesor",
      teacherHead: "Șef de catedră",
      teacherPrincipal: "Director",
      teacherDeputyDirector: "Director adjunct",
      teacherDirector: "Director",
      pastConf: "Conferință metodică — 2025",
      pastConfDesc: "Schimb de experiență privind evaluarea națională.",
      pastFair: "Târg științific — 2024",
      pastFairDesc: "Proiecte elevi, secțiunea științe reale.",
      award1: "Premiu regional — concurs matematică",
      award1d: "Echipa școlii — locul II.",
      award2: "Diplomă excelență — fizică",
      award2d: "Participare olimpiadă națională.",
      award3: "Certificat parteneriat — chimie",
      award3d: "Colaborare cu universitatea locală.",
      pageMathTitle: "Matematică",
      pageMathLead: "Evenimente, profesori și rezultate — catedra de matematică.",
      pagePhysTitle: "Fizică",
      pagePhysLead: "Laboratoare, concursuri și activități metodice — fizică.",
      pageChemTitle: "Chimie",
      pageChemLead: "Securitate în laborator, olimpiade și proiecte — chimie.",
      pageInfoTitle: "Informatică",
      pageInfoLead: "Programare, algoritmică și competiții IT.",
      pageBioTitle: "Biologie",
      pageBioLead: "Ecologie, sănătate și educație științifică — biologie.",
      eventMath1: "Pregătire olimpiadă — algebra",
      eventMath1d: "Sâmbătă, 10:00, sala 12.",
      eventMath2: "Evaluare formativă comună",
      eventMath2d: "Clasele a X-a, săptămâna 20.",
      eventPhys1: "Lucrare practică — optică",
      eventPhys1d: "Laboratorul de fizică.",
      eventPhys2: "Concurs „Fizica pentru toți”",
      eventPhys2d: "Înscrieri la profesorul de serviciu.",
      eventChem1: "Experiment demonstrativ",
      eventChem1d: "Reacții acido-bazice, clasa a IX-a.",
      eventChem2: "Sesiune metodică chimie",
      eventChem2d: "Planificare anuală.",
      eventInfo1: "Maraton informatică",
      eventInfo1d: "Probleme de algoritmică, 3 ore.",
      eventInfo2: "Club Scratch & Python",
      eventInfo2d: "Miercuri după-amiază.",
      eventBio1: "Excursie ecologică",
      eventBio1d: "Studiu de teren — flora locală.",
      eventBio2: "Săptămâna sănătății",
      eventBio2d: "Activități interdisciplinare.",
      tMath1: "Șoimu Aliona",
      tMath2: "Vrabie Elena",
      tMath3: "Bouroș Elena",
      tMath4: "Bruma Mihaela",
      tMath5: "Baciu Ana",
      tMath6: "Raileanu Daniela",
      tPhys1: "Moraru Vasile",
      tPhys2: "Ceban Ina",
      tPhys3: "Chirtoacă Angela",
      tChem1: "Mîndru Alexei",
      tChem2: "Coșleț Angela",
      tInfo1: "Rencheci Ala",
      tInfo2: "Boldureanu Oltea",
      tBio1: "Golban Tatiana",
      tBio2: "Ceban Elena",
      tAdj: "Cernei Cristina",
    },
    ru: {
      brandSubtitle:
        'ГТЛ им. Онисифора Гибу — методическая комиссия: математика и естественные науки',
      skipMain: "Перейти к содержимому",
      navHome: "Главная",
      navMath: "Математика",
      navPhys: "Физика",
      navChem: "Химия",
      navInfo: "Информатика",
      navBio: "Биология",
      navLogin: "Вход",
      navRegister: "Регистрация",
      navLogout: "Выход",
      roleTeacher: "учитель",
      roleStudent: "ученик",
      emptyEvents: "Нет событий.",
      emptyAwards: "Нет записей о наградах.",
      teacherPanel: "Управление (учитель)",
      teacherAddEvent: "Добавить событие",
      teacherEventTitle: "Заголовок",
      teacherEventDesc: "Описание",
      teacherEventDate: "Дата",
      teacherEventStatus: "Тип",
      teacherEventStatusUp: "Предстоящее",
      teacherEventStatusPast: "Прошедшее",
      teacherEventPhoto: "Фото события (необязательно, до 5 МБ)",
      teacherSaveEvent: "Сохранить событие",
      teacherAddAward: "Добавить награду / диплом",
      teacherAwardTitle: "Заголовок",
      teacherAwardDesc: "Описание",
      teacherAwardType: "Тип",
      teacherAwardYear: "Год",
      teacherAwardRecipient: "Получатель (необязательно)",
      teacherAwardPhoto: "Фото диплома / награды (необязательно, до 5 МБ)",
      teacherSaveAward: "Сохранить",
      teacherDelete: "Удалить",
      awardTypePrize: "Премия",
      awardTypeDiploma: "Диплом",
      awardTypeCertificate: "Сертификат",
      awardTypeOther: "Другое",
      authEmail: "Эл. почта",
      authPassword: "Пароль",
      authFullName: "Полное имя",
      authRole: "Роль",
      authRoleTeacher: "Учитель",
      authRoleStudent: "Ученик",
      authSubmitLogin: "Войти",
      authSubmitRegister: "Создать аккаунт",
      authNoAccount: "Нет аккаунта? Регистрация",
      authHaveAccount: "Уже есть аккаунт? Вход",
      formError: "Ошибка. Проверьте данные или права.",
      dbLoadError: "Не удалось загрузить данные.",
      confirmDelete: "Удалить эту запись?",
      footerContact: "Контакты",
      footerSocial: "Ссылки",
      footerSchool: "Учреждение",
      footerAddress: "Адрес",
      footerPhone: "Телефон",
      footerEmail: "Эл. почта",
      footerOfficialSite: "Официальный сайт лицея",
      footerFacebook: "Facebook — ГТЛ им. Онисифора Гибу",
      logoAltSchool: "Логотип ГТЛ им. Онисифора Гибу",
      themeLight: "Светлая",
      themeDark: "Тёмная",
      homeTitle: "Добро пожаловать",
      homeLead:
        "Портал методической комиссии по естественнонаучным предметам: математика, физика, химия, информатика и биология.",
      homeUpcoming: "Предстоящие события (комиссия)",
      homeSubjects: "Предметы",
      cardOlimpiada: "Школьный этап — олимпиада по математике",
      cardOlimpiadaDesc: "Регистрация до 15 мая. Конференц-зал, 2-й этаж.",
      cardLab: "День открытых дверей — лаборатория физики",
      cardLabDesc: "Демонстрации для 9–11 классов.",
      cardTraining: "Методическое совещание — органическая химия",
      cardTrainingDesc: "Онлайн; ссылка высылается на e-mail.",
      subTeachers: "Учителя",
      subUpcoming: "Предстоящие события",
      subPast: "Прошедшие события",
      subAwards: "Награды, дипломы и признание",
      subLeadership: "Руководство учреждения",
      teacherRole: "Учитель",
      teacherHead: "Заведующий кафедрой",
      teacherPrincipal: "Директор",
      teacherDeputyDirector: "Заместитель директора",
      teacherDirector: "Директор",
      pastConf: "Методическая конференция — 2025",
      pastConfDesc: "Обмен опытом по национальной оценке.",
      pastFair: "Научная ярмарка — 2024",
      pastFairDesc: "Проекты учащихся, секция естественных наук.",
      award1: "Региональная премия — конкурс по математике",
      award1d: "Команда школы — 2-е место.",
      award2: "Диплом отличия — физика",
      award2d: "Участие в национальной олимпиаде.",
      award3: "Сертификат партнёрства — химия",
      award3d: "Сотрудничество с местным университетом.",
      pageMathTitle: "Математика",
      pageMathLead: "События, преподаватели и результаты — кафедра математики.",
      pagePhysTitle: "Физика",
      pagePhysLead: "Лаборатории, конкурсы и методическая работа — физика.",
      pageChemTitle: "Химия",
      pageChemLead: "Безопасность в лаборатории, олимпиады и проекты — химия.",
      pageInfoTitle: "Информатика",
      pageInfoLead: "Программирование, алгоритмы и IT-соревнования.",
      pageBioTitle: "Биология",
      pageBioLead: "Экология, здоровье и научное образование — биология.",
      eventMath1: "Подготовка к олимпиаде — алгебра",
      eventMath1d: "Суббота, 10:00, ауд. 12.",
      eventMath2: "Общая формативная оценка",
      eventMath2d: "10-е классы, 20-я неделя.",
      eventPhys1: "Практическая работа — оптика",
      eventPhys1d: "Физическая лаборатория.",
      eventPhys2: "Конкурс «Физика для всех»",
      eventPhys2d: "Запись у дежурного учителя.",
      eventChem1: "Демонстрационный эксперимент",
      eventChem1d: "Кислотно-основные реакции, 9 класс.",
      eventChem2: "Методическое заседание по химии",
      eventChem2d: "Годовое планирование.",
      eventInfo1: "Информатический марафон",
      eventInfo1d: "Задачи по алгоритмике, 3 часа.",
      eventInfo2: "Клуб Scratch и Python",
      eventInfo2d: "Среды после обеда.",
      eventBio1: "Экологическая экскурсия",
      eventBio1d: "Полевые исследования — местная флора.",
      eventBio2: "Неделя здоровья",
      eventBio2d: "Междисциплинарные мероприятия.",
      tMath1: "Șoimu Aliona",
      tMath2: "Vrabie Elena",
      tMath3: "Bouroș Elena",
      tMath4: "Bruma Mihaela",
      tMath5: "Baciu Ana",
      tMath6: "Raileanu Daniela",
      tPhys1: "Moraru Vasile",
      tPhys2: "Ceban Ina",
      tPhys3: "Chirtoacă Angela",
      tChem1: "Mîndru Alexei",
      tChem2: "Coșleț Angela",
      tInfo1: "Rencheci Ala",
      tInfo2: "Boldureanu Oltea",
      tBio1: "Golban Tatiana",
      tBio2: "Ceban Elena",
      tAdj: "Cernei Cristina",
    },
    en: {
      brandSubtitle:
        'IPLT „Onisifor Ghibu” — Methodical commission: mathematics and sciences',
      skipMain: "Skip to content",
      navHome: "Home",
      navMath: "Mathematics",
      navPhys: "Physics",
      navChem: "Chemistry",
      navInfo: "Computer science",
      navBio: "Biology",
      navLogin: "Log in",
      navRegister: "Sign up",
      navLogout: "Log out",
      roleTeacher: "teacher",
      roleStudent: "student",
      emptyEvents: "No events yet.",
      emptyAwards: "No awards or diplomas recorded.",
      teacherPanel: "Management (teacher)",
      teacherAddEvent: "Add event",
      teacherEventTitle: "Title",
      teacherEventDesc: "Description",
      teacherEventDate: "Date",
      teacherEventStatus: "Type",
      teacherEventStatusUp: "Upcoming",
      teacherEventStatusPast: "Past",
      teacherEventPhoto: "Event photo (optional, max 5 MB)",
      teacherSaveEvent: "Save event",
      teacherAddAward: "Add award / diploma",
      teacherAwardTitle: "Title",
      teacherAwardDesc: "Description",
      teacherAwardType: "Type",
      teacherAwardYear: "Year",
      teacherAwardRecipient: "Recipient (optional)",
      teacherAwardPhoto: "Award / diploma photo (optional, max 5 MB)",
      teacherSaveAward: "Save",
      teacherDelete: "Delete",
      awardTypePrize: "Prize",
      awardTypeDiploma: "Diploma",
      awardTypeCertificate: "Certificate",
      awardTypeOther: "Other",
      authEmail: "Email",
      authPassword: "Password",
      authFullName: "Full name",
      authRole: "Role",
      authRoleTeacher: "Teacher",
      authRoleStudent: "Student",
      authSubmitLogin: "Log in",
      authSubmitRegister: "Create account",
      authNoAccount: "No account? Sign up",
      authHaveAccount: "Already have an account? Log in",
      formError: "Something went wrong. Check your data or permissions.",
      dbLoadError: "Could not load data from the server.",
      confirmDelete: "Delete this record?",
      footerContact: "Contact",
      footerSocial: "Links",
      footerSchool: "Institution",
      footerAddress: "Address",
      footerPhone: "Phone",
      footerEmail: "Email",
      footerOfficialSite: "Official school website",
      footerFacebook: "Facebook — IPLT „Onisifor Ghibu”",
      logoAltSchool: "IPLT „Onisifor Ghibu” logo",
      themeLight: "Light",
      themeDark: "Dark",
      homeTitle: "Welcome",
      homeLead:
        "Portal of the methodological commission for real-science subjects: mathematics, physics, chemistry, computer science, and biology.",
      homeUpcoming: "Upcoming events (commission)",
      homeSubjects: "Subjects",
      cardOlimpiada: "Local round — Mathematics Olympiad",
      cardOlimpiadaDesc: "Registration until May 15. Conference hall, 2nd floor.",
      cardLab: "Open day — physics laboratory",
      cardLabDesc: "Demonstrations for grades 9–11.",
      cardTraining: "Methodical meeting — organic chemistry",
      cardTrainingDesc: "Online; link sent by email.",
      subTeachers: "Teachers",
      subUpcoming: "Upcoming events",
      subPast: "Past events",
      subAwards: "Awards, diplomas, and recognition",
      subLeadership: "School leadership",
      teacherRole: "Teacher",
      teacherHead: "Head of department",
      teacherPrincipal: "Principal",
      teacherDeputyDirector: "Deputy principal",
      teacherDirector: "Principal",
      pastConf: "Methodical conference — 2025",
      pastConfDesc: "Exchange of experience on national assessment.",
      pastFair: "Science fair — 2024",
      pastFairDesc: "Student projects, real-sciences section.",
      award1: "Regional prize — mathematics contest",
      award1d: "School team — 2nd place.",
      award2: "Excellence diploma — physics",
      award2d: "National olympiad participation.",
      award3: "Partnership certificate — chemistry",
      award3d: "Collaboration with the local university.",
      pageMathTitle: "Mathematics",
      pageMathLead: "Events, teachers, and results — mathematics department.",
      pagePhysTitle: "Physics",
      pagePhysLead: "Labs, contests, and methodical activities — physics.",
      pageChemTitle: "Chemistry",
      pageChemLead: "Lab safety, olympiads, and projects — chemistry.",
      pageInfoTitle: "Computer science",
      pageInfoLead: "Programming, algorithms, and IT competitions.",
      pageBioTitle: "Biology",
      pageBioLead: "Ecology, health, and science education — biology.",
      eventMath1: "Olympiad training — algebra",
      eventMath1d: "Saturday, 10:00, room 12.",
      eventMath2: "Common formative assessment",
      eventMath2d: "Grade 10, week 20.",
      eventPhys1: "Practical work — optics",
      eventPhys1d: "Physics lab.",
      eventPhys2: "“Physics for all” contest",
      eventPhys2d: "Sign up with the duty teacher.",
      eventChem1: "Demonstration experiment",
      eventChem1d: "Acid–base reactions, grade 9.",
      eventChem2: "Chemistry methodical session",
      eventChem2d: "Annual planning.",
      eventInfo1: "Informatics marathon",
      eventInfo1d: "Algorithmic problems, 3 hours.",
      eventInfo2: "Scratch & Python club",
      eventInfo2d: "Wednesday afternoons.",
      eventBio1: "Ecology field trip",
      eventBio1d: "Field study — local flora.",
      eventBio2: "Health week",
      eventBio2d: "Interdisciplinary activities.",
      tMath1: "Șoimu Aliona",
      tMath2: "Vrabie Elena",
      tMath3: "Bouroș Elena",
      tMath4: "Bruma Mihaela",
      tMath5: "Baciu Ana",
      tMath6: "Raileanu Daniela",
      tPhys1: "Moraru Vasile",
      tPhys2: "Ceban Ina",
      tPhys3: "Chirtoacă Angela",
      tChem1: "Mîndru Alexei",
      tChem2: "Coșleț Angela",
      tInfo1: "Rencheci Ala",
      tInfo2: "Boldureanu Oltea",
      tBio1: "Golban Tatiana",
      tBio2: "Ceban Elena",
      tAdj: "Cernei Cristina",
    },
  };

  var SCHOOL = {
    name: 'IPLT „Onisifor Ghibu”',
    nameRu: 'ГТЛ им. Онисифора Гибу',
    nameEn: 'Theoretical High School „Onisifor Ghibu” (IPLT)',
    address: "Strada Nicolae H. Costin 63A, MD-2071, Chișinău, Republica Moldova",
    addressRu: "ул. Николае Х. Костин 63А, MD-2071, Кишинэу, Республика Молдова",
    addressEn: "63A Nicolae H. Costin Street, MD-2071, Chișinău, Republic of Moldova",
    phone: "022 518 231",
    email: "",
    website: "https://liceul-ghibu.com/",
    social: [
      {
        id: "official",
        href: "https://liceul-ghibu.com/",
        labelKey: "footerOfficialSite",
        icon: "web",
      },
      {
        id: "facebook",
        href: "https://www.facebook.com/share/1FTcntCpev/?mibextid=wwXIfr",
        labelKey: "footerFacebook",
        icon: "facebook",
      },
    ],
  };

  function getLang() {
    var stored = localStorage.getItem(STORAGE_LANG);
    if (stored && I18N[stored]) return stored;
    var nav = (navigator.language || "ro").slice(0, 2).toLowerCase();
    if (nav === "ru") return "ru";
    if (nav === "en") return "en";
    return "ro";
  }

  function bindControls() {
    var themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", toggleTheme);
      themeBtn.setAttribute(
        "aria-label",
        getTheme() === "dark" ? t("themeLight") : t("themeDark")
      );
      themeBtn.textContent = getTheme() === "dark" ? "☀️" : "🌙";
    }
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
    var lo = document.getElementById("cmst-logout");
    if (lo) {
      lo.addEventListener("click", function () {
        if (window.CMST_AUTH) window.CMST_AUTH.clearToken();
        window.location.href = basePath() + "login.html";
      });
    }
  }

  function refreshChrome() {
    lang = getLang();
    var headerMount = document.getElementById("site-header-mount");
    var footerMount = document.getElementById("site-footer-mount");
    if (headerMount) headerMount.innerHTML = renderHeader();
    if (footerMount) footerMount.innerHTML = renderFooter();
    applyI18n();
    bindControls();
  }

  function setLang(code) {
    if (!I18N[code]) return;
    localStorage.setItem(STORAGE_LANG, code);
    lang = code;
    document.documentElement.lang = code === "ro" ? "ro" : code;
    refreshChrome();
  }

  function getTheme() {
    return localStorage.getItem(STORAGE_THEME) || "light";
  }

  function setTheme(mode) {
    localStorage.setItem(STORAGE_THEME, mode);
    document.documentElement.setAttribute("data-theme", mode);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", mode === "dark" ? t("themeLight") : t("themeDark"));
      btn.textContent = mode === "dark" ? "☀️" : "🌙";
    }
  }

  function toggleTheme() {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  }

  var lang = getLang();

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || (I18N.ro[key] !== undefined ? I18N.ro[key] : key);
  }

  function schoolName() {
    if (lang === "ru") return SCHOOL.nameRu;
    if (lang === "en") return SCHOOL.nameEn;
    return SCHOOL.name;
  }

  function schoolAddress() {
    if (lang === "ru") return SCHOOL.addressRu;
    if (lang === "en") return SCHOOL.addressEn;
    return SCHOOL.address;
  }

  function socialIconSvg(type) {
    if (type === "facebook") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';
    }
    if (type === "instagram") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/></svg>';
    }
    if (type === "web") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>';
    }
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';
  }

  /** Toate paginile HTML sunt în același folder ca index.html. */
  function basePath() {
    return "./";
  }

  function escapeHtml(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function escapeAttr(s) {
    return escapeHtml(s).replace(/"/g, "&quot;");
  }

  function renderAuthBlock() {
    var bp = basePath();
    if (typeof window.CMST_AUTH !== "undefined" && window.CMST_AUTH.isPublic()) {
      return (
        '<div class="site-auth">' +
        '<a class="auth-link" href="' +
        bp +
        'login.html" data-i18n="navLogin"></a>' +
        '<a class="auth-link auth-link--accent" href="' +
        bp +
        'register.html" data-i18n="navRegister"></a>' +
        "</div>"
      );
    }
    var u = window.__CMST_USER__;
    if (u) {
      var roleLabel = u.role === "teacher" ? t("roleTeacher") : t("roleStudent");
      return (
        '<div class="site-auth">' +
        '<span class="site-user" title="' +
        escapeAttr(u.email) +
        '">' +
        escapeHtml(u.full_name) +
        " · " +
        escapeHtml(roleLabel) +
        "</span>" +
        '<button type="button" class="btn-logout" id="cmst-logout" data-i18n="navLogout"></button>' +
        "</div>"
      );
    }
    return '<div class="site-auth"><span class="site-user-muted">…</span></div>';
  }

  function renderHeader() {
    var bp = basePath();
    var homeHref =
      typeof window.CMST_AUTH !== "undefined" && window.CMST_AUTH.isPublic()
        ? bp + "login.html"
        : bp + "index.html";
    return (
      '<header class="site-header" role="banner">' +
      '<div class="site-header__inner">' +
      '<a class="site-brand" href="' +
      homeHref +
      '">' +
      '<img class="site-brand__logo" src="' +
      bp +
      'assets/cropped-logo_ghibu_new.png" width="52" height="52" alt="' +
      escapeAttr(t("logoAltSchool")) +
      '"/>' +
      "<span class=\"site-brand__text\" data-i18n=\"brandSubtitle\">" +
      t("brandSubtitle") +
      "</span></a>" +
      '<div class="site-controls">' +
      renderAuthBlock() +
      '<div class="lang-switch" role="group" aria-label="Language">' +
      '<button type="button" data-lang="ro" class="' +
      (lang === "ro" ? "is-active" : "") +
      '">RO</button>' +
      '<button type="button" data-lang="ru" class="' +
      (lang === "ru" ? "is-active" : "") +
      '">RU</button>' +
      '<button type="button" data-lang="en" class="' +
      (lang === "en" ? "is-active" : "") +
      '">EN</button>' +
      "</div>" +
      '<button type="button" class="theme-toggle" id="theme-toggle" aria-label="">' +
      (getTheme() === "dark" ? "☀️" : "🌙") +
      "</button>" +
      "</div></div></header>"
    );
  }

  function renderFooter() {
    var bp = basePath();
    var socialHtml = SCHOOL.social
      .map(function (s) {
        var lbl = s.labelKey ? t(s.labelKey) : s.label || "";
        return (
          '<a href="' +
          escapeAttr(s.href) +
          '" target="_blank" rel="noopener noreferrer">' +
          socialIconSvg(s.icon) +
          "<span>" +
          escapeHtml(lbl) +
          "</span></a>"
        );
      })
      .join("");

    var emailBlock = "";
    if (SCHOOL.email && String(SCHOOL.email).trim()) {
      emailBlock =
        '<p><strong data-i18n="footerEmail">' +
        t("footerEmail") +
        ':</strong> <a href="mailto:' +
        escapeAttr(SCHOOL.email) +
        '">' +
        escapeHtml(SCHOOL.email) +
        "</a></p>";
    }

    return (
      '<footer class="site-footer" role="contentinfo">' +
      '<div class="site-footer__inner">' +
      '<div class="footer-block">' +
      '<div class="footer-brand-row">' +
      '<img class="footer-emblem" src="' +
      bp +
      'assets/cropped-logo_ghibu_new.png" width="56" height="56" alt="' +
      escapeAttr(t("logoAltSchool")) +
      '" />' +
      "<div>" +
      '<h3 data-i18n="footerSchool">' +
      t("footerSchool") +
      "</h3>" +
      '<p class="footer-school">' +
      escapeHtml(schoolName()) +
      "</p>" +
      "</div></div>" +
      '<p><strong data-i18n="footerAddress">' +
      t("footerAddress") +
      ":</strong> " +
      escapeHtml(schoolAddress()) +
      "</p>" +
      '<p><strong data-i18n="footerPhone">' +
      t("footerPhone") +
      ":</strong> " +
      escapeHtml(SCHOOL.phone) +
      "</p>" +
      emailBlock +
      "</div>" +
      '<div class="footer-block">' +
      '<h3 data-i18n="footerSocial">' +
      t("footerSocial") +
      "</h3>" +
      '<div class="social-row">' +
      socialHtml +
      "</div>" +
      "</div></div></footer>"
    );
  }

  function applyI18n() {
    lang = getLang();
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      var val = t(key);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (key) el.innerHTML = t(key);
    });
  }

  function isPublicPage() {
    return typeof window.CMST_AUTH !== "undefined" && window.CMST_AUTH.isPublic();
  }

  function init() {
    lang = getLang();
    document.documentElement.lang = lang === "ro" ? "ro" : lang;
    setTheme(getTheme());

    if (isPublicPage()) {
      refreshChrome();
      return;
    }

    if (typeof window.CMST_AUTH === "undefined" || !window.CMST_AUTH.getToken()) {
      return;
    }

    if (window.__CMST_USER__) {
      refreshChrome();
    } else {
      document.addEventListener(
        "cmst:user",
        function () {
          refreshChrome();
        },
        { once: true }
      );
    }
  }

  window.cmstT = t;
  window.cmstApplyI18n = applyI18n;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
