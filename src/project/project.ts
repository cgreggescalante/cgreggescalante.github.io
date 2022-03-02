export class Project {
  title: string;
  uri: string;
  blurb: string;
  description: string;
  image: string;
  featured: boolean;

  constructor(
    private data: Object
  ) {
    const values = Object.values(data);
    this.title = values[0];
    this.uri = values[1];
    this.blurb = values[2];
    this.description = values[3];
    this.image = values[4];
    this.featured = values[5];
  }
}
