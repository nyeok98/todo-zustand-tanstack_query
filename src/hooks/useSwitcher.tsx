import React, { ReactNode, useState } from "react";

type StepProps = {
  name: string;
  children: ReactNode;
};

type SwitcherProps = {
  children: ReactNode;
};

type Props = {
  steps: string[];
  initialStep: string;
};

export function useSwitcher({ steps, initialStep }: Props) {
  const [step, setStep] = useState<string>(initialStep);

  const AppToggle = () => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {steps.map((step) => {
          return <button onClick={() => setStep(`${step}`)}>{step}</button>;
        })}
      </div>
    );
  };

  const Switcher = ({ children }: SwitcherProps) => {
    const childrenArray = React.Children.toArray(children);

    const targetStep = childrenArray.find(
      (child) => React.isValidElement(child) && child.props.name === step
    );

    if (!targetStep || !React.isValidElement(targetStep)) return null;

    return <>{targetStep}</>;
  };

  // Funnel과 별도로 Step을 반환
  const Step = ({ children }: StepProps) => {
    return <>{children}</>;
  };

  return { Switcher, AppToggle, Step, setStep };
}
