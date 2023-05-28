import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { BookCard } from "../../components/Card";
import { Link } from "react-router-dom";
import { ROUTE_ADD_BOOK } from "../../routes/route.constants";

export const HomePage = () => {
  return (
    <Container>
      <Link to={ROUTE_ADD_BOOK}>
        <Button>Add</Button>
      </Link>
      <BookCard />
    </Container>
  );
};
