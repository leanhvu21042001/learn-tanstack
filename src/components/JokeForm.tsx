import { useState } from 'react'
import { useRouter } from '@tanstack/react-router'
import { addJoke } from '../serverActions/jokesActions'

export function JokeForm() {
    const router = useRouter()
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!question.trim() || !answer.trim() || isSubmitting) return
        
        try {
            setIsSubmitting(true)
            setError(null)
            await addJoke({
                data: { question: question.trim(), answer: answer.trim() },
            })

            // Clear form
            setQuestion('')
            setAnswer('')

            // Refresh data
            router.invalidate()
        } catch (error) {
            console.error('Failed to add joke:', error)
            setError('Failed to add joke. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center space-x-2">
                    <span className="text-red-500">⚠️</span>
                    <span className="text-sm font-medium">{error}</span>
                </div>
            )}
            
            <div className="space-y-4">
                <div>
                    <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                        Question
                    </label>
                    <textarea
                        id="question"
                        placeholder="What's the setup for your joke?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                        rows={3}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                        disabled={isSubmitting}
                    />
                </div>
                
                <div>
                    <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
                        Punchline
                    </label>
                    <textarea
                        id="answer"
                        placeholder="What's the hilarious answer?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                        rows={3}
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                        disabled={isSubmitting}
                    />
                </div>
            </div>
            
            <button
                type="submit"
                disabled={isSubmitting || !question.trim() || !answer.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
            >
                {isSubmitting ? (
                    <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        <span>Adding Joke...</span>
                    </>
                ) : (
                    <>
                        <span>🎭</span>
                        <span>Add Joke</span>
                    </>
                )}
            </button>
        </form>
    )
}