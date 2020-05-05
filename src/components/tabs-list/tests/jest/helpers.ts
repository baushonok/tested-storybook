import { RenderResult } from "@testing-library/react";

export const getToggleList = (renderedComponent: RenderResult) =>
  renderedComponent.getByTestId("tab-toggle-list");

export const getToggleByIndex = (
  renderedComponent: RenderResult,
  index: number
) =>
  getToggleList(renderedComponent).getElementsByClassName("tab-toggle")[
    index
  ] as HTMLElement;

export const getSectionsList = (renderedComponent: RenderResult) =>
  renderedComponent.getByTestId("tab-content-list");

export const getSectionByIndex = (
  renderedComponent: RenderResult,
  index: number
) =>
  getSectionsList(renderedComponent).getElementsByClassName("tab-content")[
    index
  ];
