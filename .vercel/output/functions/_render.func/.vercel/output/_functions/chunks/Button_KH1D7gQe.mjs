import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro } from './astro/server_C7wbTqnr.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, link, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(color, "class")} data-astro-cid-ar4osctt> <a${addAttribute(link, "href")} data-astro-cid-ar4osctt> ${text} ${renderSlot($$result, $$slots["default"])} </a> </button> `;
}, "C:/Users/santi/ESTUDIOS/JAVASCRIPT/PROJECTS/NOVAGL/NovaGL/web/src/components/shared/Button.astro", void 0);

export { $$Button as $ };
