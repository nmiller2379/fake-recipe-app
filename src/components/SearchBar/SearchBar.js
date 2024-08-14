import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ onChange, onClick }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes..."
        onChange={onChange}
      />
      <Button onClick={onClick}>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </div>
  );
}
