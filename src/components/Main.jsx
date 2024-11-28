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
                    {posts.length ? ( // Se ci sono post
                        <div className="row">
                            {posts.map((post) =>
                                post.published ? ( // se published è settata a true,mostro solo i post pubblicati
                                    <div key={post.id} className="col-6">
                                        <Card
                                            image={post.image}
                                            title={post.title}
                                            tags={post.tags}
                                            content={post.content}
                                        />
                                    </div>
                                ) : null // altrimenti non mostra nulla per i non pubblicati
                            )}
                        </div>
                    ) : (
                        <p>No posts available</p> // Se l'array `posts` è vuoto
                    )}
                </div>
            </main>
        </>
    )
}