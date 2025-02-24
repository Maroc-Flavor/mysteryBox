import { useState } from 'react';
import { MessageStatus } from '@/types/layout';

export function useMessage() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<MessageStatus>('idle');

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage(text);
    setStatus(type);
    setTimeout(() => {
      setMessage('');
      setStatus('idle');
    }, 3000);
  };

  return { message, status, showMessage };
} 