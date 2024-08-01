import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_C7wbTqnr.mjs';
import 'kleur/colors';
import { P as PopupButton, $ as $$Navbar, a as $$Contact, b as $$Footer, c as $$Layout } from '../chunks/Navbar_BzV0AWF3.mjs';
import { $ as $$Button } from '../chunks/Button_KH1D7gQe.mjs';
/* empty css                                    */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hero" data-astro-cid-utmxbken> <div class="hero-top" data-astro-cid-utmxbken> <div class="hero-left" data-astro-cid-utmxbken> <h1 data-astro-cid-utmxbken>Empieza este viaje con nosotros, somos tu nuevo aliado digital</h1> <div class="hero-left-button" data-astro-cid-utmxbken> ${renderComponent($$result, "Button", $$Button, { "color": "light", "text": "Cont\xE1ctanos", "link": "#contact", "data-astro-cid-utmxbken": true })} </div> </div> <div class="hero-right" data-astro-cid-utmxbken> <p data-astro-cid-utmxbken>
Descubre una amplia gama de servicios especializados diseñados para satisfacer tus necesidades y superar tus expectativas.
                Explora una variedad de soluciones innovadoras creadas para cumplir con tus requisitos y llevar tu negocio al siguiente nivel.
</p> <div class="hero-right-button" data-astro-cid-utmxbken> ${renderComponent($$result, "PopupButton", PopupButton, { "data-astro-cid-utmxbken": true })} </div> </div> </div> <div class="hero-bottom" data-astro-cid-utmxbken></div> </div> `;
}, "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/projects/hero/Hero.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-35hskg2t> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-35hskg2t": true })} ${renderComponent($$result, "Hero", $$Hero, { "data-astro-cid-35hskg2t": true })} </header> `;
}, "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/projects/hero/Header.astro", void 0);

