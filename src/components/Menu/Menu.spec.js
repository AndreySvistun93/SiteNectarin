import React from "react";
import { shallow } from "enzyme";
import Menu from "./Menu";

describe("Menu", () => {
  const props = {
    data: {
      menuState: false,
      openMenuState: () => {},
      closeMenuState: () => {}
    }
  };
  describe("MenuIsLoading test", () => {
    it("isLoading", () => {
      const nexProps = {
        ...props,
        menuState: true
      };

      const newContainer = shallow(<Menu {...nexProps} />);
      console.log(newContainer.find(".container-menu"));
      expect(newContainer.find(".container-menu"));
    });
  });
});
