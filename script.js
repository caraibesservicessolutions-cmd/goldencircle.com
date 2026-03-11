/* ═══════════════════════════════════════════════
   GOLDEN CIRCLE — script.js
   · Traduction automatique (FR / EN / ES / PT)
   · Modal paiement VIP (Revolut)
   · Toast notifications
═══════════════════════════════════════════════ */

/* ── TRADUCTIONS ── */
var TRANSLATIONS = {

  fr: {
    tagline_sub:      "L'accès aux privilèges",
    tagline_line1:    "Une communauté d'élite.",
    tagline_line2_a:  "Des ",
    tagline_em1:      "avantages exclusifs",
    tagline_line2_b:  " réservés",
    tagline_line3_a:  "aux membres ",
    tagline_em2:      "GC List",
    free_badge:       "Accès gratuit",
    free_price:       "Gratuit",
    free_desc1:       "Rejoins la communauté Golden Circle.",
    free_desc2:       "Reçois les ",
    free_desc2b:      "avantages et bons plans",
    free_desc3:       "réservés aux membres.",
    free_cta:         "Rejoindre — Gratuit",
    vip_desc1:        "Accède aux ",
    vip_desc1b:       "privilèges exclusifs",
    vip_desc2:        "réductions événements, offres partenaires",
    vip_desc3:        "& accès prioritaire.",
    vip_cta:          "Devenir VIP — 4,99€/mois",
    follow_title:     "Suivre Golden Circle",
    footer_phrase:    "L'accès aux privilèges commence ici",
    legal_title:      "Mentions légales",
    modal_eyebrow:    "⭐ VIP GC LIST",
    modal_title:      "Offre Annuelle",
    modal_subtitle:   "Accès immédiat à tous les privilèges exclusifs Golden Circle.",
    plan_monthly_label:"Mensuel",
    plan_per_month:   "/mois",
    plan_monthly_note:"Sans engagement",
    plan_best:        "🎁 2 MOIS OFFERTS",
    plan_annual_label:"Annuel",
    plan_per_year:    "/an",
    plan_annual_old:  "au lieu de 59,88€",
    plan_economy:     "Économise 9,98€ · soit 4,16€/mois",
    modal_revolut_info:"Paiement sécurisé via <strong>Revolut</strong>.<br>Après paiement, complète ton inscription.",
    modal_pay_btn:    "Payer 49,90€ & Rejoindre",
    modal_secure:     "🔒 Paiement sécurisé · Sans abonnement automatique",
    confirm_title:    "Paiement envoyé ?",
    confirm_subtitle: "Une fois ton paiement Revolut effectué,<br>complète ton inscription ci-dessous.",
    confirm_form_btn: "Compléter mon inscription →",
    confirm_back:     "← Revenir au choix",
    toast_free:       "Ouverture du formulaire GC List…",
    toast_yt:         "Lien vers notre compte YouTube…",
    toast_ig:         "Lien vers notre compte Instagram…",
    toast_sc:         "Lien vers notre compte Snapchat…"
  },

  en: {
    tagline_sub:      "Access to privileges",
    tagline_line1:    "An elite community.",
    tagline_line2_a:  "",
    tagline_em1:      "Exclusive benefits",
    tagline_line2_b:  " reserved",
    tagline_line3_a:  "for ",
    tagline_em2:      "GC List",
    free_badge:       "Free access",
    free_price:       "Free",
    free_desc1:       "Join the Golden Circle community.",
    free_desc2:       "Receive ",
    free_desc2b:      "exclusive deals & perks",
    free_desc3:       "reserved for members.",
    free_cta:         "Join — Free",
    vip_desc1:        "Access ",
    vip_desc1b:       "exclusive privileges",
    vip_desc2:        "event discounts, partner offers",
    vip_desc3:        "& priority access.",
    vip_cta:          "Go VIP — €4.99/month",
    follow_title:     "Follow Golden Circle",
    footer_phrase:    "Your access to privileges starts here",
    legal_title:      "Legal Notice",
    modal_eyebrow:    "⭐ VIP GC LIST",
    modal_title:      "Annual Offer",
    modal_subtitle:   "Instant access to all Golden Circle exclusive privileges.",
    plan_monthly_label:"Monthly",
    plan_per_month:   "/month",
    plan_monthly_note:"No commitment",
    plan_best:        "🎁 2 MONTHS FREE",
    plan_annual_label:"Annual",
    plan_per_year:    "/year",
    plan_annual_old:  "instead of €59.88",
    plan_economy:     "Save €9.98 · just €4.16/month",
    modal_revolut_info:"Secure payment via <strong>Revolut</strong>.<br>After payment, complete your registration.",
    modal_pay_btn:    "Pay €49.90 & Join",
    modal_secure:     "🔒 Secure payment · No automatic subscription",
    confirm_title:    "Payment sent?",
    confirm_subtitle: "Once your Revolut payment is done,<br>complete your registration below.",
    confirm_form_btn: "Complete my registration →",
    confirm_back:     "← Back to plans",
    toast_free:       "Opening GC List form…",
    toast_yt:         "Opening our YouTube channel…",
    toast_ig:         "Opening our Instagram…",
    toast_sc:         "Opening our Snapchat…"
  },

  es: {
    tagline_sub:      "El acceso a los privilegios",
    tagline_line1:    "Una comunidad de élite.",
    tagline_line2_a:  "",
    tagline_em1:      "Ventajas exclusivas",
    tagline_line2_b:  " reservadas",
    tagline_line3_a:  "para los miembros ",
    tagline_em2:      "GC List",
    free_badge:       "Acceso gratuito",
    free_price:       "Gratis",
    free_desc1:       "Únete a la comunidad Golden Circle.",
    free_desc2:       "Recibe ",
    free_desc2b:      "ventajas y ofertas exclusivas",
    free_desc3:       "reservadas para miembros.",
    free_cta:         "Unirse — Gratis",
    vip_desc1:        "Accede a los ",
    vip_desc1b:       "privilegios exclusivos",
    vip_desc2:        "descuentos en eventos, ofertas de socios",
    vip_desc3:        "y acceso prioritario.",
    vip_cta:          "Ser VIP — 4,99€/mes",
    follow_title:     "Seguir Golden Circle",
    footer_phrase:    "El acceso a los privilegios empieza aquí",
    legal_title:      "Aviso legal",
    modal_eyebrow:    "⭐ VIP GC LIST",
    modal_title:      "Oferta Anual",
    modal_subtitle:   "Acceso inmediato a todos los privilegios exclusivos de Golden Circle.",
    plan_monthly_label:"Mensual",
    plan_per_month:   "/mes",
    plan_monthly_note:"Sin compromiso",
    plan_best:        "🎁 2 MESES GRATIS",
    plan_annual_label:"Anual",
    plan_per_year:    "/año",
    plan_annual_old:  "en lugar de 59,88€",
    plan_economy:     "Ahorra 9,98€ · solo 4,16€/mes",
    modal_revolut_info:"Pago seguro por <strong>Revolut</strong>.<br>Tras el pago, completa tu registro.",
    modal_pay_btn:    "Pagar 49,90€ y Unirse",
    modal_secure:     "🔒 Pago seguro · Sin suscripción automática",
    confirm_title:    "¿Pago enviado?",
    confirm_subtitle: "Una vez realizado el pago,<br>completa tu registro.",
    confirm_form_btn: "Completar mi registro →",
    confirm_back:     "← Volver a los planes",
    toast_free:       "Abriendo formulario GC List…",
    toast_yt:         "Abriendo nuestro canal de YouTube…",
    toast_ig:         "Abriendo nuestro Instagram…",
    toast_sc:         "Abriendo nuestro Snapchat…"
  },

  pt: {
    tagline_sub:      "O acesso aos privilégios",
    tagline_line1:    "Uma comunidade de elite.",
    tagline_line2_a:  "",
    tagline_em1:      "Vantagens exclusivas",
    tagline_line2_b:  " reservadas",
    tagline_line3_a:  "para membros ",
    tagline_em2:      "GC List",
    free_badge:       "Acesso gratuito",
    free_price:       "Gratuito",
    free_desc1:       "Junte-se à comunidade Golden Circle.",
    free_desc2:       "Receba ",
    free_desc2b:      "vantagens e ofertas exclusivas",
    free_desc3:       "reservadas para membros.",
    free_cta:         "Entrar — Gratuito",
    vip_desc1:        "Acesse os ",
    vip_desc1b:       "privilégios exclusivos",
    vip_desc2:        "descontos em eventos, ofertas de parceiros",
    vip_desc3:        "e acesso prioritário.",
    vip_cta:          "Tornar-se VIP — 4,99€/mês",
    follow_title:     "Seguir Golden Circle",
    footer_phrase:    "O acesso aos privilégios começa aqui",
    legal_title:      "Aviso legal",
    modal_eyebrow:    "⭐ VIP GC LIST",
    modal_title:      "Oferta Anual",
    modal_subtitle:   "Acesso imediato a todos os privilégios exclusivos Golden Circle.",
    plan_monthly_label:"Mensal",
    plan_per_month:   "/mês",
    plan_monthly_note:"Sem compromisso",
    plan_best:        "🎁 2 MESES GRÁTIS",
    plan_annual_label:"Anual",
    plan_per_year:    "/ano",
    plan_annual_old:  "em vez de 59,88€",
    plan_economy:     "Poupe 9,98€ · apenas 4,16€/mês",
    modal_revolut_info:"Pagamento seguro via <strong>Revolut</strong>.<br>Após pagamento, complete o registo.",
    modal_pay_btn:    "Pagar 49,90€ e Entrar",
    modal_secure:     "🔒 Pagamento seguro · Sem subscrição automática",
    confirm_title:    "Pagamento enviado?",
    confirm_subtitle: "Assim que o pagamento for feito,<br>complete o seu registo abaixo.",
    confirm_form_btn: "Completar o meu registo →",
    confirm_back:     "← Voltar aos planos",
    toast_free:       "Abrindo formulário GC List…",
    toast_yt:         "Abrindo nosso canal YouTube…",
    toast_ig:         "Abrindo nosso Instagram…",
    toast_sc:         "Abrindo nosso Snapchat…"
  }
};

