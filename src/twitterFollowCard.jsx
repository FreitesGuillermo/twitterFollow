
import { useState } from "react"

export function TwitterFollowCard ({childern,  username, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]
    const webx= () => {
        // Redirigir a x.com con el username proporcionado
        window.location.href = `https://x.com/${username}`;
      };

    const sigue = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing ? 'gf-followCard-button is-following' : ' gf-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='gf-followCard'  >
        <header className='gf-followCard-header' >
        <img className='gf-followCard-avatar' alt="avtar" src={`https://unavatar.io/${username}`} onClick={webx}/>
        <div className='gf-followCard-info'>
            <strong>
                {childern}
            </strong>
            <span className='gf-followCard-info-username' >@{username}</span>
        </div>

        </header>
        <aside>
            <button  className={buttonClassName} onClick={handleClick}  >
               <span className="gf-follow" >{sigue }</span>
               <span className="gf-unfollow" >Dejar de seguir</span>
            </button>
        </aside>

       </article>
    )
}