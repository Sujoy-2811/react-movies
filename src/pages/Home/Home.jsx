import { useQuery } from "@tanstack/react-query";
import http from "../../api/http";
import Card from "../../components/ui/Card";

function Home() {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["getTrending"],
    queryFn: http.getTrending,
  });

  if (isPending) return <div>Waiting</div>;
  if (!isPending && isError) return <div>Error</div>;
  console.log(data.results[0]);
  return (
    <div>
      <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-8">
        {data.results.map((item) => (
          <Card key={item.id} content={item} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
