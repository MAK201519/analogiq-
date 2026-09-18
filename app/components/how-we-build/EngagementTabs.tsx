"use client";

import { useState } from "react";

const MARK = (
  <svg viewBox="0 0 36 34" aria-hidden="true">
    <rect x="4" y="12" width="28" height="5" rx="2.5" />
    <rect x="4" y="21" width="16" height="5" rx="2.5" />
  </svg>
);

export default function EngagementTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="tabs" id="engtabs">
      <div className="tablist" role="tablist">
        <button className={active === 0 ? "on" : undefined} data-t="0" onClick={() => setActive(0)}>
          Assess<small>Weeks 1 to 3</small>
        </button>
        <button className={active === 1 ? "on" : undefined} data-t="1" onClick={() => setActive(1)}>
          Build<small>Weeks 4 to 10</small>
        </button>
        <button className={active === 2 ? "on" : undefined} data-t="2" onClick={() => setActive(2)}>
          Scale<small>Week 11 onwards</small>
        </button>
      </div>
      <div className="tabpanels">
        <div className={`tabpanel${active === 0 ? " on" : ""}`}>
          <div>
            <h3>Opportunity assessment</h3>
            <ul className="bul">
              <li>Workshops with the people doing the work, not just the sponsor</li>
              <li>A map of the process as it runs and the data as it is</li>
              <li>Ideas ranked for value, data readiness and risk</li>
              <li>The measure of success agreed and written down</li>
            </ul>
          </div>
          <div className="tabtile amber">{MARK}</div>
        </div>
        <div className={`tabpanel${active === 1 ? " on" : ""}`}>
          <div>
            <h3>The first thin line</h3>
            <ul className="bul">
              <li>One process, end to end, on your data, inside your estate</li>
              <li>Tested offline against your real cases</li>
              <li>Shadow-run beside the current process where the decision matters</li>
              <li>Live, within agreed limits</li>
            </ul>
          </div>
          <div className="tabtile lilac">{MARK}</div>
        </div>
        <div className={`tabpanel${active === 2 ? " on" : ""}`}>
          <div>
            <h3>Run and scale</h3>
            <ul className="bul">
              <li>Monitoring, iteration and training your team to own it</li>
              <li>Another source, another process, another degree of autonomy</li>
              <li>Each on top of something already running</li>
              <li>Each only when the evidence has earned it</li>
            </ul>
          </div>
          <div className="tabtile purple">{MARK}</div>
        </div>
      </div>
    </div>
  );
}
