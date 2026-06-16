import './globals.css';

export const metadata = {
  title: 'Flowify — The Ultimate Business Engine for Indian Businesses',
  description: 'Flowify automates operations for Indian businesses. Custom interfaces, WhatsApp API relays, Zoho CRM pipelines, and Tally ERP integrations — we eliminate manual friction for SMBs across India.',
  keywords: 'workflow automation India, Tally integration, WhatsApp Business automation, Zoho CRM, Razorpay automation, Indian SMB software, business automation, Justdial lead capture, custom applications India',
  authors: [{ name: 'Flowify Agency' }],
  openGraph: {
    type: 'website',
    title: 'Flowify — The Ultimate Business Engine for Indian Businesses',
    description: 'Eliminate operational friction. Flowify builds custom apps, Tally integrations, WhatsApp automations, and Zoho pipelines for Indian businesses.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
