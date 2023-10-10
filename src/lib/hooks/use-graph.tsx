import { Cell, Graph, GraphDataModel, RubberBandHandler } from "@maxgraph/core";
import { GraphConfig } from "../../../types";
import { useEffect, useRef, useState } from "react";
import { useConfig } from "./use-config";

export const useGraph = () => {
  const [graph, setGraph] = useState<Graph>(null!);
  const parent = useRef<Cell>(null!);
  const [config, _] = useConfig();

  const initializeGraph: (
    target: HTMLDivElement,
    config?: GraphConfig | null
  ) => void = (t, c) => {
    let m, g;
    !graph &&
      //setup data model here by manipulating m's constructor
      ((m = new GraphDataModel()),
      (g = new Graph(t, m)),
      //setup graph here by manipulating g
      c
        ? c.rubberband
          ? new RubberBandHandler(g)
          : config?.rubberband
          ? new RubberBandHandler(g)
          : null
        : null,
      setGraph(g));
  };

  useEffect(() => {
    graph && (parent.current = graph.getDefaultParent());
    console.log(graph);
  }, [graph]);

  return [graph, initializeGraph];
};
