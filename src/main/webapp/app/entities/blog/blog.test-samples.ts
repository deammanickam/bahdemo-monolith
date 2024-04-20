import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 8944,
  name: 'invigorate twitter ha',
  handle: 'periodic usually',
};

export const sampleWithPartialData: IBlog = {
  id: 3452,
  name: 'after helpfully excitedly',
  handle: 'fortunately',
};

export const sampleWithFullData: IBlog = {
  id: 7689,
  name: 'tremendously against french',
  handle: 'seep whoever lumberman',
};

export const sampleWithNewData: NewBlog = {
  name: 'desensitize calmly',
  handle: 'if',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
