export default function TabButton({children}) {
  function handleClick() {
    console.log('clicked from tab button');
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
