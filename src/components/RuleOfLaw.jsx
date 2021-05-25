import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import LawMap from "./LawMap";
import Legend from "./Legend";
import LoadCountriesTask from "../tasks/loadCountriesTask";

const RuleOfLaw = () => {
  const [countries, setCountries] = useState(["Canada"]);

  const load = () => {
      const loadCountriesTask = new LoadCountriesTask();
      loadCountriesTask.load(setCountries);
    }

  useEffect(load,[]);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <LawMap />
          <Legend />
        </div>
      )}
    </div>
  );
};

export default RuleOfLaw;
