import { useState, SetStateAction } from "react";
import { GraphConfig } from "../../../types";
export const useConfig: () => [
  Partial<GraphConfig> | null,
  React.Dispatch<SetStateAction<Partial<GraphConfig> | null>>
] = () => {
  const [config, updateConfig] = useState<Partial<GraphConfig> | null>({
    rubberband: true,
  });
  return [config, updateConfig];
};
