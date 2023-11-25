export default function CoreConcept({ image, title, description }) {
  // {} - id object destracturing instead passing props.image / props.title etc
  return (
    <li>
      <img src={image} alt={description} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
