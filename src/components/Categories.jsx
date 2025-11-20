import { categories } from "../data.js";

export default function Categories() {
  return (
    <section>
      <div className="section-title">Learn essential career and life skills</div>
      <div className="grid">
        {categories.map(cat => (
          <div key={cat.id} className="card">
            <img src={cat.image} alt={cat.title} />
            <div className="card-content">
              <h3>{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}