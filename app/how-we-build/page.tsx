export default function HowWeBuildPage() {
  return (
    <main>
      <section className="sec marked" id="techniques" style={{ background: 'var(--lilac2)' }}>
        <div className="wrap">
          <p className="q">Which pattern, and when?</p>
          <h2 className="big">The solution patterns we use most often.</h2>
          <p className="lede" style={{ marginTop: '16px' }}>Not seven kinds of AI. Some are techniques, some are applications, some orchestrate the others. We choose from the problem backwards.</p>
          <div className="grid3x">
            <div>
              <p className="k">Search and retrieval</p>
              <p className="one">Finding the right thing in your own content, with the source shown.</p>
              <ul className="bul">
                <li>Internal knowledge search</li>
                <li>Product and content discovery</li>
                <li>The foundation under any assistant</li>
              </ul>
            </div>
            <div>
              <p className="k">Reading and extracting</p>
              <p className="one">Documents and messages turned into structured data.</p>
              <ul className="bul">
                <li>Classify, extract fields, route</li>
                <li>Invoices, contracts, forms, emails</li>
                <li>Most businesses hold more in documents than databases</li>
              </ul>
            </div>
            <div>
              <p className="k">Predicting and forecasting</p>
              <p className="one">What is likely to happen next.</p>
              <ul className="bul">
                <li>Demand, churn, propensity, no-shows</li>
                <li>Usually classical machine learning, not a language model</li>
                <li>The best-evidenced form of AI in business</li>
              </ul>
            </div>
            <div>
              <p className="k">Analysis and decision support</p>
              <p className="one">Business data turned into evidence for a decision.</p>
              <ul className="bul">
                <li>What changed, why, and what it is worth</li>
                <li>Patterns, drivers, segments, anomalies</li>
                <li>Often statistics rather than a model</li>
              </ul>
            </div>
            <div>
              <p className="k">Drafting and generating</p>
              <p className="one">First drafts in your voice, grounded in your material.</p>
              <ul className="bul">
                <li>Checked against brand and fact</li>
                <li>A person approves anything that leaves the building</li>
                <li>Never unreviewed output to customers</li>
              </ul>
            </div>
            <div>
              <p className="k">Assistants</p>
              <p className="one">Conversational access to what you already know.</p>
              <ul className="bul">
                <li>Grounded in your policies and records</li>
                <li>Cites its sources</li>
                <li>Hands over to a person when it should</li>
              </ul>
            </div>
          </div>
          <div className="pair">
            <div>
              <p className="k">Automation and workflows</p>
              <h3>The repetitive thing, done reliably.</h3>
              <ul className="bul">
                <li><b>Fits when</b> the steps are known and the same every time</li>
                <li><b>Costs</b> the least of anything here; often no language model at all</li>
                <li><b>We insist on</b> calling it a workflow. A model inside a fixed sequence is not an agent</li>
              </ul>
            </div>
            <div>
              <p className="k">Agents, honestly</p>
              <h3>Valuable where the work needs investigation.</h3>
              <ul className="bul">
                <li><b>Fits when</b> the work is investigation, tool use and adapting, usually behind the scenes</li>
                <li><b>Costs</b> more: more engineering, more controls, more ways to fail</li>
                <li><b>We insist on</b> bounded tools, evaluation, and a person signing off where a miss would matter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
