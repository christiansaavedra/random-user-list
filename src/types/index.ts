interface UserType {
  cell: string;
  dob: { date: string; age: number };
  email: string;
  gender: string;
  id: { value: string };
  location: { state: string; country: string };
  name: { first: string; last: string };
  phone: string;
  picture: { large: string; medium: string; thumbnail: string };
}

export default UserType;
