import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Marketing Suite 🚀
        </h1>
        <p className="text-center text-lg mb-8">
          Complete SEO & Digital Marketing Platform
        </p>
        
        <div className="grid grid-cols-1 md: grid-cols-3 gap-6 mt-12">
          <Link href="/dashboard" className="p-6 border rounded-lg hover:bg-gray-50">
            <h2 className="text-xl font-bold mb-2">📊 Dashboard</h2>
            <p>View your marketing analytics and insights</p>
          </Link>
          
          <Link href="/seo" className="p-6 border rounded-lg hover:bg-gray-50">
            <h2 className="text-xl font-bold mb-2">🔍 SEO Tools</h2>
            <p>Keyword research, backlinks, site audit</p>
          </Link>
          
          <Link href="/content" className="p-6 border rounded-lg hover:bg-gray-50">
            <h2 className="text-xl font-bold mb-2">✍️ Content</h2>
            <p>AI-powered content creation and optimization</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
