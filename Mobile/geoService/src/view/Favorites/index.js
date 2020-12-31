import React from "react";
import Headers from "../../components/Headers";

import {
  Container,
  Title,
  Context,
  Services,
  TypeServices,
} from "./styles-components";

export default function Favorites() {
  return (
    <Container>
      <Context>
        <Headers title="Favoritos" />

        <Services>
          <TypeServices></TypeServices>
        </Services>
      </Context>
    </Container>
  );
}
