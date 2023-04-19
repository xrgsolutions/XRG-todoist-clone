import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

const AddTask = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add Task">
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={open}>+</Button>
      </Group>
    </>
  );
};

export default AddTask;
