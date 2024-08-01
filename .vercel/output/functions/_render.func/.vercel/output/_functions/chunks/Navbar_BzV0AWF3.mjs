import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro, f as renderHead, e as renderSlot } from './astro/server_C7wbTqnr.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState } from 'react';
/* empty css                         */
import 'clsx';
import Modal from 'react-modal';

const ContactForm = () => {
  const form = useRef(null);
  const [showBanner, setShowBanner] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    project_description: "",
    contact_preference: selectedOption
  });
  const handleChange = (e) => {
    setFormData((prevFormData) => {
      const { name, value } = e.target;
      return {
        ...prevFormData,
        [name]: value
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "delivered@resend.dev",
          to: "delivered@resend.dev",
          subject: "Hello World",
          html: "<strong>It works!</strong>",
          text: "It works!"
        })
      });
      const data = await res.json();
      console.log(data);
    } catch (e2) {
      console.error(e2);
    }
    setFormData({
      full_name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      project_description: "",
      contact_preference: selectedOption
    });
    setSelectedOption("");
    setShowBanner(true);
    setTimeout(() => {
      setShowBanner(false);
    }, 1e4);
  };
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return /* @__PURE__ */ jsxs("form", { className: "contact-right-form", ref: form, onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxs("div", { className: "contact-right-form-info", children: [
      /* @__PURE__ */ jsxs("div", { className: "form-input", children: [
        /* @__PURE__ */ jsx("label", { children: "Nombre Completo:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Nombre",
            name: "full_name",
            value: formData.full_name,
            onChange: handleChange,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-input", children: [
        /* @__PURE__ */ jsx("label", { children: "Email:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            placeholder: "Correo electrónico",
            name: "email",
            value: formData.email,
            onChange: handleChange,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-input", children: [
        /* @__PURE__ */ jsx("label", { children: "Teléfono:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "number-form",
            type: "number",
            placeholder: "Número de teléfono",
            name: "phone",
            value: formData.phone,
            onChange: handleChange,
            required: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "contact-right-form-details", children: [
      /* @__PURE__ */ jsxs("div", { className: "form-input", children: [
        /* @__PURE__ */ jsx("label", { children: "Servicio en el que estás interesado:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "ej. Landing Page, E-commerce, etc.",
            name: "service",
            value: formData.service,
            onChange: handleChange,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-input", children: [
        /* @__PURE__ */ jsx("label", { children: "Presupuesto aproximado:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "number-form",
            type: "number",
            placeholder: "ej. 5.000.000 - 7.000.000",
            name: "budget",
            value: formData.budget,
            onChange: handleChange,
            required: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-input", children: [
      /* @__PURE__ */ jsx("label", { children: "Cuentanos de ti y lo que quieres hacer con tu proyecto:" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          placeholder: "Danos más información sobre tu idea para estar preparados y darte las mejores opciones.",
          name: "project_description",
          value: formData.project_description,
          onChange: handleChange,
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-input", children: [
      /* @__PURE__ */ jsx("label", { children: "¿Cómo quieres que te contactemos?" }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          value: selectedOption,
          onChange: handleSelectChange,
          name: "contact_preference",
          required: true,
          children: [
            /* @__PURE__ */ jsx("option", { children: "Escoge una opción de contacto" }),
            /* @__PURE__ */ jsx("option", { value: "zoom", children: "Quiero agendar una llamada por zoom" }),
            /* @__PURE__ */ jsx("option", { value: "telegram", children: "Quiero ser contactado via Telegram" }),
            /* @__PURE__ */ jsx("option", { value: "whatsapp", children: "Quiero ser contactado via WhatsApp" }),
            /* @__PURE__ */ jsx("option", { value: "email", children: "Quiero ser contactado via Email" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { children: "Enviar solicitud de contacto" })
  ] });
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const social = [
    {
      icon: "fab fa-whatsapp",
      link: "novagl.dev@gmail.com"
    },
    {
      icon: "fab fa-telegram",
      link: "+57 (317) 4319914"
    },
    {
      icon: "fab fa-discord",
      link: "@novagl.dev"
    },
    {
      icon: "fab fa-facebook-f",
      link: "novagl-dev"
    },
    {
      icon: "fab fa-twitter",
      link: "dribble.com/novagl"
    },
    {
      icon: "fab fa-instagram",
      link: "instagram.com/novagltech/"
    },
    {
      icon: "fab fa-linkedin-in",
      link: "linkedin.com/company/novagltech"
    },
    {
      icon: "fab fa-youtube",
      link: "youtube.com/channel"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="contact" data-astro-cid-gqtaazte> <div class="contact-left" data-astro-cid-gqtaazte> <div class="contact-left-info" data-astro-cid-gqtaazte> <div class="contact-left-info-social" data-astro-cid-gqtaazte> ${social.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} data-astro-cid-gqtaazte> <div class="contact-left-info-social-icon" data-astro-cid-gqtaazte></div> <span data-astro-cid-gqtaazte>${item.link}</span> </a>`)} </div> </div> </div> <div class="contact-right" data-astro-cid-gqtaazte> <h2 data-astro-cid-gqtaazte>¿Listo para dar vida a tu proyecto? ¡Conéctate hoy mismo para discutir tu proyecto y posibles colaboraciones!</h2> ${renderComponent($$result, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/react-components/ContactForm", "client:component-export": "default", "data-astro-cid-gqtaazte": true })} </div> </section> `;
}, "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/shared/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-cpgxvzen> <div class="footer-first" data-astro-cid-cpgxvzen> <div class="footer-logo" data-astro-cid-cpgxvzen> <h1 data-astro-cid-cpgxvzen>NOVAGL</h1> </div> <div class="first-social" data-astro-cid-cpgxvzen> <div class="first-social-icon" data-astro-cid-cpgxvzen></div> <div class="first-social-icon" data-astro-cid-cpgxvzen></div> <div class="first-social-icon" data-astro-cid-cpgxvzen></div> <div class="first-social-icon" data-astro-cid-cpgxvzen></div> </div> </div> <div class="footer-second" data-astro-cid-cpgxvzen> <h3 data-astro-cid-cpgxvzen>Company</h3> <ul data-astro-cid-cpgxvzen> <li data-astro-cid-cpgxvzen>Nosotros</li> <li data-astro-cid-cpgxvzen>Servicios</li> <li data-astro-cid-cpgxvzen>Testimonios</li> <li data-astro-cid-cpgxvzen>Portafolio</li> <li data-astro-cid-cpgxvzen>Contacto</li> </ul> </div> <div class="footer-third" data-astro-cid-cpgxvzen> <h3 data-astro-cid-cpgxvzen>Legal</h3> <ul data-astro-cid-cpgxvzen> <li data-astro-cid-cpgxvzen>Política de privacidad</li> <li data-astro-cid-cpgxvzen>Términos y condiciones</li> </ul> </div> <div class="footer-fourth" data-astro-cid-cpgxvzen> <h3 data-astro-cid-cpgxvzen>Redes sociales</h3> <ul data-astro-cid-cpgxvzen> <li data-astro-cid-cpgxvzen>Facebook</li> <li data-astro-cid-cpgxvzen>Instagram</li> <li data-astro-cid-cpgxvzen>Twitter</li> <li data-astro-cid-cpgxvzen>LinkedIn</li> <li data-astro-cid-cpgxvzen>TikTok</li> </ul> </div> <div class="footer-fifth" data-astro-cid-cpgxvzen> <h3 data-astro-cid-cpgxvzen>Contáctanos</h3> <ul data-astro-cid-cpgxvzen> <li data-astro-cid-cpgxvzen>
+51 999 999 999
</li> </ul> </div> </footer> `;
}, "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/shared/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Desarrollo de soluciones digitales innovadoras que ayudan a nuestros clientes a alcanzar
			sus metas de negocio. "><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/layouts/Layout.astro", void 0);

const PopupButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const calendlyURL = "https://calendly.com/novagl-dev/30min";
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("button", { className: "popup-button titilante", onClick: openModal, children: "Reserva tu Cita!" }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        isOpen: modalIsOpen,
        onRequestClose: closeModal,
        contentLabel: "Calendly Popup",
        ariaHideApp: false,
        className: "popup-modal",
        children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("button", { className: "x-button", onClick: closeModal, children: "X" }),
          /* @__PURE__ */ jsx(
            "iframe",
            {
              title: "Calendly Popup",
              src: calendlyURL,
              width: "100%",
              height: "700",
              frameBorder: "0"
            }
          )
        ] })
      }
    )
  ] });
};

const $$Astro = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-xu5ykefq> <div class="logo-container" data-astro-cid-xu5ykefq> <a href="/" data-astro-cid-xu5ykefq> <h1 data-astro-cid-xu5ykefq>NOVAGL</h1> </a> </div> <input type="checkbox" id="check" data-astro-cid-xu5ykefq> <label for="check" class="icons" data-astro-cid-xu5ykefq> <svg class="menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xu5ykefq> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xu5ykefq></path> <path d="M4 6l16 0" data-astro-cid-xu5ykefq></path> <path d="M4 12l16 0" data-astro-cid-xu5ykefq></path> <path d="M4 18l16 0" data-astro-cid-xu5ykefq></path> </svg> <svg class="close" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xu5ykefq> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xu5ykefq></path> <path d="M18 6l-12 12" data-astro-cid-xu5ykefq></path> <path d="M6 6l12 12" data-astro-cid-xu5ykefq></path> </svg> </label> <div class="option-container" data-astro-cid-xu5ykefq> <ul data-astro-cid-xu5ykefq> <li data-astro-cid-xu5ykefq><a href="/" data-astro-cid-xu5ykefq>Inicio</a></li> <li data-astro-cid-xu5ykefq><a href="/services" data-astro-cid-xu5ykefq>Servicios</a></li> <li data-astro-cid-xu5ykefq><a href="/projects" data-astro-cid-xu5ykefq>Portfolio</a></li> </ul> </div> <div class="button-container" data-astro-cid-xu5ykefq> ${renderComponent($$result, "PopupButton", PopupButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/react-components/PopupButton", "client:component-export": "default", "data-astro-cid-xu5ykefq": true })} </div> <!--<button><a href="#contact">Contáctanos</a></button>--> </nav> `;
}, "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/shared/Navbar.astro", void 0);

export { $$Navbar as $, PopupButton as P, $$Contact as a, $$Footer as b, $$Layout as c };
