import { Link, useLocation, useNavigate } from "react-router-dom";


function Track({ guestEmail }) {
    const [visited, setVisited] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const visitadAs = localStorage.getItem("visitedAs");
        if (!visitadAs) {
          navigate("/login");
        }
      }, []);

      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }, []);

      // check if this user has visited before
      useEffect(() => {
        const visitedBefore = localStorage.getItem("visitedGerayo");
        if (visitedBefore) {
          setVisited(true);
        }
      }, []);
}
