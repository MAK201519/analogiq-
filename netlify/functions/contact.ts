import type { Handler } from '@netlify/functions'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' }
  }

  const params = new URLSearchParams(event.body || '')
  const name = params.get('full-name') || 'Not provided'
  const email = params.get('email') || 'Not provided'
  const organisation = params.get('organisation') || 'Not provided'
  const role = params.get('role') || 'Not provided'
  const enquiryType = params.get('enquiry-type') || 'Not provided'
  const message = params.get('message') || 'Not provided'

  const { data, error } = await resend.emails.send({
    from: 'hello@analogiq.io',
    to: 'mario@analogiq.io',
    subject: `New enquiry from ${name} at ${organisation}`,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Organisation:</strong> ${organisation}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Enquiry type:</strong> ${enquiryType}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  })

  console.log('Resend response:', JSON.stringify({ data, error }))

  if (error) {
    console.error('Resend error:', JSON.stringify(error))
  }

  return {
    statusCode: 302,
    headers: { Location: '/contact-success' },
    body: '',
  }
}

export { handler }
