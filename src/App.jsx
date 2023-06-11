import { Header } from "./components/Header";
import { Post } from "../src/components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Alan Gonçalves"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, beatae provident! Et officiis vero nemo fuga sunt at officia, quos, commodi nam omnis eos aspernatur aliquam sapiente laborum rerum voluptatum?"
          />
          <Post 
            author="Diego Fernandes" 
            content="Me ensinando" 
          />
        </main>
      </div>
    </div>
  );
}
