import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/fds/i);
    expect(linkElement).toBeInTheDocument();
});
test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/reds/i);
    expect(linkElement).toBeInTheDocument();
});
test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/refsdds/i);
    expect(linkElement).toBeInTheDocument();
});
