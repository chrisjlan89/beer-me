import { useQuery } from "@apollo/client";
import styled from "styled-components";
import BREWERIES_WITH_FILTERS from "./lib/theme/GQL/Queries/BreweriesFiltered";

const AppStyles = styled.div`
  width: 100vw;
  display: flex;

  height: 100vh;
  display: flex;
  align-content: center;
  justify-items: center;
  justify-content: center;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .main {
    border: solid 3px yellow;
    overflow: auto;
    width: 80%;
    height: 80vh;
    border-radius: 4px;
    position: relative;
    padding: 1rem;

    box-shadow: rgba(255, 255, 0, 0.2) 0px 7px 29px 0px;

    /* box-shadow: 2px 4px 7px 10px yellow; */

    /* :after {
      width: 4px;
      height: 4px;
      position: absolute;
      padding: 4px;
      border: solid 3px yellow;
    } */
  }

  input {
    padding: 4px;
    border: solid 2px yellow;
    border-radius: 4px;
    background-color: #333;
    color: yellow;
    box-shadow: rgba(255, 255, 0, 0.2) 0px 7px 10px 0px;
  }

  /* .inner {
    border: solid 3px yellow;
    overflow: auto;
    width: 100%;
    height: 76vh;
    padding: 1rem;
    border-radius: 4px;
    position: relative;
  } */
`;

function App() {
  const { data, error, loading } = useQuery(BREWERIES_WITH_FILTERS, {
    variables: {
      state: "New Jersey",
    },
  });
  if (loading) return "Loiadings";
  if (error) return "Error";
  return (
    <AppStyles>
      <div className="main">
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <input></input>
      </div>
    </AppStyles>
  );
}

export default App;
