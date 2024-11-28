import style from './Card.module.css'
import img from '../../assets/Img/600x400-placeholder.jpg'
import Button from '../ui/Button/Button.jsx'

export default function Card() {
    return (
        <>
            <div className="container">
                <div className={style.card}>
                    <figure className={style.image}>
                        <img className={style.thumb} src={img} alt="" />
                    </figure>
                    <div className={style.body}>
                        <h3 className={style.title}>Titolo del Post</h3>
                        <p className={style.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda molestias quo error alias. Reiciendis, obcaecati quidem voluptatibus laborum animi distinctio cum architecto fuga saepe blanditiis, quisquam minus iure quam temporibus?</p>
                        <Button />
                    </div>
                </div>
            </div>
        </>
    )
}