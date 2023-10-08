import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "Shivam", name: "Shivam" },
    {
      id: "ram",
      name: "ram",
    },
  ];
  return (
    <div>
      <h1>The Clients List Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/client/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
