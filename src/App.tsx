import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSwitcher } from "./hooks/useSwitcher";
import { INITIAL_STEP, STEPS } from "./constant";
// Components
import Todo from "./Todo";
import App1 from "./components/App1";
import App2 from "./components/App2";
// Styles
import { AppLayout } from "./components/AppLayout";

const queryClient = new QueryClient();

function App() {
  const { Switcher, AppToggle, Step } = useSwitcher({
    steps: [STEPS.APP1, STEPS.TODO, STEPS.APP2],
    initialStep: INITIAL_STEP,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <AppToggle />
        <Switcher>
          <Step name={STEPS.APP1}>
            <App1 />
          </Step>
          <Step name={STEPS.TODO}>
            <Todo />
          </Step>
          <Step name={STEPS.APP2}>
            <App2 />
          </Step>
        </Switcher>
      </AppLayout>
    </QueryClientProvider>
  );
}

export default App;