/* ── DÉTECTION ET APPLICATION DE LA LANGUE ── */
function detectLang() {
  var nav = navigator.language || navigator.userLanguage || 'fr';
  var code = nav.toLowerCase().slice(0, 2);
  return TRANSLATIONS[code] ? code : 'fr';
}

function applyTranslations(lang) {
  var T = TRANSLATIONS[lang] || TRANSLATIONS['fr'];
  window.GC_T = T;

  document.documentElement.lang = lang;

  var elems = document.querySelectorAll('[data-i18n]');
  elems.forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (T[key] !== undefined) {
      if (el.innerHTML.indexOf('<') !== -1 || T[key].indexOf('<') !== -1) {
        el.innerHTML = T[key];
      } else {
        el.textContent = T[key];
      }
    }
  });
}

/* ── MODAL PAIEMENT VIP ── */
var REVOLUT_URL  = 'https://revolut.me/rhandyi4pf?currency=EUR&amount=4990';
var VIP_FORM_URL = 'https://docs.google.com/forms/d/1uJ9FLqSMgOgmMv3UnGv3ogKP7QuWLrMXqORSaQwnAvY/viewform';

function openVipModal() {
  document.getElementById('step-plan').style.display = '';
  document.getElementById('step-confirm').style.display = 'none';
  document.getElementById('vip-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVipModal(force) {
  if (force === true || force === undefined) {
    document.getElementById('vip-overlay').classList.remove('active');
    document.body.style.overflow = '';
  } else if (force && force.target === document.getElementById('vip-overlay')) {
    document.getElementById('vip-overlay').classList.remove('active');
    document.body.style.overflow = '';
  }
}

function goToPay() {
  window.open(REVOLUT_URL, '_blank');
  document.getElementById('step-plan').style.display = 'none';
  document.getElementById('step-confirm').style.display = '';
}

function goToForm() {
  window.open(VIP_FORM_URL, '_blank');
  closeVipModal(true);
}

function backToPlan() {
  document.getElementById('step-plan').style.display = '';
  document.getElementById('step-confirm').style.display = 'none';
}

/* ── TOAST NOTIFICATION ── */
function gcOpen(url, msg) {
  var t = document.getElementById('gc-toast');
  var s = document.getElementById('gc-toast-msg');
  s.textContent = msg;
  t.classList.add('show');
  setTimeout(function() {
    window.open(url, '_blank');
    setTimeout(function() { t.classList.remove('show'); }, 1200);
  }, 600);
  return false;
}

/* ── INIT ── */
(function() {
  var lang = detectLang();
  applyTranslations(lang);
})();
