"use client";

import React, { createContext, useState, useContext } from "react";

type VersionContextType = {
  selectedVersion: string;
  setSelectedVersion: React.Dispatch<React.SetStateAction<string>>;
  anotherVariable: number;
  setAnotherVariable: React.Dispatch<React.SetStateAction<number>>;
};

export const VersionContext = createContext<VersionContextType>({
  selectedVersion: "",
  setSelectedVersion: () => {},
  anotherVariable: -1,
  setAnotherVariable: () => {},
});

export const VersionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedVersion, setSelectedVersion] = useState("住吉店");
  const [anotherVariable, setAnotherVariable] = useState(7);

  return (
    <VersionContext.Provider
      value={{
        selectedVersion,
        setSelectedVersion,
        anotherVariable,
        setAnotherVariable,
      }}
    >
      {children}
    </VersionContext.Provider>
  );
};

export const useVersion = () => useContext(VersionContext);
