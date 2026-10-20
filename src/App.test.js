import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import axios from "axios";
import App from "./App";
import store from "./Redux/store";

test("renders the storefront at the root route", async () => {
  jest.spyOn(axios, "get").mockResolvedValue({ data: [] });
  window.history.pushState({}, "Home", "/");
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText("Style that speaks for you.")).toBeInTheDocument();
  expect(screen.getByText("The collection")).toBeInTheDocument();
  expect(
    await screen.findByText("No products are available right now.")
  ).toBeInTheDocument();

  axios.get.mockRestore();
});
