import React from 'react';
import classNames from 'classnames';

export const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={classNames(
          "w-full rounded-md border border-border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition duration-300 bg-background text-foreground placeholder:text-muted-foreground",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
