import { Link } from 'react-router-dom'
import hero from '../assets/hero.jpg'
import PropTypes from 'prop-types'

function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            {/* Hero Section */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between py-20">
                    <div className="lg:w-1/2 text-left mb-10 lg:mb-0">
                        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Where Words <span className="text-cyan-400">Come to Life</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Join a vibrant community of storytellers. Share your thoughts, experiences, 
                            and creativity with readers around the world.
                        </p>
                        <div className="flex gap-4">
                            <Link 
                                to="/login"
                                className="bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition duration-300"
                            >
                                Start Writing
                            </Link>
                            <Link 
                                to="/signup"
                                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img 
                            src={hero} 
                            alt="Writing Illustration" 
                            className="rounded-2xl shadow-xl w-full h-auto object-cover hover:shadow-2xl transition-shadow duration-300 opacity-90 hover:opacity-100"
                        />
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-20 border-t border-gray-100">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Platform?</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <FeatureCard 
                            icon="✨"
                            title="Easy to Use"
                            description="Intuitive editor that lets you focus on what matters most - your writing"
                        />
                        <FeatureCard 
                            icon="🎯"
                            title="Reach Your Audience"
                            description="Share your stories with a community of engaged readers"
                        />
                        <FeatureCard 
                            icon="💫"
                            title="Grow Together"
                            description="Connect with fellow writers and build your following"
                        />
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="py-20 bg-gray-50 rounded-3xl my-10">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Writers Say</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <TestimonialCard 
                                quote="The perfect platform for sharing my travel adventures."
                                author="Sarah Mitchell"
                                role="Travel Blogger"
                            />
                            <TestimonialCard 
                                quote="Clean interface, great community. Exactly what I needed."
                                author="David Chen"
                                role="Tech Writer"
                            />
                            <TestimonialCard 
                                quote="Found my creative voice thanks to this amazing platform."
                                author="Emma Thompson"
                                role="Creative Writer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FeatureCard = ({ icon, title, description }) => (
    <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-cyan-400/20 transition duration-300">
        <div className="text-4xl mb-4 text-cyan-400">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
)

FeatureCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

const TestimonialCard = ({ quote, author, role }) => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 hover:border-cyan-400/20 transition duration-300">
        <p className="text-gray-600 dark:text-gray-300 mb-6 italic">&ldquo;{quote}&rdquo;</p>
        <div>
            <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
            <p className="text-cyan-400 text-sm">{role}</p>
        </div>
    </div>
)

TestimonialCard.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
}

export default LandingPage 