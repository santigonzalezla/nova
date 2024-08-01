import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

console.log({"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true}.RESEND_API_KEY);
const resend = new Resend("re_6G2r7XQn_NgXT6mTnciCgo2yDuo9PbwuX");
const POST = async ({ request }) => {
  const body = await request.json();
  const { to, from, subject, html, text } = body;
  console.log({ to, from, subject, html, text });
  const send = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text
  });
  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error
      }),
      {
        status: 500,
        statusText: "Internal Server Error"
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
