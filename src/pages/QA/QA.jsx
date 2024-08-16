import React, { useEffect, useState } from "react";
import Path from "../../components/path/Path";
import { useGetAllQaQuery } from "../../Redux/service/api/qa";
import Wrapper from "./Wrapper";

const paths = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "QA", url: "/qa" },
];

export default function QA() {
  const { data: allQa } = useGetAllQaQuery();
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    setCurrentItem(allQa?.[0].question);
  }, [allQa]);

  function activeAccordion(e) {
    setCurrentItem(e.target.innerText)
  }

  return (
    <div>
      <Path paths={paths} title="QA" />

      <Wrapper>
        {allQa?.map((qa) => (
          <div key={qa.id}>
            <button
              onClick={activeAccordion}
              className={`accordion ${currentItem === qa.question && "active"}`}
            >
              {qa.question}
            </button>
            <div className="panel">
              <p>{qa.answer}</p>
            </div>
          </div>
        ))}
      </Wrapper>
    </div>
  );
}
