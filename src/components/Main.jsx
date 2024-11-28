import Card from './Card/Card.jsx'
import { posts } from '../data/posts.js'

export default function Main() {
    return (
        <>
            <main>
                <div className='container'>
                    <h1 className='page-title'>Il mio blog</h1>
                </div>
                <div className='container'>
                    {
                        posts.length !== 0 ?
                            <div className="row">
                                {posts.map((post) => (
                                    <div key={post.id} className="col-6">
                                        <Card image={post.image} title={post.title} tags={post.tags} content={post.content} />
                                    </div>
                                ))}
                            </div> :
                            <p>No posts available</p>
                    }
                </div>
            </main>
        </>
    )
}