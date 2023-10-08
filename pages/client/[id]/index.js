import Link from "next/link";
import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const route = useRouter();
  console.log(route.query);
  const loadProjectHandler = () => {
    route.push("/client/Shivam/projectA"); //We can Come back but for route.replace() we can't come back
  };
  return (
    <div>
      <h1>The Client Project Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};
export default ClientProjectPage;
