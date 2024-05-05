'use client';
import { Button, Htag, Paragraph, Rating, Tag } from './components';
import { withLayout } from './layout/Layout';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log('counter', counter);
  }, [counter]);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appereance="primary"
        arrow="right"
        onClick={() => setCounter(counter + 1)}
      >
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
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </>
  );
}

export default withLayout(Home);
