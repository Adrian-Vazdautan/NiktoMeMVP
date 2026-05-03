import { useState } from 'react';
import { 
  Container, Paper, Text, Stack, ScrollArea, Group, 
  Button, Textarea, ActionIcon, Avatar, Box 
} from '@mantine/core';
import { IconSend, IconArrowsExchange, IconCircleFilled } from '@tabler/icons-react';

export function Chat() {
  const [message, setMessage] = useState('');

  return (
    // Центрируем контейнер по вертикали и горизонтали
    <Box style={{ 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container size="sm" w="100%" px="xs">
        <Paper 
          shadow="xl" 
          radius="28px" // Сильное скругление для современного вида
          withBorder 
          style={{ 
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          {/* Header */}
          <Group justify="space-between" p="lg" style={{ borderBottom: '1px solid #eee' }}>
            <Stack gap={0}>
              <Text fw={800} size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                NiktoMe
              </Text>
              <Group gap={4}>
                <IconCircleFilled size={8} color="#40C057" />
                <Text size="xs" color="dimmed" fw={500}>Собеседник в сети</Text>
              </Group>
            </Stack>
            
            <Button 
              variant="light" 
              radius="xl" 
              color="gray"
              leftSection={<IconArrowsExchange size={16} />}
              onClick={() => console.log('Searching...')}
            >
              Сменить
            </Button>
          </Group>

          {/* Chat Area */}
          <ScrollArea h={{ base: '50vh', sm: '60vh' }} p="md" offsetScrollbars>
            <Stack gap="md">
              <Group align="flex-start">
                <Avatar radius="xl" color="blue" src={null} alt="AI" />
                <Paper p="sm" radius="0 16px 16px 16px" bg="#f1f3f5">
                  <Text size="sm">Привет! Это новый интерфейс NiktoMeMVP. Как тебе дизайн? ✨</Text>
                </Paper>
              </Group>

              <Group justify="flex-end" align="flex-start">
                <Paper p="sm" radius="16px 16px 0 16px" bg="blue" c="white">
                  <Text size="sm">Выглядит свежо! Особенно скругления и градиент.</Text>
                </Paper>
              </Group>
            </Stack>
          </ScrollArea>

          {/* Input Area */}
          <Box p="md" style={{ borderTop: '1px solid #eee' }}>
            <Paper withBorder radius="20px" p="4px" bg="#f8f9fa">
              <Stack gap={0}>
                <Textarea
                  placeholder="Напишите что-нибудь анонимно..."
                  variant="unstyled"
                  minRows={2}
                  maxRows={5}
                  p="sm"
                  value={message}
                  onChange={(e) => setMessage(e.currentTarget.value)}
                />
                <Group justify="flex-end" p="xs">
                  <ActionIcon 
                    size="36px" 
                    radius="xl" 
                    variant="filled" 
                    color="blue"
                    disabled={!message.trim()}
                  >
                    <IconSend size={20} />
                  </ActionIcon>
                </Group>
              </Stack>
            </Paper>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}