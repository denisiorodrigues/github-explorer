import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name : 'uniforms',
  description : 'Forms in React',
  link: 'https://github.com/uniform/uniform'
};

export function RepositoryList(){
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
