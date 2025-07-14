import React, { useEffect, useState } from "react";
import Profile from "../profile/Profile";
import Places from "../places/Places";
import type { Items } from "../types/types";
// import { config } from "../../utils/configApi";
interface ContentProps {
  modalOpen: () => void;
}
const Content: React.FC<ContentProps> = ({ modalOpen }) => {
  const [items, setItems] = useState<Items[]>([]);
  
  const config = {
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-mag-4",
    headers: {
      authorization: "561bff47-1094-4520-9c65-f40457c0b35c",
      "Content-Type": "application/json",
    },
  };

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
