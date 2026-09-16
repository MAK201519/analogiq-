import EngagementTabs from "@/app/components/how-we-build/EngagementTabs";

export default function HowWeBuildPage() {
  return (
    <main>
      <section className="phero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>How we build</span>
          </nav>
          <div className="hbox">
            <div className="htext">
              <p className="q">What does it actually take to build this?</p>
              <h1>Engineering.</h1>
              <p className="lede">Every project follows the same idea: the thin line, the simplest path that gets you a working result fast, then grows from there. Here is what that means in practice, from how a project is shaped to the tools we choose and why.</p>
            </div>
            <div className="hmos brand" aria-hidden="true">
              <div className="m-amber tall">
                <svg viewBox="0 0 36 34" aria-hidden="true"><rect x="4" y="12" width="28" height="5" rx="2.5" /><rect x="4" y="21" width="16" height="5" rx="2.5" /></svg>
              </div>
              <div className="m-lilac wide">
                <div className="m-dots"></div>
              </div>
              <div className="m-ink">
                <svg viewBox="0 0 36 34" aria-hidden="true"><rect x="4" y="12" width="28" height="5" rx="2.5" /><rect x="4" y="21" width="16" height="5" rx="2.5" /></svg>
              </div>
              <div className="m-purple">
                <svg viewBox="0 0 36 34" aria-hidden="true"><rect x="4" y="12" width="28" height="5" rx="2.5" /><rect x="4" y="21" width="16" height="5" rx="2.5" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="engagement">
        <div className="wrap">
          <p className="q">What does an engagement actually look like?</p>
          <h2 className="big">Weeks, not phases.</h2>
          <p className="lede" style={{ marginTop: '16px' }}>This is the typical path, not a template we force you into.</p>
          <EngagementTabs />
        </div>
      </section>

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

      <section className="sec" id="evaluation">
        <div className="wrap">
          <p className="q">How do you know it works?</p>
          <h2 className="big">Nothing goes live untested. Nothing widens without evidence.</h2>
          <div className="grid3x">
            <div>
              <p className="k">Before launch</p>
              <ul className="bul">
                <li>A test set drawn from your real cases, held back from development</li>
                <li>Normal cases, edge cases, ambiguous ones, known failures, and cases where the right answer is to hand over</li>
                <li>Thresholds agreed with the people who own the outcome</li>
              </ul>
            </div>
            <div>
              <p className="k">Into production</p>
              <ul className="bul">
                <li>Tested offline, at real volume</li>
                <li>Shadow-run beside the current process for a full cycle</li>
                <li>Live on a defined slice, then widened as the evidence earns it, not as the calendar says</li>
              </ul>
            </div>
            <div>
              <p className="k">In production</p>
              <ul className="bul">
                <li>Every run produces auditable telemetry, matched to how sensitive the system is</li>
                <li>Corrections from your team are reviewed before they change how the system behaves</li>
                <li>The performance report becomes part of your normal review</li>
              </ul>
            </div>
          </div>
          <details className="acc">
            <summary>What does tested mean for each kind of system?</summary>
            <ul className="metrics">
              <li><b>Search</b><span>Retrieval quality: does the right thing come back, near the top, with its source.</span></li>
              <li><b>Extraction</b><span>Precision and recall, by field, so you can see what it misses as well as what it gets wrong.</span></li>
              <li><b>Prediction</b><span>Forecast error against what actually happened, over a full cycle.</span></li>
              <li><b>Assistants</b><span>Groundedness and citation quality: is the answer supported by the source it cites.</span></li>
              <li><b>Agents</b><span>Task completion, and the rate of interventions and errors along the way.</span></li>
            </ul>
            <p className="acc-note">The technical metric is not the point. Retrieval quality matters because it moves bookings; forecast error matters because it moves stock. We tie each system to the business number it is meant to move and track both.</p>
          </details>
          <details className="acc">
            <summary>What we will not do</summary>
            <p className="acc-note">Present a demo on a curated dataset as evidence. Publish a number that was not measured. Widen autonomy because the calendar says so. Or scope a programme across eight systems and call it a pilot. One narrow path can be tested against real cases; eight cannot.</p>
          </details>
        </div>
      </section>

      <section className="sec marked" id="estate" style={{ background: 'var(--lilac2)' }}>
        <div className="wrap">
          <p className="q">What will your CTO ask?</p>
          <h2 className="big">Your estate, your controls, your call.</h2>
          <div className="twocol">
            <div>
              <p className="lede">Five questions every technology lead asks before this goes anywhere near production. Short answers, then the detail.</p>
            </div>
            <div className="accs">
              <details className="acc" open>
                <summary>Does it run in our estate, under our identity and access controls?</summary>
                <p className="acc-note">Yes, always. Your cloud tenancy, your identity provider, your access policies, with observability and cost controls from the first build.</p>
              </details>
              <details className="acc">
                <summary>Does our data leave?</summary>
                <p className="acc-note">Only if you choose a pattern where it does. Where data must not leave, we use a private model deployment or self-hosted open-weight models, where you have the compute to run them.</p>
              </details>
              <details className="acc">
                <summary>Can the model see things it should not?</summary>
                <p className="acc-note">No. Hosting stops data leaving; it does nothing to stop the wrong data arriving, so that is handled separately: permissions enforced at retrieval, sensitive fields redacted or excluded, and tools with their own permissions. Only approved sources are indexed.</p>
              </details>
              <details className="acc">
                <summary>Are we locked in to a model or a vendor?</summary>
                <p className="acc-note">No. Models are chosen per task and can be swapped. The evaluation harness that proves a swap is safe is yours to keep.</p>
              </details>
              <details className="acc">
                <summary>Can we see what it did, and what it cost?</summary>
                <p className="acc-note">Yes. Auditable telemetry appropriate to the sensitivity of the system, and cost controls per model, from day one. Handover assumes you will own it: run-books, monitoring, the evaluation harness. Dependency on us is not the aim.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="oversight">
        <div className="wrap">
          <p className="q">How much does it do on its own?</p>
          <h2 className="big">You decide. The evidence moves the dial.</h2>
          <ol className="levels">
            <li><span className="n">1</span><div><b>The system informs.</b> A person decides and acts.</div></li>
            <li><span className="n">2</span><div><b>The system proposes.</b> A person approves each one.</div></li>
            <li><span className="n">3</span><div><b>The system acts on low-risk work.</b> A person reviews the exceptions.</div></li>
            <li><span className="n">4</span><div><b>The system acts within policy.</b> It stops and hands over at the edge.</div></li>
          </ol>
          <p className="rule">Where a system sits depends on how well it has measured and on what a mistake would cost: the damage, how fast you would notice, and whether it can be undone. Earned by evidence, bounded by consequence.</p>
        </div>
      </section>

      <section className="sec" id="stack" style={{ background: 'var(--lilac2)' }}>
        <div className="wrap">
          <p className="q">What do you build with?</p>
          <h2 className="big">We pick per task, and we will tell you why.</h2>
          <p className="lede" style={{ marginTop: '16px' }}>One model for long-document reasoning, another for cheap high-volume classification, an open model where data cannot leave your environment and you have the compute to run it. The choice is part of the work, not a house preference.</p>
          <div className="grid3x">
            <div><p className="k">Foundation models</p><p>Claude, GPT, Gemini, and open-weight models including Llama, Mistral and Qwen.</p></div>
            <div><p className="k">Access and hosting</p><p>Direct APIs, plus Azure AI, AWS Bedrock and Google Vertex where the model must sit inside your existing cloud contract. Self-hosting via Ollama or vLLM.</p></div>
            <div><p className="k">Retrieval and knowledge</p><p>Embeddings from OpenAI, Cohere and Voyage. Vector stores including pgvector, Pinecone, Weaviate and Qdrant. LangChain, LlamaIndex, or plain code.</p></div>
            <div><p className="k">Agents and orchestration</p><p>Anthropic and OpenAI agent SDKs, LangGraph, CrewAI, and platform-native agents such as Agentforce and Copilot Studio.</p></div>
            <div><p className="k">Evaluation and observability</p><p>Langfuse, LangSmith, Braintrust, Promptfoo, Arize. This is how the measurement claim is kept.</p></div>
            <div><p className="k">Classical ML</p><p>scikit-learn, XGBoost, Prophet, Python and SQL. Propensity, churn and forecasting are mostly this, not language models.</p></div>
          </div>
        </div>
      </section>

      <section className="sec cta2">
        <div className="wrap">
          <div className="ctabox">
            <div className="ctatext">
              <p className="q">Where do I start?</p>
              <h2>Any of that need checking?</h2>
              <p>Send us the questions your team would ask. We will answer them properly rather than send a capability deck.</p>
              <div className="acts">
                <a className="btn btn-a" href="/contact">Contact us <span className="arw"><svg viewBox="0 0 12 12"><path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg></span></a>
                <a className="btn btn-o" href="/work">See our work</a>
              </div>
            </div>
            <div className="hmos" aria-hidden="true">
              <div className="m-ph tall"><img src="/img/office-tablet.jpg" alt="" /></div>
              <div className="m-ph wide"><img src="/img/office-smile.jpg" alt="" /></div>
              <div className="m-amber"></div>
              <div className="m-purple"><svg viewBox="0 0 36 34" aria-hidden="true"><rect x="4" y="12" width="28" height="5" rx="2.5" /><rect x="4" y="21" width="16" height="5" rx="2.5" /></svg></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
