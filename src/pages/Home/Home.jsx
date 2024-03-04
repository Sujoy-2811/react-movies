import { useQuery } from "@tanstack/react-query";
import http from "../../api/http";
import Card from "../../components/ui/Card";

function Home() {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["getTrending"],
    queryFn: http.getTrending,
  });
  if (isError) {
    console.log(error.message);
  }

  if (isPending)
    return (
      <div className=" w-full text-center text-gray-300  ">
        <span className="text-red-100 font-bold ">Loading</span> [There is an
        issue with the API in India. Please consider using a VPN as a temporary
        solution.]
      </div>
    );
  if (!isPending && isError)
    return (
      <div className="w-full text-center text-gray-300 ">
        <span className="text-red-100  font-bold">Error</span> [There is an
        issue with the API in India. Please consider using a VPN as a temporary
        solution.]
      </div>
    );
  return (
    <div>
      <ul className="grid grid-cols-2 gap-5 sm:grid-cols-5 sm:gap-8">
        {data.results.map((item) => (
          <Card key={item.id} content={item} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
