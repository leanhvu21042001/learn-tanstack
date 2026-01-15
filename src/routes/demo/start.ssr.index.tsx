import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/demo/start/ssr/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          SSR Demos
        </h1>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            <Link 
              to="/demo/start/ssr/spa-mode"
              className="block p-6 text-decoration-none"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                  S
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">SPA Mode</h3>
                  <p className="text-gray-600 text-sm">Client-side rendering with single page application behavior</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            <Link 
              to="/demo/start/ssr/full-ssr"
              className="block p-6 text-decoration-none"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                  F
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Full SSR</h3>
                  <p className="text-gray-600 text-sm">Complete server-side rendering with data loading</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            <Link 
              to="/demo/start/ssr/data-only"
              className="block p-6 text-decoration-none"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                  D
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Data Only</h3>
                  <p className="text-gray-600 text-sm">Server-side data loading with client-side rendering</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
