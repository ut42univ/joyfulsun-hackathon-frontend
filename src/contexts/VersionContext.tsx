"use client";

import React, { createContext, useState, useContext } from "react";

type VersionContextType = {
  selectedVersion: string;
  setSelectedVersion: React.Dispatch<React.SetStateAction<string>>;
};

export const VersionContext = createContext<VersionContextType>({
  selectedVersion: "",
  setSelectedVersion: () => {},
});

export const VersionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedVersion, setSelectedVersion] = useState("住吉店");

  return (
    <VersionContext.Provider value={{ selectedVersion, setSelectedVersion }}>
      {children}
    </VersionContext.Provider>
  );
};

export const useVersion = () => useContext(VersionContext);
