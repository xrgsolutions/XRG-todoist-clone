import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, TextInput, Flex, Space } from '@mantine/core';

const AddTask = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        <TextInput placeholder="Task Name" label="Add Task" />
        <Space h="md" />
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
