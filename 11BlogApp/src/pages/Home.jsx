import {useState, useEffect} from 'react'
import {Container, PostCard} from '../components'
import appwriteService from '../appwrite/config'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LandingPage from '../components/LandingPage'


function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=>{
        appwriteService.getPosts().then((posts) => {
            if(posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (!authStatus) {
        return <LandingPage />
    }

    if(posts.length === 0) {
        return(
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-3xl font-bold mb-4">Welcome to Your Feed</h1>
                        <p className="text-gray-600 mb-8">No posts yet. Be the first one to share your story!</p>
                        <Link 
                            to="/add-post"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                        >
                            Create Your First Post
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <Container>
                <h1 className="text-3xl font-bold mb-8 text-center">Latest Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div key={post.$id} className="transform hover:scale-105 transition duration-300">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home