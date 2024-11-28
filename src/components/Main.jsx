import Card from './Card/Card.jsx'

export default function Main() {
    return (
        <>
            <main>
                <div className='container'>
                    <h1 className='page-title'>Il mio blog</h1>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Card />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}