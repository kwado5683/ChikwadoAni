import React from 'react';
import classNames from 'classnames';

export const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={classNames(
          "w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
