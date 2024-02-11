import useGenere from "../hooks/useGenere"


function GenereList() {
    const {genre} = useGenere()
  return (
    <ul>
        {genre.map(cur => (
            <li key={cur.id}>{cur.name}</li>
        ))}
    </ul>
  )
}

export default GenereList