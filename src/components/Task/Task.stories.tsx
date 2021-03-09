import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Task, Props } from './Task';

export default {
  component: Task,
  title: 'Task',
} as Meta<Props>;

const Template: Story<Props> = args => <Task {...args} />;

const taskTemplate = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX' as const,
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const Default = Template.bind({});
Default.args = {
  task: taskTemplate,
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...taskTemplate,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...taskTemplate,
    state: 'TASK_ARCHIVED',
  },
};
