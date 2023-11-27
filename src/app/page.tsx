import { Button, Htag, Paragraph } from './components';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Htag tag="h1">Текст</Htag>
      <Button appereance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appereance="ghost" arrow="down">
        Кнопка
      </Button>
      <Paragraph size="small">Текст</Paragraph>
    </main>
  );
}
