export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "default"}</strong>
      <p>{props.repository?.description ?? "none"}</p>
      <a href={props.repository?.link ?? "none "}>Acessar repositórios</a>
    </li>
  );
}
