import React, { useEffect, useState } from "react";
import Profile from "../profile/Profile";
import Places from "../places/Places";
import type { Items } from "../types/types";
import { getInitialCards } from "../api/api";

// import { config } from "../../utils/configApi";
interface ContentProps {
  modalOpen: () => void;
  items: Items[];
  setItems: (items: Items[]) => void;
}

const Content: React.FC<ContentProps> = ({ modalOpen, setItems, items }) => {
  useEffect(() => {
    getInitialCards().then((res) => {
      setItems(res as Items[]);
    });
  }, []);

  return (
    <main className="content">
      <Profile modalOpen={modalOpen} />
      <Places items={items} />
    </main>
  );
};

export default Content;
