import Faq from "../components/Faq";
import { faq } from "../data/AllData";

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Faq Component", () => {
  test("main header element should render correctly", () => {
    render(<Faq />);
    const mainHeaderElement = screen.getByRole("heading", {
      level: 3,
    });
    expect(mainHeaderElement).toBeInTheDocument();
  });

  test("title header element renders correctly", () => {
    render(<Faq />);
    const titleHeaderElement = screen.getByRole("heading", { level: 2 });
    expect(titleHeaderElement).toBeInTheDocument();
  });

  test("header paragraph element renders correctly", () => {
    render(<Faq />);
    const headerParagraphElement = screen.getByText(
      "Frequently Asked Questions about the car rental booking process on our website: Answers to common concerns and inquiries.",
    );
    expect(headerParagraphElement).toBeInTheDocument();
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

  test("all arrow button elements render correctly", () => {
    render(<Faq />);
    const arrowButtonElements = screen.getAllByRole("button");
    arrowButtonElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  test("arrow button elements quantity is equal to number of questions in the data array", () => {
    render(<Faq />);
    const arrowButtonElements = screen.getAllByRole("button");
    expect(arrowButtonElements.length).toBe(faq.length);
  });
});
