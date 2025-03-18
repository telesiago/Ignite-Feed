import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex beatae quis totam quo quia quas laudantium omnis nobis nihil eius rerum architecto tempora deserunt recusandae, odio sint rem pariatur."
          />
          <Post 
            author="Iago Teles"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex beatae quis totam quo quia quas laudantium omnis nobis nihil eius rerum architecto tempora deserunt recusandae, odio sint rem pariatur."
          />
        </main>
      </div>
    </>
  )
}

export default App
