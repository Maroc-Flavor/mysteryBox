interface StatusMessageProps {
  message: string;
  status: 'success' | 'error';
}

export function StatusMessage({ message, status }: StatusMessageProps) {
  if (!message) return null;
  
  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-xl shadow-lg ${
      status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
    }`}>
      {message}
    </div>
  );
} 