import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BurnoutRadar — Predict Employee Burnout from Slack Patterns',
  description: 'Analyze Slack message frequency, response times, and sentiment to identify burnout risk before it happens. Built for HR managers and team leads.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8bddbc01-cc0a-4299-bf3a-00a724e2c6d5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
