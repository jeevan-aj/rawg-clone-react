import useGenere from "../hooks/useGenere"


function GenereList() {
    const {data} = useGenere()
  return (
    <ul>
        {data.map(cur => (
            <li key={cur.id}>{cur.name}</li>
        ))}
    </ul>
  )
}

export default GenereList