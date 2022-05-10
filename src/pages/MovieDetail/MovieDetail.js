import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();
  console.log(params);
  return <div>MovieDetail</div>;
};

export default MovieDetail;
