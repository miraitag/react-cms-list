export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birthDate: string;
  login: ILogin;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeolocation;
}

export interface IGeolocation {
  lat: string;
  lng: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface ILogin {
  uuid: string;
  username: string;
  password: string;
  md5: string;
  sha1: string;
  registered: string;
}
