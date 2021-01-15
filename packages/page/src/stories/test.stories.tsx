import Test from '../pages/test';

const testMock = {
  id: 3,
  author: 'Dave Canterbury',
  company: 'Bushcraft 101',
  content: 'David Michael Canterbury born September 19, 1963 is a survival expert'
}

const Story = (props) => <Test {...props} />

// Here we export a variant of the default template passing props
export const TestStory = Story.bind({})
TestStory.args = {
  article: testMock,
};

// Here we export a variant of the default template passing props
export const EmptyTestStory = Story.bind({})
EmptyTestStory.args = {
  article: null,
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Test',
  component: Test,
  argTypes: {
  },
};
