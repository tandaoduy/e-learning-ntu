type Course = { id: string; title: string; description: string };

async function getCourses(): Promise<Course[]> {
  const url = process.env.API_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
  try { const res = await fetch(`${url}/api/v1/courses`, { cache: 'no-store' }); return res.ok ? (await res.json()).data : []; } catch { return []; }
}

export default async function Home() {
  const courses = await getCourses();
  return <main><section className="hero"><p className="eyebrow">NTU E-LEARNING</p><h1>Học tập, theo cách của bạn.</h1><p>Nền tảng học trực tuyến sẵn sàng để phát triển các khóa học đầu tiên.</p></section><section><h2>Khóa học mới nhất</h2>{courses.length ? <div className="grid">{courses.map((course) => <article key={course.id}><h3>{course.title}</h3><p>{course.description}</p></article>)}</div> : <p className="empty">Chưa có khóa học nào. Hãy tạo khóa học qua API để bắt đầu.</p>}</section></main>;
}
