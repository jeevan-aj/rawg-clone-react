import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100" >
      <h1>This use useNavigation</h1>
      <p>if you clik this button this will redirect to home</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate('/')
        }}
      >
        <button className="btn btn-primary">submit</button>
      </form>
    </div>
  );
}

export default Contact;
