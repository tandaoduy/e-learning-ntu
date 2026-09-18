import Link from 'next/link';

type Course = { id: string; title: string; description: string };

async function getCourses(): Promise<Course[]> {
  const url = process.env.API_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
  try { const res = await fetch(`${url}/api/v1/courses`, { cache: 'no-store' }); return res.ok ? (await res.json()).data : []; } catch { return []; }
}

export default async function Home() {
  const courses = await getCourses();
  return <main className="mx-auto max-w-6xl px-6 py-16"><section className="rounded-3xl bg-gradient-to-br from-indigo-700 to-violet-700 p-10 text-white sm:p-16"><p className="text-xs font-bold tracking-[0.2em]">NTU E-LEARNING</p><h1 className="mt-4 max-w-2xl text-4xl font-bold sm:text-6xl">Học tập, theo cách của bạn.</h1><p className="mt-5 max-w-xl text-indigo-100">Nền tảng học trực tuyến sẵn sàng để phát triển các khóa học đầu tiên.</p><Link href="/components" className="mt-8 inline-block rounded-lg bg-white px-4 py-2 font-semibold text-indigo-700">Xem component library</Link></section><section className="mt-14"><h2 className="text-2xl font-bold">Khóa học mới nhất</h2>{courses.length ? <div className="mt-5 grid gap-4 md:grid-cols-3">{courses.map((course) => <article key={course.id} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><h3 className="font-bold">{course.title}</h3><p className="mt-2 text-slate-600">{course.description}</p></article>)}</div> : <p className="mt-5 rounded-xl bg-white p-6 text-slate-600 shadow-sm ring-1 ring-slate-200">Chưa có khóa học nào. Hãy tạo khóa học qua API để bắt đầu.</p>}</section></main>;
}
