import Faq from "../components/Faq";
import { faq } from "../data/AllData";

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Faq Component", () => {
  test("main header should render correctly", () => {
    render(<Faq />);
    const mainHeader = screen.getByRole("heading", {
      level: 3,
    });
    expect(mainHeader).toBeInTheDocument();
  });

  test("title header renders correctly", () => {
    render(<Faq />);
    const titleHeader = screen.getByRole("heading", { level: 2 });
    expect(titleHeader).toBeInTheDocument();
  });

  test("header paragraph renders correctly", () => {
    render(<Faq />);
    const headerParagraph = screen.getByText(
      "Frequently Asked Questions about the car rental booking process on our website: Answers to common concerns and inquiries.",
    );
    expect(headerParagraph).toBeInTheDocument();
  });

  test("first question element renders correctly", () => {
    render(<Faq />);
    const firstQuestionElement = screen.getByText(
      `${faq[0].id}. ${faq[0].question}`,
    );
    expect(firstQuestionElement).toBeInTheDocument();
  });

  test("first answer element renders correctly", () => {
    render(<Faq />);
    const firstAnswerElement = screen.getByText(`${faq[0].answer}`);
    expect(firstAnswerElement).toBeInTheDocument();
  });

  test("second question element renders correctly", () => {
    render(<Faq />);
    const secondQuestionElement = screen.getByText(
      `${faq[1].id}. ${faq[1].question}`,
    );
    expect(secondQuestionElement).toBeInTheDocument();
  });

  test("second answer element renders correctly", () => {
    render(<Faq />);
    const secondAnswerElement = screen.getByText(`${faq[1].answer}`);
    expect(secondAnswerElement).toBeInTheDocument();
  });

  test("third question element renders correctly", () => {
    render(<Faq />);
    const thirdQuestionElement = screen.getByText(
      `${faq[2].id}. ${faq[2].question}`,
    );
    expect(thirdQuestionElement).toBeInTheDocument();
  });

  test("third answer element renders correctly", () => {
    render(<Faq />);
    const thirdAnswerElement = screen.getByText(`${faq[2].answer}`);
    expect(thirdAnswerElement).toBeInTheDocument();
  });

  
});
