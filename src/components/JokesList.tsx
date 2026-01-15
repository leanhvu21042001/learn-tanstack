import { Joke } from '../types'

interface JokesListProps {
    jokes: Joke[]
}

export function JokesList({ jokes }: JokesListProps) {
    if (!jokes || jokes.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">😴</span>
                </div>
                <p className="text-gray-500 text-lg">No jokes found yet!</p>
                <p className="text-gray-400 text-sm mt-2">Be the first to add a hilarious programming joke</p>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {jokes.map((joke, index) => (
                <div
                    key={joke.id}
                    className="group bg-gradient-to-r from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-200"
                >
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {index + 1}
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4">
                                <p className="text-gray-800 font-medium leading-relaxed">{joke.question}</p>
                            </div>
                            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-600 text-lg flex-shrink-0">💡</span>
                                    <p className="text-gray-700 leading-relaxed">{joke.answer}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                        <span>Programming Humor</span>
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                                ❤️
                            </button>
                            <button className="text-gray-400 hover:text-blue-500 transition-colors">
                                📤
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}