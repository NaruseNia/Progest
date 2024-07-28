import { ColorModeProvider, ColorModeScript, createLocalStorageManager } from "@kobalte/core";
import { Route, Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import { Root } from "~/pages/Root";

export const App = () => {
  const storageManager = createLocalStorageManager("vite-ui-theme");
  return (
    <Router root={(props) => (
      <>
        <ColorModeScript storageType={storageManager.type} />
        <ColorModeProvider storageManager={storageManager}>
          <Suspense fallback={null}>{props.children}</Suspense>
        </ColorModeProvider>
      </>
    )}>
      <Route path="/" component={Root} />
    </Router>
  );
};
