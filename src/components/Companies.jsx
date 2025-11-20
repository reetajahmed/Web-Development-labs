import { companies } from "../data.js";

export default function Companies() {
  return (
    <section className="companies">
      <h2>Trusted by leading companies</h2>
      <div className="company-grid">
        {companies.map((c, i) => (
          <img key={i} src={c.logo} alt={c.name} style={{ height: "40px" }} />
        ))}
      </div>
    </section>
  );
}