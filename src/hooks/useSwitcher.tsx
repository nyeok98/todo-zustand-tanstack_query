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

// 컴포넌트를 반환한다는 점에서 Hook이라기보단 컴포넌트를 만드는 라이브러리에 가깝다.
export function useSwitcher({ steps, initialStep }: Props) {
  const [step, setStep] = useState<string>(initialStep);

  // 토글 버튼을 만드는 컴포넌트
  const AppToggle = () => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {steps.map((step, index) => {
          return (
            <button
              key={`toggle-step-${index}`}
              onClick={() => setStep(`${step}`)}
            >
              {step}
            </button>
          );
        })}
      </div>
    );
  };

  // 각 단계별로 주입되는 컴포넌트를 명시적으로 표현하기 위해 도입
  const Step = ({ children }: StepProps) => {
    return <>{children}</>;
  };

  // 전체 컴포넌트를 관리하는 컴포넌트
  const Switcher = ({ children }: SwitcherProps) => {
    const childrenArray = React.Children.toArray(children);

    const targetStep = childrenArray.find(
      (child) => React.isValidElement(child) && child.props.name === step
    );

    if (!targetStep || !React.isValidElement(targetStep)) return null;

    return <>{targetStep}</>;
  };

  return { Switcher, AppToggle, Step, setStep };
}
