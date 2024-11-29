
import './app.css'
import { TwitterFollowCard } from './twitterFollowCard'
export function App () {
    const format = (username) => `@${username}`
    return(
        <div className='App'>
      <TwitterFollowCard 
        formatUserName={format} 
        username='Guillermo303v' 
        name='Guillermo Freites' 
        // isFollowing={true} 
      />
      <TwitterFollowCard 
        formatUserName={format} 
        username='Pedro' 
        name='Pedro picapiedra' 
        // isFollowing={false}
      />
      <TwitterFollowCard 
        formatUserName={format} 
        username='Nath' 
        name='Nath Espin' 
        // isFollowing={true}
        />
      <TwitterFollowCard 
        formatUserName={format} 
        username='gns95' 
        name='Genesis Salcedo' 
        // isFollowing={true}
        />
      <TwitterFollowCard 
        formatUserName={format} 
        // isFollowing={false}
        />
        </div>
    )

}