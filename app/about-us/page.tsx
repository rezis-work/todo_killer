export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Rezi Karanadze
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            The developer behind this productivity app
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900">The Developer</h2>
            <p className="mt-4 text-gray-600">
              Rezi Karanadze is a passionate web developer who created this task
              management application to help people organize their work and
              boost productivity. With expertise in modern web technologies,
              Rezi built this app to provide a simple yet powerful solution for
              managing daily tasks.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900">The App</h2>
            <p className="mt-4 text-gray-600">
              This todo application is designed to help you stay organized and
              focused. With features like task creation, updates, and
              categorization, it provides everything you need to manage your
              workflow efficiently. The clean interface and intuitive design
              make it easy to use while still offering powerful functionality
              under the hood.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Technology Stack
            </h2>
            <p className="mt-4 text-gray-600">
              Built with Next.js, TypeScript, and Supabase, this application
              leverages modern web technologies to deliver a fast, secure, and
              reliable experience. The app features server-side rendering for
              performance, type safety for reliability, and real-time database
              capabilities for seamless synchronization across devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
