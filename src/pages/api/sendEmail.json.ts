import type {APIRoute} from "astro";
import {Resend} from "resend";

console.log(import.meta.env.RESEND_API_KEY);

const resend = new Resend('re_6G2r7XQn_NgXT6mTnciCgo2yDuo9PbwuX');

export const POST: APIRoute = async ({ request}) =>
{
    const body = await request.json();
    const { to, from, subject, html, text } = body;
    console.log({ to, from, subject, html, text });

    const send = await resend.emails.send({
        from: from,
        to: to,
        subject: subject,
        html: html,
        text: text,
    })

    if (send.data)
    {
        return new Response(
            JSON.stringify({
                message: send.data,
            }),
            {
                status: 200,
                statusText: 'OK',
            }
        )
    }
    else
    {
        return new Response(
            JSON.stringify({
                message: send.error,
            }),
            {
                status: 500,
                statusText: 'Internal Server Error',
            }
        )
    }
}