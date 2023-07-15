import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from ".component/Counter";

describe("Counter App", () => {
  it("should render without any error", () => {
    render(<Counter />);
  });

  it("should have add and reduce buttons", () => {
    const { getByTestId } = render(<Counter />);
    const addButton = getByTestId("add-button");
    const reduceButton = getByTestId("reduce-button");

    expect(addButton).toBeInTheDocument();
    expect(reduceButton).toBeInTheDocument();
  });

  it("should have an element with counter value as default (0)", () => {
    const { getByTestId } = render(<Counter />);
    const counterElement = getByTestId("counter-element");

    expect(counterElement).toBeInTheDocument();
    expect(counterElement.textContent).toBe("0");
  });

  it("onClick of ADD, value of Counter should increment by 5", () => {
    const { getByTestId } = render(<Counter />);
    const addButton = getByTestId("add-button");
    const counterElement = getByTestId("counter-element");

    fireEvent.click(addButton);
    expect(counterElement.textContent).toBe("5");

    fireEvent.click(addButton);
    expect(counterElement.textContent).toBe("10");
  });

  it("onClick of REDUCE, the value of Counter should decrement by 5", () => {
    const { getByTestId } = render(<Counter />);
    const reduceButton = getByTestId("reduce-button");
    const counterElement = getByTestId("counter-element");

    fireEvent.click(reduceButton);
    expect(counterElement.textContent).toBe("-5");

    fireEvent.click(reduceButton);
    expect(counterElement.textContent).toBe("-10");
  });
});
