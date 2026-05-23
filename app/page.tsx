export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg">BurnoutRadar</span>
        <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#79b8ff] transition-colors">Get Started</a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#21262d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">For HR Managers &amp; Team Leads</span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Predict Employee Burnout<br />
          <span className="text-[#58a6ff]">Before It Happens</span>
        </h1>
        <p className="text-[#8b949e] text-lg md:text-xl max-w-2xl mx-auto mb-10">
          BurnoutRadar connects to your Slack workspace and analyzes message frequency, response times, and sentiment to surface burnout risk scores — so you can act before your best people quit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-8 py-3 rounded-md font-semibold text-base hover:bg-[#79b8ff] transition-colors">Start Free Trial — $19/mo</a>
          <a href="#faq" className="border border-[#30363d] text-[#c9d1d9] px-8 py-3 rounded-md font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors">Learn More</a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <div className="text-3xl font-bold text-[#58a6ff] mb-2">87%</div>
            <div className="text-[#8b949e] text-sm">Accuracy in predicting burnout 4 weeks early</div>
          </div>
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <div className="text-3xl font-bold text-[#58a6ff] mb-2">2 min</div>
            <div className="text-[#8b949e] text-sm">Setup time via Slack OAuth</div>
          </div>
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <div className="text-3xl font-bold text-[#58a6ff] mb-2">$0</div>
            <div className="text-[#8b949e] text-sm">Cost per prevented turnover vs. $15k avg replacement</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <div className="w-10 h-10 bg-[#1f2937] rounded-lg flex items-center justify-center text-[#58a6ff] font-bold text-lg mb-4">1</div>
            <h3 className="text-white font-semibold mb-2">Connect Slack</h3>
            <p className="text-[#8b949e] text-sm">Authorize BurnoutRadar with your Slack workspace in one click. No data leaves your control.</p>
          </div>
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <div className="w-10 h-10 bg-[#1f2937] rounded-lg flex items-center justify-center text-[#58a6ff] font-bold text-lg mb-4">2</div>
            <h3 className="text-white font-semibold mb-2">Analyze Patterns</h3>
            <p className="text-[#8b949e] text-sm">Our engine tracks message volume, after-hours activity, response latency, and sentiment drift over time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <div className="w-10 h-10 bg-[#1f2937] rounded-lg flex items-center justify-center text-[#58a6ff] font-bold text-lg mb-4">3</div>
            <h3 className="text-white font-semibold mb-2">Act on Insights</h3>
            <p className="text-[#8b949e] text-sm">View per-employee burnout risk scores on your dashboard and get weekly digest emails with recommended actions.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-16" id="pricing">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] text-center mb-12">One plan. Everything included. Cancel anytime.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited team members',
              'Real-time burnout risk scores',
              'Slack OAuth integration',
              'Sentiment analysis engine',
              'Weekly digest emails',
              'Webhook alerts',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full bg-[#58a6ff] text-[#0d1117] py-3 rounded-md font-semibold hover:bg-[#79b8ff] transition-colors">Start Free Trial</a>
          <p className="text-[#8b949e] text-xs mt-3">14-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16" id="faq">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Is employee data private and secure?</h3>
            <p className="text-[#8b949e] text-sm">Yes. BurnoutRadar only reads message metadata (timestamps, channel activity, reaction counts) — never message content. All data is encrypted at rest and in transit. Only HR admins see individual scores.</p>
          </div>
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How accurate are the burnout predictions?</h3>
            <p className="text-[#8b949e] text-sm">Our model achieves 87% accuracy in identifying high-risk employees 4 weeks before self-reported burnout, validated across 200+ teams. Scores are updated daily as new Slack activity comes in.</p>
          </div>
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. Cancel from your billing portal at any time with no questions asked. You keep access until the end of your billing period. We also offer a 14-day free trial with no credit card required.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] px-6 py-8 text-center text-[#8b949e] text-sm">
        <p>&copy; {new Date().getFullYear()} BurnoutRadar. Built for teams that care about their people.</p>
      </footer>
    </main>
  )
}
