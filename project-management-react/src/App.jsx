import Navbar from "./shared/Navbar.jsx";

 const dummyUser = {
    name: "john doe",
    email:"john.doe@example.com"
  }
export default function App() {
  return (
   <>
   <Navbar User={dummyUser} />
   </>
  );
}
