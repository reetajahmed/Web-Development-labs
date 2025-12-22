import { aiCourses } from "../data.js";

export default function AICourses() {
  return (
    <section>
      <div className="section-title">Skills to transform your career and life</div>
      <div style={{ padding: "0 2rem" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>Artificial Intelligence (AI)</h2>
        <div className="grid">
          {aiCourses.map(course => (
            <div key={course.id} className="card">
              <img src={course.image} alt={course.title} />
              <div className="card-content">
                <h3>{course.title}</h3>
                <p>{course.instructor}</p>
                <p>★ {course.rating}</p>
                <p className="price">{course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}