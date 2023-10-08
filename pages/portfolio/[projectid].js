import { useRouter } from "next/router";
export default function PortfolioProjectPage() {
  const route = useRouter();

  const id = route.query.projectid;
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
