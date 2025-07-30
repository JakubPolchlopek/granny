type Difficulty = "latwy" | "sredni" | "trudny";

interface Paragraph {
  type: "paragraph";
  content: string;
}

interface Step {
  type: "step";
  title: string;
  content: string;
}

interface Bullet {
  type: "bullet";
  items: string[];
}

interface Image {
  type: "image";
  url: string;
}

type CourseContentItem = Paragraph | Step | Bullet | Image;

export type { CourseContentItem, Difficulty };

export interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  createdAt: string;
  image_url: string;
  content: CourseContentItem[]; // <-- dodane pole
}


export interface DictionaryWord {
  id: string;
  word: string;
  description: string;
  example: string;
  difficulty: Difficulty;
  createdAt: string;
}