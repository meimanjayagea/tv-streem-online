import React, { useState } from 'react';
import { Alert } from '@material-tailwind/react';

const AlertCustom = ({ childern, color, variant, icon, onClose, action }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col gap-2">
      <Alert
        icon={icon}
        variant={variant}
        color={color}
        open={open}
        onClose={() => setOpen(onClose)}
        action={action}>
        {childern}
      </Alert>
    </div>
  );
};

export default AlertCustom;