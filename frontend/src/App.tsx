import { MantineProvider } from '@mantine/core';
import { Chat } from './components/chat/chat'; // Проверь, чтобы файл назывался chat.tsx или Chat.tsx
import '@mantine/core/styles.css';

export default function App() {
  return (
    <MantineProvider>
      <Chat />
    </MantineProvider>
  );
}