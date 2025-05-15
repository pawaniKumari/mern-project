import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='bg-white text-gray-950 dark:text-zinc-200 dark:bg-[rgb(25,25,38)] min-h-screen'>
        {children}
      </div>
    </div>
  );
}
