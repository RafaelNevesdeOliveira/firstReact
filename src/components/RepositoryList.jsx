import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "Formulários com ReactJS",
  link: "https://github.com/RafaelNevesdeOliveira",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
