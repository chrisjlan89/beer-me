import { useLazyQuery, useQuery } from "@apollo/client";
import styled from "styled-components";
import BeerGlass from "./components/BeerGlass/BeerGlass";
import BREWERIES_WITH_FILTERS from "./lib/theme/GQL/Queries/BreweriesFiltered";

const AppStyles = styled.div`
  --bg: #deb035;
  --bg2: rgba(222, 176, 53, 0.2)
  width: 100vw;
  display: flex;

  color: var(--bg);

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
    border: solid 3px var(--bg);
    overflow: auto;
    width: 85%;
    height: 85vh;
    border-radius: 4px;
    position: relative;
    padding: 1rem;

    box-shadow: var(--bg2) 0px 7px 29px 0px;
    display: grid;
    grid-template-rows: 1fr 8rem;
    align-content: center;
    justify-content: center

    /* box-shadow: 2px 4px 7px 10px var(--bg); */

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

const StyledButton = styled.button`
  padding: 2rem 4rem;
  color: var(--bg);
  border: solid 4px var(--bg);
  border-radius: 4px;
  background: transparent;
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  transition: 0.4s;
  /* box-shadow: rgba(255, 255, 0, 0.2) 0px 7px 10px 0px; */
  box-shadow: rgba(255, 255, 0, 0.2) 3px 7px 10px 4px;

  :hover {
    cursor: pointer;
    box-shadow: rgba(255, 255, 0, 0.2) 3px 3px 7px 4px;
    transform: scale(0.97);
  }

  :focus {
    outline: none;
  }
`;

function App() {
  const { data, error, loading } = useLazyQuery(BREWERIES_WITH_FILTERS, {
    variables: {
      state: "New Jersey",
    },
  });

  const locateMe = () => {
    console.log("firing??");
    const success = (e) => console.log(e);

    const failure = (e) => console.log(e, "fail");

    navigator.geolocation.getCurrentPosition(success, failure, {
      maximumAge: 60000,
      timeout: 60000,
      enableHighAccuracy: true,
    });
  };
  if (loading) return "Loiadings";
  if (error) return "Error";
  return (
    <AppStyles>
      <div className="main">
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        {/* <input></input> */}
        <div className="where-the-beer-go">
          <BeerGlass />
        </div>

        <div className="button-container">
          <StyledButton onClick={() => locateMe()}> Beer Me</StyledButton>
        </div>
      </div>
    </AppStyles>
  );
}

export default App;
