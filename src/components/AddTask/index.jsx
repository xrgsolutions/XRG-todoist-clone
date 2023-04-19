import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, TextInput, Flex } from '@mantine/core';

const AddTask = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={true} onClose={close} withCloseButton={false}>
        <TextInput placeholder="Task Name" label="Add Task" />
        <Flex gap="xs" justify="center" align="center" direction="row">
          <Button>Cancel</Button>
          <Button>Submit</Button>
        </Flex>
      </Modal>

      <Group position="center">
        <Button onClick={open}>+</Button>
      </Group>
    </>
  );
};

export default AddTask;
