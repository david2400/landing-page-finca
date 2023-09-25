import { atom, useAtom } from 'jotai';
import { Modal } from '@common/modal';

export const openModal = atom(false);

export const DataModalVideo = () => {
  const [open, setOpen] = useAtom(openModal);

  return (
    <Modal open={open} setOpen={setOpen}>
      <video className="w-full" autoPlay muted loop>
        <source src="/video/video1.mp4" type="video/mp4" />
      </video>
    </Modal>
  );
};
