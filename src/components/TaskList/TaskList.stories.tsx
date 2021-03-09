import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TaskList, Props } from './TaskList';

import { taskTemplate } from '../Task/Task.stories';

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
} as Meta<Props>;

const Template: Story<Props> = args => <TaskList {...args} />;

const tasksTemplate: Props['tasks'] = [
  { ...taskTemplate, id: '1', title: 'Task 1' },
  { ...taskTemplate, id: '2', title: 'Task 2' },
  { ...taskTemplate, id: '3', title: 'Task 3' },
  { ...taskTemplate, id: '4', title: 'Task 4' },
  { ...taskTemplate, id: '5', title: 'Task 5' },
  { ...taskTemplate, id: '6', title: 'Task 6' },
];

export const Default = Template.bind({});
Default.args = {
  tasks: tasksTemplate,
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...tasksTemplate.slice(0, 5),
    {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED',
      updatedAt: new Date(2018, 0, 1, 9, 0),
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
