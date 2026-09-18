export const componentNames = ['alert','breadcrumb','loading','card','button','file-card','file-list','file-picker','file-input','date-picker','dialog','radio','checkbox','textarea','avatar','form-group','table','upload','subnav','nav-group','list-group','progress'] as const;
export type ComponentName = typeof componentNames[number];
