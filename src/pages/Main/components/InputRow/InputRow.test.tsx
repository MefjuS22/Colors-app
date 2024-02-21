import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { InputRow } from "./InputRow";
import { afterEach, describe, expect, test, vi } from "vitest";
import { useState } from "react";

let mockSearchParam = "";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useSearchParams: () => {
      const [params, setParams] = useState(
        new URLSearchParams(mockSearchParam)
      );

      const setNewParams = (newParams: string | Record<string, string>) => {
        if (typeof newParams === "string") {
          mockSearchParam = newParams;
          setParams(new URLSearchParams(newParams));
        } else {
          const newSearchParams = new URLSearchParams(mockSearchParam);
          for (const [key, value] of Object.entries(newParams)) {
            newSearchParams.set(key, value);
          }
          mockSearchParam = newSearchParams.toString();
          setParams(newSearchParams);
        }
      };

      return [params, setNewParams];
    },
  };
});

describe("InputRow", () => {
  afterEach(() => {
    cleanup();
    mockSearchParam = "";
  });

  test("updates the search params when the input value changes", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<InputRow />} />
        </Routes>
      </MemoryRouter>
    );
    const input = getByTestId("input-row") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "5" } });

    expect(input.value).toBe("5");

    await waitFor(
      () => {
        expect(mockSearchParam).toContain('id=5');
      },
      {
        timeout: 1000,
      }
    );
  });

  test("removes the id search param when the input value is empty", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<InputRow />}></Route>
        </Routes>
      </MemoryRouter>
    );

    const input = getByTestId("input-row");
    fireEvent.change(input, { target: { value: "" } });

    await waitFor(() => {
      expect(mockSearchParam).toBe("");
    });
  });
});
