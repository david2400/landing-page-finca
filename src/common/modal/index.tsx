import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { IModalProps } from '@interfaces/modal';

export const Modal = ({ header, children, open, setOpen }: IModalProps) => {
  return (
    <Dialog
      header={header}
      visible={open}
      maximizable
      style={{ width: '70vw' }}
      onHide={() => setOpen(!open)}
    >
      {children}
    </Dialog>
  );
};
