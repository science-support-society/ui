import React from "react";
import { shallow, mount } from "enzyme";
import { IntlProvider, defineMessages } from "react-intl";

import RadioOption from "../index";

describe("<RadioOption />", () => {
  it("should render default language messages", () => {
    const defaultEnMessage = "someContent";
    const message = defineMessages({
      enMessage: {
        id: "boilerplate.containers.LocaleToggle.en",
        defaultMessage: defaultEnMessage,
      },
    });
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <RadioOption value="en" message={message.enMessage} />
      </IntlProvider>
    );
    expect(renderedComponent.contains(<RadioOption value="en" message={message.enMessage} />)).toBe(true);
  });

  it("should display `value` when `message` is absent", () => {
    const renderedComponent = mount(
      <IntlProvider locale="de">
        <RadioOption value="abc" />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toBe("abc");
  });
});
