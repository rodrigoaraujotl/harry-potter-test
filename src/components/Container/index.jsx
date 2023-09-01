import React, {useState, useEffect} from "react";

import styles from "./styles.module.scss"


const Container = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const respose = await fetch(`https://hp-api.onrender.com/api/characters`)
    .then(response => response.json())
    setCharacters(respose)
  };

  useEffect(() => {
    getCharacters();
  },[]);

  return (
    <div className={styles.contentBox}>
        <ul className={styles.resume}>
        {characters.map((character) => (
            // console.log('character', character)
            <li className={styles.containerMain} key={character.id}>
              <img className={styles.image} src={character.image} alt={character.name} />
              <h2 className={styles.name}>{character.name}</h2>
              <div className={styles.hoverContent}>
                  <p className={styles.dateOfBirth}>{character.dateOfBirth}</p>
                  <p className={styles.house}>{character.house}</p>
                  <p className={styles.patronus}>{character.patronus}</p>
                  <p className={styles.actor}>{character.actor}</p>
              </div>
            </li>
        ))}
        </ul>
    </div>
  );
};

export default Container;