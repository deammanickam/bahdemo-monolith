import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 7999,
  login: '8V',
};

export const sampleWithPartialData: IUser = {
  id: 11138,
  login: 'zcWT',
};

export const sampleWithFullData: IUser = {
  id: 28564,
  login: 'G.4@fx08Y\\cPuy\\gQU\\Fi\\2HD2E',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
