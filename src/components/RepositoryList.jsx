import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name : 'uniforms',
  description : 'Forms in React',
  link: 'https://github.com/uniform/uniform'
};

export function RepositoryList(){
  const [repositeries, setRepositeries] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())   
    .then(data => setRepositeries(data))
  }, []);

  return (
   <section className="repository-list">
     <h1>Lista de repositórios</h1>
    <ul>
      <RepositoryItem repository = { repository }/>
      <RepositoryItem />
      <RepositoryItem />
      <RepositoryItem />
      <RepositoryItem />
    </ul>
   </section> 
  )
}
