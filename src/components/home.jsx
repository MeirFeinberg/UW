import { Link } from "react-router-dom";

function Home() {

    return (
        <>
          <h1>Home Page</h1>
          <Link to="./Upload" relative="path">Upload a file</Link>
        </>
    )

}

export default Home