
import { useState } from "react"

export function TwitterFollowCard ({formatUserName, username = 'unknown', name= 'unknown'}) {

    const [isFollowing, setIsFollowing] = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]

    const sigue = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing ? 'gf-followCard-button is-following' : ' gf-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='gf-followCard'  >
        <header className='gf-followCard-header' >
        <img className='gf-followCard-avatar' alt="avtar" src={`https://unavatar.io/${username}`}/>
        <div className='gf-followCard-info'>
            <strong>
                {name}
            </strong>
            <span className='gf-followCard-info-username' >{formatUserName(username)}</span>
        </div>

        </header>
        <aside>
            <button  className={buttonClassName} onClick={handleClick}  >
               {sigue} 
            </button>
        </aside>

       </article>
    )
}