import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard'); // Redirige vers la page "Dashboard"

  return null;
}