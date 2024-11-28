import style from './Card.module.css'
import placeHodelrImage from '../../assets/Img/600x400_placeholder.jpg'
import Button from '../ui/Button/Button.jsx'

export default function Card({ title = '', image, content = '', tags = [] }) {
    // const joinedTags = tags.join('')

    return (
        <>
            <div className="container">
                <div className={style.card}>
                    <figure className={style.image}>
                        <img className={style.thumb} src={image || placeHodelrImage} alt={title} />
                    </figure>
                    <div className={style.body}>
                        <h3 className={style.title}>{title}</h3>
                        {tags.length > 0 && ( // Mostro i tag solo se esistono
                            <div className={style.tags_container}>
                                {tags.map((tag, index) => ( // genero i tag dinamicamente e aggiornabili tramite l'indice
                                    <span
                                        key={index}
                                        className={`${style.tag} ${style[`tag_${tag.toLowerCase()}`]}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        <p className={style.description}>{content}</p>
                        <Button />
                    </div>
                </div>
            </div>
        </>
    )
}