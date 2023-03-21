import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/리액트 앱입니다/i);
    expect(linkElement).toBeInTheDocument();
});
