// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { getJokes } from '../serverActions/jokesActions'
import { JokesList } from '../components/JokesList'
import { JokeForm } from '../components/JokeForm'

export const Route = createFileRoute('/')({
  loader: async () => {
    // Load jokes data when the route is accessed
    return getJokes()
  },
  component: App,
})

function App() {
  const jokes = Route.useLoaderData() || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-3">
              DevJokes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The ultimate collection of programming humor. Share laughs, discover gems, and connect with fellow developers through code comedy.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>{jokes.length} jokes shared</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">⭐</span>
                <span>Community driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto py-8 px-4">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Sidebar - Add Joke Form */}
          <div className="lg:col-span-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 sticky top-32 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl text-white font-bold">+</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Share Your Joke</h2>
                <p className="text-gray-600 text-sm">Got a programming joke that'll make developers laugh? Share it with the community!</p>
              </div>
              <JokeForm />
            </div>
          </div>

          {/* Main Content - Jokes List */}
          <div className="lg:col-span-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl">😂</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Latest Jokes</h2>
                      <p className="text-indigo-100 text-sm">{jokes.length} hilarious programming jokes</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center space-x-2 text-indigo-100">
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Live</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <JokesList jokes={jokes} />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200/50 hover:bg-white transition-all duration-200">
                <div className="text-3xl font-bold text-indigo-600 mb-1">{jokes.length}</div>
                <div className="text-sm text-gray-600">Total Jokes</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200/50 hover:bg-white transition-all duration-200">
                <div className="text-3xl font-bold text-purple-600 mb-1">∞</div>
                <div className="text-sm text-gray-600">Laughs Generated</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200/50 hover:bg-white transition-all duration-200">
                <div className="text-3xl font-bold text-cyan-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Fun Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              DevJokes
            </h3>
            <p className="text-gray-400">Making programming fun, one joke at a time</p>
          </div>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <span>Built with ❤️ by developers</span>
            <span>•</span>
            <span>For developers</span>
          </div>
        </div>
      </footer>
    </div>
  );
}