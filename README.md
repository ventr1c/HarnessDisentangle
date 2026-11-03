# Project page: Harness Updating Is Not Harness Benefit (EMNLP 2026)

Static page: `index.html`, `style.css`, `app.js`, and figures in `static/`. No build step.

## Preview locally

```bash
python3 -m http.server 8765 --bind 127.0.0.1 --directory .
```

Then open http://localhost:8765/. Opening `index.html` straight from disk also works in most browsers.

Live at https://ventr1c.github.io/EvolveBench/ (GitHub Pages, served from the root of `main`).

## Links

- **arXiv / Paper buttons** link to arXiv abs [2605.30621](https://arxiv.org/abs/2605.30621) and the ACL Anthology page [2026.emnlp-main.2326](https://aclanthology.org/2026.emnlp-main.2326/).

## Figures

Rendered from the paper's PDFs (`EvolveBench-EMNLP2026-Amazon/figures/`) as PNG:

| static/ | source PDF |
|---|---|
| teaser_findings.png | fig_intro_findings_v2.pdf |
| overview_harness_self_evolution.png | fig_overview_harness_self_evolution.pdf |
| evolver_delta_update.png | evolver_side_delta_update.pdf |
| evolver_case_flink.png | evolver_side_case.pdf |
| agent_dominance_mcp.png | evolver_side_agent_dominance_mcp_v2.pdf |
| benefit_vs_base_swe.png | solver_side_delta_harness_swe_v2.pdf |
| agent_failure_modes.png | solver_side_failure.pdf |

Tables 1–3 on the page are HTML copies of the paper's Tab. 1–3 (Sec. 5.3).

## License

The page template is adapted from the [WMRL project page](https://xiyuanyang45.github.io/WMRL/), released under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The adapted template (HTML structure, `style.css`, `app.js`) is shared under the same license; keep the footer attribution.
