
import './app.css'
import { TwitterFollowCard } from './twitterFollowCard'
export function App () {
    // const format = (username) => `@${username}`
    const users = [
      {
      userName: 'GuillermoFreites',
      name: 'Guillermo freites',
      isFollowing:true
      },
      {
      userName: 'pedro',
      name: 'pedro pe',
      isFollowing:true
      },
      {
      userName: 'unknown',
      name: 'unknown',
      isFollowing:false
      },
      {
      userName: 'nath',
      name: 'nath',
      isFollowing:false
      },
    ]
    return(
      
      users.map(user => {
        const {userName, name, isFollowing} = user

        return (
          <TwitterFollowCard
          username={userName}
          key={userName}
          initialIsFollowing={isFollowing} 
           >
            {name}
          </TwitterFollowCard>

        )
      }) 
    )

}