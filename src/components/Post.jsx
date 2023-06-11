import { Comment } from './Comment';
import { Avatar } from "./Avatar"

import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/landev01.png" />
                    <div className={styles.authorInfo}>
                        <strong>Alan Gonçavles</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='10 de junho às 12:36:15' dateTime="2023-06-10 12:36:15">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera 😁</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ab ad et autem? Tempore delectus minima similique aliquam voluptate impedit eos, deserunt vero doloribus, facere veniam. Ullam accusantium hic laudantium!</p>

                <p>👉🏻{' '}<a href="#">alan.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw </a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentario'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}