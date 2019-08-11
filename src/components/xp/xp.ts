export default interface Xp {
  position: string;
  company: string;
  dates: string;
  location: string;
  context: string;
  tasks: string[];
  note: string[];

  env: Map<string, string>;
}
