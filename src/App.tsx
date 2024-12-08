import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSwitcher } from "./hooks/useSwitcher";
import { INITIAL_STEP, STEPS } from "./constant";
// Components
import Todo from "./Todo";
import Temp1 from "./components/Temp1";
import Temp2 from "./components/Temp2";
// Styles
import { AppLayout } from "./components/AppLayout";

const queryClient = new QueryClient();

function App() {
  const { Switcher, AppToggle, Step } = useSwitcher({
    steps: [STEPS.TEMP1, STEPS.TODO, STEPS.TEMP2],
    initialStep: INITIAL_STEP,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <AppToggle />
        <Switcher>
          <Step name={STEPS.TEMP1}>
            <Temp1 />
          </Step>
          <Step name={STEPS.TODO}>
            <Todo />
          </Step>
          <Step name={STEPS.TEMP2}>
            <Temp2 />
          </Step>
        </Switcher>
      </AppLayout>
    </QueryClientProvider>
  );
}

export default App;
