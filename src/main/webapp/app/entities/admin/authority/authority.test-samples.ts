import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '424eb62a-04ba-42af-b6c0-16e634877b22',
};

export const sampleWithPartialData: IAuthority = {
  name: '8097bdd0-2f11-4874-8d9d-98aac6c87fe1',
};

export const sampleWithFullData: IAuthority = {
  name: 'fbb6b05a-b838-4e4d-93b3-924a0e7c5c93',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
