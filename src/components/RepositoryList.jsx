import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){
  const [repositories, setRepositeries] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())   
    .then(data => setRepositeries(data))
  }, []);

  return (
   <section className="repository-list">
     <h1>Lista de repositórios</h1>
    <ul>
      {repositories.map(repository => {
        return <RepositoryItem key={repository.name} repository={repository}/>
      })}
    </ul>
   </section> 
  )
}
