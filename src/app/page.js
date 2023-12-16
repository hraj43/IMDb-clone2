import axios from "axios";
const API_KEY = process.env.API_KEY;
import Results from "@/components/Results";

export default async function Home({ searchParams }) {
  const genre=searchParams.genre||"fetchTrending"
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };
  let reqOptions = {
    url: `https://api.themoviedb.org/3/${genre==="fetchTopRated"?"movie/top_rated":"trending/all/week"}?api_key=${API_KEY}&language=en-us&page=4`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  // console.log(response.data);
  return <div>
    <Results results={response.data.results}/>
  </div>;
}
