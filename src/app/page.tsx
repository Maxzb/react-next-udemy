import { Button, Htag, Paragraph, Tag } from './components';
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
      <Tag size="small" color="primary">
        primary
      </Tag>
      <Tag size="middle" color="red">
        red
      </Tag>
      <Tag size="small" color="green">
        green
      </Tag>
      {/* <Tag></Tag> */}
      {/* <Tag></Tag> */}
    </main>
  );
}
