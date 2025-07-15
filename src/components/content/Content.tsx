import React, { useEffect, useState } from "react";
import Profile from "../profile/Profile";
import Places from "../places/Places";
import type { Items } from "../types/types";
import { config } from "../../utils/configApi";
// import { config } from "../../utils/configApi";
interface ContentProps {
  modalOpen: () => void;
  items: Items[]
  setItems: (items: Items[])=> void
}

const Content: React.FC<ContentProps> = ({ modalOpen, setItems, items }) => {

  useEffect(() => {
    fetch(`${config.baseUrl}/cards`, {
      headers: config.headers,
    })
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        setItems(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