const $$Info = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="about" id="about" data-astro-cid-mbl6adjy> <div class="about-left" data-astro-cid-mbl6adjy> <div class="about-left-top" data-astro-cid-mbl6adjy> <h2 data-astro-cid-mbl6adjy>Tenemos un equipo dispuesto a ayudarte</h2> <p data-astro-cid-mbl6adjy>Con una amplia gama de servicios especializados diseñados para satisfacer tus necesidades y superar tus expectativas.</p> ${renderComponent($$result, "Button", $$Button, { "color": "dark", "text": "Reserva tu Cita!", "link": "#services", "data-astro-cid-mbl6adjy": true })} </div> <div class="about-left-bottom" data-astro-cid-mbl6adjy> <img src="https://i.imgur.com/q3klgPj.jpeg" alt="Ventajas1" data-astro-cid-mbl6adjy> </div> </div> <div class="about-right" data-astro-cid-mbl6adjy> <div class="about-right-top" data-astro-cid-mbl6adjy> <img src="https://i.imgur.com/phmvSOL.jpeg" alt="Ventajas2" data-astro-cid-mbl6adjy> </div> <div class="about-right-bottom" data-astro-cid-mbl6adjy> <div class="about-right-bottom-title" data-astro-cid-mbl6adjy> <h3 data-astro-cid-mbl6adjy>Soluciones Personalizadas</h3> <p data-astro-cid-mbl6adjy>En NovaGL, cada proyecto se adapta a tus necesidades y objetivos específicos, asegurando una estrategia única y efectiva.</p> </div> <div class="about-right-bottom-title" data-astro-cid-mbl6adjy> <h3 data-astro-cid-mbl6adjy>Experiencia Garantizada</h3> <p data-astro-cid-mbl6adjy>Nuestro equipo está compuesto por expertos en crecimiento digital, garantizando resultados excepcionales.</p> </div> <div class="about-right-bottom-title" data-astro-cid-mbl6adjy> <h3 data-astro-cid-mbl6adjy>Soporte Continuo</h3> <p data-astro-cid-mbl6adjy>Te ofrecemos un soporte dedicado y constante, asegurando que cada proyecto funcione de manera óptima.</p> </div> </div> </div> </section> `;
}, "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/projects/info/Info.astro", void 0);

const ProjectItem = ({ project }) => {
  return /* @__PURE__ */ jsxs("div", { className: "project-item", children: [
    /* @__PURE__ */ jsxs("div", { className: "project-item-left", children: [
      /* @__PURE__ */ jsx("h2", { children: project.name }),
      /* @__PURE__ */ jsx("p", { children: project.description }),
      /* @__PURE__ */ jsxs("div", { className: "project-item-left-info", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("span", { children: "Cliente:" }),
          " ",
          project.client
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("span", { children: "Precio:" }),
          " ",
          project.price
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("span", { children: "Tiempo:" }),
          " ",
          project.time
        ] })
      ] }),
      /* @__PURE__ */ jsx("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", children: "Ver proyecto" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "project-item-right", children: /* @__PURE__ */ jsx("img", { src: project.image, alt: "Imagen del proyecto" }) })
  ] });
};

const $$ProjectsSection = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      name: "Proyecto #1: Conectividad Global",
      description: "Desarrollamos una p\xE1gina web para Conectividad Global, una agencia de medios, que incluye un dise\xF1o moderno y atractivo, un cat\xE1logo detallado de servicios, y casos de \xE9xito. La plataforma tambi\xE9n cuenta con una secci\xF3n de miniapps para facilitar la gesti\xF3n y automatizaci\xF3n de pedidos y entregas.",
      client: "Conectividad Global",
      price: "$600 USD",
      time: "4 semanas",
      image: "https://i.imgur.com/s0uPWro.png",
      link: "https://i.imgur.com/s0uPWro.png"
    },
    {
      name: "Proyecto #2: Macondo Magic Softwares",
      description: "Creamos una landing page para Macondo Softwares, destacando su oferta de software para restaurantes. La p\xE1gina incluye secciones de informaci\xF3n, servicios, y miniapps, adem\xE1s de un apartado para la descarga de la app m\xF3vil, facilitando su gesti\xF3n.",
      client: "Macondo",
      price: "$450 USD",
      time: "2 semanas",
      image: "https://i.imgur.com/rGgZt0o.png",
      link: "https://i.imgur.com/rGgZt0o.png"
    },
    {
      name: "Proyecto #3: Hotel Luna Nueva",
      description: "Desarrollamos una p\xE1gina web para Luna Nueva, un hotel en Riohacha, Colombia. La p\xE1gina incluye secciones de informaci\xF3n, servicios, detalles sobre las habitaciones, planes de estad\xEDa, y una funcionalidad de reservas. Adem\xE1s, integramos un sistema de conexi\xF3n de calendarios entre Booking.com y LobbyPMS.",
      client: "Pablo Lozada",
      price: "$450 USD",
      time: "2 semanas",
      image: "https://i.imgur.com/CTVt0KL.png",
      link: "https://i.imgur.com/CTVt0KL.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="projects" id="projects" data-astro-cid-f3gvhjcm> <div class="projects-top" data-astro-cid-f3gvhjcm> <h3 data-astro-cid-f3gvhjcm>Conoce los servicios que podemos ofrecerte</h3> <h2 data-astro-cid-f3gvhjcm>Convierte tu visión en realidad</h2> </div> <div class="projects-bottom" data-astro-cid-f3gvhjcm> ${projects.map((project) => renderTemplate`${renderComponent($$result, "ProjectItem", ProjectItem, { "project": project, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/react-components/ProjectItem", "client:component-export": "default", "data-astro-cid-f3gvhjcm": true })}`)} </div> </section> `;
}, "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/projects/projects/ProjectsSection.astro", void 0);

const FAQList = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const handleItemClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(index);
    } else {
      setExpandedIndex(index);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "faq-list", children: items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: `faq-list-item ${index !== items.length - 1 ? "border-bottom" : ""}`, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "faq-list-item-header",
        onClick: () => handleItemClick(index),
        children: [
          /* @__PURE__ */ jsx("h4", { children: item.title }),
          /* @__PURE__ */ jsx("span", { className: expandedIndex === index ? "icon-expanded" : "icon-collapsed", children: expandedIndex === index ? /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", children: [
            /* @__PURE__ */ jsx("path", { d: "M8 16H24", stroke: "#142133", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ jsx("path", { d: "M16 24V8", stroke: "#142133", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
          ] }) : /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M8 16H24", stroke: "#142133", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
        ]
      }
    ),
    expandedIndex === index && /* @__PURE__ */ jsx("div", { className: "faq-list-item-content", children: item.content })
  ] }, index)) });
};

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const accordionItems = [
    {
      title: "\xBFC\xF3mo puedo saber si Nova GL es adecuado para m\xED?",
      content: "Nova GL cuenta con un equipo de expertos en marketing digital que pueden ayudarte a alcanzar tus objetivos comerciales. "
    },
    {
      title: "\xBFQu\xE9 tipo de resultados puedo esperar de trabajar con Nova GL?",
      content: "Nuestros resultados muestran que nuestros clientes han logrado un aumento significativo en la visibilidad de su marca."
    },
    {
      title: "\xBFQu\xE9 experiencia tiene Nova GL?",
      content: "Nuestro  conocimiento y compromiso garantizan un equipo perfecto para abordar los desaf\xEDos de la difusi\xF3n en la era digital."
    },
    {
      title: "\xBFC\xF3mo puedo comenzar a trabajar con Nova GL?",
      content: "Puedes contactarnos por tel\xE9fono, correo electr\xF3nico o a trav\xE9s de nuestro sitio web para programar una cita."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="faq" id="faq" data-astro-cid-ukpvmiob> <div class="faq-left" data-astro-cid-ukpvmiob> <h1 data-astro-cid-ukpvmiob>Siempre estamos aquí para ayudarte</h1> <p data-astro-cid-ukpvmiob>Compartimos contigo estrategias y consejos para que puedas sacar el máximo provecho de nuestros servicios.</p> <div class="faq-tips" data-astro-cid-ukpvmiob> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" data-astro-cid-ukpvmiob> <circle cx="15" cy="15" r="15" fill="white" data-astro-cid-ukpvmiob></circle> <path d="M13.1117 19.6923C12.87 19.6923 12.6287 19.6016 12.4442 19.4196L8 15.039L9.33504 13.7226L13.1117 17.4452L20.665 10L22 11.3164L13.7792 19.4196C13.5946 19.6016 13.3534 19.6923 13.1117 19.6923Z" fill="#FF4200" data-astro-cid-ukpvmiob></path> </svg> <div class="faq-tips-item" data-astro-cid-ukpvmiob> <h4 data-astro-cid-ukpvmiob>Estrategias personalizadas</h4> <p data-astro-cid-ukpvmiob>Creamos estrategias personalizadas para cada cliente, basadas en sus necesidades y objetivos.</p> </div> </div> <div class="faq-tips" data-astro-cid-ukpvmiob> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" data-astro-cid-ukpvmiob> <circle cx="15" cy="15" r="15" fill="white" data-astro-cid-ukpvmiob></circle> <path d="M13.1117 19.6923C12.87 19.6923 12.6287 19.6016 12.4442 19.4196L8 15.039L9.33504 13.7226L13.1117 17.4452L20.665 10L22 11.3164L13.7792 19.4196C13.5946 19.6016 13.3534 19.6923 13.1117 19.6923Z" fill="#FF4200" data-astro-cid-ukpvmiob></path> </svg> <div class="faq-tips-item" data-astro-cid-ukpvmiob> <h4 data-astro-cid-ukpvmiob>Soporte 24 horas</h4> <p data-astro-cid-ukpvmiob>Estamos disponibles las 24 horas del día para responder a tus preguntas y ayudarte con cualquier problema.</p> </div> </div> </div> <div class="faq-right" data-astro-cid-ukpvmiob> ${renderComponent($$result, "FAQList", FAQList, { "client:visible": true, "items": accordionItems, "client:component-hydration": "visible", "client:component-path": "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/react-components/FAQList", "client:component-export": "default", "data-astro-cid-ukpvmiob": true })} </div> </section> `;
}, "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/projects/faq/FAQ.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Info", $$Info, {})} ${renderComponent($$result2, "ProjectsSection", $$ProjectsSection, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})}  ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/pages/projects.astro", void 0);

const $$file = "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
