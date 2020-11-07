import React from "react";
import PropTypes from "prop-types";
import CharacterItem from "./CharacterItem.jsx";
import Spinner from "../ui/Spinner.jsx";

function CharacterGrid({ items, isLoading }) {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
}

CharacterGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
};

export default CharacterGrid;
