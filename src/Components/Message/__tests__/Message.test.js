import { render, screen } from "@testing-library/react";
import { Message } from "../Message";

describe("Message component test", () => {
  it("render author name if not human", () => {
    render(<Message author="bot" text="some text" />);
    const el = screen.getByText("bot: some text");
    expect(el).toBeDefined();
  });
  it("matches snapshot", () => {
    const component = render(<Message author="bot" text="some text" />);
    expect(component).toMatchSnapshot();
  });
});
