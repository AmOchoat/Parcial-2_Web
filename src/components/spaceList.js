import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Space from "./space";

function SpacesList(props) {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const url =
      "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
    async function fetchSpaces() {
      return await (await fetch(url)).json();
    }

    async function fetchSaveSpaces() {
      let spaces = await fetchSpaces();
      localStorage.setItem("spaces", spaces);
      setSpaces(spaces);
    }

    if (!navigator.onLine) {
      if (localStorage.getItem("spaces") === null) setSpaces([]);
      else setSpaces(localStorage.getItem("spaces"));
    } else {
      fetchSaveSpaces();
    }
  }, []);

  return (
    <div>
      <h1><FormattedMessage
      id="MyPlaces"
      /></h1>
      <div class="row">
        {spaces.map((s) => (
          <Space key={s.id} onClick={props.spaceClicked} space={s} />
        ))}
      </div>
    </div>
  );
}

export default SpacesList;
