import React from 'react';

export interface Props {
  task: {
    id: string;
    title: string;
    state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
    updatedAt: Date;
  };
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

export const Task: React.VFC<Props> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
          type="checkbox"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          placeholder="Input title"
          readOnly={true}
          type="text"
          value={title}
        />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};
