import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 22779,
  name: 'denationalize',
};

export const sampleWithPartialData: ITag = {
  id: 9734,
  name: 'quit',
};

export const sampleWithFullData: ITag = {
  id: 13175,
  name: 'dual round',
};

export const sampleWithNewData: NewTag = {
  name: 'upon at',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
