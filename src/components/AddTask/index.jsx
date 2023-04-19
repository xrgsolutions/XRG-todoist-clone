import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, TextInput, Flex, Space } from '@mantine/core';
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const [task, setTask] = useState('');

  const onSubmit = () => {
    onAdd(task);
    setTask('');
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        <TextInput
          value={task}
          onChange={(e) => setTask(e.currentTarget.value)}
          placeholder="Task Name"
          label="Add Task"
        />
        <Space h="md" />
        <Flex gap="xs" justify="center" align="center" direction="row">
          <Button onClick={close}>Cancel</Button>
          <Button onClick={onSubmit}>Submit</Button>
        </Flex>
      </Modal>

      <Group position="center">
        <Button onClick={open}>+</Button>
      </Group>
    </>
  );
};

export default AddTask;
