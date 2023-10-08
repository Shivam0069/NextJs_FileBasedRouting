import { useRouter } from "next/router";

const BlogPage = () => {
  const route = useRouter();
  console.log(route.query);
  return (
    <div>
      <h1>The Blog Page</h1>
    </div>
  );
};
export default BlogPage;
