import style from './Card.module.css'
import placeHodelrImage from '../../assets/Img/600x400_placeholder.jpg'
import Button from '../ui/Button/Button.jsx'

export default function Card({ id, title = '', image, content = '', tags = [], published }) {
    // const joinedTags = tags.join('')

    return (
        <>
            <div className="container">
                <div className={style.card}>
                    <figure className={style.image}>
                        <img className={style.thumb} src={image || placeHodelrImage} alt="" />
                    </figure>
                    <div className={style.body}>
                        <h3 className={style.title}>{title}</h3>
                        <p className={tags}>{tags}</p>
                        <p className={style.description}>{content}</p>
                        <Button />
                    </div>
                </div>
            </div>
        </>
    )
}