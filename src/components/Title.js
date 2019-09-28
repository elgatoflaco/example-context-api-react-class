import React from "react";
import { AppConsumer } from "../context/example";
export default function Title() {
  return (
    <AppConsumer>
      {context => (<div>
        <h1 className="header__title">{context.data.title}</h1>
        <h1 className="header__title">{context.data.emojy}</h1>
        <button onClick={context.updateTitle}>
            Add Emojy to context
          </button>
      </div>)}
    </AppConsumer>
  );
}
