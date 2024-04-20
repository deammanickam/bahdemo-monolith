import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 21571,
  title: 'recklessly clutch squeaky',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-04-20T02:15'),
};

export const sampleWithPartialData: IPost = {
  id: 14385,
  title: 'plastic and',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-04-20T03:56'),
};

export const sampleWithFullData: IPost = {
  id: 6220,
  title: 'forenenst gah commune',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-04-20T17:18'),
};

export const sampleWithNewData: NewPost = {
  title: 'retina woof neatly',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-04-20T06:07'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
