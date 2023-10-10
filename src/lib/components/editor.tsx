// @ts-nocheck
import { useEffect } from "react";

import {
  type CellStyle,
  Graph,
  InternalEvent,
  MaxToolbar,
  KeyHandler,
} from "@maxgraph/core";
import { useGraph } from "../hooks/use-graph";

export const MxEditor = () => {
  const [graph, initializeGraph] = useGraph();

  useEffect(() => {
    const container = document.querySelector("#mx-graph-container");
    const toolbarContainer = document.querySelector("#mx-toolbar-container");

    // Disables the built-in context menu
    InternalEvent.disableContextMenu(container);

    initializeGraph(container);
    const toolbar = new MaxToolbar(toolbarContainer);
    const keyHandler = new KeyHandler(graph);

    keyHandler.bindControlKey(45, (e) => {
      console.log(e);
      graph.Clear();
    });

    toolbar.addItem("Save", null, (e) => {
      console.log(e.target);
    });

    toolbar.addItem("Clear", null, (e) => {
      console.log(e.target);
    });

    toolbar.addItem("Import", null, (e) => {
      console.log(e.target);
    });

    toolbar.addItem("Export", null, (e) => {
      console.log(e.target);
    });
  }, []);

  useEffect(() => {
    // Adds cells to the model in a single step
    let parent = graph && graph.getDefaultParent();
    graph &&
      graph.batchUpdate(() => {
        const vertex01 = graph.insertVertex({
          parent,
          position: [10, 10],
          size: [100, 100],
          value: "rectangle",
        });
        const vertex02 = graph.insertVertex({
          parent,
          position: [350, 90],
          size: [50, 50],
          style: {
            fillColor: "orange",
            shape: "ellipse",
            verticalAlign: "top",
            verticalLabelPosition: "bottom",
          },
          value: "ellipse",
        });
        graph.insertEdge({
          parent,
          source: vertex01,
          target: vertex02,
          value: "edge",
          style: {
            edgeStyle: "orthogonalEdgeStyle",
            rounded: true,
          },
        });
      });
  }, [graph]);

  return (
    <>
      <div id="main-container">
        <div id="mx-toolbar-container" style={{ left: 25, top: 25 }} />
        <div id="mx-graph-container" />
      </div>
    </>
  );
};
