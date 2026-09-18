import { notFound } from 'next/navigation'; import { ComponentShowcase } from '../../../components/TestPage/ComponentShowcase'; import { componentNames, type ComponentName } from '../../../components/TestPage/component-names';
export function generateStaticParams() { return componentNames.map((component) => ({ component })); }
export default function ComponentPage({ params }: { params: { component: string } }) { if (!componentNames.includes(params.component as ComponentName)) notFound(); return <ComponentShowcase component={params.component as ComponentName} />; }
