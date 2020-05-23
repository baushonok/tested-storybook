import { RenderResult } from '@testing-library/react';

export const getToggle = (renderedComponent: RenderResult) =>
  renderedComponent.queryByTestId('accordion-toggle');

export const getContent = (renderedComponent: RenderResult) =>
  renderedComponent.queryByTestId('accordion-content');
