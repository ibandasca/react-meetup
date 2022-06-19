/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import MeetupItem from "./MeetupItem";
import { MeetupsListProvider } from "../../contexts/meetupListContext";

test("<MeetupItem/> renders without crashing", () => {
  const wrapper = shallow(
    <MeetupsListProvider>
      <MeetupItem />
    </MeetupsListProvider>
  );
  expect(wrapper.exists()).toBe(true);
});
